import './JoinCTA.css'

function JoinCTA() {
  return (
    <div className="join">
      <div className="join-bg"></div>
      <div className="join-inner">
        <h2 className="join-title">Ready to<br />build?</h2>
        <div className="join-right">
          <p className="join-desc">
            Applications open twice a year. Join and collaborate with students
            and turn your ideas into reality with MARVEL's resources and mentorship.
          </p>
          <a href="https://hub.uvcemarvel.in" className="join-btn" target="_blank" rel="noreferrer">
            Reach us out
            <span className="join-btn-arrow">→</span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default JoinCTA