import Link from "next/link";
import BlogLinks from "@/components/BlogLinks";

export const metadata = {
  title: "AI Automation Agency UK for Small Businesses | SOP",
  description:
    "AI automation for business: content planning and publishing, customer replies, admin, reporting and ecommerce tasks, with human review and a fixed price.",
  alternates: { canonical: "/ai-automation" },
};

/* ---------------------------------------------------------------- */
/*  WHAT WE AUTOMATE — grouped into four phases                       */
/* ---------------------------------------------------------------- */
const phases = [
  {
    no: "01",
    name: "Content planning & publishing",
    lead: "AI content automation that keeps a business visible without someone spending every Monday on it.",
    areas: [
      {
        t: "Planning",
        items: [
          "Content calendar drafted from your brief and your customers' questions",
          "Topic ideas pulled from your website, industry news and seasonal dates",
          "Per-platform formats — LinkedIn, Instagram, Facebook, blog",
          "Plan reviewed and approved by you before anything is written",
        ],
      },
      {
        t: "Creation",
        items: [
          "Posts, captions and short articles drafted in your tone",
          "Variations of one idea for different channels",
          "Image selection or generation briefs",
          "Drafts queued for review, never posted blind",
        ],
      },
      {
        t: "Publishing",
        items: [
          "Scheduling across channels at sensible times",
          "Formatting, resizing and link handling",
          "Basic engagement data fed back into next month's plan",
          "Replies and comments flagged to a person",
        ],
      },
    ],
  },
  {
    no: "02",
    name: "Customer replies & lead handling",
    lead: "Assistants that answer at 2am, sort what comes in, and hand anything real to you.",
    areas: [
      {
        t: "Website & WhatsApp assistants",
        items: [
          "Chatbot trained on your products, policies and FAQs",
          "WhatsApp automated replies for common questions",
          "Order-status and delivery answers",
          "Handover to a person when the bot is out of its depth",
        ],
      },
      {
        t: "Lead qualification",
        items: [
          "Enquiries sorted by what they need and how urgent they are",
          "Routing to the right inbox or person",
          "Follow-up reminders so nothing goes cold",
          "Summaries instead of raw message threads",
        ],
      },
      {
        t: "Support automation",
        items: [
          "First-line replies to repeat questions",
          "Returns and refund requests logged and acknowledged",
          "Escalation rules you set, not the AI",
        ],
      },
    ],
  },
  {
    no: "03",
    name: "Admin, reporting & connecting tools",
    lead: "Workflow automation services for the repetitive work that sits between the tools you already use.",
    areas: [
      {
        t: "Repetitive admin",
        items: [
          "Data moved between spreadsheets, CRMs and email without retyping",
          "Documents drafted from templates and your data",
          "Reminders, chasers and status updates sent on schedule",
          "Inbox triage — sorted, summarised, flagged",
        ],
      },
      {
        t: "Reporting & alerts",
        items: [
          "Weekly or monthly reports generated from your sources",
          "Plain-English summaries, not just charts",
          "Alerts when a number moves outside a range you set",
        ],
      },
      {
        t: "Integrations",
        items: [
          "Connecting tools that don't talk to each other",
          "Forms, calendars, email, CRM, accounting, storage",
          "Custom scripts where no off-the-shelf connector exists",
        ],
      },
    ],
  },
  {
    no: "04",
    name: "Ecommerce tasks for Amazon & Shopify sellers",
    lead: "Business automation for the daily work of running a store — the part we already do by hand for our own clients.",
    areas: [
      {
        t: "Listings & inventory",
        items: [
          "Listing and inventory update automation",
          "Stock alerts before a best seller runs out",
          "Price and Buy Box monitoring with alerts",
          "Product copy drafts for new listings",
        ],
      },
      {
        t: "Customer service",
        items: [
          "Buyer message triage and draft replies",
          "Review and feedback monitoring",
          "Order problem summaries for the person handling them",
        ],
      },
      {
        t: "Reporting",
        items: [
          "Sales, ad spend and ACoS pulled into one weekly summary",
          "Shopify and marketplace figures side by side",
          "Anomalies flagged, not buried in a dashboard",
        ],
        link: { href: "/amazon-account-management", label: "Full Amazon account management" },
      },
    ],
  },
];

/* ---------------------------------------------------------------- */
/*  COMPARISON — ways to get the repetitive work done                 */
/* ---------------------------------------------------------------- */
const compare = [
  { row: "Cost per task",             diy: "Your time",       hire: "Salary",          tools: "Subscriptions",     sop: "Fixed project price" },
  { row: "Works overnight and weekends", diy: "No",           hire: "No",              tools: "Yes",               sop: "Yes" },
  { row: "Built around your process",  diy: "Yes",            hire: "Yes",             tools: "Generic",           sop: "Yes" },
  { row: "Human judgement kept in",    diy: "Yes",            hire: "Yes",             tools: "Rarely",            sop: "Review steps built in" },
  { row: "Setup effort",               diy: "—",              hire: "Recruiting",      tools: "You configure",     sop: "We build it" },
  { row: "Maintenance",                diy: "—",              hire: "Ongoing",         tools: "You manage",        sop: "Optional retainer" },
  { row: "You own the system",         diy: "Yes",            hire: "Yes",             tools: "No",                sop: "Yes" },
];

const steps = [
  { n: "01", t: "Discovery", d: "We look at what your team does by hand every week and pick the tasks where automation clearly pays: repetitive, rule-based, and costing real hours. If nothing qualifies, we say so." },
  { n: "02", t: "Plan and fixed price", d: "A written scope — which tasks, which tools, where a person reviews — with a fixed project price. Nothing starts until you've agreed it." },
  { n: "03", t: "Build", d: "The agents and workflows are built and tested against your real data on a small scale first: one channel, one process, one inbox." },
  { n: "04", t: "Human review", d: "Review steps are part of the design, not an afterthought. Your team approves plans, samples drafts and handles anything the system flags, and we tune the brief from what they change." },
  { n: "05", t: "Ongoing support", d: "Once it runs reliably, keep us on a retainer for monitoring, changes and new tasks, or take the system and run it yourself. It is yours either way." },
];

const faqs = [
  { q: "What is AI automation for business, in plain terms?", a: "Software that does a repetitive job for you without someone prompting each step. An AI agent is given a task, the tools it needs and permission to work through the task on its own: drafting a month of posts, sorting an inbox, answering an order-status question, pulling a weekly report. It works from instructions you approve, and it hands anything it is unsure about to a person." },
  { q: "What kinds of business do your AI automation services suit?", a: "Small and mid-sized businesses with repetitive work that is eating skilled people's time: social media that never gets done, enquiries that sit unanswered, reports that take a day to assemble, store admin that repeats every week. Most of our clients are in the UK and US, and many are Amazon or Shopify sellers, but the work is not limited to ecommerce." },
  { q: "Will the AI post or reply without anyone checking?", a: "Not unless you decide it should. Every system we build has review points designed in: you approve the content plan, someone samples drafts before they go out, and customer messages that need judgement reach a person. As trust builds, review can become lighter, but nothing public-facing runs unsupervised by default." },
  { q: "How do you charge for AI consulting and automation?", a: "A fixed project price for the build, based on a written scope of what is being automated and where a person reviews. Ongoing monitoring and changes are an optional monthly retainer. We do not charge per task or per message, and there is no long contract." },
  { q: "Do I need technical staff to run it?", a: "No. The systems are built so that the people who use them day to day approve plans, review drafts and handle flagged items through tools they already know — email, WhatsApp, a shared document, a scheduler. Changing what the system does needs a developer, which can be us or anyone else, because you own it." },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function AIAutomation() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c"),
        }}
      />

      {/* HERO */}
      <section className="page-head" style={{ "--cover": "url(/covers/ai.svg)" }}>
        <div className="wrap">
          <div className="svc-kicker">AI agents · UK &amp; US</div>
          <h1>The AI Automation Agency for work you keep doing by hand.</h1>
          <p>
            AI automation for business UK and US owners can actually use:
            content planned and published, customer questions answered,
            admin and reporting done on schedule, with a person reviewing
            what matters. Fixed price, written scope, and a system you own.
          </p>
          <div className="acts" style={{ marginTop: 28 }}>
            <Link className="btn btn-acc" href="/contact">
              <span className="t">Tell us what you do by hand</span> <span className="a">→</span>
            </Link>
            <a className="btn btn-ghost" href="#everything">
              <span className="t">See what we automate</span>
            </a>
          </div>
        </div>
      </section>

      {/* INTRO — plain English */}
      <section>
        <div className="wrap svc-split">
          <div>
            <h2>What AI automation means, in plain English</h2>
            <p>
              An AI model on its own answers questions when you ask them. An
              AI agent is that model given a job, the tools to do it, and
              permission to work through it without being prompted at every
              step: draft the month&apos;s posts, sort this inbox, answer that
              order question, build the weekly report.
            </p>
            <p>
              Business automation is joining those agents to the tools you
              already use so the work simply happens, with a person approving
              what matters. That is what we build. Not a chatbot bolted on to
              a website, but the repetitive parts of running a business taken
              off someone&apos;s desk.
            </p>
          </div>
          <div className="leak-card">
            <div className="leak-row"><span>Social media that never gets done</span><b className="bad">invisible online</b></div>
            <div className="leak-row"><span>Enquiries answered a day late</span><b className="bad">lost leads</b></div>
            <div className="leak-row"><span>Reports assembled by hand each month</span><b className="bad">a day gone</b></div>
            <div className="leak-row"><span>Data retyped between tools</span><b className="bad">errors</b></div>
            <div className="leak-row"><span>Store admin repeated every week</span><b className="bad">skilled time wasted</b></div>
            <div className="leak-row good"><span>Agents doing it, people reviewing it</span><b>covered</b></div>
          </div>
        </div>
      </section>

      {/* EVERYTHING — by phase */}
      <div id="everything" />
      {phases.map((ph, pi) => (
        <section key={ph.no} className={pi % 2 === 0 ? "process-band" : ""}>
          <div className="wrap">
            <div className="phase-head">
              <span className="phase-no">{ph.no}</span>
              <div>
                <h2>{ph.name}</h2>
                <p>{ph.lead}</p>
              </div>
            </div>

            <div className="cat-groups">
              {ph.areas.map((a) => (
                <div className="group" key={a.t}>
                  <h3>{a.t}</h3>
                  <ul>
                    {a.items.map((it) => <li key={it}>{it}</li>)}
                  </ul>
                  {a.link && (
                    <Link className="case-link" href={a.link.href}>
                      {a.link.label} <span aria-hidden="true">→</span>
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CONTENT AUTOMATION */}
      <section>
        <div className="wrap">
          <div className="sec-head">
            <h2>AI content automation, with people where it counts</h2>
            <p>
              As an AI content creation agency we build the whole loop, not
              just a writing tool: a planning agent drafts the calendar from
              your brief, a writing agent turns approved ideas into posts in
              your tone, and a publishing agent schedules them and feeds
              engagement back into next month&apos;s plan. You approve the plan,
              someone samples the drafts, and real replies from customers reach
              a real person. We built a system like this for an international
              client serving accounting firms, which you can see on our{" "}
              <Link href="/portfolio">portfolio page</Link>. For how the pieces
              fit together, read{" "}
              <Link href="/blog/ai-social-media-automation">how AI agents automate social media content</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* COMPARISON */}
      <section className="process-band">
        <div className="wrap">
          <div className="sec-head">
            <h2>Do it yourself, hire, off-the-shelf tools, or a built system?</h2>
            <p>An honest comparison of the ways small businesses get repetitive work done.</p>
          </div>
          <div className="cmp-wrap">
            <table className="cmp">
              <thead>
                <tr>
                  <th></th>
                  <th>Keep doing it yourself</th>
                  <th>Hire someone</th>
                  <th>Off-the-shelf AI tools</th>
                  <th className="cmp-us">Built with SOP</th>
                </tr>
              </thead>
              <tbody>
                {compare.map((c) => (
                  <tr key={c.row}>
                    <th>{c.row}</th>
                    <td>{c.diy}</td>
                    <td>{c.hire}</td>
                    <td>{c.tools}</td>
                    <td className="cmp-us">{c.sop}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* HOW */}
      <section>
        <div className="wrap">
          <div className="sec-head">
            <h2>How it works</h2>
            <p>From the first conversation to a system that runs on its own, with you in the loop.</p>
          </div>
          <ol className="steps">
            {steps.map((s) => (
              <li className="step" key={s.n}>
                <div className="step-n">{s.n}</div>
                <div className="step-body">
                  <h3>{s.t}</h3>
                  <p>{s.d}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* LIMITS */}
      <section className="process-band">
        <div className="wrap">
          <div className="sec-head">
            <h2>What AI cannot do</h2>
            <p>Anyone selling AI automation services should be clear about this. Here is where the limits are, and how we design around them.</p>
          </div>
          <div className="safe-grid">
            <div className="safe"><b>It doesn&apos;t know what happened this morning</b><span>An agent works from what it is given. Your prices, stock, policies and news reach it only if something feeds them in, so we build those feeds and keep them current.</span></div>
            <div className="safe"><b>It can be confidently wrong</b><span>Models produce fluent text that is sometimes false. That is why drafts are reviewed, facts are checked against your sources, and customer messages that need judgement go to a person.</span></div>
            <div className="safe"><b>It produces competent, not remarkable</b><span>AI content is consistent and on time. The ideas that make a brand stand out still come from people, and the system is built to make room for them.</span></div>
            <div className="safe"><b>It drifts if nobody watches</b><span>Tone and quality slip over months without attention. Monitoring and brief updates are part of the retainer, or part of the handover if you run it yourself.</span></div>
          </div>
        </div>
      </section>

      {/* WHY + PROOF */}
      <section>
        <div className="wrap svc-split">
          <div>
            <h2>Why businesses choose us for AI consulting for small businesses</h2>
            <ul className="why-list">
              <li><b>We run businesses&apos; daily work already.</b> Managing Amazon accounts and stores every day means we automate what actually needs doing, not what demos well.</li>
              <li><b>Review designed in.</b> Every system has a person at the points that matter, from day one.</li>
              <li><b>One point of contact.</b> You talk to the person building the system, not someone relaying messages.</li>
              <li><b>Agency scope, lower overhead.</b> What a UK AI automation agency covers, without UK office costs.</li>
              <li><b>Fixed price, written down.</b> Scope and price agreed before work starts, and you own what we build.</li>
            </ul>
          </div>
          <div className="proof-card">
            <div className="proof-lbl">AI content ecosystem · accounting firms</div>
            <div className="proof-num">CA firms</div>
            <div className="proof-sub">A system of AI agents built for an international client serving CA firms: the agents plan, prepare and publish social media content automatically, keeping the firms visible online without adding headcount.</div>
            <Link className="case-link" href="/portfolio">See the project <span aria-hidden="true">→</span></Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="process-band">
        <div className="wrap">
          <div className="sec-head">
            <h2>AI automation questions</h2>
          </div>
          <div className="faq">
            {faqs.map((f, i) => (
              <details className="faq-item" key={i}>
                <summary>
                  {f.q}
                  <span className="faq-icon" aria-hidden="true" />
                </summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <BlogLinks
        slugs={["ai-social-media-automation"]}
        intro="How the planning, writing and publishing agents fit together, and where people stay involved."
      />

      {/* CTA */}
      <section>
        <div className="wrap">
          <div className="cta">
            <div className="cta-in">
              <h2>Tell us what you want to stop doing by hand.</h2>
              <p>We&apos;ll come back with a written scope, where a person stays in the loop, and a fixed price — usually the same day.</p>
            </div>
            <div className="cta-actions">
              <Link className="btn btn-acc" href="/contact">
                <span className="t">Start the conversation</span> <span className="a">→</span>
              </Link>
              <a className="btn btn-line" href="https://api.whatsapp.com/send?phone=923101375475" target="_blank" rel="noreferrer">
                <span className="t">Message on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
