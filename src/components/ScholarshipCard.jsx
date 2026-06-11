import { useState } from 'react'

const monthNames = ['', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

export default function ScholarshipCard({ scholarship, urgent, asap }) {
  const [expanded, setExpanded] = useState(false)
  const { title, country, tags, description, deadline, link, linkLabel, urgencyBadge, details, month, openingLabel } = scholarship
  const showAsap = asap && month !== 0 && !urgencyBadge

  return (
    <div className={`scholarship-card ${urgent ? 'urgent' : ''} ${showAsap ? 'asap' : ''}`}>
      <div className="card-header">
        <div className="card-title">
          {title}
          {urgencyBadge && <span className="urgency-badge">{urgencyBadge}</span>}
          {showAsap && <span className="asap-badge">ASAP ({monthNames[month]})</span>}
        </div>
        <span className="card-country">{country}</span>
      </div>
      <div>
        {tags.map((tag, i) => (
          <span className="card-degree" key={i}>{tag}</span>
        ))}
      </div>
      <p className="card-desc">{description}</p>
      <div className="card-deadline">📅 {deadline}</div>
      <div className="card-footer">
        <a href={link} className="card-link" target="_blank" rel="noopener noreferrer">{linkLabel}</a>
        {details && (
          <button className="filter-btn" onClick={() => setExpanded(!expanded)}>
            {expanded ? '▲ Less Info' : '▼ Key Info'}
          </button>
        )}
      </div>
      {expanded && details && (
        <div className="details-panel">
          <div className="detail-section">
            <h4>Benefits</h4>
            <ul>
              {details.benefits.map((b, i) => <li key={i}>{b}</li>)}
            </ul>
          </div>
          <div className="detail-section">
            <h4>Requirements</h4>
            <ul>
              {details.requirements.map((r, i) => <li key={i}>{r}</li>)}
            </ul>
          </div>
          <div className="detail-section fit-box">
            <h4>Your Fit</h4>
            <p>{details.fit}</p>
          </div>
          <div className="detail-section deadline-note">
            <h4>Deadline Note</h4>
            <p>{details.deadlineNote}</p>
          </div>
        </div>
      )}
    </div>
  )
}
