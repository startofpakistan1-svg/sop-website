import Link from "next/link";
import HeroFlow from "@/components/HeroFlow";
import Schema from "@/components/Schema";

export const metadata = {
  title: "SOP | Amazon, Shopify & AI Automation for UK & US Sellers",
  description:
    "SOP runs Amazon seller accounts, PPC, Shopify stores and AI automation for brands in the UK and US. Based in Jhelum, Pakistan.",
  alternates: { canonical: "/" },
};

const platforms = [
  "Amazon", "Shopify", "eBay", "Walmart", "Etsy",
  "WooCommerce", "WordPress", "AI agents",
];

const services = [
  {
    title: "Marketplace accounts",
    body: "Seller accounts set up and run end to end — listings, pricing, optimisation and the daily work nobody wants to do themselves.",
    chips: ["Amazon", "eBay", "Walmart", "Etsy"],
    img: "/icons/marketplace.svg",
  },
  {
    title: "Stores that sell",
    body: "Shopify, WordPress, or hand-coded from scratch. Fast to load, clear on a phone, and built to be found in search.",
    chips: ["Shopify", "WordPress", "Custom build"],
    img: "/icons/web.svg",
  },
  {
    title: "AI agents",
    body: "Assistants that answer customers at 2am, qualify leads while you sleep, and publish content without being asked twice.",
    chips: ["Chatbots", "Automation", "Content"],
    img: "/icons/ai.svg",
  },
  {
    title: "Everything around it",
    body: "Branding, SEO, Google Business, and the maintenance that keeps all of the above still working six months from now.",
    chips: ["Branding", "SEO", "Maintenance"],
    img: "/icons/digital.svg",
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

const faqs = [
  {
    q: "How do you charge?",
    a: "A fixed monthly fee for Amazon account management and PPC, and a fixed project price for store builds and AI systems, agreed in writing before we start. We do not take a percentage of your sales or ad spend, and there is no long contract.",
  },
  {
    q: "Do you work with sellers outside Pakistan?",
    a: "Most of our clients are in the UK and US, with others in Pakistan and India. We are four to five hours ahead of the UK, so the daily work on your account is usually finished before your morning, and we are available for calls during UK afternoons and US mornings.",
  },
  {
    q: "Will you need my Amazon or Shopify password?",
    a: "No. On Amazon you add us as a user in Seller Central with only the permissions the work needs. On Shopify we use a collaborator or staff account. You control the access and can remove it whenever you like.",
  },
  {
    q: "Can you take over an account or store that already exists?",
    a: "Yes, and that is how most engagements start. We audit what is there first: campaign structure and wasted spend on Amazon, theme, apps and speed on Shopify, or the manual process an AI system would replace. You get the findings in writing whether or not you hire us, and if you do, the first weeks are spent fixing what the audit found before anything new is added.",
  },
  {
    q: "What happens after I get in touch?",
    a: "We reply the same working day, usually within a few hours. If it makes sense we have a short call, then you get a written plan and a price. If it is a fit, we start when you are ready; if not, you keep the plan.",
  },
];

export default function Home() {
  return (
    <>
      {/* Organisation + WebSite structured data. Google reads this from the
          home page; it does not need repeating on every route. */}
      <Schema />

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
                  <img src={s.img} alt="" />
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
          <div className="st"><b data-count="12">12</b><span>clients served</span></div>
          <div className="st"><b data-count="9">9</b><span>Amazon accounts run</span></div>
          <div className="st"><b data-count="4">4</b><span>countries</span></div>
          <div className="st"><b data-count="607">607</b><span>orders shipped</span></div>
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

      {/* WHO WE WORK WITH */}
      <section className="process-band">
        <div className="wrap prose">
          <h2>Built for sellers in the UK and US, run from Pakistan</h2>
          <p>
            Most of our clients sell on Amazon.co.uk or Amazon.com, run a
            Shopify or WordPress store alongside it, and have reached the point
            where the daily work of listings, advertising, stock and customer
            messages is eating the time they should be spending on the
            business. We take that work on, on a fixed monthly fee, with one
            person as your point of contact.
          </p>
          <p>
            Being four to five hours ahead of the UK works in your favour: the
            day&apos;s optimisation is usually done before you log in, and we
            overlap with UK afternoons and US mornings for calls. Everything we
            build, from store code to ad campaigns, stays yours, and you can
            remove our access at any time.
          </p>
          <p>
            A typical first month looks like this: an audit of what you have,
            a written plan with a fixed price, then the unglamorous fixes
            first &mdash; wasted ad spend, broken listings, slow pages, missing
            stock alerts &mdash; before anything new is built. Reporting is in
            plain English, weekly for advertising and monthly for everything
            else, so you always know what changed and why.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section>
        <div className="wrap">
          <div className="sec-head">
            <h2>Common questions</h2>
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