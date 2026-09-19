import Link from "next/link";
import HeroFlow from "@/components/HeroFlow";

const platforms = [
  "Amazon", "Shopify", "eBay", "Walmart", "Etsy",
  "WooCommerce", "WordPress", "AI agents",
];

const services = [
  {
    title: "Marketplace accounts",
    body: "Seller accounts set up and run end to end — listings, pricing, optimisation and the daily work nobody wants to do themselves.",
    chips: ["Amazon", "eBay", "Walmart", "Etsy"],
    icon: (
      <path d="M3 6h18l-2 12H5L3 6zM3 6L2 3M9 21a1 1 0 100-2 1 1 0 000 2zM17 21a1 1 0 100-2 1 1 0 000 2z" />
    ),
  },
  {
    title: "Stores that sell",
    body: "Shopify, WordPress, or hand-coded from scratch. Fast to load, clear on a phone, and built to be found in search.",
    chips: ["Shopify", "WordPress", "Custom build"],
    icon: <path d="M2 6a2 2 0 012-2h16a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM2 9h20M6 6.5h.01M9 6.5h.01" />,
  },
  {
    title: "AI agents",
    body: "Assistants that answer customers at 2am, qualify leads while you sleep, and publish content without being asked twice.",
    chips: ["Chatbots", "Automation", "Content"],
    icon: <path d="M4 10a3 3 0 013-3h10a3 3 0 013 3v7a3 3 0 01-3 3H7a3 3 0 01-3-3v-7zM12 7V3M9 13h.01M15 13h.01" />,
  },
  {
    title: "Everything around it",
    body: "Branding, SEO, Google Business, and the maintenance that keeps all of the above still working six months from now.",
    chips: ["Branding", "SEO", "Maintenance"],
    icon: <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1 2.1M15.5 12a3.5 3.5 0 11-7 0 3.5 3.5 0 017 0z" />,
  },
];

const work = [
  {
    name: "Standard Medical Store",
    type: "WordPress · medical supplies",
    body: "Built from nothing — catalogue, categories, ordering. We've run it every day since launch, through every update and product expansion.",
    result: "Four years of continuous management",
    img: "/work/standard-medical.png",
    href: "/portfolio",
  },
  {
    name: "AWEX Motorsport",
    type: "Shopify · karting gear",
    body: "A full Shopify store for a motorsport gear brand selling karting suits and gloves — build, catalogue, checkout and launch.",
    result: null,
    img: "/work/awex.png",
    href: "/portfolio",
  },
];

// ---- CLIENT REVIEWS ----
// Add one here as soon as a client sends it. The section stays hidden while empty.
// {
//   quote: "They built our store in two weeks and it just worked.",
//   name: "Client name", role: "Owner", company: "Company", initials: "CN",
// },
const testimonials = [];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <span className="blob b1" aria-hidden="true" />
        <span className="blob b2" aria-hidden="true" />

        <div className="wrap hero-grid">
          <div>
            <div className="tagpill rev d1">
              <span className="live-dot" aria-hidden="true" />
              9 accounts running right now
            </div>
            <h1 className="rev d2">
              Your store never sleeps.
              <br />
              <span className="grad">Neither do we.</span>
            </h1>
            <p className="lede rev d3">
              Amazon accounts, Shopify storefronts and AI agents — built and run
              from Jhelum for clients in four countries.
            </p>
            <div className="acts rev d4">
              <Link className="btn btn-acc" href="/contact">
                <span className="t">Start a project</span> <span className="a">→</span>
              </Link>
              <Link className="btn btn-ghost" href="/portfolio">
                <span className="t">See our work</span>
              </Link>
            </div>
          </div>

          <HeroFlow />
        </div>

        <div className="marq">
          <div className="marq-in">
            {[...platforms, ...platforms].map((p, i) => (
              <span key={i}>{p}</span>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section>
        <div className="wrap">
          <div className="sec-head">
            <h2>What we take off your hands</h2>
            <p>Most clients start with one of these and end up handing us two or three.</p>
          </div>

          <div className="cards">
            {services.map((s) => (
              <div className="card" key={s.title}>
                <div className="ic">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
                       stroke="#12296B" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    {s.icon}
                  </svg>
                </div>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
                <div className="chips">
                  {s.chips.map((c) => <i key={c}>{c}</i>)}
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 30 }}>
            <Link className="btn btn-ghost" href="/services">
              <span className="t">See all services</span> <span className="a">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* STATS */}
      <div className="stats">
        <div className="wrap stats-in">
          <div className="st"><b data-count="12">0</b><span>clients served</span></div>
          <div className="st"><b data-count="9">0</b><span>Amazon accounts run</span></div>
          <div className="st"><b data-count="4">0</b><span>countries</span></div>
          <div className="st"><b data-count="607">0</b><span>orders shipped</span></div>
        </div>
      </div>

      {/* WORK */}
      <section>
        <div className="wrap">
          <div className="sec-head">
            <h2>Work we&apos;re proud of</h2>
            <p>Stores we built, and accounts we still run today.</p>
          </div>

          <div className="case-list">
            {work.map((w) => (
              <article className="case" key={w.name}>
                <div className="case-visual">
                  <img className="shot active" src={w.img} alt={`${w.name} screenshot`} />
                  <span className="case-tag">{w.type.split(" · ")[0]}</span>
                </div>
                <div className="case-body">
                  <div className="case-type">{w.type}</div>
                  <h2>{w.name}</h2>
                  <p>{w.body}</p>
                  {w.result && <div className="case-result">{w.result}</div>}
                  <Link className="case-link" href={w.href}>
                    See the full case <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div style={{ marginTop: 30 }}>
            <Link className="btn btn-ghost" href="/portfolio">
              <span className="t">View all work</span> <span className="a">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      {testimonials.length > 0 && (
        <section className="process-band">
          <div className="wrap">
            <div className="sec-head">
              <h2>What clients say</h2>
              <p>In their words, not ours.</p>
            </div>
            <div className="quotes">
              {testimonials.map((t, i) => (
                <figure className="quote" key={i}>
                  <span className="quote-mark" aria-hidden="true">&ldquo;</span>
                  <blockquote>{t.quote}</blockquote>
                  <figcaption>
                    <span className="quote-avatar">{t.initials}</span>
                    <span>
                      <strong>{t.name}</strong>
                      <em>{t.role}{t.company ? `, ${t.company}` : ""}</em>
                    </span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section style={{ paddingTop: testimonials.length ? 104 : 0 }}>
        <div className="wrap">
          <div className="cta">
            <div className="cta-in">
              <h2>Tell us what you&apos;re selling.</h2>
              <p>We&apos;ll come back with a plan and a fixed price — usually the same day.</p>
            </div>
            <div className="cta-actions">
              <Link className="btn btn-acc" href="/contact">
                <span className="t">Start a project</span> <span className="a">→</span>
              </Link>
              <a className="btn btn-line" href="https://wa.me/923101375475" target="_blank" rel="noreferrer">
                <span className="t">Message on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}