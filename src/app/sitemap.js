import posts from "@/data/posts";

export default function sitemap() {
  const base = "https://www.startofpakistan.com";
  const now = new Date();

  return [
    { url: `${base}/`,           lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: `${base}/services`,   lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/amazon-account-management`, lastModified: now, changeFrequency: "monthly", priority: 0.95 },
    { url: `${base}/amazon-ppc-management`, lastModified: now, changeFrequency: "monthly", priority: 0.95 },
    { url: `${base}/shopify-development`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/ecommerce-website-development`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/ai-automation`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/marketing-automation`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/portfolio`,  lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/blog`,       lastModified: now, changeFrequency: "weekly",  priority: 0.8 },
    ...posts.map((p) => ({
      url: `${base}/blog/${p.slug}`,
      lastModified: new Date(p.date),
      changeFrequency: "monthly",
      priority: 0.7,
    })),
    { url: `${base}/about`,      lastModified: now, changeFrequency: "yearly",  priority: 0.6 },
    { url: `${base}/contact`,    lastModified: now, changeFrequency: "yearly",  priority: 0.9 },
    { url: `${base}/review`,     lastModified: now, changeFrequency: "yearly",  priority: 0.4 },
    { url: `${base}/privacy`,    lastModified: now, changeFrequency: "yearly",  priority: 0.3 },
    { url: `${base}/terms`,      lastModified: now, changeFrequency: "yearly",  priority: 0.3 },
  ];
}