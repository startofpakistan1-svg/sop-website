import Link from "next/link";
import OpenChatButton from "@/components/OpenChatButton";

const services = [
  {
    title: "Marketplace & ecommerce",
    body: "We set up and run your stores on the platforms your customers already shop on.",
    points: [
      "Amazon, eBay, Walmart, Etsy seller accounts",
      "Shopify store design and setup",
      "Product listings, SEO titles, images",
      "Local payments — JazzCash, Easypaisa, bank transfer",
    ],
  },
  {
    title: "Web development",
    body: "Custom websites and web apps coded from scratch — fast, responsive, and built to rank.",
    points: [
      "Business and portfolio websites",
      "Custom web applications",
      "WordPress design and fixes",
      "Speed and mobile optimisation",
    ],
  },
  {
    title: "AI bots & agents",
    body: "Smart assistants that handle the work you'd otherwise do by hand, 24 hours a day.",
    points: [
      "Website and WhatsApp chatbots",
      "Lead qualification and auto-replies",
      "Customer support automation",
      "Trained on your own products and FAQs",
    ],
  },
  {
    title: "Digital solutions",
    body: "Everything around the build that gets you found and keeps you running.",
    points: [
      "Branding and logo design",
      "SEO and Google Business Profile setup",
      "Social media setup",
      "Ongoing maintenance and support",
    ],
  },
];

const steps = [
  {
    n: "01",
    title: "Tell us what you need",
    body:
      "Message us on WhatsApp or send the form. We'll ask what you're selling, where you're stuck, and what you've already tried — usually a short conversation, not a sales pitch.",
  },
  {
    n: "02",
    title: "We come back with a plan",
    body:
      "Within a day you get a written plan: what we'd build, how long it takes, and a fixed price. No hourly surprises, no scope that grows halfway through.",
  },
  {
    n: "03",
    title: "We build it",
    body:
      "Work starts once you approve the plan. You get updates as each part is finished, and you can see progress along the way rather than waiting for a reveal at the end.",
  },
  {
    n: "04",
    title: "Launch and handover",
    body:
      "We take it live, walk you through how everything works, and hand over every account and login. It's your store and your systems — you own all of it.",
  },
  {
    n: "05",
    title: "We stay available",
    body:
      "Questions after launch don't go unanswered. If you want us to keep running the account or maintaining the store, we can do that too.",
  },
];

const faqs = [
  {
    q: "How much does a project cost?",
    a: "It depends on what you need — a simple store is very different from a full marketplace setup or a custom AI system. Tell us what you're building and we'll send a fixed price with the plan, usually within a day. No hourly billing, no surprises halfway through.",
  },
  {
    q: "How long does it take?",
    a: "A Shopify or WordPress store typically takes one to three weeks depending on how many products and how much custom work is involved. Amazon account setup is faster. AI agent systems take longer because they need testing against real cases. You'll get a timeline in writing before we start.",
  },
  {
    q: "Do you work with clients outside Pakistan?",
    a: "Most of our work is international. We run Amazon seller accounts for clients in the UK and US, and we've built systems for clients in India. Time zones haven't been a problem — we work around yours.",
  },
  {
    q: "Can you manage my Amazon account, not just set it up?",
    a: "Yes. Ongoing account management is a large part of what we do — listings, optimisation and day-to-day operations. Some clients hand over the whole account, others keep control and bring us in for specific parts.",
  },
  {
    q: "Who owns the store and the accounts?",
    a: "You do, completely. Every account is created in your name, and at handover you get every login and credential. We don't hold anything hostage — if you ever want to move on, you take the whole thing with you.",
  },
  {
    q: "What happens after launch?",
    a: "We stay available for questions. If something breaks or you need a change, message us. Many clients keep us on to maintain the store or run the account — Standard Medical Store has been with us for four years.",
  },
  {
    q: "Do I need to buy my own domain and hosting?",
    a: "You can, and we'd recommend it — they should be in your name. If you'd rather not deal with it, we'll set it all up for you and hand over the access afterwards.",
  },
  {
    q: "Will my business data stay private?",
    a: "Yes. Sales figures, customer lists, account credentials — all of it stays confidential, and nothing goes in our portfolio without your written permission.",
  },
];

export const metadata = {
  title: "Services — SOP | eCommerce, Web & AI",
  description:
    "Marketplace setup, custom web development, AI chatbots, branding and SEO — from SOP in Jhelum, Pakistan.",
};

export default function Services() {
  return (
    <>
      <section className="page-head" style={{ padding: "64px 0 70px" }}>
        <div className="wrap">
          <h1>What we do</h1>
          <p>
            Four services, one team. Pick what you need today — we can handle the rest
            as you grow.
          </p>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="svc-grid">
            {services.map((s) => (
              <div className="svc" key={s.title}>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
                <ul>
                  {s.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LIVE DEMO */}
      <section className="demo-band">
        <div className="wrap demo">
          <div className="demo-copy">
            <span className="demo-tag">Live demo</span>
            <h2>The bot in the corner is ours.</h2>
            <p>
              That chat button isn&apos;t a plugin we installed. We built it —
              the same way we&apos;d build one for you. It knows our services,
              answers in English or Urdu, and passes real enquiries straight to
              our inbox while we&apos;re asleep.
            </p>
            <p>
              Yours would know your products, your prices and your policies.
              Ask it something and see how it handles it.
            </p>
            <OpenChatButton />
          </div>

          <div className="demo-visual" aria-hidden="true">
            <div className="demo-chat">
              <div className="demo-msg bot">How long does a Shopify store take?</div>
              <div className="demo-msg you">Usually one to three weeks, depending on how many products you have.</div>
              <div className="demo-msg bot">Aap Amazon account bhi manage karte hain?</div>
              <div className="demo-msg you">Ji haan — abhi nine international accounts chala rahe hain.</div>
              <div className="demo-msg typing"><span /><span /><span /></div>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="process-band">
        <div className="wrap">
          <div className="sec-head">
            <h2>How we work</h2>
            <p>
              No long onboarding, no account managers in between. Here&apos;s
              what happens from your first message to launch.
            </p>
          </div>

          <ol className="steps">
            {steps.map((st) => (
              <li className="step" key={st.n}>
                <div className="step-n">{st.n}</div>
                <div className="step-body">
                  <h3>{st.title}</h3>
                  <p>{st.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* FAQ */}
      <section>
        <div className="wrap">
          <div className="sec-head">
            <h2>Common questions</h2>
            <p>
              The things clients usually ask before getting started. If
              yours isn&apos;t here, just ask us.
            </p>
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

      <section style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="contact">
            <div>
              <h2>Not sure what you need?</h2>
              <p>Tell us about your business and we&apos;ll suggest the right starting point — no charge.</p>
            </div>
            <div className="contact-actions">
              <a className="c-wa" href="https://wa.me/923101375475" target="_blank" rel="noreferrer">
                Message on WhatsApp
              </a>
              <Link className="c-mail" href="/contact">Send an enquiry</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}