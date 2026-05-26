import { useScrollAnimation } from '../hooks/useScrollAnimation'
import './About.css'

function About() {
  const [aboutRef, aboutVisible] = useScrollAnimation({ threshold: 0.2 })
  const [journeyRef, journeyVisible] = useScrollAnimation({ threshold: 0.2 })
  const [workRef, workVisible] = useScrollAnimation({ threshold: 0.3 })

  return (
    <section className="about">
      <div className="about-container">
        <div className={`about-left ${aboutVisible ? 'slide-in-left' : 'hidden-left'}`} ref={aboutRef}>
          <div className="section-header">
            <div className="section-marker"></div>
            <h2 className="section-title">ABOUT US</h2>
          </div>
        </div>
        <div className={`about-center ${aboutVisible ? 'fade-in-up' : 'hidden-below'}`}>
          <p className="about-intro">
            AJC is a creative consultancy
            <br />shaped by stories, spaces,
            <br />cultures, and the subtle art
            <br />of observation.
          </p>
          <p className="about-description">
            It is where the past and the present cross over in a modern-day India, where our lens turns toward the overlooked — the quiet details, the play of shadow and light, the textures where history and modernity meet.
          </p>
          <p className="about-quote">
            "In each project, we linger on the silhouettes that define a brand, the stories etched in its materials, and the alchemy that happens when creativity meets cultural depth."
          </p>
          <p className="about-result">
            The result is more than design — it is an invitation into a world where strategy is steeped in story, and every detail is shaped by my eye.
          </p>
        </div>
        <div className={`about-right ${journeyVisible ? 'slide-in-right' : 'hidden-right'}`} ref={journeyRef}>
          <div className="section-header">
            <div className="section-marker"></div>
            <h2 className="section-title">THE JORUNEY</h2>
          </div>
          <div className="journey-text">
            <p>
              With a background in building Marketing & Growth functions for startups, Apeksha works to fuse business acumen with creative vision. Driven by the art of selling without selling, telling stories without words, and creating connection with strangers... curiosity  continues to guide her work. Her foundation was built at the dinner table, in conversations about how to build and scale businesses. Her creative approach was shaped by seven years of travel, where the world opened perspectives to her, with Ladakh's Turtuk village being her home of discovery. With an innate knack for strategy, communication, and design, her driving force is to create what doesn't yet exist, and to weave narratives from stories that outlive all of us.
            </p>
          </div>
        </div>
      </div>
      <div className={`our-work-header ${workVisible ? 'slide-in-left' : 'hidden-left'}`} ref={workRef}>
        <div className="section-marker"></div>
        <h2 className="section-title">OUR WORK</h2>
      </div>
    </section>
  )
}

export default About
