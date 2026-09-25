// Blog posts. To add one, append an object to the array below.
//
//   slug        — URL segment: /blog/<slug>
//   title       — page <title> and H1 (keep under 60 characters)
//   description — meta description (keep under 155 characters)
//   date        — ISO date, YYYY-MM-DD
//   topic       — "amazon" or "web"; used to pick related posts (Amazon guides
//                 link to Amazon guides, Shopify / custom-dev / AI guides to each other)
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
    topic: "amazon",
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
    topic: "amazon",
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
    topic: "amazon",
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
  {
    slug: "amazon-account-management-cost",
    topic: "amazon",
    title: "How Much Does Amazon Account Management Cost in the UK?",
    description:
      "Amazon account management cost explained: the common pricing models, what is usually included, what moves the price, and what to ask before signing.",
    date: "2026-09-20",
    excerpt:
      "There is no single price for Amazon account management. Here are the pricing models you will be quoted, what they usually include, and what to ask before you sign.",
    content: `
If you have started asking agencies about Amazon account management cost, you have probably noticed that nobody gives a straight number on their website. That is partly sales tactics, but mostly it is because the price genuinely depends on what you sell, how many products you have, and how much of the work you want to hand over.

This guide does not quote prices, because any figure would be wrong for most readers. Instead it explains how Amazon account management UK providers usually charge, what is normally included, what pushes the price up or down, and the questions worth asking before you sign anything.

## The three common pricing models

Most Amazon account management services charge in one of three ways.

**A fixed monthly retainer.** You pay the same amount each month for an agreed scope of work. This is the most common model for full account management. It is predictable, easy to budget for, and it means the agency's income does not change when your sales do. The risk is that scope creeps: if you add products or marketplaces, expect the retainer to be reviewed.

**A percentage of sales.** The agency takes a percentage of your monthly Amazon revenue, sometimes with a minimum fee. It looks attractive when you are small because the cost is low at the start. It gets expensive as you grow, and it rewards the agency for revenue rather than profit. A sale made at a loss still earns them their percentage.

**A hybrid.** A lower fixed fee plus a smaller percentage of sales or ad spend. This splits the risk between you and the agency and is common for accounts with a lot of advertising. The detail matters: check exactly what the percentage is calculated on.

There is no right answer, but a fixed fee is usually the simplest to compare between providers, because you can put two written scopes side by side.

## What is usually included

"Account management" means different things to different agencies, which is the main reason quotes are hard to compare. A full-service package normally covers:

- Listing creation and optimisation, including keywords, copy and images
- Sponsored ads management
- Inventory planning and FBA shipment creation
- Account health monitoring and dealing with policy notices
- Customer messages, returns and feedback
- Regular reporting on sales, spend and profit

Some agencies split these into tiers, so advertising or customer service is a separate charge. Others include everything but cap the number of products or hours. Always ask for the scope in writing, with the exclusions listed as clearly as the inclusions.

## What affects the Amazon account management cost

Once you know the model, these are the things that move the number.

**Number of products and variations.** More listings mean more copy, more images, more ads and more stock to plan. This is usually the biggest factor.

**Number of marketplaces.** Selling on Amazon.co.uk alone is one job. Adding the US or the EU adds translation, VAT or tax considerations, separate ad accounts and separate inventory.

**The state of the account.** An account with suspended listings, poor health metrics or a messy catalogue needs a clean-up before ongoing management can start. Expect that to be quoted separately.

**Advertising spend.** Larger ad budgets need more frequent optimisation, so some agencies scale the fee with spend, either directly or through the hybrid model.

**Where the agency is based.** A team in a lower-cost country can offer the same scope for less than a UK or US city agency, because their overheads are lower. That is a legitimate saving, as long as the time-zone overlap and communication are good.

**Contract length.** Some providers discount for a longer commitment. Weigh that against the cost of being stuck if it does not work out.

## Questions to ask before signing

The cheapest quote is rarely the cheapest outcome. Before you commit, ask:

1. **What exactly is included, and what costs extra?** Get it in writing.
2. **Who will actually do the work?** The person on the sales call is not always the person in your Seller Central.
3. **How is advertising charged?** Fixed, percentage of spend, or included in the retainer?
4. **How do you access my account?** The right answer is as a user with limited permissions, never with your password.
5. **What does reporting look like, and how often?** Ask to see a sample report.
6. **What is the notice period?** Month to month is reasonable for most sellers. A twelve-month lock-in needs a good reason.
7. **What happens to my listings, images and ad campaigns if I leave?** They should stay yours.
8. **Do you have experience in my category?** Grocery, supplements and toys all have compliance rules that a generalist may not know.

A good agency will answer all of these without hesitation. If any answer is vague, treat that as information.

## How to think about value rather than price

The useful question is not "what does it cost?" but "what does it cost compared with the alternatives?" The alternatives are your own time, a freelancer, or an in-house hire. Each has a real cost, even if it does not appear on an invoice.

Work out roughly how many hours a week the account takes you now, and what those hours are worth to the rest of your business. Then compare the quotes against that, not against each other. An agency that costs more but frees you to develop new products or open a second channel may be the cheaper option overall.

## Getting a quote from us

We offer Amazon account management for UK and US sellers on a fixed monthly fee, scoped in writing before we start, with no long contract. If you want to see how that compares with what you have been quoted, tell us what you sell and where on our [Amazon account management page](/amazon-account-management) and we will come back with a plan and a price, usually the same day.
`,
  },
  {
    slug: "amazon-ppc-agency-vs-diy",
    topic: "amazon",
    title: "Amazon PPC Agency vs Managing Ads Yourself",
    description:
      "Should you hire an Amazon PPC agency or run ads yourself? What DIY involves, when an agency makes sense, what to expect and how to judge results.",
    date: "2026-09-19",
    excerpt:
      "Running your own Amazon ads is possible, and plenty of sellers do it well. The question is whether it is the best use of your time. Here is how to decide.",
    content: `
Every Amazon seller reaches the point where advertising stops being something you set up once and becomes a job. At that point you have two choices: keep doing it yourself, or hand it to an Amazon PPC agency. Neither is automatically right. This guide sets out what each involves so you can decide based on your situation rather than a sales pitch.

## What managing ads yourself involves

Amazon's campaign manager is free and you do not need special software to use it. What you need is time, on a regular schedule, and a working understanding of how the system behaves. A realistic weekly routine looks like this:

- Download the search term report and add negative keywords for searches that spend without selling.
- Review keyword bids against your target ACoS and adjust them in small steps.
- Move converting search terms from automatic campaigns into manual exact-match campaigns.
- Check budgets have not run out early in the day and adjust pacing.
- Look at placement reports and adjust top-of-search modifiers where they pay.
- Note what you changed so you can judge it next week.

Then, less often: build campaigns for new products, review campaign structure as your catalogue grows, test Sponsored Brands and Sponsored Display, and reconcile ad spend against actual profit.

None of this is difficult on its own. The difficulty is doing it every week, consistently, while also running the rest of the business.

## The time and skill it takes

For a small catalogue, a few products with modest spend, the weekly routine can be done in an hour or two once you know what you are looking at. Learning what you are looking at takes longer. Most sellers who manage their own ads well have spent months reading, testing and making mistakes with their own money.

As the catalogue grows, the time grows faster than you expect. Twenty products in two marketplaces is not twice the work of ten in one; it is closer to four times, because every campaign type multiplies across products and countries.

The honest test is this: look at your search term report right now. If you cannot remember the last time you added negative keywords, the routine is already slipping, and the ads are costing more than they should.

## When an Amazon PPC agency makes sense

An agency is worth considering when one or more of these is true:

**Your ad spend is meaningful.** If advertising is a significant monthly cost, a small improvement in efficiency covers a management fee. If you spend very little, it may not.

**You have run out of time.** The ads are being neglected, not because you cannot do it but because something else always comes first.

**You are launching or expanding.** New products and new marketplaces need campaign structures built properly from the start. Fixing a bad structure later is slower than building it right.

**You have plateaued.** You have done the basics, sales are flat, and you are not sure what to try next. A second pair of eyes with experience across many accounts often sees the obvious thing.

**You want the number to be someone's job.** Accountability is worth something. If ACoS is your responsibility, it competes with everything else. If it is the agency's, they answer for it every month.

## What to expect from an agency

A good Amazon PPC agency UK or US sellers can rely on should do the weekly routine above, and do it better than you would, because they do it across many accounts and see patterns you cannot. Beyond that, expect:

- **An audit before a proposal.** They should look at your campaigns before quoting.
- **A written plan.** Campaign structure, target ACoS, and how success will be measured.
- **Access through permissions, not passwords.** You add them as a user in Seller Central.
- **Regular reporting in plain language.** Spend, sales, ACoS, what changed and why.
- **Someone you can talk to.** Ideally the person actually managing the campaigns.
- **A fair notice period.** Month to month is normal for Amazon PPC management.

What you should not expect is guaranteed results. Anyone who promises a specific ACoS before seeing your account is guessing.

## How to judge results

Whether you run ads yourself or hire an agency, judge them the same way.

**Know your break-even ACoS first.** It depends on your margin, and it is the only sensible target. We have a full guide to [what a good ACoS looks like](/blog/what-is-a-good-acos) if you have not worked yours out.

**Watch TACoS, not just ACoS.** Total ad spend as a share of total sales tells you whether ads are lifting organic sales or just replacing them.

**Give it time.** Amazon attribution takes days, and restructured campaigns need a few weeks of data before bids settle. Judging an agency after two weeks is unfair; judging them after three months is reasonable.

**Look at profit, not revenue.** Higher sales at a worse margin is not a win. Ask for reporting that shows both.

**Check the work is happening.** Change history in the campaign manager shows every edit. If nothing has changed in a fortnight, nobody is managing the account.

## Making the decision

If your spend is small and you have the time, manage the ads yourself and learn the system. If spend is meaningful and the weekly routine keeps slipping, an agency will usually pay for itself in reduced waste alone.

Our [Amazon PPC management service](/amazon-ppc-management) covers the full weekly routine, campaign builds, and plain-English reporting for UK and US sellers on a fixed monthly fee. It starts with a free audit of your current campaigns, so you can see what we would change before deciding either way.
`,
  },
  {
    slug: "how-to-choose-an-amazon-agency",
    topic: "amazon",
    title: "How to Choose an Amazon Agency: 10 Questions to Ask",
    description:
      "How to choose an Amazon agency: ten questions on reporting, contracts, account access, experience and communication, plus the red flags to watch for.",
    date: "2026-09-18",
    excerpt:
      "Most Amazon agencies sound the same on a sales call. These ten questions separate the ones that will do the work from the ones that will send you a report.",
    content: `
Most agencies sound alike on a sales call. They all optimise listings, manage PPC and grow accounts. The differences show up later, in who does the work, how they report, and what happens when something goes wrong. Knowing how to choose an Amazon agency comes down to asking the right questions before you sign, and paying attention to how the answers are given.

Here are the ten we think matter most, with what a good answer sounds like, followed by the red flags that should end the conversation.

## 1. Who will actually do the work on my account?

The person selling to you is often not the person who will log into your Seller Central. Ask who that is, what their experience is, and whether you can speak to them before signing. Ask how many other accounts they manage. There is no perfect number, but if they cannot answer, they do not know either.

## 2. How will you access my account?

The only acceptable answer is as a secondary user through Seller Central's user permissions, with only the permissions the work needs. An agency that asks for your login details is either inexperienced or careless, and either way you are handing over control of your business. You should be able to remove their access yourself, at any time, in one click.

## 3. What does the reporting look like and how often will I get it?

Ask to see a sample report. It should show sales, ad spend, ACoS, and ideally profit, in language you understand, with a note on what changed and why. Monthly is the minimum. Weekly is better for advertising. A report that is only screenshots of Amazon's own dashboards adds nothing you could not see yourself.

## 4. What is the contract length and notice period?

Month to month with a short notice period is normal for a confident agency. Longer commitments are sometimes justified for a large launch or a full catalogue rebuild, but ask why. An agency that insists on twelve months before it has done anything is protecting its income, not your results.

## 5. Do you have experience in my category?

Categories differ more than they look. Supplements, food, cosmetics, toys and electrical goods all have compliance requirements, restricted keywords and approval processes that a generalist can get wrong. Ask what they have sold in your category, and what the specific challenges were. A good Amazon seller consultant will talk about problems as readily as wins.

## 6. What exactly is included, and what costs extra?

Get the scope in writing. Listings, advertising, inventory, customer messages, account health, A+ Content, and reporting should each be either in or out. Ask about limits: number of products, number of marketplaces, hours per month. The exclusions matter more than the inclusions, because they are where surprise invoices come from.

## 7. How do you charge, and what is the fee based on?

Fixed monthly retainer, percentage of sales, percentage of ad spend, or a mix. Each is legitimate, but you need to know which one and what it is calculated on. Be careful with percentage of ad spend for PPC, because it pays the agency more when they spend more of your money.

## 8. How will we communicate, and how quickly do you respond?

Ask which channel, who replies, and what the expected turnaround is for a normal question and for an emergency such as a suspended listing. If the agency is in a different time zone, ask when your working hours overlap. Some of the best Amazon consultant UK sellers use are overseas; the ones that work well are clear about when you can reach them.

## 9. What happens to my listings, images and campaigns if I leave?

Everything created for your account should belong to you: copy, images, A+ Content, campaign structures. Ask for this in the contract. Some agencies build campaigns inside their own tools or accounts, which makes leaving painful. That is not an accident.

## 10. What would you change first, and why?

Any agency worth hiring will have looked at your account before the proposal. Ask what they saw. A specific answer, with reasons, tells you they have done the work and can think. A vague answer about "optimising everything" tells you they have not looked.

## Red flags

Some things should end the conversation regardless of how the other answers went.

- **Guaranteed results.** Nobody can promise a rank, a sales figure or an ACoS before seeing your data. Anyone who does is guessing or lying.
- **Asking for your password.** Covered above, but it bears repeating.
- **Reviews or ranking "services".** Paid reviews, incentivised reviews and search manipulation all break Amazon's rules and can get your account suspended. The agency will not be the one that loses the business.
- **No audit before the quote.** A price given without looking at your account is a price for a generic package, not for your business.
- **Pressure to sign quickly.** Discounts that expire today exist to stop you asking the questions above.
- **Vague answers about who does the work.** If they cannot name the person, the work is being passed to whoever is available.

## Putting it together

You do not need an agency to score perfectly on all ten. You need honest answers, a written scope, sensible access, reporting you can read, and a contract you can leave. If those five are in place, the rest is about whether you trust the people.

If you want to run these questions past us, our [Amazon account management](/amazon-account-management) service is for UK and US sellers, on a fixed monthly fee with a written scope and month-to-month terms. Ask us any of the ten. We would rather answer them now than have you find out later.
`,
  },
  {
    slug: "shopify-store-cost",
    topic: "web",
    title: "How Much Does a Shopify Store Cost to Build?",
    description:
      "Shopify store cost explained: plan fees vs build costs, theme vs custom design, apps, product setup, checkout, and what actually drives the price.",
    date: "2026-09-17",
    excerpt:
      "The Shopify plan fee is the easy part. The real cost of a store is in the build, the apps and the ongoing work. Here is what actually drives it.",
    content: `
The first thing most people learn about Shopify store cost is the monthly plan fee, because it is printed on Shopify's pricing page. The second thing they learn, usually a few weeks in, is that the plan fee is the smallest part of what a store costs.

This guide does not quote figures, because a store for five products and a store for five hundred are different jobs. Instead it breaks the cost into its parts, explains what pushes each one up or down, and helps you decide whether to build it yourself or hire a Shopify developer.

## Plan fees vs build costs

There are two separate things to pay for, and it helps to keep them apart.

**Plan fees** go to Shopify every month for as long as the store exists. They cover hosting, security, the checkout, and the admin you run the store from. Higher tiers add lower transaction rates, more staff accounts and more reporting. For most new stores the entry tier is enough to launch.

**Build costs** are what it takes to turn an empty Shopify account into a store that is ready to sell: design, product setup, payments, shipping, apps and testing. This is a one-off cost, paid either in your own time or to whoever builds it.

People compare plan fees across platforms and forget the build, which is where the real money and time go.

## Theme vs custom design

Every Shopify store runs on a theme. The choice is between using one as it comes, customising it, or having something designed from scratch.

**A free or paid theme, used as designed.** The cheapest route. You pick a theme, add your logo and colours, and fill in the sections it provides. It works well for stores with a small, simple range and no strong brand identity yet.

**A customised theme.** The same starting point, with sections rebuilt, layouts changed and custom code added where the theme does not do what you need. This is where most professional builds land. Cost depends on how far from the original theme you want to go.

**A custom design.** A layout designed around your products and brand, then built as a theme. It is the most expensive option and rarely necessary for a first store, but it is the right choice for brands where the look is the product.

The general rule: the further from the theme's defaults you want to be, the more it costs.

## Apps

Shopify's app store fills the gaps in the platform: reviews, subscriptions, bundles, email marketing, advanced shipping rules, size charts, and much more. Most apps charge monthly, and the total adds up quickly.

Before adding an app, ask whether the theme or Shopify itself already does the job. Every app you avoid is a monthly cost saved and one less thing that can break the store.

## Product setup

This is the part that is most often underestimated. Every product needs a title, description, images, price, variants, inventory, weight, and often SEO fields and category tags. For a store with a handful of products it is an afternoon. For a catalogue of hundreds, with sizes and colours, it is the largest single task in the build.

If your products are already in a spreadsheet or another platform, a bulk import saves a lot of time, but the data still needs cleaning. If they are not, the cost of writing and photographing every product is a real part of the Shopify store cost that no platform fee will show you.

## Payment and checkout setup

Shopify's own payment processing is the simplest route where it is available. In the UK and US it usually is. If you need other gateways, such as PayPal alongside card payments or local methods for a specific market, each one needs setting up and testing.

Then there is shipping: rates by weight, by zone, free-shipping thresholds, local pickup. And tax: VAT for UK stores, sales tax by state for US stores, with the right settings for where you are registered. None of this is difficult, but all of it has to be right before the first order.

## Ongoing costs

A store is never quite finished. After launch, expect:

- The plan fee and any app subscriptions, every month
- Payment processing fees on each sale
- Theme updates when Shopify changes the platform
- New products, seasonal changes and promotions
- Occasional fixes when an app update breaks something

Budget for this as a running cost rather than treating launch as the finish line.

## DIY vs hiring a Shopify developer

You can build a Shopify store yourself. The platform is designed for it, and for a small catalogue with a standard theme it is a reasonable weekend project if you are comfortable with software.

Hiring makes sense when the catalogue is large, when the theme needs real changes, when you have specific requirements for shipping, tax or integrations, or when your own time is better spent on the products and the marketing. A good Shopify developer will also make decisions you do not know you need to make, about structure, speed and what to leave out.

We handled the full Shopify store setup for a motorsport gear brand selling karting suits and gloves: the store build, product catalogue and checkout, then supported the launch. You can see it, along with our other work, on the [portfolio page](/portfolio).

## Getting a number

The honest way to get a Shopify store cost is to list what you need: how many products, what the theme needs to do, which payments and shipping you need, and what apps are essential. Then ask for a fixed price against that list.

That is how we quote. Our [Shopify development services](/shopify-development) cover the full build for UK and US brands, with a written plan and a fixed price before any work starts. Tell us what you sell and we will come back with both.
`,
  },
  {
    slug: "custom-website-vs-shopify",
    topic: "web",
    title: "Custom Website vs Shopify Theme: Which Is Right for You?",
    description:
      "Custom website vs Shopify theme: what each gives you on design, speed, cost and maintenance, and how to decide which one fits your business.",
    date: "2026-09-16",
    excerpt:
      "A Shopify theme gets you selling fast. A custom-coded site gives you full control. Here is what each one actually gives you, and when each makes sense.",
    content: `
The custom website vs Shopify question comes up with almost every business about to build or rebuild an online store. The two options are not really competing on the same thing. A Shopify theme is a fast, reliable way to get a working shop. A custom-coded website is a way to get exactly the site you want. Which is right depends on what you are optimising for.

## What a Shopify theme gives you

A theme is a pre-built design that you configure rather than code. You choose it, add your branding, fill in the sections, and Shopify handles everything underneath.

That "everything underneath" is the real value:

- **Hosting, security and updates** are done for you.
- **The checkout** is proven, fast and trusted by shoppers.
- **Payments, shipping and tax** are built in and configured from the admin.
- **The app ecosystem** adds features without code.
- **Speed to launch.** A simple store can be live in days.

The trade-off is that you are working inside someone else's design decisions. You can change colours, fonts, section order and a fair amount of layout, but the structure is the theme's. Going further means custom code inside the theme, which is possible but starts to erode the simplicity you chose Shopify for.

## What a custom-coded website gives you

A custom coded website is built from the ground up in HTML, CSS and JavaScript, or on a framework on top of them. There is no theme and no page builder. Every element on the page is there because someone decided it should be.

What that buys you:

- **Full design control.** The layout is shaped around your products and brand rather than fitted into a template. If you want a page that no theme offers, you can have it.
- **Website speed.** Themes and page builders load code for features you may never use. A custom site loads only what it needs, which is why hand-built sites are often noticeably faster. Speed matters for search ranking and for conversion.
- **No page builder.** The site is not dependent on a builder's roadmap, pricing or continued existence.
- **Ownership.** The code is yours. You can host it anywhere and have any developer work on it.

The trade-off is that the things Shopify does for you now have to be done by you or your developer: hosting, updates, security, and if you sell online, a checkout and payment integration.

We built a custom-coded storefront in exactly this way for a retail client: HTML, CSS and JavaScript, no theme, no page builder, with a layout shaped entirely around the products. It is on our [portfolio page](/portfolio) alongside the Shopify builds, so you can compare the two approaches side by side.

## Costs

The two models spend money in different places.

**A Shopify theme** has a lower build cost and a predictable monthly cost: the plan fee, any paid apps, and transaction fees. Over years, the monthly costs add up, and they rise as you add apps.

**A custom website** has a higher build cost, because everything is made rather than configured. After that, the running costs are usually lower: hosting is cheap, there are no app subscriptions, and there is no platform fee. But changes need a developer, and that is where the ongoing spend goes.

Neither is cheaper in every case. A small store with standard features is usually cheaper on Shopify. A content-led or brand site with a small, stable range is often cheaper custom-built over a few years.

## Maintenance

**On Shopify**, maintenance is mostly keeping the theme and apps up to date and checking nothing has broken after an update. Shopify handles the platform. You or your developer handle the store.

**On a custom site**, maintenance is yours. That means keeping the hosting running, keeping any dependencies patched, making backups, and fixing anything that breaks. For a simple static site this is very little work. For a site with a custom checkout, accounts and integrations, it is a real job that needs a developer on call.

The question to ask is not "which is less work?" but "who is going to do the work?" If the answer is nobody, choose Shopify.

## When a Shopify theme makes sense

- You want to be selling in weeks, not months.
- Your product range is standard: physical goods, straightforward variants, normal shipping.
- You want to add features through apps rather than development.
- You do not have a developer on hand and do not want to need one.
- The design needs to be good, but it does not need to be unique.

## When a custom website makes sense

- Design is part of what you sell, and a template will visibly undercut it.
- Speed is a priority, either for search ranking or for a demanding audience.
- You need pages or functionality no theme provides.
- The site is mainly content, portfolio or lead generation, with a small or no product catalogue.
- You want to own the code and avoid platform fees for the long term.

## The middle ground

It is not always one or the other. A common arrangement is a custom-coded brand site for the pages that need to be fast and distinctive, with Shopify handling the checkout behind it. It costs more than either option alone, but for some brands it is the right shape.

## Deciding

Start with the honest questions. How unique does the design need to be? How fast does the site need to be? Who will maintain it? How often will it change? Answer those and the choice usually makes itself.

We build both: [Shopify stores](/shopify-development) when the platform fits, and [bespoke custom-coded ecommerce sites](/ecommerce-website-development) when design control and speed matter more. We will tell you which one fits before quoting rather than steering you to whichever is easier for us. Tell us what the site needs to do and we will come back with a recommendation and a fixed price.
`,
  },
  {
    slug: "ai-social-media-automation",
    topic: "web",
    title: "How AI Agents Automate Social Media Content for Businesses",
    description:
      "AI social media automation in plain English: what AI agents are, how they plan, write and schedule posts, where people still check, and how to start.",
    date: "2026-09-14",
    excerpt:
      "AI agents can plan, write and schedule a business's social media with very little manual work. Here is how it works, where humans stay involved, and how to start.",
    content: `
For most small and mid-sized businesses, social media is a job nobody wants. It needs doing every week, it needs ideas, and it always loses to the work that actually pays. AI social media automation is the attempt to take that job off a person's desk, and with the current generation of AI agents it has become practical rather than theoretical.

This guide explains what AI agents are in plain terms, how they handle content from planning through to posting, where people still need to be involved, and how to start without wasting money.

## What AI agents are, in simple terms

An AI model on its own answers questions. You type something, it replies. It does not do anything unless you are sitting there asking.

An AI agent is a model that has been given a job, a set of tools, and permission to work through the job on its own. The tools might be a calendar, a document store, your website, a social media scheduler, or another agent. The agent decides what to do next, uses a tool, looks at the result, and carries on until the job is done or it needs a person.

For content automation, that means an agent can be told "keep this company's LinkedIn active with two useful posts a week about topics its customers care about", and it can go and do that, step by step, without someone prompting each post.

## How agents plan content

A content system usually starts with a planning agent. It is given the context that a human marketer would have: what the business does, who the customers are, what tone to use, which topics are on-brand and which are off-limits, and any events coming up.

From that it produces a content calendar: a list of post ideas spread over the coming weeks, each with a topic, an angle, a format and a platform. It can pull ideas from the company's website, industry news or seasonal dates. The plan is the first thing a person reviews, and it is far quicker to approve a list of ideas than to come up with them.

## How agents create posts

Once the plan is approved, a writing agent turns each idea into a draft. It writes in the tone it was given, keeps to the platform's length and style, and can produce variations for different channels from one idea. Some systems also generate or select images, or produce short scripts for video.

The important word is draft. A good system does not post straight from the writing agent. It writes into a queue.

## How agents schedule and publish

A publishing agent takes approved posts and schedules them through the platforms' own tools or a scheduling service. It handles timing, spacing across channels, and the tedious parts such as resizing images and formatting links. After posting, it can collect basic engagement data and feed it back to the planning agent so future plans lean towards what worked.

This is the part that saves the most visible time. Logging into three platforms every morning becomes something that simply happens.

## Where people still review

AI agents are good at volume and consistency. They are not good at judgement about your specific business. So the sensible design keeps people at three points:

**Approving the plan.** A person checks the calendar before anything is written, catching topics that are wrong for the business or badly timed.

**Approving drafts.** Someone reads posts before they go out, or at least samples them. This catches factual errors, awkward tone and anything that could embarrass the business. Over time, as trust builds, the review can become lighter, but it should not disappear for anything public-facing.

**Handling replies.** Comments and messages from real customers should reach a real person. An agent can flag and summarise them, but it should not answer on the company's behalf without oversight.

## Benefits and limits

The benefits are straightforward: consistency, because posts go out whether or not anyone is busy; speed, because a month of content can be drafted in an afternoon; and cost, because the work no longer needs a person's week.

The limits are just as real. Agents do not know what happened in your business this morning unless something tells them. They can be confidently wrong about facts, which is why review matters. They produce competent content more easily than remarkable content, and they can drift in tone if nobody is watching. AI automation for business works best as a system that people supervise, not a system people forget about.

## What this looks like in practice

We built a system of AI agents for an international client serving accounting firms. The agents plan, prepare and publish social media content for those firms, with review built into the process. What used to take hours of manual posting each week now runs on its own, keeping the firms visible online without adding staff. The project is on our [portfolio page](/portfolio) if you want to see the shape of it.

## How to start

1. **Pick one channel and one job.** LinkedIn posts twice a week, say. Narrow scope makes the results easy to judge.
2. **Write down the brief a human would need.** Who you are, who you serve, what tone, what topics, what to avoid. This becomes the agent's instructions.
3. **Start with planning and drafting only.** Keep publishing manual until you trust the output.
4. **Review everything for the first month.** Note what you change, and feed it back into the brief.
5. **Add scheduling once the drafts need few edits.** Then consider a second channel.

If you would rather have the system designed and built for you, our [AI automation services](/ai-automation) cover content systems like the one above, as well as customer replies, admin and reporting, for businesses in the UK and US. Tell us what you want to stop doing by hand and we will come back with a plan and a fixed price.
`,
  },
  {
    slug: "how-to-choose-shopify-development-partner",
    topic: "web",
    title: "How to Choose a Shopify Development Partner",
    description:
      "How to choose a Shopify development partner: what they should do, the questions to ask, UK and US time zones, contracts, ownership and red flags.",
    date: "2026-09-22",
    excerpt:
      "Most Shopify agencies sound the same until the work starts. Here is what a good development partner actually does, what to ask, and the signs to walk away.",
    content: `
Choosing a Shopify development partner is harder than choosing a theme, because the differences do not show up in a demo. Two agencies can quote the same build and deliver very different stores: one fast, owned by you and easy to update, the other slow, held together by apps and awkward to leave.

This guide sets out what a partner should actually do for you, the questions that separate the good ones, and the red flags that should end the conversation.

## What a Shopify development partner does

The word "partner" is used loosely, so it is worth being precise. A Shopify development agency that deserves the name does more than install a theme and upload products. Expect them to:

- Ask what you sell, to whom, and how those people choose, before proposing anything.
- Recommend a theme, a customised theme or a custom build based on your answers, not on what is easiest for them.
- Set up payments, shipping, tax and checkout properly and test them on a phone.
- Build search into the store from the start: titles, structure, speed, schema.
- Hand over a store you own outright, with a walkthrough of how to run it.
- Be available afterwards, whether on a retainer or for one-off changes.

If a proposal covers only design and product upload, the rest is either extra or missing.

## Questions to ask before you sign

**Who will do the work?** The person on the sales call is often not the person in your store. Ask who that is and whether you can speak to them.

**Theme or custom, and why?** A good answer references your products and your budget. A vague answer means they have a default they apply to everyone.

**What exactly is in scope?** Products, payments, shipping, tax, SEO, migration, apps, training. Get the exclusions in writing as clearly as the inclusions.

**How do you handle apps?** Every app is a monthly cost and a thing that can break. A careful partner uses as few as the store genuinely needs.

**What does SEO mean in your proposal?** It should mean concrete things: titles and descriptions on every page, image alt text, clean URLs, redirects from any old site, speed checked before launch.

**What happens after launch?** Who fixes things when a Shopify update changes a theme? Is there a retainer, and what does it cover?

## Look at the portfolio properly

A portfolio tells you more than a proposal, if you read it the right way. Open the stores on your phone, not just a laptop. Check how fast they load. Try the checkout as far as the payment step. Look at whether product pages have real titles and descriptions or placeholder text.

Then ask what the agency actually did on each one. "We built it" can mean a full build or a theme install with a logo swapped in. Ask which parts were custom, which were the theme, and what the client needed after launch.

## Communication and time zones

For UK and US store owners, where the partner is based matters less than when you can reach them. Agencies in lower-cost countries can offer the same Shopify development services for less, and many do excellent work. The questions are practical: what are their working hours in your time zone, which channel do you use, and how quickly do they reply to a normal question and to an emergency?

A partner a few hours ahead of the UK can be an advantage, because work is done before your day starts, as long as there is a clear overlap for calls. A partner with no overlap at all is a problem however good they are.

## Contracts and ownership

This is where the most expensive mistakes hide.

- **The Shopify account** should be opened in your name, on your payment card. If the agency opens it under their account, you do not own your store.
- **The domain** should be registered to you.
- **The theme code** should live in your store, not in an app or system the agency controls. Ask whether another developer could pick it up without them.
- **Access** should be through a collaborator account you can remove, never a shared password.
- **The contract** should say what happens at the end. A fixed project price with a clear handover is normal. A retainer should be optional and cancellable with reasonable notice.

Ask for all of this in writing. An agency that is comfortable with ownership will not hesitate.

## Red flags

Some things should end the conversation regardless of price.

- **A quote before any questions.** They are quoting a package, not your store.
- **Guaranteed rankings or sales.** Nobody can promise these.
- **Asking for your Shopify password.** Collaborator access exists for a reason.
- **Their account, their apps, their code.** Any structure that makes leaving painful is a choice they made.
- **Pressure to sign today.** Discounts that expire tonight exist to stop you asking the questions above.
- **No mention of mobile, speed or SEO.** These are not extras.

## Making the decision

You do not need the cheapest partner or the biggest. You need honest answers to the questions above, a written scope, ownership in your name, and someone you can reach during your working day. If those are in place, the rest is whether you trust them.

If you would like to put these questions to us, our [Shopify development services](/shopify-development) for UK and US brands come with a written scope and fixed price, a store opened in your name, and collaborator access you can remove at any time. Ask us any of the above; we would rather answer now than have you find out later.
`,
  },
  {
    slug: "shopify-seo-checklist",
    topic: "web",
    title: "Shopify SEO Checklist for UK & US Stores",
    description:
      "A practical Shopify SEO checklist: store structure, product titles, meta titles, alt text, URLs, duplicates, speed, schema, blog posts and internal links.",
    date: "2026-09-13",
    excerpt:
      "Shopify handles the basics, but a store that ranks needs more than the defaults. Work through this checklist section by section.",
    content: `
Shopify does a reasonable job of SEO out of the box: it generates a sitemap, handles canonical tags, and makes titles and descriptions editable. That is why so many stores stop there, and why so many stores rank for nothing but their own brand name.

This Shopify SEO checklist goes through the parts that actually move a store up the results, in the order we work through them. You can do most of it yourself in the Shopify admin. The rest is theme work.

## Store structure and collections

Search engines understand a store through its structure. Get this right first, because everything else hangs off it.

- One collection per real shopping category, named the way customers search, not the way your supplier labels things.
- No more than two or three levels deep: home, collection, product. Sub-collections only where the range genuinely needs them.
- Every collection reachable from the main navigation or a parent collection, so nothing is orphaned.
- Collection pages with a short written introduction. A page that is only a grid of products gives search engines very little to work with.

## Product titles and descriptions

The product title is the heaviest signal on the page.

- Lead with what the product is, in the words shoppers use, then the distinguishing detail: material, size, colour, use.
- Keep it readable. A title that is a list of keywords looks untrustworthy and rarely ranks better.
- Write a unique description for every product. Supplier copy pasted across a hundred products is duplicate content, and it does not sell.
- Answer the questions a shopper would ask in a shop: what it does, what it is made of, who it is for, what is in the box.

## Meta titles and descriptions

These are separate from the product title and description, and they are what appears in the search results.

- Set a meta title for every product, collection and page. Shopify will fall back to the product title, but the fallback is rarely ideal.
- Keep meta titles under about 60 characters so they are not cut off.
- Write meta descriptions as an invitation to click, under about 155 characters, with the main keyword included naturally.
- Check the home page meta title. Many stores still show the theme's default.

## Image alt text and image size

Images are where Shopify stores most often leak both rankings and speed.

- Add alt text to every product image: what the product is and, where useful, the variant. Alt text is indexed and it is read by screen readers.
- Upload images at a sensible size. A phone photo straight from the camera can be several megabytes; the theme will display it at a fraction of that.
- Use the theme's built-in responsive image handling rather than an app where possible.
- Name files descriptively before uploading. "blue-linen-shirt-front.jpg" beats "IMG_4021.jpg".

## URLs and duplicate content

Shopify's URL structure creates duplicates that you need to know about.

- A product reached through a collection gets a URL containing the collection path, as well as its own direct URL. Shopify sets a canonical tag pointing to the direct one, but check your theme has not overridden it.
- Keep product and collection handles short, readable and stable. Changing a handle changes the URL; Shopify offers to create a redirect, and you should accept. The same applies at a larger scale after a platform move — see the [WooCommerce to Shopify migration guide](/blog/woocommerce-to-shopify-migration).
- Do not let filtered or sorted collection views get indexed. Most themes handle this; check with a site search for your domain plus "sort_by".
- If you sell on more than one marketplace, make sure the Shopify store is the canonical source of its own content.

## Site speed

Speed is a ranking factor and a conversion factor, and Shopify stores are slower than they need to be more often than not.

- Audit your apps. Every installed app can inject scripts into every page, even ones you no longer use. Remove what you do not need.
- Choose a lean theme, or have unused sections and scripts removed from the one you have.
- Compress images and let the theme lazy-load them.
- Check Core Web Vitals in Google Search Console and test on a real phone, not just a desktop.

## Schema markup

Structured data helps search engines show rich results: price, availability, ratings, breadcrumbs.

- Most themes output basic Product schema. Check it is present and correct with a structured data testing tool.
- Add Organization and WebSite schema to the home page.
- If you use a review app, make sure it outputs review schema rather than just displaying stars.
- Do not add schema for things the page does not actually show.

## Blog content

A blog is how a store ranks for searches that are not product names: how to choose, how to use, how to care for.

- Write for questions your customers actually ask. Autocomplete in Google and in your own site search will tell you what those are.
- Link from each post to the relevant collections and products, and from products back to the guides.
- Publish on a rhythm you can keep. Four good posts a year beat twenty thin ones.

## Internal links

Internal links tell search engines which pages matter and help shoppers move through the store.

- Link related products to each other and to their collection.
- Link from blog posts to products and collections, and back.
- Put the most important collections in the main navigation and the footer.
- Fix broken links after any product or collection changes.

## When to bring in help

Most of this checklist is admin work anyone can do. The parts that need a developer are theme changes: removing unused scripts, fixing canonical tags, adding schema, and speed work inside the theme code. If you would rather have a Shopify SEO expert handle both, our [Shopify development and SEO services](/shopify-development) cover this checklist as part of every build, and as ongoing Shopify SEO services for stores that are already live. Tell us your store URL and we will say what we would change first.
`,
  },
  {
    slug: "woocommerce-to-shopify-migration",
    topic: "web",
    title: "WooCommerce to Shopify Migration: Step-by-Step Guide",
    description:
      "WooCommerce to Shopify migration, step by step: planning, moving products, customers and orders, 301 redirects to keep rankings, testing and launch.",
    date: "2026-09-12",
    excerpt:
      "Moving a store from WooCommerce to Shopify is a project, not a plugin. Here is the order to do it in, what to protect, and the mistakes that cost rankings.",
    content: `
A WooCommerce to Shopify migration is one of the most common platform moves in ecommerce, and one of the most commonly botched. The products usually arrive. What gets lost is search rankings, order history, and the customer accounts that took years to build.

This guide walks through the migration in the order it should happen, from the decision to the launch checklist, with the mistakes to avoid at each stage.

## Why stores move from WooCommerce to Shopify

WooCommerce is flexible and cheap to start. It also runs on WordPress, which means you are responsible for hosting, updates, security, backups and the plugin conflicts that come with all of them. As a store grows, that maintenance turns into real time and real risk.

Shopify takes the hosting, security and checkout off your hands, and the admin is built for selling rather than publishing. The trade is less control and a monthly fee. For most stores past a certain size, that trade is worth making. If you are unsure, our guide to [custom websites vs Shopify themes](/blog/custom-website-vs-shopify) covers the wider decision.

## Step 1: Plan before you touch anything

Start with an inventory of what the current store contains and what needs to come across:

- Products, variants, images, inventory and SKUs
- Categories and tags, and how they map to Shopify collections
- Customer accounts and their order history
- Blog posts and static pages
- Every URL that currently ranks or receives traffic
- Plugins, and which Shopify apps or built-in features replace them

Export a full list of URLs from your sitemap and from Google Search Console. This list is the basis of your redirects later, and it is the thing most migrations forget until it is too late.

## Step 2: Move products

Shopify's own importer and third-party migration tools handle the product export from WooCommerce. What they do not handle is cleaning.

Before importing, tidy the WooCommerce data: remove discontinued products, fix inconsistent variant names, and make sure every product has a proper title and description. Migrating a mess just gives you a mess on a new platform.

After importing, spot-check products across categories: images attached, variants correct, prices right, inventory matching. Check a handful in detail rather than assuming the tool got everything.

## Step 3: Move customers and orders

Customer accounts can be imported, but passwords cannot, because they are stored differently on each platform. Customers will need to reset their password on the new store. Plan an email telling them so, sent after launch, not before.

Order history is worth bringing across so that customer service has context and customers can see past purchases. Most migration tools support it. Check that order numbers, totals and statuses came through correctly, because those records matter for accounting and returns.

## Step 4: Keep your rankings with 301 redirects

This is the step that separates a migration that keeps its traffic from one that loses it.

WooCommerce and Shopify structure URLs differently. A product at /product/blue-linen-shirt/ will live at /products/blue-linen-shirt on Shopify, and categories become /collections/. Every old URL that search engines know about needs a 301 redirect to its new equivalent.

- Map every URL from your Step 1 list to its new location: product to product, category to collection, page to page.
- Import the redirects into Shopify under Navigation, or with a redirect app for large lists.
- Do not redirect everything to the home page. Search engines treat that as a soft error and the rankings do not transfer.
- Carry over meta titles and descriptions, so the new pages present the same way in results.
- Keep the same domain. Changing platform and domain at once doubles the risk.

## Step 5: Theme and apps

Do not try to recreate the WooCommerce site exactly. Choose a Shopify theme that suits the products, customise it, and rebuild the navigation around Shopify collections.

For every WooCommerce plugin, decide whether Shopify does the job natively, whether an app is needed, or whether the feature can be dropped. Fewer apps means a faster store and lower monthly costs. Payments, shipping and tax need to be set up fresh: Shopify Payments where available, shipping zones and rates, and VAT or sales tax settings for the UK or US.

## Step 6: Test everything

Before launch, on a password-protected Shopify store:

- Place test orders through the full checkout on a phone and a desktop.
- Check the redirects by visiting old URLs and confirming they land on the right new page.
- Confirm meta titles and descriptions on key pages.
- Test customer login and password reset.
- Check email notifications: order confirmation, shipping, password reset.
- Run a speed test and fix anything obvious.

## Launch checklist

- Point the domain at Shopify and remove the store password.
- Submit the new sitemap in Google Search Console.
- Verify redirects again on the live domain.
- Send the customer email about password resets.
- Keep the WooCommerce site accessible privately for a few weeks, in case something was missed.
- Watch Search Console for crawl errors and 404s daily for the first fortnight.
- Work through the [Shopify SEO checklist](/blog/shopify-seo-checklist) once the store has settled, since a migration is a good moment to fix structure.

## Common mistakes

- **Migrating without a URL list.** Redirects built from memory miss pages that rank.
- **Redirecting everything to the home page.** Rankings do not follow.
- **Changing domain at the same time.** One change at a time.
- **Importing dirty data.** Clean it first.
- **Forgetting customer passwords.** Tell people before they find out.
- **Switching off the old site on launch day.** Keep it for reference.

## Doing it yourself or with help

A small store with clean data can be migrated by its owner with care and a free weekend. Larger catalogues, long order histories and stores with real search traffic are where a mistake costs more than the help. If you would rather hand it to a Shopify migration agency UK and US owners can reach during their working day, our [Shopify migration services](/shopify-development) cover the URL mapping, data move, redirects, theme and testing, with a written plan and fixed price before anything moves.
`,
  },
  {
    slug: "online-store-redesign-signs",
    topic: "web",
    title: "Does Your Online Store Need a Redesign? 7 Signs",
    description:
      "Seven signs your store needs website redesign services: slow speed, poor mobile experience, dated design, low conversions, weak SEO and platform limits.",
    date: "2026-09-11",
    excerpt:
      "Stores rarely fail all at once. They slip. Here are seven signs that a redesign has stopped being optional, and what a good redesign actually involves.",
    content: `
Online stores rarely fail suddenly. They slip: a little slower each year, a little more awkward on a phone, a few more workarounds in the admin. By the time the owner is searching for website redesign services, the site has usually been costing sales for a while.

Here are the seven signs we look for when a store owner asks whether a redesign is worth it, followed by what a good ecommerce website redesign actually involves.

## 1. The site is slow

Speed is the first thing to check, because it affects everything else: rankings, bounce rate, conversion. Open your store on a phone using mobile data, not office Wi-Fi, and count. If the product grid takes more than a few seconds to appear, visitors are leaving before they see it.

Slowness usually comes from accumulation: a theme patched with apps, oversized images, scripts left behind by tools you stopped using. Sometimes it can be cleaned up in place. Often the cheaper fix is to rebuild without the weight.

## 2. It is hard to use on a phone

Most shoppers will see your store on a phone first. If the navigation needs a magnifying glass, the product images crop badly, the filters do not work, or the checkout asks for a pinch and zoom, you are losing the majority of your visitors at the point they were ready to buy.

Test it yourself, honestly, on a small screen. Then ask someone who has never used the site to buy something while you watch.

## 3. The design looks dated

Design ages faster online than in print. A store built five or six years ago tends to show it: small photography, cluttered layouts, fonts and colours from a different era. Shoppers may not be able to say what is wrong, but they notice, and they read it as a signal about the business.

The test is comparison. Open your store next to the two or three competitors your customers also consider. If yours looks like the older option, it is being judged that way.

## 4. Conversions are low and falling

Traffic without sales is a design problem more often than a product problem. If visitors arrive, browse and leave without adding to cart, something on the page is stopping them: unclear product information, missing trust signals, a confusing path to checkout, or a checkout that asks for too much.

Look at where people leave. If it is the product page, the page is not answering their questions. If it is the cart or checkout, the process is losing them.

## 5. It is hard to update

If adding a product means calling a developer, if a seasonal banner takes a week, if you avoid changing anything because something else might break, the store is working against you. A well-built store lets you change products, prices, content and promotions yourself, and only needs a developer for design or feature changes.

## 6. Search traffic is weak

A store that only appears in search for its own brand name is invisible to new customers. Weak SEO often traces back to structure: thin collection pages, duplicate product descriptions, no blog, missing titles and alt text, and speed problems from sign one. A redesign is the natural moment to fix the structure, because it is far harder to bolt on afterwards. If you are on Shopify, the [Shopify SEO checklist](/blog/shopify-seo-checklist) goes through those structural problems one by one.

## 7. The platform is holding you back

Sometimes the design is fine and the platform is the limit. You want a layout the theme cannot do. You need a feature no app provides. Monthly fees keep rising as apps pile up. Or the site is on a page builder that makes every change slow and every page heavy.

At that point the question is not just "redesign?" but "redesign on what?" For some stores the answer is a better theme on the same platform. For others it is a bespoke ecommerce website, custom-coded around the products, with no builder and no theme underneath. Our guide to [custom websites vs Shopify themes](/blog/custom-website-vs-shopify) covers that decision, and if the move is off WooCommerce, the [WooCommerce to Shopify migration guide](/blog/woocommerce-to-shopify-migration) sets out what it involves.

## What a redesign actually involves

A redesign is not a new coat of paint. Done properly, it starts with measurement and ends with a site that keeps what worked.

**Measure first.** Which pages rank, which convert, where visitors leave, how fast the site really is. This tells you what to keep and what to fix, and it gives you a baseline to judge the new site against.

**Structure before design.** Collections, navigation and the path to checkout are decided before anything is drawn. Most conversion problems live here.

**Design around the products.** Photography, layout and copy that suit what you sell, tested on a phone before a desktop.

**Rebuild, with speed in mind.** Whether on a platform theme or custom-coded, the new site should carry only what it needs.

**Protect the rankings.** Every old URL redirected to its new equivalent, titles and descriptions carried over, the sitemap resubmitted. A redesign that loses search traffic has failed, however good it looks.

**Hand over properly.** You should be able to run the store day to day without a developer, and the code should be yours.

## If you recognised more than two of these

One sign can usually be fixed in place. Three or more, and the fixes start to cost more than a rebuild. If you would like an honest opinion on your store, our [bespoke ecommerce website development](/ecommerce-website-development) service starts with a review of what the current site does well and badly, and we will tell you whether it needs a redesign, a rebuild, or just a few fixes, before quoting anything.
`,
  },
  {
    slug: "what-is-a-good-acos-on-amazon",
    topic: "amazon",
    title: "What Is a Good ACoS on Amazon? A Practical Guide for Sellers",
    description:
      "What ACoS measures, how to work out the right target from your own product margins, and when a high ACoS is worth accepting.",
    date: "2026-09-25",
    excerpt:
      "A good ACoS depends on your product margin and what you are trying to achieve that month, not on a universal number somebody quotes at you.",
    content: `
If you have recently started running Sponsored Products campaigns, ACoS is the number you will end up staring at most. It also attracts the most confident bad advice, usually a single figure you are told to aim for.

There is no such figure. The right ACoS depends on your margins and on what you are trying to achieve this month, and working out your own takes about ten minutes with a calculator.

## What ACoS actually measures

ACoS stands for Advertising Cost of Sales. The formula is:

**ACoS = ad spend ÷ ad revenue × 100**

As an illustration, if a campaign spends £200 and Amazon attributes £800 of sales to it, the ACoS is 25% — you paid 25p of advertising for every pound of advertised sales. That is an example to show the arithmetic, not a benchmark.

Two things are worth knowing before you act on it. It counts only the sales Amazon attributes to an ad click inside the attribution window, so organic sales are excluded even when the ad helped cause them. And it says nothing about profit on its own, because it compares spend with revenue rather than with margin. That is why the question "what is a good ACoS" cannot be answered by anyone who does not know what is left on each sale after costs.

## Why there is no single good ACoS

The right target is a function of your product's margin, and margins differ enormously between categories and often between products in one catalogue.

The idea that makes this concrete is break-even ACoS: the point at which an advertised sale leaves you neither better nor worse off. If your pre-advertising margin is 30%, an ACoS of 30% means advertising has consumed exactly the profit on that sale. Above it, each advertised sale costs you money. Below it, you keep the difference.

An ACoS of 35% is therefore good for a product carrying a 50% margin and poor for one carrying 20%. When another seller quotes their ACoS, the useful follow-up is: compared with what margin? It also means your target should vary by product, so a catalogue holding thin-margin accessories alongside higher-margin bundles should not be run to one blanket goal.

## Working out your break-even ACoS

You need one figure: the percentage of the selling price that survives as profit before advertising. Work through it in order.

1. **Start with the selling price** the customer pays, excluding VAT or sales tax where that is not your revenue.
2. **Subtract the cost of goods** — what you pay your supplier per unit.
3. **Subtract inbound shipping and duty** as a per-unit figure.
4. **Subtract Amazon's referral fee**, a percentage of the sale price that varies by category.
5. **Subtract fulfilment costs** — FBA fees, or your own pick, pack and postage.
6. **Subtract storage and other per-unit costs**, with an allowance for returns where they are common.

Whatever remains, as a percentage of the selling price, is your pre-advertising margin — and that percentage is your break-even ACoS.

As an illustration only: a product sells for £30 and £21 goes on goods, fees and fulfilment. The £9 left is 30% of the price, so break-even ACoS is 30%. Use your own figures rather than these.

Do this for your best sellers rather than the whole catalogue. A handful of products usually accounts for most of the spend.

## When a high ACoS is fine

Running above break-even is a decision rather than a failure, as long as it is deliberate and has an end date.

**Product launches.** A new listing has no sales history and no ranking. Early advertised sales bring reviews and signal to Amazon that the page converts, which supports organic position later. Plenty of sellers accept a loss-making ACoS through a launch window as a cost of acquisition.

**Testing new keywords.** You cannot know which search terms convert until they have data behind them. A testing phase looks expensive and buys information.

**Clearing stock.** Ageing inventory costs storage fees and ties up cash. Moving it at a thin margin often beats holding it.

**Defending a branded term.** Bidding on your own brand name is usually inexpensive, and leaving it undefended invites competitors above your listing.

This is also where TACoS earns its place. Total Advertising Cost of Sales measures ad spend against total sales, organic and paid together. If ACoS is high but TACoS is falling, advertising is lifting organic sales and the account is moving the right way. If both climb together, you are buying revenue rather than building it.

## When a low ACoS is a problem

A very low ACoS looks like good news and frequently is not. It usually means bids are conservative enough that you are winning only the cheapest impressions — often the ones you would have won organically anyway.

The symptoms are easy to recognise: impressions well below what the category can support, budgets that never run out, a large share of impressions lost to bid, and flat sales volume alongside a comfortable-looking ratio.

If break-even is 30% and you are running at 8%, you have room. Raising bids on terms that already convert usually buys more volume at an ACoS still safely inside your margin. Profit is an amount of money, not a percentage, and protecting the ratio at the expense of volume is a common mistake.

## How to bring ACoS down

When you genuinely need to lower your ACoS, the work is unglamorous and repetitive.

**Read the search term report.** It shows the queries that actually triggered your ads, rather than the keywords you bid on. Wasted spend is visible here and almost nowhere else.

**Add negative keywords every week.** Any search term with meaningful clicks and no sales is a candidate. This is the most reliable lever, and it compounds.

**Adjust bids on evidence.** Lower bids on terms above target with enough clicks to judge; raise them on terms comfortably below it. Small, regular changes beat occasional large ones.

**Restructure so winners are controllable.** Move converting search terms into their own exact-match campaigns, where their bid is not competing with dozens of others in one ad group.

**Fix the listing.** The step most often skipped. ACoS is a function of conversion rate: if two sellers pay the same per click and one converts twice as often, their ACoS is half. Images, title, bullets, price, reviews and A+ content all decide what a click is worth, which is why ad performance depends on the listing as much as the campaign. Our guide to [optimising an Amazon listing](/blog/how-to-optimize-amazon-listing) works through the page section by section.

**Give changes time.** Attribution lags by days. Judging a bid change after twenty-four hours leads to reversing decisions that were working.

## Frequently asked questions

**What is ACoS?** ACoS, or Advertising Cost of Sales, is your ad spend divided by the revenue Amazon attributes to those ads, shown as a percentage. It tells you what you paid in advertising for every pound of advertised sales. Because the denominator counts only sales traced to an ad click, organic sales sit outside it entirely.

**What is a good ACoS on Amazon?** A good ACoS is one below your break-even figure — the percentage of the selling price left as profit before any advertising. That makes the answer specific to each product rather than a number anyone can quote at you. The same figure can be comfortable for a high-margin product and loss-making for a thin-margin one.

**What is a good ACoS for Amazon ads?** It depends on what the campaign is there to do. For campaigns meant to be profitable today, aim below the break-even figure for that product. For a launch, a keyword test, clearing stock or defending your own brand name, running above break-even can be the right call, provided it is deliberate and has an end date.

**How do I lower my ACoS?** Start with the search term report and add negative keywords for anything spending without selling, then adjust bids on evidence rather than instinct. Moving converting search terms into their own exact-match campaigns makes their bids controllable. And look at the listing, because ACoS is a function of conversion rate: a page that converts better lowers ACoS without any change to a bid.

## The short version

Work out your break-even ACoS product by product, set a target above or below it depending on whether you are launching or harvesting, and judge the account on profit rather than on the ratio.

If you would rather not do the weekly search term and bid work yourself, our [Amazon PPC management service](/amazon-ppc-management) covers campaign structure, keyword research, negatives, bids and plain-English reporting for UK and US sellers. It starts with a free audit of your current campaigns, so you can see where the spend is going before you decide anything.
`,
  },
  {
    slug: "best-ai-agents-for-customer-support",
    topic: "web",
    title: "Best AI Agents for Customer Support in the UK (2026 Guide)",
    description:
      "What AI support agents handle, where they work well and fall short, and what UK businesses should check before choosing one.",
    date: "2026-09-25",
    excerpt:
      "AI support agents answer the questions that repeat, at any hour — here is what they handle, where they fail, and how to work out whether one fits your business.",
    content: `
Every software company now sells something described as an AI agent for customer support, and most of the marketing sounds identical. Underneath, the products differ enormously: in what they can resolve, in how they behave when unsure, and in how much of your own information they have been given.

This guide does not rank products. Vendors change constantly, and the right choice depends on your helpdesk, your order system and what your customers ask. Instead it explains what these agents do, where they help, where they cause damage, and what to check before committing.

## What an AI customer support agent actually does

Most businesses have met the older kind: a scripted chatbot with a menu of buttons. You click "Where is my order?", it asks for an order number, and it either finds it or tells you to email support. It cannot cope with anything outside its script, which is why customers learned to click straight past it.

An AI agent works differently. It reads what the customer wrote in their own words, works out what they are asking, and holds the thread of the conversation. If someone writes "it hasn't turned up and I want to send it back anyway", it understands there are two things happening. It can ask a clarifying question, look something up, and answer that customer rather than a category.

"Handling a ticket end to end" is the phrase vendors use. At its best it means the agent understands the question, retrieves the relevant fact — the tracking status, the returns window, whether that size is back in stock — applies your policy, replies in your tone, and closes the conversation without anyone reading it. The customer gets an answer at two in the morning and your inbox never sees it.

In practice, good AI agents for customer support resolve a portion of enquiries that way and pass the rest on with a summary attached. What portion depends on what your customers ask and how well the agent has been given your own information.

## Where AI support works well

The pattern is consistent: questions that repeat, have a definite answer, and need no judgement.

**Order status.** The most common enquiry most retailers get, and the most mechanical. Given access to your order system, an agent answers it instantly.

**Returns and refunds policy.** How long do I have, who pays the postage, what condition does it need to be in, when does the money arrive. Fixed answers to fixed questions.

**Product questions.** Sizing, materials, compatibility, what is in the box, how to care for it. If the information exists on your site or in your product data, the agent finds it faster than a person.

**Opening hours, delivery times and stock.** Facts that change often but are always looked up in the same place.

**Repeat enquiries after a mailshot or a delay.** When something goes out to your whole list, or a courier has a bad week, the same question arrives fifty times in an afternoon. This is where automation earns its place most obviously.

**Triage before a person picks up.** Even where the agent should not answer, it can read the message, ask for the order number up front, tag the ticket and route it with a summary attached. Your team opens a prepared case instead of a cold one.

## Where it falls short

Be sceptical of anyone who tells you an agent handles everything.

**Complaints.** An angry customer does not want efficiency, they want to be heard, and an instant well-structured reply often makes it worse. Complaints should be detected and escalated, not answered.

**Edge cases.** The parcel that went to the old address, the item damaged inside intact packaging, the two orders that should have been one. These need somebody to look, think and decide.

**Anything needing an exception.** Goodwill gestures, refunds outside policy, a replacement sent before the return arrives. Exceptions are judgements about a particular customer, and an agent should not make them on your behalf.

**Anything with money or weight behind it.** Disputes, chargebacks and anything framed as a formal complaint belong with a person from the first message.

**Customers who simply want a human.** Some ask immediately. The right behaviour is to get them one quickly, not to make them argue with software first. An agent that hides the escalation route to protect its resolution rate is working against you.

## What to look for when choosing one

**Does it connect to the systems you already have?** An agent that cannot see your helpdesk and your order data is a search box with better manners. Ask which helpdesk, ecommerce platform and shipping tools it reads from, and whether it can write back — tag a ticket, update a status, start a return.

**Can it hand off to a person cleanly?** Watch that in a demo rather than taking it on trust. The customer should not repeat themselves, the history should arrive with the ticket, and you should control what triggers it: certain topics, an unhappy tone, a direct request, or two failed attempts.

**How is it trained on your own policies?** The answers are only as good as what it has been given. Ask how your returns policy, delivery terms and product information get in, who updates them, and how long that takes. If training is a one-off at setup, your answers drift out of date the first time a policy changes.

**What happens when it does not know?** The only acceptable answer is that it says so and passes the conversation on. Ask to see that too. An agent that gives a confident, plausible, wrong answer about your returns window costs more than the inbox time it saved.

**Where does the customer data go?** Ask which countries conversations are processed and stored in, how long they are kept, whether your customers' messages train anything beyond your own setup, and what happens to the data if you leave. Get it in writing.

**How does the pricing work?** Per conversation, per resolution, per seat and flat subscription all exist, and they behave very differently as you grow. Work out the cost in a bad month — a delivery failure, a recall, a mailshot gone wrong — rather than an average one, because that is when volume spikes.

## UK-specific considerations

Three things matter more for a UK business than the generic sales material suggests.

**Where the data sits.** Customers ask, and your own obligations depend on the answer. You do not need to be an expert, but you do need to know which regions your provider processes and stores conversations in, written down. If your business handles anything sensitive, take proper professional advice rather than relying on a vendor's assurance or a guide like this one.

**Tone and language.** Most agents are trained predominantly on American English and default to it. It shows in the spelling, in "reach out" and "shipping" where a British customer expects "get in touch" and "delivery", and in an enthusiasm that reads as insincere here. Check whether you can set tone and spelling, then read twenty real replies before letting it loose.

**Hours and holidays.** The agent runs continuously; your team does not. Decide what happens to an escalated conversation at eleven on a Saturday or during the August bank holiday: the customer should be told honestly when a person will reply, not left waiting for an answer that was never coming. Make sure the working calendar it uses is yours, bank holidays included.

## Do you need an agent, or just better automation?

Worth asking before you spend anything, because for plenty of businesses the honest answer is no.

A conversational agent suits you if customers arrive at all hours, in volume, asking questions that vary in wording. If that is not you — if enquiries come by email, in manageable numbers, in four or five recognisable types — then what you need is workflow automation rather than a chatbot: enquiries sorted and routed automatically, replies drafted from templates and your order data for somebody to check and send, follow-ups that chase themselves, and an alert when something has gone unanswered too long.

That is cheaper, simpler, easier to change, and carries none of the risk of software talking to customers unsupervised. It also saves more time than people expect, because most support load is not the conversation itself — it is looking things up, copying between systems, and remembering to follow up.

The same logic applies to the messages you send rather than receive. Order updates, review requests and post-purchase email sequences are a scheduling problem rather than an intelligence one, and belong with your [marketing automation](/marketing-automation) rather than with a support agent.

If you would like help working out which of the two you actually need, our [AI automation](/ai-automation) work starts by looking at what your team repeats each week and saying plainly where automation pays and where it does not. Sometimes the answer is a support agent. More often it is something smaller.
`,
  },
  {
    slug: "tacos-vs-acos-amazon",
    topic: "amazon",
    title: "TACoS vs ACoS: Which One Should Amazon Sellers Track?",
    description:
      "The difference between ACoS and TACoS, what each number actually tells you about your advertising, and which one to use when.",
    date: "2026-09-24",
    excerpt:
      "ACoS measures how efficient your advertising is, while TACoS shows what that advertising is doing to the whole business — you want both, for different decisions.",
    content: `
Sellers who have got comfortable with ACoS usually meet TACoS next, often mid-argument about which one matters. They measure different things, and you want both.

ACoS tells you whether a campaign is efficient. TACoS tells you what advertising is doing to your business. Neither replaces the other, and a seller watching only one will eventually make a decision the other would have prevented.

## A quick recap of ACoS

ACoS — Advertising Cost of Sales — is ad spend divided by the revenue Amazon attributes to those ads.

**ACoS = ad spend ÷ ad revenue × 100**

It answers one question: how much did I pay in advertising for each pound of advertised sales? The denominator counts only sales Amazon traces to an ad click, so organic sales are invisible to it.

Whether any given ACoS is good depends on your margin, which is a longer conversation than this post. Our guide to [what a good ACoS looks like](/blog/what-is-a-good-acos-on-amazon) covers break-even and how to work out your own target.

## What TACoS measures

TACoS — Total Advertising Cost of Sales — keeps the same numerator and uses a bigger denominator:

**TACoS = ad spend ÷ total revenue × 100**

Total revenue means everything the product earned: advertised sales and organic sales together. That single change turns an efficiency ratio into a dependency ratio.

ACoS asks whether your ads are efficient. TACoS asks how much of your total business advertising is paying for. That is the real distinction in the TACoS vs ACoS argument, and it is why the two can tell opposite stories about the same month.

As an illustration only: a product takes £10,000 of total sales in a month, £4,000 of which Amazon attributes to ads, on £1,000 of ad spend. ACoS is 25% — £1,000 divided by £4,000. TACoS is 10% — £1,000 divided by £10,000. Same spend, same month, two very different-looking numbers, both correct. Those figures are there to show the arithmetic, not as targets.

## Why the two numbers move differently

The useful cases are the ones where they diverge.

**ACoS flat, TACoS falling.** This is what you want to see. Campaigns are running at the same efficiency, but total sales are growing faster than ad spend, which means the extra revenue is organic. Usually that is advertising doing its second job: driving sales that improve ranking, which brings traffic you do not pay for. Advertising is building something rather than renting it.

**ACoS flat, TACoS rising.** The uncomfortable one. Campaigns look as efficient as ever, so nothing in the ad console raises an alarm, yet a growing share of revenue depends on paid traffic. That can mean organic ranking is slipping, a competitor has moved above you, or added spend is cannibalising sales you were already getting for free. A seller watching ACoS alone sees no problem at all.

**ACoS rising, TACoS flat or falling.** Often fine, particularly during a launch or an expansion into new keywords. You are paying more per advertised sale while the wider business absorbs it comfortably.

The pattern worth remembering: ACoS is a dial on the machine, and TACoS tells you whether the machine is getting stronger.

## Which one to use when

They answer different questions, so they belong at different levels.

**Use ACoS for decisions inside the ad account.** Which keywords to bid up or down, which search terms to make negative, whether a campaign structure is working, whether one product's advertising is profitable against its margin. ACoS is the right number at keyword, ad group and campaign level, because that is where you can act on it directly.

**Use TACoS for decisions about the product and the account.** Whether advertising is worth the overall spend, whether a launch is working, whether organic ranking is improving, whether to put more budget behind a product or hold steady. TACoS is a product-level and account-level number.

One way to hold both: ACoS tells you whether you are spending well, and TACoS whether you should be spending at all.

## What a healthy TACoS looks like

There is no universal figure, and anyone quoting one as an industry standard is guessing. It varies by category, by margin, and above all by where a product sits in its life.

**During a launch**, TACoS is normally high, because almost every sale is coming from advertising. There is no organic ranking yet, and buying those first sales is the point of the exercise.

**As a product establishes itself**, TACoS should trend downwards. Organic sales grow, the denominator grows, and the ratio falls even if ad spend stays flat. That downward trend is the most useful thing the number tells you.

**For a mature product with solid ranking**, TACoS settles wherever it keeps that ranking defended without overspending — a level you find from your own history, not from a blog post.

What matters is the direction of travel and whether it suits the stage. A high TACoS on a six-week-old listing is expected. The same figure two years later means advertising is propping up a product that never built organic demand.

## Tracking both without drowning in data

Neither number is worth reading daily. Amazon's attribution lags by days, and a single week can be thrown off by a payday, a bank holiday, a stock-out or one bulk order.

**Weekly, look at ACoS** at search-term and keyword level, because that is the cadence at which bid and negative-keyword decisions get made. You are hunting for terms that spend without converting, not studying the headline figure.

**Monthly, look at TACoS** per product, against the previous two or three months rather than only against last month. One month is noise; a quarter is information.

**Keep both in one plain view.** Ad spend, ad sales, total sales, ACoS and TACoS per product, month by month. A spreadsheet is enough — the aim is to see the trend, not to build a dashboard.

**Annotate anything unusual.** A stock-out, a price change, a competitor's sale, a Prime event. Six weeks later you will not remember why a month looked strange, and the note stops you drawing the wrong lesson.

## The short version

ACoS for the campaigns, TACoS for the business, and neither on its own.

If you would rather have someone watching both and acting on them, our [Amazon PPC management service](/amazon-ppc-management) covers the weekly search-term and bid work with monthly reporting on both numbers, for sellers in the UK and US. And if you have not yet worked out your break-even figure, start with [our guide to a good ACoS](/blog/what-is-a-good-acos-on-amazon), because the target matters more than the number.
`,
  },
];

export default posts;

export function getPost(slug) {
  return posts.find((p) => p.slug === slug);
}

// Up to `n` other posts: same topic first (newest first), then the newest of the rest.
export function getRelated(slug, n = 3) {
  const current = getPost(slug);
  const others = posts
    .filter((p) => p.slug !== slug)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
  const same = others.filter((p) => current && p.topic === current.topic);
  const rest = others.filter((p) => !same.includes(p));
  return [...same, ...rest].slice(0, n);
}
