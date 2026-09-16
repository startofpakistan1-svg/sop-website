import Link from "next/link";

const projects = [
  {
    name: "AWEX Motorsport",
    type: "Shopify store",
    tag: "eCommerce",
    body:
      "A full Shopify store for a motorsport gear brand selling karting suits and gloves. We handled the store build, product catalogue and checkout, then supported the launch — the store went on to generate consistent sales for the client.",
    stack: ["Shopify", "Store design", "Product catalogue", "Checkout setup"],
    link: "https://awex.shop",
    from: "#12296B",
    to: "#2563EB",
    img: "/work/awex.png",
  },
  {
    name: "AI content ecosystem for accounting firms",
    type: "AI agents & automation",
    tag: "AI",
    body:
      "A system of AI agents built for CA firms that plans, prepares and publishes social media content automatically. What used to take hours of manual posting each week now runs on its own, keeping the firms visible online without adding headcount.",
    stack: ["AI agents", "Content automation", "Social publishing", "Scheduling"],
    link: null,
    from: "#B4560C",
    to: "#F5871F",
    img: "/work/ai-agents.png",
  },
  {
    name: "Amazon seller account management",
    type: "Marketplace management",
    tag: "Marketplace",
    body:
      "End-to-end Amazon account management for international clients — listings, optimisation and day-to-day operations. We've grown seller accounts to seven figures in sales for brands selling into the US and UK markets.",
    stack: ["Amazon Seller Central", "Listing optimisation", "Account operations"],
    link: null,
    from: "#0E1A38",
    to: "#1B45A8",
    img: "/work/amazon.png",
  },
];

export const metadata = {
  title: "Portfolio — SOP | Shopify stores, AI agents & Amazon management",
  description:
    "Shopify stores, AI automation systems and Amazon seller accounts built and managed by SOP for clients in Pakistan and worldwide.",
};

export default function Portfolio() {
  return (
    <>
      <section className="page-head" style={{ padding: "64px 0 70px" }}>
        <div className="wrap">
          <h1>Our work</h1>
          <p>
            Stores we&apos;ve built, agents we&apos;ve trained, and accounts we
            run — for clients in Pakistan, the US and the UK.
          </p>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="case-list">
            {projects.map((p, i) => (
              <article className="case" key={i}>
                <div
                  className="case-visual"
                  style={{ background: `linear-gradient(135deg, ${p.from}, ${p.to})` }}
                >
                  <img
                    src={p.img}
                    alt={`${p.name} screenshot`}
                    onError={(e) => { e.currentTarget.style.display = "none"; }}
                  />
                  <span className="case-tag">{p.tag}</span>
                </div>

                <div className="case-body">
                  <div className="case-type">{p.type}</div>
                  <h2>{p.name}</h2>
                  <p>{p.body}</p>

                  <ul className="case-stack">
                    {p.stack.map((s) => (
                      <li key={s}>{s}</li>
                    ))}
                  </ul>

                  {p.link && (
                    <a
                      className="case-link"
                      href={p.link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Visit the store →
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="contact">
            <div>
              <h2>Want results like these?</h2>
              <p>
                Tell us what you&apos;re selling and where you&apos;re stuck.
                We&apos;ll come back with a plan and a quote.
              </p>
            </div>
            <div className="contact-actions">
              <Link className="c-wa" href="/contact">Start a project</Link>
              <a
                className="c-mail"
                href="https://wa.me/923101375475"
                target="_blank"
                rel="noreferrer"
              >
                Message on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}