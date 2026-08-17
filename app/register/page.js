"use client";

import Link from "next/link";

// ponytail: no auth backend in this rebuild — see /login note.
export default function Register() {
  return (
    <section className="section">
      <div className="container auth-wrap">
        <div className="auth-card">
          <h1 className="display">Register</h1>
          <p>Create an account to manage your training records, bookings and HRD Corp claims.</p>
          <form
            onSubmit={(e) => e.preventDefault()}
            style={{ display: "flex", flexDirection: "column", gap: 18 }}
          >
            <div className="form-grid">
              <div className="field">
                <label htmlFor="name">Full name</label>
                <input id="name" autoComplete="name" placeholder="Your name" />
              </div>
              <div className="field">
                <label htmlFor="company">Company</label>
                <input id="company" autoComplete="organization" placeholder="Organisation name" />
              </div>
            </div>
            <div className="field">
              <label htmlFor="email">Work email</label>
              <input id="email" type="email" autoComplete="email" placeholder="you@company.com" />
            </div>
            <div className="field">
              <label htmlFor="password">Password</label>
              <input id="password" type="password" autoComplete="new-password" placeholder="••••••••" />
            </div>
            <button type="submit" className="btn btn--primary btn--block btn--lg">
              Create account
            </button>
          </form>
          <p className="form-note" style={{ marginTop: 18 }}>
            The account portal is being connected to this new site. For now, your training records, bookings and
            claims are handled by our team directly —{" "}
            <Link href="/contact" style={{ color: "var(--safety)" }}>
              contact us
            </Link>{" "}
            and we&apos;ll set you up.
          </p>
          <p className="auth-swap">
            Already registered? <Link href="/login">Log in</Link>
          </p>
        </div>
      </div>
    </section>
  );
}
