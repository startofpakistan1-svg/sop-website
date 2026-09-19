"use client";

import { useEffect } from "react";

const TARGETS = [
  ".sec-head", ".card", ".case", ".step", ".member", ".quote",
  ".st", ".cta", ".info-card", ".faq", ".prose h2", ".prose p",
  ".demo-copy", ".demo-visual", ".map-frame",
];

export default function ScrollReveal() {
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // ---- count-up numbers (runs whether or not motion is reduced) ----
    const nums = document.querySelectorAll("[data-count]");
    const cio = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          const el = e.target;
          const to = parseInt(el.dataset.count, 10);
          if (Number.isNaN(to)) return;
          cio.unobserve(el);
          if (reduced) return; // leave the real number in place
          const t0 = performance.now();
          const step = (now) => {
            const p = Math.min((now - t0) / 1100, 1);
            const k = 1 - Math.pow(1 - p, 3);
            el.textContent = Math.round(to * k).toLocaleString();
            if (p < 1) requestAnimationFrame(step);
            else el.textContent = to.toLocaleString();
          };
          el.textContent = "0";
          requestAnimationFrame(step);
        });
      },
      { threshold: 0.5 }
    );
    nums.forEach((el) => cio.observe(el));

    if (reduced) {
      return () => cio.disconnect();
    }

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