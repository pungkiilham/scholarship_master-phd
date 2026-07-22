import { useMemo } from 'react'
import { Routes, Route } from 'react-router-dom'
import StatsCard from './components/StatsCard'
import ProfileCard from './components/ProfileCard'
import PrioritySection from './components/PrioritySection'
import AllScholarships from './components/AllScholarships'
import ApplicationTracker from './components/ApplicationTracker'
import ActionTimeline from './components/ActionTimeline'
import NotesSection from './components/NotesSection'
import NavBar from './components/NavBar'
import IeltsPrep from './components/IeltsPrep'
import { allScholarships } from './data/scholarships'

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

      <NavBar />

      <div className="stats">
        <StatsCard number={allScholarships.length} label="Total Scholarships" />
        <StatsCard number={allScholarships.filter(s => s.degree === 'masters').length} label="Master's" />
        <StatsCard number={allScholarships.filter(s => s.degree === 'phd').length} label="PhD / Doctoral" />
        <StatsCard number={countries} label="Countries" />
      </div>

      <Routes>
        <Route path="/" element={
          <>
            <ProfileCard />
            <PrioritySection />
            <NotesSection />
          </>
        } />
        <Route path="/scholarships" element={<AllScholarships />} />
        <Route path="/tracker" element={<ApplicationTracker />} />
        <Route path="/timeline" element={<ActionTimeline />} />
        <Route path="/ielts" element={<IeltsPrep />} />
      </Routes>
    </div>
  )
}
