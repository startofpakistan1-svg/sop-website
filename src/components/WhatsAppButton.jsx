export default function WhatsAppButton() {
  const number = "923101375475";
  const message = encodeURIComponent(
    "Hi SOP, I found you on your website and I'd like to discuss a project."
  );

  return (
    <a
      className="wa-float"
      href={`https://api.whatsapp.com/send?phone=${number}&text=${message}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with SOP on WhatsApp"
    >
      <img src="/icons/whatsapp.svg" width="28" height="28" alt="" aria-hidden="true" />
      <span className="wa-label">Chat on WhatsApp</span>
    </a>
  );
}