"use client";

import { useEffect } from "react";
import { track } from "@/lib/track";

// One delegated click listener for every WhatsApp, mailto: and tel: link on the
// site. Most of those links live in server components (pages that export
// `metadata` can't be client components), so attaching onClick to each one
// isn't possible without converting whole pages. This listens once, on the
// document, and works for links added later too. It never calls
// preventDefault, so links behave exactly as before.

// Where on the page the link sits, for the `location` param.
function whereIs(el) {
  const named = el.closest("[data-track-location]");
  if (named) return named.dataset.trackLocation;
  if (el.closest(".wa-float")) return "floating_button";
  if (el.closest(".chat-panel")) return "chat_widget";
  if (el.closest("footer")) return "footer";
  if (el.closest(".info-card")) return "info_card";
  if (el.closest(".cta")) return "page_cta";
  if (el.closest(".nav")) return "navbar";
  return "page_body";
}

export default function LinkTracker() {
  useEffect(() => {
    const onClick = (e) => {
      const a = e.target.closest?.("a[href]");
      if (!a) return;

      const href = a.getAttribute("href") || "";
      const params = { location: whereIs(a), page: window.location.pathname };

      if (href.includes("wa.me") || href.includes("api.whatsapp.com")) {
        track("whatsapp_click", params);
      } else if (href.startsWith("mailto:")) {
        track("email_click", params);
      } else if (href.startsWith("tel:")) {
        track("phone_click", params);
      }
    };

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
}
