// Thin wrapper around the gtag call set up in src/app/layout.js (G-23QJE9T2F2).
// Fails silently when gtag isn't there — ad blockers, SSR, or GA not yet loaded.
export function track(name, params = {}) {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", name, params);
  }
}
