"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const path = usePathname();

  return (
    <header className="nav">
      <div className="wrap nav-inner">
        <Link href="/" aria-label="SOP home">
          <img className="logo-img" src="/logo.png" alt="SOP — eCommerce & Digital Solutions" />
        </Link>

        <nav className="nav-links">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={path === l.href ? "active" : ""}
            >
              {l.label}
            </Link>
          ))}
          <Link className="nav-cta" href="/contact">Get a quote</Link>
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

      <div className={`mobile-menu ${open ? "open" : ""}`}>
        {links.map((l) => (
          <Link key={l.href} href={l.href} onClick={() => setOpen(false)}>
            {l.label}
          </Link>
        ))}
        <Link href="/contact" onClick={() => setOpen(false)}>Get a quote</Link>
      </div>
    </header>
  );
}