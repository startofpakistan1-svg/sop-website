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
            <Link href="/review">Leave a review</Link>
            <Link href="/privacy">Privacy Policy</Link>
          </div>
          <div className="foot-col">
            <h4>Contact</h4>
            <a href="https://wa.me/923101375475" target="_blank" rel="noreferrer">WhatsApp</a>
            <a href="mailto:support@startofpakistan.com">support@startofpakistan.com</a>
            <a href="tel:+92544584447">0544-584447</a>
            <span>Jhelum, Pakistan</span>
          </div>

          <div className="foot-col">
            <h4>Follow</h4>
            <a
              className="foot-social"
              href="https://www.linkedin.com/company/start-of-pakistan/"
              target="_blank"
              rel="noreferrer"
              aria-label="SOP on LinkedIn"
            >
              <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
                <path
                  fill="currentColor"
                  d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zm1.78 13.02H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z"
                />
              </svg>
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      <div className="wrap copy">
        © {new Date().getFullYear()} Start of Pakistan. All rights reserved.
      </div>
    </footer>
  );
}