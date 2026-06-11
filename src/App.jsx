import { useMemo } from 'react'
import StatsCard from './components/StatsCard'
import ProfileCard from './components/ProfileCard'
import PrioritySection from './components/PrioritySection'
import AllScholarships from './components/AllScholarships'
import ApplicationTracker from './components/ApplicationTracker'
import ActionTimeline from './components/ActionTimeline'
import NotesSection from './components/NotesSection'
import { priorityScholarships, allScholarships } from './data/scholarships'

export default function App() {
  const countries = useMemo(() => {
    const set = new Set(allScholarships.map(s => s.country))
    return set.size
  }, [])

  return (
    <div className="container">
      <header>
        <h1>Scholarship & Study Abroad Dashboard</h1>
        <p className="subtitle">Pungki Ilham Rizky Soni | IT Project Manager | Master's Research - ASAP 2026/27</p>
      </header>

      <div className="stats">
        <StatsCard number={allScholarships.length} label="Total Scholarships" />
        <StatsCard number={priorityScholarships.length} label="Priority Masters" />
        <StatsCard number={priorityScholarships.length} label="Fully Funded" />
        <StatsCard number={countries} label="Countries" />
      </div>

      <ProfileCard />
      <PrioritySection />
      <AllScholarships />
      <ApplicationTracker />
      <ActionTimeline />
      <NotesSection />
    </div>
  )
}
