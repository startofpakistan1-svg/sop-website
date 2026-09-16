import Link from "next/link";

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