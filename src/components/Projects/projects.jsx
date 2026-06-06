import './projects.css'
import Proj1 from "../../assets/20241212_170355.jpg"
import Proj2 from "../../assets/Screenshot 2026-03-27 021559.png"
import Proj3 from "../../assets/Whats-App-Image-2025-11-18-at-19-59-00-e97c7fa5.jpg"
import Proj4 from "../../assets/Quad_2.jpeg"
import Proj5 from "../../assets/Screenshot 2025-10-21 222428.png"

const projects = [
  {
    id: 1,
    featured: true,
    icon: Proj1,
    name: 'Autonomous Gesture Recognition System', 
    color: '#e8ff47'
  },
  {
    id: 2,
    // tag: 'IoT',
    featured: false,
    icon: Proj2,
    name: 'GrowRight',
    color: '#47c8ff',
    link: "https://hub.uvcemarvel.in/work/a6404716-0d96-455a-b336-abd7fe9f3448"
  },
  {
    id: 3,
    // tag: 'EV',
    featured: false,
    icon: Proj3,
    name: 'Jetson NANO',
    color: '#47ff8f', 
    link: "https://hub.uvcemarvel.in/work/f4797c5d-5559-4c04-a9ab-bd4e9ae3a071"
  },
  {
    id: 4,
    // tag: 'Cloud',
    featured: false,
    icon: Proj4,
    name: 'Quadra-pod',
    color: '#ff47c8',
    link: "https://hub.uvcemarvel.in/work/216ddd40-ac14-4e53-9142-c7eb9955fbc1"
  },
  {
    id: 5,
    // tag: 'Design',
    featured: false,
    icon: Proj5,
    name: 'Design of a Secured Network Infrastructure for a University Campus',
    color: '#ff9447',
    link: "https://hub.uvcemarvel.in/work/ba5d1d95-484d-476b-806e-110d1999337e"
  },
]

function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="projects-header">
        <div>
          <div className="section-tag">Student Work</div>
          <h2 className="section-title">Projects that<br />make an impact.</h2>
        </div>
      </div>

      <div className="projects-grid">
        
        <a href="https://hub.uvcemarvel.in/work/15af723e-9670-4b82-ae02-0a5ea760e859">
          <div className="project-card featured">
          <img src={Proj1} className='project-visual' alt="" />
          <div className="project-tag-list">
            <span className="project-tag highlight">Featured</span>
          </div>
          <div className="project-name">Autonomous Gesture Recognition System</div>
        </div>
        </a>

        
        {projects.slice(1).map(p => (
          <a href={p.link}>
            <div className="project-card" key={p.id} style={{'--p-color': p.color}}>
              <img src={p.icon} className="project-visual-small" alt="" />
            <div className="project-tag-list">
            </div>
            <div className="project-name">{p.name}</div>
            <div className="project-by">{p.by}</div>
          </div>
          </a>
        ))}
      </div>
    </section>
  )
}

export default Projects