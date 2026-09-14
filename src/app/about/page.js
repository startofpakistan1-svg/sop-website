import Link from "next/link";

export const metadata = {
  title: "About — SOP | Start of Pakistan",
  description: "SOP is an eCommerce and digital solutions studio based in Jhelum, Pakistan, serving clients worldwide.",
};

export default function About() {
  return (
    <>
      <section className="page-head" style={{ padding: "64px 0 70px" }}>
        <div className="wrap">
          <h1>About SOP</h1>
          <p>Start of Pakistan — built in Jhelum, working with clients everywhere.</p>
        </div>
      </section>

      <section>
        <div className="wrap prose">
          <p>
            SOP stands for Start of Pakistan. We&apos;re an eCommerce and digital
            solutions studio helping businesses sell online — whether that means a
            Shopify store, an Amazon seller account, a custom website, or an AI
            assistant handling customer questions around the clock.
          </p>
          <p>
            We work from Jhelum, Pakistan, with clients locally and overseas. That
            means you get international-standard work at prices that actually make
            sense for a growing business.
          </p>

          <h2>How we work</h2>
          <p>
            One point of contact, start to finish. You talk to the person actually
            building your project — no account managers, no middlemen, no guessing
            what&apos;s happening with your build.
          </p>

          <h2>What we believe</h2>
          <p>
            A website that looks good but doesn&apos;t bring customers is just a
            brochure. Everything we build is aimed at one thing: helping you build,
            grow, and scale.
          </p>

          <div style={{ marginTop: 34 }}>
            <Link className="btn-orange" href="/contact">Work with us</Link>
          </div>
        </div>
      </section>
    </>
  );
}