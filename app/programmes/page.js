import Link from "next/link";
import Reveal from "@/components/Reveal";
import { SectionHead, CTABand, Img, Icons } from "@/components/shared";
import { IMG } from "@/lib/images";

export const metadata = {
  title: "Programmes",
  description:
    "33+ training programmes from High Focus Training Consultancy — first aid & CPR, forklift competency, working at height, confined space, leadership, team building and compliance. HRD Corp claimable.",
};

const FEATURED = [
  {
    name: "First Aid & CPR",
    cat: "Emergency Preparedness",
    detail: "2 days · hands-on certification",
    desc: "Certification-level first aid and CPR with practice on mannequins — the training your emergency response team actually relies on.",
  },
  {
    name: "Forklift Competency",
    cat: "Industrial",
    detail: "Theory + practical operator assessment",
    desc: "Operator competency with a practical assessment and a complete audit trail for DOSH.",
  },
  {
    name: "Working at Height",
    cat: "High-Risk",
    detail: "Harness, ladders & anchors",
    desc: "High-risk work programme covering harness fitting, ladder discipline and anchor selection.",
  },
  {
    name: "Confined Space Entry",
    cat: "High-Risk",
    detail: "Gas testing & rescue practice",
    desc: "Entry procedures, gas testing and practice rescue for confined space work.",
  },
  {
    name: "Team Building (A-Team)",
    cat: "Teams",
    detail: "Our signature programme",
    desc: "The session shift supervisors still talk about months later — communication, trust and accountability.",
  },
  {
    name: "Behaviour-Based Safety",
    cat: "Culture",
    detail: "Observation & feedback",
    desc: "Move safety from rules to habit — observation and feedback systems that change floor culture.",
  },
];

const CATEGORIES = [
  {
    id: "osh",
    tag: "DOSH · OSHA",
    title: "OSH Training & Excellence",
    desc: "Practical, hands-on safety training your people will actually use.",
    items: [
      ["First Aid & CPR", "2 days · hands-on certification"],
      ["Fire Fighting & ERT Procedures", "Live drills · ERT setup"],
      ["Chemical Safety", "Handling · storage · response"],
      ["Forklift Competency", "Theory + practical assessment"],
      ["Machinery & Conveyor Safety", "Guarding · lockout · safe operation"],
      ["Working at Height", "High-risk · harness & anchors"],
      ["Confined Space Entry", "High-risk · gas testing & rescue"],
      ["Ergonomics", "Manual handling · workstation risk"],
      ["Hearing Conservation", "Noise exposure · protection"],
      ["Waste Management", "Scheduled wastes · compliance"],
    ],
  },
  {
    id: "lead",
    tag: "LEADERSHIP",
    title: "Leadership & Management",
    desc: "Build the leaders who set the tone and the teams that follow.",
    items: [
      ["Leadership Skills", "Supervisors & emerging managers"],
      ["Elevating Leadership", "Leading teams, not just tasks"],
      ["Change Management", "Transitions without momentum loss"],
      ["Management Skills", "Planning · delegation · feedback"],
      ["Team Development", "Trust & accountability in teams"],
      ["Team Building (A-Team)", "Our signature programme"],
      ["Managing Negative Culture", "Diagnose · address · rebuild"],
    ],
  },
  {
    id: "comp",
    tag: "ACT 514",
    title: "Compliance & Legislation",
    desc: "Know your duties under Act 514, and build the culture to meet them.",
    items: [
      ["OSH Acts & Regulations", "OSHA 1994 · FMA 1967 · EQA 1974"],
      ["Safety Committee Duties", "S&H Committee Regs 1996"],
      ["OSH Officer Development", "Competency for officers"],
      ["OSH Coordinator Development", "For coordinator-level roles"],
      ["Accident Prevention", "Hazard awareness · control"],
      ["Behaviour-Based Safety", "Observation & feedback"],
      ["PPE Importance", "Selection · use · enforcement"],
    ],
  },
];

export default function Programmes() {
  return (
    <>
      <section className="page-hero">
        <div className="container page-hero__inner">
          <span className="eyebrow">Programmes</span>
          <h1 className="display">33+ programmes. Every one claimable.</h1>
          <p className="page-hero__lead">
            From high-risk operations to boardroom leadership — delivered in Bahasa Malaysia, English, or both, at
            your site or ours. As an HRD Corp registered provider, every programme is levy-claimable.
          </p>
          <div className="page-hero__meta">
            <span className="page-hero__tag">HRD Corp claimable</span>
            <span className="page-hero__tag">At your site or ours</span>
            <span className="page-hero__tag">BM · EN · Both</span>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal>
            <SectionHead
              eyebrow="Popular this quarter"
              title="Featured programmes"
              lead="The six most requested programmes this quarter — book any of them and we'll handle the HRD Corp claim."
            />
          </Reveal>
          <div className="pillar-grid" style={{ gridTemplateColumns: "repeat(3, 1fr)" }}>
            {FEATURED.map((p, i) => (
              <Reveal key={p.name} delay={(i % 3) * 80}>
                <article className="pillar">
                  <span className="pillar__tag">{p.cat}</span>
                  <h3 style={{ marginTop: 8 }}>{p.name}</h3>
                  <p className="pillar__desc">{p.desc}</p>
                  <ul className="pillar__courses">
                    <li>{p.detail}</li>
                    <li>HRD Corp claimable</li>
                  </ul>
                  <Link
                    href={`/booking?course=${encodeURIComponent(p.name)}`}
                    className="pillar__link"
                  >
                    Book this programme
                    {Icons.arrow}
                  </Link>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--carbon">
        <div className="container">
          <div className="split" style={{ marginBottom: "clamp(48px, 6vw, 80px)" }}>
            <div>
              <Reveal>
                <span className="eyebrow">How delivery works</span>
                <h2 className="display">At your site or ours, around your shifts</h2>
                <p>
                  In-house training delivered at your premises, scheduled around your shifts — or join our public
                  programmes. Content is custom-built for your industry, your machinery and your hazards. Never
                  off-the-shelf filler.
                </p>
                <ul className="checklist">
                  <li>
                    Delivered in Bahasa Malaysia, English, or both
                    <small>Every level of your workforce understands</small>
                  </li>
                  <li>
                    Hands-on, not slides — live drills, mannequins, harness practice
                    <small>Learning that transfers to the floor</small>
                  </li>
                  <li>
                    Proposal, quotation and HRD Corp claim support
                    <small>One point of contact, end to end</small>
                  </li>
                </ul>
              </Reveal>
            </div>
            <div className="split__aside">
              <Reveal>
                <div className="figure">
                  <Img src={IMG.programmes} alt="Forklift operator moving pallets in a warehouse" />
                  <span>FIG. D — OPERATOR COMPETENCY, ASSESSED ON SITE</span>
                </div>
              </Reveal>
            </div>
          </div>

          {CATEGORIES.map((cat, ci) => (
            <div key={cat.id} id={cat.id} className="prog-cat" style={{ marginTop: ci > 0 ? 72 : 0 }}>
              <Reveal>
                <div className="prog-cat__head">
                  <h2>{cat.title}</h2>
                  <span>{cat.tag}</span>
                </div>
                <p className="prog-cat__desc">{cat.desc}</p>
              </Reveal>
              <div className="prog-list">
                {cat.items.map(([name, meta], i) => (
                  <Reveal key={name} delay={Math.min(i * 30, 180)}>
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
          ))}

          <div style={{ marginTop: 64, textAlign: "center" }}>
            <Reveal>
              <p style={{ color: "var(--steel-dim)", fontFamily: "var(--font-mono)", fontSize: "0.74rem", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 20 }}>
                Need something not listed? Programmes are custom-built for your operations.
              </p>
              <Link href="/booking" className="btn btn--primary btn--lg">
                Request a proposal
                {Icons.arrow}
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
