import './alumniProjects.css'
import { useState } from 'react'

const alumniProjects = [
  {
    id: 1,
    title: 'Introduction to Systems Engineering',
    description: 'Designed to equip students with a structured approach to designing, analyzing, and managing complex engineering systems. Through real-world projects and hands-on sessions, participants develop core competencies in systems thinking, modeling, requirements engineering, and interdisciplinary collaboration.',
    focuses: ['Product Development', 'Timeline Management', 'Design Thinking'],
    alumnus: 'Mr. Srikanth M A',
    batch: null,
    dept: 'ECE',
    role: 'President of UVCE-GA · Senior Director at Intel (Retd)',
    students: [],
    color: '#38BDF8',
  },
  {
    id: 2,
    title: 'CPU on FPGA',
    description: 'While academic coursework gives a brief glimpse into how a CPU works, understanding the elementary ideas well enough to build one is very challenging. This project uses the NAND2TETRIS course as a reference and builds an entire 16-bit CPU from scratch, then implements it on an FPGA.',
    focuses: [
      'Building a CPU from first principles',
      'Implementing the CPU on hardware',
      'Understanding hardware design constraints & intricacies',
    ],
    alumnus: 'Anish Krishnakumar',
    batch: '2022',
    dept: 'ECE',
    role: 'Silicon Design Engineer at AMD',
    students: [
      { name: 'A V Sohan Aiyappa', dept: 'ECE', year: '2027' },
      { name: 'Rishti R Kulkarni', dept: 'ECE', year: '2027' },
      { name: 'Virajit G P',       dept: 'EEE', year: '2027' },
    ],
    color: '#A78BFA',
  },
  {
    id: 3,
    title: 'Reconciliation of Factory-Floor Data',
    description: 'Modern just-in-time manufacturing relies heavily on accurate data. However, factory data often comes from multiple sources — ERP/CRM systems, manufacturing plans, and IoT machine data. Since some data is manually entered, errors and inconsistencies can occur. This project detects and flags those anomalies.',
    focuses: [
      'Detecting anomalies across multiple factory datasets',
      'Identifying inconsistencies & possible typos',
      'Flagging issues for supervisors',
    ],
    alumnus: 'Sudeep Prasad',
    batch: '1995',
    dept: 'CSE',
    role: 'VP of Technology, Numocity',
    students: [
      { name: 'Varsha Shubhashri M', dept: 'AIML', year: '2027' },
      { name: 'Varsha Rao',          dept: 'AIML', year: '2027' },
      { name: 'Likhith N',           dept: 'CSE',  year: '2027' },
      { name: 'Suraj Hulagur',       dept: 'CSE',  year: '2028' },
      { name: 'Deekshith A',         dept: 'CSE',  year: '2028' },
    ],
    color: '#34D399',
  },
]

function initials(name) {
  return name.split(' ').filter(Boolean).slice(0, 2).map(w => w[0].toUpperCase()).join('')
}

function AlumniProjects() {
  const [hovered, setHovered] = useState(null)

  return (
    <section className="alumni" id="alumni-projects">

      <div className="alumni-header">
        <div>
          <div className="section-tag">Mentored Work</div>
          <h2 className="section-title">Built by students.<br />Guided by those<br />who've been there.</h2>
        </div>
        <p className="alumni-sub">
          Every project here was shaped by a MARVEL alumnus — someone who came back to give what they wish they'd had.
        </p>
      </div>

      <div className={`alumni-grid${hovered !== null ? ' has-hovered' : ''}`}>
        {alumniProjects.map((p) => {
          const isHovered = hovered === p.id
          const isDimmed  = hovered !== null && !isHovered

          return (
            <div
              className={`alumni-card${isHovered ? ' alumni-card--hovered' : ''}${isDimmed ? ' alumni-card--dimmed' : ''}`}
              key={p.id}
              style={{ '--a-color': p.color }}
              onMouseEnter={() => setHovered(p.id)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* accent bar */}
              <div className="alumni-bar" />

              {/* always-visible top section */}
              <div className="alumni-top">
                <span className="alumni-badge">Alumni Guided</span>
                <h3 className="alumni-title">{p.title}</h3>
              </div>

              {/* expanded content — slides in on hover */}
              <div className="alumni-expand">
                <p className="alumni-desc">{p.description}</p>

                <ul className="alumni-focuses">
                  {p.focuses.map((f, i) => (
                    <li key={i} className="alumni-focus-item">
                      <span className="alumni-focus-dot" />
                      {f}
                    </li>
                  ))}
                </ul>

                <div className="alumni-divider" />

                {/* mentor */}
                <div className="alumni-mentor-row">
                  <div className="alumni-avatar">{initials(p.alumnus)}</div>
                  <div className="alumni-mentor-info">
                    <span className="alumni-mentor-name">
                      {p.alumnus}
                      {p.batch && <span className="alumni-meta-chip">{p.batch}</span>}
                      {p.dept  && <span className="alumni-meta-chip">{p.dept}</span>}
                    </span>
                    <span className="alumni-mentor-now">{p.role}</span>
                  </div>
                </div>

                {/* students */}
                {p.students.length > 0 && (
                  <div className="alumni-students-wrap">
                    <span className="alumni-students-label">
                      Students <span className="alumni-count">{p.students.length}</span>
                    </span>
                    <div className="alumni-students-list">
                      {p.students.map((s, i) => (
                        <div className="alumni-student" key={i}>
                          <div className="alumni-student-avatar">{initials(s.name)}</div>
                          <div className="alumni-student-info">
                            <span className="alumni-student-name">{s.name}</span>
                            <span className="alumni-student-meta">{s.dept} · {s.year}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

            </div>
          )
        })}
      </div>

    </section>
  )
}

export default AlumniProjects
