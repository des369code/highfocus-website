import Link from "next/link";
import Reveal from "@/components/Reveal";
import { SectionHead, CTABand } from "@/components/shared";

export const metadata = {
  title: "Clients & Testimonials",
  description:
    "The organisations High Focus Training Consultancy serves — manufacturing, food & beverage, logistics, construction, electronics, petrochemical and retail — plus what their safety officers and plant managers say.",
};

const INDUSTRIES = [
  { name: "Manufacturing", icon: <path d="M2 20h20M4 20V10l6-4v14M10 20V6l10-2v16" /> },
  { name: "Food & Beverage", icon: <path d="M2 21v-1a5 5 0 015-5h4a5 5 0 015 5v1M16 11l5 3-5 3M19 14v-3" /> },
  { name: "Logistics", icon: <path d="M3 7h18v10H3zM7 17v3M17 17v3M10 13h4" /> },
  { name: "Construction", icon: <path d="M2 20h20M4 20V8l8-4 8 4v12M9 20v-6h6v6" /> },
  { name: "Electronics", icon: <path d="M5 3h14v18H5zM9 8h6M9 12h6M9 16h3" /> },
  { name: "Petrochemical", icon: <path d="M12 3l7 4v5c0 5-3.5 8-7 9-3.5-1-7-4-7-9V7z" /> },
  { name: "Retail", icon: <path d="M6 2l12 4v12l-12-4V2zM6 6l12 4" /> },
];

const TESTIMONIALS = [
  {
    stars: "★★★★★",
    quote:
      "The forklift competency training was practical and to the point. Our operators came back more confident, and our audit trail for DOSH was complete.",
    role: "Safety & Health Officer",
    org: "Manufacturing plant · Northern region",
  },
  {
    stars: "★★★★★",
    quote:
      "High Focus handled our HIRARC and CHRA from start to finish. The team explained every finding in plain language and followed up until we closed the gaps.",
    role: "Plant Manager",
    org: "Food processing",
  },
  {
    stars: "★★★★★",
    quote:
      "The A-Team building session changed how our shift supervisors talk to each other. We still see the difference months later.",
    role: "HR Manager",
    org: "Logistics & warehousing",
  },
];

const AWARDS = [
  { title: "HRD Corp Training Provider", text: "Listed in HRD Corp's Training Enhancement & Excellence (TEE) provider listing. Your levy funds training with us." },
  { title: "SSM Registered", text: "High Focus Training Consultancy (M) Sdn Bhd, registered with SSM under no. 749381-M (200601029624)." },
  { title: "Part of the HIFOTAC Group", text: "Wholly owned subsidiary of HIFOTAC. Two decades of environmental, health and safety practice." },
];

export default function Clients() {
  return (
    <>
      <section className="page-hero">
        <div className="container page-hero__inner">
          <span className="eyebrow">Clients &amp; testimonials</span>
          <h1 className="display">Who we serve, what they say, what we've earned</h1>
          <p className="page-hero__lead">
            We work with organisations across industries, from food and manufacturing plants to logistics and
            construction teams, mainly across the northern region and beyond.
          </p>
          <div className="page-hero__meta">
            <span className="page-hero__tag">7 industries served</span>
            <span className="page-hero__tag">Northern region &amp; beyond</span>
            <span className="page-hero__tag">Since 2001</span>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal>
            <SectionHead
              eyebrow="Industries we serve"
              title="The sectors that trust us with their people"
              lead="From the factory floor to the distribution centre, our programmes are built around the hazards of your industry — at your site or ours."
            />
          </Reveal>
          <div className="client-strip">
            {INDUSTRIES.map((c) => (
              <span className="client-logo" key={c.name}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="30" height="30">
                  {c.icon}
                </svg>
                {c.name}
              </span>
            ))}
          </div>
          <p style={{ color: "var(--steel-dim)", fontSize: "0.82rem", marginTop: 26, textAlign: "center" }}>
            Looking to add your logo here? If your organisation has trained with us, let us know.
          </p>
        </div>
      </section>

      <section className="section section--carbon">
        <div className="container">
          <Reveal>
            <SectionHead
              eyebrow="In their words"
              title="What safety officers & plant managers say"
            />
          </Reveal>
          <div className="testimonial-grid">
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={t.role} delay={i * 80}>
                <div className="tquote">
                  <span className="tquote__stars" aria-label="5 out of 5 stars">
                    {t.stars}
                  </span>
                  <blockquote>{t.quote}</blockquote>
                  <div className="tquote__who">
                    <strong>{t.role}</strong>
                    <span>{t.org}</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal>
            <SectionHead eyebrow="Registrations" title="The credentials behind the work" />
          </Reveal>
          <div className="award-grid">
            {AWARDS.map((a, i) => (
              <Reveal key={a.title} delay={i * 80}>
                <div className="award">
                  <span className="award__medal">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="30" height="30">
                      <circle cx="12" cy="9" r="6" />
                      <path d="M8.5 14.5L7 22l5-3 5 3-1.5-7.5" />
                    </svg>
                  </span>
                  <h3>{a.title}</h3>
                  <p>{a.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <div style={{ marginTop: 48, textAlign: "center" }}>
            <Reveal>
              <Link href="/booking" className="btn btn--primary btn--lg">
                Join them — book a programme
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
