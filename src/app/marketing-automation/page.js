import Link from "next/link";
import BlogLinks from "@/components/BlogLinks";

export const metadata = {
  title: "Marketing Automation Agency UK | SOP",
  description:
    "Marketing automation for UK and US businesses: email sequences, CRM setup and lead nurturing, built around the tools your team already uses.",
  alternates: { canonical: "/marketing-automation" },
};

/* ---------------------------------------------------------------- */
/*  WHAT WE SET UP — grouped into four phases                         */
/* ---------------------------------------------------------------- */
const phases = [
  {
    no: "01",
    name: "CRM setup & clean data",
    lead: "Nothing downstream works if the contact records are a mess. This is where every project starts.",
    areas: [
      {
        t: "Records & fields",
        items: [
          "Duplicate contacts merged and records tidied",
          "Fields agreed, named and actually filled in",
          "Source recorded on every contact, so you know where leads come from",
          "Lifecycle stages defined — enquiry, qualified, customer, lapsed",
        ],
      },
      {
        t: "Capture",
        items: [
          "Website forms connected straight to the CRM",
          "Enquiries from email, chat and social routed to one place",
          "Consent and preferences recorded with the contact",
          "Unsubscribes honoured everywhere, not just in one tool",
        ],
      },
      {
        t: "Connections",
        items: [
          "CRM, email platform and website talking to each other",
          "Sales and marketing looking at the same records",
          "Data moved without anyone retyping it",
        ],
      },
    ],
  },
  {
    no: "02",
    name: "Segmentation",
    lead: "The difference between a message someone reads and one they delete is usually who it was sent to.",
    areas: [
      {
        t: "How lists are split",
        items: [
          "Segments built on what people did, not on assumptions",
          "New enquiries kept apart from long-standing customers",
          "Interest-based segments from pages viewed or links clicked",
          "Inactive contacts separated rather than mailed forever",
        ],
      },
      {
        t: "Rules & hygiene",
        items: [
          "Suppression rules so nobody gets two competing emails",
          "Entry and exit conditions written down for every segment",
          "Regular list cleaning to keep deliverability healthy",
        ],
      },
    ],
  },
  {
    no: "03",
    name: "Email sequences & lead nurturing",
    lead: "The follow-up that happens whether or not anyone remembers to do it.",
    areas: [
      {
        t: "Sequences",
        items: [
          "Welcome sequence for new subscribers and enquiries",
          "Nurture sequence that answers the questions buyers always ask",
          "Re-engagement for contacts who have gone quiet",
          "Post-purchase and onboarding follow-up",
        ],
      },
      {
        t: "Triggers",
        items: [
          "Emails sent from what someone does, not from a fixed calendar",
          "Abandoned form or basket follow-up",
          "Internal alerts when a contact looks ready to talk",
          "Hand-off to a person at the point it stops being marketing",
        ],
      },
      {
        t: "Copy & testing",
        items: [
          "Sequence copy written in your voice, approved before it sends",
          "Subject lines and calls to action tested one change at a time",
          "Send timing and frequency agreed with you, not maximised",
        ],
      },
    ],
  },
  {
    no: "04",
    name: "Reporting & upkeep",
    lead: "Automation that nobody looks at drifts. This is the part that keeps it honest.",
    areas: [
      {
        t: "Reporting",
        items: [
          "One report covering sequences, segments and enquiries",
          "Plain-English summary of what changed and why",
          "Which sequences earn their place and which do not",
        ],
      },
      {
        t: "Upkeep",
        items: [
          "Sequences reviewed as your offer and pricing change",
          "Broken links, outdated copy and dead triggers caught",
          "New sequences added as the business grows",
        ],
      },
      {
        t: "Handover",
        items: [
          "Written documentation of every sequence and rule",
          "Your team trained to edit and pause anything",
          "Accounts and data in your name from the start",
        ],
        link: { href: "/ai-automation", label: "AI and business automation" },
      },
    ],
  },
];

/* ---------------------------------------------------------------- */
/*  COMPARISON — ways to run marketing automation                     */
/* ---------------------------------------------------------------- */
const compare = [
  { row: "Who writes the sequences",   diy: "You",            hire: "New hire",       tools: "Template library",  sop: "Us, approved by you" },
  { row: "Built around your data",     diy: "Yes",            hire: "Yes",            tools: "Generic",           sop: "Yes" },
  { row: "CRM tidied first",           diy: "Rarely",         hire: "Eventually",     tools: "No",                sop: "Always, before anything sends" },
  { row: "Runs while nobody is in",    diy: "Once built",     hire: "Once built",     tools: "Yes",               sop: "Yes" },
  { row: "Setup effort",               diy: "Your evenings",  hire: "Recruiting",     tools: "You configure",     sop: "We build it" },
  { row: "Ongoing upkeep",             diy: "—",              hire: "Ongoing",        tools: "You manage",        sop: "Optional retainer" },
  { row: "You own the accounts",       diy: "Yes",            hire: "Yes",            tools: "Platform's terms",  sop: "Yes" },
];

const steps = [
  { n: "01", t: "Discovery", d: "We follow one enquiry from the moment it arrives to the moment it becomes a customer or goes cold, and note every point where a person has to remember something." },
  { n: "02", t: "Scope in writing", d: "Which sequences, which segments, what gets fixed in the CRM, and where a person stays in the loop. Nothing starts until you have agreed it." },
  { n: "03", t: "Data first", d: "Records cleaned, fields agreed, sources recorded. Unglamorous, and the reason the rest works." },
  { n: "04", t: "Build and test", d: "One sequence live first, tested with real contacts and read by you before it reaches anyone else. The rest follow once it behaves." },
  { n: "05", t: "Review and upkeep", d: "Reporting you can read, sequences revisited as the offer changes, and documentation so your team can take it over whenever you want." },
];

const faqs = [
  { q: "Which marketing automation platforms do you work with?", a: "In most cases, whatever you already have. The mainstream email and CRM platforms all do broadly the same things — lists, segments, triggers, sequences and reporting — and how your data is organised matters far more than which logo is on the dashboard. If you have not chosen a platform yet, we will help you pick one based on what you actually need rather than the longest feature list, and we will tell you when the tool you already pay for is enough." },
  { q: "Do we need to replace our existing CRM?", a: "Usually not. Most of the problems we find are in how a CRM is used rather than in the CRM itself: duplicate records, fields nobody fills in, no note of where a contact came from, sales and marketing keeping separate lists. All of that is fixable in place. If your system genuinely cannot segment or trigger anything, we will say so plainly, but replacing a CRM is disruptive and it is not where we would rather start." },
  { q: "How long does it take to set up?", a: "It depends on two things: how tidy your contact data is, and how many sequences you want live at the start. Cleaning and mapping the data is usually the longest part, and it is the part worth doing properly rather than quickly. We will give you a timeline for your project in the written scope, once we have seen the state of your records — a standard answer given before that would be a guess." },
  { q: "Who writes the emails?", a: "We draft them in your voice and you approve them before anything sends. If you have someone who would rather write the copy themselves, that works too: we build the sequences, segments and triggers around their words. What we will not do is send anything to your list that you have not read." },
  { q: "Will this annoy our customers?", a: "It can, if the point is to send more email. That is not the point. Good automation usually means fewer messages reaching better-chosen people, with clear unsubscribes and suppression rules so nobody receives two competing emails in a day. Send frequency is agreed with you and we would rather argue for less." },
  { q: "Do you own or keep any of our data?", a: "No. The CRM and email accounts are in your name, the contact data stays yours, and we work through user access you can remove at any time. At the end you get documentation of every sequence, segment and rule, whether or not you keep working with us." },
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

export default function MarketingAutomation() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c"),
        }}
      />

      {/* HERO */}
      <section className="page-head" style={{ "--cover": "url(/covers/marketing.svg)" }}>
        <div className="wrap">
          <div className="svc-kicker">Marketing automation · UK &amp; US</div>
          <h1>The Marketing Automation Agency for follow-up that never happens.</h1>
          <p>
            Email sequences, CRM setup, segmentation and lead nurturing for UK
            and US businesses — built around the tools your team already uses,
            with every message approved by you before it sends.
          </p>
          <div className="acts" style={{ marginTop: 28 }}>
            <Link className="btn btn-acc" href="/contact">
              <span className="t">Tell us what happens to your leads</span> <span className="a">→</span>
            </Link>
            <a className="btn btn-ghost" href="#everything">
              <span className="t">See what we set up</span>
            </a>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section>
        <div className="wrap svc-split">
          <div>
            <h2>Most businesses do not have a marketing problem</h2>
            <p>
              They have a follow-up problem. An enquiry arrives, somebody means
              to reply properly, and a fortnight later the lead has gone cold.
              Meanwhile the people who bought last year never hear from you
              again, and the newsletter goes to everybody at once because
              splitting the list is a job nobody has time for.
            </p>
            <p>
              Marketing automation is the unglamorous fix: the follow-up
              happens whether or not anyone remembers, and it goes to the
              people it suits. Done well, it means fewer emails, not more. If
              the repetitive work you want gone is admin, reporting or
              customer replies rather than marketing, that is{" "}
              <Link href="/ai-automation">AI and business automation</Link>{" "}
              instead.
            </p>
          </div>
          <div className="leak-card">
            <div className="leak-row"><span>Enquiries sitting unanswered in an inbox</span><b className="bad">lost leads</b></div>
            <div className="leak-row"><span>One newsletter sent to everyone</span><b className="bad">unsubscribes</b></div>
            <div className="leak-row"><span>CRM full of duplicates and blank fields</span><b className="bad">no segmentation</b></div>
            <div className="leak-row"><span>Past customers never contacted again</span><b className="bad">repeat sales missed</b></div>
            <div className="leak-row"><span>Nobody knows which email worked</span><b className="bad">guesswork</b></div>
            <div className="leak-row good"><span>Sequences doing the follow-up</span><b>covered</b></div>
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

      {/* COMPARISON */}
      <section className="process-band">
        <div className="wrap">
          <div className="sec-head">
            <h2>Do it yourself, hire, platform templates, or a built system?</h2>
            <p>An honest comparison of the ways businesses get marketing automation running.</p>
          </div>
          <div className="cmp-wrap">
            <table className="cmp">
              <thead>
                <tr>
                  <th></th>
                  <th>Do it yourself</th>
                  <th>Hire someone</th>
                  <th>Platform templates</th>
                  <th className="cmp-us">Built with SOP</th>
                </tr>
              </thead>
              <tbody>
                {compare.map((c) => (
                  <tr key={c.row}>
                    <th>{c.row}</th>
                    <td>{c.diy}</td>
                    <td>{c.hire}</td>
                    <td>{c.tools}</td>
                    <td className="cmp-us">{c.sop}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* MARKETING AUTOMATION FOR GROWING BUSINESSES */}
      <section>
        <div className="wrap prose">
          <h2>Marketing automation for growing businesses</h2>
          <p>
            Growth makes the follow-up problem worse. More enquiries arrive,
            the person who used to answer all of them cannot, and the gap
            between someone raising their hand and someone replying widens.
          </p>
          <p>
            So the work starts with CRM setup rather than with campaigns. A CRM
            that records where a contact came from, what they asked about and
            what has already been sent to them is the foundation for everything
            after it. Any marketing automation consultancy that talks about
            sequences before it has looked at your data is building on sand.
          </p>
          <p>
            Segmentation comes next: splitting the list by what people
            actually did rather than by how you would like to describe them. A
            new enquiry, a long-standing customer, someone who read the same
            service page twice and someone who has not opened anything in
            months all deserve different messages.
          </p>
          <p>
            Then the email sequences and the lead nurturing they carry — a
            welcome that explains who you are, a follow-up that answers what
            buyers always ask, a re-engagement for contacts who have gone
            quiet, and an alert to a human being at the point it stops being
            marketing and starts being a conversation.
          </p>
          <p>
            Having a marketing automation agency UK businesses can reach during
            their own working day matters more than where the agency sits. We
            are a few hours ahead of the UK, so overnight sends and reports are
            finished before your morning and we overlap with your afternoon for
            calls.
          </p>
          <p>
            What a digital marketing automation agency should leave you with is
            deliberately unremarkable: sequences that run, records you can
            trust, and reporting you can read without a dashboard tour.
          </p>
        </div>
      </section>

      {/* EMAIL AUTOMATION AND LEAD NURTURING */}
      <section className="process-band">
        <div className="wrap prose">
          <h2>Email automation and lead nurturing</h2>
          <p>
            Automated email is the part of marketing that keeps working when
            everyone is busy. It is also the part most often set up once,
            forgotten, and left sending a welcome message that mentions an
            offer you stopped running.
          </p>
          <p>
            A welcome sequence does the introduction you would do in person:
            what you do, who you do it for, what happens next. A nurture
            sequence answers the questions a buyer always has, in the order
            they usually ask them, so that by the time someone replies they
            already trust the answer.
          </p>
          <p>
            Longer sales cycles are where this earns its keep. A B2B marketing
            automation agency spends more time here than anywhere else, because
            a considered purchase is rarely decided on a first visit, and the
            business that stays useful in the gap is usually the one that gets
            the call.
          </p>
          <p>
            Triggers matter more than schedules. An email sent because someone
            read a page, downloaded something or left a form half-finished
            lands better than one sent because it is Tuesday. The same applies
            in reverse: when a contact goes quiet, the sequence should notice
            and stop rather than keep arriving on a fixed rhythm nobody asked
            for.
          </p>
          <p>
            What a good email automation agency is strict about is restraint.
            Fewer messages, better aimed, with clean lists and honest
            unsubscribes, because deliverability is earned by people wanting
            the email rather than by any clever setting.
          </p>
          <p>
            And marketing automation consultants worth their fee will tell you
            when a sequence should be a phone call instead.
          </p>
        </div>
      </section>

      {/* HOW WE WORK */}
      <section>
        <div className="wrap prose">
          <h2>How we work</h2>
          <p>
            Every engagement starts by following one enquiry all the way
            through — where it arrives, who touches it, what gets recorded, and
            where it stalls. That walk-through usually tells us more than a
            brief does.
          </p>
          <p>
            Our marketing automation consulting is the part that happens before
            any sequence is written: deciding what should be automated, what
            should stay human, and what should simply stop. Sometimes the
            honest recommendation is to fix the CRM and leave the campaigns
            alone for now.
          </p>
          <p>
            Then a written scope — which sequences, which segments, what gets
            cleaned, where a person reviews — agreed before anything is built,
            so there is no argument later about what was included.
          </p>
          <p>
            Building happens small. One sequence goes live first and is tested
            with real contacts, read in full by you, and watched for a while
            before the rest follow. It is cheaper to find a problem in one
            sequence than in six.
          </p>
          <p>
            An automation marketing agency that disappears at launch leaves you
            with a system nobody maintains, so we either stay on for upkeep or
            hand over documentation clear enough that your own team can take
            it. The accounts and the data were always yours.
          </p>
        </div>
      </section>

      {/* HOW — steps */}
      <section className="process-band">
        <div className="wrap">
          <div className="sec-head">
            <h2>What the work looks like</h2>
            <p>From the first conversation to sequences running on their own.</p>
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

      {/* LIMITS */}
      <section>
        <div className="wrap">
          <div className="sec-head">
            <h2>What automation will not fix</h2>
            <p>Worth saying plainly, because plenty of agencies will not.</p>
          </div>
          <div className="safe-grid">
            <div className="safe"><b>A list nobody asked to join</b><span>Automation sends to whoever is in the list. If those people never opted in, the only thing it speeds up is the complaints.</span></div>
            <div className="safe"><b>An offer that is not landing</b><span>Sequences carry a message; they do not improve it. If the offer is the problem, more emails make it more visible, not more persuasive.</span></div>
            <div className="safe"><b>Deliberately vague data</b><span>If nobody records where leads come from or what they asked about, segmentation has nothing to work with and every message ends up generic.</span></div>
            <div className="safe"><b>Being set and forgotten</b><span>Prices change, services change, people leave. A sequence written last year and never reread will eventually embarrass you.</span></div>
          </div>
        </div>
      </section>

      {/* WHY + PROOF */}
      <section className="process-band">
        <div className="wrap svc-split">
          <div>
            <h2>Why businesses choose us</h2>
            <ul className="why-list">
              <li><b>Data before campaigns.</b> We fix the records first, because everything else depends on them.</li>
              <li><b>Nothing sends unread.</b> You approve the copy and the frequency; we would rather argue for fewer emails.</li>
              <li><b>Tool-agnostic.</b> We work with what you already pay for rather than moving you to a platform that suits us.</li>
              <li><b>One point of contact.</b> You talk to the person building the sequences, not someone relaying messages.</li>
              <li><b>Yours to keep.</b> Accounts in your name, data yours, and documentation at handover either way.</li>
            </ul>
          </div>
          <div className="proof-card">
            <div className="proof-lbl">AI content ecosystem · accounting firms</div>
            <div className="proof-num">CA firms</div>
            <div className="proof-sub">A system of AI agents built for an international client serving CA firms: the agents plan, prepare and publish content automatically, keeping the firms visible without adding headcount.</div>
            <Link className="case-link" href="/portfolio">See the project <span aria-hidden="true">→</span></Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section>
        <div className="wrap">
          <div className="sec-head">
            <h2>Marketing automation questions</h2>
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
        slugs={["ai-social-media-automation"]}
        intro="How planning, writing and publishing agents fit together, and where people stay involved."
      />

      {/* CTA */}
      <section>
        <div className="wrap">
          <div className="cta">
            <div className="cta-in">
              <h2>Tell us what happens to an enquiry today.</h2>
              <p>We&apos;ll come back with a written scope, where a person stays in the loop, and a fixed price — usually the same day.</p>
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
