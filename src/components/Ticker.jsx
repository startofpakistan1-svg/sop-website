export default function Ticker() {
  const line =
    "Pakistan's first AI-powered eCommerce company — we don't follow the market, we automate it.";

  // repeated so the scroll never shows a gap
  const items = [line, line, line, line];

  return (
    <div className="ticker" role="marquee" aria-label={line}>
      <div className="ticker-track">
        {items.map((t, i) => (
          <span className="ticker-item" key={i}>
            {t}
            <span className="ticker-dot" aria-hidden="true">•</span>
          </span>
        ))}
      </div>
    </div>
  );
}