import Link from "next/link";
import HeroFlow from "@/components/HeroFlow";
import Schema from "@/components/Schema";
import Testimonials from "@/components/Testimonials";

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
    body: "Seller accounts set up and run end to end, so the daily work stops landing on you. We write and optimise the listings, manage Sponsored Products, Brands and Display campaigns, keep stock moving before it runs out and watch account health so problems surface before Amazon raises them. Hand over the whole account or only the advertising.",
    chips: ["Amazon", "eBay", "Walmart", "Etsy"],
    img: "/icons/marketplace.svg",
  },
  {
    title: "Stores that sell",
    body: "Shopify, WordPress, or hand-coded from scratch — fast to load, clear on a phone, and built to be found in search. Products, payments, shipping and tax settings are part of the build rather than an afterthought. We also move stores between platforms and redirect every old URL so the rankings come with you.",
    chips: ["Shopify", "WordPress", "Custom build"],
    img: "/icons/web.svg",
  },
  {
    title: "AI agents",
    body: "Assistants that answer customers at 2am, sort enquiries while you sleep, and publish content without being asked twice. Each system is built around a process you already have, with review steps so nothing reaches a customer unchecked. Most start with one job — an inbox, a weekly report, a content calendar — and widen once that one is behaving.",
    chips: ["Chatbots", "Automation", "Content"],
    img: "/icons/ai.svg",
  },
  {
    title: "Everything around it",
    body: "Branding, SEO, Google Business and the maintenance that keeps everything above still working six months from now. Search work covers the technical side and the writing, not a keyword list handed over as a deliverable. Maintenance means updates, fixes, and somebody to call when something breaks.",
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

// Answers may contain [text](/path) links. They render as <Link>s and are
// stripped to plain text for the FAQPage schema below.
const faqs = [
  {
    q: "What does SOP do?",
    a: "We run Amazon seller accounts and PPC campaigns, build and maintain Shopify, WordPress and custom-coded stores, and design AI agent systems that handle content and customer operations. Most clients hand us one of those and end up handing us two. Everything is on a fixed fee, with one person as your point of contact. See the full list on our [services page](/services).",
  },
  {
    q: "Do you work with sellers outside Pakistan?",
    a: "Yes. Most of our clients sell on Amazon.co.uk or Amazon.com, and we also work with businesses in Pakistan and India. We are four to five hours ahead of the UK, so the daily work on your account is usually finished before your morning, and we overlap with UK afternoons and US mornings for calls and messages.",
  },
  {
    q: "What is included in Amazon account management?",
    a: "Listings and optimisation, Sponsored ads, inventory planning and FBA shipments, account health, customer messages and returns, and monthly reporting, all handled by one team. You add us as a user in Seller Central with only the permissions the work needs, and you can remove that access at any time. Details are on the [Amazon account management page](/amazon-account-management).",
  },
  {
    q: "How does Amazon PPC management work with you?",
    a: "It starts with a free audit of your current campaigns, which you keep whether or not you hire us. Then a written plan with a target ACoS and a fixed monthly fee. Each week we add negative keywords, adjust bids, restructure where needed and send a plain-English report. Read more on the [Amazon PPC management page](/amazon-ppc-management).",
  },
  {
    q: "Do you build Shopify stores and custom websites?",
    a: "Both. Shopify when you want a proven checkout and fast launch, WordPress or WooCommerce when that fits better, and hand-coded HTML, CSS and JavaScript when design control and speed matter most. Product setup, payments, shipping and tax are part of every build. We will tell you which one fits before quoting. See [web development on our services page](/services).",
  },
  {
    q: "Which marketplaces do you work with?",
    a: "Amazon UK and Amazon US most often, and the wider EU marketplaces where a brand already sells there. We also work on eBay, Walmart Marketplace and Etsy, and on own-store platforms including Shopify, WooCommerce and WordPress. If you sell somewhere we have not worked, we will say so plainly rather than learn on your account.",
  },
  {
    q: "Do you handle both the store and the advertising side?",
    a: "Yes, and it usually works better that way. Advertising sends the traffic, but the listing or product page decides whether that traffic buys, so treating the two separately is how budgets get wasted. You can hire us for only one — plenty of clients do — but if the ads are underperforming because the page is weak, we will tell you that before taking the advertising work.",
  },
  {
    q: "How do projects usually start?",
    a: "Send a message through the [contact page](/contact) or on WhatsApp with what you sell and where you are stuck. We reply the same working day, usually within a few hours. If it makes sense we have a short call, then you get a written plan and a fixed price. If it is a fit we start when you are ready; if not, you keep the plan.",
  },
];

// [label](/href) → <Link>; everything else is plain text.
const LINK = /(\[[^\]]+\]\([^)]+\))/g;
function withLinks(text) {
  return text.split(LINK).filter(Boolean).map((part, i) => {
    const m = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    return m ? <Link key={i} href={m[2]}>{m[1]}</Link> : part;
  });
}
const plain = (text) => text.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1");

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: plain(f.a) },
  })),
};

export default function Home() {
  return (
    <>
      {/* Organisation + WebSite structured data. Google reads this from the
          home page; it does not need repeating on every route. */}
      <Schema />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c"),
        }}
      />

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

      {/* INTRO */}
      <section className="process-band">
        <div className="wrap prose">
          <h2>What we do, and who we do it for</h2>
          <p>
            SOP is an ecommerce and automation studio. We run Amazon seller
            accounts, build and look after online stores, and put automation
            behind the repetitive work that quietly eats a week. Three things,
            done by the same small team, because for most of our clients they
            are the same problem wearing different clothes.
          </p>
          <p>
            Most of the people we work with are Amazon sellers and online
            retailers in the UK and US, usually at the point where the owner is
            still writing the listings, watching the ads and answering the
            customer messages personally, and has run out of hours to keep
            doing it well.
          </p>
          <p>
            That is the gap we fill. You keep the product decisions and the
            supplier relationships; we take the daily running — listings that
            need rewriting, campaigns that need watching, stock that needs
            ordering, a store that needs to stay fast. One point of contact, a
            written scope before anything starts, and every account in your
            name.
          </p>
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
      <section>
        <div className="wrap prose">
          <h2>Who we work with</h2>
          <p>
            Three kinds of business end up here, and they want different
            things from us.
          </p>
          <p>
            <strong>Amazon sellers.</strong> Brands on Amazon.co.uk or
            Amazon.com that need the account run properly: listings written and
            optimised, advertising reviewed every week, stock ordered before it
            runs out, account health checked rather than discovered. Some hand
            over the whole account; others keep the operations and give us the
            advertising.
          </p>
          <p>
            <strong>Shopify and online store owners.</strong> Retailers who
            need a store built, moved off another platform, or rebuilt because
            it has grown slow and dated. The work usually includes the parts
            that get forgotten — payments, shipping and tax settings, product
            data, and the search structure that decides whether anyone finds
            the store at all.
          </p>
          <p>
            <strong>Businesses automating admin.</strong> Companies in and
            outside ecommerce where the same work repeats every week: customer
            replies, reports assembled by hand, information retyped between
            tools, content that never quite gets published.
          </p>
          <p>
            What they have in common is wanting one team accountable rather
            than three freelancers who never speak. If you need a large agency
            with account directors between you and the work, we are not that.
            If you would rather talk to the person doing it, we are.
          </p>
        </div>
      </section>

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
                <p>{withLinks(f.a)}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <Testimonials heading="What our clients say" band />

      {/* CTA */}
      <section>
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