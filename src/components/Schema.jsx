// Structured data (JSON-LD) — tells Google what SOP is, where it is,
// and what it offers. Shows up as richer search results over time.

const SERVICES = [
  {
    name: "Amazon account management",
    path: "/amazon-account-management",
    description:
      "Seller Central and Vendor Central account management: listings, catalogue, inventory and FBA, pricing, buyer messages and account health.",
  },
  {
    name: "Amazon PPC management",
    path: "/amazon-ppc-management",
    description:
      "Sponsored Products, Sponsored Brands and Sponsored Display, with weekly search-term, bid and negative-keyword work.",
  },
  {
    name: "Shopify development",
    path: "/shopify-development",
    description:
      "Shopify store builds, migrations from other platforms, custom theme work and Shopify SEO.",
  },
  {
    name: "Ecommerce website development",
    path: "/ecommerce-website-development",
    description:
      "Custom-coded ecommerce sites, redesigns and conversion rate optimisation.",
  },
  {
    name: "AI automation",
    path: "/ai-automation",
    description:
      "AI agents and business automation for customer replies, reporting, admin work and content, with human review built in.",
  },
  {
    name: "Marketing automation",
    path: "/marketing-automation",
    description:
      "CRM setup, segmentation, email sequences and lead nurturing built around the tools a team already uses.",
  },
];

export default function Schema() {
  const data = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://www.startofpakistan.com/#organization",
    name: "Start of Pakistan",
    alternateName: ["SOP", "startofpakistan", "Start of Pakistan (SOP)"],
    description:
      "Start of Pakistan (SOP) runs Amazon seller accounts and PPC, builds Shopify and custom-coded online stores, and sets up AI and marketing automation. Based in Jhelum, Pakistan.",
    url: "https://www.startofpakistan.com",
    logo: "https://www.startofpakistan.com/logo.png",
    image: "https://www.startofpakistan.com/og-image.png",
    email: "support@startofpakistan.com",
    telephone: "+92-544-584447",
    foundingDate: "2024",
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "First Floor, Office No. 7, Rizwan Heights, Citi Town B Block, Street C1, Satellite Town",
      addressLocality: "Jhelum",
      addressRegion: "Punjab",
      postalCode: "49600",
      addressCountry: "PK",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 32.9914231,
      longitude: 73.6653876,
    },
    hasMap:
      "https://www.google.com/maps/dir/?api=1&destination=32.9914231,73.6653876",
    areaServed: [
      { "@type": "Country", name: "Pakistan" },
      { "@type": "Country", name: "United Kingdom" },
      { "@type": "Country", name: "United States" },
      { "@type": "Country", name: "India" },
    ],
    priceRange: "$$",
    // Company profiles only. A person's profile belongs on the Person node,
    // not here — sameAs means "other profiles of this same entity".
    sameAs: [
      "https://www.linkedin.com/company/start-of-pakistan",
      "https://www.facebook.com/profile.php?id=61594490571515",
      "https://www.instagram.com/startofpakistan1",
      "https://www.tiktok.com/@startofpakistan1",
    ],
    founder: {
      "@type": "Person",
      "@id": "https://www.startofpakistan.com/#qamar-shahzad",
      name: "Qamar Shahzad",
      jobTitle: "Founder",
      url: "https://www.startofpakistan.com/about",
      sameAs: "https://www.linkedin.com/in/qamar-shahzad-37b566132/",
    },
    employee: [
      {
        "@type": "Person",
        name: "Shahzaib Ali",
        jobTitle: "Chief Executive Officer & Co-Founder",
        sameAs: "https://www.linkedin.com/in/alidar-ecommerce",
      },
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+92-310-1375475",
      contactType: "customer service",
      email: "support@startofpakistan.com",
      availableLanguage: ["English", "Urdu"],
    },
    // One entry per service that has its own page, so the catalogue and the
    // site navigation describe the same six things.
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Services",
      itemListElement: SERVICES.map((s) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: s.name,
          description: s.description,
          url: `https://www.startofpakistan.com${s.path}`,
          provider: { "@id": "https://www.startofpakistan.com/#organization" },
        },
      })),
    },
  };

  const site = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://www.startofpakistan.com/#website",
    url: "https://www.startofpakistan.com",
    name: "Start of Pakistan",
    publisher: { "@id": "https://www.startofpakistan.com/#organization" },
    inLanguage: "en",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(site) }}
      />
    </>
  );
}