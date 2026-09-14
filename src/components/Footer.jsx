import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="wrap foot">
        <div>
          <img className="logo-img" src="/logo.png" alt="SOP logo" />
          <p>Start of Pakistan — eCommerce &amp; digital solutions from Jhelum for clients everywhere.</p>
        </div>

        <div className="foot-links">
          <div className="foot-col">
            <h4>Company</h4>
            <Link href="/services">Services</Link>
            <Link href="/portfolio">Portfolio</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </div>
          <div className="foot-col">
            <h4>Contact</h4>
            <a href="https://wa.me/923101375475" target="_blank" rel="noreferrer">WhatsApp</a>
            <a href="mailto:support@startofpakistan.com">support@startofpakistan.com</a>
            <a href="tel:+92544584447">0544-584447</a>
            <span>Jhelum, Pakistan</span>
          </div>
        </div>
      </div>

      <div className="wrap copy">
        © {new Date().getFullYear()} Start of Pakistan. All rights reserved.
      </div>
    </footer>
  );
}