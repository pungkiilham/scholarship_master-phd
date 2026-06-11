import { useLocalStorage } from '../hooks/useLocalStorage'
import { initialTracker, statusOptions } from '../data/trackerData'

export default function ApplicationTracker() {
  const [rows, setRows] = useLocalStorage('scholarshipTracker', initialTracker)

  const handleStatusChange = (idx, value) => {
    setRows(prev => {
      const updated = [...prev]
      updated[idx] = { ...updated[idx], status: value }
      return updated
    })
  }

  const handleCheckChange = (idx, field) => {
    setRows(prev => {
      const updated = [...prev]
      updated[idx] = { ...updated[idx], [field]: !updated[idx][field] }
      return updated
    })
  }

  return (
    <>
      <h2 className="section-title">Application Tracker</h2>
      <div className="tracker-section">
        <h3>Track Your Applications</h3>
        <table className="tracker-table">
          <thead>
            <tr>
              <th>Scholarship</th>
              <th>Country</th>
              <th>Deadline</th>
              <th>Status</th>
              <th>Docs Ready?</th>
              <th>Applied?</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, idx) => (
              <tr key={row.scholarship}>
                <td><strong>{row.name}</strong></td>
                <td>{row.country}</td>
                <td className={`tracker-deadline ${row.deadlineClass}`}>{row.deadline}</td>
                <td>
                  <select
                    className={`status-select status-${row.status}`}
                    value={row.status}
                    onChange={(e) => handleStatusChange(idx, e.target.value)}
                  >
                    {statusOptions.map(opt => (
                      <option key={opt.value} value={opt.value} className={opt.className}>{opt.label}</option>
                    ))}
                  </select>
                </td>
                <td>
                  <input
                    type="checkbox"
                    className="checkbox"
                    checked={row.docsReady}
                    onChange={() => handleCheckChange(idx, 'docsReady')}
                  />
                </td>
                <td>
                  <input
                    type="checkbox"
                    className="checkbox"
                    checked={row.applied}
                    onChange={() => handleCheckChange(idx, 'applied')}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}
