"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="splash splash-error">
      <div className="splash-in">
        <div className="splash-logo" aria-hidden="true">
          <img className="lg-live still" src="/logo.png" alt="" />
        </div>

        <h1 className="splash-h">Something broke on our side.</h1>
        <p className="splash-p">
          Not your fault. Try again — and if it keeps happening, message us and
          we&apos;ll sort it.
        </p>

        <div className="splash-acts">
          <button className="btn btn-acc" onClick={() => reset()}>
            <span className="t">Try again</span>
          </button>
          <Link className="btn btn-ghost" href="/">
            <span className="t">Back to home</span>
          </Link>
          <a
            className="btn btn-ghost"
            href="https://wa.me/923101375475"
            target="_blank"
            rel="noreferrer"
          >
            <span className="t">WhatsApp us</span>
          </a>
        </div>
      </div>
    </div>
  );
}