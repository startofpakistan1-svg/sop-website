"use client";

import Link from "next/link";
import { TestimonialInline } from "@/components/Testimonials";
import { useState } from "react";

const projects = [
  {
    name: "Standard Medical Store",
    type: "WordPress store",
    tag: "eCommerce",
    body: "A full WordPress store built from the ground up for a Pakistani medical supplies retailer — product catalogue, categories, and ordering. We've maintained and run it for four years since launch, through every update, redesign and product expansion.",
    stack: ["WordPress", "WooCommerce", "Store build", "Ongoing maintenance"],
    result: "Four years of continuous management since launch",
    link: "https://standardmedicalstore.pk/",
    images: ["/work/standard-medical.png"],
  },
  {
    name: "AWEX Motorsport",
    testimonial: "Awex Intl",
    type: "Shopify store",
    tag: "eCommerce",
    body: "A full Shopify store for a motorsport gear brand selling karting suits and gloves. We handled the store build, product catalogue and checkout, then supported the launch — the store went on to generate consistent sales for the client.",
    stack: ["Shopify", "Store design", "Product catalogue", "Checkout setup"],
    result: null,
    link: "https://awex.shop",
    images: ["/work/awex.png"],
  },
  {
    name: "Amazon seller account management",
    type: "Marketplace management",
    tag: "Marketplace",
    body: "End-to-end Amazon account management for international clients — listings, optimisation and day-to-day operations for brands selling into the UK and US markets.",
    stack: ["Amazon Seller Central", "Listing optimisation", "Account operations"],
    result: "£32,928 in sales across 607 orders on one UK seller account",
    link: null,
    images: ["/work/amazon.jpeg", "/work/amazon-2.jpeg"],
  },
  {
    name: "AI content ecosystem for accounting firms",
    type: "AI agents & automation",
    tag: "AI",
    body: "A system of AI agents built for an international client serving CA firms. The agents plan, prepare and publish social media content automatically — what used to take hours of manual posting each week now runs on its own, keeping the firms visible online without adding headcount.",
    stack: ["AI agents", "Content automation", "Social publishing", "Scheduling"],
    result: null,
    link: null,
    images: ["/work/ai-agent-1.jpeg", "/work/ai-agent-2.png"],
  },
  {
    name: "Khurmi Store",
    type: "Custom online store",
    tag: "Web development",
    body: "A custom-coded storefront built from scratch in HTML, CSS and JavaScript — no theme, no page builder. Full control over the design, fast load times, and a layout shaped entirely around the products rather than a template.",
    stack: ["HTML", "CSS", "JavaScript", "Custom build"],
    result: null,
    link: "https://khurmistore.es/",
    images: ["/work/khurmistore.png"],
  },
];

function CaseVisual({ project }) {
  const [active, setActive] = useState(0);
  const [broken, setBroken] = useState({});
  const live = project.images.filter((_, i) => !broken[i]);

  return (
    <div className="case-visual">
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

      {live.length > 1 && (
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
      <section className="page-head" style={{ "--cover": "url(/covers/portfolio.svg)" }}>
        <div className="wrap">
          <h1>Our work</h1>
          <p>Stores we&apos;ve built, agents we&apos;ve trained, and accounts we run — for clients in Pakistan, India, the UK and the US.</p>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="case-list">
            {projects.map((p, i) => (
              <article className="case" key={i}>
                <CaseVisual project={p} />
                <div className="case-body">
                  <div className="case-no">{String(i + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}</div>
                  <div className="case-type">{p.type}</div>
                  <h2>{p.name}</h2>
                  <p>{p.body}</p>
                  {p.result && <div className="case-result">{p.result}</div>}
                  <ul className="case-stack">
                    {p.stack.map((s) => <li key={s}>{s}</li>)}
                  </ul>
                  {p.link && (
                    <a className="case-link" href={p.link} target="_blank" rel="noreferrer">
                      Visit the store <span aria-hidden="true">→</span>
                    </a>
                  )}
                  {p.testimonial && <TestimonialInline company={p.testimonial} />}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="process-band">
        <div className="wrap prose">
          <h2>What these projects have in common</h2>
          <p>
            None of them were one-off builds. Every store, account and AI
            system on this page was either built by us and then run by us, or
            handed over with the client trained to run it. That is deliberate:
            a Shopify store that nobody maintains, or an Amazon account that
            nobody checks daily, stops earning within months.
          </p>
          <p>
            Only work we have permission to show is listed here. Screenshots
            are of the live projects, and where a client would rather not be
            named the entry describes the work without identifying them. If
            you are weighing up a similar project, ask us about it and we will
            walk you through what was involved, including the parts that took
            longer than planned.
          </p>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="cta">
            <div className="cta-in">
              <h2>Want results like these?</h2>
              <p>Tell us what you&apos;re selling and where you&apos;re stuck. We&apos;ll come back with a plan and a quote.</p>
            </div>
            <div className="cta-actions">
              <Link className="btn btn-acc" href="/contact">
                <span className="t">Start a project</span> <span className="a">→</span>
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