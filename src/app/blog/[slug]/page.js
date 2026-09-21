import Link from "next/link";
import { notFound } from "next/navigation";
import posts, { getPost } from "@/data/posts";

const SITE = "https://www.startofpakistan.com";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};

  return {
    title: `${post.title} | SOP`,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `${SITE}/blog/${post.slug}`,
      type: "article",
      publishedTime: post.date,
    },
  };
}

function formatDate(iso) {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}

// ---- Tiny renderer for the markdown-style `content` field in src/data/posts.js ----

// Inline: **bold** and [text](href). Anything else is plain text.
const INLINE = /(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g;

function inline(text) {
  return text.split(INLINE).filter(Boolean).map((part, i) => {
    if (part.startsWith("**")) {
      return <strong key={i}>{part.slice(2, -2)}</strong>;
    }
    const link = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (link) {
      const [, label, href] = link;
      return href.startsWith("/")
        ? <Link key={i} href={href}>{label}</Link>
        : <a key={i} href={href} target="_blank" rel="noreferrer">{label}</a>;
    }
    return part;
  });
}

// Block: split on blank lines, then classify each block.
function render(content) {
  return content
    .trim()
    .split(/\n\s*\n/)
    .map((block, i) => {
      const lines = block.trim().split("\n");

      if (lines[0].startsWith("## ")) {
        return <h2 key={i}>{inline(lines[0].slice(3))}</h2>;
      }
      if (lines.every((l) => /^- /.test(l))) {
        return (
          <ul key={i}>
            {lines.map((l, j) => <li key={j}>{inline(l.slice(2))}</li>)}
          </ul>
        );
      }
      if (lines.every((l) => /^\d+\. /.test(l))) {
        return (
          <ol key={i}>
            {lines.map((l, j) => <li key={j}>{inline(l.replace(/^\d+\. /, ""))}</li>)}
          </ol>
        );
      }
      return <p key={i}>{inline(lines.join(" "))}</p>;
    });
}

export default async function Post({ params }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const article = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    mainEntityOfPage: `${SITE}/blog/${post.slug}`,
    author: {
      "@type": "Organization",
      name: "SOP – Start of Pakistan",
      url: SITE,
    },
    publisher: {
      "@type": "Organization",
      name: "SOP – Start of Pakistan",
      logo: {
        "@type": "ImageObject",
        url: `${SITE}/logo.png`,
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(article).replace(/</g, "\\u003c"),
        }}
      />

      {/* HERO */}
      <section className="page-head" style={{ "--cover": "url(/covers/blog.svg)" }}>
        <div className="wrap">
          <div className="svc-kicker">
            <Link href="/blog">Blog</Link> · <time dateTime={post.date}>{formatDate(post.date)}</time>
          </div>
          <h1>{post.title}</h1>
          <p>{post.description}</p>
        </div>
      </section>

      {/* ARTICLE */}
      <section>
        <div className="wrap prose post">
          {render(post.content)}

          <div className="post-foot">
            <Link className="case-link" href="/blog">
              <span aria-hidden="true">←</span> All guides
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
