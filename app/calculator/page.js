"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { CTABand, Icons } from "@/components/shared";

// HRD Corp levy: 1% of monthly wages. Mandatory for employers with 10 or more
// employees, OR a monthly wages bill of RM2,500 and above. (Per HRD Corp
// levy guidelines — verify edge cases with HRD Corp for the client's facts.)
const LEVY_RATE = 0.01;
const EMPLOYEE_THRESHOLD = 10;
const WAGES_THRESHOLD = 2500;

const fmt = (n) =>
  new Intl.NumberFormat("en-MY", { style: "currency", currency: "MYR", maximumFractionDigits: 0 }).format(n);

export default function Calculator() {
  const [headcount, setHeadcount] = useState("");
  const [payroll, setPayroll] = useState("");

  const result = useMemo(() => {
    const hc = parseInt(headcount, 10) || 0;
    const wp = parseFloat(payroll) || 0;
    const liable = hc >= EMPLOYEE_THRESHOLD || wp >= WAGES_THRESHOLD;
    const monthly = liable ? Math.round(wp * LEVY_RATE) : 0;
    return { hc, wp, liable, monthly, annual: monthly * 12 };
  }, [headcount, payroll]);

  const entered = result.hc > 0 || result.wp > 0;

  return (
    <>
      <section className="page-hero">
        <div className="container page-hero__inner">
          <span className="eyebrow">Free · instant result</span>
          <h1 className="display">HRD Corp levy calculator</h1>
          <p className="page-hero__lead">
            Input your headcount and monthly payroll to see your monthly and annual levy, the rate that applies to
            you, and how much of it your training can claim back.
          </p>
          <div className="page-hero__meta">
            <span className="page-hero__tag">1% of monthly wages</span>
            <span className="page-hero__tag">≥10 employees or ≥RM2,500 wages</span>
            <span className="page-hero__tag">Instant result</span>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: 900 }}>
          <div className="contact-grid">
            <div className="contact-form">
              <h2>Your numbers</h2>
              <p>Estimates only — HRD Corp is the authority on levy rates and liability.</p>
              <div className="form-grid">
                <div className="field">
                  <label htmlFor="headcount">Number of employees</label>
                  <input
                    id="headcount"
                    name="headcount"
                    type="number"
                    min="0"
                    inputMode="numeric"
                    placeholder="e.g. 120"
                    value={headcount}
                    onChange={(e) => setHeadcount(e.target.value)}
                  />
                </div>
                <div className="field">
                  <label htmlFor="payroll">Monthly payroll (RM)</label>
                  <input
                    id="payroll"
                    name="payroll"
                    type="number"
                    min="0"
                    inputMode="numeric"
                    placeholder="e.g. 350000"
                    value={payroll}
                    onChange={(e) => setPayroll(e.target.value)}
                  />
                </div>
              </div>
              <p className="calc-note" style={{ marginTop: 22 }}>
                Levy basis per HRD Corp guidelines: 1% of monthly wages for employers with 10 or more employees, or
                a monthly wages bill of RM2,500 and above.
              </p>
            </div>

            <div className="contact-info" style={{ paddingTop: 0 }}>
              <div style={{ borderTop: 0 }}>
                <span>
                  <span className="sub">Your levy rate</span>
                  <span className="value" style={{ fontSize: "1.05rem" }}>
                    {!entered ? "—" : result.liable ? "1.0% of monthly wages" : "Not liable (below threshold)"}
                  </span>
                </span>
              </div>
              <div>
                <span>
                  <span className="sub">Monthly levy</span>
                  <span className="value" style={{ fontSize: "1.05rem" }}>
                    {entered ? fmt(result.monthly) : "—"}
                  </span>
                </span>
              </div>
              <div>
                <span>
                  <span className="sub">Annual levy</span>
                  <span className="value" style={{ fontSize: "1.05rem" }}>
                    {entered ? fmt(result.annual) : "—"}
                  </span>
                </span>
              </div>
              <div>
                <span>
                  <span className="sub">What you can claim</span>
                  <span className="value" style={{ fontSize: "1.05rem" }}>
                    {entered && result.liable ? "Training costs, claimable" : "—"}
                  </span>
                  <span className="sub" style={{ marginTop: 6 }}>
                    {entered && result.liable
                      ? "As an HRD Corp registered provider, training with High Focus is 100% claimable from your levy-funded account."
                      : "Enter your headcount and payroll to see your levy position."}
                  </span>
                </span>
              </div>
            </div>
          </div>

          {entered && result.liable && (
            <Reveal>
              <div className="calc-result" style={{ marginTop: 28 }}>
                <div className="calc-item">
                  <span>Monthly levy contribution</span>
                  <strong>{fmt(result.monthly)}<em>/mo</em></strong>
                </div>
                <div className="calc-item">
                  <span>Annual levy contribution</span>
                  <strong>{fmt(result.annual)}<em>/yr</em></strong>
                </div>
                <div className="calc-item calc-item--full">
                  <span>What that buys you in training</span>
                  <strong style={{ fontSize: "1.05rem" }}>
                    {fmt(Math.round(result.annual * 0.8))}–{fmt(result.annual)} of claimable training per year
                  </strong>
                  <p className="calc-note" style={{ marginTop: 10 }}>
                    Indicative range based on HRD Corp grant rates (typically up to 80–100% of eligible course
                    costs, subject to grant conditions). High Focus handles the claim paperwork for you.
                  </p>
                </div>
              </div>
              <div style={{ marginTop: 26, textAlign: "center" }}>
                <Link href="/booking" className="btn btn--primary btn--lg">
                  Spend it on training your people actually need
                  {Icons.arrow}
                </Link>
              </div>
            </Reveal>
          )}
        </div>
      </section>

      <CTABand />
    </>
  );
}
