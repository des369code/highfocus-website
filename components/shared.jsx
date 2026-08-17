"use client";

import Link from "next/link";
import { IMG } from "@/lib/images";

/* ---------- Brand ---------- */

export function Wordmark({ compact = false }) {
  return (
    <span className="wordmark">
      <svg className="wordmark__mark" viewBox="0 0 32 32" aria-hidden="true">
        <rect x="1.5" y="1.5" width="29" height="29" fill="none" stroke="#FF6B1A" strokeWidth="2" />
        <rect x="8" y="8" width="16" height="16" fill="#FF6B1A" />
        <rect x="13.5" y="13.5" width="5" height="5" fill="#121A22" />
      </svg>
      <span>
        <span className="wordmark__name">High Focus</span>
        <span className="wordmark__sub">Training Consultancy (M) Sdn Bhd</span>
      </span>
    </span>
  );
}

/* ---------- Image with graceful fallback ---------- */

export function Img({ src, alt = "", className, priority = false }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      className={className}
      loading={priority ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : undefined}
      onError={(e) => {
        e.currentTarget.onerror = null;
        e.currentTarget.src = IMG.fallback;
      }}
    />
  );
}

/* ---------- Section heading ---------- */

export function SectionHead({ eyebrow, title, lead, center = false, actions = null }) {
  return (
    <div className={`section-head${center ? " section-head--center" : ""}${actions ? " section-head--row" : ""}`}>
      <div>
        <span className="eyebrow">{eyebrow}</span>
        <h2 className="display">{title}</h2>
        {lead && <p>{lead}</p>}
      </div>
      {actions && <div className="section-head__ctas">{actions}</div>}
    </div>
  );
}

/* ---------- Stats bar ---------- */

export function StatsBar() {
  const stats = [
    { num: "20", suffix: "+", label: "Years of EHS practice" },
    { num: "33", suffix: "+", label: "Training programmes" },
    { num: "4", suffix: "", label: "Regulatory focus areas — OSHA · FMA · EQA · ISO" },
    { num: "100", suffix: "%", label: "HRD Corp claimable training" },
  ];
  return (
    <section className="stats" aria-label="Company statistics">
      <div className="container stats__grid">
        {stats.map((s) => (
          <div className="stat" key={s.label}>
            <span className="stat__num">
              {s.num}
              <em>{s.suffix}</em>
            </span>
            <span className="stat__label">{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------- CTA band ---------- */

export function CTABand() {
  return (
    <section className="section--tight">
      <div className="container">
        <div className="cta-band">
          <div className="cta-band__inner">
            <div>
              <h2 className="display">Ready to raise your safety standard?</h2>
              <p>
                Tell us which programme or assessment you need. We&apos;ll come back with a proposal, quotation and
                HRD Corp claim support.
              </p>
            </div>
            <Link href="/contact?type=booking" className="btn btn--primary btn--lg">
              Book a Training
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" width="16" height="16">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Shared icon set (24px stroke) ---------- */

const S = { fill: "none", stroke: "currentColor", strokeWidth: "2" };

export const Icons = {
  shield: (
    <svg viewBox="0 0 24 24" width="30" height="30" {...S}>
      <path d="M12 22s8-3.5 8-10V5l-8-3-8 3v7c0 6.5 8 10 8 10z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  ),
  people: (
    <svg viewBox="0 0 24 24" width="30" height="30" {...S}>
      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
    </svg>
  ),
  gauge: (
    <svg viewBox="0 0 24 24" width="30" height="30" {...S}>
      <path d="M9 3v18M4 21h16M4 17h3v-4H4v4zM4 9h3V5H4v4zM11 17h3v-8h-3v8zM18 17h-2v-4h2v4z" />
    </svg>
  ),
  doc: (
    <svg viewBox="0 0 24 24" width="30" height="30" {...S}>
      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
      <path d="M14 2v6h6M9 15l2 2 4-4" />
    </svg>
  ),
  check: (
    <svg viewBox="0 0 24 24" width="20" height="20" {...S}>
      <path d="M20 6L9 17l-5-5" />
    </svg>
  ),
  pin: (
    <svg viewBox="0 0 24 24" width="18" height="18" {...S}>
      <path d="M12 21s-7-5.5-7-11a7 7 0 1114 0c0 5.5-7 11-7 11z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  ),
  phone: (
    <svg viewBox="0 0 24 24" width="18" height="18" {...S}>
      <path d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3.1 19.5 19.5 0 01-6-6A19.8 19.8 0 012.1 4.2 2 2 0 014.1 2h3a2 2 0 012 1.7c.1 1 .4 2 .7 2.9a2 2 0 01-.5 2.1L8 10a16 16 0 006 6l1.3-1.3a2 2 0 012.1-.5c.9.3 1.9.6 2.9.7a2 2 0 011.7 2z" />
    </svg>
  ),
  mail: (
    <svg viewBox="0 0 24 24" width="18" height="18" {...S}>
      <path d="M4 4h16a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2z" />
      <path d="M22 6l-10 7L2 6" />
    </svg>
  ),
  facebook: (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
      <path d="M13.5 22v-8h2.7l.4-3.2h-3.1V8.7c0-.9.3-1.6 1.6-1.6h1.7V4.2c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.4H7.4V14h2.7v8h3.4z" />
    </svg>
  ),
  arrow: (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.2">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  ),
  clock: (
    <svg viewBox="0 0 24 24" width="18" height="18" {...S}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 3" />
    </svg>
  ),
};
