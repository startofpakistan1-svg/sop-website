import Link from "next/link";

const projects = [
  {
    name: "AWEX Motorsport",
    type: "Shopify store",
    body: "A motorsport gear store built on Shopify — custom theme, product catalogue, and checkout set up for international orders.",
    from: "#12296B",
    to: "#2563EB",
  },
  {
    name: "Your project here",
    type: "Web application",
    body: "Replace this with your next case study. Add a screenshot, what the client needed, and what you delivered.",
    from: "#0E1A38",
    to: "#1B45A8",
  },
  {
    name: "Your project here",
    type: "AI assistant",
    body: "Replace this with an AI or automation project — what it handles and how much time it saves the client.",
    from: "#B4560C",
    to: "#F5871F",
  },
];

export const metadata = {
  title: "Portfolio — SOP | Recent work",
  description: "Stores, websites and AI assistants built by SOP for clients in Pakistan and worldwide.",
};

export default function Portfolio() {
  return (
    <>
      <section className="page-head" style={{ padding: "64px 0 70px" }}>
        <div className="wrap">
          <h1>Our work</h1>
          <p>Projects we&apos;ve designed, built and shipped.</p>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="work-grid">
            {projects.map((p, i) => (
              <div className="work-card" key={i}>
                <div className="work-thumb" style={{ background: `linear-gradient(135deg, ${p.from}, ${p.to})` }}>
                  {p.name === "Your project here" ? "Add screenshot" : p.name}
                </div>
                <div className="work-info">
                  <div className="t">{p.name}</div>
                  <div className="k">{p.type}</div>
                  <p style={{ color: "var(--muted)", fontSize: 15, marginTop: 10 }}>{p.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="contact">
            <div>
              <h2>Want something like this?</h2>
              <p>Send us your idea and we&apos;ll come back with a plan and a quote.</p>
            </div>
            <div className="contact-actions">
              <Link className="c-wa" href="/contact">Start a project</Link>
              <a className="c-mail" href="https://wa.me/923101375475" target="_blank" rel="noreferrer">
                Message on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}