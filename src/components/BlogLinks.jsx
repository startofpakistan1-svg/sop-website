import Link from "next/link";
import { getPost } from "@/data/posts";

// "From our blog" block for service pages. Pass the slugs to show;
// titles come from src/data/posts.js so they stay in sync.
export default function BlogLinks({ slugs, intro }) {
  const items = slugs.map(getPost).filter(Boolean);
  if (!items.length) return null;

  return (
    <section>
      <div className="wrap">
        <div className="sec-head">
          <h2>From our blog</h2>
          {intro && <p>{intro}</p>}
        </div>
        <div className="cat-links blog-links">
          {items.map((p) => (
            <Link className="cat-link" href={`/blog/${p.slug}`} key={p.slug}>
              {p.title} <span aria-hidden="true">→</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
