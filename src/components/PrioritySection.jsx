import ScholarshipCard from './ScholarshipCard'
import { priorityScholarships } from '../data/scholarships'

export default function PrioritySection() {
  return (
    <>
      <h2 className="section-title urgent">Priority Masters (ASAP 2026/27)</h2>
      <p style={{ color: '#94a3b8', marginBottom: '1rem' }}>
        Fully funded European scholarships with upcoming deadlines. Your 8+ years experience is highly valued!
      </p>
      <div className="scholarship-grid">
        {priorityScholarships.map(s => (
          <ScholarshipCard key={s.id} scholarship={s} urgent={s.urgency === 'critical'} />
        ))}
      </div>
    </>
  )
}
