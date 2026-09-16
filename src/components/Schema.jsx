// Structured data (JSON-LD) — tells Google what SOP is, where it is,
// and what it offers. Shows up as richer search results over time.

export default function Schema() {
  const data = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://www.startofpakistan.com/#organization",
    name: "Start of Pakistan",
    alternateName: "SOP",
    description:
      "eCommerce and digital solutions studio building Shopify, WordPress and custom stores, managing Amazon seller accounts, and designing AI agent systems for clients worldwide.",
    url: "https://www.startofpakistan.com",
    logo: "https://www.startofpakistan.com/logo.png",
    image: "https://www.startofpakistan.com/og-image.png",
    email: "support@startofpakistan.com",
    telephone: "+92-544-584447",
    foundingDate: "2024",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Jhelum",
      addressRegion: "Punjab",
      addressCountry: "PK",
    },
    areaServed: [
      { "@type": "Country", name: "Pakistan" },
      { "@type": "Country", name: "United Kingdom" },
      { "@type": "Country", name: "United States" },
      { "@type": "Country", name: "India" },
    ],
    priceRange: "$$",
    sameAs: ["https://www.linkedin.com/in/qamar-shahzad-37b566132/"],
    founder: {
      "@type": "Person",
      name: "Qamar Shahzad",
      jobTitle: "Founder",
    },
    employee: [
      {
        "@type": "Person",
        name: "Shahzaib Ali",
        jobTitle: "Chief Executive Officer",
      },
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+92-310-1375475",
      contactType: "customer service",
      email: "support@startofpakistan.com",
      availableLanguage: ["English", "Urdu"],
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Marketplace & ecommerce",
            description:
              "Amazon, eBay, Walmart, Etsy and Shopify store setup and account management.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Web development",
            description:
              "Custom websites, WordPress and web applications built from scratch.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "AI bots & agents",
            description:
              "Chatbots and AI agent systems for customer support, lead handling and content automation.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Digital solutions",
            description:
              "Branding, SEO, Google Business Profile setup and ongoing maintenance.",
          },
        },
      ],
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