"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Work", href: "/portfolio" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const path = usePathname();

  return (
    <header className="nav">
      <div className="wrap nav-in">
        <Link href="/" aria-label="SOP home">
          <img className="logo-img" src="/logo.png" alt="SOP — eCommerce & Digital Solutions" />
        </Link>

        {/* One nav for every width: a row on desktop, a dropdown panel on mobile (CSS) */}
        <nav className={`nav-links ${open ? "open" : ""}`}>
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={path === l.href ? "active" : ""}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <Link className="btn btn-dark nav-cta" href="/contact" onClick={() => setOpen(false)}>
            <span className="t">Start a project</span>
          </Link>
        </nav>

        <button
          className="burger"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? "\u2715" : "\u2630"}
        </button>
      </div>
    </header>
  );
}