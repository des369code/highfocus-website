import TemplateDoc from "@/components/TemplateDoc";

export const metadata = {
  title: "HIRARC Register Template",
  description:
    "HIRARC register template per DOSH HIRARC Guidelines 2008 — hazard identification, risk assessment with L × S matrix, risk control and residual risk.",
};

const ROWS = [
  ["1", "", "", "", "", "", "", "", "", ""],
  ["2", "", "", "", "", "", "", "", "", ""],
  ["3", "", "", "", "", "", "", "", "", ""],
  ["4", "", "", "", "", "", "", "", "", ""],
  ["5", "", "", "", "", "", "", "", "", ""],
  ["6", "", "", "", "", "", "", "", "", ""],
  ["7", "", "", "", "", "", "", "", "", ""],
  ["8", "", "", "", "", "", "", "", "", ""],
];

const LIKELIHOOD = [
  ["5", "Almost certain", "Happens frequently (e.g. daily / weekly)"],
  ["4", "Likely", "Happens regularly (e.g. monthly)"],
  ["3", "Possible", "Happens occasionally (e.g. several times a year)"],
  ["2", "Unlikely", "Happens rarely (e.g. once every few years)"],
  ["1", "Rare", "May happen in exceptional circumstances"],
];

const SEVERITY = [
  ["5", "Catastrophic", "Fatalities, permanent total disability, major environmental damage"],
  ["4", "Major", "Permanent partial disability, serious injury or ill health, significant environmental impact"],
  ["3", "Moderate", "Medical treatment, lost-time injury, contained environmental impact"],
  ["2", "Minor", "First aid case, minor property damage"],
  ["1", "Negligible", "No injury, negligible property damage"],
];

const RISK_LEVELS = [
  ["15 – 25", "High", "Immediate action required. Stop work if controls are inadequate."],
  ["8 – 12", "Medium", "Action required. Control measures to be implemented within a set timeframe."],
  ["1 – 7", "Low", "Acceptable. Maintain existing controls and review periodically."],
];

export default function HirarcPage() {
  return (
    <TemplateDoc
      title="HIRARC Register"
      blurb="Hazard identification, risk assessment and risk control per DOSH HIRARC Guidelines 2008, with the L × S matrix included."
      meta="DOSH HIRARC Guidelines 2008"
    >
      <div className="tpl__head">
        <h1>HIRARC REGISTER</h1>
        <p>
          Hazard Identification, Risk Assessment and Risk Control — prepared in accordance with the Guidelines for
          Hazard Identification, Risk Assessment and Risk Control (HIRARC), DOSH Malaysia, 2008
        </p>
      </div>

      <div className="tpl-grid2">
        <div className="tpl-field">
          <label>Company / organisation</label>
          <div className="tpl-line" />
        </div>
        <div className="tpl-field">
          <label>Department / work area</label>
          <div className="tpl-line" />
        </div>
        <div className="tpl-field">
          <label>Date of assessment</label>
          <div className="tpl-line" />
        </div>
        <div className="tpl-field">
          <label>Assessed by (name / position)</label>
          <div className="tpl-line" />
        </div>
        <div className="tpl-field">
          <label>Reviewed by</label>
          <div className="tpl-line" />
        </div>
        <div className="tpl-field">
          <label>Next review date</label>
          <div className="tpl-line" />
        </div>
      </div>

      <h2>Risk register</h2>
      <table>
        <thead>
          <tr>
            <th style={{ width: "4%" }}>No.</th>
            <th style={{ width: "16%" }}>Activity / task</th>
            <th style={{ width: "14%" }}>Hazard</th>
            <th style={{ width: "14%" }}>Potential consequence</th>
            <th style={{ width: "5%" }}>L</th>
            <th style={{ width: "5%" }}>S</th>
            <th style={{ width: "8%" }}>Risk level</th>
            <th style={{ width: "16%" }}>Risk control measures</th>
            <th style={{ width: "8%" }}>Residual risk</th>
            <th style={{ width: "10%" }}>Action owner</th>
          </tr>
        </thead>
        <tbody>
          {ROWS.map((r) => (
            <tr key={r[0]} style={{ height: 42 }}>
              {r.map((c, i) => (
                <td key={i}>{c}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Likelihood (L)</h2>
      <table>
        <thead>
          <tr>
            <th style={{ width: "6%" }}>Score</th>
            <th style={{ width: "22%" }}>Level</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {LIKELIHOOD.map(([s, l, d]) => (
            <tr key={s}>
              <td>{s}</td>
              <td>{l}</td>
              <td>{d}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Severity (S)</h2>
      <table>
        <thead>
          <tr>
            <th style={{ width: "6%" }}>Score</th>
            <th style={{ width: "22%" }}>Level</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {SEVERITY.map(([s, l, d]) => (
            <tr key={s}>
              <td>{s}</td>
              <td>{l}</td>
              <td>{d}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Risk level = L × S</h2>
      <table>
        <thead>
          <tr>
            <th style={{ width: "16%" }}>Risk score</th>
            <th style={{ width: "16%" }}>Risk level</th>
            <th>Action required</th>
          </tr>
        </thead>
        <tbody>
          {RISK_LEVELS.map(([s, l, d]) => (
            <tr key={s}>
              <td>{s}</td>
              <td>{l}</td>
              <td>{d}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="tpl-sign">
        <div>Prepared by — signature / date</div>
        <div>Reviewed by — signature / date</div>
      </div>

      <p style={{ marginTop: 40 }}>
        <small className="tpl-note">
          High Focus Training Consultancy (M) Sdn Bhd (749381-M) provides this template for free use. For
          assistance completing your HIRARC, contact info@highfocus.com.my.
        </small>
      </p>
    </TemplateDoc>
  );
}
