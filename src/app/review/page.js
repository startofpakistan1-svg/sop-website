"use client";

import Link from "next/link";
import { useState } from "react";

const ACCESS_KEY = "d2c6863a-7274-4b69-b3fe-02afd91f87e7";

const SERVICES = [
  "Marketplace & ecommerce",
  "Web development",
  "AI bots & agents",
  "Digital solutions (branding, SEO)",
  "Ongoing management",
];

export default function Review() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    role: "",
    email: "",
    service: SERVICES[0],
    review: "",
    consent: false,
    website: "", // honeypot
  });

  const [rating, setRating] = useState(0);
  const [hovered, setHovered] = useState(0);
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  const set = (k) => (e) =>
    setForm({
      ...form,
      [k]: e.target.type === "checkbox" ? e.target.checked : e.target.value,
    });

  const submit = async () => {
    if (!form.name.trim()) return setError("Please add your name.");
    if (!rating) return setError("Please choose a rating.");
    if (form.review.trim().length < 20)
      return setError("Please write a little more — at least a sentence or two.");
    if (!form.consent)
      return setError(
        "Please tick the box to let us publish your review on the site."
      );

    setError("");
    setStatus("sending");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          subject: `New client review — ${rating}/5 from ${form.name}`,
          from_name: "SOP Website — Reviews",
          name: form.name,
          company: form.company,
          role: form.role,
          email: form.email,
          service: form.service,
          rating: `${rating} out of 5`,
          review: form.review,
          permission_to_publish: "Yes",
          botcheck: form.website,
        }),
      });

      const data = await res.json();
      if (data.success) setStatus("sent");
      else {
        setStatus("error");
        setError("Something went wrong. Please try again, or WhatsApp us.");
      }
    } catch {
      setStatus("error");
      setError("Couldn't send — please check your connection and try again.");
    }
  };

  if (status === "sent") {
    return (
      <>
        <section className="page-head" style={{ "--cover": "url(/covers/review.svg)" }}>
          <div className="wrap">
            <h1>Thank you</h1>
            <p>That means a lot to us.</p>
          </div>
        </section>

        <section>
          <div className="wrap prose">
            <div className="form-success">
              <h3>Your review has been sent.</h3>
              <p>
                We read every one. If we publish it on the site, it&apos;ll
                appear with your name and company exactly as you wrote them.
              </p>
              <Link className="btn btn-acc" href="/"><span className="t">Back to home</span></Link>
            </div>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <section className="page-head" style={{ "--cover": "url(/covers/review.svg)" }}>
        <div className="wrap">
          <h1>Leave a review</h1>
          <p>
            If we&apos;ve worked together, we&apos;d be grateful for a few
            honest lines — good or bad.
          </p>
        </div>
      </section>

      <section>
        <div className="wrap review-grid">
          <div>
            {/* RATING */}
            <div className="field">
              <label>How was the work? *</label>
              <div
                className="stars"
                onMouseLeave={() => setHovered(0)}
                role="radiogroup"
                aria-label="Rating out of five"
              >
                {[1, 2, 3, 4, 5].map((n) => (
                  <button
                    key={n}
                    type="button"
                    className={`star ${(hovered || rating) >= n ? "on" : ""}`}
                    onMouseEnter={() => setHovered(n)}
                    onClick={() => setRating(n)}
                    aria-label={`${n} star${n > 1 ? "s" : ""}`}
                    aria-pressed={rating === n}
                  >
                    ★
                  </button>
                ))}
                {rating > 0 && <span className="star-count">{rating}/5</span>}
              </div>
            </div>

            <div className="field">
              <label htmlFor="review">Your review *</label>
              <textarea
                id="review"
                value={form.review}
                onChange={set("review")}
                placeholder="What did we build for you, and how did it go? Anything we could have done better?"
              />
            </div>

            <div className="field-row">
              <div className="field">
                <label htmlFor="name">Your name *</label>
                <input id="name" value={form.name} onChange={set("name")} />
              </div>
              <div className="field">
                <label htmlFor="role">Your role</label>
                <input
                  id="role"
                  value={form.role}
                  onChange={set("role")}
                  placeholder="e.g. Owner"
                />
              </div>
            </div>

            <div className="field-row">
              <div className="field">
                <label htmlFor="company">Company</label>
                <input
                  id="company"
                  value={form.company}
                  onChange={set("company")}
                />
              </div>
              <div className="field">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={set("email")}
                  placeholder="So we can thank you"
                />
              </div>
            </div>

            <div className="field">
              <label htmlFor="service">What did we work on?</label>
              <select
                id="service"
                value={form.service}
                onChange={set("service")}
              >
                {SERVICES.map((s) => (
                  <option key={s}>{s}</option>
                ))}
              </select>
            </div>

            <label className="consent">
              <input
                type="checkbox"
                checked={form.consent}
                onChange={set("consent")}
              />
              <span>
                You can publish this review on the SOP website with my name and
                company.
              </span>
            </label>

            {/* honeypot */}
            <input
              type="text"
              name="website"
              value={form.website}
              onChange={set("website")}
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              style={{ position: "absolute", left: "-9999px", opacity: 0, height: 0 }}
            />

            {error && <div className="form-error">{error}</div>}

            <button
              className="btn btn-acc"
              style={{ border: "none", cursor: "pointer" }}
              onClick={submit}
              disabled={status === "sending"}
            >
              {status === "sending" ? "Sending…" : "Send review"}
            </button>

            <p className="form-note">
              Reviews are read before they go on the site. We don&apos;t edit
              what you write — we either publish it as it is, or we don&apos;t
              publish it at all.
            </p>
          </div>

          <div className="info-card">
            <h3>Rather just tell us?</h3>
            <p style={{ color: "var(--muted)", fontSize: 15.5, marginBottom: 20 }}>
              A WhatsApp message works just as well. Send it however is easiest.
            </p>

            <div className="info-row">
              <div className="lbl">WhatsApp</div>
              <a href="https://wa.me/923101375475" target="_blank" rel="noreferrer">
                +92 310 1375475
              </a>
            </div>

            <div className="info-row">
              <div className="lbl">Email</div>
              <a href="mailto:support@startofpakistan.com">
                support@startofpakistan.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}