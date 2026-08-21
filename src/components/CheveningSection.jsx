import { useState } from 'react'
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
  cheveningUniversityGroups,
  qsRanks,
} from '../data/cheveningData'

function Collapsible({ title, badge, defaultOpen = false, children }) {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <div style={{ marginBottom: '1.5rem' }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '0.75rem',
          padding: '0.75rem 1rem',
          background: '#1e293b',
          border: '1px solid #334155',
          borderRadius: '8px',
          color: '#e2e8f0',
          fontSize: '1rem',
          fontWeight: 600,
          cursor: 'pointer',
          textAlign: 'left',
        }}
      >
        <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span style={{ fontSize: '0.8rem', color: '#94a3b8' }}>{open ? '▾' : '▸'}</span>
          {title}
          {badge && (
            <span style={{ fontSize: '0.7rem', padding: '0.15rem 0.5rem', borderRadius: '999px', background: 'rgba(74,222,128,0.15)', color: '#4ade80' }}>{badge}</span>
          )}
        </span>
        <span style={{ fontSize: '0.75rem', color: '#64748b' }}>{open ? 'Hide' : 'Show'}</span>
      </button>
      {open && <div style={{ paddingTop: '0.75rem' }}>{children}</div>}
    </div>
  )
}

function SortableTable({ rows, columns, defaultKey = 'uni' }) {
  const [sortKey, setSortKey] = useState(defaultKey)
  const [sortDir, setSortDir] = useState('asc')

  const sorted = [...rows].sort((a, b) => {
    const av = String(a[sortKey] ?? '').toLowerCase()
    const bv = String(b[sortKey] ?? '').toLowerCase()
    if (av < bv) return sortDir === 'asc' ? -1 : 1
    if (av > bv) return sortDir === 'asc' ? 1 : -1
    return 0
  })

  const toggleSort = (key) => {
    if (sortKey === key) setSortDir(sortDir === 'asc' ? 'desc' : 'asc')
    else { setSortKey(key); setSortDir('asc') }
  }

  return (
    <div className="tracker-table-wrap">
      <table className="tracker-table">
        <thead>
          <tr>
            {columns.map((c, i) => (
              <th
                key={i}
                onClick={() => toggleSort(c.key)}
                style={{ cursor: 'pointer', userSelect: 'none' }}
              >
                {c.label} {sortKey === c.key ? (sortDir === 'asc' ? '▲' : '▼') : '↕'}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sorted.map((u, i) => (
            <tr key={i}>
              {columns.map((c, j) => (
                <td key={j}>
                  {c.key === 'uni' ? <strong>{u[c.key]}</strong> : c.key === 'recommended' ? (u[c.key] ? '⭐' : '—') : u[c.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default function CheveningSection() {
  const universityColumns = [
    { key: 'recommended', label: 'Rec' },
    { key: 'uni', label: 'University' },
    { key: 'course', label: 'Course' },
    { key: 'cluster', label: 'Cluster' },
    { key: 'entry', label: 'Entry' },
    { key: 'ielts', label: 'IELTS' },
    { key: 'fee', label: 'App Fee' },
    { key: 'partner', label: 'Chev. Partner' },
    { key: 'qsRank', label: 'QS Rank' },
  ]

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

      <Collapsible title="Overview" defaultOpen={true}>
        <div className="notes-section">
          <h3>Overview</h3>
          <ul className="notes-list">
            {cheveningOverview.notes.map((n, i) => <li key={i}>{n}</li>)}
          </ul>
        </div>
      </Collapsible>

      <Collapsible title="Application Timeline">
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
      </Collapsible>

      <Collapsible title="Entry Requirements (You Pass All)" defaultOpen={true}>
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
      </Collapsible>

      <Collapsible title="Recommended Course Combos" defaultOpen={true} badge="Pick 1">
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
      </Collapsible>

      <Collapsible title="GPA Reality-Check (3.24/4.00)">
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
      </Collapsible>

      <Collapsible title="University & Major Shortlist (Grouped + Sortable)" defaultOpen={true} badge={`${cheveningUniversities.length} unis`}>
        <p style={{ color: '#94a3b8', marginBottom: '1rem' }}>
          Grouped by major type. Click any column header to sort. ⭐ = recommended. Full portal capture: {cheveningPortalCourses.length} Engineering Management listings across 4 pages. Confirm on the Chevening course finder before applying.
        </p>
        {cheveningUniversityGroups.map((group, g) => (
          <div key={g} style={{ marginBottom: '1.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
              <h3 style={{ color: group.highlight ? '#4ade80' : '#cbd5e1', margin: 0, fontSize: '1rem' }}>{group.name}</h3>
              {group.tag && (
                <span style={{ fontSize: '0.7rem', padding: '0.15rem 0.5rem', borderRadius: '999px', background: group.highlight ? 'rgba(74,222,128,0.15)' : '#1e293b', color: group.highlight ? '#4ade80' : '#94a3b8' }}>{group.tag}</span>
              )}
            </div>
            <p style={{ color: '#94a3b8', fontSize: '0.85rem', margin: '0 0 0.5rem' }}>{group.description}</p>
            <SortableTable rows={group.schools} columns={universityColumns} />
          </div>
        ))}
      </Collapsible>

      <Collapsible title="Wife-suggested Majors — Linier Engineering vs Management">
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
      </Collapsible>

      <Collapsible title="Second Option — Less Related / Adjacent Majors">
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
      </Collapsible>

      <Collapsible title="Courses to EXCLUDE (Not Chevening-Eligible)">
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
      </Collapsible>
    </div>
  )
}