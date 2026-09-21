import Link from "next/link";

export const metadata = {
  title: "Amazon PPC Management Services for UK & US Sellers | SOP",
  description:
    "Amazon PPC management for UK and US sellers — campaign setup, keyword research, bid management and weekly reporting. Fixed monthly fee, no long contracts.",
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

const faqs = [
  { q: "How do you charge for Amazon PPC management?", a: "A fixed monthly fee, agreed before we start and based on how many products and campaigns you run. We don't take a percentage of your ad spend — that model rewards an agency for spending more of your money, which is the wrong incentive." },
  { q: "Do I need to give you my Seller Central password?", a: "No. Amazon lets you add us as a user with only the permissions we need — advertising access, not your payments or account settings. You stay the owner and can remove us in one click." },
  { q: "Will this put my account at risk?", a: "Advertising changes don't touch your account health. We never change listings, pricing or anything outside advertising without asking you first, and we follow Amazon's policies on every change." },
  { q: "How quickly will I see results?", a: "Wasted spend usually drops in the first two to three weeks, as negatives and bid cuts take effect. Sales growth takes longer — typically six to eight weeks for campaigns to gather enough data to scale properly." },
  { q: "Is there a minimum contract?", a: "No long contract. Month to month, with notice at the end of any month. We'd rather keep you because it's working." },
  { q: "Which marketplaces do you cover?", a: "Amazon UK and Amazon US most often, and the wider EU marketplaces too. We work to your time zone, not ours." },
  { q: "What time zone do you work in?", a: "We're in Pakistan, four to five hours ahead of the UK. That means optimisation work is usually done before your working day starts, and we overlap with your afternoon for calls." },
];

export default function AmazonPPC() {
  return (
    <>
      {/* HERO */}
      <section className="page-head" style={{ "--cover": "url(/covers/services.svg)" }}>
        <div className="wrap">
          <div className="svc-kicker">Amazon · UK &amp; US</div>
          <h1>Amazon PPC management that stops the waste first.</h1>
          <p>
            Campaign setup, keyword research, bid management and weekly
            reporting for Amazon sellers in the UK and US. Fixed monthly fee.
            No long contracts. Part of our{" "}
            <Link href="/amazon-account-management" style={{ color: "var(--blue)", fontWeight: 600 }}>
              full Amazon account management
            </Link>
            , or on its own.
          </p>
          <div className="acts" style={{ marginTop: 28 }}>
            <Link className="btn btn-acc" href="/contact">
              <span className="t">Get a free PPC audit</span> <span className="a">→</span>
            </Link>
            <a className="btn btn-ghost" href="#how">
              <span className="t">How it works</span>
            </a>
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section>
        <div className="wrap svc-split">
          <div>
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
          <div className="leak-card">
            <div className="leak-row"><span>Clicks on irrelevant searches</span><b className="bad">wasted</b></div>
            <div className="leak-row"><span>Stale bids on dead keywords</span><b className="bad">wasted</b></div>
            <div className="leak-row"><span>Budget gone by day 20</span><b className="bad">missed sales</b></div>
            <div className="leak-row"><span>No negative keyword list</span><b className="bad">wasted</b></div>
            <div className="leak-row good"><span>What we fix first</span><b>all four</b></div>
          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="process-band">
        <div className="wrap">
          <div className="sec-head">
            <h2>What&apos;s included</h2>
            <p>Everything it takes to run Amazon advertising properly — not just the setup.</p>
          </div>
          <div className="cards">
            {whatWeDo.map((w) => (
              <div className="card" key={w.t}>
                <h3>{w.t}</h3>
                <p>{w.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW */}
      <section id="how">
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

      {/* SAFETY */}
      <section className="process-band">
        <div className="wrap">
          <div className="sec-head">
            <h2>Your account stays yours</h2>
            <p>Handing an agency access to Seller Central is a big step. Here&apos;s how we make it a safe one.</p>
          </div>
          <div className="safe-grid">
            <div className="safe"><b>No password sharing</b><span>You add us as a user with advertising-only permissions. Payments and account settings stay locked.</span></div>
            <div className="safe"><b>Remove us in one click</b><span>You stay the account owner. Revoke access any time, no notice needed.</span></div>
            <div className="safe"><b>Nothing outside ads</b><span>We never touch listings, pricing or inventory without asking first.</span></div>
            <div className="safe"><b>Policy-safe changes</b><span>Every change follows Amazon&apos;s advertising policies. Nothing that risks your account health.</span></div>
          </div>
        </div>
      </section>

      {/* PROOF + WHY */}
      <section>
        <div className="wrap svc-split">
          <div>
            <h2>Why sellers pick us</h2>
            <ul className="why-list">
              <li><b>One point of contact.</b> You talk to the person running your campaigns, not an account manager relaying messages.</li>
              <li><b>Work done before your day starts.</b> We&apos;re four to five hours ahead of the UK, so optimisation is usually finished by the time you log in.</li>
              <li><b>Fixed fee, not a cut of your spend.</b> We&apos;re paid to make your ads profitable, not to make them bigger.</li>
              <li><b>Same standard, lower overhead.</b> UK-agency quality without UK-agency office costs.</li>
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