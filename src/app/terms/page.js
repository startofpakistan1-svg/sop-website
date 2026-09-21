import Link from "next/link";

export const metadata = {
  title: "Terms of Service — SOP | Start of Pakistan",
  description:
    "The terms that apply when you use startofpakistan.com or work with Start of Pakistan.",
};

export default function Terms() {
  return (
    <>
      <section className="page-head" style={{ "--cover": "url(/covers/legal.svg)" }}>
        <div className="wrap">
          <h1>Terms of Service</h1>
          <p>The rules that apply when you use this site or work with us.</p>
        </div>
      </section>

      <section>
        <div className="wrap prose legal">
          <p className="legal-date">Last updated: 16 September 2026</p>

          <p>
            These terms apply to startofpakistan.com and to work carried out by
            Start of Pakistan (&quot;SOP&quot;, &quot;we&quot;, &quot;us&quot;).
            By using the site or engaging us for a project, you agree to them.
          </p>

          <h2>1. Who we are</h2>
          <p>
            Start of Pakistan is an eCommerce and digital solutions studio based
            at First Floor, Office No. 7, Rizwan Heights, Citi Town B Block,
            Street C1, Satellite Town, Jhelum 49600, Pakistan. You can reach us
            at{" "}
            <a href="mailto:support@startofpakistan.com">
              support@startofpakistan.com
            </a>
            .
          </p>

          <h2>2. Using this website</h2>
          <p>
            You&apos;re welcome to browse the site, use the contact form, the
            review form and the assistant. In return, please don&apos;t try to
            break into it, scrape it at scale, overload it, or use it to send
            spam or anything unlawful.
          </p>
          <p>
            The assistant on this site is automated. It can be wrong. Nothing it
            says is a quote, a commitment, or professional advice — treat it as
            a helpful starting point and confirm anything important with us
            directly.
          </p>

          <h2>3. Quotes and pricing</h2>
          <p>
            Nothing on this site is a priced offer. We give a fixed price in
            writing once we understand what you need, usually within a day. A
            quote is valid for thirty days unless we say otherwise, and it
            covers the scope described in it — work outside that scope is
            quoted separately before we start it.
          </p>

          <h2>4. Projects</h2>
          <p>
            Each project is governed by whatever we agree in writing — the
            quote, the plan, or a separate agreement. Where those documents say
            something different from this page, those documents win.
          </p>
          <p>
            Projects need things from you: content, images, product details,
            access to accounts, and answers to our questions. If those are
            delayed, timelines move accordingly. We&apos;ll tell you when that
            happens rather than letting a deadline quietly slip.
          </p>

          <h2>5. Payment</h2>
          <p>
            Payment terms are set out in each quote. Invoices are due by the
            date stated on them. If an invoice goes unpaid well past its due
            date, we may pause work until it&apos;s settled — we&apos;ll always
            raise it with you before doing that.
          </p>

          <h2>6. Ownership</h2>
          <p>
            Once a project is paid for in full, it&apos;s yours. Stores,
            websites, code we wrote for you, designs, accounts and logins all
            belong to you, and we hand over every credential at the end.
          </p>
          <p>
            Two exceptions. We keep the right to reuse our own general methods,
            techniques and reusable components in other work — that&apos;s our
            craft, not your project. And anything you license from a third party
            (themes, plugins, stock images, fonts) stays under that third
            party&apos;s terms, not ours.
          </p>
          <p>
            We may show finished work in our portfolio. If you&apos;d rather we
            didn&apos;t, tell us and we won&apos;t. Your private business data —
            sales figures, customer lists, credentials — never appears anywhere
            without your written permission.
          </p>

          <h2>7. Your responsibilities</h2>
          <p>
            You confirm that the content, images and product information you
            give us is yours to use, and that what you&apos;re selling is legal
            in the markets you&apos;re selling into. Marketplaces like Amazon,
            eBay and Etsy have their own rules; keeping your business compliant
            with them is ultimately your responsibility, though we&apos;ll flag
            anything we spot.
          </p>

          <h2>8. What we can&apos;t promise</h2>
          <p>
            We build and manage well, but we can&apos;t guarantee sales figures,
            search rankings, marketplace approvals, or that a platform
            won&apos;t change its rules. Results depend on your products,
            pricing, market and competition as much as on the work we do.
          </p>
          <p>
            We also can&apos;t be responsible for third-party platforms going
            down, suspending accounts, or changing their policies — Amazon,
            Shopify, Google and the rest make their own decisions.
          </p>

          <h2>9. Limitation of liability</h2>
          <p>
            Our liability for any project is limited to the amount you paid us
            for that project. We aren&apos;t liable for indirect or
            consequential losses — lost profits, lost data, lost opportunities —
            arising from the work or from the use of this website. Nothing here
            limits liability that cannot be limited under Pakistani law.
          </p>

          <h2>10. Ending a project</h2>
          <p>
            Either of us can end a project with reasonable written notice.
            If you end it, you pay for work completed up to that point. If we
            end it, we&apos;ll hand over what&apos;s finished and refund
            anything paid for work not done.
          </p>

          <h2>11. Support after launch</h2>
          <p>
            We stay available for questions after launch. Fixing something we
            got wrong is on us. New features, changes of direction, or ongoing
            management are separate work and are quoted separately.
          </p>

          <h2>12. Privacy</h2>
          <p>
            How we handle your information is covered in our{" "}
            <Link href="/privacy">Privacy Policy</Link>.
          </p>

          <h2>13. Changes to these terms</h2>
          <p>
            We may update this page. Changes apply from the date at the top and
            don&apos;t affect projects already agreed.
          </p>

          <h2>14. Governing law</h2>
          <p>
            These terms are governed by the laws of Pakistan, and the courts of
            Jhelum, Punjab have jurisdiction over any dispute. Before anything
            goes that far, we&apos;d much rather talk it through — that&apos;s
            usually all it takes.
          </p>

          <h2>15. Get in touch</h2>
          <p>
            Questions about any of this:{" "}
            <a href="mailto:support@startofpakistan.com">
              support@startofpakistan.com
            </a>{" "}
            or WhatsApp{" "}
            <a href="https://api.whatsapp.com/send?phone=923101375475" target="_blank" rel="noreferrer">
              +92 310 1375475
            </a>
            .
          </p>

          <div style={{ marginTop: 40 }}>
            <Link className="btn btn-ghost" href="/contact">
              Start a project
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}