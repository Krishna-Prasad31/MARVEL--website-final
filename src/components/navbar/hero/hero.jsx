import './hero.css'

function Hero() {
  return (
    <section className="hero">
      <video
  className="hero-video"
  autoPlay
  muted
  loop
  playsInline
>
  <source src="/Marvel Openday -1 .mp4" type="video/mp4" />
</video>
<div className="hero-bg"></div>
      <div className="hero-grid"></div>

      <div className="hero-tag">
        <span className="hero-tag-dot"></span>
        UVCE's R&D Makerspace · Est. 2021
      </div>

      <h1 className="hero-title">
        <div className="line"><span className="word w1">THIS</span></div>
        <div className="line"><span className="word w3">IS</span></div>
        <div className="line"><span className="word w2 accent-word">MARVEL</span></div>
        <div className="line"><span className="word w4">UVCE.</span></div>
      </h1>

      <div className="hero-bottom">
        <p className="hero-desc">
          MARVEL is UVCE's makerspace for{' '}
          <strong >advanced research, vital education and learning</strong>.
          A space where curiosity meets capability and students build the future.
        </p>
        <div className="hero-stats">
          <div className="stat-item">
            <div className="stat-num">7<span></span></div>
            <div className="stat-label">Domains</div>
          </div>
          <div className="stat-item">
            <div className="stat-num">8<span></span></div>
            <div className="stat-label">Batches</div>
          </div>
          <div className="stat-item">
            <div className="stat-num">4<span></span></div>
            <div className="stat-label">Levels</div>
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="scroll-line"></div>
        <span></span>
      </div>
      
    </section>
  )
}

export default Hero