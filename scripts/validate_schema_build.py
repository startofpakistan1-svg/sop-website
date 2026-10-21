"""Run the vocabulary check over the prerendered build output."""
import glob, json, os, re, sys
from collections import defaultdict

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import schema_vocab as vocab

ROOT = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))),
                    ".next", "server", "app")
files = sorted(glob.glob(ROOT + "/**/*.html", recursive=True))
print("%d prerendered pages\n" % len(files))

findings, nodes, bclists = defaultdict(list), 0, 0
for f in files:
    page = os.path.relpath(f, ROOT).replace("\\", "/")
    html = open(f, encoding="utf-8", errors="replace").read()
    for raw in re.findall(r'<script type="application/ld\+json">(.*?)</script>', html, re.S):
        d = json.loads(raw)
        nodes += 1
        if d.get("@type") == "BreadcrumbList":
            bclists += 1
        out = []
        vocab.check_node(d, "", out)
        for x in out:
            findings[(x[0], x[2], x[3], x[4] if len(x) > 4 else "")].append(page)

print("JSON-LD blocks parsed : %d" % nodes)
print("BreadcrumbList blocks : %d" % bclists)
print()
print("=== vocabulary violations ===")
if not findings:
    print("none")
for (kind, typ, prop, doms), pages in sorted(findings.items(), key=lambda kv: -len(kv[1])):
    print("%s  %s.%s  on %d page(s)  [valid on: %s]" % (kind, typ, prop, len(pages), doms))
    print("     e.g. %s" % ", ".join(sorted(pages)[:3]))
