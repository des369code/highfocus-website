import Link from "next/link";
import Reveal from "@/components/Reveal";
import { SectionHead, CTABand, Img, Icons } from "@/components/shared";
import { IMG } from "@/lib/images";

export const metadata = {
  title: "Services",
  description:
    "OSH training, leadership programmes, DOSH & DOE assessments (CHRA, NRA, ERA, HIRARC, boundary noise, stack & effluent) and ISO support — four pillars of EHS service from High Focus Training Consultancy.",
};

const PILLARS = [
  {
    id: "osh",
    tag: "DOSH · OSHA",
    icon: Icons.shield,
    title: "OSH Training & Excellence",
    desc: "Practical, hands-on safety training your people will actually use — delivered at your site or ours, in Bahasa Malaysia, English, or both.",
    courses: [
      ["First Aid & CPR", "Emergency preparedness · 2 days · hands-on certification"],
      ["Fire Fighting & ERT Procedures", "Live drills, extinguisher handling, emergency response teams"],
      ["Chemical Safety", "Safe handling, storage and emergency response for hazardous chemicals"],
      ["Forklift Competency", "Theory + practical operator assessment with DOSH audit trail"],
      ["Machinery & Conveyor Safety", "Guarding, lockout and safe operation on the line"],
      ["Working at Height", "High-risk · harness, ladders & anchors"],
      ["Confined Space Entry", "High-risk · gas testing & rescue practice"],
      ["Ergonomics", "Reducing manual-handling and workstation risk"],
      ["Hearing Conservation", "Noise exposure, audiometry awareness and hearing protection"],
      ["Waste Management", "Scheduled wastes and environmental compliance on site"],
    ],
  },
  {
    id: "leadership",
    tag: "LEADERSHIP",
    icon: Icons.people,
    title: "Leadership & Management",
    desc: "Build the leaders who set the tone and the teams that follow. Culture is trained, not announced.",
    courses: [
      ["Leadership Skills", "Core skills for supervisors and emerging managers"],
      ["Elevating Leadership", "The next step: leading teams, not just tasks"],
      ["Change Management", "Carrying your people through transitions without losing momentum"],
      ["Management Skills", "Planning, delegation, feedback and performance"],
      ["Team Development", "Building trust and accountability in existing teams"],
      ["Team Building (A-Team)", "Our signature programme — shift supervisors leave talking differently"],
      ["Managing Negative Culture", "Diagnosing and turning around toxic workplace culture"],
    ],
  },
  {
    id: "consultancy",
    tag: "DOSH · DOE",
    icon: Icons.gauge,
    title: "Specialized Consultancy",
    desc: "Registered assessments that keep you on the right side of DOSH and DOE — explained in plain language, followed up until gaps are closed.",
    courses: [
      ["CHRA", "Chemical Health Risk Assessment — DOSH"],
      ["NRA", "Noise Risk Assessment — DOSH"],
      ["ERA", "Environmental Risk Assessment — DOE"],
      ["HIRARC", "Hazard Identification, Risk Assessment & Risk Control — DOSH HIRARC Guidelines 2008"],
      ["Boundary Noise Monitoring", "Compliance with DOE noise limits at your perimeter"],
      ["Stack Monitoring", "Emissions testing per EQA requirements"],
      ["Effluent Testing", "Discharge compliance for factory effluent"],
      ["ISO Support", "Implementation and certification support for 45001 · 9001 · 14001 · 18000"],
    ],
  },
  {
    id: "compliance",
    tag: "ACT 514",
    icon: Icons.doc,
    title: "Compliance & Legislation",
    desc: "Know your duties under Act 514, and build the culture to meet them.",
    courses: [
      ["OSH Acts & Regulations", "OSHA 1994 · FMA 1967 · EQA 1974 — what applies to you"],
      ["Safety Committee Duties", "Per the S&H Committee Regulations 1996"],
      ["OSH Officer Development", "Competency for registered OSH officers"],
      ["OSH Coordinator Development", "For organisations that need coordinators, not full-time officers"],
      ["Accident Prevention", "Hazard awareness and proactive control"],
      ["Behaviour-Based Safety", "Observation & feedback — culture change on the floor"],
      ["PPE Importance", "Selection, use and enforcement of personal protective equipment"],
    ],
  },
];

const ASSESSMENTS = [
  { name: "CHRA", authority: "DOSH", scope: "Chemical Health Risk Assessment — exposure to chemicals hazardous to health" },
  { name: "NRA", authority: "DOSH", scope: "Noise Risk Assessment — noise exposure and hearing conservation" },
  { name: "ERA", authority: "DOE", scope: "Environmental Risk Assessment — risk to the environment from your operations" },
  { name: "HIRARC", authority: "DOSH", scope: "Hazard identification, risk assessment and risk control per HIRARC Guidelines 2008" },
  { name: "Boundary Noise", authority: "DOE", scope: "Perimeter noise monitoring against licensed limits" },
  { name: "Stack Monitoring", authority: "DOE", scope: "Emissions testing and reporting per EQA requirements" },
  { name: "Effluent Testing", authority: "DOE", scope: "Discharge quality testing against standard B conditions" },
];

export default function Services() {
  return (
    <>
      <section className="page-hero">
        <div className="container page-hero__inner">
          <span className="eyebrow">Services</span>
          <h1 className="display">Four pillars. One standard: excellence.</h1>
          <p className="page-hero__lead">
            From boardroom leadership to the factory floor, our programmes are built around the regulations your
            organisation must meet and the culture you want to build.
          </p>
          <div className="page-hero__meta">
            <span className="page-hero__tag">OSHA 1994</span>
            <span className="page-hero__tag">FMA 1967</span>
            <span className="page-hero__tag">EQA 1974</span>
            <span className="page-hero__tag">ISO 45001 · 9001 · 14001 · 18000</span>
          </div>
        </div>
      </section>

      {PILLARS.map((p, pi) => (
        <section key={p.id} id={p.id} className={`section${pi % 2 === 1 ? " section--carbon" : ""}`}>
          <div className="container">
            <Reveal>
              <SectionHead
                eyebrow={`${p.tag} — Pillar ${String(pi + 1).padStart(2, "0")}`}
                title={p.title}
                lead={p.desc}
              />
            </Reveal>
            <div className="prog-list">
              {p.courses.map(([name, meta], i) => (
                <Reveal key={name} delay={Math.min(i * 40, 200)}>
                  <div className="prog-item">
                    <div>
                      <div className="prog-item__name">{name}</div>
                      <div className="prog-item__meta">{meta}</div>
                    </div>
                    <Link
                      href={`/booking?course=${encodeURIComponent(name)}`}
                      className="prog-item__book"
                    >
                      Enquire →
                    </Link>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="section section--carbon" id="assessments">
        <div className="container">
          <div className="split">
            <div>
              <Reveal>
                <span className="eyebrow">Assessments register</span>
                <h2 className="display">The DOSH &amp; DOE assessments we run</h2>
                <p>
                  Registered assessments that keep you on the right side of DOSH and DOE. The team explains every
                  finding in plain language — and follows up until you close the gaps.
                </p>
                <ul className="checklist">
                  <li>
                    Assessments per DOSH HIRARC Guidelines 2008 and applicable DOSH / DOE regulations
                    <small>Methodology you can defend in an audit</small>
                  </li>
                  <li>
                    Findings explained in plain language, with a follow-up plan to close gaps
                    <small>Not a report you file and forget</small>
                  </li>
                  <li>
                    ISO support alongside — 45001 · 9001 · 14001 · 18000
                    <small>Assessments feed your management system</small>
                  </li>
                </ul>
              </Reveal>
            </div>
            <div className="split__aside">
              <Reveal>
                <div className="figure">
                  <Img src={IMG.services} alt="Industrial plant floor with heavy machinery" />
                  <span>FIG. C — ASSESSMENTS IN OPERATING ENVIRONMENTS</span>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal>
            <SectionHead
              eyebrow="What we assess"
              title="Assessments & monitoring, at a glance"
            />
          </Reveal>
          <div className="prog-list">
            {ASSESSMENTS.map((a, i) => (
              <Reveal key={a.name} delay={Math.min(i * 40, 200)}>
                <div className="prog-item">
                  <div>
                    <div className="prog-item__name">{a.name}</div>
                    <div className="prog-item__meta">{a.scope}</div>
                  </div>
                  <span className="prog-item__book" style={{ color: "var(--amber)", borderColor: "var(--line)" }}>
                    {a.authority}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
