"use client";

import { useEffect, useRef, useState } from "react";

const GREETING =
  "Hi — I'm SOP's assistant. Ask me about stores, Amazon accounts, or AI agents, and I'll point you the right way.";

const SUGGESTIONS = [
  "What do you charge?",
  "Can you manage my Amazon account?",
  "How long does a store take?",
];

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: "assistant", content: GREETING },
  ]);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const [nudge, setNudge] = useState(false);

  const endRef = useRef(null);
  const inputRef = useRef(null);

  // gentle nudge after a while, once per visit
  useEffect(() => {
    if (sessionStorage.getItem("sop-chat-seen")) return;
    const t = setTimeout(() => setNudge(true), 18000);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (open) {
      endRef.current?.scrollIntoView({ behavior: "smooth" });
      inputRef.current?.focus();
    }
  }, [messages, open]);

  const openChat = () => {
    setOpen(true);
    setNudge(false);
    sessionStorage.setItem("sop-chat-seen", "1");
  };

  const send = async (text) => {
    const content = (text ?? input).trim();
    if (!content || busy) return;

    const next = [...messages, { role: "user", content }];
    setMessages(next);
    setInput("");
    setBusy(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: next }),
      });
      const data = await res.json();
      setMessages([
        ...next,
        {
          role: "assistant",
          content:
            data.reply ||
            "Sorry — something went wrong. WhatsApp us at +92 310 1375475.",
        },
      ]);
    } catch {
      setMessages([
        ...next,
        {
          role: "assistant",
          content:
            "I couldn't reach the server. Message us on WhatsApp at +92 310 1375475.",
        },
      ]);
    } finally {
      setBusy(false);
    }
  };

  const onKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  };

  return (
    <>
      {/* LAUNCHER */}
      {!open && (
        <button
          className={`chat-launcher ${nudge ? "nudge" : ""}`}
          onClick={openChat}
          aria-label="Open chat with SOP's assistant"
        >
          <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
            <path
              fill="currentColor"
              d="M12 3C6.98 3 3 6.58 3 11c0 2.2 1 4.18 2.63 5.6-.1 1.2-.5 2.6-1.36 3.77-.17.23.02.55.3.5 1.9-.34 3.5-1.2 4.56-2.03 .9.23 1.86.36 2.87.36 5.02 0 9-3.58 9-8s-3.98-8-9-8z"
            />
          </svg>
          {nudge && <span className="chat-bubble">Need a hand?</span>}
        </button>
      )}

      {/* PANEL */}
      {open && (
        <div className="chat-panel" role="dialog" aria-label="Chat with SOP">
          <header className="chat-head">
            <div className="chat-id">
              <span className="chat-logo">
                <img src="/logo.png" alt="" />
              </span>
              <span className="chat-titles">
                <strong>SOP Bot</strong>
                <span>
                  <i className="dot-live" aria-hidden="true" />
                  Online · replies instantly
                </span>
              </span>
            </div>
            <button onClick={() => setOpen(false)} aria-label="Close chat">
              ✕
            </button>
          </header>

          <div className="chat-log">
            {messages.map((m, i) => (
              <div key={i} className={`msg ${m.role}`}>
                {m.content}
              </div>
            ))}

            {busy && (
              <div className="msg assistant typing" aria-live="polite">
                <span /><span /><span />
              </div>
            )}

            {messages.length === 1 && !busy && (
              <div className="chat-suggest">
                {SUGGESTIONS.map((s) => (
                  <button key={s} onClick={() => send(s)}>
                    {s}
                  </button>
                ))}
              </div>
            )}

            <div ref={endRef} />
          </div>

          <div className="chat-input">
            <textarea
              ref={inputRef}
              rows={1}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={onKeyDown}
              placeholder="Ask anything…"
              disabled={busy}
            />
            <button onClick={() => send()} disabled={busy || !input.trim()} aria-label="Send">
              <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
                <path fill="currentColor" d="M2 21l21-9L2 3v7l15 2-15 2z" />
              </svg>
            </button>
          </div>

          <div className="chat-foot">
            Prefer WhatsApp?{" "}
            <a href="https://wa.me/923101375475" target="_blank" rel="noreferrer">
              Message us there
            </a>
          </div>
        </div>
      )}
    </>
  );
}