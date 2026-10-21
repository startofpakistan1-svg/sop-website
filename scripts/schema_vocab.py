"""Schema.org vocabulary validity: is each property defined for the type it sits on?

Structural validation (valid JSON, ListItem shape, @id resolution) cannot catch
a property used outside its domain. This loads the published schema.org
vocabulary and checks every (type, property) pair against domainIncludes,
walking rdfs:subClassOf so inherited properties are accepted.
"""
import json, os, urllib.request

VOCAB_URL = "https://schema.org/version/latest/schemaorg-current-https.jsonld"
CACHE = os.path.join(os.path.dirname(os.path.abspath(__file__)), "schemaorg.jsonld")


def load():
    if not os.path.exists(CACHE):
        req = urllib.request.Request(VOCAB_URL, headers={"User-Agent": "schema-vocab"})
        with urllib.request.urlopen(req, timeout=120) as r:
            open(CACHE, "wb").write(r.read())
    return json.load(open(CACHE, encoding="utf-8"))


def short(x):
    """Any of 'https://schema.org/WebPage', 'schema:WebPage', {'@id': ...}
    -> 'WebPage'. The published vocabulary uses the prefixed form."""
    if isinstance(x, dict):
        x = x.get("@id", "")
    if not isinstance(x, str):
        return ""
    return x.rsplit("/", 1)[-1].rsplit(":", 1)[-1]


def listify(x):
    if x is None:
        return []
    return x if isinstance(x, list) else [x]


def build():
    """Index the vocabulary by short name.

    Only schema: nodes are indexed. The graph also carries external
    vocabularies (cmns-ge:, dtype:, …) whose short names collide with
    schema.org ones -- 'cmns-ge:Country' shortens to 'Country' and, if
    indexed, silently replaced schema:Country's parents with an empty set,
    which made every inherited property on it look invalid. Entries are
    unioned rather than assigned for the same reason.
    """
    g = load()["@graph"]
    domains, parents, classes = {}, {}, set()
    for n in g:
        nid = n.get("@id") or ""
        if not nid.startswith("schema:"):
            continue
        types = [short(t) for t in listify(n.get("@type"))]
        name = short(nid)
        if "Property" in types:
            domains.setdefault(name, set()).update(
                short(d) for d in listify(n.get("schema:domainIncludes")))
        if "Class" in types:
            classes.add(name)
            parents.setdefault(name, set()).update(
                short(p) for p in listify(n.get("rdfs:subClassOf")))
    return domains, parents, classes


DOMAINS, PARENTS, CLASSES = build()


def ancestors(t, seen=None):
    """t plus every supertype, transitively."""
    seen = seen or set()
    if t in seen:
        return seen
    seen.add(t)
    for p in PARENTS.get(t, ()):
        ancestors(p, seen)
    return seen


def check_node(node, path, out):
    """Walk a JSON-LD node tree, recording properties outside their domain."""
    if isinstance(node, list):
        for i, v in enumerate(node):
            check_node(v, "%s[%d]" % (path, i), out)
        return
    if not isinstance(node, dict):
        return

    types = [short(t) for t in listify(node.get("@type"))]
    known = [t for t in types if t in CLASSES]
    allowed = set()
    for t in known:
        allowed |= ancestors(t)

    for prop, val in node.items():
        if prop.startswith("@"):
            pass
        elif prop not in DOMAINS:
            out.append(("UNKNOWN", path, "/".join(types) or "(untyped)", prop))
        elif known and not (DOMAINS[prop] & allowed):
            out.append(("DOMAIN", path, "/".join(types), prop,
                        ", ".join(sorted(DOMAINS[prop]))))
        check_node(val, "%s.%s" % (path, prop), out)
