import Link from "next/link";

// Simple "service — starting from price" rows, for pages with no tiers.
// Built from the row styles already in globals.css (.leak-card / .leak-row)
// so it needs no new CSS.
//
//   title   — section heading
//   items   — [{ label, price }]; omit price for a row that has none
//   adSpend — true on Amazon pages, which adds the ad spend sentence

const FOOTNOTE = "Every project gets a written plan and a fixed price within a day.";
const AD_SPEND = " Ad spend is paid to Amazon directly.";

// Prices are written as "from $500"; the label supplies "Starting from",
// so drop a leading "from" rather than printing it twice.
function amount(price) {
  return price.replace(/^from\s+/i, "");
}

export default function PriceList({ title, items, adSpend = false, intro }) {
  if (!items?.length) return null;

  return (
    <section>
      <div className="wrap">
        <div className="sec-head">
          <h2>{title}</h2>
          {intro ? <p>{intro}</p> : null}
        </div>

        <ul className="leak-card" style={{ maxWidth: 820, listStyle: "none" }}>
          {items.map((i) => (
            <li className="leak-row" key={i.label} style={{ flexWrap: "wrap" }}>
              <span>{i.label}</span>
              {i.price ? (
                <span style={{ fontWeight: 800, color: "var(--ink)" }}>
                  <span style={{ fontWeight: 600, color: "var(--ash)" }}>Starting from </span>
                  {amount(i.price)}
                </span>
              ) : null}
            </li>
          ))}
        </ul>

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
