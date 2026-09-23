"use client";

import { useState } from "react";
import { track } from "@/lib/track";

const ACCESS_KEY = "d2c6863a-7274-4b69-b3fe-02afd91f87e7";

const faqs = [
  {
    q: "How quickly will you reply?",
    a: "The same working day, usually within a few hours. Your message goes to the person who would work on your account, not a shared sales inbox. If you write in the evening UK or US time, you will normally have a reply waiting when you start work, because we are four to five hours ahead of the UK.",
  },
  {
    q: "Can we talk about pricing before a call?",
    a: "Yes. Tell us what you sell, which platforms you are on and roughly how many products you have, and we will explain how we would charge for it. Amazon account management and PPC are a fixed monthly fee. Store builds and AI systems are a fixed project price. We do not take a percentage of your sales or ad spend, and there are no long contracts.",
  },
  {
    q: "What hours do you work, and how does the time zone work for UK and US clients?",
    a: "We are based in Jhelum, Pakistan, four to five hours ahead of the UK and nine to ten hours ahead of the US East Coast depending on the season. In practice that means the daily work on your account is usually done before your morning, and we overlap with UK afternoons and US mornings for calls and messages. WhatsApp and email are answered throughout our working day.",
  },
  {
    q: "What should I have ready before a call?",
    a: "Nothing formal. It helps to know what you sell and where, what is working and what is not, and what you would like to hand over. If you already have an Amazon account or a store, having access to your reports open during the call lets us give you specific answers rather than general ones. If you are starting from nothing, that is fine too.",
  },
  {
    q: "Do I have to give you my passwords?",
    a: "No. For Amazon you add us as a user in Seller Central with only the permissions the work needs, and you can remove that access yourself at any time. For Shopify and other platforms we use staff or collaborator accounts in the same way. We never ask for your main login.",
  },
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "Marketplace & ecommerce",
    message: "",
    company: "", // honeypot — real people leave this empty
  });

  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const [error, setError] = useState("");

  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const sendForm = async () => {
    if (!form.name.trim() || !form.message.trim()) {
      setError("Please add your name and a short message.");
      return;
    }
    if (!form.email.trim() && !form.phone.trim()) {
      setError("Please leave an email or a phone number so we can reply.");
      return;
    }

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
          subject: `New website enquiry — ${form.service}`,
          from_name: "SOP Website",
          name: form.name,
          email: form.email,
          phone: form.phone,
          service: form.service,
          message: form.message,
          botcheck: form.company,
        }),
      });

      const data = await res.json();

      if (data.success) {
        setStatus("sent");
        track("contact_form_submit", { form: "contact" });
      } else {
        setStatus("error");
        setError("Something went wrong. Please WhatsApp us instead.");
      }
    } catch {
      setStatus("error");
      setError("Couldn't send — please check your connection or WhatsApp us.");
    }
  };

  const sendWhatsApp = () => {
    const text =
      `New enquiry from the SOP website%0A%0A` +
      `Name: ${form.name}%0A` +
      `Email: ${form.email}%0A` +
      `Phone: ${form.phone}%0A` +
      `Service: ${form.service}%0A%0A` +
      `${form.message}`;
    track("whatsapp_click", { location: "contact_form", page: "/contact" });
    window.open(`https://api.whatsapp.com/send?phone=923101375475&text=${text}`, "_blank");
  };

  return (
    <>
      <section className="page-head" style={{ "--cover": "url(/covers/contact.svg)" }}>
        <div className="wrap">
          <h1>Let&apos;s talk</h1>
          <p>Tell us what you&apos;re building. We usually reply the same day.</p>
        </div>
      </section>

      <section>
        <div className="wrap contact-grid">
          {/* FORM */}
          <div>
            {status === "sent" ? (
              <div className="form-success">
                <h3>Thanks — we&apos;ve got your message.</h3>
                <p>
                  We&apos;ll get back to you at{" "}
                  <strong>{form.email || form.phone}</strong>, usually the same
                  day. If it&apos;s urgent, message us on WhatsApp.
                </p>
                <a
                  className="btn btn-acc"
                  href="https://api.whatsapp.com/send?phone=923101375475"
                  target="_blank"
                  rel="noreferrer"
                >
                  Message on WhatsApp
                </a>
              </div>
            ) : (
              <>
                <div className="field">
                  <label htmlFor="name">Your name *</label>
                  <input
                    id="name"
                    value={form.name}
                    onChange={set("name")}
                    placeholder="e.g. Ali Raza"
                  />
                </div>

                <div className="field">
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    type="email"
                    value={form.email}
                    onChange={set("email")}
                    placeholder="you@company.com"
                  />
                </div>

                <div className="field">
                  <label htmlFor="phone">Phone / WhatsApp</label>
                  <input
                    id="phone"
                    value={form.phone}
                    onChange={set("phone")}
                    placeholder="+92 300 0000000"
                  />
                </div>

                <div className="field">
                  <label htmlFor="service">What do you need?</label>
                  <select
                    id="service"
                    value={form.service}
                    onChange={set("service")}
                  >
                    <option>Marketplace &amp; ecommerce</option>
                    <option>Web development</option>
                    <option>AI bots &amp; agents</option>
                    <option>Digital solutions (branding, SEO)</option>
                    <option>Something else</option>
                  </select>
                </div>

                <div className="field">
                  <label htmlFor="message">Tell us about your project *</label>
                  <textarea
                    id="message"
                    value={form.message}
                    onChange={set("message")}
                    placeholder="What are you selling, and where are you stuck?"
                  />
                </div>

                {/* honeypot — hidden from people, bots fill it in */}
                <input
                  type="text"
                  name="company"
                  value={form.company}
                  onChange={set("company")}
                  tabIndex={-1}
                  autoComplete="off"
                  style={{
                    position: "absolute",
                    left: "-9999px",
                    opacity: 0,
                    height: 0,
                  }}
                  aria-hidden="true"
                />

                {error && <div className="form-error">{error}</div>}

                <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                  <button
                    className="btn btn-acc"
                    style={{ border: "none", cursor: "pointer" }}
                    onClick={sendForm}
                    disabled={status === "sending"}
                  >
                    {status === "sending" ? "Sending…" : "Send enquiry"}
                  </button>
                  <button
                    className="btn btn-ghost"
                    style={{ background: "#fff", cursor: "pointer" }}
                    onClick={sendWhatsApp}
                  >
                    Send on WhatsApp
                  </button>
                </div>

                <p className="form-note">
                  We reply to every enquiry — usually within a few hours.
                </p>
              </>
            )}
          </div>

          {/* INFO */}
          <div className="info-card">
            <h3>Reach us directly</h3>

            <div className="info-row">
              <div className="lbl">WhatsApp</div>
              <a
                href="https://api.whatsapp.com/send?phone=923101375475"
                target="_blank"
                rel="noreferrer"
              >
                +92 310 1375475
              </a>
            </div>

            <div className="info-row">
              <div className="lbl">Email</div>
              <a href="mailto:support@startofpakistan.com">
                support@startofpakistan.com
              </a>
            </div>

            <div className="info-row">
              <div className="lbl">Landline</div>
              <a href="tel:+92544584447">0544-584447</a>
            </div>

            <div className="info-row">
              <div className="lbl">Office</div>
              <span className="addr">
                First Floor, Office No. 7<br />
                Rizwan Heights, Citi Town B Block<br />
                Street C1, beside HBL Bank<br />
                Satellite Town, Jhelum 49600
              </span>
              <a
                className="dir-link"
                href="https://www.google.com/maps/dir/?api=1&destination=32.9914231,73.6653876"
                target="_blank"
                rel="noreferrer"
              >
                Get directions
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* MAP */}
      <section style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="sec-head">
            <h2>Find us</h2>
            <p>
              First floor of Rizwan Heights, right beside HBL Bank on Street C1
              in Satellite Town. Parking outside.
            </p>
          </div>

          <div className="map-frame">
            <iframe
              title="SOP office location on Google Maps"
              src="https://maps.google.com/maps?q=32.9914231,73.6653876&z=17&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>

          <a
            className="btn btn-ghost"
            style={{ marginTop: 20 }}
            href="https://www.google.com/maps/dir/?api=1&destination=32.9914231,73.6653876"
            target="_blank"
            rel="noreferrer"
          >
            Open in Google Maps
          </a>
        </div>
      </section>

      {/* WHAT HAPPENS NEXT */}
      <section className="process-band">
        <div className="wrap">
          <div className="sec-head">
            <h2>What happens after you get in touch</h2>
            <p>
              No sales funnel, no waiting list. Here&apos;s what to expect
              once you&apos;ve sent a message.
            </p>
          </div>
          <ol className="steps">
            <li className="step">
              <div className="step-n">01</div>
              <div className="step-body">
                <h3>We reply the same day</h3>
                <p>
                  Your enquiry goes to the person who would actually work on
                  your account, not a sales inbox. We reply the same working
                  day, usually within a few hours, by email or WhatsApp &mdash;
                  whichever you used. If you&apos;re in the UK or US, that often
                  means an answer waiting for you when you start work, since
                  we&apos;re four to five hours ahead of the UK.
                </p>
              </div>
            </li>
            <li className="step">
              <div className="step-n">02</div>
              <div className="step-body">
                <h3>A free call, if you want one</h3>
                <p>
                  Most sellers find a short call easiest. We&apos;ll ask what
                  you sell, which marketplaces or platforms you&apos;re on, and
                  where you&apos;re stuck. No slides and no pitch &mdash; just
                  questions.
                </p>
              </div>
            </li>
            <li className="step">
              <div className="step-n">03</div>
              <div className="step-body">
                <h3>A written plan and a fixed price</h3>
                <p>
                  Within a few days you get a short written plan: what we would
                  do, in what order, and a fixed monthly fee or project price.
                  No percentage of your sales or ad spend, and no long
                  contract.
                </p>
              </div>
            </li>
            <li className="step">
              <div className="step-n">04</div>
              <div className="step-body">
                <h3>You decide</h3>
                <p>
                  If it&apos;s a fit, we start when you&apos;re ready &mdash;
                  usually within the week. If it isn&apos;t, no hard feelings,
                  and you still have the plan.
                </p>
              </div>
            </li>
          </ol>
        </div>
      </section>

      {/* FAQ */}
      <section>
        <div className="wrap">
          <div className="sec-head">
            <h2>Questions people ask before getting in touch</h2>
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
    </>
  );
}