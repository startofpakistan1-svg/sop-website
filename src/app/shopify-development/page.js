import Link from "next/link";
import BlogLinks from "@/components/BlogLinks";
import Testimonials from "@/components/Testimonials";
import testimonials from "@/data/testimonials";

export const metadata = {
  title: "Shopify Development Agency for UK & US Brands | SOP",
  description:
    "Shopify development services for UK and US brands: store builds, custom themes, Shopify SEO and migrations from WooCommerce, all on a fixed price.",
  alternates: { canonical: "/shopify-development" },
};

/* ---------------------------------------------------------------- */
/*  WHAT WE BUILD — grouped into four phases                          */
/* ---------------------------------------------------------------- */
const phases = [
  {
    no: "01",
    name: "Store build & setup",
    lead: "Shopify development services that take a store from an empty account to ready to sell.",
    areas: [
      {
        t: "Store setup",
        items: [
          "Shopify plan and account configuration",
          "Domain, email and DNS setup",
          "Payments — Shopify Payments, PayPal, local gateways",
          "Shipping zones, rates and free-shipping rules",
          "UK VAT and US sales tax settings",
        ],
      },
      {
        t: "Products & collections",
        items: [
          "Product upload, variants and inventory",
          "Bulk import from spreadsheets or another platform",
          "Collections, filters and navigation",
          "Product copy and image preparation",
        ],
      },
      {
        t: "Checkout & conversion",
        items: [
          "Checkout configuration and testing",
          "Discount codes and automatic discounts",
          "Abandoned checkout and email flows",
          "Analytics and conversion tracking",
        ],
      },
    ],
  },
  {
    no: "02",
    name: "Shopify SEO services",
    lead: "A store that nobody finds does not sell. Shopify SEO is built into every store we ship, not bolted on afterwards.",
    areas: [
      {
        t: "Technical SEO",
        items: [
          "Clean URL structure and canonical tags",
          "Page titles and meta descriptions on every page",
          "Product and collection schema markup",
          "Image alt text and compression",
          "Redirects that preserve rankings after changes",
        ],
      },
      {
        t: "Content & structure",
        items: [
          "Keyword research for collections and products",
          "Collection pages written to rank, not just list",
          "Blog setup for content that brings traffic",
          "Internal linking between products, collections and guides",
        ],
      },
      {
        t: "Speed",
        items: [
          "Theme audit for unused code and apps",
          "Image sizing and lazy loading",
          "App bloat removed where the theme can do the job",
          "Core Web Vitals checked before launch",
        ],
      },
    ],
  },
  {
    no: "03",
    name: "Shopify migration services",
    lead: "Moving from WooCommerce, Magento, Wix, Squarespace or a custom platform without losing products, customers or search rankings.",
    areas: [
      {
        t: "Data migration",
        items: [
          "Products, variants, images and inventory",
          "Customer accounts and order history",
          "Collections, tags and categories mapped to Shopify",
          "Blog posts and pages",
        ],
      },
      {
        t: "Rankings & redirects",
        items: [
          "Every old URL redirected to its new home",
          "Titles, descriptions and alt text carried over",
          "Search Console and analytics reconnected",
          "Post-launch monitoring for crawl errors",
        ],
      },
      {
        t: "Integrations",
        items: [
          "Payment gateways and shipping carriers",
          "Email marketing and CRM connections",
          "Marketplace sync — Amazon, eBay, Etsy",
          "Accounting and fulfilment tools",
        ],
      },
    ],
  },
  {
    no: "04",
    name: "Custom theme work",
    lead: "Custom Shopify development when a theme's settings stop being enough.",
    areas: [
      {
        t: "Theme customisation",
        items: [
          "Sections and blocks rebuilt to your layout",
          "Liquid, CSS and JavaScript changes",
          "Custom product page templates",
          "Mega menus, size guides, bundles",
        ],
      },
      {
        t: "Custom features",
        items: [
          "Product configurators and personalisation",
          "Wholesale and B2B pricing",
          "Subscriptions and pre-orders",
          "Custom apps where no existing app fits",
        ],
      },
      {
        t: "Ongoing support",
        items: [
          "Theme updates when Shopify changes",
          "New products, seasons and promotions",
          "Fixes when an app update breaks something",
          "Monthly maintenance retainer if you want it",
        ],
      },
    ],
  },
];

/* ---------------------------------------------------------------- */
/*  COMPARISON — how far from a stock theme do you need to go?        */
/* ---------------------------------------------------------------- */
const compare = [
  { row: "Time to launch",              theme: "Days",         custom: "Weeks",           bespoke: "Weeks to months", sop: "Agreed up front" },
  { row: "Design control",              theme: "Theme settings", custom: "Most of the page", bespoke: "Everything",   sop: "As much as you need" },
  { row: "Cost to build",               theme: "Low",          custom: "Mid",             bespoke: "High",           sop: "Fixed, quoted first" },
  { row: "Ongoing maintenance",         theme: "Low",          custom: "Low to mid",      bespoke: "Needs a developer", sop: "Optional retainer" },
  { row: "SEO built in",                theme: "Basic",        custom: "Yes",             bespoke: "Yes",            sop: "Every build" },
  { row: "Works with Shopify updates",  theme: "Yes",          custom: "Usually",         bespoke: "Needs care",     sop: "Tested each update" },
  { row: "Who owns the code",           theme: "Shopify / theme author", custom: "You",   bespoke: "You",            sop: "You" },
];

const steps = [
  { n: "01", t: "Store review", d: "If you already have a store, we look at the theme, apps, speed and SEO and tell you what we would change. If you're starting from nothing, we ask what you sell and to whom." },
  { n: "02", t: "Plan and fixed price", d: "A written scope — theme or custom, which features, which integrations — with a fixed project price. Nothing starts until you've agreed it." },
  { n: "03", t: "Build", d: "Design and development on a staging store you can see at every stage. Products, payments, shipping and tax set up and tested." },
  { n: "04", t: "Launch", d: "Redirects in place, tracking connected, a final check on a phone, then live. We stay on hand through the first days." },
  { n: "05", t: "Handover or retainer", d: "Every login and file handed over with a walkthrough. Keep us on a monthly retainer for updates and support, or run it yourself." },
];

const faqs = [
  { q: "What do your Shopify development services include?", a: "The whole build: store setup, theme customisation or custom theme development, product and collection setup, payments, shipping and tax, checkout configuration, Shopify SEO and launch. Migrations from WooCommerce or other platforms are a separate service, and ongoing maintenance is available on a monthly retainer." },
  { q: "Should I use a Shopify theme or have something custom built?", a: "Most stores are best served by a good theme customised properly: it launches faster, costs less and keeps working through Shopify's updates. Custom Shopify development makes sense when your products need a layout no theme offers, when design is part of what you sell, or when you need features that apps cannot provide. We'll tell you which before quoting." },
  { q: "Can you migrate my store from WooCommerce to Shopify?", a: "Yes. Our Shopify migration services move products, variants, images, customers and order history, redirect every old URL so you keep your search rankings, and reconnect payments, shipping, email and any marketplace integrations. The old store stays live until the new one is tested." },
  { q: "Do you handle Shopify SEO as well as the build?", a: "Yes, and we'd rather do it during the build than fix it afterwards. Titles, descriptions, URL structure, schema markup, image alt text and speed are part of every store we ship. Ongoing Shopify SEO services — content, collection pages, blog — are available separately if you want to keep growing search traffic." },
  { q: "How do you charge for Shopify web development?", a: "A fixed project price based on the scope we agree in writing: number of products, how far from the theme you want to go, which integrations you need. No hourly billing and no surprises halfway through. Ongoing support is a fixed monthly retainer if you want it." },
  { q: "Will I own the store when it's done?", a: "Completely. The Shopify account, the domain, the theme code and every app are in your name from day one. We work through a collaborator account that you can remove at any time." },
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

export default function ShopifyDevelopment() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c"),
        }}
      />

      {/* HERO */}
      <section className="page-head" style={{ "--cover": "url(/covers/shopify.svg)" }}>
        <div className="wrap">
          <div className="svc-kicker">Shopify · UK &amp; US</div>
          <h1>The Shopify Development Agency that builds stores to keep selling.</h1>
          <p>
            Shopify web development for UK and US brands — store builds, custom
            themes, Shopify SEO and migrations from WooCommerce and other
            platforms. Fixed price, written scope, and a store that stays
            yours.
          </p>
          <div className="acts" style={{ marginTop: 28 }}>
            <Link className="btn btn-acc" href="/contact">
              <span className="t">Talk to us about your store</span> <span className="a">→</span>
            </Link>
            <a className="btn btn-ghost" href="#everything">
              <span className="t">See what we build</span>
            </a>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section>
        <div className="wrap svc-split">
          <div>
            <h2>A Shopify store is easy to start and easy to get wrong.</h2>
            <p>
              The platform makes launching simple. It also makes it simple to
              end up with a slow theme, a dozen apps you pay for every month,
              product pages that never rank, and a checkout nobody tested on a
              phone.
            </p>
            <p>
              Our Shopify development services cover the whole build, from
              plan and theme to products, payments and SEO, with one person as
              your point of contact. When it goes live, it works, it&apos;s fast,
              and it&apos;s yours.
            </p>
          </div>
          <div className="leak-card">
            <div className="leak-row"><span>Theme installed, never customised</span><b className="bad">looks like everyone else</b></div>
            <div className="leak-row"><span>Twelve apps doing the job of two</span><b className="bad">monthly cost</b></div>
            <div className="leak-row"><span>No titles or alt text on products</span><b className="bad">no search traffic</b></div>
            <div className="leak-row"><span>Checkout untested on mobile</span><b className="bad">abandoned carts</b></div>
            <div className="leak-row"><span>Migration with no redirects</span><b className="bad">lost rankings</b></div>
            <div className="leak-row good"><span>Built properly once</span><b>covered</b></div>
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
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* COMPARISON */}
      <section>
        <div className="wrap">
          <div className="sec-head">
            <h2>Theme, customised theme, or fully bespoke?</h2>
            <p>How far from a stock theme you go is the biggest decision in any Shopify build. An honest comparison.</p>
          </div>
          <div className="cmp-wrap">
            <table className="cmp">
              <thead>
                <tr>
                  <th></th>
                  <th>Theme as it comes</th>
                  <th>Customised theme</th>
                  <th>Fully bespoke</th>
                  <th className="cmp-us">With SOP</th>
                </tr>
              </thead>
              <tbody>
                {compare.map((c) => (
                  <tr key={c.row}>
                    <th>{c.row}</th>
                    <td>{c.theme}</td>
                    <td>{c.custom}</td>
                    <td>{c.bespoke}</td>
                    <td className="cmp-us">{c.sop}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* NOT SURE */}
      <section className="process-band">
        <div className="wrap">
          <div className="sec-head">
            <h2>Not sure Shopify is the right platform?</h2>
            <p>
              It usually is for physical products with a standard checkout,
              but not always. If design control and page speed matter more
              than the app ecosystem, a custom-coded store can be the better
              choice, and we build those too. Our guide to{" "}
              <Link href="/blog/custom-website-vs-shopify">custom websites vs Shopify themes</Link>{" "}
              sets out the trade-offs, and our{" "}
              <Link href="/ecommerce-website-development">bespoke ecommerce development</Link>{" "}
              page covers what a hand-coded build involves. We&apos;ll tell you
              which fits before we quote either.
            </p>
          </div>
        </div>
      </section>

      {/* HOW */}
      <section>
        <div className="wrap">
          <div className="sec-head">
            <h2>How it works</h2>
            <p>From first look to a store that&apos;s live and selling.</p>
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

      {/* SAFETY */}
      <section className="process-band">
        <div className="wrap">
          <div className="sec-head">
            <h2>Your store stays yours</h2>
            <p>Some agencies build stores that are hard to leave. Here&apos;s how we make sure ours aren&apos;t.</p>
          </div>
          <div className="safe-grid">
            <div className="safe"><b>Your Shopify account</b><span>Opened in your name, on your card. We work through a collaborator account you can remove at any time.</span></div>
            <div className="safe"><b>Your theme code</b><span>Every customisation lives in your theme, not in an app or account we control. Any developer can pick it up.</span></div>
            <div className="safe"><b>Your domain and data</b><span>Domain, products, customers and orders are yours. Nothing is routed through us.</span></div>
            <div className="safe"><b>Full handover</b><span>Logins, files and a walkthrough at the end. Staying on a retainer is your choice, not a lock-in.</span></div>
          </div>
        </div>
      </section>

      {/* WHY + PROOF */}
      <section>
        <div className="wrap svc-split">
          <div>
            <h2>Why brands pick us for Shopify web development</h2>
            <ul className="why-list">
              <li><b>Build and run.</b> We manage Amazon accounts and stores every day, so we build stores the way people who run them would want.</li>
              <li><b>SEO from the first page.</b> Titles, structure, speed and schema are part of the build, not a later invoice.</li>
              <li><b>One point of contact.</b> You talk to the person building the store, not someone relaying messages.</li>
              <li><b>Agency scope, lower overhead.</b> What a UK Shopify agency covers, without UK office costs.</li>
              <li><b>Fixed price, written down.</b> Scope and price agreed before work starts, and they don&apos;t move.</li>
            </ul>
          </div>
          <div className="proof-card">
            <div className="proof-lbl">Shopify store · motorsport gear</div>
            <div className="proof-num">AWEX</div>
            <div className="proof-sub">A full Shopify store for a motorsport gear brand selling karting suits and gloves — build, catalogue, checkout and launch support.</div>
            <Link className="case-link" href="/portfolio">See the AWEX Motorsport project <span aria-hidden="true">→</span></Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="process-band">
        <div className="wrap">
          <div className="sec-head">
            <h2>Shopify development questions</h2>
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

      <Testimonials
        heading="What Shopify clients say"
        intro="From a store we built and launched. In their words, not ours."
        items={testimonials.filter((t) => t.service === "Shopify store")}
      />

      <BlogLinks
        slugs={["shopify-store-cost", "custom-website-vs-shopify"]}
        intro="What a Shopify store really costs, and when a custom build is the better call."
      />

      {/* CTA */}
      <section>
        <div className="wrap">
          <div className="cta">
            <div className="cta-in">
              <h2>Tell us what you sell.</h2>
              <p>We&apos;ll come back with a written scope and a fixed price for your Shopify store — usually the same day.</p>
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
