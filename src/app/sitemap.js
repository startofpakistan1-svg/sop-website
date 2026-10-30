import posts from "@/data/posts";

const base = "https://www.startofpakistan.com";

// Static pages carry no lastModified. They used to report the build time, which
// told Google every page changed on every deploy — and a sitemap whose dates are
// consistently wrong gets its dates ignored site-wide, including the blog's,
// which are real. Better to say nothing than to say something untrue.
//
// /review is deliberately absent: it is noindexed in app/review/layout.js, and
// listing a noindexed URL here would be a contradictory signal.
const pages = [
  { path: "/", changeFrequency: "monthly", priority: 1 },
  { path: "/services", changeFrequency: "monthly", priority: 0.9 },
  { path: "/amazon-account-management", changeFrequency: "monthly", priority: 0.95 },
  { path: "/amazon-ppc-management", changeFrequency: "monthly", priority: 0.95 },
  { path: "/shopify-development", changeFrequency: "monthly", priority: 0.9 },
  { path: "/ecommerce-website-development", changeFrequency: "monthly", priority: 0.9 },
  { path: "/ai-automation", changeFrequency: "monthly", priority: 0.9 },
  { path: "/ai-customer-support", changeFrequency: "monthly", priority: 0.9 },
  { path: "/marketing-automation", changeFrequency: "monthly", priority: 0.9 },
  { path: "/portfolio", changeFrequency: "monthly", priority: 0.8 },
  { path: "/blog", changeFrequency: "weekly", priority: 0.8 },
  { path: "/about", changeFrequency: "yearly", priority: 0.6 },
  { path: "/contact", changeFrequency: "yearly", priority: 0.9 },
  { path: "/privacy", changeFrequency: "yearly", priority: 0.3 },
  { path: "/terms", changeFrequency: "yearly", priority: 0.3 },
];

export default function sitemap() {
  return [
    // The home page keeps its trailing slash — `${base}/`, not `${base}`.
    // Semrush flags the bare origin as an orphaned page, which is why it was
    // written this way originally. Do not "tidy" it to match the canonical.
    ...pages.map((p) => ({
      url: `${base}${p.path}`,
      changeFrequency: p.changeFrequency,
      priority: p.priority,
    })),

    // Posts do have real dates, so these lastmods mean something.
    ...posts.map((p) => ({
      url: `${base}/blog/${p.slug}`,
      lastModified: new Date(p.updated || p.date),
      changeFrequency: "monthly",
      priority: 0.7,
    })),
  ];
}
