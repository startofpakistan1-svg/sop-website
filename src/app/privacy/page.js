import Link from "next/link";

export const metadata = {
  title: "Privacy Policy — SOP | Start of Pakistan",
  description:
    "How Start of Pakistan collects, uses and protects the information you share through startofpakistan.com.",
};

export default function Privacy() {
  return (
    <>
      <section className="page-head">
        <div className="wrap">
          <h1>Privacy Policy</h1>
          <p>How we handle the information you share with us.</p>
        </div>
      </section>

      <section>
        <div className="wrap prose legal">
          <p className="legal-date">Last updated: 16 September 2026</p>

          <p>
            Start of Pakistan (&quot;SOP&quot;, &quot;we&quot;, &quot;us&quot;)
            operates startofpakistan.com. This page explains what information we
            collect when you use the site, why we collect it, and what we do
            with it.
          </p>

          <h2>Information you give us</h2>
          <p>
            When you fill in our contact form, we collect the details you enter:
            your name, email address, phone number, the service you&apos;re
            interested in, and your message. We only ask for what we need to
            reply to your enquiry.
          </p>
          <p>
            If you contact us by WhatsApp, email or phone instead, we hold
            whatever you choose to share in that conversation.
          </p>

          <h2>Information collected automatically</h2>
          <p>
            We use Google Analytics to understand how people find and use the
            site. It collects standard technical information such as the pages
            you visit, roughly where in the world you are, what device and
            browser you use, and how you arrived at the site. This is used in
            aggregate — we do not use it to identify individual visitors.
          </p>
          <p>
            Google Analytics sets cookies in your browser to do this. You can
            block or delete cookies through your browser settings, or install
            Google&apos;s opt-out browser add-on. The site works normally either
            way.
          </p>

          <h2>How we use your information</h2>
          <ul>
            <li>To reply to your enquiry and discuss your project</li>
            <li>To prepare quotes and proposals</li>
            <li>To deliver work you have hired us for</li>
            <li>To improve the website and understand what visitors need</li>
          </ul>
          <p>
            We do not sell your information, and we do not add you to marketing
            lists without you asking us to.
          </p>

          <h2>Who else handles your data</h2>
          <p>
            A small number of services help us run the site. Each of them only
            sees what they need to:
          </p>
          <ul>
            <li>
              <strong>Vercel</strong> — hosts the website and serves its pages
            </li>
            <li>
              <strong>Web3Forms</strong> — delivers contact form submissions to
              our inbox
            </li>
            <li>
              <strong>Google Analytics</strong> — website usage statistics
            </li>
            <li>
              <strong>Hostinger</strong> — our domain and email
            </li>
          </ul>
          <p>
            These providers process data on servers outside Pakistan, including
            in the European Union and the United States.
          </p>

          <h2>How long we keep it</h2>
          <p>
            Enquiry emails stay in our inbox so we can refer back to past
            conversations. If you&apos;d like us to delete your enquiry and any
            details we hold about you, email us and we&apos;ll do it.
          </p>

          <h2>Your rights</h2>
          <p>
            You can ask us what information we hold about you, ask us to correct
            it, or ask us to delete it. Write to{" "}
            <a href="mailto:support@startofpakistan.com">
              support@startofpakistan.com
            </a>{" "}
            and we&apos;ll respond as quickly as we can.
          </p>

          <h2>Client work</h2>
          <p>
            When we work on your store, account or systems, we may be given
            access to business data — sales figures, customer lists, account
            credentials. We treat all of it as confidential. We do not share it,
            and we do not publish it in our portfolio without your written
            permission.
          </p>

          <h2>Security</h2>
          <p>
            The site runs over HTTPS and we take reasonable steps to protect the
            information we hold. No method of transmission over the internet is
            completely secure, so we can&apos;t guarantee absolute security —
            but we won&apos;t ask you to send sensitive details like passwords
            or card numbers through the website.
          </p>

          <h2>Changes to this policy</h2>
          <p>
            If we change how we handle data, we&apos;ll update this page and the
            date at the top.
          </p>

          <h2>Contact us</h2>
          <p>
            Questions about this policy, or about your data:
            <br />
            Email:{" "}
            <a href="mailto:support@startofpakistan.com">
              support@startofpakistan.com
            </a>
            <br />
            Phone: <a href="tel:+92544584447">0544-584447</a>
            <br />
            Start of Pakistan, Jhelum, Punjab, Pakistan
          </p>

          <div style={{ marginTop: 40 }}>
            <Link className="btn btn-ghost" href="/contact">
              Get in touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}