import Link from "next/link";
import Reveal from "@/components/Reveal";
import { SectionHead, StatsBar, CTABand, Img } from "@/components/shared";
import { IMG } from "@/lib/images";

export const metadata = {
  title: "About Us",
  description:
    "High Focus Training Consultancy (M) Sdn Bhd — HRD Corp registered EHS training provider since 2001, wholly owned subsidiary of HIFOTAC. Sungai Petani, Kedah.",
};

const FACTS = [
  { k: "Legal name", v: "High Focus Training Consultancy (M) Sdn Bhd" },
  { k: "SSM registration", v: "749381-M (200601029624)" },
  { k: "Founded", v: "2001 — 20+ years of EHS practice" },
  { k: "Group", v: "Wholly owned subsidiary of HIFOTAC" },
  { k: "Accreditation", v: "HRD Corp registered training provider (TEE listing)" },
  { k: "Headquarters", v: "Sungai Petani, Kedah, Malaysia" },
  { k: "Regulatory scope", v: "OSHA 1994 · FMA 1967 · EQA 1974 · ISO" },
  { k: "Language of delivery", v: "Bahasa Malaysia & English" },
];

const TIMELINE = [
  {
    year: "2001",
    title: "Practice founded",
    text: "High Focus begins delivering environmental, health and safety training and consultancy — two decades of continuous EHS practice.",
  },
  {
    year: "2006",
    title: "Incorporated as Sdn Bhd",
    text: "Registered with the Companies Commission of Malaysia under no. 749381-M (200601029624) as High Focus Training Consultancy (M) Sdn Bhd.",
  },
  {
    year: "Today",
    title: "33+ programmes · HRD Corp registered",
    text: "A registered HRD Corp training provider serving manufacturing, food, logistics and construction teams across the northern region and beyond — at your site or ours.",
  },
];

export default function About() {
  return (
    <>
      <section className="page-hero">
        <div className="container page-hero__inner">
          <span className="eyebrow">Company file</span>
          <h1 className="display">A quarter-century of safer workplaces</h1>
          <p className="page-hero__lead">
            From boardroom leadership to the factory floor, High Focus builds training around the regulations your
            organisation must meet — and the culture you want to build.
          </p>
          <div className="page-hero__meta">
            <span className="page-hero__tag">HRD Corp registered</span>
            <span className="page-hero__tag">SSM 749381-M</span>
            <span className="page-hero__tag">HIFOTAC Group</span>
            <span className="page-hero__tag">Since 2001</span>
          </div>
        </div>
      </section>

      <StatsBar />

      <section className="section">
        <div className="container split">
          <div>
            <Reveal>
              <span className="eyebrow">Who we are</span>
              <h2 className="display">An EHS practice, not just a training vendor</h2>
              <p>
                High Focus Training Consultancy (M) Sdn Bhd is a Malaysian EHS training and consultancy practice
                serving DOSH and DOE compliance through OSH training, leadership programmes, risk assessments and
                ISO support.
              </p>
              <p>
                Every programme maps to the regulations that govern Malaysian workplaces — OSHA 1994, FMA 1967, EQA
                1974 and the DOSH and DOE guidelines that apply to you — and is delivered in Bahasa Malaysia,
                English, or both, at your site or ours.
              </p>
              <p>
                We are a wholly owned subsidiary of HIFOTAC, an established EHS group with two decades of
                environmental, health and safety practice behind it.
              </p>
              <ul className="checklist">
                <li>
                  Registered HRD Corp training provider — levy-funded training without the paperwork headache
                  <small>TEE provider listing</small>
                </li>
                <li>
                  Hands-on delivery — live fire drills, CPR mannequins, harness practice, real assessments
                  <small>Learning that transfers to the floor</small>
                </li>
                <li>
                  Custom-built content for your industry, your machinery and your hazards
                  <small>Never off-the-shelf filler</small>
                </li>
              </ul>
            </Reveal>
          </div>
          <div className="split__aside">
            <Reveal>
              <div className="figure">
                <Img src={IMG.about} alt="Engineer welding in a fabrication workshop" />
                <span>FIG. B — HANDS-ON SKILLS, REAL WORKPLACES</span>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section section--carbon">
        <div className="container">
          <Reveal>
            <SectionHead
              eyebrow="Company specification"
              title="The facts, on the record"
              lead="Registration numbers, accreditation and scope — everything an HR or procurement team needs to shortlist us."
            />
          </Reveal>
          <Reveal>
            <dl className="spec-table">
              {FACTS.map((f) => (
                <div className="spec-row" key={f.k}>
                  <dt>{f.k}</dt>
                  <dd>{f.v}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal>
            <SectionHead eyebrow="Milestones" title="How we got here" />
          </Reveal>
          <div className="timeline">
            {TIMELINE.map((t, i) => (
              <Reveal key={t.year} delay={i * 80}>
                <div className="timeline-item">
                  <span className="timeline-item__year">{t.year}</span>
                  <h3>{t.title}</h3>
                  <p>{t.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--carbon">
        <div className="container">
          <Reveal>
            <SectionHead eyebrow="Why High Focus" title="Why organisations choose us" center />
          </Reveal>
          <div className="feature-grid">
            {[
              ["Regulation-aligned", "Every programme maps to OSHA 1994, FMA 1967, EQA 1974 and the DOSH / DOE guidelines that apply to you."],
              ["At your site or ours", "In-house training delivered at your premises, scheduled around your shifts, or join our public programmes."],
              ["Hands-on, not slides", "Live fire drills, CPR mannequins, harness practice and real assessments. Learning that transfers to the floor."],
              ["Bahasa & English", "Programmes delivered in Bahasa Malaysia, English, or both, so every level of your workforce understands."],
              ["HRD Corp claimable", "We are a registered training provider. Levy-funded training without the paperwork headache."],
              ["Custom-built content", "Programmes tailored to your industry, your machinery and your hazards. Never off-the-shelf filler."],
            ].map(([title, text], i) => (
              <Reveal key={title} delay={(i % 3) * 80}>
                <div className="feature">
                  <span className="feature__icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </span>
                  <div>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <div style={{ marginTop: 48, textAlign: "center" }}>
            <Link href="/booking" className="btn btn--primary btn--lg">
              Talk to our team
            </Link>
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
