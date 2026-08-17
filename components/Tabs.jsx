"use client";

import { useState } from "react";
import { Icons } from "./shared";

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
  {
    icon: Icons.shield,
    title: "HRD Corp Training Provider",
    text: "Listed in HRD Corp's Training Enhancement & Excellence (TEE) provider listing. Your levy funds training with us.",
  },
  {
    icon: Icons.doc,
    title: "SSM Registered",
    text: "High Focus Training Consultancy (M) Sdn Bhd, registered with SSM under no. 749381-M (200601029624).",
  },
  {
    icon: Icons.people,
    title: "Part of the HIFOTAC Group",
    text: "Wholly owned subsidiary of HIFOTAC. Two decades of environmental, health and safety practice.",
  },
];

export default function Tabs() {
  const [active, setActive] = useState("clients");

  return (
    <div className="tabs">
      <div className="tablist" role="tablist" aria-label="Track record">
        {[
          ["clients", "Clients"],
          ["testimonials", "Testimonials"],
          ["awards", "Awards & Registrations"],
        ].map(([id, label]) => (
          <button
            key={id}
            role="tab"
            className="tab-btn"
            aria-selected={active === id}
            onClick={() => setActive(id)}
          >
            {label}
          </button>
        ))}
      </div>

      <div
        className="tab-panel"
        role="tabpanel"
        aria-hidden={active !== "clients"}
        hidden={active !== "clients"}
      >
        <p style={{ color: "var(--steel)", maxWidth: 640, marginBottom: 26 }}>
          We work with organisations across industries, from food and manufacturing plants to logistics and
          construction teams, mainly across the northern region and beyond.
        </p>
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

      <div
        className="tab-panel"
        role="tabpanel"
        aria-hidden={active !== "testimonials"}
        hidden={active !== "testimonials"}
      >
        <div className="testimonial-grid">
          {TESTIMONIALS.map((t) => (
            <div className="tquote" key={t.role + t.org}>
              <span className="tquote__stars" aria-label="5 out of 5 stars">
                {t.stars}
              </span>
              <blockquote>{t.quote}</blockquote>
              <div className="tquote__who">
                <strong>{t.role}</strong>
                <span>{t.org}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div
        className="tab-panel"
        role="tabpanel"
        aria-hidden={active !== "awards"}
        hidden={active !== "awards"}
      >
        <div className="award-grid">
          {AWARDS.map((a) => (
            <div className="award" key={a.title}>
              <span className="award__medal">{a.icon}</span>
              <h3>{a.title}</h3>
              <p>{a.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
