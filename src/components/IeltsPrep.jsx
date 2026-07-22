import { useState } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'

const initialScores = [
  { skill: 'Reading', band: 6.5, target: 7.0, color: '#34d399', note: 'Good comprehension' },
  { skill: 'Listening', band: 6.5, target: 7.0, color: '#60a5fa', note: 'Good understanding' },
  { skill: 'Writing T1', band: 5.0, target: 6.5, color: '#f87171', note: 'Priority: word count 150+' },
  { skill: 'Writing T2', band: 6.0, target: 6.5, color: '#fb923c', note: 'Word count good' },
  { skill: 'Speaking', band: 6.5, target: 7.0, color: '#a78bfa', note: 'Solid B2 - grammar needs work' },
]

const initialPracticeLog = {
  writing_task1: [
    { date: '2026-04-25', activity: 'Bar Chart - Sports by Age', score: '5.0', notes: 'Word count 135, no paragraphs' },
    { date: '2026-04-25', activity: 'Line Graph - Transport', score: '5.5', notes: 'Better linking words' },
    { date: '2026-04-26', activity: 'Pie Chart - Study Reasons', score: '5.0', notes: 'Word count ~95' },
    { date: '2026-04-26', activity: 'Process Diagram - Chocolate', score: '5.0', notes: 'Word count ~80' },
  ],
  writing_task2: [
    { date: '2026-05-06', activity: 'Discussion - University subjects', score: '6.0', notes: 'Word count ~298' },
    { date: '2026-05-09', activity: 'Opinion - Competition vs Cooperation', score: '6.0', notes: 'Word count ~280, informal conclusion' },
    { date: '2026-05-16', activity: 'Problem-Solution - Crime', score: '6.0', notes: 'Word count ~410+, good structure' },
    { date: '2026-07-11', activity: 'Discussion - Species loss vs other issues', score: '5.5', notes: 'Grammar/spelling errors' },
  ],
  reading: [
    { date: '2026-06-20', activity: 'Passage 2 - Neuroscience of Memory', score: '6.0', notes: '9/14 correct, T/F/NG weak' },
  ],
  listening: [
    { date: '2026-04-26', activity: 'Hotel conversation', score: '-', notes: 'Basic practice' },
  ],
  speaking: [
    { date: '2026-07-22', activity: 'Speaking Mock - Technology, Urban Data & Privacy', score: '6.5', notes: 'Fluency 6.5, Lexical 6.5, Grammar 5.5, Pronunciation 6.5' },
  ],
}

const skillLabels = {
  writing_task1: 'Writing Task 1',
  writing_task2: 'Writing Task 2',
  reading: 'Reading',
  listening: 'Listening',
  speaking: 'Speaking',
}

const phases = {
  1: {
    label: 'Phase 1: Foundation',
    weeks: 'Weeks 1-2',
    total: '~3h 15min',
    days: [
      { day: 'Mon', skill: 'Writing T1', task: '1 chart/graph essay (150+ words, 4 paragraphs)', time: '25 min' },
      { day: 'Tue', skill: 'Speaking', task: '1 cue card (record → transcribe → find fillers)', time: '20 min' },
      { day: 'Wed', skill: 'Writing T2', task: '1 essay (clear opinion + 2 examples)', time: '40 min' },
      { day: 'Thu', skill: 'Reading', task: '1 passage (T/F/NG focus)', time: '25 min' },
      { day: 'Fri', skill: 'Listening', task: 'Section 1-2 (spelling + numbers)', time: '20 min' },
      { day: 'Sat', skill: 'Mixed', task: '1 reading passage + 1 writing task', time: '45 min' },
      { day: 'Sun', skill: 'Review', task: 'Track mistakes, study Band 9 samples, steal 3 phrases', time: '20 min' },
    ],
  },
  2: {
    label: 'Phase 2: Building',
    weeks: 'Weeks 3-4',
    total: '~3h 35min',
    days: [
      { day: 'Mon', skill: 'Writing T1', task: 'Chart essay + data comparison language', time: '25 min' },
      { day: 'Tue', skill: 'Speaking', task: 'Cue card (<3 filler words per min)', time: '20 min' },
      { day: 'Wed', skill: 'Writing T2', task: 'Essay + advanced linking', time: '40 min' },
      { day: 'Thu', skill: 'Reading', task: 'Passage (Matching Headings + Summary)', time: '25 min' },
      { day: 'Fri', skill: 'Listening', task: 'Section 3-4 (academic dialogues)', time: '20 min' },
      { day: 'Sat', skill: 'Mixed', task: 'Full writing T1+T2 (timed)', time: '65 min' },
      { day: 'Sun', skill: 'Review', task: 'Compare with Band 9, update mistake log', time: '20 min' },
    ],
  },
  3: {
    label: 'Phase 3: Refining',
    weeks: 'Weeks 5-6',
    total: '~5h',
    days: [
      { day: 'Mon', skill: 'Writing T1', task: 'Timed (20 min) + self-assess', time: '25 min' },
      { day: 'Tue', skill: 'Speaking', task: 'Cue card + Part 3 follow-up', time: '25 min' },
      { day: 'Wed', skill: 'Writing T2', task: 'Timed (35 min) + self-assess', time: '40 min' },
      { day: 'Thu', skill: 'Reading', task: 'Full 3-passage mock (60 min)', time: '60 min' },
      { day: 'Fri', skill: 'Listening', task: 'Full 4-section mock (30 min)', time: '30 min' },
      { day: 'Sat', skill: 'Full mock', task: 'Writing T1+T2 + Reading 3 passages', time: '100 min' },
      { day: 'Sun', skill: 'Review', task: 'Analyse mock results, drill weakest areas', time: '30 min' },
    ],
  },
  4: {
    label: 'Phase 4: Exam Ready',
    weeks: 'Weeks 7-8',
    total: '~5h 45min',
    days: [
      { day: 'Mon', skill: 'Writing', task: 'Full T1+T2 mock (exam conditions)', time: '60 min' },
      { day: 'Tue', skill: 'Reading', task: 'Full 3-passage mock (60 min)', time: '60 min' },
      { day: 'Wed', skill: 'Review', task: 'Targeted drill on weakest question types', time: '30 min' },
      { day: 'Thu', skill: 'Listening', task: 'Full 4-section mock', time: '30 min' },
      { day: 'Fri', skill: 'Speaking', task: 'Full mock (Part 1+2+3, record everything)', time: '25 min' },
      { day: 'Sat', skill: 'Full exam', task: 'All 4 skills in one sitting (exam conditions)', time: '2h 45min' },
      { day: 'Sun', skill: 'Rest', task: 'Light vocabulary review only', time: '15 min' },
    ],
  },
}

function ScoreCard({ skill, band, target, color, note }) {
  const progress = Math.min((band / target) * 100, 100)
  return (
    <div className="ielts-score-card">
      <div className="ielts-score-header">
        <span className="ielts-score-skill">{skill}</span>
        <span className="ielts-score-target">Target {target}</span>
      </div>
      <div className="ielts-score-value" style={{ color }}>{band}</div>
      <div className="ielts-score-bar">
        <div className="ielts-score-fill" style={{ width: `${progress}%`, background: color }} />
      </div>
      <div className="ielts-score-note">{note}</div>
    </div>
  )
}

function PracticeLog({ log, skill }) {
  const entries = log[skill] || []
  if (entries.length === 0) {
    return <div className="ielts-log-empty">No practice recorded yet</div>
  }
  return (
    <div>
      <h4 className="ielts-log-skill">{skillLabels[skill] || skill}</h4>
      <table className="ielts-log-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Activity</th>
            <th>Score</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          {[...entries].reverse().map((e, i) => (
            <tr key={i}>
              <td className="ielts-log-date">{e.date}</td>
              <td>{e.activity}</td>
              <td className="ielts-log-score">{e.score}</td>
              <td className="ielts-log-notes">{e.notes}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default function IeltsPrep() {
  const [scores] = useState(initialScores)
  const [practiceLog, setPracticeLog] = useLocalStorage('ieltsPracticeLog', initialPracticeLog)
  const [phase, setPhase] = useState(1)
  const [showForm, setShowForm] = useState(false)
  const [formData, setFormData] = useState({ skill: 'writing_task1', activity: '', score: '', notes: '' })

  const handleAddEntry = (e) => {
    e.preventDefault()
    if (!formData.activity || !formData.score) return
    const today = new Date().toISOString().split('T')[0]
    setPracticeLog(prev => ({
      ...prev,
      [formData.skill]: [...(prev[formData.skill] || []), { date: today, activity: formData.activity, score: formData.score, notes: formData.notes }],
    }))
    setFormData({ skill: 'writing_task1', activity: '', score: '', notes: '' })
    setShowForm(false)
  }

  const skillColor = (skill) => {
    const map = { writing_task1: '#f87171', writing_task2: '#fb923c', reading: '#34d399', listening: '#60a5fa', speaking: '#a78bfa' }
    return map[skill] || '#94a3b8'
  }

  return (
    <>
      <h2 className="section-title">IELTS Preparation</h2>
      <p style={{ color: '#94a3b8', marginBottom: '1.5rem' }}>
        Target: Band 6.5 (Stretch: 7.0) | Current TOEFL: 537 (~IELTS 5.5-6.0) | Timeline: 1-2 Months
      </p>

      <div className="ielts-score-grid">
        {scores.map(s => (
          <ScoreCard key={s.skill} {...s} />
        ))}
      </div>

      <div className="ielts-focus-area">
        <strong>Current Focus:</strong> Writing Task 1 (word count 150+, 4 paragraphs) | Speaking (extend to 2+ min, reduce fillers) | Reading T/F/NG strategy
      </div>

      <div className="ielts-section">
        <div className="ielts-section-header">
          <h3 className="ielts-section-title">Practice Log</h3>
          <button className="ielts-add-btn" onClick={() => setShowForm(!showForm)}>
            {showForm ? 'Cancel' : '+ Log Practice'}
          </button>
        </div>

        {showForm && (
          <form className="ielts-form" onSubmit={handleAddEntry}>
            <select className="ielts-input" value={formData.skill} onChange={e => setFormData({ ...formData, skill: e.target.value })}>
              <option value="writing_task1">Writing Task 1</option>
              <option value="writing_task2">Writing Task 2</option>
              <option value="reading">Reading</option>
              <option value="listening">Listening</option>
              <option value="speaking">Speaking</option>
            </select>
            <input className="ielts-input" type="text" placeholder="Activity (e.g. Bar Chart - Sports)" value={formData.activity} onChange={e => setFormData({ ...formData, activity: e.target.value })} required />
            <input className="ielts-input ielts-input-sm" type="text" placeholder="Score (e.g. 6.0)" value={formData.score} onChange={e => setFormData({ ...formData, score: e.target.value })} required />
            <input className="ielts-input" type="text" placeholder="Notes (optional)" value={formData.notes} onChange={e => setFormData({ ...formData, notes: e.target.value })} />
            <button className="ielts-submit-btn" type="submit">Save Entry</button>
          </form>
        )}

        <div className="ielts-log-grid">
          {Object.keys(initialPracticeLog).map(skill => (
            <PracticeLog key={skill} log={practiceLog} skill={skill} />
          ))}
        </div>
      </div>

      <div className="ielts-section">
        <h3 className="ielts-section-title">8-Week Study Plan</h3>
        <div className="ielts-phase-selector">
          {[1, 2, 3, 4].map(p => (
            <button key={p} className={`ielts-phase-btn ${phase === p ? 'active' : ''}`} onClick={() => setPhase(p)}>
              Phase {p}
            </button>
          ))}
          <span className="ielts-phase-label">{phases[phase].label} ({phases[phase].weeks})</span>
        </div>
        <table className="ielts-schedule-table">
          <thead>
            <tr><th>Day</th><th>Skill</th><th>Practice</th><th>Time</th></tr>
          </thead>
          <tbody>
            {phases[phase].days.map((d, i) => (
              <tr key={i}>
                <td className="ielts-schedule-day">{d.day}</td>
                <td>{d.skill}</td>
                <td>{d.task}</td>
                <td className="ielts-schedule-time">{d.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="ielts-phase-total">Weekly total: {phases[phase].total}</div>
      </div>

      <div className="ielts-section">
        <h3 className="ielts-section-title">Band 7 Writing Tips</h3>
        <div className="ielts-tips-grid">
          <div className="ielts-tip">
            <strong>Vocabulary</strong>
            <p>Use specific names: "FAANG companies" instead of "big companies". Add data: "$150,000+" instead of "high salary".</p>
          </div>
          <div className="ielts-tip">
            <strong>Examples</strong>
            <p>Replace vague examples with data-driven ones. Use names, statistics, years, specific companies.</p>
          </div>
          <div className="ielts-tip">
            <strong>Linking Words</strong>
            <p>Upgrade: "However" → "Nevertheless", "Also" → "Furthermore", "So" → "Therefore"</p>
          </div>
          <div className="ielts-tip">
            <strong>No Personal Anecdotes</strong>
            <p>IELTS Writing is formal. Remove "my case", "I experienced". Use universal examples instead.</p>
          </div>
          <div className="ielts-tip">
            <strong>Grammar</strong>
            <p>Use complex sentences: "Students who develop specialized expertise enjoy higher employment rates."</p>
          </div>
          <div className="ielts-tip">
            <strong>Opinion Justification</strong>
            <p>State your position clearly + explain WHY with 2-3 supporting sentences per paragraph.</p>
          </div>
        </div>
      </div>

      <div className="ielts-section">
        <h3 className="ielts-section-title">Key Resources</h3>
        <div className="ielts-resources">
          <a className="ielts-resource-link" href="https://ielts.org" target="_blank" rel="noreferrer">IELTS Official</a>
          <a className="ielts-resource-link" href="https://ielts-liz.com" target="_blank" rel="noreferrer">IELTS Liz</a>
          <a className="ielts-resource-link" href="https://quizlet.com" target="_blank" rel="noreferrer">Quizlet (Vocab)</a>
          <a className="ielts-resource-link" href="https://ted.com" target="_blank" rel="noreferrer">TED Talks (Listening)</a>
        </div>
      </div>
    </>
  )
}
