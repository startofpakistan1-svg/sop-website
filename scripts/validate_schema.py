"""Validate every JSON-LD block on the live site, with a focus on BreadcrumbList.

Google's Rich Results Test has no public API, so this checks the things RRT
would flag structurally: valid JSON, required BreadcrumbList fields, sequential
positions, and — across the whole site — that every @id referenced somewhere
is defined somewhere.

It ALSO checks vocabulary validity via vocab.py: whether each property is
actually defined for the type it sits on. Structure alone cannot catch that.
The 15 October run reported "problems: none" while 28 nodes carried
`breadcrumb` on Article and Service, which schema.org defines only on WebPage.
Every ListItem was well-formed and every @id resolved, so all three structural
checks passed it. Semrush's Site Audit caught what this did not.
"""
import json
import os
import re
import sys
import urllib.request

# -I drops the script directory from sys.path; put it back for the sibling module.
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import schema_vocab as vocab   # schema.org vocabulary: is each property defined for its type?

SITE = "https://www.startofpakistan.com"
PAGES = sys.argv[1:]

defined, referenced, problems, summary = {}, {}, [], []
vocab_bad = {}   # (type, property, domains) -> [pages]


def fetch(url):
    req = urllib.request.Request(url, headers={"User-Agent": "schema-validator"})
    return urllib.request.urlopen(req, timeout=45).read().decode("utf-8", "replace")


def walk_ids(node, page, is_root=False):
    """Record @id as a definition when the node has a @type, else as a reference."""
    if isinstance(node, dict):
        if "@id" in node and isinstance(node["@id"], str):
            if node.get("@type"):
                defined.setdefault(node["@id"], []).append(page)
            else:
                referenced.setdefault(node["@id"], []).append(page)
        for v in node.values():
            walk_ids(v, page)
    elif isinstance(node, list):
        for v in node:
            walk_ids(v, page)


for url in PAGES:
    path = url.replace(SITE, "") or "/"
    try:
        html = fetch(url)
    except Exception as e:
        problems.append("%s: FETCH FAILED %s" % (path, e))
        continue

    blocks = re.findall(r'<script type="application/ld\+json">(.*?)</script>', html, re.S)
    types, bc_ok = [], None

    for raw in blocks:
        try:
            d = json.loads(raw)
        except Exception as e:
            problems.append("%s: INVALID JSON (%s)" % (path, e))
            continue
        types.append(d.get("@type"))
        walk_ids(d, path, is_root=True)

        bad = []
        vocab.check_node(d, "", bad)
        for b in bad:
            key = (b[0], b[2], b[3], b[4] if len(b) > 4 else "")
            vocab_bad.setdefault(key, []).append(path)

        if d.get("@type") == "BreadcrumbList":
            items = d.get("itemListElement") or []
            if not items:
                problems.append("%s: BreadcrumbList has no itemListElement" % path)
                continue
            for n, it in enumerate(items, 1):
                if it.get("@type") != "ListItem":
                    problems.append("%s: crumb %d @type=%r not ListItem" % (path, n, it.get("@type")))
                if it.get("position") != n:
                    problems.append("%s: crumb %d position=%r out of sequence" % (path, n, it.get("position")))
                if not it.get("name"):
                    problems.append("%s: crumb %d missing name" % (path, n))
                last = n == len(items)
                if not last and not it.get("item"):
                    problems.append("%s: crumb %d is not last but has no item" % (path, n))
                if last and it.get("item"):
                    problems.append("%s: last crumb carries an item (should be omitted)" % path)
            bc_ok = " > ".join(i.get("name", "?") for i in items)

    summary.append((path, types, bc_ok))

print("=== %d pages checked ===" % len(summary))
nobc = [p for p, t, b in summary if "BreadcrumbList" not in [str(x) for x in t]]
print("pages with a BreadcrumbList : %d" % sum(1 for _, t, _ in summary if "BreadcrumbList" in [str(x) for x in t]))
print("pages without one           : %d  %s" % (len(nobc), nobc if len(nobc) < 6 else ""))
print()
print("=== @id graph ===")
print("distinct @id defined   : %d" % len(defined))
print("distinct @id referenced: %d" % len(referenced))
dangling = {k: v for k, v in referenced.items() if k not in defined}
print("references with NO definition anywhere: %d" % len(dangling))
for k, v in list(dangling.items())[:10]:
    print("   %s   (referenced on %s%s)" % (k, v[:3], " …" if len(v) > 3 else ""))
print()
print("=== vocabulary validity (property defined for its type?) ===")
if not vocab_bad:
    print("none")
for (kind, typ, prop, doms), pages in sorted(vocab_bad.items(), key=lambda kv: -len(kv[1])):
    print("  %s  %s.%s  on %d page(s)" % (kind, typ, prop, len(pages)))
    if kind == "DOMAIN":
        print("        schema.org defines '%s' only on: %s" % (prop, doms))
    print("        e.g. %s" % ", ".join(sorted(pages)[:3]))
print()
print("=== problems ===")
if not problems:
    print("none")
for p in problems[:30]:
    print("  " + p)
