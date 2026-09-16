"use client";

import { useEffect } from "react";

// Animates content as it scrolls into view, and counts the About page stats up.
// Mounted once in layout.js — no other file needs to change.

const TARGETS = [
  ".sec-head",
  ".svc",
  ".case",
  ".step",
  ".member",
  ".work-card",
  ".why-item",
  ".contact",
  ".info-card",
  ".stat",
  ".prose h2",
  ".prose p",
];

export default function ScrollReveal() {
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    const els = document.querySelectorAll(TARGETS.join(","));
    els.forEach((el, i) => {
      el.classList.add("reveal");
      // stagger items inside the same row/group slightly
      el.style.setProperty("--reveal-delay", `${(i % 4) * 70}ms`);
    });

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );

    els.forEach((el) => io.observe(el));

    // ---- count-up for the About page stats ----
    const nums = document.querySelectorAll(".stat-n");
    const countIO = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target;
          const target = parseInt(el.textContent, 10);
          if (Number.isNaN(target)) return;

          const duration = 900;
          const start = performance.now();

          const tick = (now) => {
            const p = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            el.textContent = Math.round(target * eased);
            if (p < 1) requestAnimationFrame(tick);
          };

          requestAnimationFrame(tick);
          countIO.unobserve(el);
        });
      },
      { threshold: 0.5 }
    );

    nums.forEach((el) => countIO.observe(el));

    return () => {
      io.disconnect();
      countIO.disconnect();
    };
  }, []);

  return null;
}