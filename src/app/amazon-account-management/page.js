import Link from "next/link";
import BlogLinks from "@/components/BlogLinks";

export const metadata = {
  title: "Amazon Account Management Services | SOP",
  description:
    "Full Amazon account management services for UK and US sellers: listings, Seller Central, account health, PPC and reporting.",
  alternates: { canonical: "/amazon-account-management" },
};

/* ---------------------------------------------------------------- */
/*  THE WHOLE ACCOUNT — grouped into four phases                     */
/* ---------------------------------------------------------------- */
const phases = [
  {
    no: "01",
    name: "Set up & foundations",
    lead: "Getting the account right before anything is sold — the part most problems trace back to.",
    areas: [
      {
        t: "Seller Central setup",
        items: [
          "Professional seller account registration",
          "Identity and business verification support",
          "Tax, VAT and shipping settings",
          "Multi-marketplace setup — UK, US, EU",
          "User permissions and access control",
        ],
      },
      {
        t: "Brand Registry",
        items: [
          "Amazon Brand Registry application",
          "Trademark requirements guidance",
          "Brand Store design and build",
          "Brand protection and IP reporting",
        ],
      },
    ],
  },
  {
    no: "02",
    name: "Listings that sell",
    lead: "Product pages built to rank in Amazon search and convert the people who land on them.",
    areas: [
      {
        t: "Listing creation",
        items: [
          "New product listings and ASIN setup",
          "Parent–child variations",
          "Category and browse node selection",
          "Bulk listing uploads by flat file",
        ],
      },
      {
        t: "Amazon listing optimisation",
        items: [
          "Keyword research from real search data",
          "Titles written for search and clicks",
          "Bullet points that answer buyer objections",
          "Backend search terms",
          "Listing audits and suppressed-listing fixes",
        ],
      },
      {
        t: "Images & A+ content",
        items: [
          "Image requirements and main-image compliance",
          "Infographic and lifestyle image briefs",
          "A+ / Enhanced Brand Content",
          "Premium A+ where eligible",
        ],
      },
    ],
  },
  {
    no: "03",
    name: "Daily operations",
    lead: "The day-to-day running that keeps an account healthy and selling — the work that never stops.",
    areas: [
      {
        t: "Advertising",
        items: [
          "Sponsored Products, Brands and Display",
          "Keyword and competitor ASIN targeting",
          "Weekly bid and budget management",
          "Negative keyword control",
        ],
        link: { href: "/amazon-ppc-management", label: "Full Amazon PPC management" },
      },
      {
        t: "Inventory & FBA",
        items: [
          "Stock level monitoring",
          "Reorder alerts before you run out",
          "FBA shipment creation and planning",
          "Stranded and excess inventory fixes",
          "FBM order handling",
        ],
      },
      {
        t: "Pricing & Buy Box",
        items: [
          "Competitive pricing strategy",
          "Buy Box monitoring",
          "Promotions, coupons and deals",
          "Lightning Deal and event planning",
        ],
      },
      {
        t: "Customer service",
        items: [
          "Buyer messages inside the 24-hour window",
          "Returns and refund handling",
          "A-to-z claim responses",
          "Order problem resolution",
        ],
      },
    ],
  },
  {
    no: "04",
    name: "Protect & grow",
    lead: "Keeping the account safe, and pushing it forward month after month.",
    areas: [
      {
        t: "Account health",
        items: [
          "Account Health dashboard monitoring",
          "Order defect rate and late shipment tracking",
          "Policy compliance checks",
          "Performance notification responses",
          "Early warning before metrics turn red",
        ],
      },
      {
        t: "Reviews & feedback",
        items: [
          "Seller feedback monitoring",
          "Product review tracking",
          "Amazon Vine enrolment where eligible",
          "Review-policy compliant follow-up",
        ],
      },
      {
        t: "Reporting & growth",
        items: [
          "Monthly performance report",
          "Sales, ad spend, ACoS and TACoS",
          "Business report and traffic analysis",
          "New product and marketplace planning",
        ],
      },
    ],
  },
];

/* ---------------------------------------------------------------- */
/*  WHAT AN ACCOUNT MANAGER DOES — by rhythm                          */
/* ---------------------------------------------------------------- */
const rhythm = [
  {
    when: "Every day",
    items: [
      "Answer buyer messages within Amazon's time limit",
      "Check Account Health for new warnings",
      "Watch stock on your best sellers",
      "Catch suppressed or broken listings",
      "Monitor Buy Box and pricing",
    ],
  },
  {
    when: "Every week",
    items: [
      "Optimise PPC bids, budgets and negatives",
      "Review search terms for new keywords",
      "Plan and send FBA shipments",
      "Handle returns and refunds",
      "Check competitor listings and prices",
    ],
  },
  {
    when: "Every month",
    items: [
      "Full performance report",
      "Listing optimisation on underperformers",
      "Promotion and deal planning",
      "Review of ad strategy and targets",
      "Next month's growth plan",
    ],
  },
];

/* ---------------------------------------------------------------- */
/*  COMPARISON                                                        */
/* ---------------------------------------------------------------- */
const compare = [
  { row: "Covers the whole account",         diy: "You",       va: "Tasks only",    uk: "Yes",       sop: "Yes" },
  { row: "Listing optimisation",             diy: "If time",   va: "Rarely",        uk: "Yes",       sop: "Yes" },
  { row: "PPC management",                   diy: "Guesswork", va: "Rarely",        uk: "Yes",       sop: "Yes" },
  { row: "Account health monitoring",        diy: "Reactive",  va: "Sometimes",     uk: "Yes",       sop: "Daily" },
  { row: "Strategy and planning",            diy: "You",       va: "No",            uk: "Yes",       sop: "Yes" },
  { row: "One point of contact",             diy: "—",         va: "Yes",           uk: "Account mgr", sop: "Yes" },
  { row: "Work done before UK morning",      diy: "—",         va: "Depends",       uk: "No",        sop: "Yes" },
  { row: "Cost",                             diy: "Your time", va: "Low",           uk: "High",      sop: "Mid" },
];

const steps = [
  { n: "01", t: "Account review", d: "We walk through your listings, ads and Account Health — or your product plans if you're launching — and tell you plainly what's working and what isn't." },
  { n: "02", t: "Plan and fixed price", d: "A written plan of what we'll take on and a fixed monthly price, usually within a day. Nothing starts until you've agreed it." },
  { n: "03", t: "Access and first fixes", d: "You add us as a user in Seller Central. The first two weeks go on the obvious gaps — broken listings, wasted ad spend, health warnings." },
  { n: "04", t: "We run it", d: "Daily, weekly and monthly work handled continuously. You focus on product and suppliers." },
  { n: "05", t: "Monthly review", d: "A plain-English report: sales, ad spend, what changed, and what we're doing next month." },
];

const faqs = [
  { q: "What do Amazon account management services include?", a: "Everything it takes to run a seller account: Seller Central setup, listings, listing optimisation, images and A+ content, PPC, inventory and FBA, pricing and the Buy Box, customer service, reviews, account health and monthly reporting. We handle it A to Z, so you're not stitching together a listings freelancer, a PPC specialist and a VA who never talk to each other." },
  { q: "What does an Amazon account manager actually do?", a: "Day to day, an Amazon account manager answers buyer messages, watches Account Health, keeps stock from running out and fixes broken listings. Weekly, they optimise advertising and plan FBA shipments. Monthly, they report on performance and plan what's next. The rhythm section above shows it in full." },
  { q: "Is an agency better than an Amazon virtual assistant?", a: "It depends on what you need. A virtual assistant is good for set tasks you define — uploading listings, answering messages. An agency brings the strategy as well: deciding what to optimise, how to spend on ads, and how to grow. We sit in between on cost, with the full scope of an agency." },
  { q: "Do I have to give you my Seller Central password?", a: "No. Amazon lets you add us as a user with only the permissions we need. You stay the account owner, your payment details stay locked, and you can remove our access in one click." },
  { q: "Can you help with Seller Central problems?", a: "Yes — suppressed listings, stranded inventory, listing errors, category approvals and performance notifications are routine work for us. If something unusual comes up, we'll tell you honestly what we can do about it." },
  { q: "Do you help with Amazon Brand Registry?", a: "Yes. We guide you through the trademark requirements, handle the Brand Registry application, and once you're approved we build your Brand Store and A+ content." },
  { q: "How much does Amazon account management cost?", a: "A fixed monthly fee based on how many products and marketplaces you run. We send the exact figure with the plan, usually within a day of looking at your account — no percentage of your sales and no hourly billing." },
  { q: "Which Amazon marketplaces do you manage?", a: "Amazon UK and Amazon US most often. Tell us where else you sell and we'll say honestly whether we can take it on." },
  { q: "How much of my time will it take?", a: "Very little once we're set up. We'll need you for product decisions, supplier questions and approving major changes. Everything else we handle." },
  { q: "What time zone do you work in?", a: "We're in Pakistan, four to five hours ahead of the UK. Most day-to-day work is finished before your morning, and we overlap with your afternoon for calls." },
];

export default function AmazonAccountManagement() {
  return (
    <>
      {/* HERO */}
      <section className="page-head" style={{ "--cover": "url(/covers/account.svg)" }}>
        <div className="wrap">
          <div className="svc-kicker">Amazon · UK &amp; US</div>
          <h1>Amazon Account Management Services, handled A to Z.</h1>
          <p>
            Full-service Amazon seller account management for UK and US brands —
            from Seller Central setup and listing optimisation to PPC, inventory,
            customer service and account health. One dedicated Amazon account
            manager running the whole account.
          </p>
          <div className="acts" style={{ marginTop: 28 }}>
            <Link className="btn btn-acc" href="/contact">
              <span className="t">Talk to us about your account</span> <span className="a">→</span>
            </Link>
            <a className="btn btn-ghost" href="#everything">
              <span className="t">See everything we cover</span>
            </a>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section>
        <div className="wrap svc-split">
          <div>
            <h2>An Amazon account is fifteen jobs pretending to be one.</h2>
            <p>
              Listings that need rewriting. Ads that need watching every week.
              Stock that runs out on your best seller. Buyer messages on a 24-hour
              clock. Health metrics that can suspend you if one slips.
            </p>
            <p>
              Most sellers end up hiring a listings freelancer, a PPC person and
              an Amazon virtual assistant — three people, three invoices, and
              nobody seeing the whole account. Our Amazon seller account
              management puts all of it with one team.
            </p>
          </div>
          <div className="leak-card">
            <div className="leak-row"><span>Listings written once, never revisited</span><b className="bad">lost sales</b></div>
            <div className="leak-row"><span>Ads nobody is watching</span><b className="bad">wasted spend</b></div>
            <div className="leak-row"><span>Best seller out of stock</span><b className="bad">lost ranking</b></div>
            <div className="leak-row"><span>Late replies to buyers</span><b className="bad">health risk</b></div>
            <div className="leak-row"><span>Nobody watching Account Health</span><b className="bad">suspension risk</b></div>
            <div className="leak-row good"><span>One team on all of it</span><b>covered</b></div>
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

      {/* RHYTHM */}
      <section>
        <div className="wrap">
          <div className="sec-head">
            <h2>What an Amazon account manager actually does</h2>
            <p>The work doesn&apos;t happen once. It happens on a rhythm — here&apos;s ours.</p>
          </div>
          <div className="rhythm">
            {rhythm.map((r) => (
              <div className="rhythm-col" key={r.when}>
                <div className="rhythm-when">{r.when}</div>
                <ul>
                  {r.items.map((it) => <li key={it}>{it}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPARISON */}
      <section className="process-band">
        <div className="wrap">
          <div className="sec-head">
            <h2>Agency, virtual assistant, or do it yourself?</h2>
            <p>An honest comparison of the ways sellers run their Amazon accounts.</p>
          </div>
          <div className="cmp-wrap">
            <table className="cmp">
              <thead>
                <tr>
                  <th></th>
                  <th>Do it yourself</th>
                  <th>Amazon virtual assistant</th>
                  <th>UK agency</th>
                  <th className="cmp-us">SOP</th>
                </tr>
              </thead>
              <tbody>
                {compare.map((c) => (
                  <tr key={c.row}>
                    <th>{c.row}</th>
                    <td>{c.diy}</td>
                    <td>{c.va}</td>
                    <td>{c.uk}</td>
                    <td className="cmp-us">{c.sop}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CONSULTANT */}
      <section>
        <div className="wrap">
          <div className="sec-head">
            <h2>Need an Amazon consultant UK sellers can actually reach?</h2>
            <p>
              If you sell on Amazon.co.uk, you can work with us as your Amazon
              consultant and account manager in one: advice on strategy,
              pricing and where to expand next, plus the day-to-day
              work of running the account: listings, PPC, inventory, customer
              messages and account health. We&apos;re a few hours ahead of the UK,
              so most work is done before your day starts, you talk to the
              person doing it, and you get a written plan and a fixed monthly
              fee before anything begins. It suits new sellers finding their
              feet and established brands that want a second pair of eyes.
            </p>
          </div>
        </div>
      </section>

      {/* HOW */}
      <section>
        <div className="wrap">
          <div className="sec-head">
            <h2>How it works</h2>
            <p>From first look to running the account day to day.</p>
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
            <h2>Your account stays yours</h2>
            <p>Handing over Seller Central is a big step. Here&apos;s how we make it a safe one.</p>
          </div>
          <div className="safe-grid">
            <div className="safe"><b>No password sharing</b><span>You add us as a user with only the permissions we need. Payments and account settings stay locked.</span></div>
            <div className="safe"><b>You stay the owner</b><span>Remove our access in one click, any time, no notice needed.</span></div>
            <div className="safe"><b>No surprises</b><span>Nothing significant changes without you knowing — pricing, listings or strategy.</span></div>
            <div className="safe"><b>Health comes first</b><span>We work inside Amazon&apos;s policies and never take shortcuts that could trigger a review.</span></div>
          </div>
        </div>
      </section>

      {/* WHY + PROOF */}
      <section>
        <div className="wrap svc-split">
          <div>
            <h2>Why sellers hand us the whole account</h2>
            <ul className="why-list">
              <li><b>One team, not three freelancers.</b> Listings, ads and service run by people who see the whole account.</li>
              <li><b>Work done before your day starts.</b> We&apos;re four to five hours ahead of the UK.</li>
              <li><b>One point of contact.</b> You talk to the person running your account, not someone relaying messages.</li>
              <li><b>Agency scope, lower overhead.</b> What a UK Amazon agency covers, without UK office costs.</li>
              <li><b>We stay.</b> One of our clients has been with us for four years.</li>
            </ul>
          </div>
          <div className="proof-card">
            <div className="proof-lbl">Amazon UK seller account</div>
            <div className="proof-num">£32,928</div>
            <div className="proof-sub">in sales across 607 orders on one account we manage</div>
            <Link className="case-link" href="/portfolio">See the work <span aria-hidden="true">→</span></Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="process-band">
        <div className="wrap">
          <div className="sec-head">
            <h2>Amazon account management questions</h2>
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
        slugs={["amazon-account-management-cost", "how-to-choose-an-amazon-agency"]}
        intro="What to expect, what it costs and what to ask before you hand over an account."
      />

      {/* CTA */}
      <section>
        <div className="wrap">
          <div className="cta">
            <div className="cta-in">
              <h2>Hand us the account.</h2>
              <p>Tell us what you sell and where. We&apos;ll come back with a plan and a fixed monthly price — usually the same day.</p>
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
