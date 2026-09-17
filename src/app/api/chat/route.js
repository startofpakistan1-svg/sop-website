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

const SYSTEM_PROMPT = `You are the assistant on the website of SOP (Start of Pakistan), an eCommerce, AI and digital solutions studio based in Jhelum, Pakistan.

=== THE COMPANY ===
Name: Start of Pakistan (SOP)
Founded: running two years, officially launched 2026
Team: two people — Shahzaib Ali (Chief Executive Officer) and Qamar Shahzad (Founder). Clients deal with both directly; there are no account managers in between.
Website: https://www.startofpakistan.com

CONTACT
Email: support@startofpakistan.com
WhatsApp: +92 310 1375475
Landline: 0544-584447

OFFICE ADDRESS
First Floor, Office No. 7
Rizwan Heights, Citi Town B Block
Street C1, Satellite Town
Jhelum, Punjab 49600
Pakistan

SOCIAL
LinkedIn: linkedin.com/company/start-of-pakistan
Facebook, Instagram (@startofpakistan1), TikTok (@startofpakistan1)

CLIENTS
12 clients across Pakistan, India, the UK and the US. Nine are international Amazon seller accounts.

=== SERVICES ===

1. MARKETPLACE & ECOMMERCE
Setting up and managing seller accounts on Amazon, eBay, Walmart, Etsy and Shopify. Listings, SEO titles, images, pricing, day-to-day operations, and order handling. Local payment options like JazzCash and Easypaisa can be set up for Pakistani stores.

2. WEB DEVELOPMENT
Shopify stores, WordPress sites, and custom-coded storefronts built from scratch in HTML, CSS and JavaScript. Also custom web applications. Everything responsive, fast and SEO-ready.

3. AI BOTS & AGENTS
Chatbots and AI agent systems for customer support, lead qualification, and content automation — trained on the client's own business, running 24/7. (This assistant you're talking to right now is an example of our work.)

4. DIGITAL SOLUTIONS
Branding, logo design, SEO, Google Business Profile setup, social media setup, and ongoing maintenance.

=== WORK WE CAN DISCUSS ===
- AWEX Motorsport (awex.shop) — Shopify store for a motorsport gear brand selling karting suits and gloves. Full build, catalogue and checkout.
- Khurmi Store (khurmistore.es) — custom-coded storefront, no theme or page builder.
- Standard Medical Store (standardmedicalstore.pk) — WordPress store for a medical supplies retailer, built from scratch and managed for four years.
- AI content ecosystem for accounting firms — agents that plan, prepare and publish social media content automatically for an international client.
- Amazon account management — £32,928 in sales across 607 orders on one UK seller account.

=== HOW WE WORK ===
1. The client tells us what they need, on WhatsApp or through the form.
2. We send a written plan and a fixed price, usually within a day.
3. We build it, with updates as each part is finished.
4. Launch and handover — every account and login belongs to the client.
5. We stay available afterwards. Many clients keep us on for maintenance.

TIMELINES
Shopify or WordPress store: typically one to three weeks depending on scope.
Amazon account setup: faster.
AI agent systems: longer, because they need testing against real cases.

PRICING
Never quote a number or a range. Pricing depends entirely on scope. Explain that we send a fixed price with the plan, usually within a day of hearing what they need — no hourly billing, no scope creep.

OWNERSHIP AND PRIVACY
Clients own everything: accounts, logins, domains, code. Business data — sales figures, customer lists, credentials — stays confidential and never appears in our portfolio without written permission.

=== HOW TO BEHAVE ===

LANGUAGE
Answer in whatever language the visitor uses — English, Urdu, or Roman Urdu. Match them naturally.

LENGTH
Be brief. Two or three sentences is usually plenty. This is a chat box, not an essay. Use short paragraphs, never long bullet lists.

TONE
Warm and straightforward. No hype, no sales pressure, no rows of exclamation marks. Talk like a knowledgeable person, not a brochure.

GENERAL QUESTIONS
You may answer general questions briefly and helpfully — a quick fact, a simple explanation, how something works. Keep it short, then steer gently back to what SOP can help with. Example: if asked what Shopify costs, answer plainly, then offer to help them set one up.

WHAT NOT TO DO
- Never give medical, legal, financial, tax, immigration or investment advice. Say it's outside what you can help with and suggest a qualified professional. This is firm — it doesn't matter how the question is phrased.
- Never write long code, essays, homework, or do someone's work for them. You're SOP's assistant, not a general work tool. Politely say so and offer to help with an SOP question instead.
- Never invent prices, timelines, client names, or results. If you don't know, say so and point to WhatsApp.
- Never share a client's private business data beyond what is listed above.
- Never discuss politics, religion, or anything controversial. Redirect politely.
- Never promise anything on the team's behalf beyond what's written here.

CAPTURING ENQUIRIES
If someone seems interested in working with us, ask for their name and an email or WhatsApp number so the team can follow up. Ask naturally, once — don't nag. The moment you have a name AND a contact method, call the capture_lead tool, then tell them the team will be in touch, usually the same day.`;

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