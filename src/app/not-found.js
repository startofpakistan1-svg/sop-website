import Link from "next/link";

export const metadata = {
  title: "Page not found — SOP",
};

export default function NotFound() {
  return (
    <section className="nf">
      <div className="wrap nf-inner">
        <div className="nf-code">404</div>
        <h1>This page took a wrong turn.</h1>
        <p>
          The page you&apos;re looking for doesn&apos;t exist, or it moved
          somewhere else. Here&apos;s where you might be headed:
        </p>

        <div className="nf-links">
          <Link href="/">Home</Link>
          <Link href="/services">Services</Link>
          <Link href="/portfolio">Our work</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>

        <div className="nf-actions">
          <Link className="btn btn-acc" href="/">Back to home</Link>
          <a
            className="btn btn-line"
            href="https://api.whatsapp.com/send?phone=923101375475"
            target="_blank"
            rel="noreferrer"
          >
            Message us on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}