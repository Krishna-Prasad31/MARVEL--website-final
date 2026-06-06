import './marquee.css'

const items = [
  'ARTIFICIAL INTELLIGENCE and Machine Learning',
  'Aviation',
  'ELECTRIC VEHICLES-RENEWABLE ENERGY',
  'Internet of Things',
  'Design and Prototyping',
  'Visual Effects',
  'CLOUD COMPUTING and CYBERSECURITY'
]

function Marquee() {
  return(
    <div className='marquee-section'>
      <div className='marquee-track'>
        {[...items, ...items].map((items, i) => (
          <div className='marquee-item' key={i}>
            <span className='marquee-dot'>✦</span>
            {items}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Marquee