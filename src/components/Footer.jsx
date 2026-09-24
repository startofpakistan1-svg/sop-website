import Link from "next/link";

const socials = [
  { label: "LinkedIn",  icon: "linkedin",  href: "https://www.linkedin.com/company/start-of-pakistan/" },
  { label: "Facebook",  icon: "facebook",  href: "https://www.facebook.com/profile.php?id=61594490571515" },
  { label: "Instagram", icon: "instagram", href: "https://www.instagram.com/startofpakistan1/" },
  { label: "TikTok",    icon: "tiktok",    href: "https://www.tiktok.com/@startofpakistan1" },
];

export default function Footer() {
  return (
    <footer>
      <div className="wrap foot">
        <div>
          <img className="logo-img" src="/logo.png" alt="SOP logo" />
          <p>
            Start of Pakistan — eCommerce, web and AI solutions from Jhelum for
            clients everywhere.
          </p>
        </div>

        <div className="foot-links">
          <div className="foot-col">
            <h4>Company</h4>
            <Link href="/services">Services</Link>
            <Link href="/amazon-account-management">Amazon Management</Link>
            <Link href="/amazon-ppc-management">Amazon PPC</Link>
            <Link href="/shopify-development">Shopify Development</Link>
            <Link href="/ecommerce-website-development">Ecommerce Websites</Link>
            <Link href="/ai-automation">AI Automation</Link>
            <Link href="/marketing-automation">Marketing Automation</Link>
            <Link href="/portfolio">Work</Link>
            <Link href="/about">About</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/review">Leave a review</Link>
          </div>

          <div className="foot-col">
            <h4>Contact</h4>
            <a href="https://api.whatsapp.com/send?phone=923101375475" target="_blank" rel="noreferrer">WhatsApp</a>
            <a href="mailto:support@startofpakistan.com">support@startofpakistan.com</a>
            <a href="tel:+92544584447">0544-584447</a>
            <span>Rizwan Heights, Satellite Town<br />Jhelum 49600, Pakistan</span>
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=32.9914231,73.6653876"
              target="_blank"
              rel="noreferrer"
            >
              Get directions
            </a>
          </div>

          <div className="foot-col">
            <h4>Follow</h4>
            {socials.map((s) => (
              <a
                key={s.label}
                className="foot-social"
                href={s.href}
                target="_blank"
                rel="noreferrer"
              >
                <i className={`ico ico-${s.icon}`} aria-hidden="true" />
                {s.label}
              </a>
            ))}
          </div>

          <div className="foot-col">
            <h4>Legal</h4>
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms of Service</Link>
            <a
              href="https://www.designrush.com/agency/website-design-development"
              rel="nofollow noreferrer"
              target="_blank"
            >
              As seen on DesignRush
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