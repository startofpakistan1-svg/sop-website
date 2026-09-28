"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";

// The chat widget is not needed for first paint, so it is code-split and
// mounted once the browser is idle. ssr:false keeps it out of the server HTML,
// which is why this wrapper is a client component — next/dynamic does not
// accept ssr:false inside a server component.
const ChatWidget = dynamic(() => import("./ChatWidget"), { ssr: false });

export default function ChatWidgetLazy() {
  const [ready, setReady] = useState(false);
  const started = useRef(false);

  useEffect(() => {
    const show = () => {
      if (started.current) return false;
      started.current = true;
      setReady(true);
      return true;
    };

    // Buttons elsewhere on the site open the chat with this event. If one
    // fires before idle, load the chunk first, then replay the event so the
    // widget's own listener — which only attaches on mount — receives it.
    const onOpen = () => {
      if (started.current) return;
      started.current = true;
      import("./ChatWidget").then(() => {
        setReady(true);
        requestAnimationFrame(() =>
          requestAnimationFrame(() =>
            window.dispatchEvent(new Event("sop:open-chat"))
          )
        );
      });
    };

    window.addEventListener("sop:open-chat", onOpen);

    const canIdle = typeof window.requestIdleCallback === "function";
    const id = canIdle
      ? window.requestIdleCallback(show, { timeout: 3000 })
      : setTimeout(show, 2000);

    return () => {
      window.removeEventListener("sop:open-chat", onOpen);
      if (canIdle) window.cancelIdleCallback(id);
      else clearTimeout(id);
    };
  }, []);

  return ready ? <ChatWidget /> : null;
}
