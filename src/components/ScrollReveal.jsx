"use client";

import { useEffect } from "react";

const TARGETS = [
  ".sec-head", ".card", ".case", ".step", ".member", ".quote",
  ".st", ".cta", ".info-card", ".faq", ".prose h2", ".prose p",
  ".demo-copy", ".demo-visual", ".map-frame",
];

export default function ScrollReveal() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const els = Array.from(document.querySelectorAll(TARGETS.join(",")));
    els.forEach((el, i) => {
      el.classList.add("sr");
      el.style.transitionDelay = `${(i % 4) * 85}ms`;
    });

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -50px 0px" }
    );
    els.forEach((el) => io.observe(el));

    // count-up numbers
    const nums = document.querySelectorAll("[data-count]");
    const cio = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          const el = e.target;
          const to = parseInt(el.dataset.count, 10);
          const suffix = el.dataset.suffix || "";
          if (Number.isNaN(to)) return;
          const t0 = performance.now();
          const step = (now) => {
            const p = Math.min((now - t0) / 1100, 1);
            const k = 1 - Math.pow(1 - p, 3);
            el.textContent = Math.round(to * k).toLocaleString() + suffix;
            if (p < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
          cio.unobserve(el);
        });
      },
      { threshold: 0.6 }
    );
    nums.forEach((el) => cio.observe(el));

    // cursor spotlight on cards
    const cards = document.querySelectorAll(".card");
    const move = (ev) => {
      const c = ev.currentTarget;
      const r = c.getBoundingClientRect();
      c.style.setProperty("--mx", `${ev.clientX - r.left}px`);
      c.style.setProperty("--my", `${ev.clientY - r.top}px`);
    };
    cards.forEach((c) => c.addEventListener("mousemove", move));

    return () => {
      io.disconnect();
      cio.disconnect();
      cards.forEach((c) => c.removeEventListener("mousemove", move));
    };
  }, []);

  return null;
}