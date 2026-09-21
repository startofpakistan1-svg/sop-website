import Link from "next/link";
import posts from "@/data/posts";

export const metadata = {
  title: "Amazon Seller Blog | SOP",
  description:
    "Practical guides on Amazon PPC, listing optimization and account management for UK and US sellers.",
  alternates: { canonical: "/blog" },
};

function formatDate(iso) {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}

export default function Blog() {
  const sorted = [...posts].sort((a, b) => (a.date < b.date ? 1 : -1));

  return (
    <>
      {/* HERO */}
      <section className="page-head" style={{ "--cover": "url(/covers/blog.svg)" }}>
        <div className="wrap">
          <div className="svc-kicker">Blog · Amazon sellers</div>
          <h1>Guides for Amazon sellers</h1>
          <p>
            Plain-English guides on PPC, listing optimization and account
            management, written for sellers in the UK and US.
          </p>
        </div>
      </section>

      {/* POSTS */}
      <section>
        <div className="wrap">
          <div className="post-grid">
            {sorted.map((p) => (
              <article className="card post-card" key={p.slug}>
                <time className="post-date" dateTime={p.date}>{formatDate(p.date)}</time>
                <h3>
                  <Link href={`/blog/${p.slug}`}>{p.title}</Link>
                </h3>
                <p>{p.excerpt}</p>
                <Link className="case-link" href={`/blog/${p.slug}`}>
                  Read more <span aria-hidden="true">→</span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="process-band">
        <div className="wrap">
          <div className="cta">
            <div className="cta-in">
              <h2>Rather have it done for you?</h2>
              <p>We manage Amazon accounts and PPC for UK and US sellers on a fixed monthly fee.</p>
            </div>
            <div className="cta-actions">
              <Link className="btn btn-acc" href="/amazon-account-management">
                <span className="t">Amazon account management</span> <span className="a">→</span>
              </Link>
              <Link className="btn btn-line" href="/amazon-ppc-management">
                <span className="t">Amazon PPC management</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
