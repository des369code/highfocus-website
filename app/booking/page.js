"use client";

import { Suspense, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import Reveal from "@/components/Reveal";
import { CTABand, Icons } from "@/components/shared";

const PROGRAMMES = [
  // OSH Training & Excellence
  "First Aid & CPR", "Fire Fighting & ERT Procedures", "Chemical Safety",
  "Forklift Competency", "Machinery & Conveyor Safety", "Working at Height",
  "Confined Space Entry", "Ergonomics", "Hearing Conservation", "Waste Management",
  // Leadership & Management
  "Leadership Skills", "Elevating Leadership", "Change Management", "Management Skills",
  "Team Development", "Team Building (A-Team)", "Managing Negative Culture",
  // Consultancy
  "CHRA", "NRA", "ERA", "HIRARC", "Boundary Noise Monitoring", "Stack Monitoring",
  "Effluent Testing", "ISO Support (45001 · 9001 · 14001 · 18000)",
  // Compliance & Legislation
  "OSH Acts & Regulations", "Safety Committee Duties", "OSH Officer Development",
  "OSH Coordinator Development", "Accident Prevention", "Behaviour-Based Safety", "PPE Importance",
  "Not sure yet — recommend a programme",
];

const LOCATIONS = ["At our site (Sungai Petani, Kedah)", "At your site (in-house)", "Online / virtual"];

function BookingForm() {
  const params = useSearchParams();
  const course = params.get("course");
  const [sent, setSent] = useState(false);
  const formRef = useRef(null);

  // Prefill value may not be in the list — surface it as its own option.
  const options = course && !PROGRAMMES.includes(course) ? [course, ...PROGRAMMES] : PROGRAMMES;

  function handleSubmit(e) {
    e.preventDefault();
    setSent(true);
    formRef.current?.reset();
  }

  return (
    <div className="contact-form">
      <h2>Book a training programme</h2>
      <p>
        Tell us the programme, dates and headcount. We&apos;ll come back with a proposal, quotation and HRD Corp
        claim support.
      </p>

      {sent && (
        <div className="form-success" role="status">
          Booking request received — thank you. We&apos;ll confirm dates and quotation within one working day. For
          anything urgent, email info@highfocus.com.my
        </div>
      )}

      <form onSubmit={handleSubmit} ref={formRef}>
        <div className="form-grid">
          <div className="field field--full">
            <label htmlFor="programme">Programme *</label>
            <select id="programme" name="programme" required defaultValue={course ?? ""}>
              <option value="" disabled>
                Select a programme…
              </option>
              {options.map((p) => (
                <option key={p} value={p}>
                  {p}
                </option>
              ))}
            </select>
          </div>
          <div className="field">
            <label htmlFor="company">Company *</label>
            <input id="company" name="company" required autoComplete="organization" placeholder="Organisation name" />
          </div>
          <div className="field">
            <label htmlFor="contact">Contact person *</label>
            <input id="contact" name="contact" required autoComplete="name" placeholder="Your name" />
          </div>
          <div className="field">
            <label htmlFor="email">Email *</label>
            <input id="email" name="email" type="email" required autoComplete="email" placeholder="you@company.com" />
          </div>
          <div className="field">
            <label htmlFor="phone">Phone</label>
            <input id="phone" name="phone" type="tel" autoComplete="tel" placeholder="+60" />
          </div>
          <div className="field">
            <label htmlFor="participants">Participants</label>
            <input id="participants" name="participants" type="number" min="1" placeholder="e.g. 12" />
          </div>
          <div className="field">
            <label htmlFor="location">Location</label>
            <select id="location" name="location" defaultValue={LOCATIONS[0]}>
              {LOCATIONS.map((l) => (
                <option key={l} value={l}>
                  {l}
                </option>
              ))}
            </select>
          </div>
          <div className="field field--full">
            <label htmlFor="dates">Preferred dates / month</label>
            <input id="dates" name="dates" placeholder="e.g. October 2026, or a specific week" />
          </div>
          <div className="field field--full">
            <label htmlFor="message">Anything we should know?</label>
            <textarea
              id="message"
              name="message"
              placeholder="Specific hazards, shift patterns, industries, previous training…"
            />
          </div>
          <div className="field field--full">
            <button type="submit" className="btn btn--primary btn--lg btn--block">
              Request booking
            </button>
            <p className="form-note">
              No obligation. We&apos;ll come back with a proposal and quotation — and handle the HRD Corp claim
              paperwork with you.
            </p>
          </div>
        </div>
      </form>
    </div>
  );
}

export default function Booking() {
  return (
    <>
      <section className="page-hero">
        <div className="container page-hero__inner">
          <span className="eyebrow">Book training</span>
          <h1 className="display">Book a programme</h1>
          <p className="page-hero__lead">
            One form, one point of contact. Proposal, quotation and HRD Corp claim support — at your site or ours,
            scheduled around your shifts.
          </p>
          <div className="page-hero__meta">
            <span className="page-hero__tag">33+ programmes</span>
            <span className="page-hero__tag">HRD Corp claimable</span>
            <span className="page-hero__tag">BM · EN · Both</span>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: 900 }}>
          <Reveal>
            <div className="contact-grid">
              <Suspense fallback={<div className="contact-form">Loading…</div>}>
                <BookingForm />
              </Suspense>
              <div className="contact-info">
                <h3>What happens next</h3>
                <div>
                  {Icons.doc}
                  <span>
                    <span className="value">1. Proposal &amp; quotation</span>
                    <span className="sub">Within one working day</span>
                  </span>
                </div>
                <div>
                  {Icons.people}
                  <span>
                    <span className="value">2. Dates &amp; venue confirmed</span>
                    <span className="sub">At your site or ours, around your shifts</span>
                  </span>
                </div>
                <div>
                  {Icons.check}
                  <span>
                    <span className="value">3. HRD Corp claim handled</span>
                    <span className="sub">We prepare the claim paperwork with you</span>
                  </span>
                </div>
                <div>
                  {Icons.pin}
                  <span>
                    <span className="value">Prefer to talk first?</span>
                    <span className="sub">
                      info@highfocus.com.my · +60 12-345 6789 · Sungai Petani, Kedah
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CTABand />
    </>
  );
}
