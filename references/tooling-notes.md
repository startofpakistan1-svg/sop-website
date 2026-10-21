# Tooling notes

Things we have measured about the tools used on this project, and where they
mislead. Written so a future reader does not re-derive them or act on a wrong
reading. Not published — this sits outside `src/app` and `public`, so Next.js
does not serve it, and it is not in `src/app/sitemap.js`.

---

## Our schema validation passed an invalid property for six days

**Established 21 October 2026.** Found by Semrush Site Audit, not by us.

`breadcrumb: { "@id": ... }` was shipped in `f244918` on **28 nodes**: the
`Article` node on all 26 blog posts, and the `Service` node on
`/amazon-account-management` and `/amazon-ppc-management`. It went live with
the 15 October deploy and was removed on 21 October.

**Why it is invalid.** schema.org defines `breadcrumb` with
`domainIncludes: schema:WebPage` and nothing else. Walking `rdfs:subClassOf`
from each type we used:

| Type | Ancestors | `WebPage` among them? |
|---|---|---|
`Article` | Article → CreativeWork → Thing | **no** — `WebPage` is a *sibling* under CreativeWork |
`Service` | Service → Intangible → Thing | **no** — further away still |
`WebPage` | WebPage → CreativeWork → Thing | yes, trivially |

So the property was not inherited from anywhere. `Article` being "a page" in
the everyday sense is irrelevant; it is not a `WebPage` in the vocabulary.

**Structural validation cannot catch this, and did not.** The 15 October run of
`validate_schema.py` reported `problems: none`. It checked valid JSON,
`ListItem` shape, sequential `position`, and that every `@id` referenced was
defined somewhere. A property used outside its domain passes all four: the JSON
was valid, the crumbs were well-formed, and the `@id` resolved to a real
`BreadcrumbList`. **Nothing about being well-formed makes a property legal on a
type.** That is the whole gap, and it is now closed — see the next note.

**Do not treat a third-party issue count as the scope of the problem.** Semrush
flagged the 26 `Article` nodes and **missed the 2 `Service` nodes**, which are
invalid for exactly the same reason — its validator does not check `Service`
the same way. Acting only on what Semrush listed would have left two pages
wrong and the site looking clean. Re-derive scope from the vocabulary, not from
the tool that raised the flag.

**The fix was deletion, not addition.** The 32 standalone `BreadcrumbList`
scripts stay exactly as they are; Google reads them without needing a reference
from the `Article` or `Service` node, which is why those 32 validated fine
throughout. Adding a `WebPage` node to each page to carry the property legally
was considered and **rejected**: 28 new nodes across the site for no measurable
gain. Verified after the fix: 32 `BreadcrumbList` blocks still present, zero
violations.

---

## Schema validation now includes a vocabulary check

`scripts/schema_vocab.py` loads the published schema.org vocabulary
(`schemaorg-current-https.jsonld`, ~1.5 MB, cached beside the script and
gitignored) and checks every `(type, property)` pair against `domainIncludes`,
walking `rdfs:subClassOf` so genuinely inherited properties are accepted. It is
wired into `scripts/validate_schema.py` (live URLs) and
`scripts/validate_schema_build.py` (prerendered output in `.next`, no server
needed). Run the build one before deploying a schema change.

Two traps cost time while writing it; both produce *silent wrong answers*
rather than errors, so re-check them in any reimplementation:

1. **The graph carries external vocabularies.** `cmns-ge:Country` shortens to
   the same name as `schema:Country`, and indexing it replaced the real type's
   parents with an empty set — which made every inherited property on
   `Country` (including plain `name`) look invalid. Index only `schema:` nodes,
   and union rather than assign.
2. **The published file uses prefixed ids** (`schema:WebPage`), not full URLs.
   Stripping only on `/` leaves `schema:WebPage`, nothing matches anything, and
   **every property reports as unknown** — which reads like a parsing failure
   but silently hides real findings.

A clean run prints `none` under both the problems and vocabulary headings.
Treat `UNKNOWN` findings as a possible fault in the checker before treating
them as findings about the site.

---

## claude-seo drift: `h1_changed` cannot be trusted on this site

**Established 21 October 2026, against baseline id 3 (12 Oct) and id 6 (21 Oct).**

The `h1_changed` rule discards the whitespace-only text node that React leaves
between its `<!-- -->` marker and the next element, so it reads the home page's
H1 with the space missing.

The home page's live markup is:

```html
<h1>Your store never sleeps.<!-- --> <br/><span class="grad">Neither do we.</span></h1>
```

Two ways of extracting the text from that exact markup:

| Method | Result |
|---|---|
Strip comments, convert tags to a space | `'Your store never sleeps. Neither do we.'` — correct |
Strip comments, drop whitespace-only nodes, concatenate | `'Your store never sleeps.Neither do we.'` — what drift reports |

**Consequences, all three worth knowing:**

1. **The rule is blind to exactly the class of bug `c02d9f9` fixed.** That commit
   added `{" "}` before a `<br />` so the H1's text content read
   "sleeps. Neither" instead of "sleeps.Neither" — the rendering was never
   broken, only the text content that crawlers and screen readers consume.
   `h1_changed` scores the before and after at **100% similarity** and does not
   trigger.
2. **The stored baseline value for that field has never been accurate**, in
   baseline 3 or in baseline 6. It is not a record of what the page says.
3. **`content_hash_changed` was the only rule that caught the H1 edit.** Rely on
   the html hash for text-level changes, not on `h1_changed`.

Nothing is wrong with the site. Do not "fix" the H1 in response to a drift
report that shows `sleeps.Neither` — verify against the live markup first.

---

## claude-seo drift: baselines in use

Re-captured 21 October 2026 so that today's known-good state is the reference.
The previous set (ids 1–5, all 12 October) predated the 15 October deploy, so
every compare re-reported the same five known triggers and real drift would
have been lost inside them.

| Page | Baseline | Captured |
|---|---|---|
`/` | 6 | 2026-10-21 |
`/amazon-account-management` | 7 | 2026-10-21 |
`/amazon-ppc-management` | 8 | 2026-10-21 |
`/blog/what-is-a-good-acos` | 9 | 2026-10-21 |

All four were captured with `--skip-cwv`, and that is deliberate — see the next
note. All four compare at zero triggers as of capture.

---

## PageSpeed Insights lab data cannot measure changes on this site

**Established 15 October 2026.**

Two genuine PSI mobile runs on the unchanged home page, 88 seconds apart:

| | Run A | Run B |
|---|---|---|
Performance | 98 | 80 |
FCP | 0.96 s | 2.79 s |
LCP | 2.03 s | 4.32 s |

An 18-point and 2.3-second spread with nothing changed. Two consequences:

- **"Performance 80 / FCP 2.8 s / LCP 4.3 s" is not a baseline**, it is one
  sample from that distribution. It was retired on 21 October and should not be
  quoted as a before-figure.
- **Requesting PSI N times does not give N runs.** It caches: two of three
  requests returned an identical `analysis_timestamp` and identical metrics to
  four decimal places. Dedupe by `analysis_timestamp` before treating readings
  as independent.

CrUX field data would be the honest alternative, but the origin has
insufficient Chrome traffic and returns no data.

**Use transferred bytes per asset instead.** Those are stable to within a few
bytes across reads, and the project's byte baseline is recorded below.

---

## Byte baseline — 21 October 2026

Wire bytes, `Accept-Encoding: br, gzip`, no client-side decompression.
Unchanged from 15 October on every first-party asset.

| | Home page | `/blog/what-is-a-good-acos` |
|---|---|---|
First-party total | **250,784** | **246,731** |
of which core-js ‡ | 41,343 | 41,343 |
Modern-browser total ‡ | 209,441 | 205,388 |
`gtag/js` (third-party) | ~180,943 | ~180,943 |

‡ `0c0hxoamwjsbw.js` is core-js, served `noModule`. Modern browsers never fetch
it, so the modern-browser row is the one that describes real users.

**`gtag/js` is not byte-stable** — Google rebuilds it continuously. Three reads
on 21 October gave 180,945 / 180,945 / 180,940, and it grew ~1,375 bytes
(+0.8%) between 15 and 21 October with no change on our side. Treat a move
under about a kilobyte as noise; the row is there to detect whether the tag is
loaded at all, not to track small deltas.

---

## Reduced motion: two gaps, one fixed, one open

**Fixed in `4b1baba`.** `*{animation:none!important}` does not match
pseudo-elements, because the universal selector only matches elements. The rule
is now `*,*::before,*::after`. The minifier rewrites that as `*,:before,:after`,
which is equivalent — an omitted universal selector in a compound selector is
implicit — and was verified behaviourally with Playwright rather than by reading
the selector.

**Still open.** Nothing hides `.hub-pulse`'s counterpart cases beyond what is
already in place, and the redundant `animation:none` in the
`prefers-reduced-motion` block at around line 1193 of `globals.css` is dead but
harmless. Left alone deliberately: it works correctly, and tidying is not a
reason to reopen `globals.css`.

---

## Playwright: no browsers installed, use system Chrome

`claude-seo doctor` reports `browser_ready: true`, but
`%LOCALAPPDATA%\ms-playwright` had no browser binaries, so
`p.chromium.launch()` fails with "Executable doesn't exist". Launch with
`channel="chrome"` to use the system Chrome instead of running
`claude-seo setup`, which downloads ~150 MB.

The plugin's own `render_page.py` records only `msg.type == "error"`, so it
**misses console warnings entirely**. For a console review that includes
warnings, listen to every console type plus `pageerror` and `requestfailed`.

---

## GSC URL Inspection: intermittent TLS failures from this machine

**Observed 13 October 2026.** `gsc_inspect.py` returned
`[SSL: UNEXPECTED_EOF_WHILE_READING]` on 8 of the first 40 calls, and on 2 of 3
single-URL attempts at one point. The bundled `--batch` mode calls the API once
per URL **with no retry**, so a single pass reports those URLs as errors and
"connection failed" is indistinguishable from "not indexed".

Drive it in rounds that resubmit only the failures. All 40 URLs resolved by
round 2 that way. The same flakiness affects the Search Analytics calls.
