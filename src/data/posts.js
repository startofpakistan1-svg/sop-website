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
  {
    slug: "amazon-account-management-cost",
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
];

export default posts;

export function getPost(slug) {
  return posts.find((p) => p.slug === slug);
}
