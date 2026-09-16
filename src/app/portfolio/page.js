"use client";

import Link from "next/link";
import { useState } from "react";

const projects = [
  {
    name: "AWEX Motorsport",
    type: "Shopify store",
    tag: "eCommerce",
    body:
      "A full Shopify store for a motorsport gear brand selling karting suits and gloves. We handled the store build, product catalogue and checkout, then supported the launch — the store went on to generate consistent sales for the client.",
    stack: ["Shopify", "Store design", "Product catalogue", "Checkout setup"],
    link: "https://awex.shop",
    images: ["/work/awex.png"],
    from: "#12296B",
    to: "#2563EB",
  },
  {
    name: "Khurmi Store",
    type: "Custom online store",
    tag: "Web development",
    body:
      "A custom-coded storefront built from scratch in HTML, CSS and JavaScript — no theme, no page builder. Full control over the design, fast load times, and a layout shaped entirely around the products rather than a template.",
    stack: ["HTML", "CSS", "JavaScript", "Custom build"],
    link: "https://khurmistore.es/",
    images: ["/work/khurmistore.png"],
    from: "#123a5e",
    to: "#2b6cb0",
  },
  {
    name: "Standard Medical Store",
    type: "WordPress store",
    tag: "eCommerce",
    body:
      "A full WordPress store built from the ground up for a Pakistani medical supplies retailer \u2014 product catalogue, categories, and ordering. We\u0027ve maintained and run it for four years since launch, through every update, redesign and product expansion.",
    stack: ["WordPress", "WooCommerce", "Store build", "Ongoing maintenance"],
    result: "Four years of continuous management since launch",
    link: "https://standardmedicalstore.pk/",
    images: ["/work/standard-medical.png"],
    from: "#0d4f4a",
    to: "#17a398",
  },
  {
    name: "AI content ecosystem for accounting firms",
    type: "AI agents & automation",
    tag: "AI",
    body:
      "A system of AI agents built for an international client serving CA firms. The agents plan, prepare and publish social media content automatically — what used to take hours of manual posting each week now runs on its own, keeping the firms visible online without adding headcount.",
    stack: ["AI agents", "Content automation", "Social publishing", "Scheduling"],
    link: null,
        images: ["/work/ai-agent-1.jpeg", "/work/ai-agent-2.png"],
    from: "#B4560C",
    to: "#F5871F",
  },
  {
    name: "Amazon seller account management",
    type: "Marketplace management",
    tag: "Marketplace",
    body:
      "End-to-end Amazon account management for international clients — listings, optimisation and day-to-day operations for brands selling into the UK and US markets.",
    stack: ["Amazon Seller Central", "Listing optimisation", "Account operations"],
    result: "\u00a332,928 in sales across 607 orders on one UK seller account",
    link: null,
    images: ["/work/amazon.jpeg", "/work/amazon-2.jpeg"],
    from: "#0E1A38",
    to: "#1B45A8",
  },
];

function CaseVisual({ project }) {
  const [active, setActive] = useState(0);
  const [broken, setBroken] = useState({});

  const shots = project.images.filter((_, i) => !broken[i]);

  return (
    <div
      className="case-visual"
      style={{ background: `linear-gradient(135deg, ${project.from}, ${project.to})` }}
    >
      {project.images.map((src, i) => (
        <img
          key={src}
          src={src}
          alt={`${project.name} screenshot ${i + 1}`}
          className={i === active ? "shot active" : "shot"}
          onError={() => setBroken((b) => ({ ...b, [i]: true }))}
        />
      ))}

      <span className="case-tag">{project.tag}</span>

      {shots.length > 1 && (
        <div className="shot-dots">
          {project.images.map((_, i) =>
            broken[i] ? null : (
              <button
                key={i}
                aria-label={`Show screenshot ${i + 1}`}
                className={i === active ? "dot on" : "dot"}
                onClick={() => setActive(i)}
              />
            )
          )}
        </div>
      )}
    </div>
  );
}

export default function Portfolio() {
  return (
    <>
      <section className="page-head" style={{ padding: "64px 0 70px" }}>
        <div className="wrap">
          <h1>Our work</h1>
          <p>
            Stores we&apos;ve built, agents we&apos;ve trained, and accounts we
            run — for clients in Pakistan, the US and the UK.
          </p>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="case-list">
            {projects.map((p, i) => (
              <article className="case" key={i}>
                <CaseVisual project={p} />

                <div className="case-body">
                  <div className="case-type">{p.type}</div>
                  <h2>{p.name}</h2>
                  <p>{p.body}</p>

                  {p.result && <div className="case-result">{p.result}</div>}

                  <ul className="case-stack">
                    {p.stack.map((s) => (
                      <li key={s}>{s}</li>
                    ))}
                  </ul>

                  {p.link && (
                    <a
                      className="case-link"
                      href={p.link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Visit the store →
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="contact">
            <div>
              <h2>Want results like these?</h2>
              <p>
                Tell us what you&apos;re selling and where you&apos;re stuck.
                We&apos;ll come back with a plan and a quote.
              </p>
            </div>
            <div className="contact-actions">
              <Link className="c-wa" href="/contact">Start a project</Link>
              <a
                className="c-mail"
                href="https://wa.me/923101375475"
                target="_blank"
                rel="noreferrer"
              >
                Message on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}