// Blog posts. To add one, append an object to the array below.
//
//   slug        — URL segment: /blog/<slug>
//   title       — page <title> and H1 (keep under 60 characters)
//   description — meta description (keep under 155 characters)
//   date        — ISO date, YYYY-MM-DD
//   excerpt     — one or two sentences shown on the blog index card
//   content     — the article body, in a small markdown-style format:
//                   "## Heading"          → <h2>
//                   "- item"              → bulleted list
//                   "1. item"             → numbered list
//                   blank line            → new paragraph
//                   "**bold**"            → <strong>
//                   "[text](/href)"       → link
//
// Posts are listed newest first on /blog.

const posts = [
  {
    slug: "what-is-a-good-acos",
    title: "What Is a Good ACoS on Amazon? (And How to Lower It)",
    description:
      "ACoS explained in plain English: how to calculate it, why a good ACoS depends on your margins, and practical ways to bring it down.",
    date: "2026-09-21",
    excerpt:
      "ACoS is the number most sellers judge their ads by, but there is no single good figure. Here is how to work out yours and what actually lowers it.",
    content: `
If you run Sponsored Products campaigns, ACoS is probably the first number you look at. It is also the number most sellers misunderstand. A low ACoS is not automatically good, a high one is not automatically bad, and the figure that counts as "good" is different for every product.

This guide explains what ACoS means, how to work out the right target for your own products, and the practical steps that bring it down.

## What ACoS means

ACoS stands for Advertising Cost of Sales. It tells you how much you spent on ads for every pound or dollar of sales those ads produced, shown as a percentage.

An ACoS of 25% means that for every £100 (or $100) of sales that came from your ads, you spent £25 on the ads themselves. The lower the percentage, the less you are paying to make each sale.

ACoS only counts sales that Amazon attributes to an ad click. Organic sales are not included, which matters, and we will come back to it.

## How to calculate ACoS

The formula is simple:

**ACoS = ad spend ÷ ad sales × 100**

If a campaign spent £400 in a month and produced £1,600 in attributed sales, the ACoS is 400 ÷ 1,600 × 100 = 25%.

Amazon works this out for you, but the maths shows you the two levers you have: spend less for the same sales, or get more sales from the same spend. Most PPC management is about doing both at once.

## Why a "good" ACoS depends on your margins

Start with your selling price. Take away the cost of goods, Amazon's referral fee, FBA fees, shipping into Amazon, and any other cost of selling it. What is left is your pre-advertising margin. If that margin is 30%, an ACoS of 30% means you are breaking even on advertised sales. Above it, each advertised sale loses money. Below it, you are making a profit.

That break-even figure is the most useful ACoS number you can know, because everything else is measured against it.

A product with a 40% margin can run comfortably at a 25% ACoS. A product with a 15% margin would lose money at that same 25%. So when somebody tells you their ACoS is 20%, the honest reply is: "Compared with what margin?"

## When a higher ACoS is the right choice

You do not always want the lowest possible ACoS. Running above your usual target can make sense when you are launching a new product and want early sales to help it rank, when you are defending your own brand name from competitors, or when you are clearing ageing stock that is costing you storage fees.

The key is that these are decisions you make on purpose, with a time limit.

## Look at TACoS as well

Because ACoS only counts ad-attributed sales, it can hide the bigger picture. Ads often lift organic sales too. TACoS (Total Advertising Cost of Sales) measures ad spend against total sales, organic and paid together.

If your ACoS is stable but your TACoS is falling, organic sales are growing and your ads are doing their job. If both are rising, you are becoming more dependent on paid traffic.

## Practical ways to lower ACoS

Once you know your break-even figure, here is where the reductions usually come from.

**Add negative keywords every week.** Look through the search term report for searches that got clicks but no sales, and add them as negatives so you stop paying for them. This is the most reliable way to cut wasted spend.

**Move winners into their own campaigns.** When a search term converts well in an automatic or broad campaign, add it as an exact-match keyword in a manual campaign so you can control its bid directly.

**Fix the listing before raising bids.** If your conversion rate is low, more clicks just mean more spend. Better images, clearer bullets and competitive pricing improve conversion, and better conversion lowers ACoS on its own.

**Check your placements.** If top-of-search converts far better than product pages, adjust the placement bid modifiers rather than raising every bid.

**Avoid terms that are too broad.** A term like "shoes" gets plenty of clicks and few sales for most products. Specific, longer terms tend to convert better even with less traffic.

## A simple bid strategy to start with

You do not need complicated software to manage bids sensibly. A basic weekly routine:

1. Set a target ACoS for each product based on its break-even figure.
2. Review keywords with enough data to judge, roughly 10 or more clicks.
3. If a keyword is well below target and converting, raise the bid a little.
4. If it is well above target, lower the bid a little.
5. If it has spent a meaningful amount with no sales, pause it or add it as a negative.
6. Note what you changed and check again the following week.

Small, regular changes beat big, occasional ones. Amazon can take several days to attribute sales to clicks, so judging a change after 24 hours usually means changing it back too soon.

## The short version

- ACoS is ad spend divided by ad sales.
- A good ACoS is one below your break-even margin, which is different for every product.
- A higher ACoS can be the right choice, as long as it is deliberate.
- Watch TACoS to see whether your ads are lifting organic sales.
- Most reductions come from negatives, better campaign structure, a stronger listing and steady weekly bid adjustments.

If you would rather have someone do that weekly work for you, our [Amazon PPC management service](/amazon-ppc-management) covers campaign structure, keyword research, bids, negatives and reporting for UK and US sellers on a fixed monthly fee. It starts with a free audit, so you can see where the money is going before you decide anything.
`,
  },
  {
    slug: "how-to-optimize-amazon-listing",
    title: "How to Optimize an Amazon Listing: Step-by-Step Guide",
    description:
      "A step-by-step guide to Amazon listing optimization: keywords, title, bullets, description, backend terms, images, A+ content and reviews.",
    date: "2026-09-15",
    excerpt:
      "A listing has two jobs: get found, and convert the people who find it. This guide walks through every part of the page, in the order we work on them.",
    content: `
An Amazon listing has two jobs. It has to be found, which means Amazon's search engine needs to understand what the product is. And it has to convert, which means a shopper who lands on it decides to buy rather than going back to the results.

This guide goes through each part of the page in the order we usually work on them.

## Step 1: Keyword research

Everything else depends on this, so do it first. You are looking for the words real shoppers type when they want a product like yours.

- Type your main term into the Amazon search bar and note the autocomplete suggestions. These are real searches.
- Look at the titles and bullets of top-ranking competitors and note the phrases they repeat.
- If you run Sponsored Products ads, download the search term report. Terms that have produced sales are your most valuable keywords.
- Include the different ways people describe the same thing. UK and US shoppers often use different words and spellings.

Sort the list into three groups: the two or three terms that define the product, the supporting terms for features and uses, and the long-tail phrases that are specific but lower volume.

## Step 2: The title

The title carries the most weight for search and it is the first thing a shopper reads. It needs to be readable first and keyword-rich second.

A reliable structure is: brand, main product term, key feature or material, size or quantity, and main use. Put the most important keyword near the start, because Amazon truncates long titles on mobile.

Avoid stuffing. A title that reads as a list of keywords looks untrustworthy and can breach Amazon's style rules for your category. Check the category style guide in Seller Central, as length limits vary.

## Step 3: Bullet points

Bullet points are where shoppers decide. Most people skim them, so lead each one with the benefit and then explain the feature that delivers it.

- Cover the questions a shopper would ask in a shop: what it does, what it is made of, what size it is, who it is for, and what is in the box.
- Use supporting keywords naturally, never at the expense of clarity.
- Keep each bullet to one idea. Very long bullets get skipped.
- Be specific. "Fits standard UK sockets" is more useful than "universal fit".

Bullets are indexed for search, so they are a good place for terms that did not fit the title.

## Step 4: The product description

If you have A+ Content, the plain-text description is often replaced on desktop, but it still appears in some places and on some devices, so do not leave it empty. Use it to tell the fuller story: how the product is used, what makes it different, and any reassurance about quality or guarantees. Write in short paragraphs.

## Step 5: Backend search terms

The listing editor has a hidden search terms field. Shoppers never see it, but Amazon indexes it. Use it for relevant keywords that did not fit the visible copy: alternative spellings, regional words and related terms.

- Do not repeat words already in the title or bullets.
- Do not include competitor brand names. This is against Amazon's policy.
- Separate terms with spaces, not commas.
- Stay within the byte limit shown in the editor, or the field may be ignored.

## Step 6: Images

Images do more for conversion than anything else on the page. Shoppers judge the main image in the search results before they have read a word.

The main image must show the product on a pure white background, filling most of the frame, with nothing that is not in the box. Use the remaining slots to answer questions visually:

- A lifestyle image showing the product in use, at a realistic scale.
- A close-up of the material or finish.
- An image with dimensions marked clearly.
- A simple graphic listing the main benefits.

Upload at high resolution so zoom works. If your category allows video, a short clip is worth adding.

## Step 7: A+ Content

If your brand is enrolled in Brand Registry, you can replace the plain description with A+ Content: image and text modules further down the page.

Good A+ Content answers the questions the bullets could not. Use it for comparison charts across your range, larger lifestyle images, and short sections on materials or care. Keep the text short, let the images do the work, and fill in the alt text because it is indexed. We have a separate guide to [A+ Content examples and layouts](/blog/amazon-a-plus-content-examples).

## Step 8: Reviews

Reviews affect both ranking and conversion, and they are the part of the listing you control least directly. What you can do:

- Make sure the listing is accurate. Most negative reviews come from a product that did not match expectations.
- Use Amazon's "Request a Review" button, or the Vine programme if you are eligible.
- Answer customer questions on the listing quickly and clearly.
- Read negative reviews for patterns and fix the cause, whether that is packaging, instructions or a size chart.

Never pay for reviews or offer incentives. Amazon's enforcement is strict and the account risk is not worth it.

## Step 9: Measure and revisit

Listing optimization is not a one-off task. After you make changes, watch sessions and conversion rate in your business reports for a few weeks. If sessions rose but conversion fell, the keywords are bringing the wrong traffic. If conversion rose, apply the same change to your other listings.

## Where to start if you are short on time

If you can only do three things: fix the main image, rewrite the title around your most important keyword, and rewrite the bullets to lead with benefits.

If you would rather hand the whole thing over, listing optimization and Amazon SEO are part of our [marketplace services](/services). We will look at what you have now and tell you what we would change before you commit to anything.
`,
  },
  {
    slug: "amazon-a-plus-content-examples",
    title: "Amazon A+ Content Examples That Help Listings Sell",
    description:
      "What Amazon A+ Content is, who can use it, the common module types, example layouts that work and the mistakes to avoid.",
    date: "2026-09-10",
    excerpt:
      "A+ Content replaces the plain description with images and structured text. Here is who can use it, which modules to pick and how to lay them out.",
    content: `
Scroll down a listing from a well-run brand and you will usually find large images, comparison charts and short blocks of text where the plain description would normally be. That is A+ Content. It is free to brand owners, and many sellers still leave it empty.

This guide covers what A+ Content is, who can use it, the module types, some example layouts, and the mistakes that make it work against you.

## What A+ Content is

A+ Content (formerly Enhanced Brand Content) is a set of image and text modules that appear in the product description section of a listing. You build it from templates in Seller Central and attach it to one or more ASINs.

It does not replace the title, bullets or image gallery, which still do the heavy lifting for search and first impressions. A+ Content is for the shopper who has scrolled past the bullets and wants to be convinced.

## Who can use it

You need to be enrolled in Amazon Brand Registry, which requires a registered trademark (or a pending application in some regions). Once enrolled, the A+ Content Manager appears in Seller Central under Advertising.

Basic A+ Content is free. Premium A+ Content adds larger modules and video, and has its own eligibility rules that Amazon changes from time to time, so check the current terms in Seller Central.

## The common module types

Amazon offers a set of module templates that you combine on one page. The ones you will use most:

- **Image and text.** One image with a heading and a short paragraph. The simplest module and often the most useful.
- **Single image with sidebar.** A large image with a text column beside it, for one feature explained in depth.
- **Three or four images with text.** A row of images, each with its own heading, for showing features side by side.
- **Comparison chart.** Your products across the top, features down the side, with ticks or short values. Each column can link to that product's listing.
- **Image header.** A full-width banner with a headline, usually placed at the top.
- **Technical specifications.** A structured two-column list of specs.

Every image module has an alt-text field. Fill it in, because that text is indexed for search and read by screen readers.

## Example layout 1: single product, feature-led

This layout suits most products. From top to bottom:

1. **Image header.** A wide lifestyle photo in a setting your customer recognises, with a one-line headline stating the main benefit.
2. **Three images with text.** Three close-ups, each showing one feature: for example the material, the fastening, and the size. One heading and a sentence or two under each.
3. **Single image with sidebar.** The product in use, with a short paragraph on the problem it solves.
4. **Technical specifications.** Dimensions, weight, materials, what is in the box, care instructions.

It mirrors how people decide: see it in context, check the details, see it in use, confirm the specifications.

## Example layout 2: a range with a comparison chart

If you sell several sizes, versions or related products, build the page around the comparison chart.

1. **Image header.** The full range shown together, with a headline that names it.
2. **Comparison chart.** Each product as a column with its own image. Rows for the features that differ: size, capacity, material, colour, what is included. Use ticks and short values, and link each column to its listing.
3. **Image and text.** One module on what the whole range has in common, such as the material or the guarantee.

The chart helps the shopper pick the right product, which means fewer returns, and keeps them inside your range.

## Example layout 3: a product that needs explaining

Some products need a "how it works" section before the shopper is confident enough to buy.

1. **Image header.** The product and a headline that says what it does in plain words.
2. **Four images with text.** A numbered sequence: unbox, set up, use, result.
3. **Single image with sidebar.** Address the most common concern directly. If people worry about fit, show the size chart. If they worry about difficulty, show how simple the setup is.
4. **Technical specifications**, with a short note on the guarantee or support.

## Mistakes to avoid

**Repeating the bullet points.** The shopper has just read them. A+ Content should add something: context, comparison, detail or reassurance.

**Walls of text.** Long paragraphs are rarely read. Keep text to a heading and two or three sentences, and let the image carry the point.

**Text baked into images.** Text inside an image cannot be read by Amazon's search or screen readers, and it becomes tiny on mobile. Put the important words in the text fields.

**Ignoring mobile.** Most shoppers are on a phone, where modules stack vertically. Check the mobile preview before publishing.

**Claims you cannot support.** Amazon's rules prohibit unsupported health claims, mentions of competitors, pricing or promotional language, and anything that contradicts Amazon's own policies. Content that breaks the rules is rejected.

**Low-resolution images.** Each module has a minimum image size. Stretched images look blurry and undermine the whole page.

**Building it once and forgetting it.** If the product, packaging or range changes, update the A+ Content too.

## A practical way to start

If you have never built A+ Content before, do not try to fill every slot. Start with layout 1: a header image, a three-image feature row and a specifications module. Publish it, check it on your phone, and watch conversion for a few weeks. Then add a comparison chart if you have a range, or a how-it-works sequence if your product needs one.

A+ Content is one part of a complete listing. If you want the whole page looked at, from keywords and copy to images and A+ modules, listing optimization is part of our [Amazon and marketplace services](/services). Tell us the ASIN and we will tell you what we would change.
`,
  },
];

export default posts;

export function getPost(slug) {
  return posts.find((p) => p.slug === slug);
}
