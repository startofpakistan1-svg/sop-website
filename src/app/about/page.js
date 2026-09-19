"use client";

import Link from "next/link";
import { useState } from "react";

const team = [
  {
    name: "Shahzaib Ali",
    role: "Chief Executive Officer",
    bio: "Leads SOP's direction, client relationships and growth across the marketplaces we operate on.",
    photo: "/team/shahzaib.jpeg",
    initials: "SA",
    linkedin: null,
  },
  {
    name: "Qamar Shahzad",
    role: "Founder",
    bio: "Builds the stores, systems and AI agents behind the work — five years of development experience with a focus on automation.",
    photo: "/team/qamar.jpg",
    initials: "QS",
    linkedin: "https://www.linkedin.com/in/qamar-shahzad-37b566132/",
  },
];

function Avatar({ member }) {
  const [failed, setFailed] = useState(false);
  return (
    <div className="member-avatar">
      {!failed && member.photo ? (
        <img src={member.photo} alt={member.name} onError={() => setFailed(true)} />
      ) : (
        member.initials
      )}
    </div>
  );
}

export default function About() {
  return (
    <>
      <section className="page-head">
        <div className="wrap">
          <h1>About SOP</h1>
          <p>Two people, twelve clients, four countries — and a lot of automation.</p>
        </div>
      </section>

      <div className="stats">
        <div className="wrap stats-in">
          <div className="st"><b data-count="2">2</b><span>years building</span></div>
          <div className="st"><b data-count="12">12</b><span>clients served</span></div>
          <div className="st"><b data-count="4">4</b><span>countries</span></div>
          <div className="st"><b data-count="5">5</b><span>marketplaces</span></div>
        </div>
      </div>

      <section>
        <div className="wrap prose">
          <h2>Why we started</h2>
          <p>
            Plenty of agencies in Pakistan will build you a store. Far fewer will
            build you the systems that run it once it&apos;s live — the agents
            that answer customers at 2am, the automations that keep listings
            updated, the workflows that stop you doing the same task every
            Monday morning.
          </p>
          <p>
            That gap is why SOP exists. We started two years ago doing
            marketplace and store work, and launched officially this year once
            the AI side of what we do was solid enough to put our name on.
          </p>
          <p>
            The name means what it says. We think Pakistan can be where this kind
            of work starts, not just where it gets outsourced to.
          </p>

          <h2>What we actually do</h2>
          <p>
            We run Amazon seller accounts for nine international clients, build
            and maintain Shopify, WordPress and custom-coded stores, and design
            AI agent systems that handle content and customer operations. Our
            clients are in Pakistan, India, the UK and the US — some we&apos;ve
            worked with for years.
          </p>
          <p>
            Small enough that you talk to the person building your project. Not
            so small that things fall over when work piles up.
          </p>

          <h2>How we work</h2>
          <p>
            One point of contact, start to finish. No account managers relaying
            messages, no guessing what stage your build is at. You tell us the
            problem, we come back with a plan and a price, and then we build it.
          </p>
          <p>
            Anything we&apos;re given access to — sales data, customer lists,
            account credentials — stays confidential, and nothing goes in our
            portfolio without your permission.
          </p>
        </div>
      </section>

      <section className="process-band">
        <div className="wrap">
          <div className="sec-head">
            <h2>The team</h2>
            <p>Two of us. You&apos;ll deal with both.</p>
          </div>

          <div className="team-grid">
            {team.map((m) => (
              <div className="member" key={m.name}>
                <Avatar member={m} />
                <div className="member-info">
                  <h3>{m.name}</h3>
                  <div className="member-role">{m.role}</div>
                  <p>{m.bio}</p>
                  {m.linkedin && (
                    <a className="member-li" href={m.linkedin} target="_blank" rel="noreferrer">
                      <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
                        <path fill="currentColor" d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zm1.78 13.02H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
                      </svg>
                      LinkedIn
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="cta">
            <div className="cta-in">
              <h2>Work with us.</h2>
              <p>Tell us what you&apos;re building and we&apos;ll come back with a plan — usually the same day.</p>
            </div>
            <div className="cta-actions">
              <Link className="btn btn-acc" href="/contact">
                <span className="t">Start a project</span> <span className="a">→</span>
              </Link>
              <Link className="btn btn-line" href="/portfolio">
                <span className="t">See our work</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}