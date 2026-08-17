import Link from "next/link";
import Reveal from "@/components/Reveal";
import { SectionHead, CTABand, Icons } from "@/components/shared";

export const metadata = {
  title: "Training Calendar",
  description:
    "Public training schedule from High Focus Training Consultancy — Sungai Petani, Kedah. Or book in-house training at your site, scheduled around your shifts.",
};

// Public open-enrolment slots. Dates are placeholders until the client
// publishes their schedule — each slot routes into the booking flow.
const SLOTS = [
  { name: "First Aid & CPR", meta: "Emergency Preparedness · 2 days · hands-on certification", when: "Date TBA — next intake" },
  { name: "Forklift Competency", meta: "Industrial · theory + practical operator assessment", when: "Date TBA — next intake" },
  { name: "Working at Height", meta: "High-Risk · harness, ladders & anchors", when: "Date TBA — next intake" },
  { name: "Confined Space Entry", meta: "High-Risk · gas testing & rescue practice", when: "Date TBA — next intake" },
  { name: "Team Building (A-Team)", meta: "Teams · our signature programme", when: "Date TBA — next intake" },
  { name: "Behaviour-Based Safety", meta: "Culture · observation & feedback", when: "Date TBA — next intake" },
];

export default function Calendar() {
  return (
    <>
      <section className="page-hero">
        <div className="container page-hero__inner">
          <span className="eyebrow">Training calendar</span>
          <h1 className="display">Public programmes, at our site or yours</h1>
          <p className="page-hero__lead">
            Join our open-enrolment public programmes in Sungai Petani — or book any programme in-house at your
            premises, scheduled around your shifts.
          </p>
          <div className="page-hero__meta">
            <span className="page-hero__tag">Sungai Petani, Kedah</span>
            <span className="page-hero__tag">In-house at your site</span>
            <span className="page-hero__tag">HRD Corp claimable</span>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal>
            <SectionHead
              eyebrow="Public intake"
              title="Open-enrolment slots"
              lead="Intakes are announced by quarter. Tell us which programme you need and we'll confirm the next available dates — usually within two weeks."
            />
          </Reveal>
          <div>
            {SLOTS.map((s, i) => (
              <Reveal key={s.name} delay={Math.min(i * 40, 200)}>
                <div className="cal-block">
                  <div>
                    <div className="cal-block__name">{s.name}</div>
                    <div className="cal-block__meta">{s.meta}</div>
                  </div>
                  <div className="cal-block__slot">
                    <span className="cal-chip">{s.when}</span>
                    <Link href={`/booking?course=${encodeURIComponent(s.name)}`} className="btn btn--ghost">
                      Book a seat
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="cta-band" style={{ marginTop: 48 }}>
              <div className="cta-band__inner">
                <div>
                  <h2 className="display">Prefer training at your site?</h2>
                  <p>
                    In-house delivery is scheduled around your shifts — we bring the trainers, equipment and
                    assessment to you. Tell us your preferred dates and headcount.
                  </p>
                </div>
                <Link href="/booking" className="btn btn--primary btn--lg">
                  Request in-house dates
                  {Icons.arrow}
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CTABand />
    </>
  );
}
