import Link from "next/link";

// Pricing tiers, built from the card styles already in globals.css
// (.cat-groups / .group), so it needs no new CSS: three columns from 980px up,
// stacked below that. A highlighted tier takes the site's amber accent.
//
//   title   — section heading
//   tiers   — [{ name, price, period?, note, features: string[], highlight? }]
//   below   — optional single line under the cards
//   adSpend — true on Amazon pages, which adds the ad spend sentence

const FOOTNOTE = "Every project gets a written plan and a fixed price within a day.";
const AD_SPEND = " Ad spend is paid to Amazon directly.";

const priceStyle = {
  fontSize: 32,
  fontWeight: 800,
  letterSpacing: "-.03em",
  lineHeight: 1.1,
  color: "var(--ink)",
  margin: "2px 0 0",
};

const periodStyle = {
  fontSize: 15.5,
  fontWeight: 700,
  letterSpacing: "normal",
  color: "var(--ash)",
};

export default function PricingCards({ title, tiers, below, adSpend = false }) {
  if (!tiers?.length) return null;

  return (
    <section>
      <div className="wrap">
        <div className="sec-head">
          <h2>{title}</h2>
        </div>

        <div className="cat-groups">
          {tiers.map((t) => (
            <div
              className="group"
              key={t.name}
              style={
                t.highlight
                  ? { borderColor: "var(--amber)", boxShadow: "var(--sh-2)" }
                  : undefined
              }
            >
              <h3>{t.name}</h3>
              <div className="cat-kicker">Starting from</div>
              <p style={priceStyle}>
                {t.price}
                {t.period ? <span style={periodStyle}> {t.period}</span> : null}
              </p>
              {t.note ? (
                <p className="group-lead" style={{ margin: "12px 0 18px" }}>{t.note}</p>
              ) : null}
              <ul>
                {t.features.map((f) => <li key={f}>{f}</li>)}
              </ul>
            </div>
          ))}
        </div>

        {below ? (
          <p className="group-lead" style={{ margin: "24px 0 0" }}>{below}</p>
        ) : null}

        <div className="acts">
          <Link className="btn btn-acc" href="/contact">
            <span className="t">Get a fixed quote</span> <span className="a">→</span>
          </Link>
        </div>

        <p className="group-lead" style={{ margin: "20px 0 0", maxWidth: 820 }}>
          {FOOTNOTE}
          {adSpend ? AD_SPEND : ""}
        </p>
      </div>
    </section>
  );
}
