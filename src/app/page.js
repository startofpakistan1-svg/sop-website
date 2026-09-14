import Link from "next/link";

const platforms = ["Amazon", "eBay", "Walmart", "Etsy", "Shopify", "Custom Dev"];

const services = [
  {
    title: "Marketplace & ecommerce",
    body: "We set up and manage your stores on Amazon, eBay, Walmart, Etsy and Shopify — listings, pricing, and orders handled end to end.",
  },
  {
    title: "Web development",
    body: "Business websites and web apps coded from scratch. Clean, responsive, and search-ready so customers actually find you.",
  },
  {
    title: "AI bots & agents",
    body: "Chatbots and AI assistants that answer customers, qualify leads, and handle support 24/7 — trained on your own business.",
  },
  {
    title: "Digital solutions",
    body: "Branding, SEO, Google Maps setup, and ongoing maintenance. One team to get you online and keep you growing.",
  },
];

const work = [
  { name: "AWEX Motorsport", type: "Shopify store", from: "#12296B", to: "#2563EB" },
  { name: "Your project here", type: "Web app", from: "#0E1A38", to: "#1B45A8" },
  { name: "Your project here", type: "AI assistant", from: "#B4560C", to: "#F5871F" },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="hero" style={{ padding: 0 }}>
        <div className="wrap hero-inner">
          <span className="eyebrow">eCommerce &amp; Digital Solutions · Jhelum, PK</span>
          <h1>
            Build, grow, and <span className="accent">scale</span> your business online.
          </h1>
          <p>
            SOP is a digital studio helping brands sell on Amazon, eBay, Walmart, Etsy
            and Shopify — plus custom websites and AI assistants that convert.
          </p>
          <div className="hero-actions">
            <Link className="btn-orange" href="/contact">Get a free quote</Link>
            <Link className="btn-ghost" href="/portfolio">See our work</Link>
          </div>
          <div className="hero-meta">
            <span><b>5+</b> years building</span>
            <span><b>Local</b> payments set up</span>
            <span><b>Worldwide</b> clients served</span>
          </div>
        </div>
      </section>

      {/* PLATFORMS */}
      <div className="platforms">
        <div className="wrap platforms-inner">
          <span className="lead">We build and manage on</span>
          {platforms.map((p) => (
            <span className="chip" key={p}>{p}</span>
          ))}
        </div>
      </div>

      {/* SERVICES */}
      <section>
        <div className="wrap">
          <div className="sec-head">
            <h2>What we build</h2>
            <p>From your first marketplace listing to an AI assistant that never sleeps — one team for the whole journey.</p>
          </div>
          <div className="svc-grid">
            {services.map((s) => (
              <div className="svc" key={s.title}>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 30 }}>
            <Link className="btn-outline" href="/services">See all services</Link>
          </div>
        </div>
      </section>

      {/* WORK */}
      <section className="work-band">
        <div className="wrap">
          <div className="sec-head">
            <h2>Recent work</h2>
            <p>A few projects we&apos;ve shipped. Swap these for your own screenshots as they go live.</p>
          </div>
          <div className="work-grid">
            {work.map((w, i) => (
              <div className="work-card" key={i}>
                <div className="work-thumb" style={{ background: `linear-gradient(135deg, ${w.from}, ${w.to})` }}>
                  {w.name === "Your project here" ? "Add screenshot" : w.name}
                </div>
                <div className="work-info">
                  <div className="t">{w.name}</div>
                  <div className="k">{w.type}</div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 30 }}>
            <Link className="btn-outline" href="/portfolio">View full portfolio</Link>
          </div>
        </div>
      </section>

      {/* WHY */}
      <section>
        <div className="wrap">
          <div className="sec-head">
            <h2>Why brands pick SOP</h2>
          </div>
          <div className="why-grid">
            <div className="why-item">
              <h3>Pakistan pricing, global quality</h3>
              <p>You get international-standard work without the international agency bill.</p>
            </div>
            <div className="why-item">
              <h3>AI-forward from day one</h3>
              <p>We don&apos;t just build stores — we add smart bots and automation that save you hours.</p>
            </div>
            <div className="why-item">
              <h3>One point of contact</h3>
              <p>No middlemen. You talk to the person actually building your project.</p>
            </div>
            <div className="why-item">
              <h3>Built to be found</h3>
              <p>Fast, SEO-ready code and Google Maps setup so customers reach you first.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section>
        <div className="wrap">
          <div className="contact">
            <div>
              <h2>Let&apos;s start your project.</h2>
              <p>Tell us what you&apos;re building. We&apos;ll reply with a plan and a quote — usually the same day.</p>
            </div>
            <div className="contact-actions">
              <a className="c-wa" href="https://wa.me/923101375475" target="_blank" rel="noreferrer">
                Message on WhatsApp
              </a>
              <Link className="c-mail" href="/contact">Send an enquiry</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}