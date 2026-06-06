import './achievements.css'

const stats = [
  { num: '8', suffix: '', label: 'Active Batches running across all domains' },
  { num: '250', suffix: '+', label: 'Students trained and certified since 2021' },
  { num: '50', suffix: '+', label: 'Projects completed by MARVEL students' },
  { num: '7', suffix: '✦', label: 'Niche domains with structured curriculum' },
]
 
function Achievements() {
  return (
    <section className="achievements" id="achievements">
      <div className="achievements-header">
        <div className="section-tag">By the numbers</div>
        <h2 className="section-title">MARVEL by<br />the numbers.</h2>
      </div>
      <div className="ach-grid">
        {stats.map((s, i) => (
          <div className="ach-card" key={i}>
            <div className="ach-num">
              {s.num}<span>{s.suffix}</span>
            </div>
            <div className="ach-label">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Achievements