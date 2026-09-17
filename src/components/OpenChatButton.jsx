"use client";

export default function OpenChatButton({ label = "Try the assistant" }) {
  return (
    <button
      className="btn-orange"
      style={{ border: "none", cursor: "pointer", marginTop: 8 }}
      onClick={() => window.dispatchEvent(new Event("sop:open-chat"))}
    >
      {label}
    </button>
  );
}