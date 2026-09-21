import Link from "next/link";
import OpenChatButton from "@/components/OpenChatButton";

const categories = [
  {
    id: "marketplace",
    kicker: "01",
    title: "Marketplace & eCommerce",
    img: "/icons/marketplace.svg",
    intro:
      "The bulk of what we do. We take a seller account from nothing to running, then keep it running — or step into one that's already live and clean it up.",
    groups: [
      {
        name: "Amazon",
        items: [
          "Seller Central account setup",
          "Brand Registry and brand store",
          "Product listing creation",
          "Listing optimisation and SEO titles",
          "A+ / Enhanced Brand Content",
          "Keyword and competitor research",
          "PPC campaign setup and management",
          "FBA and FBM setup",
          "Inventory and order management",
          "Account health monitoring",
          "Suspension appeals and reinstatement",
          "Returns and customer messaging",
        ],
      },
      {
        name: "Other marketplaces",
        items: [
          "eBay store setup and listings",
          "Walmart Marketplace onboarding",
          "Etsy shop setup and SEO",
          "Multi-channel listing sync",
          "Pricing and repricing strategy",
        ],
      },
      {
        name: "Own-store ecommerce",
        items: [
          "Shopify store build and theme work",
          "WooCommerce store build",
          "Product upload and collections",
          "Payment gateways — JazzCash, Easypaisa, Stripe, PayPal",
          "Shipping and tax configuration",
          "Abandoned cart and email flows",
          "Store migration between platforms",
        ],
      },
    ],
  },
  {
    id: "web",
    kicker: "02",
    title: "Web development",
    img: "/icons/web.svg",
    intro:
      "Sites built to be fast, readable on a phone, and findable in search. Shopify and WordPress when that fits, hand-coded when it doesn't.",
    groups: [
      {
        name: "Build",
        items: [
          "Business and corporate websites",
          "Landing pages for campaigns",
          "Portfolio and personal sites",
          "Custom-coded storefronts",
          "WordPress design and development",
          "Custom web applications",
        ],
      },
      {
        name: "Improve",
        items: [
          "Redesign of an existing site",
          "Speed and Core Web Vitals work",
          "Mobile and responsive fixes",
          "Bug fixing and rescue jobs",
          "Accessibility improvements",
        ],
      },
      {
        name: "Run",
        items: [
          "Domain and hosting setup",
          "SSL and security basics",
          "Backups and updates",
          "Ongoing maintenance retainers",
        ],
      },
    ],
  },
  {
    id: "ai",
    kicker: "03",
    title: "AI agents & automation",
    img: "/icons/ai.svg",
    intro:
      "The part most agencies don't do. Systems that keep working after everyone goes home — answering, sorting, publishing, following up.",
    groups: [
      {
        name: "Assistants",
        items: [
          "Website chatbots trained on your business",
          "WhatsApp automated replies",
          "Customer support automation",
          "Lead qualification and routing",
          "FAQ and order-status bots",
        ],
      },
      {
        name: "Agents & workflows",
        items: [
          "Content planning and publishing agents",
          "Social media scheduling automation",
          "Listing and inventory update automation",
          "Report generation and alerts",
          "Connecting tools that don't talk to each other",
        ],
      },
    ],
  },
  {
    id: "digital",
    kicker: "04",
    title: "Digital solutions",
    img: "/icons/digital.svg",
    intro:
      "Everything around the build — the work that gets you found, keeps you looking credible, and stops things quietly breaking.",
    groups: [
      {
        name: "Brand",
        items: [
          "Logo design",
          "Brand colours and typography",
          "Product and listing image design",
          "Social media graphics",
        ],
      },
      {
        name: "Get found",
        items: [
          "On-page and technical SEO",
          "Local SEO and Google Business Profile",
          "Keyword research and content planning",
          "Google Search Console and Analytics setup",
          "Schema and structured data",
        ],
      },
      {
        name: "Keep going",
        items: [
          "Social media account setup",
          "Content writing and product copy",
          "Monthly reporting",
          "Ongoing support and maintenance",
        ],
      },
    ],
  },
];

const steps = [
  { n: "01", title: "Tell us what you need", body: "Message us on WhatsApp or send the form. We'll ask what you're selling, where you're stuck, and what you've already tried — a short conversation, not a sales pitch." },
  { n: "02", title: "We come back with a plan", body: "Within a day you get a written plan: what we'd build, how long it takes, and a fixed price. No hourly surprises, no scope that grows halfway through." },
  { n: "03", title: "We build it", body: "Work starts once you approve the plan. You get updates as each part is finished, so you can see progress rather than waiting for a reveal at the end." },
  { n: "04", title: "Launch and handover", body: "We take it live, walk you through how everything works, and hand over every account and login. It's your store and your systems — you own all of it." },
  { n: "05", title: "We stay available", body: "Questions after launch don't go unanswered. If you want us to keep running the account or maintaining the store, we can do that too." },
];

const faqs = [
  { q: "How much does a project cost?", a: "It depends on what you need — a simple store is very different from a full marketplace setup or a custom AI system. Tell us what you're building and we'll send a fixed price with the plan, usually within a day. No hourly billing, no surprises halfway through." },
  { q: "How long does it take?", a: "A Shopify or WordPress store typically takes one to three weeks depending on how many products and how much custom work is involved. Amazon account setup is faster. AI agent systems take longer because they need testing against real cases. You'll get a timeline in writing before we start." },
  { q: "Do you work with clients outside Pakistan?", a: "Most of our work is international. We run Amazon seller accounts for clients in the UK and US, and we've built systems for clients in India. Time zones haven't been a problem — we work around yours." },
  { q: "Can you manage my Amazon account, not just set it up?", a: "Yes. Ongoing account management is a large part of what we do — listings, optimisation and day-to-day operations. Some clients hand over the whole account, others keep control and bring us in for specific parts." },
  { q: "Can you take over a project someone else started?", a: "Often, yes. We'll look at what's there, tell you honestly whether it's worth continuing or starting again, and quote for whichever makes more sense for you." },
  { q: "Who owns the store and the accounts?", a: "You do, completely. Every account is created in your name, and at handover you get every login and credential. We don't hold anything hostage — if you ever want to move on, you take the whole thing with you." },
  { q: "What happens after launch?", a: "We stay available for questions. If something breaks or you need a change, message us. Many clients keep us on to maintain the store or run the account — Standard Medical Store has been with us for four years." },
  { q: "Do I need to buy my own domain and hosting?", a: "You can, and we'd recommend it — they should be in your name. If you'd rather not deal with it, we'll set it all up for you and hand over the access afterwards." },
  { q: "Will my business data stay private?", a: "Yes. Sales figures, customer lists, account credentials — all of it stays confidential, and nothing goes in our portfolio without your written permission." },
];

export const metadata = {
  title: "Services — SOP | eCommerce, Marketplaces, Web & AI",
  description:
    "Amazon, eBay, Walmart, Etsy and Shopify account management, custom web development, AI agents, SEO and branding — from SOP in Jhelum, Pakistan.",
};

export default function Services() {
  return (
    <>
      <section className="page-head" style={{ "--cover": "url(/covers/services.svg)" }}>
        <div className="wrap">
          <h1>Everything we do</h1>
          <p>
            Four areas, and a long list inside each one. Most clients start with
            a single job and end up handing us two or three.
          </p>
        </div>
      </section>

      {/* JUMP NAV */}
      <div className="jump">
        <div className="wrap jump-in">
          {categories.map((c) => (
            <a key={c.id} href={`#${c.id}`}>
              <span className="jump-n">{c.kicker}</span> {c.title}
            </a>
          ))}
        </div>
      </div>

      {/* CATEGORIES */}
      {categories.map((c, i) => (
        <section
          key={c.id}
          id={c.id}
          className={i % 2 === 1 ? "process-band" : ""}
        >
          <div className="wrap">
            <div className="cat-head">
              <img className="cat-img" src={c.img} alt="" />
              <div>
                <div className="cat-kicker">{c.kicker}</div>
                <h2>{c.title}</h2>
                <p>{c.intro}</p>
              </div>
            </div>

            {c.id === "marketplace" && (
              <div className="cat-links">
                <Link className="cat-link" href="/amazon-account-management">
                  Amazon account management <span aria-hidden="true">→</span>
                </Link>
                <Link className="cat-link" href="/amazon-ppc-management">
                  Amazon PPC management <span aria-hidden="true">→</span>
                </Link>
              </div>
            )}

            <div className="cat-groups">
              {c.groups.map((g) => (
                <div className="group" key={g.name}>
                  <h3>{g.name}</h3>
                  <ul>
                    {g.items.map((it) => (
                      <li key={it}>{it}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

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
              Yours would know your products, your prices and your policies. Ask
              it something and see how it handles it.
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
      <section>
        <div className="wrap">
          <div className="sec-head">
            <h2>How we work</h2>
            <p>No long onboarding, no account managers in between. Here&apos;s what happens from your first message to launch.</p>
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
      <section className="process-band">
        <div className="wrap">
          <div className="sec-head">
            <h2>Common questions</h2>
            <p>The things clients usually ask before getting started. If yours isn&apos;t here, just ask us.</p>
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

      <section>
        <div className="wrap">
          <div className="cta">
            <div className="cta-in">
              <h2>Not sure what you need?</h2>
              <p>Tell us about your business and we&apos;ll suggest the right starting point — no charge.</p>
            </div>
            <div className="cta-actions">
              <Link className="btn btn-acc" href="/contact">
                <span className="t">Send an enquiry</span> <span className="a">→</span>
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