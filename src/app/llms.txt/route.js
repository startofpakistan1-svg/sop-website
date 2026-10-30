import posts from "@/data/posts";

// llms.txt, generated at build time so the blog list can never drift from
// src/data/posts.js the way the hand-written file did. Everything except the
// Blog section is prose and lives here as-is.
//
// Prerendered: no dynamic APIs are read, and `force-static` makes that explicit
// so this is served as a static file rather than a function invocation.
export const dynamic = "force-static";

const SITE = "https://www.startofpakistan.com";

const INTRO = `# Start of Pakistan (SOP)

> SOP is an eCommerce and automation studio in Jhelum, Pakistan that runs Amazon seller accounts, builds Shopify and custom-coded online stores, and sets up AI and marketing automation for brands selling in the UK and US.

Work is scoped in writing with a fixed price before it starts. Accounts, code and data stay in the client's name. The team works a few hours ahead of the UK, so daily account work is usually done before the client's morning.
`;

const SERVICES = `## Services

- [Services overview](${SITE}/services): every service SOP offers, grouped by marketplace, web development, AI automation and digital.
- [Amazon Account Management](${SITE}/amazon-account-management): full-service Amazon agency work for UK and US sellers — Seller Central and Vendor Central account management, listings and catalogue support.
- [Amazon PPC Management](${SITE}/amazon-ppc-management): Amazon ads management covering Sponsored Products, Sponsored Brands and Sponsored Display, with weekly search-term and bid work.
- [Shopify Development](${SITE}/shopify-development): Shopify store builds, migrations from WooCommerce and other platforms, custom theme work and Shopify SEO.
- [Ecommerce Website Development](${SITE}/ecommerce-website-development): bespoke ecommerce sites coded by hand in HTML, CSS and JavaScript, plus redesigns and conversion rate optimisation.
- [AI Automation](${SITE}/ai-automation): AI agents and business automation for customer replies, reporting, admin work and content, with human review built in.
- [AI Customer Support](${SITE}/ai-customer-support): agents that answer on WhatsApp, on Facebook and Instagram, and on a store's own site, built on n8n so the client owns them.
- [Marketing Automation](${SITE}/marketing-automation): CRM setup, segmentation, email sequences and lead nurturing built around the tools a team already uses.
`;

const CONTACT = `## Contact

- [Contact](${SITE}/contact): enquiry form, WhatsApp, email, phone and office address.
- Email: support@startofpakistan.com
- WhatsApp: +92 310 1375475
- Office: Rizwan Heights, Satellite Town, Jhelum 49600, Pakistan

## Optional

- [Home](${SITE}/): overview of what SOP does and who it works with.
- [Our work](${SITE}/portfolio): the projects SOP has permission to show.
- [About](${SITE}/about): who runs SOP and how the team works.
- [Leave a review](${SITE}/review): review form for existing clients.
- [Privacy Policy](${SITE}/privacy)
- [Terms of Service](${SITE}/terms)
`;

// One line per post, newest first, then the index. Descriptions are the posts'
// own meta descriptions, collapsed to a single line.
function blogSection() {
  const lines = [...posts]
    .sort((a, b) => (a.date < b.date ? 1 : -1))
    .map((p) => {
      const description = p.description.replace(/\s+/g, " ").trim();
      return `- [${p.title}](${SITE}/blog/${p.slug}): ${description}`;
    });

  return `## Blog

${lines.join("\n")}
- [All guides](${SITE}/blog): index of every article.
`;
}

export function GET() {
  const body = [INTRO, SERVICES, blogSection(), CONTACT].join("\n");

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
