"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { CTABand, Icons } from "@/components/shared";

const AREAS = [
  {
    key: "policy",
    name: "Policy & Leadership",
    blurb: "Written policy, responsibilities, committees, objectives.",
    questions: [
      "Does your organisation have a written OSH policy signed by top management?",
      "Are OSH responsibilities assigned to named individuals?",
      "Is your OSH policy communicated to all employees and reviewed periodically?",
      "Do you maintain an OSH committee that meets regularly and keeps records?",
      "Are OSH objectives and targets documented and tracked?",
    ],
    programmes: ["OSH Acts & Regulations", "Safety Committee Duties", "OSH Officer / Coordinator Development"],
  },
  {
    key: "risk",
    name: "Risk Management",
    blurb: "HIRARC, chemical & noise assessments, risk registers.",
    questions: [
      "Have you completed HIRARC for all work activities?",
      "Do you carry out a Chemical Health Risk Assessment (CHRA) where chemicals are used?",
      "Do you carry out a Noise Risk Assessment (NRA) where noise exposure is a concern?",
      "Is a risk register maintained and updated after incidents or changes?",
      "Are safe work procedures documented for high-risk tasks — height, confined space, forklift?",
    ],
    programmes: ["HIRARC", "CHRA", "NRA", "Boundary Noise · Stack · Effluent"],
  },
  {
    key: "training",
    name: "Training & Competency",
    blurb: "Induction, first aid, operator competency, management training.",
    questions: [
      "Do all new employees receive OSH induction training?",
      "Are first aiders and emergency response team members trained and current?",
      "Do forklift and machinery operators hold valid competency training?",
      "Is working-at-height and confined-space training provided to affected workers?",
      "Are managers and supervisors trained in their duties under Act 514?",
    ],
    programmes: ["First Aid & CPR", "Forklift Competency", "Working at Height", "Confined Space Entry"],
  },
  {
    key: "culture",
    name: "Safety Culture",
    blurb: "Visible leadership, reporting, PPE discipline, learning from incidents.",
    questions: [
      "Does management visibly participate in safety walks and briefings?",
      "Are near-misses reported and investigated without blame?",
      "Do employees use required PPE consistently?",
      "Are safety meetings used for decisions and action, not just reporting?",
      "Is safety performance part of how managers and teams are evaluated?",
    ],
    programmes: ["Behaviour-Based Safety", "Team Building (A-Team)", "Managing Negative Culture"],
  },
];

const ANSWER_OPTIONS = [
  { value: 2, label: "Yes" },
  { value: 1, label: "Partially" },
  { value: 0, label: "No" },
];

function recommendationText(score, area) {
  if (score >= 8) return "Strong. Maintain with periodic review.";
  if (score >= 5) return "Some gaps. Target the weak spots below.";
  return "Significant gaps. Start here — this is where violations and incidents come from.";
}

export default function Assessment() {
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const resultsRef = useRef(null);

  const answered = Object.keys(answers).length;
  const total = AREAS.reduce((n, a) => n + a.questions.length, 0);

  function scoreArea(area) {
    let sum = 0;
    let count = 0;
    area.questions.forEach((q, qi) => {
      const key = `${area.key}-${qi}`;
      if (answers[key] !== undefined) {
        sum += answers[key];
        count++;
      }
    });
    return count ? sum / (count * 2) : 0; // 0..1
  }

  const totalScore = AREAS.reduce((sum, area) => {
    area.questions.forEach((_, qi) => {
      sum += answers[`${area.key}-${qi}`] ?? 0;
    });
    return sum;
  }, 0);
  const readiness = Math.round((totalScore / (total * 2)) * 100);

  function submit(e) {
    e.preventDefault();
    if (answered < total) {
      alert(`You've answered ${answered} of ${total} questions. Answer every question to get your score.`);
      return;
    }
    setSubmitted(true);
    setTimeout(() => resultsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }), 60);
  }

  function reset() {
    setAnswers({});
    setSubmitted(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <>
      <section className="page-hero">
        <div className="container page-hero__inner">
          <span className="eyebrow">Free · 5 minutes</span>
          <h1 className="display">OSH readiness self-assessment</h1>
          <p className="page-hero__lead">
            Answer 20 questions across policy, risk management, training and culture. Get a readiness score,
            per-area breakdown and recommended programmes for your gaps.
          </p>
          <div className="page-hero__meta">
            <span className="page-hero__tag">20 questions</span>
            <span className="page-hero__tag">~5 minutes</span>
            <span className="page-hero__tag">Free · no sign-up</span>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: 860 }}>
          <Reveal>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 16, marginBottom: 26, flexWrap: "wrap" }}>
              <span className="eyebrow">Your progress</span>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.74rem", color: "var(--steel)" }}>
                {answered} / {total} answered
              </span>
            </div>
          </Reveal>

          <form onSubmit={submit}>
            {AREAS.map((area, ai) => (
              <Reveal key={area.key} delay={Math.min(ai * 60, 180)}>
                <div className="quiz-section">
                  <div className="quiz-section__head">
                    <h2>{ai + 1}. {area.name}</h2>
                    <span>{area.blurb}</span>
                  </div>
                  {area.questions.map((q, qi) => {
                    const key = `${area.key}-${qi}`;
                    return (
                      <div className="quiz-q" key={key}>
                        <p className="quiz-q__text">
                          {ai * 5 + qi + 1}. {q}
                        </p>
                        <div className="quiz-q__opts" role="radiogroup" aria-label={q}>
                          {ANSWER_OPTIONS.map((o) => (
                            <span className="quiz-opt" key={o.label}>
                              <input
                                type="radio"
                                id={`${key}-${o.value}`}
                                name={key}
                                value={o.value}
                                checked={answers[key] === o.value}
                                onChange={() => setAnswers((a) => ({ ...a, [key]: o.value }))}
                              />
                              <label htmlFor={`${key}-${o.value}`}>{o.label}</label>
                            </span>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </Reveal>
            ))}

            <div style={{ textAlign: "center", marginTop: 8 }}>
              <button type="submit" className="btn btn--primary btn--lg">
                Get my readiness score
                {Icons.arrow}
              </button>
            </div>
          </form>

          {submitted && (
            <div ref={resultsRef} style={{ scrollMarginTop: 140 }}>
              <Reveal>
                <div className="result-card" style={{ marginTop: 48 }}>
                  <div className="result-card__top">
                    <div>
                      <span className="eyebrow">Your readiness score</span>
                      <div className="big-score">{readiness}%</div>
                      <p style={{ color: "var(--steel)", maxWidth: 480, marginTop: 10 }}>
                        {readiness >= 80
                          ? "Strong overall position. Close the remaining gaps below and keep the momentum."
                          : readiness >= 50
                            ? "A working foundation — but the gaps below are where inspections and incidents bite."
                            : "Your organisation is exposed. The gaps below need attention before an audit or incident forces it."}
                      </p>
                    </div>
                    <button type="button" className="btn btn--ghost" onClick={reset}>
                      Retake
                    </button>
                  </div>

                  <div className="result-grid">
                    {AREAS.map((area) => {
                      const s = scoreArea(area);
                      return (
                        <div className="result-item" key={area.key}>
                          <h3>{area.name}</h3>
                          <div className="score-bar" role="img" aria-label={`${area.name} readiness ${Math.round(s * 100)} percent`}>
                            <span style={{ width: `${s * 100}%` }} />
                          </div>
                          <p>
                            {Math.round(s * 100)}% · {recommendationText(Math.round(s * 10), area)}
                          </p>
                        </div>
                      );
                    })}
                  </div>

                  <div style={{ marginTop: 34 }}>
                    <span className="eyebrow">Recommended next steps</span>
                    <p style={{ color: "var(--steel)", marginTop: 12, fontSize: "0.95rem" }}>
                      Based on your answers, these High Focus programmes close your biggest gaps — every one is HRD
                      Corp claimable:
                    </p>
                    <div className="hero__specs" style={{ marginTop: 16 }}>
                      {AREAS.filter((a) => scoreArea(a) < 0.8)
                        .flatMap((a) => a.programmes)
                        .map((p) => (
                          <Link key={p} href={`/booking?course=${encodeURIComponent(p)}`} className="hero__spec" style={{ color: "var(--amber)", borderColor: "rgba(255,178,36,.4)" }}>
                            {p} →
                          </Link>
                        ))}
                      {AREAS.every((a) => scoreArea(a) >= 0.8) && (
                        <Link href="/booking" className="hero__spec" style={{ color: "var(--amber)", borderColor: "rgba(255,178,36,.4)" }}>
                          Book a refresher programme →
                        </Link>
                      )}
                    </div>
                    <p style={{ color: "var(--steel-dim)", fontSize: "0.8rem", marginTop: 22, fontFamily: "var(--font-mono)" }}>
                      Want a consultant's read on this score, or help closing the gaps? Talk to the High Focus team —
                      free of charge.
                    </p>
                    <Link href="/contact" className="btn btn--primary" style={{ marginTop: 14 }}>
                      Talk to the team
                    </Link>
                  </div>
                </div>
              </Reveal>
            </div>
          )}
        </div>
      </section>

      <CTABand />
    </>
  );
}
