export default function ProfileCard() {
  return (
    <div className="profile-card">
      <h2>Your Profile</h2>
      <div className="profile-grid">
        <div className="profile-item">
          <strong>Education</strong>
          <span>Bachelor of Mechatronic Engineering, GPA 3.24/4.00</span>
        </div>
        <div className="profile-item">
          <strong>Experience</strong>
          <span>8+ years IT Project Manager, 4+ years Business Analyst</span>
        </div>
        <div className="profile-item">
          <strong>Technical Skills</strong>
          <span>C#, Laravel, React/Next.js, Odoo ERP, IoT/PLC</span>
        </div>
        <div className="profile-item">
          <strong>Languages</strong>
          <span>English (B2/TOEFL 537), Indonesian (Native)</span>
        </div>
        <div className="profile-item">
          <strong>Target</strong>
          <span>Master's in Europe | Network Building | ASAP</span>
        </div>
        <div className="profile-item">
          <strong>Strong Fit</strong>
          <span>EPOS (needs 2+ yrs exp - you have 8!)</span>
        </div>
      </div>
    </div>
  )
}
