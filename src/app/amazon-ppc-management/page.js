import Link from "next/link";

export const metadata = {
  title: "Amazon PPC Agency for UK & US Sellers | SOP",
  description:
    "Amazon PPC management services for UK and US sellers. Campaign setup, bid management, keyword research and clear monthly reporting.",
  alternates: { canonical: "/amazon-ppc-management" },
};

const whatWeDo = [
  {
    t: "Campaign structure",
    d: "Sponsored Products, Sponsored Brands and Sponsored Display, organised so you can see which products and keywords actually make money.",
  },
  {
    t: "Keyword research",
    d: "Search term mining from your own data, competitor ASIN targeting, and long-tail terms your rivals haven't found yet.",
  },
  {
    t: "Bid management",
    d: "Bids adjusted against real performance, not guesswork — raised where terms convert, cut where they only spend.",
  },
  {
    t: "Negative keywords",
    d: "The fastest way to stop wasting money. We cut the searches that click but never buy, every week.",
  },
  {
    t: "Budget pacing",
    d: "Spend spread across the month so campaigns don't run dry by the 20th and miss your best-selling days.",
  },
  {
    t: "Weekly reporting",
    d: "Spend, sales, ACoS and TACoS in plain English — what changed, why, and what we're doing next.",
  },
];

const steps = [
  { n: "01", t: "Account audit", d: "We look at your current campaigns — or your listings if you're starting fresh — and show you where the money is going. Free, and yours to keep whether you hire us or not." },
  { n: "02", t: "Plan and fixed price", d: "A written plan: campaign structure, target ACoS, and a fixed monthly fee. No percentage-of-spend surprises." },
  { n: "03", t: "Launch or rebuild", d: "New campaigns go live, or existing ones get restructured. Usually within the first week." },
  { n: "04", t: "Weekly optimisation", d: "Bids, negatives and budgets reviewed every week. The first month is where most of the waste comes out." },
  { n: "05", t: "Report and repeat", d: "A short weekly update and a fuller monthly review. You always know what your ad spend is doing." },
];

const terms = [
  { k: "ACoS", n: "Advertising cost of sales", d: "Ad spend divided by the sales those ads produced. £20 spent for £100 of ad sales is a 20% ACoS — lower is more efficient." },
  { k: "TACoS", n: "Total advertising cost of sales", d: "Ad spend divided by all your sales, organic included. Shows whether ads are lifting the whole business or just paying for themselves." },
  { k: "ROAS", n: "Return on ad spend", d: "Sales divided by ad spend — the inverse of ACoS. A 20% ACoS is a 5× ROAS." },
  { k: "CTR", n: "Click-through rate", d: "Clicks divided by impressions. A low CTR usually means the wrong keywords or a weak main image and title." },
  { k: "CPC", n: "Cost per click", d: "What you pay each time a shopper clicks your ad. Set by auction, so bids and competition decide it." },
];

const faqs = [
  { q: "How do you charge for Amazon PPC management?", a: "A fixed monthly fee, agreed before we start and based on how many products and campaigns you run. We don't take a percentage of your ad spend — that model rewards an agency for spending more of your money, which is the wrong incentive." },
  { q: "Do I need to give you my Seller Central password?", a: "No. Amazon lets you add us as a user with only the permissions we need — advertising access, not your payments or account settings. You stay the owner and can remove us in one click." },
  { q: "Will this put my account at risk?", a: "Advertising changes don't touch your account health. We never change listings, pricing or anything outside advertising without asking you first, and we follow Amazon's policies on every change." },
  { q: "How quickly will I see results?", a: "Wasted spend usually drops in the first two to three weeks, as negatives and bid cuts take effect. Sales growth takes longer — typically six to eight weeks for campaigns to gather enough data to scale properly." },
  { q: "Is there a minimum contract?", a: "No long contract. Month to month, with notice at the end of any month. We'd rather keep you because it's working." },
  { q: "Which marketplaces do you cover?", a: "Amazon UK and Amazon US most often, and the wider EU marketplaces too. We work to your time zone, not ours." },
  { q: "What time zone do you work in?", a: "We're in Pakistan, four to five hours ahead of the UK. That means optimisation work is usually done before your working day starts, and we overlap with your afternoon for calls." },
];

/* Mock dashboard. All figures are illustrative — not client data. */
const BARS = [42, 50, 58, 70, 82, 92, 102, 110];
const ACOS_LINE = "M27 30 L75 34 L123 38 L171 54 L219 64 L267 72 L315 78 L363 82";

function Dashboard() {
  return (
    <div className="dash" aria-label="Illustrative Amazon PPC dashboard">
      <div className="dash-top">
        <div className="dash-title">
          Sponsored Products
          <span>Last 8 weeks · illustrative</span>
        </div>
        <div className="dash-pill">Weekly review</div>
      </div>

      <div className="kpis">
        <div className="kpi">
          <div className="kpi-l">Ad spend</div>
          <div className="kpi-v">£1,240</div>
          <div className="kpi-d good">▼ 18%</div>
        </div>
        <div className="kpi">
          <div className="kpi-l">Sales</div>
          <div className="kpi-v">£6,180</div>
          <div className="kpi-d good">▲ 31%</div>
        </div>
        <div className="kpi">
          <div className="kpi-l">ACoS</div>
          <div className="kpi-v">20.1%</div>
          <div className="kpi-d good">▼ from 34%</div>
        </div>
      </div>

      <div className="chart">
        <svg viewBox="0 0 400 130" role="img" aria-label="Bar chart of weekly sales rising while the ACoS line falls">
          <g className="grid">
            <path d="M12 30H388" /><path d="M12 60H388" /><path d="M12 90H388" />
          </g>
          {BARS.map((h, i) => (
            <rect
              key={i}
              className={i < 3 ? "bar dim" : "bar"}
              x={12 + i * 48}
              y={118 - h}
              width="30"
              height={h}
              rx="6"
              style={{ animationDelay: `${i * 0.08}s` }}
            />
          ))}
          <path className="line" d={ACOS_LINE} />
          <path d="M12 118H388" className="axis" />
        </svg>
        <div className="chart-legend">
          <span><i className="sw sw-sales" />Sales</span>
          <span><i className="sw sw-acos" />ACoS</span>
          <span><i className="sw sw-before" />Before we started</span>
        </div>
      </div>
      <div className="dash-note">Illustrative figures to show the layout — not a real client account.</div>
    </div>
  );
}

export default function AmazonPPC() {
  return (
    <>
      {/* HERO — light, with dashboard */}
      <section className="ppc-hero">
        <div className="wrap">
          <div>
            <div className="svc-kicker">Amazon · UK &amp; US</div>
            <h1>The Amazon PPC Agency that stops the waste first.</h1>
            <p>
              Amazon PPC management for sellers in the UK and US: campaign
              setup, keyword research, bid management and weekly reporting. Fixed monthly fee.
              No long contracts. Part of our{" "}
              <Link href="/amazon-account-management">full Amazon account management</Link>
              , or on its own.
            </p>
            <div className="acts">
              <Link className="btn btn-acc" href="/contact">
                <span className="t">Get a free PPC audit</span> <span className="a">→</span>
              </Link>
              <a className="btn btn-ghost" href="#how">
                <span className="t">How it works</span>
              </a>
            </div>
          </div>
          <Dashboard />
        </div>
      </section>

      {/* PROBLEM — before vs after */}
      <section>
        <div className="wrap">
          <div className="sec-head">
            <h2>Most Amazon ad budgets leak before they sell.</h2>
            <p>
              Broad-match keywords that pull in the wrong searches. Bids that
              haven&apos;t moved in months. Campaigns that burn through the
              budget by the third week. Search terms that click all day and
              never convert.
            </p>
            <p>
              None of it shows up as an error. It just shows up as an ACoS
              that won&apos;t come down, and a feeling that ads are a cost
              rather than an engine.
            </p>
          </div>
          <div className="ba">
            <div className="ba-col before">
              <div className="ba-h">Before</div>
              <ul>
                <li>Clicks on irrelevant searches — wasted spend</li>
                <li>Stale bids on keywords that stopped converting</li>
                <li>No negative keyword list at all</li>
                <li>Budget gone by day 20, best-selling days missed</li>
              </ul>
            </div>
            <div className="ba-arrow" aria-hidden="true">→</div>
            <div className="ba-col after">
              <div className="ba-h">After the first month</div>
              <ul>
                <li>Irrelevant search terms cut, spend back on buyers</li>
                <li>Bids reviewed weekly against real performance</li>
                <li>Negatives added every week, automatically reviewed</li>
                <li>Budget paced across the whole month</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE DO — numbered list */}
      <section className="process-band">
        <div className="wrap">
          <div className="sec-head">
            <h2>What&apos;s included</h2>
            <p>Everything it takes to run Amazon advertising properly — not just the setup.</p>
          </div>
          <ol className="numlist">
            {whatWeDo.map((w, i) => (
              <li className="num-item" key={w.t}>
                <div className="num">{String(i + 1).padStart(2, "0")}</div>
                <div>
                  <h3>{w.t}</h3>
                  <p>{w.d}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* PPC TERMS */}
      <section>
        <div className="wrap">
          <div className="sec-head">
            <h2>PPC terms explained</h2>
            <p>The five numbers you&apos;ll see in every report, in plain English.</p>
          </div>
          <dl className="terms">
            {terms.map((t) => (
              <div className="term" key={t.k}>
                <dt>{t.k}<small>{t.n}</small></dt>
                <dd>{t.d}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* HOW — vertical steps */}
      <section className="process-band" id="how">
        <div className="wrap">
          <div className="sec-head">
            <h2>How it works</h2>
            <p>From first look to weekly optimisation.</p>
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

      {/* WHY */}
      <section>
        <div className="wrap">
          <div className="sec-head">
            <h2>Why sellers pick us</h2>
          </div>
          <ul className="why-list why-wide">
            <li><b>One point of contact.</b> You talk to the person running your campaigns, not an account manager relaying messages.</li>
            <li><b>Work done before your day starts.</b> We&apos;re four to five hours ahead of the UK, so optimisation is usually finished by the time you log in.</li>
            <li><b>Fixed fee, not a cut of your spend.</b> We&apos;re paid to make your ads profitable, not to make them bigger.</li>
            <li><b>Same standard, lower overhead.</b> UK-agency quality without UK-agency office costs.</li>
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section className="process-band">
        <div className="wrap">
          <div className="sec-head">
            <h2>Amazon PPC questions</h2>
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

      {/* CTA */}
      <section>
        <div className="wrap">
          <div className="cta">
            <div className="cta-in">
              <h2>Start with a free audit.</h2>
              <p>We&apos;ll look at your campaigns and show you where the money&apos;s going — whether or not you hire us.</p>
            </div>
            <div className="cta-actions">
              <Link className="btn btn-acc" href="/contact">
                <span className="t">Request the audit</span> <span className="a">→</span>
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
