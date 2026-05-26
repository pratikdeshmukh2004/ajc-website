import { useState, useEffect } from 'react'
import './Hero.css'

function Hero() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setTimeout(() => setLoaded(true), 100)
  }, [])

  return (
    <section className="hero">
      <div className="hero-overlay"></div>
      <div className={`hero-content ${loaded ? 'hero-loaded' : ''}`}>
        <div className="hero-left">
          <p className={`hero-tagline ${loaded ? 'fade-in-up' : ''}`}>
            A CREATIVE CONSULTANCY BASED
            <br />IN NEW DELHI, INDIA
          </p>
          <p className={`hero-tagline hero-director ${loaded ? 'fade-in-up delay-1' : ''}`}>
            DIRECTED BY APEKSHA JAIN
          </p>
        </div>
        <div className="hero-right">
          <h1 className={`hero-logo ${loaded ? 'fade-in-down' : ''}`}>AJC</h1>
        </div>
      </div>
      <div className={`hero-services ${loaded ? 'fade-in-up delay-2' : ''}`}>
        <div className="services-marker"></div>
        <p className="services-label">WHAT WE DO?</p>
        <div className="services-list">
          <p>BRAND IDENTITY</p>
          <p>VISUAL DESIGN</p>
          <p>WEB DESIGN</p>
          <p>BRAND STRATEGY</p>
          <p>PACKAGING DESIGN</p>
        </div>
      </div>
    </section>
  )
}

export default Hero
