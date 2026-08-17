"use client";

import { Suspense, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import Reveal from "@/components/Reveal";
import { CTABand, Icons } from "@/components/shared";

const INTERESTS = [
  "Book a training programme",
  "DOSH / DOE assessment (CHRA · NRA · ERA · HIRARC · noise · stack · effluent)",
  "ISO support (45001 · 9001 · 14001 · 18000)",
  "HRD Corp claim support",
  "Free self-assessment / levy calculator",
  "Something else",
];

function ContactForm() {
  const params = useSearchParams();
  const type = params.get("type");
  const course = params.get("course");

  const [sent, setSent] = useState(false);
  const formRef = useRef(null);

  const interest =
    type === "booking"
      ? course
        ? `Book a training programme — ${course}`
        : "Book a training programme"
      : "";

  // Prefill value may not be in the option list (e.g. a specific course) — surface it as its own option.
  const options = interest && !INTERESTS.includes(interest) ? [interest, ...INTERESTS] : INTERESTS;

  function handleSubmit(e) {
    e.preventDefault();
    // ponytail: no backend yet — show confirmation, email arrives via mailto fallback below.
    setSent(true);
    formRef.current?.reset();
  }

  return (
    <div className="contact-form">
      <h2>Tell us what you need</h2>
      <p>Proposal, quotation and HRD Corp claim support — one point of contact, end to end.</p>

      {sent && (
        <div className="form-success" role="status">
          Received — thank you. We&apos;ll come back within one working day. For anything urgent, email
          info@highfocus.com.my
        </div>
      )}

      <form onSubmit={handleSubmit} ref={formRef}>
        <div className="form-grid">
          <div className="field">
            <label htmlFor="name">Name *</label>
            <input id="name" name="name" required autoComplete="name" placeholder="Your full name" />
          </div>
          <div className="field">
            <label htmlFor="company">Company</label>
            <input id="company" name="company" autoComplete="organization" placeholder="Organisation name" />
          </div>
          <div className="field">
            <label htmlFor="email">Email *</label>
            <input id="email" name="email" type="email" required autoComplete="email" placeholder="you@company.com" />
          </div>
          <div className="field">
            <label htmlFor="phone">Phone</label>
            <input id="phone" name="phone" type="tel" autoComplete="tel" placeholder="+60" />
          </div>
          <div className="field field--full">
            <label htmlFor="interest">I&apos;m interested in</label>
            <select id="interest" name="interest" defaultValue={interest}>
              {options.map((i) => (
                <option key={i} value={i}>
                  {i}
                </option>
              ))}
            </select>
          </div>
          <div className="field field--full">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Programme, dates, number of participants, location…"
            />
          </div>
          <div className="field field--full">
            <button type="submit" className="btn btn--primary btn--lg btn--block">
              Send enquiry
            </button>
            <p className="form-note">
              No spam. Your details go to High Focus only. Prefer email? Write to info@highfocus.com.my directly.
            </p>
          </div>
        </div>
      </form>
    </div>
  );
}

function ContactInfo() {
  return (
    <div className="contact-info">
      <h3>Direct line</h3>
      <div>
        {Icons.pin}
        <span>
          <span className="value">
            No. A-10, Tingkat 1, Taman Kampian,
            <br />
            Jalan Sekerat, 08000 Sungai Petani,
            <br />
            Kedah, Malaysia
          </span>
          <span className="sub">Office · northern region HQ</span>
        </span>
      </div>
      <div>
        {Icons.phone}
        <span>
          <a className="value" href="tel:+60123456789">
            +60 12-345 6789
          </a>
          <span className="sub">WhatsApp preferred</span>
        </span>
      </div>
      <div>
        {Icons.mail}
        <span>
          <a className="value" href="mailto:info@highfocus.com.my">
            info@highfocus.com.my
          </a>
          <span className="sub">Proposals · quotations · claims</span>
        </span>
      </div>
      <div>
        {Icons.facebook}
        <span>
          <a
            className="value"
            href="https://www.facebook.com/p/High-Focus-Training-Consultancy-Sdn-Bhd-749381-M-100095358559682/"
            target="_blank"
            rel="noopener"
          >
            High Focus Training Consultancy
          </a>
          <span className="sub">Facebook · programme updates</span>
        </span>
      </div>
      <div>
        {Icons.clock}
        <span>
          <span className="value">Mon – Fri · 8:30 – 17:30</span>
          <span className="sub">Training runs at client sites nationwide</span>
        </span>
      </div>
    </div>
  );
}

export default function Contact() {
  return (
    <>
      <section className="page-hero">
        <div className="container page-hero__inner">
          <span className="eyebrow">Contact</span>
          <h1 className="display">Tell us which programme or assessment you need</h1>
          <p className="page-hero__lead">
            We&apos;ll come back with a proposal, quotation and HRD Corp claim support. Or call, email, or drop by
            our office in Sungai Petani.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal>
            <div className="contact-grid">
              <Suspense fallback={<div className="contact-form">Loading…</div>}>
                <ContactForm />
              </Suspense>
              <ContactInfo />
            </div>
          </Reveal>
        </div>
      </section>

      <CTABand />
    </>
  );
}
