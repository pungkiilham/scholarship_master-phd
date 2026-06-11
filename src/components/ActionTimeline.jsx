const timeline = [
  {
    date: 'MAY 2026 (Current) - URGENT',
    current: true,
    tasks: [
      'Improve TOEFL score (target: 90+ for competitive programs)',
      'Draft personal statement / motivation letter template',
      'Request 2-3 recommendation letters from employers/supervisors',
      'Prepare documents: transcripts, certificates, passport copy',
      'Create Europass CV',
    ]
  },
  {
    date: 'JUNE 2026',
    tasks: [
      'Finalize and tailor motivation letters for each scholarship',
      'Apply for Swedish Institute (if deadline extended to 2027)',
      'Research specific Erasmus Mundus programs that fit your background',
      'Submit VLIRUOS ICP Connect application (Deadline: Feb 2026 - might still apply)',
      'Check DAAD EPOS program list for relevant courses',
    ]
  },
  {
    date: 'JULY - AUGUST 2026',
    tasks: [
      'Apply to DAAD EPOS programs (rolling deadlines)',
      'Apply to Erasmus Mundus programs (deadlines vary, usually Oct-Feb)',
      'Prepare for potential interviews',
      'Submit World Bank Scholarship application (Window #2: Mar-May)',
    ]
  },
  {
    date: 'SEPTEMBER - OCTOBER 2026',
    tasks: [
      'Await results from applications',
      'Accept offer and begin visa process',
      'Arrange accommodation and travel',
      'Prepare for departure',
    ]
  },
]

export default function ActionTimeline() {
  return (
    <>
      <h2 className="section-title">Action Timeline (Starting May 2026)</h2>
      <div className="action-timeline">
        <h3>Monthly Action Plan</h3>
        {timeline.map((item, idx) => (
          <div key={idx} className={`timeline-item ${item.current ? 'current' : ''}`}>
            <div className="timeline-date">{item.date}</div>
            <ul className="timeline-tasks">
              {item.tasks.map((task, i) => (
                <li key={i}>{task}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  )
}
