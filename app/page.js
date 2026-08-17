import Link from "next/link";
import Reveal from "@/components/Reveal";
import Tabs from "@/components/Tabs";
import { SectionHead, StatsBar, CTABand, Img, Icons } from "@/components/shared";
import { IMG } from "@/lib/images";

const PILLARS = [
  {
    tag: "DOSH · OSHA",
    icon: Icons.shield,
    title: "OSH Training & Excellence",
    desc: "Practical, hands-on safety training your people will actually use.",
    courses: [
      "First Aid & CPR · Fire Fighting · ERT Procedures",
      "Chemical, Forklift, Machinery & Conveyor Safety",
      "Working at Height · Confined Space Entry",
      "Ergonomics · Hearing Conservation · Waste Management",
    ],
    href: "/programmes#osh",
  },
  {
    tag: "LEADERSHIP",
    icon: Icons.people,
    title: "Leadership & Management",
    desc: "Build the leaders who set the tone and the teams that follow.",
    courses: [
      "Leadership Skills · Change Management · Management Skills",
      "Elevating Leadership · Team Development",
      "Team Building (A-Team!)",
      "Managing Negative Culture",
    ],
    href: "/programmes#lead",
  },
  {
    tag: "DOSH · DOE",
    icon: Icons.gauge,
    title: "Specialized Consultancy",
    desc: "Registered assessments that keep you on the right side of DOSH and DOE.",
    courses: [
      "CHRA · NRA · ERA · HIRARC (DOSH)",
      "Boundary Noise · Stack Monitoring · Effluent Testing (DOE)",
      "ISO 45001 · 9001 · 14001 · 18000 support",
    ],
    href: "/services#consultancy",
  },
  {
    tag: "ACT 514",
    icon: Icons.doc,
    title: "Compliance & Legislation",
    desc: "Know your duties under Act 514, and build the culture to meet them.",
    courses: [
      "OSH Acts & Regulations · Committee Duties",
      "OSH Officer / Coordinator Development",
      "Accident Prevention",
      "Behaviour-Based Safety · PPE Importance",
    ],
    href: "/programmes#comp",
  },
];

const FEATURES = [
  { icon: Icons.check, title: "Regulation-aligned", text: "Every programme maps to OSHA 1994, FMA 1967, EQA 1974 and the DOSH / DOE guidelines that apply to you." },
  { icon: Icons.pin, title: "At your site or ours", text: "In-house training delivered at your premises, scheduled around your shifts, or join our public programmes." },
  { icon: Icons.shield, title: "HRD Corp claimable", text: "We are a registered training provider. Levy-funded training without the paperwork headache." },
  { icon: Icons.clock, title: "Hands-on, not slides", text: "Live fire drills, CPR mannequins, harness practice and real assessments. Learning that transfers to the floor." },
  { icon: Icons.people, title: "Bahasa & English", text: "Programmes delivered in Bahasa Malaysia, English, or both, so every level of your workforce understands." },
  { icon: Icons.doc, title: "Custom-built content", text: "Programmes tailored to your industry, your machinery and your hazards. Never off-the-shelf filler." },
];

const COURSES = [
  { name: "First Aid & CPR", meta: "Emergency Preparedness · 2 days · hands-on certification" },
  { name: "Forklift Competency", meta: "Industrial · theory + practical operator assessment" },
  { name: "Working at Height", meta: "High-Risk · harness, ladders & anchors" },
  { name: "Confined Space Entry", meta: "High-Risk · gas testing & rescue practice" },
  { name: "Team Building (A-Team)", meta: "Teams · our signature programme" },
  { name: "Behaviour-Based Safety", meta: "Culture · observation & feedback" },
];

const TEMPLATES = [
  {
    icon: Icons.doc,
    title: "HIRARC Register",
    text: "Hazard identification, risk assessment and risk control per DOSH HIRARC Guidelines 2008, with the L × S matrix included.",
    href: "/templates/hirarc",
  },
  {
    icon: Icons.doc,
    title: "Safety Committee Minutes",
    text: "Meeting minutes with attendance, matters arising and action registers, per the S&H Committee Regulations 1996.",
    href: "/templates/committee-minutes",
  },
  {
    icon: Icons.doc,
    title: "Accident Investigation Report",
    text: "Immediate and root cause analysis with corrective actions, for accidents, near-misses and dangerous occurrences.",
    href: "/templates/accident-investigation",
  },
];

export default function Home() {
  return (
    <>
      {/* ============ HERO — the technical drawing ============ */}
      <section className="hero">
        <div className="container hero__grid">
          <div className="hero__copy">
            <div className="hero__dim" aria-hidden="true">
              <span className="hero__dim-label">FIG. S·01 — Safety-critical training</span>
            </div>
            <p className="hero__eyebrow">
              Registered <strong>HRD Corp</strong> Training Provider · Since 2001
            </p>
            <h1 className="display">
              Training that makes your workplace <span className="hero__hl">safer</span> — and your people
              stronger.
            </h1>
            <p className="hero__lead">
              High Focus Training Consultancy (M) Sdn Bhd is a Malaysian EHS training and consultancy practice
              serving DOSH and DOE compliance through OSH training, leadership programmes, risk assessments and
              ISO support — at your site or ours.
            </p>
            <div className="hero__specs" aria-label="Regulations covered">
              <span className="hero__spec">OSHA 1994</span>
              <span className="hero__spec">FMA 1967</span>
              <span className="hero__spec">EQA 1974</span>
              <span className="hero__spec">DOSH</span>
              <span className="hero__spec">DOE</span>
            </div>
            <div className="hero__cta">
              <Link href="/programmes" className="btn btn--primary btn--lg">
                Explore Programmes
                {Icons.arrow}
              </Link>
              <Link href="/assessment" className="btn btn--ghost btn--lg">
                Take the Free Self-Assessment
              </Link>
            </div>
            <div className="hero__trust">
              {Icons.shield}
              <span>Trusted by management teams across manufacturing, food, logistics &amp; more</span>
            </div>
          </div>

          <div className="hero__fig">
            <span className="hero__fig-ann">FIG. A — PLANT SAFETY BRIEFING, NORTHERN REGION</span>
            <div className="hero__fig-img">
              <Img src={IMG.hero} alt="Engineers in safety gear reviewing plans on a factory floor" priority />
            </div>
            <div className="hero__card">
              <span className="hero__card-icon">{Icons.shield}</span>
              <span>
                <strong>DOSH &amp; DOE Compliance</strong>
                <small>CHRA · NRA · ERA · HIRARC · Boundary noise · Stack &amp; effluent</small>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ============ STATS ============ */}
      <StatsBar />

      {/* ============ FOUR PILLARS ============ */}
      <section className="section" id="services">
        <div className="container">
          <Reveal>
            <SectionHead
              eyebrow="What we do"
              title="Four pillars. One standard: excellence."
              lead="From boardroom leadership to the factory floor, our programmes are built around the regulations your organisation must meet and the culture you want to build."
            />
          </Reveal>
          <div className="pillar-grid">
            {PILLARS.map((p, i) => (
              <Reveal key={p.title} delay={i * 80}>
                <article className="pillar">
                  <span className="pillar__tag">{p.tag}</span>
                  <span className="pillar__icon">{p.icon}</span>
                  <h3>{p.title}</h3>
                  <p className="pillar__desc">{p.desc}</p>
                  <ul className="pillar__courses">
                    {p.courses.map((c) => (
                      <li key={c}>{c}</li>
                    ))}
                  </ul>
                  <Link className="pillar__link" href={p.href}>
                    View programme
                    {Icons.arrow}
                  </Link>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ WHY US ============ */}
      <section className="section section--carbon">
        <div className="container">
          <Reveal>
            <SectionHead eyebrow="Why High Focus" title="Why organisations choose us" center />
          </Reveal>
          <div className="feature-grid">
            {FEATURES.map((f, i) => (
              <Reveal key={f.title} delay={(i % 3) * 80}>
                <div className="feature">
                  <span className="feature__icon">{f.icon}</span>
                  <div>
                    <h3>{f.title}</h3>
                    <p>{f.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FREE TOOLS ============ */}
      <section className="section">
        <div className="container">
          <Reveal>
            <SectionHead
              eyebrow="Free tools for HR & safety teams"
              title="Tools that turn questions into action"
            />
          </Reveal>
          <div className="tool-grid">
            <Reveal>
              <div className="tool-card">
                <span className="tool-card__tag">Free · 5 minutes</span>
                <span className="tool-card__icon">{Icons.shield}</span>
                <h3>OSH Readiness Self-Assessment</h3>
                <p>
                  Answer 20 questions across policy, risk management, training and culture. Get a readiness score,
                  per-area breakdown and recommended programmes for your gaps.
                </p>
                <Link href="/assessment" className="btn btn--primary">
                  Start the Assessment
                </Link>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="tool-card">
                <span className="tool-card__tag">Free · instant result</span>
                <span className="tool-card__icon">{Icons.doc}</span>
                <h3>HRD Corp Levy Calculator</h3>
                <p>
                  Input your headcount and monthly payroll to see your monthly and annual levy, the rate that
                  applies to you, and how much of it your training can claim back.
                </p>
                <Link href="/calculator" className="btn btn--primary">
                  Calculate Your Levy
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ FEATURED PROGRAMMES ============ */}
      <section className="section section--carbon">
        <div className="container">
          <Reveal>
            <SectionHead
              eyebrow="Featured programmes"
              title="Popular this quarter"
              actions={
                <>
                  <Link href="/programmes" className="btn btn--ghost">
                    View all 33+ programmes
                  </Link>
                  <Link href="/calendar" className="btn btn--primary">
                    {Icons.clock}
                    Training Calendar
                  </Link>
                </>
              }
            />
          </Reveal>
          <div className="course-list">
            {COURSES.map((c, i) => (
              <Reveal key={c.name} delay={i * 40}>
                <div className="course-row">
                  <Link href={`/booking?course=${encodeURIComponent(c.name)}`}>
                    <span className="course-row__name">
                      {c.name}
                      <small>{c.meta}</small>
                    </span>
                    <span className="course-row__meta">Book →</span>
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ TRACK RECORD ============ */}
      <section className="section" id="clients">
        <div className="container">
          <Reveal>
            <SectionHead eyebrow="Our track record" title="Who we serve, what they say, what we've earned" />
          </Reveal>
          <Reveal>
            <Tabs />
          </Reveal>
        </div>
      </section>

      {/* ============ FREE TEMPLATES ============ */}
      <section className="section section--carbon">
        <div className="container">
          <Reveal>
            <SectionHead
              eyebrow="Free resources"
              title="Compliance templates, free to download"
              actions={
                <Link href="/templates" className="btn btn--ghost">
                  Browse all templates
                </Link>
              }
            />
          </Reveal>
          <div className="template-grid">
            {TEMPLATES.map((t, i) => (
              <Reveal key={t.title} delay={i * 80}>
                <div className="template-card">
                  <span className="template-card__icon">{t.icon}</span>
                  <h3>{t.title}</h3>
                  <p>{t.text}</p>
                  <div className="template-card__actions">
                    <Link href={t.href} className="btn btn--ghost">
                      Open template
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <CTABand />
    </>
  );
}
