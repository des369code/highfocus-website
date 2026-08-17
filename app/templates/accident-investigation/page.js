import TemplateDoc from "@/components/TemplateDoc";

export const metadata = {
  title: "Accident Investigation Report Template",
  description:
    "Accident investigation report template with immediate and root cause analysis and corrective actions, for accidents, near-misses and dangerous occurrences.",
};

const ACTIONS = [
  ["1", "", "", "", ""],
  ["2", "", "", "", ""],
  ["3", "", "", "", ""],
  ["4", "", "", "", ""],
  ["5", "", "", "", ""],
];

export default function AccidentInvestigationPage() {
  return (
    <TemplateDoc
      title="Accident Investigation Report"
      blurb="Immediate and root cause analysis with corrective actions, for accidents, near-misses and dangerous occurrences."
      meta="Accident prevention · root cause analysis"
    >
      <div className="tpl__head">
        <h1>ACCIDENT INVESTIGATION REPORT</h1>
        <p>
          For accidents, near-misses and dangerous occurrences — immediate and root cause analysis with
          corrective actions, reported under the Occupational Safety and Health Act 1994
        </p>
      </div>

      <h2>1. Incident details</h2>
      <div className="tpl-grid2">
        <div className="tpl-field">
          <label>Company / site</label>
          <div className="tpl-line" />
        </div>
        <div className="tpl-field">
          <label>Report no.</label>
          <div className="tpl-line" />
        </div>
        <div className="tpl-field">
          <label>Date of incident</label>
          <div className="tpl-line" />
        </div>
        <div className="tpl-field">
          <label>Time</label>
          <div className="tpl-line" />
        </div>
        <div className="tpl-field">
          <label>Location / work area</label>
          <div className="tpl-line" />
        </div>
        <div className="tpl-field">
          <label>Investigator(s)</label>
          <div className="tpl-line" />
        </div>
      </div>

      <h2>2. Classification</h2>
      <table>
        <thead>
          <tr>
            <th style={{ width: "34%" }}>Type</th>
            <th style={{ width: "22%" }}>Select</th>
            <th style={{ width: "44%" }}>Notes</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Accident (injury / property damage)</td>
            <td />
            <td />
          </tr>
          <tr>
            <td>Near-miss</td>
            <td />
            <td />
          </tr>
          <tr>
            <td>Dangerous occurrence</td>
            <td />
            <td />
          </tr>
          <tr>
            <td>Occupational disease / ill health</td>
            <td />
            <td />
          </tr>
        </tbody>
      </table>

      <h2>3. Persons involved &amp; witnesses</h2>
      <table>
        <thead>
          <tr>
            <th style={{ width: "30%" }}>Name</th>
            <th style={{ width: "25%" }}>Position</th>
            <th style={{ width: "45%" }}>Involvement / statement attached?</th>
          </tr>
        </thead>
        <tbody>
          <tr style={{ height: 36 }}>
            <td />
            <td />
            <td />
          </tr>
          <tr style={{ height: 36 }}>
            <td />
            <td />
            <td />
          </tr>
          <tr style={{ height: 36 }}>
            <td />
            <td />
            <td />
          </tr>
        </tbody>
      </table>

      <h2>4. Description of the incident</h2>
      <p style={{ minHeight: 80 }}>
        <em>What happened, in sequence: task being performed, conditions, sequence of events, injury or damage caused.</em>
      </p>

      <h2>5. Immediate causes</h2>
      <table>
        <thead>
          <tr>
            <th style={{ width: "50%" }}>Unsafe acts</th>
            <th>Unsafe conditions</th>
          </tr>
        </thead>
        <tbody>
          <tr style={{ height: 44 }}>
            <td />
            <td />
          </tr>
          <tr style={{ height: 44 }}>
            <td />
            <td />
          </tr>
        </tbody>
      </table>

      <h2>6. Root cause analysis</h2>
      <p style={{ minHeight: 70 }}>
        <em>Why did the unsafe acts / conditions exist? Consider: management systems, procedures, training, supervision, maintenance, communication, design.</em>
      </p>

      <h2>7. Corrective actions</h2>
      <table>
        <thead>
          <tr>
            <th style={{ width: "8%" }}>No.</th>
            <th style={{ width: "38%" }}>Corrective action</th>
            <th style={{ width: "20%" }}>Owner</th>
            <th style={{ width: "16%" }}>Due date</th>
            <th style={{ width: "18%" }}>Status</th>
          </tr>
        </thead>
        <tbody>
          {ACTIONS.map((r) => (
            <tr key={r[0]} style={{ height: 40 }}>
              {r.map((c, i) => (
                <td key={i}>{c}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      <h2>8. Prevention review</h2>
      <p>
        Will the corrective actions prevent recurrence of this and similar incidents?{" "}
        <input type="text" style={{ border: 0, borderBottom: "1px solid #b9c2c9", width: 140 }} />
      </p>

      <div className="tpl-sign">
        <div>Investigator — signature / date</div>
        <div>Management review — signature / date</div>
      </div>

      <p style={{ marginTop: 40 }}>
        <small className="tpl-note">
          High Focus Training Consultancy (M) Sdn Bhd (749381-M) provides this template for free use. For
          accident prevention training or investigation support, contact info@highfocus.com.my.
        </small>
      </p>
    </TemplateDoc>
  );
}
