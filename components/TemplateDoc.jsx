"use client";

export default function TemplateDoc({ title, blurb, meta, children }) {
  return (
    <>
      <section className="page-hero">
        <div className="container page-hero__inner">
          <span className="eyebrow">Free template</span>
          <h1 className="display">{title}</h1>
          <p className="page-hero__lead">{blurb}</p>
          <div className="page-hero__meta">
            <span className="page-hero__tag">{meta}</span>
            <span className="page-hero__tag">Free to use</span>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="tpl-actions" style={{ marginTop: "clamp(28px, 4vw, 48px)" }}>
            <button type="button" className="btn btn--primary" onClick={() => window.print()}>
              Print / Save as PDF
            </button>
            <a className="btn btn--ghost" href="mailto:info@highfocus.com.my?subject=Template help — HIRARC / committee minutes / investigation">
              Need help completing it?
            </a>
          </div>
          <div className="tpl">{children}</div>
        </div>
      </section>
    </>
  );
}
