# SOP — documented first-hand experience

Internal reference for drafting blog posts and page copy. **Not published.** It lives
outside `src/app` and `public`, so Next.js does not serve it, and it is not in
`src/app/sitemap.js`.

Everything here is either already written in `src/data/posts.js` or was supplied directly
as verified fact. Nothing has been inferred, rounded or extrapolated.

**How to use it.** Each entry has three parts: what is documented, what is *not*
documented, and which post already uses it. The "not documented" list is the important
half — if a draft needs one of those facts, the draft flags the gap or leaves the passage
out. It does not fill it in.

**Reuse note.** Most of these details are already published in a specific post. Reusing one
elsewhere is fine, but the second use should be a short reference with a link to the post
that tells the story, not a retelling.

---

## 1. Amazon brand and category approvals

### Documented

- **11 brand and category approvals** secured for clients in total.
- Brands approved: **Estée Lauder, Clinique, CeraVe, RYOBI, STANLEY, MOPAR, PowerA,
  Forever**.
- One **sub-category** approval: **Figurines**.
- **Estée Lauder was approved on three separate seller accounts.**
- These arose inside existing Amazon account management work, not as a standalone service.
- **Timing.** Amazon's stated decision window on these applications was **7 days**. Several
  decisions came back faster: one submitted **10 Oct** was approved **12 Oct**, against an
  expected decision date of **17 Oct**.
- **Declines.** Not every application was approved first time. Some came back declined and
  had to be resubmitted with **corrected invoices and additional supplier documentation**.
- Approval is confirmed **at ASIN level**. Once through, the gated product becomes listable
  on that account.
- **One client case, described without identifying the client:** an established account,
  active and already selling in ungated categories, no account health problems and no
  listing violations, which could not get access to a specific **Beauty & Health** gated
  brand. They had tried and failed on their own. SOP handled it end to end — identifying
  the documentation route, working the invoice chain until it met Amazon's bar, and
  resubmitting until approval came through. After approval the products went onto the
  existing account: no relaunch, no new account, no waiting period beyond the approval.
- The account was **wholesale**, which is why the post states PPC was not the lever —
  wholesale resells already-indexed listings, so access to the brand was the constraint.

### Not documented — do not add

- **The marketplace.** The post deliberately says only "on the marketplaces where those
  accounts sell". Do not claim UK. Do not state US. This wording was a decision, not an
  oversight.
- **The year** of the 10 Oct / 12 Oct / 17 Oct dates. Use the dates without a year, or omit
  them.
- Client names, seller account names, Amazon case IDs.
- Revenue, order counts or client numbers. These were deliberately removed from this post.
- Success rate, average turnaround, or any approval guarantee. A stated window is the only
  timing figure available; the fast decisions are what happened, not a turnaround to plan
  around.
- Which of the 11 were declined first time, how many, or how many attempts any one took.
- Whether the Beauty & Health case is one of the 11 or separate. Not established.

### Already used in

- `how-to-get-amazon-brand-approval` — the whole post. This is the canonical home for all
  of the above.
- Cross-referenced as "the inverse of this problem" from
  `why-is-my-amazon-listing-suppressed`, `amazon-seller-account-suspended-what-to-do` and
  `amazon-plan-of-action-template` (the mismatched-paperwork point).

---

## 2. Amazon account health — suspensions, suppressions, sales drops

### Documented

- SOP **has handled and resolved** wholesale account suspensions, listing suspensions and
  brand suspensions for clients. The posts state all three are worked on.
- SOP **works on listing suspensions and suppressions** for clients, and the first job is
  finding what Amazon actually objected to, because the status message and the real cause
  are often different things.
- **Sudden sales drop — the diagnostic order SOP works through**, cheapest-to-check and
  most-likely first:
  1. Lost Buy Box — a competitor undercutting (including Amazon on some ASINs), or going
     out of stock, which can cost the Buy Box even after stock returns.
  2. A suppressed listing — often with no notification a busy seller would notice.
  3. Stock — out of stock, or stuck in FBA (received but not available, held at a
     fulfilment centre, or reserved).
  4. Ads — a campaign paused, the daily budget exhausted early, or a failed payment method.
  5. Account health — last, because it is least common and the symptoms are usually
     broader than one ASIN.
- SOP **does not publish a reinstatement success rate**, and the post says why: the figure
  would describe which cases were taken on more than the work done.

### Not documented — do not add

- **No single client case.** No named client, no specific cause, no document, no outcome,
  no timeline. There is nothing here to turn into a story.
- How many suspension cases, over what period, or how many were resolved.
- Any reinstatement promise, probability or implied likelihood.
- Any timeline for a resolution.

### Register to write in

Same as the brand approval post: process and experience, stated plainly. "We work on these
cases" is supportable. "We get accounts back" is not.

### Already used in

- `amazon-seller-account-suspended-what-to-do` — the three suspension types, and the
  no-success-rate position.
- `amazon-plan-of-action-template` — states outright that it is a structural guide, not a
  case study, and that client plans are confidential.
- `why-have-my-amazon-sales-dropped` — the five-step order above.
- `why-is-my-amazon-listing-suppressed` — the "find what Amazon objected to first" point.

---

## 3. AI creative — video and photography

### Documented

- **A twenty-second motion-graphics piece took three to four hours end to end.**
- **The first render came back wrong in a specific way:** it read as cartoon-style editing
  rather than the product look intended. **Rewording the prompt fixed it.**
- **Three generations at most** to reach something usable.
- **Claude Opus 5.5 handled logo placement and timing well.** Tools used were
  **Claude Opus 5.5 and ChatGPT**.
- Pieces are **built from a seller's existing images**, not generated from nothing.
- **Product images were supplied, not generated** — so the usual failure modes never
  appeared: no chewed background edges, no colour drift, nothing upside down or garbled.
  **Colour held up well.**
- Against doing the same work by hand, **it was far faster**.
- Twenty seconds suited the top of a page — a loop introducing a brand rather than
  explaining a product.

### Not documented — do not add

- **Any multiple or percentage for "faster".** "Far faster" is the claim. Not "3x", not
  "half the time".
- Any conversion, sales, engagement or view-through result for the video. There is none.
- Cost, price or a rate for the work.
- Video file size, format, codec, or mobile playback settings.
- Any measurement linking video **length** to conversion. The post says plainly that SOP
  has none and will not quote someone else's.
- How many videos have been produced in total.

### Already used in

- `can-you-make-amazon-product-videos-with-ai` — the three-to-four hours, the cartoon-style
  first render, the prompt fix, three generations, Claude Opus 5.5 on logo and timing.
- `what-can-ai-do-for-product-photography` — supplied-not-generated images and the failure
  modes that therefore did not appear.
- `how-long-should-a-product-video-be` — twenty seconds suiting the top of a page, and the
  explicit no-conversion-data position.
- `add-product-video-to-shopify-home-page` — the same video, as the thing being placed.

---

## 4. Shopify performance — AWEX

### Documented

- **AWEX** (`awex.shop`), a **motorsport gear store on Shopify**. The client has agreed to
  the store being named.
- The twenty-second AI-made motion-graphics video was placed in the **home page hero
  section**.
- **After publishing, PageSpeed Insights reported: mobile Performance 43, LCP 14.1s,
  FCP 4.7s. Desktop Performance 57.**
- SOP also handled the **full Shopify store setup** for this store: build, product
  catalogue and checkout, then supported the launch.

### Not documented — do not add

- **Whether the video is the LCP element.** Not confirmed. Do not state or imply it.
- **Before figures.** There are none, so **no before/after comparison** in any form.
- **Any causal claim** that the video caused the score, or that the score is attributable
  to any single change.
- File size, format or mobile playback settings for the video.
- Any later or improved score. The figures above are the only measurement.
- Any conversion, sales or engagement outcome.

### Check before naming the client

Permission to name the store was given for **Muhammad Haider**, owner of AWEX. The site's
testimonial record credits him as **"Haider Rana (Adv)"**, Owner, Awex Intl — and the
convention documented at the top of `src/data/testimonials.js` is that the name field is
"as the client wants to be credited", so that is the form he has already approved for
publication. **The two differ, so confirm which he wants before putting a personal name
into post prose.** No post currently names him at all; the posts name only AWEX and
awex.shop. See section 8.

### Already used in

- `add-product-video-to-shopify-home-page` — placement in the hero, and the PageSpeed
  figures with the "worth being blunt about what we measured" framing.
- `why-is-my-shopify-store-slow-on-mobile` — the same figures, presented as a real set
  rather than a hypothetical.
- `shopify-store-cost` — the full store setup, described as "a motorsport gear brand
  selling karting suits and gloves", linking to `/portfolio`.

---

## 5. AI automation — agent systems

Not one of the four areas originally listed, but documented in `posts.js`, so recorded here.

### Documented

- SOP **built a system of AI agents for an international client serving accounting firms**.
- The agents **plan, prepare and publish social media content** for those firms, **with
  review built into the process**.
- **What used to take hours of manual posting each week now runs on its own**, keeping the
  firms visible online **without adding staff**.

### Not documented — do not add

- The client's name, or the firms'.
- How many firms, how many posts, or any volume figure.
- How many hours, beyond the word "hours". No specific number is documented.
- Any engagement, follower or lead result.
- Which models or platforms the system runs on.
- Build cost, timeline or ongoing fee.

### Already used in

- `ai-social-media-automation` — the paragraph describing the build.

---

## 6. Store builds

Also outside the four areas, also documented in `posts.js`.

### Documented

- **A custom-coded storefront built in HTML, CSS and JavaScript for a retail client** — no
  theme, no page builder, layout shaped around the products.
- **A full Shopify store setup for a motorsport gear brand selling karting suits and
  gloves** (AWEX — see section 4): build, product catalogue, checkout, launch support.

### Not documented — do not add

- Any speed, conversion or sales figure for either build.
- Build cost or timeline.
- The retail client's name. The post says "a retail client" and links to `/portfolio`.

### Already used in

- `custom-website-vs-shopify` — the custom-coded storefront.
- `shopify-store-cost` — the Shopify build.

---

## 7. Published on /portfolio — named clients and figures

Second pass, from `src/app/portfolio/page.js`. Everything in this section is **already
public on the site**, which is not the same as being available for reuse in a post. Read
the warning at the end of this section before moving anything from here into a draft.

The page states its own rule: only work SOP has permission to show is listed, screenshots
are of the live projects, and where a client would rather not be named the entry describes
the work without identifying them.

### Documented

- **Standard Medical Store** (`standardmedicalstore.pk`) — a full WordPress store built
  from the ground up for a **Pakistani medical supplies retailer**: product catalogue,
  categories, ordering. **Maintained and run by SOP for four years since launch**, through
  every update, redesign and product expansion. Stated result: "Four years of continuous
  management since launch".
- **AWEX Motorsport** (`awex.shop`) — a full Shopify store for a motorsport gear brand
  selling **karting suits and gloves**: store build, product catalogue, checkout, then
  launch support. The page says **"the store went on to generate consistent sales for the
  client"** — qualitative, with no figure attached. See section 4 for the performance
  figures and section 6 for the build.
- **Amazon seller account management** — end-to-end management for **international
  clients**, including getting a **gated Beauty & Health brand approved for a wholesale
  seller**. The page states: **"Once approved, the listing generated £32,928 across 607
  orders in six months, entirely organic."** Stated result: "£32,928 in sales across 607
  orders on one seller account". The card links to
  `/blog/how-to-get-amazon-brand-approval`.
- **AI content ecosystem for accounting firms** — a system of AI agents built for an
  **international client serving CA firms**, planning, preparing and publishing social
  media content automatically; **what used to take hours of manual posting each week now
  runs on its own, without adding headcount**. No client named, no figure. Same project as
  section 5.
- **Khurmi Store** (`khurmistore.es`) — a custom-coded storefront built from scratch in
  **HTML, CSS and JavaScript**, no theme and no page builder, with full control over the
  design, fast load times, and a layout shaped around the products. This is the build that
  `custom-website-vs-shopify` describes as "a retail client" — **the post keeps it
  anonymous while the portfolio names it.** Follow the post's lead in post copy.
- The page's own hero describes the client base as **"clients in Pakistan, India, the UK
  and the US"**.

### Not documented — do not add

- Any figure for the AWEX store's sales. "Consistent sales" is the whole claim.
- Any figure, timeline or outcome for the AI agent system.
- Any figure for Khurmi Store or Standard Medical Store, including speed or conversion.
- Which client, account or marketplace the £32,928 relates to, beyond "one seller account"
  and "international clients".
- Whether the Beauty & Health approval on this card is one of the 11 in section 1.
- Build cost, monthly fee or contract length for any of the five projects.
- Any client's name beyond what the page already prints.

### The £32,928 figure — treat as ring-fenced

**This figure, the 607 orders, the six months and "entirely organic" were deliberately kept
out of `how-to-get-amazon-brand-approval`.** That post was rewritten specifically to remove
revenue, order counts and any marketplace claim, and the decision was made explicitly. The
figure living on `/portfolio` does **not** make it available to blog posts.

The same applies in the other direction: the portfolio card names the Beauty & Health
category and ties it to revenue, while the post describes the same work without either. Do
not reconcile the two by copying detail across. **Treat `/portfolio` as a separate
permission question, not a shared pool, and ask before moving any fact out of this
section.**

### Already used in

- `src/app/portfolio/page.js` — all five cards.
- `shopify-store-cost` links to `/portfolio` for the AWEX build;
  `custom-website-vs-shopify` links to it for the custom storefront.

---

## 8. Published in testimonials — named clients and their words

Second pass, from `src/data/testimonials.js`. These are **clients' own words**, shown
verbatim. The file's documented convention: `name` is "as the client wants to be credited",
quotes are "shown exactly as written", and `role` and `country` are omitted when not given.

### Documented

- **Haider Rana (Adv)**, Owner, Awex Intl, Pakistan — Shopify store, rating 5.
  "Build a shopify store . Excellent work with best communication and Skill."
- **Standard Medical Store**, Admin, Pakistan — web development, rating 5.
  "Great Team Quality service on Time delivery of product"
- **Sajjad**, Deliberate — web development and AI automation, rating 5. His quote states
  **"After two years, what stands out to me most is the consistency"**, and describes SOP
  as understanding the actual problem, suggesting better approaches, and turning an idea
  into something practical rather than building to spec and moving on.

### Not documented — do not add

- Any detail of the Deliberate work beyond "web development and AI automation". **No
  project, no system, no outcome** — the two-year relationship is the only documented fact,
  and it comes from the client, not from SOP's own records.
- A country or role where the file omits one. Sajjad has neither.
- Any paraphrase of a quote. If a quote is used, it is used verbatim.
- Any count of total clients or reviews, or an average rating.

### How to use these

A testimonial is the client's claim, not SOP's. **"A client of two years says X" is
supportable; "we have worked with Deliberate for two years on AI automation" asserts more
than the file documents.** Quote it or link to `/review`; do not convert it into a case
study.

### Already used in

- `src/data/testimonials.js`, surfaced by `src/components/Testimonials.jsx` on
  `/portfolio` and the review page. No blog post uses any of them.

---

## Standing rules for any post drawing on this file

1. **If a fact is not in this file, it is not available.** Leave the passage out and say so
   in the draft, rather than reaching for a plausible figure.
2. **No invented statistics, percentages, benchmarks, pricing, client names or results** —
   ever, including "typical", "average" and "industry standard" framings.
3. **Where a number is needed, explain how the reader derives it** from their own margin,
   costs or history.
4. **No promise or implied promise** of reinstatement, approval, a ranking or a conversion
   outcome.
5. **No success rates and no turnaround guarantees.** Stated Amazon windows are facts about
   Amazon, not commitments by SOP.
6. **Reactive-problem posts** (suspensions, suppressions, sales drops, approvals) are
   written in the register of `how-to-get-amazon-brand-approval`: experience and process,
   with the limits stated plainly.

---

## Adding to this file

As new cases come up, add them to the section they belong to, or open a new numbered
section if none fits. Keep the three-part shape every time — **what is documented, what is
not documented, which page or post already uses it** — because the middle part is what
stops a later draft filling a gap with something plausible.

Two habits worth keeping:

- **Record the decision, not just the fact.** Where something was deliberately excluded
  from a post, say so and say why, as sections 1 and 7 do. That is the part that is
  impossible to reconstruct later.
- **Note what a fact is evidence of.** A client's words, SOP's own measurement and a figure
  from a dashboard carry different weight, and a draft needs to know which it is holding.

### Sources

`src/data/posts.js`, `src/app/portfolio/page.js`, `src/data/testimonials.js`, and facts
supplied directly as verified. Nothing here is inferred.
