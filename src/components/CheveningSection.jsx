import {
  cheveningOverview,
  cheveningTimeline,
  cheveningUniversities,
  cheveningExcluded,
  cheveningCombos,
  cheveningSecondOptions,
  cheveningEntryRequirements,
  cheveningGpaNote,
  cheveningPortalCourses,
  cheveningMajorGroups,
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
            {combo.desc && (
              <p style={{ color: '#94a3b8', fontSize: '0.85rem', marginTop: '0.5rem' }}>{combo.desc}</p>
            )}
          </div>
        ))}
      </div>

      <h3 className="section-subtitle">GPA Reality-Check (3.24/4.00)</h3>
      <div className="tracker-table-wrap">
        <table className="tracker-table">
          <thead>
            <tr><th>Point</th><th>Detail</th></tr>
          </thead>
          <tbody>
            {cheveningGpaNote.map((g, i) => (
              <tr key={i}><td><strong>{g.item}</strong></td><td>{g.value}</td></tr>
            ))}
          </tbody>
        </table>
      </div>

      <h3 className="section-subtitle">University & Major Shortlist</h3>
      <p style={{ color: '#94a3b8', marginBottom: '1rem' }}>
        Verified against each university's official course page (full-time, taught MSc, autumn start) and the Chevening course finder. Full portal capture: {cheveningPortalCourses.length} Engineering Management listings across 4 pages. Confirm on the Chevening course finder before applying.
      </p>
      <div className="tracker-table-wrap">
        <table className="tracker-table">
          <thead>
            <tr><th>University</th><th>Course</th><th>Cluster</th><th>Entry</th><th>IELTS</th><th>App Fee</th><th>Chev. Partner</th></tr>
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
                <td>{u.partner ? '✓' : '—'}</td>
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

      <h3 className="section-subtitle">Major Groups — Linier Engineering vs Management</h3>
      <p style={{ color: '#94a3b8', marginBottom: '1rem' }}>
        {cheveningMajorGroups.intro}
      </p>
      {cheveningMajorGroups.groups.map((group, g) => (
        <div key={g} style={{ marginBottom: '1.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
            <h4 style={{ color: group.highlight ? '#4ade80' : '#cbd5e1', margin: 0 }}>{group.name}</h4>
            {group.tag && (
              <span style={{ fontSize: '0.7rem', padding: '0.15rem 0.5rem', borderRadius: '999px', background: group.highlight ? 'rgba(74,222,128,0.15)' : '#1e293b', color: group.highlight ? '#4ade80' : '#94a3b8' }}>{group.tag}</span>
            )}
          </div>
          <p style={{ color: '#94a3b8', fontSize: '0.85rem', margin: '0 0 0.5rem' }}>{group.description}</p>
          <div className="tracker-table-wrap">
            <table className="tracker-table">
              <thead>
                <tr><th>Fit</th><th>University</th><th>Major(s)</th><th>Note</th></tr>
              </thead>
              <tbody>
                {group.schools.map((s, i) => (
                  <tr key={i}>
                    <td>{s.fit ? `#${s.fit}` : '—'}</td>
                    <td><strong>{s.uni}</strong></td>
                    <td>{s.majors.join(' • ')}</td>
                    <td>{s.note}</td>
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
