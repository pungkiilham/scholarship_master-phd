import { NavLink } from 'react-router-dom'

export default function NavBar() {
  return (
    <nav className="navbar">
      <div className="nav-brand">
        <span className="nav-logo">🎓</span>
        <span className="nav-title">Scholar Dashboard</span>
      </div>
      <div className="nav-links">
        <NavLink to="/" end className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
          Dashboard
        </NavLink>
        <NavLink to="/scholarships" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
          All Scholarships
        </NavLink>
        <NavLink to="/tracker" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
          Tracker
        </NavLink>
        <NavLink to="/timeline" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
          Timeline
        </NavLink>
        <NavLink to="/ielts" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
          IELTS
        </NavLink>
      </div>
    </nav>
  )
}
