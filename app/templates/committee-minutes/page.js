import TemplateDoc from "@/components/TemplateDoc";

export const metadata = {
  title: "Safety Committee Minutes Template",
  description:
    "Safety and health committee meeting minutes template with attendance, matters arising and action registers, per the S&H Committee Regulations 1996.",
};

const ATTENDANCE = [
  ["1", "Chairman", "", "", ""],
  ["2", "Secretary", "", "", ""],
  ["3", "Member", "", "", ""],
  ["4", "Member", "", "", ""],
  ["5", "Member", "", "", ""],
  ["6", "Member", "", "", ""],
  ["7", "Member (employee rep)", "", "", ""],
  ["8", "Invited guest", "", "", ""],
];

const ACTIONS = [
  ["1", "", "", "", ""],
  ["2", "", "", "", ""],
  ["3", "", "", "", ""],
  ["4", "", "", "", ""],
  ["5", "", "", "", ""],
];

export default function CommitteeMinutesPage() {
  return (
    <TemplateDoc
      title="Safety Committee Minutes"
      blurb="Meeting minutes with attendance, matters arising and action registers, per the Safety & Health Committee Regulations 1996."
      meta="S&H Committee Regulations 1996"
    >
      <div className="tpl__head">
        <h1>SAFETY &amp; HEALTH COMMITTEE — MINUTES OF MEETING</h1>
        <p>
          Maintained in accordance with the Safety and Health Committee Regulations 1996, Occupational Safety and
          Health Act 1994
        </p>
      </div>

      <div className="tpl-grid2">
        <div className="tpl-field">
          <label>Company / organisation</label>
          <div className="tpl-line" />
        </div>
        <div className="tpl-field">
          <label>Meeting no.</label>
          <div className="tpl-line" />
        </div>
        <div className="tpl-field">
          <label>Date</label>
          <div className="tpl-line" />
        </div>
        <div className="tpl-field">
          <label>Time / venue</label>
          <div className="tpl-line" />
        </div>
        <div className="tpl-field">
          <label>Chairman</label>
          <div className="tpl-line" />
        </div>
        <div className="tpl-field">
          <label>Secretary</label>
          <div className="tpl-line" />
        </div>
      </div>

      <h2>1. Attendance</h2>
      <table>
        <thead>
          <tr>
            <th style={{ width: "6%" }}>No.</th>
            <th style={{ width: "28%" }}>Role</th>
            <th style={{ width: "30%" }}>Name</th>
            <th style={{ width: "18%" }}>Position</th>
            <th style={{ width: "18%" }}>Present / absent</th>
          </tr>
        </thead>
        <tbody>
          {ATTENDANCE.map((r) => (
            <tr key={r[0]} style={{ height: 34 }}>
              {r.map((c, i) => (
                <td key={i}>{c}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      <h2>2. Confirmation of previous minutes</h2>
      <p>
        Minutes of the previous meeting (No. ___ held on ___) were confirmed as a true record:{" "}
        <input type="text" style={{ border: 0, borderBottom: "1px solid #b9c2c9", width: 120 }} /> / amended:{" "}
        <input type="text" style={{ border: 0, borderBottom: "1px solid #b9c2c9", width: 120 }} />
      </p>

      <h2>3. Matters arising</h2>
      <table>
        <thead>
          <tr>
            <th style={{ width: "8%" }}>Ref</th>
            <th style={{ width: "40%" }}>Matter</th>
            <th style={{ width: "20%" }}>Action by</th>
            <th style={{ width: "16%" }}>Due date</th>
            <th style={{ width: "16%" }}>Status</th>
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

      <h2>4. New business</h2>
      <p style={{ minHeight: 70 }}>
        <em>Accidents, near-misses and dangerous occurrences since the last meeting; safety inspections; new legislation; training needs; etc.</em>
      </p>

      <h2>5. Action register</h2>
      <table>
        <thead>
          <tr>
            <th style={{ width: "8%" }}>No.</th>
            <th style={{ width: "40%" }}>Action item</th>
            <th style={{ width: "20%" }}>Owner</th>
            <th style={{ width: "16%" }}>Due date</th>
            <th style={{ width: "16%" }}>Status</th>
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

      <h2>6. Adjournment</h2>
      <p>
        Next meeting: <input type="text" style={{ border: 0, borderBottom: "1px solid #b9c2c9", width: 140 }} />{" "}
        (per S&amp;H Committee Regulations 1996, the committee shall meet at least once every three months)
      </p>

      <div className="tpl-sign">
        <div>Chairman — signature / date</div>
        <div>Secretary — signature / date</div>
      </div>

      <p style={{ marginTop: 40 }}>
        <small className="tpl-note">
          High Focus Training Consultancy (M) Sdn Bhd (749381-M) provides this template for free use. For
          assistance with committee duties training, contact info@highfocus.com.my.
        </small>
      </p>
    </TemplateDoc>
  );
}
