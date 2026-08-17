import Link from "next/link";
import Reveal from "@/components/Reveal";
import { SectionHead, CTABand, Icons } from "@/components/shared";

export const metadata = {
  title: "Compliance Templates",
  description:
    "Free compliance templates from High Focus Training Consultancy — HIRARC register (DOSH Guidelines 2008), safety committee minutes (S&H Regs 1996) and accident investigation report. Print-ready.",
};

const TEMPLATES = [
  {
    title: "HIRARC Register",
    text: "Hazard identification, risk assessment and risk control per DOSH HIRARC Guidelines 2008, with the L × S risk matrix included.",
    meta: "DOSH HIRARC Guidelines 2008 · L × S matrix",
    href: "/templates/hirarc",
  },
  {
    title: "Safety Committee Minutes",
    text: "Meeting minutes with attendance, matters arising and action registers, per the S&H Committee Regulations 1996.",
    meta: "S&H Committee Regulations 1996",
    href: "/templates/committee-minutes",
  },
  {
    title: "Accident Investigation Report",
    text: "Immediate and root cause analysis with corrective actions, for accidents, near-misses and dangerous occurrences.",
    meta: "Immediate & root cause · corrective actions",
    href: "/templates/accident-investigation",
  },
];

export default function Templates() {
  return (
    <>
      <section className="page-hero">
        <div className="container page-hero__inner">
          <span className="eyebrow">Free resources</span>
          <h1 className="display">Compliance templates, free to use</h1>
          <p className="page-hero__lead">
            Print-ready templates aligned to the regulations Malaysian workplaces operate under. Open any template
            and print, or save as PDF — no account needed.
          </p>
          <div className="page-hero__meta">
            <span className="page-hero__tag">Free</span>
            <span className="page-hero__tag">Print-ready</span>
            <span className="page-hero__tag">Regulation-aligned</span>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="template-grid">
            {TEMPLATES.map((t, i) => (
              <Reveal key={t.title} delay={i * 80}>
                <div className="template-card">
                  <span className="template-card__icon">{Icons.doc}</span>
                  <h3>{t.title}</h3>
                  <p>{t.text}</p>
                  <div className="template-card__actions">
                    <span style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: "0.62rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--steel-dim)", marginBottom: 14 }}>
                      {t.meta}
                    </span>
                    <Link href={t.href} className="btn btn--primary">
                      Open template
                      {Icons.arrow}
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <p style={{ marginTop: 44, color: "var(--steel)", textAlign: "center", maxWidth: 620, marginInline: "auto" }}>
              Need help completing your HIRARC, committee minutes or investigation reports? Our consultants run
              them with you —{" "}
              <Link href="/contact" style={{ color: "var(--safety)" }}>
                talk to the team
              </Link>
              .
            </p>
          </Reveal>
        </div>
      </section>

      <CTABand />
    </>
  );
}
