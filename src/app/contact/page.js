"use client";

import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "Marketplace & ecommerce",
    message: "",
  });

  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  // Sends the enquiry to WhatsApp. Swap for a real backend later.
  const sendWhatsApp = () => {
    if (!form.name || !form.message) {
      alert("Please add your name and a short message.");
      return;
    }
    const text =
      `New enquiry from the SOP website%0A%0A` +
      `Name: ${form.name}%0A` +
      `Email: ${form.email}%0A` +
      `Phone: ${form.phone}%0A` +
      `Service: ${form.service}%0A%0A` +
      `${form.message}`;
    window.open(`https://wa.me/923101375475?text=${text}`, "_blank");
  };

  const sendEmail = () => {
    if (!form.name || !form.message) {
      alert("Please add your name and a short message.");
      return;
    }
    const subject = encodeURIComponent(`Website enquiry — ${form.service}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nService: ${form.service}\n\n${form.message}`
    );
    window.location.href = `mailto:support@startofpakistan.com?subject=${subject}&body=${body}`;
  };

  return (
    <>
      <section className="page-head" style={{ padding: "64px 0 70px" }}>
        <div className="wrap">
          <h1>Let&apos;s talk</h1>
          <p>Tell us what you&apos;re building. We usually reply the same day.</p>
        </div>
      </section>

      <section>
        <div className="wrap contact-grid">
          {/* FORM */}
          <div>
            <div className="field">
              <label htmlFor="name">Your name *</label>
              <input id="name" value={form.name} onChange={set("name")} placeholder="e.g. Ali Raza" />
            </div>

            <div className="field">
              <label htmlFor="email">Email</label>
              <input id="email" type="email" value={form.email} onChange={set("email")} placeholder="you@company.com" />
            </div>

            <div className="field">
              <label htmlFor="phone">Phone / WhatsApp</label>
              <input id="phone" value={form.phone} onChange={set("phone")} placeholder="+92 300 0000000" />
            </div>

            <div className="field">
              <label htmlFor="service">What do you need?</label>
              <select id="service" value={form.service} onChange={set("service")}>
                <option>Marketplace &amp; ecommerce</option>
                <option>Web development</option>
                <option>AI bots &amp; agents</option>
                <option>Digital solutions (branding, SEO)</option>
                <option>Something else</option>
              </select>
            </div>

            <div className="field">
              <label htmlFor="message">Tell us about your project *</label>
              <textarea id="message" value={form.message} onChange={set("message")} placeholder="What are you selling, and where are you stuck?" />
            </div>

            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <button className="btn-orange" style={{ border: "none", cursor: "pointer" }} onClick={sendWhatsApp}>
                Send on WhatsApp
              </button>
              <button className="btn-outline" style={{ background: "#fff", cursor: "pointer" }} onClick={sendEmail}>
                Send by email
              </button>
            </div>

            <p className="form-note">
              Both buttons open with your details filled in — just press send.
            </p>
          </div>

          {/* INFO */}
          <div className="info-card">
            <h3>Reach us directly</h3>

            <div className="info-row">
              <div className="lbl">WhatsApp</div>
              <a href="https://wa.me/923101375475" target="_blank" rel="noreferrer">+92 310 1375475</a>
            </div>

            <div className="info-row">
              <div className="lbl">Email</div>
              <a href="mailto:support@startofpakistan.com">support@startofpakistan.com</a>
            </div>

            <div className="info-row">
              <div className="lbl">Landline</div>
              <a href="tel:+92544584447">0544-584447</a>
            </div>

            <div className="info-row">
              <div className="lbl">Location</div>
              <span>Jhelum, Punjab, Pakistan</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}