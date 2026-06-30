import './domain.css'
import { useState } from 'react'
import EVRE from "../../assets/electric-car-4-svgrepo-com.svg?react"
import IoT from "../../assets/iot-platform-svgrepo-com.svg?react"
import DNP from "../../assets/design-svgrepo-com.svg?react"
import AIML from "../../assets/artificial-intelligence_12475931.png"
import AIR from "../../assets/camera-drone.png"
import VFX from "../../assets/visual-effect.png"
import CLCY from "../../assets/cloud-service.png"

const domains = [
  {
    num: '1', svg: AIML,
    name: "Artificial Intelligence and Machine Learning",
    des: "Understand how machines learn from data to make intelligent decisions. Build models that can predict outcomes, recognize patterns, and automate complex real-world processes.",
    color: '#47c8ff',
    link: "https://hub.uvcemarvel.in/course/AI-ML-001"
  },
  {
    num: '2', svg: EVRE,
    name: "Electric Vehicles and Renewable Energy",
    des: "Learn how sustainable energy and electric mobility are shaping the future of transportation and power systems.",
    color: '#16A34A',
    link: 'https://hub.uvcemarvel.in/course/EV-RE-001'
  },
  {
    num: '3', svg: AIR,
    name: "Aviation",
    des: "Learn how aircraft fly and discover the engineering and operations that power the aviation industry.",
    color: '#ff9447',
    link: 'https://hub.uvcemarvel.in/course/AIR-001'
  },
  {
    num: '4', svg: IoT,
    name: "Internet of Things",
    des: "Discover how everyday devices become smart by connecting to the internet and exchanging data.",
    color: '#0F766E',
    link: 'https://hub.uvcemarvel.in/course/IOT-001'
  },
  {
    num: '5', svg: DNP,
    name: "Design and Prototyping",
    des: "Learn how to transform ideas into functional prototypes using modern design and development tools.",
    color: '#e347ff',
    link: 'https://hub.uvcemarvel.in/course/D-P-001'
  },
  {
    num: '6', svg: VFX,
    name: "Visual Effects",
    des: "Create stunning visuals and cinematic effects using modern VFX tools and techniques.",
    color: '#47ff6f',
    link: 'https://hub.uvcemarvel.in/course/VFX-001'
  },
  {
    num: '7', svg: CLCY,
    name: "Cloud Computing and Cyber Security",
    des: "Understand cloud architecture, security systems, big data and infrastructure.",
    color: '#ff4747',
    link: "https://hub.uvcemarvel.in/course/CL-CY-001"
  }
]

function Domains() {
  const [hovered, setHovered] = useState(null)

  return (
    <section className="domains" id="domains">
      <div className="domains-header">
        <div className="section-tag">MARVEL Offers</div>
        <h2 className="section-title">Domains</h2>
      </div>

      <div className="domains-grid">
        {domains.map((domain) => (
          <a
            className={`links domain-pos-${domain.num}`}
            href={domain.link}
            target="_blank"
            rel="noreferrer"
            key={domain.num}
            onMouseEnter={() => setHovered(domain.num)}
            onMouseLeave={() => setHovered(null)}
          >
            <div
              className={`domain-card ${hovered === domain.num ? 'domain-hovered' : ''} ${hovered && hovered !== domain.num ? 'domain-dimmed' : ''}`}
              style={{ '--domain-color': domain.color }}
            >
              <div className="domain-num">{domain.num}</div>
             {typeof domain.svg === "string" ? (
                  <img className="domain-img" src={domain.svg} alt="" />
                ) : (
                  <domain.svg className="domain-img" />
                )}
              <div className="domain-content">
                <div className="domain-name">{domain.name}</div>
                <div className="domain-desc">{domain.des}</div>
              </div>
              <div className="domain-arrow">↗</div>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}

export default Domains