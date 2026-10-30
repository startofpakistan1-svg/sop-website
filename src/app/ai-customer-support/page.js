import Link from "next/link";
import BlogLinks from "@/components/BlogLinks";
import PriceList from "@/components/PriceList";

export const metadata = {
  title: "AI Customer Support Agents for Shopify & Ecommerce | SOP",
  description:
    "Agents that answer on WhatsApp, on Facebook and Instagram, and on your own site. Built on n8n, so you own what gets built. Setup from $1,200.",
  alternates: { canonical: "/ai-customer-support" },
};

/* ---------------------------------------------------------------- */
/*  THE THREE AGENTS — one card per channel                          */
/* ---------------------------------------------------------------- */
const channels = [
  {
    t: "WhatsApp",
    items: [
      "Handles order queries and the questions people would otherwise send through your website",
      "Where it can answer, it answers",
      "Where it can't, it passes the conversation to you with the context already gathered",
    ],
  },
  {
    t: "Facebook and Instagram",
    items: [
      "Replies to DMs and comments",
      "Publishes posts on a schedule",
      "Filters what reaches you, so you see the messages that need a person",
    ],
  },
  {
    t: "Your website",
    items: [
      "A chatbot that answers from your own content rather than guessing",
    ],
  },
];

const SITE = "https://www.startofpakistan.com";

/* Service node only — the organisation is defined once on the home page,
   and this page adds no FAQPage, Review or AggregateRating. */
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${SITE}/ai-customer-support#service`,
  name: "AI Customer Support Agents",
  serviceType: "AI customer support automation",
  description:
    "Agents that answer customer questions on WhatsApp, on Facebook and Instagram, and on a store's own website, built on n8n and handed over to the client to own.",
  url: `${SITE}/ai-customer-support`,
  provider: { "@id": `${SITE}/#organization` },
  areaServed: [
    { "@type": "Country", name: "United Kingdom" },
    { "@type": "Country", name: "United States" },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "@id": `${SITE}/ai-customer-support#breadcrumb`,
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE },
    { "@type": "ListItem", position: 2, name: "Services", item: `${SITE}/services` },
    // Last crumb is the current page, so it carries no `item`.
    { "@type": "ListItem", position: 3, name: "AI customer support" },
  ],
};

export default function AICustomerSupport() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema).replace(/</g, "\\u003c"),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema).replace(/</g, "\\u003c"),
        }}
      />

      {/* HERO */}
      <section className="page-head" style={{ "--cover": "url(/covers/ai.svg)" }}>
        <div className="wrap">
          <div className="svc-kicker">
            <Link href="/">Home</Link> ·{" "}
            <Link href="/services">Services</Link> · AI customer support
          </div>
          <h1>AI customer support agents for Shopify and ecommerce stores</h1>
          <p>
            Most stores lose customers in the gap between a question and an
            answer. Someone asks about an order on WhatsApp at 9pm, or leaves a
            comment on an Instagram post, and nobody replies until morning.
          </p>
          <p>
            We build agents that answer in that gap — on WhatsApp, on Facebook
            and Instagram, and on your own site.
          </p>
          <div className="acts" style={{ marginTop: 28 }}>
            <a
              className="btn btn-acc"
              href="https://api.whatsapp.com/send?phone=923101375475"
              target="_blank"
              rel="noreferrer"
            >
              <span className="t">Message on WhatsApp</span> <span className="a">→</span>
            </a>
            <a className="btn btn-ghost" href="#three">
              <span className="t">See the three agents</span>
            </a>
          </div>
        </div>
      </section>

      {/* THE THREE AGENTS */}
      <section id="three">
        <div className="wrap">
          <div className="sec-head">
            <h2>Three places an agent can answer</h2>
          </div>
          <div className="cat-groups">
            {channels.map((c) => (
              <div className="group" key={c.t}>
                <h3>{c.t}</h3>
                <ul>
                  {c.items.map((it) => <li key={it}>{it}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BUILT ON N8N */}
      <section className="process-band">
        <div className="wrap prose">
          <h2>Built on n8n, not on a subscription product</h2>
          <p>
            These are built on n8n, not on a subscription chatbot product. That
            matters for two reasons: the workflows connect to whatever you
            already use — your store, your inbox, your sheets — and you own what
            gets built. There is no platform to be locked into, and no
            per-conversation fee that grows as your store does.
          </p>
          <p>I build and maintain these myself.</p>
        </div>
      </section>

      {/* WHAT IS RUNNING NOW */}
      <section>
        <div className="wrap svc-split">
          <div>
            <h2>What is running now</h2>
            <p>
              Two of these run on our own Spain-market store, Khurmi Store,
              every day — the WhatsApp agent and the Facebook and Instagram
              agent. The chatbot on this site is the third.
            </p>
            <p>
              We built them for our own store first because that is where we
              could afford to get it wrong.
            </p>
          </div>
          <div className="proof-card">
            <div className="proof-lbl">Running daily · Khurmi Store</div>
            <div className="proof-num">Three agents</div>
            <div className="proof-sub">
              WhatsApp and the Facebook and Instagram agent on our own
              Spain-market store, and the chatbot on this site.
            </div>
            <Link className="case-link" href="/portfolio">
              See the work <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="process-band">
        <div className="wrap prose">
          <h2>How long it takes</h2>
          <p>Setup takes about a week from access to live, after testing.</p>
        </div>
      </section>

      {/* PRICING */}
      <PriceList
        title="AI customer support pricing"
        intro="Setup from $1,200 covers the build, testing, and going live. Maintenance and changes after that are optional — you own what gets built, so you are not locked into a monthly fee."
        items={[
          { label: "Build, testing and going live", price: "from $1,200" },
          { label: "Maintenance and changes afterwards (optional)", price: "$250 /month" },
        ]}
      />

      <BlogLinks
        slugs={["best-ai-agents-for-customer-support", "ai-social-media-automation"]}
        intro="What these agents resolve well, where they should hand over to a person, and how the publishing side fits together."
      />

      {/* CTA */}
      <section>
        <div className="wrap">
          <div className="cta">
            <div className="cta-in">
              <h2>Tell us which of the three you need.</h2>
              <p>
                Send a message on WhatsApp and say which of the three you need,
                and I&apos;ll tell you whether it&apos;s a fit before quoting
                anything.
              </p>
            </div>
            <div className="cta-actions">
              <a
                className="btn btn-acc"
                href="https://api.whatsapp.com/send?phone=923101375475"
                target="_blank"
                rel="noreferrer"
              >
                <span className="t">Message on WhatsApp</span> <span className="a">→</span>
              </a>
              <Link className="btn btn-line" href="/contact">
                <span className="t">Use the contact form</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
