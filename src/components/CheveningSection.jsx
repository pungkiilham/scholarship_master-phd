import {
  cheveningOverview,
  cheveningTimeline,
  cheveningUniversities,
  cheveningExcluded,
  cheveningCombos,
  cheveningSecondOptions,
  cheveningEntryRequirements,
} from '../data/cheveningData'

export default function CheveningSection() {
  return (
    <div>
      <h2 className="section-title urgent">Chevening Scholarship 2026/27</h2>
      <p style={{ color: '#94a3b8', marginBottom: '1rem' }}>
        Fully funded 1-year taught Master's at any UK university. Applications open — closes {cheveningOverview.closeDate}.
      </p>

      <div className="filters" style={{ marginBottom: '1rem' }}>
        <a className="card-link" style={{ padding: '0.5rem 1rem', background: '#1e293b', borderRadius: '8px' }} href={cheveningOverview.applyLink} target="_blank" rel="noopener noreferrer">Apply Now (Chevening)</a>
        <a className="card-link" style={{ padding: '0.5rem 1rem', background: '#1e293b', borderRadius: '8px' }} href={cheveningOverview.courseFinder} target="_blank" rel="noopener noreferrer">Course Finder</a>
      </div>

      <div className="notes-section">
        <h3>Overview</h3>
        <ul className="notes-list">
          {cheveningOverview.notes.map((n, i) => <li key={i}>{n}</li>)}
        </ul>
      </div>

      <h3 className="section-subtitle">Application Timeline</h3>
      <div className="tracker-table-wrap">
        <table className="tracker-table">
          <thead>
            <tr><th>Stage</th><th>Date</th></tr>
          </thead>
          <tbody>
            {cheveningTimeline.map((t, i) => (
              <tr key={i}><td>{t.stage}</td><td>{t.date}</td></tr>
            ))}
          </tbody>
        </table>
      </div>

      <h3 className="section-subtitle">Entry Requirements (You Pass All)</h3>
      <div className="tracker-table-wrap">
        <table className="tracker-table">
          <thead>
            <tr><th>Requirement</th><th>Detail</th></tr>
          </thead>
          <tbody>
            {cheveningEntryRequirements.map((r, i) => (
              <tr key={i}><td><strong>{r.item}</strong></td><td>{r.value}</td></tr>
            ))}
          </tbody>
        </table>
      </div>

      <h3 className="section-subtitle">Recommended Course Combos</h3>
      <div className="scholarship-grid">
        {cheveningCombos.map((combo, i) => (
          <div className="scholarship-card" key={i}>
            <div className="card-header">
              <div className="card-title">{combo.name}</div>
            </div>
            <ul className="notes-list">
              {combo.courses.map((c, j) => <li key={j}>{c}</li>)}
            </ul>
          </div>
        ))}
      </div>

      <h3 className="section-subtitle">University & Major Shortlist</h3>
      <p style={{ color: '#94a3b8', marginBottom: '1rem' }}>
        Verified against each university's official course page (full-time, taught MSc, autumn start). Confirm on the Chevening course finder before applying.
      </p>
      <div className="tracker-table-wrap">
        <table className="tracker-table">
          <thead>
            <tr><th>University</th><th>Course</th><th>Cluster</th><th>Entry</th><th>IELTS</th><th>App Fee</th></tr>
          </thead>
          <tbody>
            {cheveningUniversities.map((u, i) => (
              <tr key={i}>
                <td><strong>{u.uni}</strong></td>
                <td>{u.course}</td>
                <td>{u.cluster}</td>
                <td>{u.entry}</td>
                <td>{u.ielts}</td>
                <td>{u.fee}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h3 className="section-subtitle">Second Option — Less Related / Adjacent Majors</h3>
      <p style={{ color: '#94a3b8', marginBottom: '1rem' }}>
        Backup direction if the Engineering Management story feels too narrow. Chevening requires all 3 courses to be similar — pick from ONE cluster only.
      </p>
      {cheveningSecondOptions.map((group, i) => (
        <div key={i} style={{ marginBottom: '1rem' }}>
          <h4 style={{ color: '#cbd5e1', margin: '0.75rem 0 0.5rem' }}>{group.cluster}</h4>
          <div className="tracker-table-wrap">
            <table className="tracker-table">
              <thead>
                <tr><th>University</th><th>Course</th><th>Entry</th><th>IELTS</th></tr>
              </thead>
              <tbody>
                {group.courses.map((c, j) => (
                  <tr key={j}>
                    <td>{c.uni}</td>
                    <td>{c.course}</td>
                    <td>{c.entry}</td>
                    <td>{c.ielts}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ))}

      <h3 className="section-subtitle">Courses to EXCLUDE (Not Chevening-Eligible)</h3>
      <div className="tracker-table-wrap">
        <table className="tracker-table">
          <thead>
            <tr><th>University</th><th>Course</th><th>Reason</th></tr>
          </thead>
          <tbody>
            {cheveningExcluded.map((e, i) => (
              <tr key={i}><td>{e.uni}</td><td>{e.course}</td><td>{e.reason}</td></tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
