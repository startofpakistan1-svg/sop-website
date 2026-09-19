"use client";

import { useState } from "react";

const ACCESS_KEY = "d2c6863a-7274-4b69-b3fe-02afd91f87e7";

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
    window.open(`https://wa.me/923101375475?text=${text}`, "_blank");
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
                  href="https://wa.me/923101375475"
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
                href="https://wa.me/923101375475"
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
    </>
  );
}