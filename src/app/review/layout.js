// Metadata lives here because page.js is a client component.
export const metadata = {
  title: "Leave a Review | SOP",
  description:
    "Worked with SOP? Share your experience and help other sellers choose the right partner.",
  alternates: { canonical: "/review" },
  // A form for existing clients with no informational content of its own.
  // Kept out of the index, and out of sitemap.js to match — a noindexed URL
  // in a sitemap is a contradictory signal. Still linked from the footer.
  robots: { index: false, follow: true },
};

export default function ReviewLayout({ children }) {
  return children;
}
