import Link from "next/link";
import BlogLinks from "@/components/BlogLinks";
import PricingCards from "@/components/PricingCards";

export const metadata = {
  title: "Amazon Account Management Services | SOP",
  description:
    "Full service Amazon agency for UK and US sellers. Seller Central and Vendor Central account management, listings and catalogue support.",
  alternates: { canonical: "/amazon-account-management" },
};

/* ---------------------------------------------------------------- */
/*  THE WHOLE ACCOUNT — grouped into four phases                     */
/*  Each heading reads on its own, and each lead opens with what the  */
/*  seller gets rather than what the phase is called.                */
/* ---------------------------------------------------------------- */
const phases = [
  {
    no: "01",
    name: "Getting the account set up correctly",
    lead: "Most account problems trace back to a setting nobody checked at the start, and this is the part that stops them happening. It includes Brand Registry end to end: the trademark requirements, the application itself, then the Brand Store and A+ content once you are approved.",
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
    name: "Listings built to rank and convert",
    lead: "A listing has two jobs — get found, and convert the people who find it. Both are fixable, and on most accounts both are leaving money on the table.",
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
    name: "The daily work of running the account",
    lead: "This is the work that never stops, and the work that quietly costs you money the moment nobody is doing it.",
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
    name: "Protecting account health and growing month on month",
    lead: "An account can be profitable and one metric away from a suspension. This is the half of the job that protects what the other half built.",
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
/*  WHO IT SUITS — and the cases where we say no                      */
/* ---------------------------------------------------------------- */
const notFor = [
  {
    t: "You want one thing fixed.",
    d: "A suppressed listing, a catalogue clean-up, a round of listing optimisation — those are projects, not a monthly service. Ask us for the project.",
  },
  {
    t: "The real problem is the product or the margin.",
    d: "No amount of management makes a product people do not want sell, and management cannot create a margin that was never there.",
  },
  {
    t: "You want a guaranteed outcome.",
    d: "We do not promise a ranking, a reinstatement or a sales figure, and anyone who does is telling you something about themselves.",
  },
  {
    t: "The fee is a large share of your sales.",
    d: "Below a certain volume this does not pay for itself, and we will tell you if we think that is where you are.",
  },
  {
    t: "You want to approve every change.",
    d: "Some sellers do, and that is reasonable — but it is consultancy rather than management. We offer that too; it is a different arrangement.",
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

/* ---------------------------------------------------------------- */
/*  FAQ — questions taken from the pages ranking for this keyword,    */
/*  not invented. Everything else they used to answer now lives in    */
/*  the body sections above.                                          */
/* ---------------------------------------------------------------- */
const faqs = [
  { q: "What are Amazon account management services?", a: "Ongoing services that run a seller account day to day rather than fixing one part of it: Seller Central setup, listings and catalogue, images and A+ content, PPC, inventory and FBA, pricing and the Buy Box, buyer messages, reviews, account health and monthly reporting. Scope varies a lot between providers, so the useful question to ask any of them is which of those they are not covering." },
  { q: "What does an Amazon account manager do daily?", a: "Day to day: answer buyer messages inside Amazon's time limit, check Account Health for new warnings, watch stock on the best sellers, catch suppressed or broken listings, and monitor the Buy Box and pricing. Weekly work is advertising bids, budgets, negatives and FBA shipments. Monthly is reporting and planning. The rhythm section above sets out all three in full." },
  { q: "How much do Amazon account management services cost?", a: "Ours is a fixed monthly fee based on how many products and marketplaces you run — the tiers are on this page, and we send the exact figure with a written plan, usually within a day of looking at your account. No percentage of your sales and no hourly billing. Across the market, be wary of any quote given before someone has looked at the account." },
  { q: "Does Amazon provide account managers?", a: "Amazon runs a paid programme of its own for eligible sellers, Strategic Account Services. It is not the same thing as hiring an agency, and what it covers and who qualifies are Amazon's to state rather than ours, so check it in Seller Central. The practical difference is that Amazon's people advise you on your account; an agency operates it." },
  { q: "Do I have to give an agency access to my Seller Central account?", a: "You never share a password. Amazon lets you add a user with only the permissions they need, so you stay the account owner, your payment and bank details stay locked, and you can remove the access in one click with no notice." },
  { q: "Can you help recover a suspended Amazon account?", a: "Routine Seller Central problems — suppressed listings, stranded inventory, listing errors, category approvals, performance notifications — are everyday work. Suspensions are different. We work on wholesale account suspensions, listing suspensions and brand suspensions, and we will tell you plainly what we think is possible, including when we think it is not. What we will not do is promise reinstatement: the outcome depends entirely on the reason and the evidence, and some cases are not recoverable." },
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
            Amazon account management services for UK and US sellers — Seller
            Central setup, listings, PPC, inventory, customer messages and
            account health, run by one team. One Amazon account manager, the
            whole account.
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

      {/* DEFINITION — the direct answer, first thing after the hero */}
      <section>
        <div className="wrap prose">
          <h2>What Amazon account management covers</h2>
          <p>
            Amazon account management is the ongoing work of running a seller
            account day to day: listings and catalogue, advertising, inventory
            and FBA, pricing and the Buy Box, buyer messages, and account
            health — handled as one continuous job rather than a set of
            separate tasks.
          </p>
          <p>
            It is not a one-off project. Setting up a Seller Central account,
            rewriting a batch of listings or building A+ content are jobs with
            an end. Account management is the part that does not end: the Buy
            Box you can lose on a Tuesday, the listing that gets suppressed
            without a notification, the ad budget that runs out at midday, the
            health metric that slips.
          </p>
          <p>
            That is why it is usually structured as a monthly service rather
            than a project fee. What varies between providers is scope — some
            cover advertising only, some cover listings only, and some cover
            the account. Ours covers the account, and the four sections below
            set out exactly what that includes.
          </p>
        </div>
      </section>

      {/* WHY ACCOUNTS DRIFT */}
      <section>
        <div className="wrap svc-split">
          <div>
            <h2>Why accounts drift when nobody owns them</h2>
            <p>
              An Amazon account is fifteen jobs pretending to be one. Listings
              that need rewriting. Ads that need watching every week. Stock
              that runs out on your best seller. Buyer messages on a 24-hour
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
            <p>
              An honest comparison of the ways sellers run their Amazon
              accounts. A virtual assistant is good for set tasks you define —
              uploading listings, answering messages. An agency brings the
              decisions as well: what to optimise, how to spend on ads, where
              to grow next. We sit between the two on cost, with the full scope
              of an agency.
            </p>
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

      {/* WHO IT SUITS */}
      <section>
        <div className="wrap prose">
          <h2>Who Amazon account management suits — and who it doesn&apos;t</h2>
          <p>
            It suits sellers for whom the daily work has become a real job:
            enough volume that messages, stock, ads and health checks fill a
            slot every day, and enough margin that paying someone to do it
            properly costs less than doing it badly. It also suits brands with
            strong products and supplier relationships but nobody who knows
            Amazon, and sellers who have been running it themselves and can
            feel it slipping.
          </p>
          <p>It does not suit everyone, and these are the cases where we would say so:</p>
          <ul className="why-list">
            {notFor.map((n) => (
              <li key={n.t}><b>{n.t}</b> {n.d}</li>
            ))}
          </ul>
          <p style={{ marginTop: 26 }}>
            On scope, there are two ways in. Some sellers hand over the account
            entirely and we act as the account manager. Others have their own
            staff and want us on specific parts — advertising, listings, a
            catalogue clean-up — reporting to their own manager. We agree in
            writing which parts are ours and which stay with your team, so
            nothing falls between the two.
          </p>
          <p>
            On consoles and marketplaces: most sellers we work with are on
            Seller Central, Amazon UK and Amazon US, and that is where the
            daily routine sits. On Vendor Central we cover the catalogue,
            listing side and reporting. The two consoles behave differently, so
            tell us which you are on and we will say plainly what we would take
            on rather than working it out on your account.
          </p>
        </div>
      </section>

      {/* FULL SERVICE */}
      <section className="process-band">
        <div className="wrap prose">
          <h2>Working with a full service Amazon agency</h2>
          <p>
            &ldquo;Full service&rdquo; gets used loosely, so here is what it
            means with us. As an Amazon account management agency we take on
            the account as a whole rather than a list of tasks: listings and
            catalogue, advertising, inventory, pricing, customer messages,
            account health and reporting, run by one team that sees how each
            part affects the others. That includes the approvals that stand
            between a product and a live listing — our{" "}
            <Link href="/blog/how-to-get-amazon-brand-approval">Amazon brand approval case study</Link>{" "}
            walks through getting a gated Beauty &amp; Health brand unlocked for
            a wholesale seller.
          </p>
          <p>
            That is the difference from hiring piecemeal. A freelancer can
            rewrite your pages but never sees what advertising is spending. A
            virtual assistant can answer messages but is not deciding
            strategy. An Amazon listing agency will improve the catalogue and
            stop at the catalogue.
          </p>
          <p>
            Some sellers want advice rather than hands on the account. Our
            Amazon consultancy work covers that: an honest read of where the
            account stands, what to fix first, and how to plan a launch or a
            new marketplace, with your own team doing the work. Sellers on
            Amazon.co.uk often want both, and use us as their Amazon
            consultant UK alongside the team actually running the account.
          </p>
          <p>
            Tell us which console you sell through and how much you want to
            hand over, and we will scope it in writing before anything starts.
          </p>
        </div>
      </section>

      {/* HOW */}
      <section>
        <div className="wrap">
          <div className="sec-head">
            <h2>How it works</h2>
            <p>
              From first look to running the account day to day. Once it is
              running we need you for product decisions, supplier questions and
              approving anything significant — everything else sits with us.
            </p>
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

      {/* PROOF */}
      <section>
        <div className="wrap prose">
          <h2>What we have done, and what we will not promise</h2>
          <p>
            The strongest thing we can show on this page is approvals, because
            they are the part most sellers get stuck on.
          </p>
          <p>
            <b>11 brand and category approvals secured for clients.</b> The
            brands approved so far: Estée Lauder, Clinique, CeraVe, RYOBI,
            STANLEY, MOPAR, PowerA and Forever. Alongside those, one
            sub-category approval: Figurines. Estée Lauder was approved on
            three separate seller accounts. All of it came up inside account
            management work we were already doing, rather than as a standalone
            service.
          </p>
          <p>
            <b>Not every application was approved first time.</b> Some came
            back declined and had to be resubmitted with corrected invoices and
            additional supplier documentation. That is the part most accounts
            of this process leave out, and it is the part that matters if you
            are planning for it. Amazon&apos;s stated decision window on these
            applications was 7 days; several came back faster, and one
            submitted on 10 Oct was approved on 12 Oct against an expected
            decision date of 17 Oct. That is what happened on those
            applications, not a turnaround to plan around.
          </p>
          <p>
            The full story is in our{" "}
            <Link href="/blog/how-to-get-amazon-brand-approval">Amazon brand approval guide</Link>.
          </p>
          <p>
            <b>On suspensions,</b> we work on wholesale account suspensions,
            listing suspensions and brand suspensions for clients. We do not
            publish a reinstatement success rate, and the reason is worth
            saying plainly: the figure would tell you more about which cases a
            provider accepted than about the work they do.
          </p>
        </div>
      </section>

      {/* WHY + PROOF CARD */}
      <section>
        <div className="wrap svc-split">
          <div>
            <h2>Why sellers hand us the whole account</h2>
            <ul className="why-list">
              <li><b>One team, not three freelancers.</b> Listings, ads and service run by people who see the whole account.</li>
              <li><b>Work done before your day starts.</b> We&apos;re four to five hours ahead of the UK.</li>
              <li><b>One point of contact.</b> You talk to the person running your account, not someone relaying messages.</li>
              <li><b>Agency scope, lower overhead.</b> What a UK Amazon agency covers, without UK office costs.</li>
              <li><b>We stay.</b> We have run one client&apos;s store since launch — four years, through every update, redesign and product expansion.</li>
            </ul>
          </div>
          <div className="proof-card">
            <div className="proof-lbl">One seller account</div>
            <div className="proof-num">£32,928</div>
            <div className="proof-sub">in sales across 607 orders in six months, entirely organic</div>
            <Link className="case-link" href="/portfolio">See the work <span aria-hidden="true">→</span></Link>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <PricingCards
        title="Amazon account management pricing"
        adSpend
        below="New account setup: $300 one-time. Minimum 3 months."
        tiers={[
          {
            name: "Starter",
            price: "$700",
            period: "/month",
            note: "Up to £5,000 monthly Amazon sales",
            features: [
              "Listings and A+ upkeep",
              "PPC management",
              "Inventory and FBA shipments",
              "Account health and returns",
              "Monthly report",
            ],
          },
          {
            name: "Growth",
            price: "$1,200",
            period: "/month",
            note: "£5,000 to £20,000 monthly sales",
            highlight: true,
            features: [
              "Everything in Starter",
              "Weekly PPC review",
              "Priority support",
            ],
          },
          {
            name: "Scale",
            price: "$1,800",
            period: "/month",
            note: "Over £20,000 monthly sales (or 5% of sales, whichever is higher)",
            features: [
              "Everything in Growth",
              "Dedicated point of contact",
              "Multi-marketplace support",
            ],
          },
        ]}
      />

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
