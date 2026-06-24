import { useState } from 'react'
import ScholarshipCard from './ScholarshipCard'
import { allScholarships } from '../data/scholarships'

const currentMonth = new Date().getMonth() + 1

const isAsap = (s) => {
  const m = s.month
  return m === 0 || m >= currentMonth
}

const filters = [
  { key: 'asap', label: '🚀 ASAP (Open Now)' },
  { key: 'all', label: 'All' },
  { key: 'phd', label: 'PhD' },
  { key: 'masters', label: 'Master\'s' },
  { key: 'germany', label: 'Germany' },
  { key: 'netherlands', label: 'Netherlands' },
  { key: 'uk', label: 'UK' },
  { key: 'australia', label: 'Australia' },
  { key: 'canada', label: 'Canada' },
  { key: 'scandinavia', label: 'Scandinavia' },
  { key: 'hungary', label: 'Hungary' },
  { key: 'china', label: 'China' },
  { key: 'italy', label: 'Italy' },
]

export default function AllScholarships() {
  const [activeFilter, setActiveFilter] = useState('all')
  const [sortOrder, setSortOrder] = useState('default')

  const filtered = allScholarships.filter(s => {
    if (activeFilter === 'all') return true
    if (activeFilter === 'asap') return isAsap(s)
    return s.degree === activeFilter || s.country.toLowerCase().includes(activeFilter)
  })

  const displayed = [...filtered].sort((a, b) => {
    if (sortOrder === 'default') return 0
    const ma = a.month || 13
    const mb = b.month || 13
    if (ma === 13 && mb === 13) return 0
    if (ma === 13) return 1
    if (mb === 13) return -1
    return sortOrder === 'month-asc' ? ma - mb : mb - ma
  })

  return (
    <>
      <h2 className="section-title">All Scholarships</h2>
      <p style={{ color: '#94a3b8', marginBottom: '1rem' }}>
        Complete list of scholarships including PhD, Master's, and other opportunities.
      </p>

      <div className="filters">
        {filters.map(f => (
          <button
            key={f.key}
            className={`filter-btn ${activeFilter === f.key ? 'active' : ''}`}
            onClick={() => setActiveFilter(f.key)}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="sort-row">
        <span className="sort-label">Sort by opening month:</span>
        <button className={`sort-btn ${sortOrder === 'month-asc' ? 'active' : ''}`} onClick={() => setSortOrder('month-asc')}>📅 Jan → Dec</button>
        <button className={`sort-btn ${sortOrder === 'month-desc' ? 'active' : ''}`} onClick={() => setSortOrder('month-desc')}>📅 Dec → Jan</button>
        <button className={`sort-btn ${sortOrder === 'default' ? 'active' : ''}`} onClick={() => setSortOrder('default')}>Default Order</button>
      </div>

      <div className="scholarship-grid">
        {displayed.length === 0 ? (
          <div className="no-results">No scholarships match this filter</div>
        ) : (
          displayed.map(s => (
            <ScholarshipCard key={s.id} scholarship={s} asap={isAsap(s)} />
          ))
        )}
      </div>
    </>
  )
}
