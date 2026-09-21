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

      {/* ABOUT THE GUIDES */}
      <section className="process-band">
        <div className="wrap prose">
          <h2>What these guides cover</h2>
          <p>
            Everything here comes from the questions sellers ask us before and
            after they hire us: what a good ACoS actually is, how to write a
            listing that ranks and converts, what Amazon account management
            should cost, and whether a Shopify theme or a custom-coded site is
            the better choice. The AI guides explain what agents are and where
            they genuinely save time, without the hype.
          </p>
          <p>
            We write for owners of businesses selling in the UK and US, in
            plain English, and we do not quote statistics or prices we cannot
            stand behind. New guides are added as the questions come in. If
            there is something you would like covered, tell us.
          </p>
          <p>
            Not sure where to begin? If you already advertise on Amazon, start
            with <Link href="/blog/what-is-a-good-acos">what a good ACoS looks like</Link> and
            work out your break-even figure before changing anything. If your
            listings are the problem, the{" "}
            <Link href="/blog/how-to-optimize-amazon-listing">listing optimization guide</Link>{" "}
            goes through the page section by section. And if you are about to
            hire help, <Link href="/blog/how-to-choose-an-amazon-agency">the ten questions to ask an agency</Link>{" "}
            will save you a bad contract. Shopify and custom-site owners should
            read the two build guides together, because the right answer is
            often a mix of both.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section>
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
