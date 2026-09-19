"use client";

import { useEffect, useState } from "react";

export default function HeroFlow() {
  const [sales, setSales] = useState(32928);
  const [order, setOrder] = useState(607);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => {
      setSales((s) => s + Math.floor(Math.random() * 90) + 20);
      setOrder((o) => o + 1);
    }, 3200);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="flow rev d3">
      <div className="stage">
        <svg className="wire" viewBox="0 0 520 430" preserveAspectRatio="none" aria-hidden="true">
          <path d="M110,40 C240,40 240,205 350,205" />
          <path d="M120,160 C250,160 250,205 350,205" />
          <path d="M110,285 C250,285 250,215 350,215" />
          <path d="M140,392 C260,392 260,225 350,215" />
          <path className="live" d="M110,40 C240,40 240,205 350,205" />
          <path className="live l2" d="M120,160 C250,160 250,205 350,205" />
          <path className="live l3" d="M110,285 C250,285 250,215 350,215" />
          <path className="live l4" d="M140,392 C260,392 260,225 350,215" />
        </svg>

        <div className="node n1">Amazon</div>
        <div className="node n2">Shopify</div>
        <div className="node n3">eBay</div>
        <div className="node n4">Etsy</div>

        <div className="hub" aria-hidden="true">
          <img src="/logo.png" alt="" />
        </div>

        <div className="order-card">
          <div className="row">
            <span className="tick">✓</span> Order #{order} shipped
          </div>
        </div>

        <div className="ticker-card">
          <div className="lbl">Sales handled</div>
          <div className="val">£{sales.toLocaleString()}</div>
          <div className="up">▲ live</div>
        </div>
      </div>
    </div>
  );
}