import Link from "next/link";

export const metadata = {
  title: "Amazon Account Management Services for UK & US Sellers | SOP",
  description:
    "Full-service Amazon account management for UK and US sellers — listings, advertising, inventory, customer service, account health and brand growth. Fixed monthly fee, no long contracts.",
  alternates: { canonical: "/amazon-account-management" },
};

const scope = [
  {
    t: "Listings & catalogue",
    d: "New listings written and built properly, existing ones cleaned up — titles, bullets, backend keywords, images and A+ content that actually convert.",
  },
  {
    t: "Advertising",
    d: "Sponsored Products, Brands and Display run alongside the rest of the account, so ads and listings pull in the same direction instead of fighting each other.",
  },
  {
    t: "Inventory & pricing",
    d: "FBA shipments planned before you run out, FBM orders kept moving, and prices adjusted against competitors so you win the Buy Box without racing to the bottom.",
  },
  {
    t: "Customer service",
    d: "Buyer messages answered within Amazon's 24-hour window, returns processed, and negative feedback handled before it dents your rating.",
  },
  {
    t: "Account health",
    d: "Performance notifications watched daily, policy issues fixed before they escalate, and suspension appeals written and filed if the worst happens.",
  },
  {
    t: "Brand & growth",
    d: "Brand Registry, brand store, new-market launches and product expansion — the work that turns a seller account into a business.",
  },
];

const steps = [
  { n: "01", t: "Account audit", d: "We go through your whole account — listings, ads, inventory, health, feedback — and show you what's costing sales. Free, and yours to keep whether you hire us or not." },
  { n: "02", t: "Plan and fixed price", d: "A written plan covering what we'll take on, in what order, and a fixed monthly fee. No percentage-of-sales surprises." },
  { n: "03", t: "Handover", d: "You add us to Seller Central with only the permissions we need. We pick up the daily work from day one." },
  { n: "04", t: "Fix, then build", d: "The first month is about stopping the leaks — health issues, broken listings, wasted ad spend. After that, growth." },
  { n: "05", t: "Report and repeat", d: "A short weekly update and a fuller monthly review. You always know what's happening in your account without logging in." },
];

const faqs = [
  { q: "How do you charge for Amazon account management?", a: "A fixed monthly fee, agreed before we start and based on the size of your catalogue and how much of the account you want us to run. We don't take a percentage of your sales — you should keep the upside of your own growth." },
  { q: "Do I need to give you my Seller Central password?", a: "No. Amazon lets you add us as a secondary user with only the permissions the work needs. Payments, bank details and account ownership stay with you, and you can remove us in one click." },
  { q: "Can you take over an account that's already in trouble?", a: "Yes — that's a lot of what we do. Suspended listings, account health warnings, stranded inventory, a catalogue that's been neglected. We start with the problems that block sales, then work back to growth." },
  { q: "Do you handle advertising too, or just the account?", a: "Both. Advertising is part of full account management. If you only want ads run, we offer Amazon PPC management on its own." },
  { q: "Is there a minimum contract?", a: "No long contract. Month to month, with notice at the end of any month. We'd rather keep you because it's working." },
  { q: "Which marketplaces do you cover?", a: "Amazon UK and Amazon US most often, and the wider EU marketplaces too. We work to your time zone, not ours." },
  { q: "What time zone do you work in?", a: "We're in Pakistan, four to five hours ahead of the UK. Buyer messages and overnight issues are usually dealt with before your working day starts, and we overlap with your afternoon for calls." },
];

export default function AmazonAccountManagement() {
  return (
    <>
      {/* HERO */}
      <section className="page-head" style={{ "--cover": "url(/covers/services.svg)" }}>
        <div className="wrap">
          <div className="svc-kicker">Amazon · UK &amp; US</div>
          <h1>Amazon account management, handled end to end.</h1>
          <p>
            Listings, advertising, inventory, customer service and account
            health for Amazon sellers in the UK and US. One team running the
            whole account. Fixed monthly fee. No long contracts. Or take{" "}
            <Link href="/amazon-ppc-management" style={{ color: "var(--blue)", fontWeight: 600 }}>
              PPC management
            </Link>{" "}
            on its own.
          </p>
          <div className="acts" style={{ marginTop: 28 }}>
            <Link className="btn btn-acc" href="/contact">
              <span className="t">Get a free account audit</span> <span className="a">→</span>
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
            <h2>An Amazon account is a full-time job. Most sellers have another one.</h2>
            <p>
              Buyer messages that need answering inside 24 hours. FBA stock
              that runs out on a Friday. A listing suppressed for a missing
              attribute. An account health notification you don&apos;t have
              time to read properly.
            </p>
            <p>
              None of it is hard on its own. Together, it&apos;s the reason
              growth stalls — you&apos;re maintaining the account instead of
              building it.
            </p>
          </div>
          <div className="leak-card">
            <div className="leak-row"><span>Late buyer replies</span><b className="bad">rating hit</b></div>
            <div className="leak-row"><span>Stock-outs on best sellers</span><b className="bad">lost rank</b></div>
            <div className="leak-row"><span>Suppressed or thin listings</span><b className="bad">missed sales</b></div>
            <div className="leak-row"><span>Health warnings left unread</span><b className="bad">account risk</b></div>
            <div className="leak-row good"><span>What we take off your plate</span><b>all of it</b></div>
          </div>
        </div>
      </section>

      {/* SCOPE */}
      <section className="process-band">
        <div className="wrap">
          <div className="sec-head">
            <h2>What we manage</h2>
            <p>The whole account, not just the parts that are easy to outsource.</p>
          </div>
          <div className="cards">
            {scope.map((s) => (
              <div className="card" key={s.t}>
                <h3>{s.t}</h3>
                <p>{s.d}</p>
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
            <p>Handing an agency the keys to Seller Central is a big step. Here&apos;s how we make it a safe one.</p>
          </div>
          <div className="safe-grid">
            <div className="safe"><b>No password sharing</b><span>You add us as a user with only the permissions the work needs. Payments and bank details stay locked.</span></div>
            <div className="safe"><b>Remove us in one click</b><span>You stay the account owner. Revoke access any time, no notice needed.</span></div>
            <div className="safe"><b>Nothing irreversible without asking</b><span>Price changes, listing deletions and account settings are agreed with you first.</span></div>
            <div className="safe"><b>Policy-safe changes</b><span>Every change follows Amazon&apos;s selling policies. Nothing that risks your account health.</span></div>
          </div>
        </div>
      </section>

      {/* PROOF + WHY */}
      <section>
        <div className="wrap svc-split">
          <div>
            <h2>Why sellers pick us</h2>
            <ul className="why-list">
              <li><b>One point of contact.</b> You talk to the person running your account, not an account manager relaying messages.</li>
              <li><b>Work done before your day starts.</b> We&apos;re four to five hours ahead of the UK, so overnight messages and issues are usually cleared by the time you log in.</li>
              <li><b>Fixed fee, not a cut of your sales.</b> You keep the upside of your own growth.</li>
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

      {/* CTA */}
      <section>
        <div className="wrap">
          <div className="cta">
            <div className="cta-in">
              <h2>Start with a free audit.</h2>
              <p>We&apos;ll go through your account and show you what&apos;s costing sales — whether or not you hire us.</p>
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
