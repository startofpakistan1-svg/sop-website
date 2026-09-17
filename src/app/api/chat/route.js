// Server-side only. The API key never reaches the browser.
// Set ANTHROPIC_API_KEY in Vercel → Settings → Environment Variables.

const MODEL = "claude-haiku-4-5-20251001";
const WEB3FORMS_KEY = "d2c6863a-7274-4b69-b3fe-02afd91f87e7";

// --- simple per-IP rate limit so nobody can run up the bill ---
const hits = new Map();
const WINDOW_MS = 60 * 60 * 1000; // 1 hour
const MAX_PER_WINDOW = 30;

function rateLimited(ip) {
  const now = Date.now();
  const record = hits.get(ip) || { count: 0, start: now };

  if (now - record.start > WINDOW_MS) {
    hits.set(ip, { count: 1, start: now });
    return false;
  }
  record.count += 1;
  hits.set(ip, record);
  return record.count > MAX_PER_WINDOW;
}

const SYSTEM_PROMPT = `You are the assistant on the website of SOP (Start of Pakistan), an eCommerce and digital solutions studio based in Jhelum, Pakistan.

ABOUT SOP
- Two people: Shahzaib Ali (CEO) and Qamar Shahzad (Founder). Clients deal with both directly.
- Running two years, officially launched this year.
- 12 clients across Pakistan, India, the UK and the US.

SERVICES
1. Marketplace & ecommerce — setting up and managing seller accounts on Amazon, eBay, Walmart, Etsy and Shopify. Listings, optimisation, day-to-day operations. Currently running Amazon accounts for nine international clients.
2. Web development — Shopify stores, WordPress sites, and custom-coded storefronts built from scratch. Fast, responsive, SEO-ready.
3. AI bots & agents — chatbots and AI agent systems for customer support, lead handling and content automation, trained on the client's own business.
4. Digital solutions — branding, SEO, Google Business Profile setup, ongoing maintenance.

WORK WE CAN TALK ABOUT
- AWEX Motorsport (awex.shop) — Shopify store for a motorsport gear brand selling karting suits and gloves.
- Khurmi Store (khurmistore.es) — custom-coded storefront in HTML, CSS and JavaScript.
- Standard Medical Store (standardmedicalstore.pk) — WordPress store, built and managed for four years.
- AI content ecosystem for accounting firms — agents that plan, prepare and publish social content automatically.
- Amazon account management — £32,928 in sales across 607 orders on one UK seller account.

HOW WORK HAPPENS
1. The client tells us what they need.
2. We send a written plan and a fixed price, usually within a day.
3. We build it, with updates along the way.
4. Launch and handover — every account and login belongs to the client.
5. We stay available afterwards.

TIMELINES
A Shopify or WordPress store usually takes one to three weeks depending on scope. Amazon account setup is faster. AI agent systems take longer because they need testing.

PRICING
Never quote a number. Pricing depends entirely on scope. Say that we send a fixed price with the plan, usually within a day of hearing what they need, and that there is no hourly billing or scope creep.

CONTACT
WhatsApp +92 310 1375475 · support@startofpakistan.com · 0544-584447 · Jhelum, Punjab, Pakistan

HOW TO BEHAVE
- Be brief. Two or three sentences is usually plenty. This is a chat box, not an essay.
- Warm and straightforward. No sales pressure, no hype, no exclamation marks everywhere.
- Answer in whatever language the visitor writes in — English, Urdu, or Roman Urdu. Match them.
- If someone seems interested in working with us, ask for their name and email or WhatsApp number so the team can follow up. Ask naturally, once — don't nag.
- When you have a name AND an email or phone number, call the capture_lead tool. Tell them afterwards that the team will be in touch, usually the same day.
- If you don't know something, say so and point them to WhatsApp. Never invent prices, timelines, client names, or results.
- Never discuss a client's private business data beyond what is listed above.
- Stay on SOP topics. If asked about something unrelated, say politely that you can only help with questions about SOP, and offer to answer one.`;

const TOOLS = [
  {
    name: "capture_lead",
    description:
      "Save an enquiry once the visitor has given their name and at least one contact method. Call this as soon as you have both — do not wait until the end of the conversation.",
    input_schema: {
      type: "object",
      properties: {
        name: { type: "string", description: "The visitor's name" },
        email: { type: "string", description: "Email address, if given" },
        phone: { type: "string", description: "Phone or WhatsApp number, if given" },
        interest: {
          type: "string",
          description:
            "Which service they're interested in, in a few words",
        },
        summary: {
          type: "string",
          description:
            "A short summary of what they need, in your own words — two or three sentences",
        },
      },
      required: ["name", "summary"],
    },
  },
];

async function sendLead(input) {
  try {
    await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        access_key: WEB3FORMS_KEY,
        subject: `New chatbot lead — ${input.name}`,
        from_name: "SOP Website — Chatbot",
        name: input.name,
        email: input.email || "not given",
        phone: input.phone || "not given",
        interest: input.interest || "not specified",
        summary: input.summary,
      }),
    });
    return true;
  } catch {
    return false;
  }
}

async function callClaude(messages) {
  const res = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": process.env.ANTHROPIC_API_KEY,
      "anthropic-version": "2023-06-01",
    },
    body: JSON.stringify({
      model: MODEL,
      max_tokens: 600,
      system: SYSTEM_PROMPT,
      tools: TOOLS,
      messages,
    }),
  });

  if (!res.ok) {
    const detail = await res.text();
    throw new Error(`Claude API ${res.status}: ${detail}`);
  }
  return res.json();
}

export async function POST(req) {
  if (!process.env.ANTHROPIC_API_KEY) {
    return Response.json(
      { error: "The assistant isn't configured yet." },
      { status: 500 }
    );
  }

  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";

  if (rateLimited(ip)) {
    return Response.json(
      {
        reply:
          "You've hit the limit for now. Message us on WhatsApp at +92 310 1375475 and we'll pick it up from there.",
      },
      { status: 429 }
    );
  }

  let body;
  try {
    body = await req.json();
  } catch {
    return Response.json({ error: "Bad request" }, { status: 400 });
  }

  const incoming = Array.isArray(body.messages) ? body.messages : [];

  // keep the conversation short and the cost predictable
  const messages = incoming.slice(-16).map((m) => ({
    role: m.role === "assistant" ? "assistant" : "user",
    content: String(m.content || "").slice(0, 2000),
  }));

  if (!messages.length) {
    return Response.json({ error: "No message" }, { status: 400 });
  }

  try {
    let data = await callClaude(messages);
    let leadSaved = false;

    // handle a tool call, then let Claude write its reply
    if (data.stop_reason === "tool_use") {
      const toolUse = data.content.find((c) => c.type === "tool_use");

      if (toolUse?.name === "capture_lead") {
        leadSaved = await sendLead(toolUse.input);

        messages.push({ role: "assistant", content: data.content });
        messages.push({
          role: "user",
          content: [
            {
              type: "tool_result",
              tool_use_id: toolUse.id,
              content: leadSaved
                ? "Saved. The team has been notified."
                : "Could not save — ask them to message WhatsApp instead.",
            },
          ],
        });

        data = await callClaude(messages);
      }
    }

    const reply = data.content
      .filter((c) => c.type === "text")
      .map((c) => c.text)
      .join("\n")
      .trim();

    return Response.json({
      reply: reply || "Sorry, could you put that another way?",
      leadSaved,
    });
  } catch (err) {
    console.error("Chat error:", err.message);
    return Response.json(
      {
        reply:
          "Something went wrong on our side. Message us on WhatsApp at +92 310 1375475 and we'll help you there.",
      },
      { status: 200 }
    );
  }
}