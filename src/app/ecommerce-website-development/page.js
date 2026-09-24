import Link from "next/link";
import BlogLinks from "@/components/BlogLinks";
import Testimonials from "@/components/Testimonials";
import testimonials from "@/data/testimonials";

export const metadata = {
  title: "Bespoke Ecommerce Website Development | SOP",
  description:
    "An ecommerce web development company building bespoke, custom-coded stores for UK and US businesses, with conversion rate optimisation built in.",
  alternates: { canonical: "/ecommerce-website-development" },
};

/* ---------------------------------------------------------------- */
/*  WHAT'S INCLUDED — grouped into four phases                        */
/* ---------------------------------------------------------------- */
const phases = [
  {
    no: "01",
    name: "Design around your products",
    lead: "Custom ecommerce website design starts with what you sell and who buys it, not with a template.",
    areas: [
      {
        t: "Discovery & structure",
        items: [
          "What you sell, to whom, and how they choose",
          "Site map and navigation planned before any design",
          "Content and photography requirements",
          "Competitor and category review",
        ],
      },
      {
        t: "Design",
        items: [
          "Layouts shaped by your products, not a theme",
          "Mobile designed first, desktop second",
          "Typography, colour and imagery to your brand",
          "Product, collection, cart and checkout pages",
        ],
      },
      {
        t: "Content",
        items: [
          "Product copy written to sell and to rank",
          "Category and landing page copy",
          "Image preparation and optimisation",
          "Trust content — delivery, returns, about",
        ],
      },
    ],
  },
  {
    no: "02",
    name: "Built by hand, built to be fast",
    lead: "Custom-coded in HTML, CSS and JavaScript. No page builder, no theme, nothing loaded that the page doesn't use.",
    areas: [
      {
        t: "Front end",
        items: [
          "Hand-written HTML, CSS and JavaScript",
          "Only the code each page needs",
          "Responsive on every screen size",
          "Accessible markup and keyboard navigation",
        ],
      },
      {
        t: "Speed & performance",
        items: [
          "Core Web Vitals targeted from the first build",
          "Optimised, lazy-loaded images",
          "No render-blocking scripts",
          "Fast hosting and caching configured",
        ],
      },
      {
        t: "Commerce",
        items: [
          "Cart, checkout and payment integration",
          "Stripe, PayPal and local gateways",
          "Shipping, tax and discount rules",
          "Order notifications and confirmations",
        ],
      },
    ],
  },
  {
    no: "03",
    name: "Found in search",
    lead: "A custom site gives full control over everything search engines read. We use it.",
    areas: [
      {
        t: "Technical SEO",
        items: [
          "Clean URLs, canonical tags and sitemap",
          "Product, breadcrumb and organisation schema",
          "Titles, descriptions and headings on every page",
          "Search Console and analytics connected at launch",
        ],
      },
      {
        t: "Content & structure",
        items: [
          "Keyword research for categories and products",
          "Internal linking planned into the structure",
          "Blog or guides section if it suits the business",
        ],
      },
    ],
  },
  {
    no: "04",
    name: "Launch and after",
    lead: "Handed over properly, and looked after if you want us to.",
    areas: [
      {
        t: "Launch",
        items: [
          "Redirects from any previous site",
          "Testing on real phones and browsers",
          "Backups and monitoring in place",
          "Walkthrough of how to update products and content",
        ],
      },
      {
        t: "Ongoing",
        items: [
          "Maintenance retainer — updates, fixes, security",
          "New products, seasons and campaigns",
          "Performance checks after changes",
          "Design changes as the business grows",
        ],
      },
    ],
  },
];

/* ---------------------------------------------------------------- */
/*  COMPARISON — custom-coded vs the alternatives                     */
/* ---------------------------------------------------------------- */
const compare = [
  { row: "Page speed",               builder: "Slow to mid",    theme: "Mid",             custom: "Fast" },
  { row: "Design control",           builder: "Builder limits", theme: "Theme limits",    custom: "Complete" },
  { row: "Code loaded per page",     builder: "Everything",     theme: "Most of it",      custom: "Only what's needed" },
  { row: "Monthly platform fees",    builder: "Yes",            theme: "Yes",             custom: "Hosting only" },
  { row: "Who owns the code",        builder: "The builder",    theme: "Theme author",    custom: "You" },
  { row: "Time to launch",           builder: "Days",           theme: "Days to weeks",   custom: "Weeks" },
  { row: "Changes need a developer", builder: "Rarely",         theme: "Sometimes",       custom: "Usually" },
];

const steps = [
  { n: "01", t: "Site review or brief", d: "If you have a site, we look at speed, structure, search performance and where visitors give up. If not, we ask what you sell, to whom, and what the site needs to do." },
  { n: "02", t: "Plan and fixed price", d: "A written scope — pages, features, integrations, content — and a fixed project price. Nothing starts until you've agreed it." },
  { n: "03", t: "Design", d: "Page designs for you to react to before any code is written. Mobile first, because that's where most of your visitors are." },
  { n: "04", t: "Build", d: "Hand-coded on a staging site you can see at every stage. Checkout, payments, shipping and tax set up and tested end to end." },
  { n: "05", t: "Launch and handover", d: "Redirects, tracking, monitoring and a final check on real devices, then live. Every file and login handed over with a walkthrough." },
];

const faqs = [
  { q: "What does 'bespoke ecommerce website' actually mean?", a: "A store designed and coded from scratch for your business, rather than configured from a theme or assembled in a page builder. Every page is written by hand in HTML, CSS and JavaScript, so it loads only what it needs, looks the way you want it to, and belongs to you outright. It costs more to build than a theme and less to run." },
  { q: "Why choose an ecommerce web development company over a Shopify theme?", a: "Speed, design control and ownership. A custom-coded site is usually noticeably faster because it carries no theme or app overhead, it can have any layout you want, and there are no platform fees. A Shopify theme wins on speed to launch and on the app ecosystem. We build both, and we'll tell you which fits before quoting." },
  { q: "Do you offer website redesign services for an existing store?", a: "Yes. A redesign starts with what the current site gets right and wrong: speed, structure, search rankings and where visitors leave. We keep what works, redirect every old URL so rankings carry over, and rebuild the rest. If the existing platform is the problem, we'll say so; if it isn't, we'll say that too." },
  { q: "Is a custom site right for a small business?", a: "Often, yes. Our web design services for small business are the same process at a smaller scope: fewer pages, a focused product range, and a build you can update yourself. The main question is who maintains it. If nobody will, a managed platform may suit you better, and we'll tell you." },
  { q: "How do you charge for custom ecommerce website design?", a: "A fixed project price based on a written scope: pages, features, integrations and content. No hourly billing and no scope growing halfway through. Hosting is yours and cheap; a maintenance retainer is optional." },
  { q: "Can you improve conversion on our existing store without a rebuild?", a: "Usually, yes. We look at where visitors leave — the checkout, the product pages, or before the page has finished loading — and separate the fixes that work inside your current setup from the ones your platform or theme will not allow. A lot can be done without a new site: checkout steps, product page content, image sizes and mobile layout. If the honest answer is that the platform itself is the limit, we will tell you that instead of charging for work that cannot pay off." },
  { q: "Will I be able to update the site myself?", a: "Yes. Products, prices, stock and content are editable without touching code, and we walk you through it at handover. Design or feature changes need a developer, which can be us on a retainer or anyone else, because the code is yours and written to be readable." },
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

export default function EcommerceWebsiteDevelopment() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c"),
        }}
      />

      {/* HERO */}
      <section className="page-head" style={{ "--cover": "url(/covers/ecommerce.svg)" }}>
        <div className="wrap">
          <div className="svc-kicker">Custom build · UK &amp; US</div>
          <h1>A Bespoke Ecommerce Website, coded around what you sell.</h1>
          <p>
            An ecommerce web development company for UK and US businesses that
            want a store built by hand: custom design, fast pages, no page
            builder, no platform fees, and code that&apos;s yours to keep.
          </p>
          <div className="acts" style={{ marginTop: 28 }}>
            <Link className="btn btn-acc" href="/contact">
              <span className="t">Talk to us about your site</span> <span className="a">→</span>
            </Link>
            <a className="btn btn-ghost" href="#everything">
              <span className="t">See what&apos;s included</span>
            </a>
          </div>
        </div>
      </section>

      {/* INTRO — why custom-coded */}
      <section>
        <div className="wrap svc-split">
          <div>
            <h2>Why custom-coded, when a theme is quicker?</h2>
            <p>
              Themes and page builders are quick because they load everything
              anyone might need on every page. That is why they are slow, why
              they all look alike, and why the layout you want is never quite
              available.
            </p>
            <p>
              A custom-coded store is the opposite trade. It takes longer to
              build and it is faster, lighter and exactly yours when it&apos;s
              done. For brands where design is part of the product, or where
              page speed is a ranking and conversion issue, that trade pays.
            </p>
          </div>
          <div className="leak-card">
            <div className="leak-row"><span>Builder loads scripts for features you never use</span><b className="bad">slow pages</b></div>
            <div className="leak-row"><span>Theme layout fights your product photography</span><b className="bad">looks generic</b></div>
            <div className="leak-row"><span>Monthly fee for the platform, plus apps</span><b className="bad">rising cost</b></div>
            <div className="leak-row"><span>Code you can&apos;t take with you</span><b className="bad">locked in</b></div>
            <div className="leak-row"><span>Redesign means starting over</span><b className="bad">lost rankings</b></div>
            <div className="leak-row good"><span>Hand-coded, owned, fast</span><b>covered</b></div>
          </div>
        </div>
      </section>

      {/* SPEED */}
      <section className="process-band">
        <div className="wrap">
          <div className="sec-head">
            <h2>Speed and performance are the point</h2>
            <p>
              Page speed affects where you rank and whether visitors stay long
              enough to buy. A hand-coded store is fast because of what it
              leaves out: no theme framework, no builder runtime, no apps
              injecting scripts. Each page carries its own markup, its own
              styles and only the JavaScript it needs. Images are sized and
              lazy-loaded, nothing blocks the first paint, and we check Core
              Web Vitals on real devices before launch and after every
              significant change. The result is a site that stays fast as you
              add products, rather than one that slows with every app.
            </p>
          </div>
        </div>
      </section>

      {/* EVERYTHING — by phase */}
      <div id="everything" />
      {phases.map((ph, pi) => (
        <section key={ph.no} className={pi % 2 === 1 ? "process-band" : ""}>
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
            <h2>Page builder, theme, or custom-coded?</h2>
            <p>Where each approach wins and where it costs you. Our guide to <Link href="/blog/custom-website-vs-shopify">custom websites vs Shopify themes</Link> goes deeper.</p>
          </div>
          <div className="cmp-wrap">
            <table className="cmp">
              <thead>
                <tr>
                  <th></th>
                  <th>Page builder</th>
                  <th>Platform theme</th>
                  <th className="cmp-us">Custom-coded with SOP</th>
                </tr>
              </thead>
              <tbody>
                {compare.map((c) => (
                  <tr key={c.row}>
                    <th>{c.row}</th>
                    <td>{c.builder}</td>
                    <td>{c.theme}</td>
                    <td className="cmp-us">{c.custom}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* REDESIGNS */}
      <section className="process-band">
        <div className="wrap">
          <div className="sec-head">
            <h2>Website redesign services for stores that have outgrown their site</h2>
            <p>
              Most redesigns we take on start with a site that was fine three
              years ago: a theme that has been patched with apps, pages that
              load slowly on a phone, and a layout the business has grown out
              of. We begin by measuring what the current site does well,
              including which pages rank and which convert, so nothing that
              works gets thrown away. Then we redesign around the products
              you sell now, rebuild by hand, redirect every old URL, and launch
              with the rankings intact. If the honest answer is that the
              current platform is fine and only the design needs work, we
              say so. If you are still deciding, our guide to the{" "}
              <Link href="/blog/online-store-redesign-signs">seven signs a store needs a redesign</Link>{" "}
              is a useful place to start.
            </p>
          </div>
        </div>
      </section>

      {/* CRO */}
      <section>
        <div className="wrap prose">
          <h2>Conversion rate optimisation</h2>
          <p>
            Traffic that does not buy is the most expensive problem an online
            store has, because you have already paid for it. So we start by
            finding where visitors give up, rather than guessing at fixes and
            calling it a redesign.
          </p>
          <p>
            Checkout friction is usually first on the list. Every extra field,
            forced account creation, delivery cost that only appears at the
            last step, or returns policy nobody can find is a reason to close
            the tab. We cut the steps to the minimum and make cost and
            delivery clear well before the final page.
          </p>
          <p>
            Product page layout comes next. The page has to answer what a
            shopper would ask in a shop — size, material, what is in the box,
            when it arrives — without making them hunt for it, with images
            that show scale and a buy button that stays reachable.
          </p>
          <p>
            Site speed and mobile are the same problem twice. Most visitors
            arrive on a phone, often on mobile data, and a page whose images
            take several seconds to appear loses people before they have read
            anything.
          </p>
          <p>
            Clients in the US tend to ask for a conversion rate optimization
            service and clients in the UK for a conversion rate optimisation
            service. It is the same work, and we offer ecommerce CRO services
            on stores we built and on stores we did not.
          </p>
        </div>
      </section>

      {/* HOW */}
      <section>
        <div className="wrap">
          <div className="sec-head">
            <h2>How it works</h2>
            <p>From first look to a store that&apos;s live, fast and yours.</p>
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
            <h2>The site is yours, all of it</h2>
            <p>Custom code only counts as an advantage if you actually own it. Here&apos;s how we make sure you do.</p>
          </div>
          <div className="safe-grid">
            <div className="safe"><b>Your code</b><span>Every file handed over at launch, readable by any developer. No proprietary builder, no licence to renew.</span></div>
            <div className="safe"><b>Your hosting and domain</b><span>Registered and paid for in your name. We set them up; we don&apos;t sit between you and them.</span></div>
            <div className="safe"><b>Your data</b><span>Customers, orders and content live on your hosting and your payment provider, not with us.</span></div>
            <div className="safe"><b>No lock-in</b><span>Keep us on a retainer for updates, or take the code elsewhere. Either way it keeps working.</span></div>
          </div>
        </div>
      </section>

      {/* WHY + PROOF */}
      <section>
        <div className="wrap svc-split">
          <div>
            <h2>Why businesses pick us for custom ecommerce website design</h2>
            <ul className="why-list">
              <li><b>Coded by hand, from scratch.</b> No theme underneath, no page builder, nothing loaded that the page doesn&apos;t use.</li>
              <li><b>Built by people who run stores.</b> We manage marketplace accounts and stores every day, so we build what a store actually needs.</li>
              <li><b>SEO and speed from the first page.</b> Structure, schema and Core Web Vitals are part of the build, not a later invoice.</li>
              <li><b>One point of contact.</b> You talk to the person building the site, not someone relaying messages.</li>
              <li><b>Fixed price, written down.</b> Scope and price agreed before work starts, and they don&apos;t move.</li>
            </ul>
          </div>
          <div className="proof-card">
            <div className="proof-lbl">Custom-coded storefront</div>
            <div className="proof-num">Khurmi Store</div>
            <div className="proof-sub">Built from scratch in HTML, CSS and JavaScript — no theme, no page builder. Full control over the design and a layout shaped around the products.</div>
            <Link className="case-link" href="/portfolio">See the Khurmi Store project <span aria-hidden="true">→</span></Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="process-band">
        <div className="wrap">
          <div className="sec-head">
            <h2>Custom ecommerce development questions</h2>
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
        heading="What web development clients say"
        intro="From a site we built and still look after. In their words, not ours."
        items={testimonials.filter((t) => t.service === "Web development")}
      />

      <BlogLinks
        slugs={["custom-website-vs-shopify", "shopify-store-cost"]}
        intro="The trade-offs between a custom build and a platform theme, in plain English."
      />

      {/* CTA */}
      <section>
        <div className="wrap">
          <div className="cta">
            <div className="cta-in">
              <h2>Tell us what the site needs to do.</h2>
              <p>We&apos;ll come back with a written scope, a recommendation on custom versus platform, and a fixed price — usually the same day.</p>
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
