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
    slug: "why-is-my-shopify-store-slow-on-mobile",
    topic: "web",
    title: "Why Is My Shopify Store Slow on Mobile?",
    description:
      "Why is my Shopify store slow on mobile? The usual causes, how to find which one is yours, and what to fix before paying anyone to fix it.",
    date: "2026-10-11",
    excerpt:
      "Desktop looks fine, mobile does not, and the score keeps dropping. Here are the usual causes, in the order worth checking, with a real set of figures from a store we work on.",
    content: `
Most Shopify stores are slower on mobile than their owners realise, because the person checking is on a desktop with good broadband and a warm cache. The customer is on a phone, on mobile data, arriving cold.

The gap is not a rounding error either. Mobile runs on less CPU, over a slower connection, and every script has to be parsed on that weaker device.

## Why is my Shopify store slow on mobile?

Five causes account for most of it, roughly in order of how often they turn out to be the problem:

1. **Apps injecting scripts into every page**, including apps you no longer use.
2. **Images that are larger than the slot they render into.**
3. **A heavy hero** — a video or a large banner competing with your largest contentful paint.
4. **Theme bloat**, from unused sections, sliders and fonts.
5. **Third-party tags** — chat widgets, review widgets, analytics, pixels.

Notice what is not on that list: Shopify's own hosting. It is rarely the constraint, which is why "move platform" is almost never the answer to this question.

## What the numbers can look like

Worth showing a real set rather than a hypothetical. On AWEX (awex.shop), a motorsport gear store on Shopify where we placed a hero video on the home page, PageSpeed Insights reported a mobile Performance score of 43, with LCP at 14.1 seconds. Desktop Performance came in at 57 on the same page.

Two things that figure does not tell you. We have not confirmed which element is the LCP, so we are not attributing the score to the video or to anything else. And we have no before-and-after, so this is a snapshot rather than a measurement of cause.

What it does illustrate is the gap between desktop and mobile on the same page, and that a store can look perfectly healthy to its owner while scoring like that on a phone. Our guide to [adding a product video to a Shopify home page](/blog/add-product-video-to-shopify-home-page) covers what to check before and after publishing one.

## Find out which cause is yours

Guessing is expensive here. Three steps, cheapest first:

**Run PageSpeed Insights on mobile, not desktop.** Use a real product page and the home page, not just the home page. Note the LCP element it names — that single line tells you more than the score does.

**Open the network panel on a throttled connection.** Sort by size. The culprits are usually obvious and usually not what you expected.

**Audit your apps.** List everything installed, then everything you actually use. The difference is dead weight, and uninstalling does not always remove the injected code — check the theme for leftover snippets.

## What to fix, in order

1. **Remove apps you do not use**, and clear their leftover snippets from the theme.
2. **Fix the LCP element** — whatever PageSpeed named. Usually that means serving a correctly sized image, not preloading a video, and letting a light poster image carry the first paint.
3. **Resize images to their rendered size.** A 2000px image in a 600px slot is the most common single waste on a Shopify store.
4. **Defer what is not needed for first paint.** Chat widgets and review carousels do not need to load before the page is usable.
5. **Cut unused theme sections and fonts.** Two weights of one typeface is usually enough.
6. **Re-measure after each change**, so you learn which ones mattered.

Our [Shopify SEO checklist](/blog/shopify-seo-checklist) covers the speed items alongside the rest of the on-page work, since the two overlap more than people expect.

## When it is the theme rather than the content

Sometimes the honest answer is that the theme is the problem: an older or heavily customised one carrying years of additions, where every fix fights the template. At that point a lean rebuild costs less than another six months of patching — and [the signs a store needs a redesign](/blog/online-store-redesign-signs) are usually visible before the speed scores are.

## Frequently asked questions

**Why is my Shopify store slow on mobile but fine on desktop?** Mobile devices have less processing power and usually a slower connection, so the same JavaScript that parses instantly on a laptop takes far longer on a phone. Script-heavy stores show the widest gap, which is why an app audit is the first thing worth doing.

**Does Shopify hosting make stores slow?** Rarely. Shopify's infrastructure is not usually the constraint — the weight of apps, images and third-party scripts loaded onto the page is. Changing platform to fix a speed problem almost always moves the same weight somewhere else.

**Do Shopify speed apps work?** Be sceptical. Adding another script to solve a script problem is a strange trade, and most of what these apps do — lazy loading, deferring, preloading — a good theme already does or can be configured to do. Measure before and after if you try one.

**Does mobile speed affect Shopify SEO?** Core Web Vitals are a ranking signal and Google assesses mobile, so a slow mobile experience works against you twice: in ranking and in the conversion rate of the traffic you already have.

If your store is slow and you would rather someone found out why than guessed, that diagnosis is part of our [Shopify development](/shopify-development) work.
`,
  },
  {
    slug: "why-is-my-amazon-listing-suppressed",
    topic: "amazon",
    title: "Why Is My Amazon Listing Suppressed?",
    description:
      "Why is my Amazon listing suppressed? The usual causes, where to find the real reason in Seller Central, and what to fix in which order.",
    date: "2026-10-10",
    excerpt:
      "A suppressed listing vanishes from search while its page still loads, which is why sellers miss it for weeks. Here is how to find the reason and what to fix first.",
    content: `
A suppressed listing is the quietest expensive problem on Amazon. It disappears from search results while its page still loads perfectly on a direct link — so the seller checks the URL, sees the product, concludes everything is fine, and wonders why sales stopped.

We work on listing suspensions and suppressions for clients, and the first job is almost never fixing the listing. It is finding out what Amazon actually objected to, because the status message and the real cause are often two different things.

## Why is my Amazon listing suppressed?

It helps to separate three states that sellers all call "suppressed", because they have different causes and different fixes.

**Search suppressed.** The listing exists and is buyable by direct link, but Amazon has withdrawn it from search results. This is almost always a completeness or quality problem with the listing data itself.

**Inactive.** The listing is not buyable at all. Common reasons are a pricing error, an out-of-stock condition, or a policy issue.

**Blocked or removed.** Amazon has taken the listing down over a policy, safety or intellectual property matter. This is the most serious of the three and needs a different response.

Work out which one you have before changing anything. Editing your bullet points will not help a listing that is blocked for a compliance document.

## Where to find the real reason

Three places, in this order:

1. **Manage Inventory, Suppressed tab.** Amazon lists the affected ASINs and names the field it is unhappy with — often a missing image or attribute.
2. **The Listing Quality Dashboard.** Broader than the suppressed tab, and it surfaces quality alerts that have not yet tipped into suppression.
3. **Account Health.** If the cause is a policy matter rather than listing data, this is where it appears, and the problem is bigger than one ASIN.

If the suppressed tab names a field, you have a content problem and it is usually quick. If Account Health is showing something, start there instead.

## The usual causes of search suppression

- **The main image.** The most common single cause. A background that is not pure white, the product not filling enough of the frame, added text or props, or an image below the minimum resolution.
- **A missing required attribute.** Product type, variation theme, a category-specific field. These vary by category and change without announcement.
- **Title problems.** Too long for the category, or missing the elements Amazon expects for that product type.
- **Missing bullet points or description.** A listing with empty key fields can be treated as incomplete.
- **A pricing error.** Amazon compares your price against its own references, and a price it considers implausible can deactivate the offer.

Our [listing optimisation guide](/blog/how-to-optimize-amazon-listing) covers what each field should contain once you know which one is at fault. For the main image specifically, the rules are strict enough that generated or heavily edited imagery is a common trigger — we go through that in [what AI can do for product photography](/blog/what-can-ai-do-for-product-photography).

## When it is a compliance problem instead

Some listings are blocked rather than suppressed, and no amount of editing fixes them. Typical triggers are a category that requires documentation you have not supplied, a safety or certification requirement, a restricted claim in the copy, or a brand you are not authorised to list.

That last one is the inverse of the approval process in our [guide to getting a brand approved](/blog/how-to-get-amazon-brand-approval) — the same documentation chain, examined after the listing went up rather than before. If the block is a policy matter, it follows the appeal route rather than the edit route, and our guide to [what to do when an account is suspended](/blog/amazon-seller-account-suspended-what-to-do) covers how that works.

## What to fix first

1. **Identify the state** — search suppressed, inactive, or blocked.
2. **Read the named field**, if there is one. Fix exactly that, not everything.
3. **Fix the main image first** where images are involved, because it affects search and conversion at once.
4. **Change one thing, then wait.** Reindexing is not instant, and changing six fields at once means you will not know which mattered.
5. **Check the rest of the catalogue** for the same fault. Suppression caused by a category attribute rarely affects only one ASIN.

## Frequently asked questions

**How long does it take for a suppressed Amazon listing to come back?** There is no published timeframe. Once the underlying field is corrected the listing usually returns to search on its own, but it is a reindexing process rather than a switch, so allow for a delay before assuming the fix did not work.

**Can a suppressed listing still get sales?** Yes, which is part of why it goes unnoticed. The page remains reachable by direct link, so existing traffic, advertising and repeat customers can still buy — but the organic search traffic that normally finds it is gone.

**How do I tell a suppressed listing from lost ranking?** Search your exact product title while signed out. If the listing does not appear anywhere but its direct URL loads normally, it is suppressed. If it appears further down than it used to, that is a ranking problem and a different piece of work.

**Does suppression affect my account health?** Search suppression on its own is a listing quality matter rather than a policy breach, so it does not usually show in Account Health. Blocked or removed listings are different — those are policy matters and they do appear there.

If suppressions keep appearing and nobody has time to work out why, catalogue and listing health are part of our [Amazon account management](/amazon-account-management) work.
`,
  },
  {
    slug: "when-to-add-negative-keywords-amazon-ppc",
    topic: "amazon",
    title: "When to Add Negative Keywords on Amazon PPC",
    description:
      "When to add negative keywords on Amazon PPC: the evidence threshold to wait for, which match type to use, and when a negative does more harm than good.",
    date: "2026-10-09",
    excerpt:
      "Every guide tells you what negative keywords are. The harder question is when — too early and you block terms that would have converted, too late and you have paid for the lesson twice.",
    content: `
Every guide on this subject explains what a negative keyword is and how to add one. Almost none answers the question sellers actually have, which is when. Add them too early and you block search terms that would have converted on their fourth click. Add them too late and you have already paid for the lesson twice.

## When to add negative keywords on Amazon PPC

A negative keyword is a permanent decision made on temporary data, so the question is really: how much evidence is enough?

There is no universal click count, because the right threshold depends on your conversion rate and your break-even figure. But the logic is the same for everyone.

**Work out how many clicks you would normally expect before a sale.** If your listing converts at roughly one in ten, a search term with four clicks and no sale has told you nothing — that is a normal run of bad luck. The same term at forty clicks and no sale has told you something definite.

**Compare the spend against your break-even.** A term that has spent more than one unit of profit without a sale is losing money, and that figure comes from your break-even ACoS — our guide to [what a good ACoS looks like](/blog/what-is-a-good-acos) covers how to work it out.

Those two together give you a threshold that is specific to your product rather than borrowed from a blog.

## The four situations that justify a negative

**1. Spend with no sales, past your threshold.** The straightforward case. Enough clicks to be meaningful, no orders, money gone.

**2. Irrelevant traffic.** The search term describes a different product. These deserve a negative on the first sighting — no amount of clicks will make "dog shampoo" relevant to a car wax listing, and waiting for evidence is just paying for certainty you already have.

**3. Converting, but far above break-even.** Harder, and often mishandled. A term that converts at three times your break-even ACoS is not useless — it may be worth a lower bid in its own campaign rather than a negative. Only negate it if you have already tried the bid.

**4. Cannibalising your own exact-match campaign.** When a broad campaign keeps winning a term you already target exactly elsewhere, negating it in the broad campaign stops the two bidding against each other.

## When a negative does more harm than good

- **Before you have the clicks.** The most common error. Negating on two or three clicks throws away terms on the strength of noise.
- **On a term that converted once.** One sale is weak evidence, but it is evidence, and a negative is harder to undo than a bid reduction.
- **During a launch.** Early campaigns exist to discover terms. Aggressive negatives at that stage narrow the funnel before you know what is in it.
- **On a brand term that looks expensive.** Defending your own name often looks like waste in the report and is not.
- **Too broadly.** A negative phrase can silently block dozens of variants, including the ones that were working.

A negative removes a possibility permanently. A bid reduction tests the same idea reversibly. When in doubt, lower the bid first.

## Phrase or exact?

The match type matters more than the decision to negate.

**Negative exact** blocks precisely that search term and nothing else. Use it when the term is specifically unprofitable but its relatives may not be.

**Negative phrase** blocks anything containing that sequence of words. Powerful, and the usual cause of accidental damage — negating a phrase can take out variants you never checked.

Default to exact. Reach for phrase only when you have seen a whole family of terms behave the same way, and check what else contains that phrase before you commit.

## A sustainable rhythm

Weekly is enough for most accounts. The search term report over the last fourteen to thirty days, sorted by spend, descending. Look at the top spenders with no orders, apply the threshold, and act on that list only.

The temptation is to work the whole report. Do not — the long tail of one-click terms is where you do the most damage for the least gain.

## Frequently asked questions

**How many clicks before adding a negative keyword on Amazon?** There is no fixed number, because it depends on your conversion rate. Work out roughly how many clicks you normally need for a sale, and treat something comfortably above that with no orders as evidence. A term with a handful of clicks and no sale is usually noise, not a signal.

**Should negative keywords be phrase or exact match?** Exact by default, because it blocks only the term you have evidence about. Phrase match is for when a whole family of related terms is behaving the same way — it is more powerful and much easier to over-apply.

**Can negative keywords hurt Amazon PPC performance?** Yes, when applied too early or too broadly. Negatives are near-permanent, so a hasty one removes a term you might never think to test again, and a broad negative phrase can block variants that were converting.

**Do negative keywords lower ACoS?** They can, by removing spend that produces no sales, but they do not increase sales — so expect the ratio to improve while revenue stays flat. If you want ACoS down and volume up, the listing's conversion rate matters more than the negative list.

If weekly search-term work is the thing that never gets done, it is part of our [Amazon PPC management](/amazon-ppc-management).
`,
  },
  {
    slug: "why-have-my-amazon-sales-dropped",
    topic: "amazon",
    title: "Why Have My Amazon Sales Dropped Suddenly?",
    description:
      "Why have my Amazon sales dropped suddenly? The five causes to check, in the order worth checking them, before you touch a bid or a price.",
    date: "2026-10-08",
    excerpt:
      "Sales fall off a cliff and the instinct is to cut prices or raise bids. Almost always it is one of five things, and four of them are not about advertising at all.",
    content: `
Sales fall off a cliff overnight and the instinct is to do something — drop the price, raise bids, launch a coupon. That instinct is usually wrong, because it treats a symptom you have not diagnosed yet, and because four of the five common causes have nothing to do with advertising.

## Why have my Amazon sales dropped suddenly?

When we look at a sudden drop on a client account, we work through the same five things in the same order. The order matters: it runs cheapest-to-check and most-likely first, and each step rules something out before you spend money on the next.

1. **Have you lost the Buy Box?**
2. **Is a listing suppressed?**
3. **Is stock out, or stuck?**
4. **Have the ads stopped?**
5. **Is there an account health issue?**

Work down it before changing anything. A price cut applied to a suppressed listing achieves nothing except a smaller margin when the listing comes back.

## 1. The Buy Box

The most common cause, and the easiest to miss, because the listing still looks fine. If you are not winning the Buy Box, traffic arrives and converts to someone else.

Two things typically take it:

- **A competitor undercutting you**, including Amazon itself on some ASINs.
- **Going out of stock**, which can cost the Buy Box even after stock returns.

Check the listing while signed out, on the ASINs that actually matter rather than the whole catalogue. If the Buy Box has moved, nothing further down this list is your problem yet.

## 2. A suppressed listing

A listing can be suppressed without any notification a busy seller would notice, and the effect is immediate — it stops appearing in search while still being reachable by direct link, which is why sellers check the URL, see the page, and conclude the listing is fine.

Common triggers are a main image that breaks the rules, a missing required attribute, a restricted word, or a pricing error. Our guide to [why an Amazon listing gets suppressed](/blog/why-is-my-amazon-listing-suppressed) goes through each, and where to find the real reason in Seller Central.

## 3. Stock

Two distinct failures here, and the second catches people out.

**Out of stock** is obvious once you look, though the ranking damage outlasts the stockout.

**Stuck in FBA** is the quieter one — inventory received but not yet available, or held at a fulfilment centre, or reserved. The dashboard shows units you cannot actually sell.

## 4. The ads

Only now is it worth looking at advertising, and the first questions are not about bids:

- **Has a campaign been paused?** By someone, or by Amazon.
- **Has the daily budget run out early?** Spend that stops at midday means no sales for half the day.
- **Has the payment method failed?** It stops everything at once, which is exactly what a sudden drop looks like.

If the ads are genuinely running and spend is flat, then bids and ACoS are worth examining — our guide to [what a good ACoS looks like](/blog/what-is-a-good-acos) covers that, and the break-even figure is what tells you whether to raise bids or hold.

## 5. Account health

Last, because it is least common, and because the symptoms are usually broader than one ASIN. Open Account Health and look for policy warnings, metric breaches or restricted ASINs. If something there is live, that is the problem, and it needs resolving before anything else is worth doing.

## What to do once you have found it

Change one thing. The temptation after a drop is to fix everything at once — new price, new bids, new images, a coupon — and the result is that a week later you have no idea which change mattered or whether the original cause ever went away.

Note the date the drop started, too. Lining it up against what changed that day on your account, on your competitors' listings, or in the calendar answers the question faster than any amount of analysis.

## Frequently asked questions

**Why did my Amazon sales drop overnight?** An overnight fall usually points at something binary rather than gradual: the Buy Box moving, a listing being suppressed, a campaign pausing or a payment method failing. Gradual declines are more often ranking, seasonality or competitive pressure. The shape of the drop tells you where to look first.

**Can losing the Buy Box stop sales completely?** On a shared listing, close to it. The Buy Box is where the overwhelming majority of orders come from, so losing it on a competitive ASIN can look identical to the listing being removed.

**Is a sales drop always something I have done?** No. Seasonality, a competitor's promotion, a new entrant on your ASIN or an Amazon change can all do it with nothing wrong on your side. That is exactly why diagnosing before acting matters.

**How do I tell a suppressed listing from lost ranking?** A suppressed listing disappears from search results but still loads on its direct URL. Lost ranking means the listing is findable, just further down. Searching your own exact product title while signed out distinguishes them in a few seconds.

If a drop like this is eating your week and you would rather someone else worked through it, diagnosis is part of our [Amazon account management](/amazon-account-management) work.
`,
  },
  {
    slug: "amazon-plan-of-action-template",
    topic: "amazon",
    title: "Amazon Plan of Action Template for UK Sellers",
    description:
      "An Amazon plan of action template for UK sellers: the three sections Amazon expects, what belongs in each, and what gets appeals rejected.",
    date: "2026-10-07",
    excerpt:
      "A plan of action is the whole appeal. Here are the three sections Amazon expects, a skeleton to work from, and the mistakes that get plans sent back.",
    content: `
A plan of action is not a covering letter for your appeal. It is the appeal. Amazon's reviewers are looking for three specific things, and a plan that does not supply them in a recognisable shape is sent back regardless of how reasonable it sounds.

This is a structural guide, not a case study. We are not publishing a client's plan of action — the documents are confidential, and a borrowed root cause is worse than none, because the one thing a reviewer can spot instantly is a plan describing someone else's business. If you have not read the notification carefully yet, start with [what to do when an Amazon account is suspended](/blog/amazon-seller-account-suspended-what-to-do).

## Amazon plan of action template

Every plan of action does three jobs, in this order.

**1. Root cause.** The [policy or metric] issue occurred because of [specific operational failure]. Specifically, [what happened, with dates or ASINs].

**2. Corrective actions — what we have already done.**

- [Completed action], done on [date].
- [Completed action], done on [date].
- [Evidence attached for each].

**3. Preventive measures — what stops this recurring.**

- [Process change], owned by [role], checked [frequency].
- [Process change], owned by [role], checked [frequency].

That is the whole template. The difficulty is never the format — it is filling it in without hedging.

## Section 1: Root cause

One specific operational failure. Not "a misunderstanding", not "an oversight by a team member", and not a description of the symptom.

"Our listing was flagged for a safety claim" is the symptom. "We copied supplier marketing copy into the bullet points without checking it against Amazon's restricted claims list" is a root cause — it names the process that failed, which is the only thing a preventive measure can attach to.

If your root cause does not explain why the process allowed it, you have not found it yet.

## Section 2: Corrective actions

Past tense, completed, specific. Each line should be something a reviewer could verify:

- What you removed, edited, withdrew or refunded.
- When you did it.
- What evidence you are attaching for it.

Anything still in progress belongs in section 3, not here. Listing a corrective action you have not finished is one of the quickest ways to lose credibility.

## Section 3: Preventive measures

This is where most plans fail, because sellers write intentions instead of processes. "We will be more careful with product copy" is an intention. A preventive measure has a mechanism:

- **A check that exists** — a step in a documented process, not a resolution.
- **A person or role that owns it.**
- **A frequency** — per listing, weekly, at onboarding.

If a measure would still be true when nobody does anything, it is not a measure.

## What to attach

Evidence does more than prose. Depending on the reason, that usually means invoices from an authorised source in your business name, supplier correspondence, screenshots of the changed listing or the new internal process, and the relevant Amazon case IDs.

Make sure the business name, address and tax details on every document match your Seller Central account exactly. Mismatched paperwork is one of the most common reasons submissions fail — the same problem that sinks brand approval applications, as covered in our [guide to getting a brand approved](/blog/how-to-get-amazon-brand-approval).

## What gets a plan of action rejected

- **Arguing the decision.** The plan is not the venue, even when you have a point.
- **A generic template left generic.** A plan that could describe any seller describes none.
- **Length instead of substance.** Reviewers read a lot of these. Three clear sections beat six pages.
- **Mixing the sections.** Preventive measures in the root cause, intentions in the corrective actions.
- **No evidence.** A plan with nothing attached is an assertion.

## Frequently asked questions

**What is a plan of action on Amazon?** It is the document Amazon asks for when appealing a suspension, a listing removal or an account health issue. It has to state the root cause of what happened, the corrective actions you have already completed, and the preventive measures that stop it recurring. Those three elements are what the reviewer is looking for.

**How long should an Amazon plan of action be?** Shorter than most sellers expect. One page covering the three sections clearly, with evidence attached, is usually stronger than several pages of context — the reviewer is checking whether the three elements are present and specific, not reading an essay.

**Can I use a plan of action template I found online?** Use one for the structure, never for the content. A template tells you what shape the document takes; the root cause and preventive measures have to describe your actual operation, and a reviewer can spot generic text immediately.

**Do I need someone to write it for me?** Not necessarily — the structure is public and the facts are yours. Help is worth it when you cannot identify the root cause, when the evidence chain is complicated, or when a previous submission has already been rejected and you are not sure why.

We work on suspension and listing cases as part of our [Amazon account management](/amazon-account-management) work. If you are in one, send us the notification and the documentation you hold, and we will tell you plainly what we think is possible — including when we think it is not.
`,
  },
  {
    slug: "amazon-seller-account-suspended-what-to-do",
    topic: "amazon",
    title: "Amazon Seller Account Suspended? What to Do First",
    description:
      "Amazon seller account suspended? What to do first, what Amazon is actually asking for, and what the outcome of an appeal depends on.",
    date: "2026-10-06",
    excerpt:
      "A suspension notice is alarming and deliberately vague. Here is how to read it, what Amazon is actually asking for, and the mistakes that make an appeal harder than it needs to be.",
    content: `
The first hour after a suspension notice is when most of the damage gets done — not by Amazon, but by the seller. Multiple cases opened at once, an emotional reply, a second account created "just to keep trading". All of it makes the position worse.

This is what the process actually involves and what the outcome depends on. It is not a promise of reinstatement, from us or anyone else.

## Amazon seller account suspended: what to do first

1. **Read the notification properly.** It names a reason, and the reason determines everything that follows. A performance suspension and an authenticity suspension need completely different responses.
2. **Open Account Health.** It shows what Amazon is measuring, which policy it says you breached, and which ASINs or metrics are involved.
3. **Open one case, not five.** Several open cases on the same issue get merged or closed, and a thread that reads as panic does not help.
4. **Do not create another account.** Operating a second selling account while suspended is itself a policy breach, and it turns a recoverable situation into a harder one.
5. **Stop and gather before you write.** The first submission matters more than the second. Everything you need — invoices, supplier details, correspondence — should be in hand before you reply.

## Three different things get suspended

Sellers use "suspended" for all of them, but they are distinct problems, and we work on all three for clients.

**The account.** Selling privileges are gone, funds are usually held, and the notice points at a policy or a performance metric.

**A listing.** The account trades on, but one ASIN is blocked or removed. Often an image, a claim, a restricted word or a safety requirement.

**A brand.** Your right to list a particular brand is withdrawn, commonly over authenticity or authorisation. This is the inverse of the problem in our [guide to getting a brand approved](/blog/how-to-get-amazon-brand-approval) — the same documentation chain, examined after the fact rather than before.

Work out which one you have before doing anything else. The three are addressed in different places with different evidence.

## What Amazon is actually asking for

Almost every appeal comes down to three things, whether or not the notice says so:

- **A root cause.** What actually happened, specifically. Not "a misunderstanding".
- **What you have already done about it.** Past tense, completed.
- **What stops it happening again.** A process change, not an intention.

Evidence carries this, not tone. Invoices from an authorised source, in your business name, with details matching your account. Correspondence showing what you did. Screenshots of the process you have changed.

Those three elements are the plan of action Amazon wants — our [Amazon plan of action template](/blog/amazon-plan-of-action-template) sets out what belongs in each section.

## What makes an appeal weaker

- **Arguing that Amazon is wrong.** Even where you have a case, the appeal is not the venue.
- **A vague root cause.** If the cause is not specific, nothing downstream is credible.
- **Mismatched paperwork.** A name, address or tax detail that does not match the account is one of the most common reasons submissions fail.
- **Promising rather than proving.** "We will be more careful" is not a preventive measure.
- **Volume.** A long appeal is not a strong appeal.

## What the outcome depends on

Being honest about this matters more than reassurance.

It depends on **the reason** — a metric breach you can document is a different proposition from an authenticity complaint. It depends on **the evidence you can actually produce**, which is often the real constraint. It depends on **your account history**. And it depends on **whether the underlying problem is fixed**, because a reinstated account that repeats the issue gets suspended again.

Some cases are not recoverable. Anyone telling you otherwise before reading your notification and your documentation is guessing.

## Frequently asked questions

**How long does an Amazon suspension last?** There is no published timeframe, and it varies by reason and by how complete the first submission is. Amazon does not commit to a decision window on appeals the way it does on some other reviews, so plan for the possibility of several rounds rather than a date.

**Can you get a suspended Amazon seller account back?** Often, yes — but it depends entirely on the reason and the evidence, and some cases are not recoverable. Treat any specific success rate you are quoted with suspicion, including ours: we do not publish one, because the figure would say more about which cases were taken on than about the work.

**What is the difference between suspended and deactivated?** Amazon's wording has shifted over time, and "deactivated" now appears in many notices where sellers would say "suspended". What matters is the stated reason and what is being asked for, not which word is used.

**Should I open a new account while I appeal?** No. Operating a second selling account while one is suspended breaches policy on its own and can affect related accounts. It is one of the few steps that reliably makes things worse.

We work on suspension and listing cases as part of our [Amazon account management](/amazon-account-management) work. If you are in one, send us the notification and the documentation you hold, and we will tell you plainly what we think is possible — including when we think it is not.
`,
  },
  {
    slug: "how-long-should-a-product-video-be",
    topic: "web",
    title: "How Long Should a Product Video Be?",
    description:
      "How long should a product video be? Sensible lengths by placement, what actually decides it, and why most product videos run too long.",
    date: "2026-10-05",
    excerpt:
      "There is no single right length — it depends on where the video sits and what the shopper still does not know. Here are workable lengths by placement, and how to cut a long one down.",
    content: `
Short answer: shorter than you think, and the right number depends entirely on where it sits. A video doing a job on a product page has a different length from one introducing a brand on a home page, and neither has much to do with how long you spent making it.

## How long should a product video be?

There is no universal figure, but there are sensible ranges by placement:

- **Product page or listing video.** Fifteen to thirty seconds. The shopper is already interested; the video exists to settle one remaining doubt — scale, material, how it assembles, what is in the box.
- **Home page hero.** Ten to twenty seconds, looping. It is scene-setting, not explanation, and it competes with the visitor's reason for arriving.
- **Paid social.** Under fifteen seconds, with the point made in the first three. Attention is rented here, not given.
- **How-it-works or assembly.** As long as the task takes, and no longer. This is the one case where sixty seconds can be correct.

The twenty-second piece we made — described in our [guide to making product videos with AI](/blog/can-you-make-amazon-product-videos-with-ai) — was built for the top of a page, and twenty seconds was about right for a loop that had to introduce a brand rather than explain a product.

## What actually decides the length

Not the format, and not a best-practice number. Two things:

**What the shopper still does not know.** Write that down first. If it is one thing, you need fifteen seconds. If it is four things, you need either a longer video or — usually better — four shorter ones.

**Whether anything has to be demonstrated.** Showing a thing working takes the time it takes. Everything else compresses.

If you cannot say in a sentence what the video is for, length is not your problem yet.

## The first three seconds

Most product video is abandoned in the opening moments, so the opening cannot be a logo animation or a slow push onto a blank backdrop. Lead with the product, in use or in context, and let the branding arrive later.

This is also where the length argument usually resolves itself: a video that earns the first three seconds gets twenty, and one that does not would not have been watched at ten.

## Muted viewing changes the answer

Most of this is watched with no sound, which means the message travels as on-screen text — and text needs dwell time. A caption nobody can finish reading is worse than no caption.

Practically, that sets a floor: each line needs long enough to read comfortably, so the number of things you want to say sets a minimum length whether you like it or not. It is another argument for saying fewer things.

## How to cut a long one down

1. **Delete the intro.** Whatever it is, it is not earning its seconds.
2. **Cut to one message.** Anything secondary becomes its own video.
3. **Trim the holds**, not the content. Most overlong videos are correctly structured and too slow.
4. **Lose the outro.** The call to action is the page the video sits on, not a closing card.
5. **Watch it muted on a phone** and cut anything you skipped past.

## Frequently asked questions

**How long should an Amazon product video be?** Fifteen to thirty seconds suits most listing videos, because the shopper is already on the page and looking to resolve one specific doubt. Longer is defensible when the product genuinely needs demonstrating — assembly, installation, a technique — but Amazon has its own length limits per placement, so check the current specification before you edit to a target.

**How long should a Shopify product video be?** Similar for the product page: fifteen to thirty seconds. A home page hero works better shorter, around ten to twenty on a loop, partly for attention and partly because a hero video carries a page speed cost worth keeping small.

**Is a 60-second product video too long?** For a product page, usually yes, unless the whole minute is demonstration. For a how-it-works video it can be exactly right. Judge it by whether anything in the minute could be removed without losing the point.

**Does video length affect conversion?** It plausibly does, but we have no measurement of our own to offer and will not quote someone else's. If it matters to your store, test two lengths of the same video on the same page and watch your own numbers.

If you are working out which parts of your creative process are worth automating and which are not, that is where our [AI automation](/ai-automation) work starts — looking at what your team repeats each week and saying plainly where automation pays and where it does not.
`,
  },
  {
    slug: "add-product-video-to-shopify-home-page",
    topic: "web",
    title: "How to Add a Product Video to a Shopify Home Page",
    description:
      "How to add a product video to a Shopify home page: file size and format, how the theme handles it, mobile playback and page speed.",
    date: "2026-10-04",
    excerpt:
      "Putting a video on a Shopify home page is a theme and performance decision as much as a creative one. Here is what to check before you publish it, and what to check afterwards.",
    content: `
A video on the home page is the easiest thing in the world to add badly. The creative is the part people worry about; the part that causes trouble is file size, how the theme wraps it, and what happens on a phone on mobile data.

This is a practical checklist, not a case for video: we have no conversion measurement to offer and will not pretend otherwise.

## How to add a product video to a Shopify home page

We placed a twenty-second motion-graphics video — the AI-made piece described in our [guide to making product videos](/blog/can-you-make-amazon-product-videos-with-ai) — in the home page hero section of AWEX (awex.shop), a motorsport gear store on Shopify.

Broadly there are three routes, and they behave differently:

- **The theme's own video section.** Simplest, and the theme handles responsive sizing and the poster image for you. Your options are whatever the theme exposes.
- **A video block inside another section.** Useful when the video belongs beside copy rather than full-width.
- **Custom code or an embed.** Most control, most ways to hurt performance, and it stops being the theme's problem when something breaks.

Start with the native section unless it genuinely cannot do what you need.

## File size and format

Keep it boring: **MP4 with H.264** plays everywhere, and that matters more than squeezing out the last few per cent with a newer codec.

- **Strip the audio track** if it will play muted. It is dead weight on every load.
- **Cut the length before you cut the quality.** Twenty seconds compressed lightly beats ninety seconds compressed hard.
- **Export at the size it will display**, not at 4K for a slot that renders a few hundred pixels wide.
- **Check Shopify's current upload limit** before you build to a size it will reject.

We are deliberately not quoting a target file size: the right number depends on the slot, and a figure from a blog is a worse guide than your own speed test.

## How the theme handles it

Themes crop. A piece composed for a wide hero loses its edges in a square or tall container, and anything near the frame edge — a logo, a callout — is what goes. Check the rendered result at several widths rather than trusting the preview.

Also check what the theme does *before* the video is ready: a blank box, a colour block and a poster image are very different first impressions.

## Mobile behaviour

This is where most home page videos go wrong.

- **Autoplay requires muted.** Browsers block sound-on autoplay, so design for silence and carry the message in on-screen text.
- **iOS needs the inline playback attribute**, or the video takes over the screen in a fullscreen player. Good themes handle it; custom embeds often do not.
- **Set a poster frame.** It is what people see while the video loads, and on a slow connection it may be all they see.
- **Consider a static image on mobile instead.** A still that loads instantly can serve the visitor better than a video that arrives late.

## What it does to page speed

If the video sits in the hero, it is competing with your largest contentful paint, because the hero is almost always where LCP lives.

Worth being blunt about what we measured. After publishing on awex.shop, PageSpeed Insights reported a mobile Performance score of 43, with LCP at 14.1 seconds and FCP at 4.7 seconds. Desktop Performance came in at 57.

Two caveats matter. We did not record the scores before the video went on, so this is not a before-and-after and we are not claiming the video caused those figures — a Shopify home page carries plenty of other weight. And we have not yet confirmed whether the video is the LCP element, which is the first thing to establish before changing anything.

What it does show is that a hero video can sit alongside a real speed problem, and that "it looks fine on my laptop" is not a test.

- **Identify the LCP element first.** PageSpeed names it. Until you know, you are guessing.
- **Do not preload the video.** Let the poster image carry the first paint.
- **Lazy-load anything below the fold**, including video.
- **Test on a throttled mobile connection**, not on your desktop.

For the rest of the home page, our [Shopify SEO checklist](/blog/shopify-seo-checklist) covers the speed items that often matter more than the video does.

## What to check after publishing

1. **On a real phone, on mobile data** — not desktop, not wifi.
2. **Muted.** Does it still make sense with no sound?
3. **At three widths**, for cropping.
4. **Page speed, and which element is the LCP**, so you know what the video is actually costing you.

## Frequently asked questions

**Can you add a video to a Shopify home page without an app?** Yes. Most current themes include a video section or block, so an app is usually unnecessary for a single home page video. Apps earn their place for galleries, shoppable video or playback analytics.

**Should a Shopify home page video autoplay?** If it autoplays it must be muted, so it only works when the message survives silence. A poster frame with a play control is often the better choice, especially on mobile.

**Will a home page video slow down my Shopify store?** It can, particularly in the hero where it competes with the largest contentful paint. Keeping it short, not preloading it and using a light poster image are what keep the cost down — and the only way to know what it costs on your store is to measure, ideally before and after.

If you are working out which parts of your store work are worth automating and which need a person, that is where our [AI automation](/ai-automation) work starts — looking at what your team repeats each week and saying plainly where automation pays and where it does not.
`,
  },
  {
    slug: "what-can-ai-do-for-product-photography",
    topic: "amazon",
    title: "What Can AI Do for Product Photography?",
    description:
      "What can AI do for product photography? Where Amazon's main image rules stop it, and which jobs still need a real camera.",
    date: "2026-10-03",
    excerpt:
      "AI can clean up a product shot, swap a background and give you twenty variants. What it cannot do is invent a product you are selling. Here is where the line sits.",
    content: `
AI will do more for your product photography than most sellers expect, and less than the tools advertising it imply. The line between the two is not about quality — it is about whether the image still represents the thing in the box.

## What can AI do for product photography?

As with video, two different jobs get the same name.

**Editing photographs you took.** Removing a background, cleaning dust and scuffs, straightening, matching colour across a set, placing a cut-out product into a plausible scene. The product pixels came from your camera.

**Generating the product.** Describing the item and letting the model draw it. Convincing on screen, and for anything you are actually selling, the wrong tool — what it produces is a likeness, not a record.

Everything useful sits in the first category, and that choice is also why our own run of this went smoothly. Because we supplied the product images rather than generating them, the usual failure modes never appeared: no chewed background edges, no colour drift, nothing rendered upside down or garbled. Colour held up well. Against doing the same work by hand it was far faster — and the reason is the input, not the tool.

## Where Amazon's rules stop you

The main image is the strictest surface on the listing, and the rules are unforgiving of generated content:

- **Pure white background**, product filling most of the frame.
- **Nothing that is not in the box** — no props, no accessories you do not ship.
- **No text, logos, badges or borders** added to the image.
- **The product as it actually is.** Colour, finish and proportions have to match what arrives.

A generated main image fails the last point almost by definition. A background removal on your own photograph passes comfortably. That is the whole distinction, and it matters, because main-image violations suppress listings rather than merely annoying buyers.

Secondary slots allow more — lifestyle scenes, infographics, dimension callouts — but the honesty requirement does not relax. Our [listing optimisation guide](/blog/how-to-optimize-amazon-listing) covers what each slot is for.

## Where it genuinely helps

- **Background removal and replacement.** The most reliable win. One good shot becomes a compliant white-background main plus several scene variants.
- **Cleanup.** Dust, fingerprints, reflections, a scuffed corner on a sample unit.
- **Consistency across a range.** Matching lighting, angle and colour temperature across a catalogue shot over months.
- **Infographic assembly.** Dimension lines, callouts and benefit panels built around your own photograph.

## Where it still falls short

- **Texture and material.** Weave, grain, brushed metal, matte against glossy. Generated or heavily processed texture reads as plastic.
- **Colour accuracy.** The thing shoppers return products over. Ours held, because the colour came from a photograph — push the processing far enough and it will not.
- **Scale.** How big it is in a hand. Models guess, and guess wrong, and scale complaints are common in reviews.
- **Anything demonstrating the product.** If the image has to prove it works or fits, a real photograph does and a generated one does not.

## A workflow that stays compliant

1. **Shoot the product properly once.** Daylight, a plain backdrop, a phone on a tripod. Every later step depends on this file.
2. **Keep the original.** Never let an edited version become the only copy.
3. **Use AI for the surround, not the subject** — background, cleanup, layout, text.
4. **Check colour against the physical item**, not just on screen. This is the step people skip.
5. **Hold the main image to the strictest reading** of the rules, and put the creative work in the secondary slots.

## Frequently asked questions

**Can you use AI-generated images on Amazon?** Edited photographs of your own product are fine and routine — background removal is standard practice. Fully generated product images are a different matter: the main image must show the product as it actually is, so a drawn likeness risks a misrepresentation problem even when it looks better than the photograph.

**Does AI background removal break Amazon's image rules?** No. A pure white background is what Amazon asks for on the main image, and removing the background from your own shot is the normal way to get there. What matters is that the product itself is unaltered.

**Can AI make product photos look professional?** It can fix lighting, clean up blemishes and standardise a set, which closes most of the gap. It cannot compensate for a photograph that missed the detail a shopper needs — no amount of processing adds texture that was never captured.

**Do I still need a photographer?** For texture-led, colour-critical or demonstration-led products, usually yes, at least for the source images. For everything else, one careful session plus AI editing covers the catalogue.

If you are deciding which parts of your listing work are worth automating and which need a person, that is where our [AI automation](/ai-automation) work starts — looking at what your team repeats each week and saying plainly where automation pays and where it does not.
`,
  },
  {
    slug: "can-you-make-amazon-product-videos-with-ai",
    topic: "amazon",
    title: "Can You Make Amazon Product Videos With AI?",
    description:
      "Can you make Amazon product videos with AI? What the tools handle, where Amazon's rules bite, and when you still need a camera.",
    date: "2026-10-02",
    excerpt:
      "Short answer: yes, for some kinds of video. Here is what AI handles well, what it still gets wrong, and the Amazon rules that decide whether your video is usable at all.",
    content: `
Yes — for some kinds of product video, and not for others. That distinction is the whole answer, and most of the tools selling you on it skip past it.

## Can you make Amazon product videos with AI?

It depends on which of two very different jobs you are asking software to do.

**Generating footage from a prompt.** You describe the product and the software produces moving images of something resembling it. For ecommerce this is the risky end: an approximation of a product you are selling is a misrepresentation waiting to happen.

**Animating assets you already own.** You supply your own product photographs, logo, colours and copy, and the software handles movement, timing, captions and the different aspect ratios. The product on screen is your actual product, because it started as a photograph of it.

The second is motion graphics, and it is where AI is genuinely useful today. It is also the kind we have produced, using Claude Opus 5.5 and ChatGPT — short pieces built from a seller's existing images rather than generated from nothing.

To put that in concrete terms: a twenty-second motion-graphics piece took three to four hours end to end. The first render came back wrong in a specific way — it read as cartoon-style editing rather than the product look we were after. Rewording the prompt fixed it, and it took three generations at most to reach something usable. Logo placement and timing were the parts Claude Opus 5.5 handled well, and needed the least correction.

## Where Amazon lets video appear

The placement decides the format, so settle it first:

- **On the listing itself**, in the image block — this needs Brand Registry enrolment, the same gate as A+ Content.
- **Inside Premium A+ Content**, which has its own eligibility rules that Amazon changes from time to time.
- **In Sponsored Brands video ads**, which is advertising rather than the organic listing.

Each has its own aspect ratio, length limit and file requirements, and they move — check the current specification in Seller Central.

## The rules that decide whether AI footage is usable

1. **The product shown must be the product that ships.** Colour, finish, accessories, quantity. If the video shows a bundle and the buyer receives one item, that is a problem however the video was made.
2. **No claims you cannot support.** This catches a lot of generated video, because prompts tend to produce aspirational scenes — results, timescales, effects — that the listing itself is not allowed to claim.
3. **No promotional furniture.** Prices, badges, "best seller", review stars, competitor references. Easy to generate accidentally and a common rejection.

None of these are about AI. They apply equally to footage shot on a camera — AI just makes it easier to break them quickly.

## Where AI earns its place

- **Movement from stills.** Slow pushes, parallax and callouts built from photographs you have already paid for.
- **Captions and on-screen text.** Most listing video is watched muted, so text carries the message.
- **Scripting and sequencing.** Deciding what the thirty seconds should say and in what order — usually the part that is wrong, not the pictures.

## Where it still falls short

- **Hands, faces and interaction.** Anything showing a person using the product tends to look subtly wrong, and subtly wrong is worse than plain.
- **Materials and physics.** Fabric draping, liquid pouring, steam, powders — the shots that sell certain categories are the ones generated video handles least convincingly.
- **Demonstration.** If the point is to prove the product works, a real demonstration does that and a generated one does not.
- **Fine detail and scale.** Stitching, texture, and how big the thing actually is in a hand.

If your video's job is any of those, a camera is still the right answer — a phone, a window and an hour is often enough.

## A workable process

1. **Decide the placement first**, because it sets length and aspect ratio.
2. **Write the thirty seconds as words** before anything moves. If it does not work as a script, no amount of motion rescues it.
3. **Use your own photography wherever the product is on screen.** If those images are weak to begin with, fix them first — our [listing optimisation guide](/blog/how-to-optimize-amazon-listing) covers what Amazon expects from product images.
4. **Check it against the policy** for that placement: claims, bundle accuracy, promotional text.
5. **Watch it muted on a phone**, which is how most of it will be seen.

## Frequently asked questions

**Can you use AI-generated video on an Amazon listing?** There is no blanket prohibition on how a video was produced, but it still has to meet Amazon's content rules — the product shown must match what ships, with no unsupported claims and no promotional text. The safe route is animating your own product photography, because generated footage is where misrepresentation creeps in.

**Do you need Brand Registry to add video to a listing?** Yes for video in the listing's image block, the same enrolment that unlocks A+ Content. Advertising formats such as Sponsored Brands video sit outside the listing and have their own requirements.

**Is AI product video cheaper than filming?** It moves the cost rather than removing it: less on production, more on deciding what the video should say, sourcing usable stills and checking compliance. For any shot needing a real demonstration, you are filming anyway.

**Will AI-made video look obviously AI-made?** Motion graphics built from your own photographs generally do not, because every frame of the product is a real photograph. Fully generated scenes involving people, hands or materials often do.

If you are working out which parts of your creative process are worth automating and which are not, that is the kind of question our [AI automation](/ai-automation) work starts with — looking at what your team repeats each week and saying plainly where automation pays and where it does not.
`,
  },
  {
    slug: "how-to-get-amazon-brand-approval",
    topic: "amazon",
    title: "How to Get Amazon Brand Approval (A Real Case Study)",
    description:
      "What Amazon brand and category approval involves, and the 11 approvals we have secured for clients.",
    date: "2026-09-29",
    excerpt:
      "Gated brands and categories shut out sellers who have the demand but not the paperwork. Here is what approval involves, and the 11 we have secured for clients — including the ones declined first time.",
    content: `
Some of the most in-demand products on Amazon are also the hardest to sell. Beauty & Health is one of the strictest gated categories on the platform — Amazon requires sellers to prove they are an authorised, authentic source before a single listing goes live. Get that approval and a whole category opens up. Without it, the product simply isn't available to you, no matter how strong your account is.

This is what that process actually involves, and what it has looked like in practice across the approvals we have secured for clients — including the applications that came back declined the first time.

## The starting point: a working account, a locked category

The client was not new to Amazon. Their account was active and already selling in ungated categories with no issues — established history, no account health problems, no listing violations. What they did not have was access to a specific Beauty & Health brand they wanted to add to their catalogue.

That brand was gated. Amazon's gating system exists to stop counterfeit and unauthorised stock from reaching buyers in categories where safety and authenticity matter most — Beauty & Health sits firmly in that bracket alongside categories like supplements, medical devices and certain electronics. Sellers who want in have to prove, with documentation, that they have a genuine right to sell that specific brand.

The client had tried and been unable to get through it on their own. This is common — gating approval is not a form you fill in once, it is a documentation process Amazon's team scrutinises closely, and a single weak or mismatched invoice is often enough for a rejection.

## What "getting approval" actually involves

At a high level, Amazon brand approval for a wholesale account usually comes down to proving a genuine supply chain:

1. **Confirming the exact brand and category requirements.** Gating rules differ by brand and sub-category, so the first step is establishing exactly what Amazon will ask for on this specific listing.
2. **Sourcing valid invoices.** Amazon wants invoices from an authorised distributor or manufacturer, in the seller's name, showing enough volume and recency to look like a genuine ongoing supply relationship — not a one-off purchase.
3. **Matching every detail.** Business name, address and tax details on the invoice have to line up exactly with the seller's Amazon account. Mismatches are one of the most common reasons approval requests get rejected.
4. **Submitting through Seller Central's approval flow** and responding to any follow-up requests from Amazon's review team, which can come back asking for additional documentation.

For this client, we handled the process end-to-end: identifying the right documentation route, working with the invoice chain until it met Amazon's bar, and submitting until approval came through.

## What happened after approval

Once the brand was approved, the products were listed on the existing account. No relaunch was needed, no new account, no waiting period beyond the approval itself.

That is worth spelling out, because it surprises people who assume every Amazon growth story involves PPC. Wholesale doesn't run ads the way private label does — PPC is a private label lever, built around bidding for keywords on your own listings. A wholesale seller is usually reselling existing, already-indexed listings, so for that kind of account access to the brand is the lever, and the approval is what opens it.

## 11 brand and category approvals

Across client work we have secured 11 brand and category approvals in total, on the marketplaces where those accounts sell. The brands approved so far: Estée Lauder, Clinique, CeraVe, RYOBI, STANLEY, MOPAR, PowerA and Forever. Alongside those, one sub-category approval: Figurines. Estée Lauder was approved on three separate seller accounts. These came up inside the [Amazon account management](/amazon-account-management) work we already do for clients, rather than as a standalone service.

**On timing.** Amazon's stated decision window on these applications was 7 days. Several decisions came back faster than that — one submitted on 10 Oct was approved on 12 Oct, against an expected decision date of 17 Oct. That is what happened on those applications, not a turnaround to plan around; the stated window is the number to budget against.

**On declines.** Not every application was approved first time. Some came back declined and had to be resubmitted with corrected invoices and additional supplier documentation. That is the part most accounts of this process leave out, and it is the part that matters if you are planning for it: a decline is usually a document problem, and the second attempt is where the work actually sits.

Approval is confirmed at ASIN level. Once it comes through, the gated product becomes listable on that account.

## Why this matters for other sellers

The lesson isn't really about any one brand. It's that **the biggest constraint on a wholesale account's growth is often access, not marketing.** A seller can have a clean account, good supplier relationships and real demand waiting, and still be shut out of a category purely because the approval paperwork wasn't put together in a way Amazon accepts.

If you're sitting on a brand you can't get approved, or a category that keeps rejecting your application, that's usually a documentation and process problem — not a sign the brand is permanently out of reach. Getting a gated product listable is one piece of a much larger job, and the day-to-day of it — listings, catalogue, advertising, inventory and account health — is our [Amazon account management](/amazon-account-management) work.

## FAQ

**How long does Amazon brand approval usually take?**
It varies by brand and category. Straightforward cases with clean invoices can clear in days; cases requiring back-and-forth with Amazon's review team, or invoice corrections, can take several weeks.

**Can a seller with no account history get brand approval?**
Yes, account age isn't the main factor — the invoice documentation and its match to the seller's business details is. That said, an account with no health issues makes the review smoother.

**Does getting approved guarantee sales?**
No. Approval only unlocks the ability to list the brand — how well it sells still depends on demand, pricing and competition on that listing, same as any other product.

**Is brand approval a one-time process?**
It's typically per-brand, sometimes per-category. Approval for one brand doesn't automatically extend to a different gated brand, even within the same category.
`,
  },
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

## Working out your break-even ACoS

You need one figure: the percentage of the selling price that survives as profit before advertising. Work through it in order.

1. **Start with the selling price** the customer pays, excluding VAT or sales tax where that is not your revenue.
2. **Subtract the cost of goods** — what you pay your supplier per unit.
3. **Subtract inbound shipping and duty** as a per-unit figure.
4. **Subtract Amazon's referral fee**, a percentage of the sale price that varies by category.
5. **Subtract fulfilment costs** — FBA fees, or your own pick, pack and postage.
6. **Subtract storage and other per-unit costs**, with an allowance for returns where they are common.

As an illustration only: a product sells for £30 and £21 goes on goods, fees and fulfilment. The £9 left is 30% of the price, so break-even ACoS is 30%. Use your own figures rather than these.

Do this for your best sellers rather than the whole catalogue. A handful of products usually accounts for most of the spend.

## When a higher ACoS is the right choice

You do not always want the lowest possible ACoS. Running above your usual target can make sense when you are launching a new product and want early sales to help it rank, when you are defending your own brand name from competitors, or when you are clearing ageing stock that is costing you storage fees.

The key is that these are decisions you make on purpose, with a time limit.

## When a low ACoS is a problem

A very low ACoS looks like good news and frequently is not. It usually means bids are conservative enough that you are winning only the cheapest impressions — often the ones you would have won organically anyway.

The symptoms are easy to recognise: impressions well below what the category can support, budgets that never run out, a large share of impressions lost to bid, and flat sales volume alongside a comfortable-looking ratio.

If break-even is 30% and you are running at 8%, you have room. Raising bids on terms that already convert usually buys more volume at an ACoS still safely inside your margin. Profit is an amount of money, not a percentage, and protecting the ratio at the expense of volume is a common mistake.

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

## Frequently asked questions

**What does ACoS mean?** ACoS stands for Advertising Cost of Sales — the share of your advertised revenue that went on the advertising which produced it. In figures, that is ad spend divided by ad revenue, multiplied by 100. Sellers use it as a quick read on whether a campaign is paying for itself, although whether any particular figure is healthy depends on the product's margin.

**What is ACoS?** ACoS, or Advertising Cost of Sales, is your ad spend divided by the revenue Amazon attributes to those ads, shown as a percentage. It tells you what you paid in advertising for every pound of advertised sales. Because the denominator counts only sales traced to an ad click, organic sales sit outside it entirely.

**What is a good ACoS on Amazon?** A good ACoS is one below your break-even figure — the percentage of the selling price left as profit before any advertising. That makes the answer specific to each product rather than a number anyone can quote at you. The same figure can be comfortable for a high-margin product and loss-making for a thin-margin one.

**What is a good ACoS for Amazon ads?** It depends on what the campaign is there to do. For campaigns meant to be profitable today, aim below the break-even figure for that product. For a launch, a keyword test, clearing stock or defending your own brand name, running above break-even can be the right call, provided it is deliberate and has an end date.

**How do I lower my ACoS?** Start with the search term report and add negative keywords for anything spending without selling, then adjust bids on evidence rather than instinct. Moving converting search terms into their own exact-match campaigns makes their bids controllable. And look at the listing, because ACoS is a function of conversion rate: a page that converts better lowers ACoS without any change to a bid.

**How do I get a good ACoS on Amazon?** Start by working out your break-even ACoS, because "good" means below that figure and nothing else — there is no benchmark that transfers between products. Then set a target per campaign based on what it is for: below break-even for campaigns meant to be profitable now, deliberately above it for a launch or a keyword test. The tactics for closing the gap are the same ones that lower ACoS generally — cut non-converting spend, bid from the search term report, and improve the listing's conversion rate.

**Why is my ACoS so high?** Usually one of three things: you are paying for search terms that do not convert, your bids are above what the keyword can return, or the listing converts too poorly to carry the clicks it is buying. The search term report tells you which — look first at spend with no sales, then at what the converting terms actually cost. And a high figure is only a problem relative to your break-even ACoS, so check that before acting on it.

**What is the difference between TACoS and ROAS?** They measure different things and move in opposite directions. TACoS is ad spend divided by your total revenue, so it includes organic sales and tells you how dependent the whole product is on advertising — lower is generally better. ROAS is ad revenue divided by ad spend, the inverse of ACoS, and counts only sales traced to an ad — higher is better. Use TACoS to judge the product, ROAS or ACoS to judge the campaign.

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

Upload at high resolution so zoom works. If your category allows video, a short clip is worth adding. If you are weighing that up, our guide to [making Amazon product videos with AI](/blog/can-you-make-amazon-product-videos-with-ai) covers what the tools handle and what Amazon's rules allow.

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

And if sales have fallen rather than never arrived, work through [why Amazon sales drop suddenly](/blog/why-have-my-amazon-sales-dropped) before rewriting anything — a suppressed listing or a lost Buy Box looks like a copy problem and is not one.

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

This guide covers what A+ Content is, who can use it, the module types, some A+ Content examples described module by module, and the mistakes that make it work against you.

## What A+ Content is

A+ Content (formerly Enhanced Brand Content, and often written out as Amazon A Plus content) is a set of image and text modules that appear in the product description section of a listing. You build it from templates in Seller Central and attach it to one or more ASINs.

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

## Frequently asked questions

**What is A+ content on Amazon?** It is a set of image and text modules that replace the plain product description on a listing. You build it from templates in Seller Central and attach it to one or more ASINs. It does not replace the title, bullets or image gallery — it is there for the shopper who has scrolled past those and wants to be convinced.

**Who is eligible for A+ content?** Brand owners enrolled in Amazon Brand Registry, which requires a registered trademark or, in some regions, a pending application. Once you are enrolled, the A+ Content Manager appears in Seller Central under Advertising. Basic A+ Content is free; Premium has its own eligibility rules that Amazon changes from time to time, so check the current terms there.

**What makes a good A+ content example?** One that adds something the bullet points could not — comparison, context, detail or reassurance. The layouts that work pair short text with images that carry the point, keep the important words in the text fields rather than baked into pictures, and read as well on a phone as on a desktop. Repeating the bullets is the most common way to waste the space.

**Does A+ content help with conversions?** It is designed to, and it is why most brands build it, but measure it on your own listings rather than trusting a figure from a blog. Publish it, check it on a phone, and watch your conversion rate in your business reports over the following weeks. If nothing moves, the content is probably repeating the bullets rather than answering a question a shopper actually had.

**What do A+ Content examples look like?** Most fall into a handful of shapes: a single product led by its features, a range presented with a comparison chart, or a product that needs explaining before it sells. Each is built from the same template set — image header, image-and-text rows, a single image with a sidebar, comparison chart, technical specifications — arranged differently depending on what the shopper still needs to know. The three example layouts above walk through each shape in full.

**What is the difference between A+ Content and an A+ page?** In practice people use the two to mean the same thing. A+ Content is the set of modules you build and attach to an ASIN; an "A+ page" is usually just how people describe a product detail page once that content is on it. If someone is drawing a real distinction, it is worth asking which they mean — the content you build in Seller Central, or the listing the shopper sees.

## A practical way to start

If you have never built A+ Content before, do not try to fill every slot. Start with layout 1: a header image, a three-image feature row and a specifications module. Publish it, check it on your phone, and watch conversion for a few weeks. Then add a comparison chart if you have a range, or a how-it-works sequence if your product needs one.

Images do the work in A+ Content, so it is worth knowing what AI can and cannot do to them — our guide to [what AI can do for product photography](/blog/what-can-ai-do-for-product-photography) covers where editing your own shots is safe and where generated imagery is not.

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

The honest test is this: look at your search term report right now. If you cannot remember the last time you added negative keywords, the routine is already slipping, and the ads are costing more than they should. Knowing [when to add negative keywords](/blog/when-to-add-negative-keywords-amazon-ppc) matters more than knowing how, and it is the task that quietly stops happening when nobody owns it.

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

Ask which channel, who replies, and what the expected turnaround is for a normal question and for an emergency such as a suspended listing. It is worth knowing what that emergency involves before you are in one — our guide to [what to do when an Amazon seller account is suspended](/blog/amazon-seller-account-suspended-what-to-do) sets out the process and what the outcome depends on. If the agency is in a different time zone, ask when your working hours overlap. Some of the best Amazon consultant UK sellers use are overseas; the ones that work well are clear about when you can reach them.

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

The general rule: the further from the theme's defaults you want to be, the more it costs, which makes this one of the biggest levers on Shopify store development cost.

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

## Frequently asked questions

**How much does it cost to create a Shopify store?** There is no single figure, which is why this guide breaks the cost into parts rather than quoting one. The plan fee is fixed and published by Shopify; everything after it depends on how many products you have, how far from a stock theme the design needs to go, which apps you genuinely need, and who does the work. A store for a handful of products is a different job from a catalogue of hundreds.

**How much does it cost to set up a Shopify store with a developer?** It depends on the scope you agree, and the only sensible way to find out is to list what you need and ask for a fixed price against that list. A developer's time goes on theme customisation, product setup, payments, shipping and tax configuration, and testing, so the number moves with how much of each there is. Treat any quote given before anyone has asked how many products you sell as a price for a generic package.

**What affects Shopify store development cost the most?** The number of products, and how far you want to move from the theme's defaults. Product setup is the most underestimated task in any build, because every item needs copy, images, variants and inventory data. After those two come the number of marketplaces or regions you sell in, the apps or custom features you need, and the state of any existing store that has to be cleaned up or migrated first.

**What are the ongoing costs after launch?** The Shopify plan fee, any paid app subscriptions and payment processing fees on each sale, every month. On top of those, budget for the work a store needs to stay current: theme updates when Shopify changes the platform, new products and seasonal changes, and occasional fixes when an app update breaks something. Launch is not the finish line.

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

Once the plan is approved, a writing agent turns each idea into a draft. It writes in the tone it was given, keeps to the platform's length and style, and can produce variations for different channels from one idea. Some systems also generate or select images, or produce short scripts for video. Length is the decision people get wrong most often — our guide to [how long a product video should be](/blog/how-long-should-a-product-video-be) sets out workable lengths by placement.

The important word is draft. A good system does not post straight from the writing agent. It writes into a queue.

## How agents schedule and publish

A publishing agent takes approved posts and schedules them through the platforms' own tools or a scheduling service. It handles timing, spacing across channels, and the tedious parts such as resizing images and formatting links. After posting, it can collect basic engagement data and feed it back to the planning agent so future plans lean towards what worked.

This is the part that saves the most visible time. Logging into three platforms every morning becomes something that simply happens.

## Where people still review

AI agents are good at volume and consistency. They are not good at judgement about your specific business. So the sensible design keeps people at three points:

**Approving the plan.** A person checks the calendar before anything is written, catching topics that are wrong for the business or badly timed.

**Approving drafts.** Someone reads posts before they go out, or at least samples them. This catches factual errors, awkward tone and anything that could embarrass the business. Over time, as trust builds, the review can become lighter, but it should not disappear for anything public-facing.

**Handling replies.** Comments and messages from real customers should reach a real person. An agent can flag and summarise them, but it should not answer on the company's behalf without oversight. Where those messages turn out to be the same handful of questions over and over, that is a support problem rather than a content one, and [AI agents for customer support](/blog/best-ai-agents-for-customer-support) covers what can safely be answered without a person and what cannot.

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
- Adding video to the home page? Our guide to [adding a product video to a Shopify home page](/blog/add-product-video-to-shopify-home-page) covers what to check before and after publishing.

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

Slowness usually comes from accumulation: a theme patched with apps, oversized images, scripts left behind by tools you stopped using. Sometimes it can be cleaned up in place. Often the cheaper fix is to rebuild without the weight. If the symptom is speed rather than appearance, start with [why a Shopify store is slow on mobile](/blog/why-is-my-shopify-store-slow-on-mobile) — a slow theme is sometimes a redesign decision and sometimes just an app audit.

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
    slug: "best-ai-agents-for-customer-support",
    topic: "web",
    title: "Best AI Agents for Customer Support in the UK (2026 Guide)",
    description:
      "What AI support agents handle, where they work well and fall short, and what UK businesses should check before choosing one.",
    date: "2026-09-25",
    excerpt:
      "AI support agents answer the questions that repeat, at any hour — here is what they handle, where they fail, and how to work out whether one fits your business.",
    content: `
Every software company now sells something described as an AI agent for customer support — or for customer service, depending on the vendor's house style — and most of the marketing sounds identical. Underneath, the products differ enormously: in what they can resolve, in how they behave when unsure, and in how much of your own information they have been given.

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

Be sceptical of anyone who tells you an agent handles all of your customer service.

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

Three things matter more for a UK customer service team than the generic sales material suggests.

**Where the data sits.** Customers ask, and your own obligations depend on the answer. You do not need to be an expert, but you do need to know which regions your provider processes and stores conversations in, written down. If your business handles anything sensitive, take proper professional advice rather than relying on a vendor's assurance or a guide like this one.

**Tone and language.** Most agents are trained predominantly on American English and default to it. It shows in the spelling, in "reach out" and "shipping" where a British customer expects "get in touch" and "delivery", and in an enthusiasm that reads as insincere here. Check whether you can set tone and spelling, then read twenty real replies before letting it loose.

**Hours and holidays.** The agent runs continuously; your team does not. Decide what happens to an escalated conversation at eleven on a Saturday or during the August bank holiday: the customer should be told honestly when a person will reply, not left waiting for an answer that was never coming. Make sure the working calendar it uses is yours, bank holidays included.

## Do you need an agent, or just better automation?

Worth asking before you spend anything, because for plenty of businesses the honest answer is no.

A conversational agent suits you if customers arrive at all hours, in volume, asking questions that vary in wording. If that is not you — if enquiries come by email, in manageable numbers, in four or five recognisable types — then what you need is workflow automation rather than a chatbot: enquiries sorted and routed automatically, replies drafted from templates and your order data for somebody to check and send, follow-ups that chase themselves, and an alert when something has gone unanswered too long.

That is cheaper, simpler, easier to change, and carries none of the risk of software talking to customers unsupervised. It also saves more time than people expect, because most support load is not the conversation itself — it is looking things up, copying between systems, and remembering to follow up.

The same logic applies to the messages you send rather than receive. Order updates, review requests and post-purchase email sequences are a scheduling problem rather than an intelligence one, and belong with your [marketing automation](/marketing-automation) rather than with a support agent.

## Frequently asked questions

**What is the difference between AI customer support and AI customer service?** In practice there is none — the two phrases describe the same thing, and which one appears in the marketing is usually a matter of the vendor's house style. "Customer service" is the more common wording in the UK and tends to suggest the whole relationship with a customer, while "customer support" leans towards fixing problems and answering questions. When you are comparing tools, judge them on what they connect to and how they behave when unsure, not on which of the two words they use.

**Are AI agents suitable for UK customer service teams?** Yes, provided you check the three things the generic sales material tends to skip: which regions your conversations are processed and stored in, whether you can set British spelling and tone, and whether the working calendar the agent follows is yours, bank holidays included. Most agents default to American English, so read a batch of real replies before letting one loose on customers. Suitability also depends on volume — if enquiries arrive by email in manageable numbers and in a few recognisable types, workflow automation usually fits better than a conversational agent.

**Can an AI agent handle customer service outside business hours?** Yes, and answering at two in the morning is one of the clearest reasons to use one: the questions that repeat and have a definite answer — order status, returns policy, delivery times — get resolved without anyone reading them. What it cannot do is cover the conversations it escalates, because your team is not there to take them. Decide in advance what happens to an out-of-hours escalation, so the customer is told honestly when a person will reply.

**What happens when the AI agent cannot answer?** It should say so plainly and pass the conversation to a person, with the history attached so the customer does not have to start again. Ask to see that in a demo rather than taking it on trust, and check that you control what triggers it: certain topics, an unhappy tone, a direct request for a human, or two failed attempts. An agent that guesses instead, or that hides the escalation route to protect its resolution rate, costs more than the inbox time it saves.

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

Whether any given ACoS is good depends on your margin, which is a longer conversation than this post. Our guide to [what a good ACoS looks like](/blog/what-is-a-good-acos) covers break-even and how to work out your own target.

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

If you would rather have someone watching both and acting on them, our [Amazon PPC management service](/amazon-ppc-management) covers the weekly search-term and bid work with monthly reporting on both numbers, for sellers in the UK and US. And if you have not yet worked out your break-even figure, start with [our guide to a good ACoS](/blog/what-is-a-good-acos), because the target matters more than the number.
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
