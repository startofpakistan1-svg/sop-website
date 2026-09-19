"use client";

import { useEffect, useRef, useState } from "react";

// The browser doesn't expose a real byte-level load percentage, so this tracks
// two honest signals instead: how long the load has been running, and whether
// the document has finished. The fill eases toward 92% while work is still
// happening, then completes the moment the page is ready.

export default function Loading() {
  const [p, setP] = useState(0);
  const raf = useRef(null);

  useEffect(() => {
    const start = performance.now();
    let done = false;

    const finish = () => {
      done = true;
    };

    if (document.readyState === "complete") {
      finish();
    } else {
      window.addEventListener("load", finish, { once: true });
    }

    const tick = (now) => {
      const t = now - start;

      // eases quickly at first, then slows — never reaches the top on its own
      const eased = 1 - Math.exp(-t / 900);
      const target = done ? 1 : Math.min(eased * 0.92, 0.92);

      setP((prev) => (target > prev ? prev + (target - prev) * 0.14 : prev));
      raf.current = requestAnimationFrame(tick);
    };

    raf.current = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf.current);
      window.removeEventListener("load", finish);
    };
  }, []);

  const pct = Math.round(p * 100);

  return (
    <div className="splash" role="status" aria-label={`Loading ${pct}%`}>
      <div className="splash-in">
        <div className="splash-logo" aria-hidden="true">
          <img className="lg-ghost" src="/logo.png" alt="" />
          <img
            className="lg-live"
            src="/logo.png"
            alt=""
            style={{ clipPath: `inset(${100 - pct}% 0 0 0)` }}
          />
        </div>

        <div className="splash-bar" aria-hidden="true">
          <i style={{ width: `${pct}%` }} />
        </div>

        <p className="splash-txt">eCommerce &amp; Digital Solutions</p>
      </div>
    </div>
  );
}