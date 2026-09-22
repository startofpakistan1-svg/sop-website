import testimonials from "@/data/testimonials";

// Initials for the avatar circle: "Haider Rana (Adv)" → "HR"
function initials(name) {
  return name
    .replace(/\(.*?\)/g, "")
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0].toUpperCase())
    .join("");
}

function Stars({ rating }) {
  return (
    <span className="quote-stars" role="img" aria-label={`Rated ${rating} out of 5`}>
      {[1, 2, 3, 4, 5].map((n) => (
        <span key={n} className={n <= rating ? "on" : ""} aria-hidden="true">★</span>
      ))}
    </span>
  );
}

// One testimonial card. Reuses the .quote styles already in globals.css.
export function TestimonialCard({ t }) {
  return (
    <figure className="quote">
      <span className="quote-mark" aria-hidden="true">&ldquo;</span>
      <Stars rating={t.rating} />
      <blockquote>{t.quote}</blockquote>
      <figcaption>
        <span className="quote-avatar">{initials(t.name)}</span>
        <span>
          <strong>{t.name}</strong>
          <em>{t.role}, {t.company}</em>
          <em>{t.country} · {t.service}</em>
        </span>
      </figcaption>
    </figure>
  );
}

// Compact variant for placing inside another layout (e.g. a portfolio case).
export function TestimonialInline({ company }) {
  const t = testimonials.find((x) => x.company === company);
  if (!t) return null;
  return (
    <figure className="quote quote-inline">
      <Stars rating={t.rating} />
      <blockquote>{t.quote}</blockquote>
      <figcaption>
        <span>
          <strong>{t.name}</strong>
          <em>{t.role}, {t.company} · {t.country}</em>
        </span>
      </figcaption>
    </figure>
  );
}

// Full section. `items` defaults to every testimonial; pass a filtered list
// to show only those for one service. Renders nothing if there are none.
export default function Testimonials({
  heading = "What our clients say",
  intro = "In their words, not ours.",
  items = testimonials,
  band = false,
}) {
  if (!items.length) return null;
  return (
    <section className={band ? "process-band" : ""}>
      <div className="wrap">
        <div className="sec-head">
          <h2>{heading}</h2>
          {intro && <p>{intro}</p>}
        </div>
        <div className={`quotes ${items.length === 1 ? "single" : ""}`}>
          {items.map((t, i) => (
            <TestimonialCard t={t} key={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
