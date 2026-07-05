import './tracks.css'
import BTH from "../../assets/student-person-svgrepo-com.svg"
import PJT from "../../assets/project-new-svgrepo-com.svg"
import COMP from "../../assets/badge-svgrepo-com.svg"
import RSH from "../../assets/research-svgrepo-com.svg"
import OLP from "../../assets/book-svgrepo-com.svg"
import ESP from "../../assets/tools-svgrepo-com.svg"
import BRI from '../../assets/BRIDGE.svg'
import AWS from '../../assets/AWS.svg'
import BOT from '../../assets/BotWorks.svg'


const tracks = [
  {
    num: '1',
    icon: BTH,
    name: 'Student Track',
    desc: 'A structured batch program with hands-on curriculum. Applications open twice a year. Learn with a cohort of like-minded students.',
    color: '#16A34A',
    link: 'https://hub.uvcemarvel.in'
  },
  {
    num: '2',
    icon: PJT,
    name: 'Project Track',
    desc: 'Project Track provides UVCE students with the Marvel resources and facilities needed to turn project abstracts into reality.',
    color: '#47c8ff',
    link: 'https://forms.gle/aiD3WWXUBngknHzX9'
  },
  {
    num: '3',
    icon: COMP,
    name: 'Competition Track',
    desc: 'MARVEL supports students participating in technical competitions — financial assistance, mentorship and guidance.',
    color: '#ff9447',
    link: 'https://forms.gle/Ds6EoHK7iYt6Ki6NA'
  },
  {
    num: '4',
    icon: RSH,
    name: 'Research Track',
    desc: 'Structured guidance for students exploring research — problem formulation, literature review, methodology and academic writing.',
    color: '#0F766E',
    link: 'https://forms.gle/59c6WxZxXQ3naC9f8'
  },
  {
    num: '5',
    icon: OLP,
    name: 'Open Learner Programme',
    desc: 'Access any MARVEL course at your own pace. Complete coursework and earn a certificate highlighting your achievement.',
    color: '#c8a2ff',
    link: 'https://forms.gle/QCdFiTSu5K6hyysq5'
  },
  {
    num: '6',
    icon: ESP,
    name: 'Equipment Support',
    desc: 'Lab Access provides MARVEL students with the equipment and components needed to start building immediately after a quick form submission.',
    color: '#ff6b6b',
    link: 'https://forms.gle/CgAEdANBq3R17sdQA'
  },
  {
    num: '7',
    icon: BRI,
    name: 'BRIDGE',
    desc: 'A startup initiative at MARVEL UVCE in collaboration with E-Cell, helping students build ventures through mentorship, innovation, and entrepreneurship.',
    color: '#F0652F',
    link: 'https://forms.gle/CgAEdANBq3R17sdQA'
  },
  {
    num: '8',
    icon: AWS,
    name: 'AWS Student Builder Group',
    desc: 'A student-led AWS community at MARVEL UVCE empowering students through cloud workshops, hands-on projects, certifications, and industry collaboration.',
    color: '#FFA500 ',
    link: 'https://forms.gle/CgAEdANBq3R17sdQA'
  },
  {
    num: '9',
    icon: BOT,
    name: 'BotWorks',
    desc: 'A robotics initiative at MARVEL UVCE focused on building manual/autonomous bots and preparing students for robotics competitions.',
    color: '#0F172A',
    link: 'https://forms.gle/CgAEdANBq3R17sdQA'
  },
]

function Tracks() { 
  return (
    <section className="tracks" id="tracks">
      <div className="tracks-header">
        <div className="section-tag">How to join</div>
        <h2 className="section-title">Find your<br />Track.</h2>
      </div>

      <div className="tracks-grid">
        {tracks.map((track) => (
          <a
            className="track-link"
            href={track.link}
            target="_blank"
            rel="noreferrer"
            key={track.num}
            style={{'--track-color': track.color}}
          >
            <div className="track-card">
              <div className="track-top">
                <div className="track-num">{track.num}</div>
                <img className="track-icon" src={track.icon} alt="" />
              </div>
              <div className="track-bottom">
                <div className="track-name">{track.name}</div>
                <div className="track-desc">{track.desc}</div>
                <div className="track-cta">
                  Learn More
                  <span className="track-arrow">→</span>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}

export default Tracks