import Link from "next/link";
import BlogLinks from "@/components/BlogLinks";

export const metadata = {
  title: "Amazon PPC Management for UK & US Sellers | SOP",
  description:
    "Amazon ads management for UK and US sellers: Sponsored Products, Brands and Display, managed by an Amazon PPC specialist.",
  alternates: { canonical: "/amazon-ppc-management" },
};

/* What the weekly work actually covers. Sits in the hero as a plain card —
   we do not give clients a dashboard to log into, so nothing here imitates
   one, and there are no figures. */
const cadence = [
  { t: "Search term report reviewed", w: "every week" },
  { t: "Bids set against real performance", w: "every week" },
  { t: "Negative keywords added", w: "every week" },
  { t: "Budget pacing checked", w: "every month" },
  { t: "A report written in plain English", w: "monthly" },
];

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
  { n: "02", t: "Plan and price", d: "A written plan: campaign structure, your break-even ACoS worked out from your own margins, and what it will cost. Nothing starts until you've agreed it." },
  { n: "03", t: "Launch or rebuild", d: "New campaigns go live, or existing ones get restructured. Usually within the first week." },
  { n: "04", t: "Weekly optimisation", d: "Bids, negatives and budgets reviewed every week. Cutting spend on searches that never convert is the part that shows up first." },
  { n: "05", t: "Report and repeat", d: "A short weekly update and a fuller monthly review. You always know what your ad spend is doing." },
];

const terms = [
  { k: "ACoS", n: "Advertising cost of sales", d: "Ad spend divided by the sales those ads produced. £20 spent for £100 of ad sales is a 20% ACoS — lower is more efficient." },
  { k: "TACoS", n: "Total advertising cost of sales", d: "Ad spend divided by all your sales, organic included. Shows whether ads are lifting the whole business or just paying for themselves." },
  { k: "ROAS", n: "Return on ad spend", d: "Sales divided by ad spend — the inverse of ACoS. A 20% ACoS is a 5× ROAS." },
  { k: "CTR", n: "Click-through rate", d: "Clicks divided by impressions. A low CTR usually means the wrong keywords or a weak main image and title." },
  { k: "CPC", n: "Cost per click", d: "What you pay each time a shopper clicks your ad. Set by auction, so bids and competition decide it." },
];

/* Cases where we would tell a seller this is not what their account needs. */
const notFor = [
  {
    t: "Your listing does not convert yet.",
    d: "Advertising a page that does not sell buys expensive proof that it does not sell. Fix the page first.",
    link: { href: "/blog/how-to-optimize-amazon-listing", label: "our listing optimisation guide" },
  },
  {
    t: "You are reselling rather than building a brand.",
    d: "Wholesale accounts resell listings that are already indexed, and advertising is more a private-label lever than a wholesale one. Sometimes the honest answer is that this is not what your account needs.",
  },
  {
    t: "You want a target ACoS before anyone has seen your margins.",
    d: "A good ACoS is defined by your break-even figure and nothing else, so a number promised up front is a number invented.",
  },
  {
    t: "Your ad spend is small enough that the fee outweighs the saving.",
    d: "We will tell you if we think that is where you are.",
  },
];

/* ---------------------------------------------------------------- */
/*  FAQ — taken from the questions the pages ranking for this term   */
/*  actually answer, not invented. Marketplace and contract          */
/*  questions now live in the body sections instead.                 */
/* ---------------------------------------------------------------- */
const faqs = [
  { q: "What is Amazon PPC management?", a: "The ongoing work of running your Amazon advertising rather than setting it up: campaign structure across Sponsored Products, Brands and Display, choosing and excluding keywords, setting bids, pacing budget, and revising all of it as results come in. The managing is the point — the decisions that were right at launch stop being right within weeks." },
  { q: "How much does Amazon PPC management cost?", a: "Across the market you will see two models: a flat monthly fee, or a percentage of ad spend, usually quoted somewhere between 10% and 20%. The question worth asking any provider is what happens to their fee when your spend goes up, because that tells you whose interest the recommendation to spend more is serving. Our own fee depends on the size of the account and the scope we agree, and we quote it after we have looked at the account." },
  { q: "Is Amazon PPC management worth paying for?", a: "It comes down to one comparison: does the margin you recover from better management exceed what the management costs, including any increase in spend it recommends? If your campaigns have gone months without a search-term review, there is usually recoverable waste. If your ad spend is small, the fee may not clear that bar — and we will say so rather than take the account." },
  { q: "Should I run Amazon PPC myself or hire an agency?", a: "Doing it yourself is entirely possible, and the weekly search-term and bid work is the part that decides whether it goes well. The honest test is whether that hour or two a week actually happens, because unmanaged campaigns do not hold their position — they drift. Our guide on PPC agency versus doing it yourself sets out both sides." },
  { q: "Do I have to give an agency access to my Seller Central account?", a: "You never share a password. Amazon lets you add a user with only the permissions needed — advertising access, not payments or account settings. You stay the owner and can remove the access in one click. Advertising changes do not touch account health, and we do not change listings or pricing without asking first." },
  { q: "How quickly will I see results from Amazon PPC?", a: "We will not give you a number, and you should be wary of anyone who does — it depends on your spend, your category, your conversion rate and how much waste is in the account to begin with. What we can tell you is what to watch rather than when: spend moving off search terms that never convert, and your ACoS measured against your own break-even figure instead of a benchmark. Amazon also attributes sales to clicks over a window, so any judgement made in the first few days is being made on incomplete data." },
];

export default function AmazonPPC() {
  return (
    <>
      {/* HERO */}
      <section className="ppc-hero">
        <div className="wrap">
          <div>
            <div className="svc-kicker">Amazon · UK &amp; US</div>
            <h1>Amazon PPC Management that stops the waste first.</h1>
            <p>
              Amazon PPC management for sellers in the UK and US: campaign
              setup, keyword research, bid management and weekly reporting.
              Part of our{" "}
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
          <div className="leak-card">
            {cadence.map((c) => (
              <div className="leak-row" key={c.t}>
                <span>{c.t}</span><b>{c.w}</b>
              </div>
            ))}
            <div className="leak-row good">
              <span>Drift caught before it costs you</span><b>covered</b>
            </div>
          </div>
        </div>
      </section>

      {/* DEFINITION */}
      <section>
        <div className="wrap prose">
          <h2>What Amazon PPC management is</h2>
          <p>
            Amazon PPC management is the ongoing work of building and running
            your Sponsored Products, Sponsored Brands and Sponsored Display
            campaigns: deciding what to bid on, what to bid, what to exclude,
            and how the budget is spread across the month — then adjusting all
            four as the data comes in.
          </p>
          <p>
            PPC stands for pay-per-click. You are charged when a shopper
            clicks, not when the ad is shown, and an auction decides what that
            click costs — which is why bids and competition matter more than
            the size of the budget.
          </p>
          <p>
            The reason it needs managing rather than setting up is that none of
            those four decisions stays correct. A keyword that converted last
            month stops. A competitor raises bids on your best term. A search
            term you never chose starts collecting clicks because a broad match
            let it in. Left alone a campaign does not hold steady, it drifts,
            and the drift is quiet.
          </p>
          <p>
            On Amazon there is a second reason. Advertised sales feed organic
            ranking, so advertising that works builds something beyond the
            ads — and advertising that wastes money costs you twice.
          </p>
        </div>
      </section>

      {/* PROBLEM — before vs after */}
      <section>
        <div className="wrap">
          <div className="sec-head">
            <h2>Why Amazon ad budgets leak before they sell</h2>
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
              <div className="ba-h">Left unmanaged</div>
              <ul>
                <li>Clicks on irrelevant searches — wasted spend</li>
                <li>Stale bids on keywords that stopped converting</li>
                <li>No negative keyword list at all</li>
                <li>Budget gone by day 20, best-selling days missed</li>
              </ul>
            </div>
            <div className="ba-arrow" aria-hidden="true">→</div>
            <div className="ba-col after">
              <div className="ba-h">Managed weekly</div>
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

      {/* WHAT WE HANDLE */}
      <section className="process-band">
        <div className="wrap">
          <div className="sec-head">
            <h2>What we handle every week</h2>
            <p>
              Taking money out of the searches that never convert and putting
              it behind the ones that do. All six run continuously rather than
              once at setup.
            </p>
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

      {/* AD TYPES */}
      <section>
        <div className="wrap prose">
          <h2>The three Amazon ad types, and what each is for</h2>
          <p>
            Amazon gives you three main ad types, and they do different jobs.
            Run together with a plan for each, they support one another. Run as
            one undifferentiated lump of spend, they compete with each other
            for the same clicks.
          </p>
          <p>
            <strong>Sponsored Products</strong> are the workhorse. They put
            individual products into search results and onto competitor
            listings, and most of the weekly work lives here: keyword and
            competitor ASIN targeting, negative keywords, bid adjustments and
            placement control.
          </p>
          <p>
            <strong>Sponsored Brands</strong> put your logo, a headline and a
            group of products at the top of search. They suit brands enrolled
            in Brand Registry with a range worth showing, and they can send
            shoppers to a Brand Store rather than a single listing.
          </p>
          <p>
            <strong>Sponsored Display</strong> reaches shoppers on and off
            Amazon, including people who viewed your product without buying
            and audiences browsing similar categories.
          </p>
          <p>
            Our Amazon PPC services cover all three, managed by the
            Amazon PPC specialist who actually logs into your account, not
            someone relaying messages. For the wider Amazon marketing services that
            sit around advertising — listings, images and A+ content that
            decide whether a click converts — see our{" "}
            <Link href="/amazon-account-management">full Amazon account management</Link>.
          </p>
        </div>
      </section>

      {/* PPC TERMS */}
      <section>
        <div className="wrap">
          <div className="sec-head">
            <h2>The five PPC numbers in every report</h2>
            <p>The ones you&apos;ll see every month, in plain English.</p>
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

      {/* HOW */}
      <section className="process-band" id="how">
        <div className="wrap">
          <div className="sec-head">
            <h2>How we take over your campaigns</h2>
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

      {/* WHO IT SUITS */}
      <section>
        <div className="wrap prose">
          <h2>Who Amazon PPC management suits — and who it doesn&apos;t</h2>
          <p>
            It suits sellers already spending enough that a week of drift costs
            real money, and sellers whose listings convert but whose campaigns
            were built once and never revisited. It also suits private-label
            sellers launching a product, where advertising is how the first
            sales — and the organic ranking those sales build — get bought.
          </p>
          <p>It does not suit everyone, and these are the cases where we would say so:</p>
          <ul className="why-list">
            {notFor.map((n) => (
              <li key={n.t}>
                <b>{n.t}</b> {n.d}
                {n.link && (
                  <>
                    {" "}
                    <Link href={n.link.href}>{n.link.label}</Link> goes through
                    it section by section.
                  </>
                )}
              </li>
            ))}
          </ul>
          <p style={{ marginTop: 26 }}>
            On marketplaces: most often Amazon UK and Amazon US, and frequently
            both for the same brand. Each marketplace has its own console, its
            own search terms and its own competitors, so campaigns are built
            and managed per marketplace rather than copied across and hoped
            for. We report on them separately, so you can see which one is
            carrying the account and where the next product should launch.
          </p>
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
            <li><b>Weekly, not monthly.</b> Search-term and bid work happens every week, because that is the cadence those decisions need.</li>
            <li><b>Same standard, lower overhead.</b> The quality you&apos;d expect from an Amazon PPC agency UK sellers already use, without UK office costs.</li>
          </ul>
        </div>
      </section>

      {/* ACOS GUIDE */}
      <section>
        <div className="wrap">
          <div className="sec-head">
            <h2>Know your break-even ACoS before you spend</h2>
            <p>
              ACoS is the number most sellers judge their ads by, but a &quot;good&quot;
              figure depends entirely on your margins. We&apos;ve written a plain-English
              guide to <Link href="/blog/what-is-a-good-acos">what a good ACoS looks like</Link>,
              how to calculate yours, and what actually brings it down.
            </p>
          </div>
        </div>
      </section>

      {/* PROOF */}
      <section className="process-band">
        <div className="wrap prose">
          <h2>What we will and won&apos;t claim about PPC results</h2>
          <p>
            We have no published Amazon PPC case figures, and we are not going
            to borrow anyone else&apos;s. Most pages in this market lead with
            an ACoS that fell from one number to another. We do not have a
            client result we can evidence that way, so there is none on this
            page.
          </p>
          <p>
            What we can evidence is Amazon account work.{" "}
            <b>We have secured 11 brand and category approvals for clients</b> —
            Estée Lauder, Clinique, CeraVe, RYOBI, STANLEY, MOPAR, PowerA and
            Forever, plus one sub-category, Figurines, with Estée Lauder
            approved on three separate seller accounts. Not every application
            was approved first time; some came back declined and had to be
            resubmitted with corrected invoices and supplier documentation.
            That is approvals work rather than advertising work, and it is
            worth saying which is which — the{" "}
            <Link href="/blog/how-to-get-amazon-brand-approval">full account is here</Link>.
          </p>
          <p>
            On advertising, what we can show you is how we think rather than a
            results table. When sales fall on an account, advertising is the
            fourth thing we check, not the first — a paused campaign, a daily
            budget that ran out early, a failed payment method — because three
            more likely causes sit above it. That order is in our guide to{" "}
            <Link href="/blog/why-have-my-amazon-sales-dropped">why Amazon sales drop</Link>.
          </p>
          <p>
            The number we will not give you is a target ACoS before we have
            seen your margins, and the timeframe we will not give you is a date
            by which your ads will be profitable. Both get quoted freely in
            this market. Neither is knowable from the outside.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section>
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

      <BlogLinks
        slugs={["what-is-a-good-acos", "amazon-ppc-agency-vs-diy"]}
        intro="Plain-English guides on Amazon advertising for UK and US sellers."
      />

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
