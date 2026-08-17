"use client";

import Link from "next/link";

// ponytail: the client's old site had an account portal (data-auth-host).
// No backend exists for this rebuild — the form is honest about that and
// routes users to contact. Wire to the client's auth backend when available.
export default function Login() {
  return (
    <section className="section">
      <div className="container auth-wrap">
        <div className="auth-card">
          <h1 className="display">Log in</h1>
          <p>Sign in to manage your training records, bookings and HRD Corp claims.</p>
          <form
            onSubmit={(e) => e.preventDefault()}
            style={{ display: "flex", flexDirection: "column", gap: 18 }}
          >
            <div className="field">
              <label htmlFor="email">Email</label>
              <input id="email" type="email" autoComplete="email" placeholder="you@company.com" />
            </div>
            <div className="field">
              <label htmlFor="password">Password</label>
              <input id="password" type="password" autoComplete="current-password" placeholder="••••••••" />
            </div>
            <button type="submit" className="btn btn--primary btn--block btn--lg">
              Log in
            </button>
          </form>
          <p className="form-note" style={{ marginTop: 18 }}>
            The account portal is being connected to this new site. For now, your training records, bookings and
            claims are handled by our team directly —{" "}
            <Link href="/contact" style={{ color: "var(--safety)" }}>
              contact us
            </Link>{" "}
            and we&apos;ll help.
          </p>
          <p className="auth-swap">
            No account yet? <Link href="/register">Register</Link>
          </p>
        </div>
      </div>
    </section>
  );
}
