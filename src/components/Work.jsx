import { useScrollAnimation } from '../hooks/useScrollAnimation'
import './Work.css'

function ProjectRow({ children, className = '' }) {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.15 })
  return (
    <div className={`project-row ${className} ${isVisible ? 'row-visible' : 'row-hidden'}`} ref={ref}>
      {children}
    </div>
  )
}

function Work() {
  return (
    <section className="work">
      {/* Project Row 1 - Virsa Baltistan */}
      <ProjectRow>
        <div className="project-full-width two-col">
          <div className="project-image-half parallax-bg" style={{ backgroundImage: "url('/images/IMG_6090.PNG')" }}>
            <div className="image-overlay-label left-label">
              <p className="project-status">COMING SOON</p>
            </div>
          </div>
          <div className="project-image-half parallax-bg" style={{ backgroundImage: "url('/images/IMG_6091.JPG')" }}>
            <div className="image-overlay-label left-label">
              <div className="project-marker"></div>
              <p className="project-name">VIRSA BALTISTAN</p>
              <p className="project-location">Ladakh</p>
            </div>
          </div>
        </div>
      </ProjectRow>

      {/* Project Row 2 - Zhiwaling Hotels (NEW) - Full width parallax */}
      <ProjectRow>
        <div className="project-full-image parallax-bg full-parallax" style={{ backgroundImage: "url('/images/zhiwaling-hotels.jpg')" }}>
          <div className="project-full-image-labels" style={{ left: '8%', bottom: '46%', alignItems: 'flex-start', transform: 'none' }}>
            <div className="project-marker"></div>
            <p className="project-name">zhiwaling hotels</p>
            <p className="project-location">Bhutan</p>
          </div>
          <img
            src="/images/michelin-guide-2026.png"
            alt="Michelin Guide 2026"
            loading="lazy"
            decoding="async"
            style={{ position: 'absolute', right: '3.9%', top: '80%', width: '9.2%', height: 'auto', zIndex: 2 }}
          />
        </div>
      </ProjectRow>

      {/* Project Row 3 - Split layout (Farmers House & Yakitori) */}
      <ProjectRow>
        <div className="project-split-layout">
          <div className="project-split-left">
            <div className="project-label-block">
              <div className="project-marker"></div>
              <p className="project-name">FARMERS HOUSE & YAKITORI</p>
              <p className="project-location">Ladakh</p>
            </div>
            <div className="project-label-bottom">
              <p className="project-status">COMING SOON</p>
            </div>
          </div>
          <div className="project-split-right">
            <div className="project-tall-image hover-zoom">
              <img src="/images/IMG_6093.PNG" alt="Farmers House & Yakitori" loading="lazy" decoding="async" />
            </div>
            <div className="project-tall-image hover-zoom">
              <img src="/images/IMG_6092.PNG" alt="Project" loading="lazy" decoding="async" />
            </div>
          </div>
        </div>
      </ProjectRow>

      {/* Project Row 4 - Haveli Dharampura - Full width parallax */}
      <ProjectRow>
        <div className="project-full-image parallax-bg full-parallax" style={{ backgroundImage: "url('/images/IMG_6102.JPG')" }}>
          <div className="project-full-image-labels" style={{ bottom: '45%', left: '59%', alignItems: 'flex-start' }}>
            <div className="project-marker"></div>
            <p className="project-name">HAVELI DHARAMPURA</p>
            <p className="project-location">Delhi</p>
          </div>
        </div>
      </ProjectRow>

      {/* Project Row 5 - Balti Kitchen */}
      <ProjectRow>
        <div className="project-full-width two-col">
          <div className="project-image-half parallax-bg" style={{ backgroundImage: "url('/images/IMG_6094.PNG')" }}>
            <div className="image-overlay-label left-label">
              <p className="project-status">COMING SOON</p>
            </div>
          </div>
          <div className="project-image-half parallax-bg" style={{ backgroundImage: "url('/images/IMG_6095.PNG')" }}>
            <div className="image-overlay-label left-label">
              <div className="project-marker"></div>
              <p className="project-name">BALTI KITCHEN</p>
              <p className="project-location">Ladakh</p>
            </div>
          </div>
        </div>
      </ProjectRow>

      {/* Project Row 6 - Hill Tribe - Full width parallax */}
      <ProjectRow>
        <div className="project-full-image parallax-bg full-parallax">
          <div className="project-full-image-labels" style={{ left: '58%', bottom: '20%' }}>
            <div className="project-marker"></div>
            <p className="project-name">HILL TRIBE</p>
            <p className="project-location">Ladakh</p>
          </div>
        </div>
      </ProjectRow>

      {/* Project Row 7 - Split layout (Assam Bengal Navigation) */}
      <ProjectRow>
        <div className="project-split-layout">
          <div className="project-split-left">
            <div className="project-label-block">
              <div className="project-marker"></div>
              <p className="project-name">assam bengal navigation</p>
              <p className="project-location">Eastern India</p>
            </div>
            <div className="project-label-bottom">
              <p className="project-status">COMING SOON</p>
            </div>
          </div>
          <div className="project-split-right">
            <div className="project-tall-image hover-zoom">
              <img src="/images/IMG_6098.PNG" alt="Assam Bengal Navigation" loading="lazy" decoding="async" />
            </div>
            <div className="project-tall-image hover-zoom">
              <img src="/images/IMG_6097.PNG" alt="Project" loading="lazy" decoding="async" />
            </div>
          </div>
        </div>
      </ProjectRow>

      {/* Project Row 8 - Neemrana Hotels (NEW) - Full width parallax */}
      <ProjectRow>
        <div className="project-full-image parallax-bg full-parallax" style={{ backgroundImage: "url('/images/neemrana-hotels.jpg')" }}>
          <div className="image-overlay-label left-label">
            <p className="project-status">COMING SOON</p>
          </div>
          <div className="project-full-image-labels" style={{ left: '78.6%', bottom: '41%', alignItems: 'flex-start', transform: 'none' }}>
            <div className="project-marker"></div>
            <p className="project-name">NEEMRANA HOTELs</p>
            <p className="project-location">Rajasthan</p>
          </div>
        </div>
      </ProjectRow>

      {/* Project Row 9 - Split layout (Alchi Kitchen) */}
      <ProjectRow>
        <div className="project-split-layout">
          <div className="project-split-left">
            <div className="project-label-block">
              <div className="project-marker"></div>
              <p className="project-name">ALCHI KITCHEN</p>
              <p className="project-location">Ladakh</p>
            </div>
            <div className="project-label-bottom">
              <p className="project-status">COMING SOON</p>
            </div>
          </div>
          <div className="project-split-right">
            <div className="project-tall-image hover-zoom">
              <img src="/images/IMG_6103.PNG" alt="ALCHI KITCHEN" loading="lazy" decoding="async" />
            </div>
            <div className="project-tall-image hover-zoom">
              <img src="/images/IMG_6104.PNG" alt="Project" loading="lazy" decoding="async" />
            </div>
          </div>
        </div>
      </ProjectRow>

      {/* Project Row 10 - Ranjit's Svaasa - Full width parallax */}
      <ProjectRow>
        <div className="project-full-image parallax-bg full-parallax" style={{ backgroundImage: "url('/images/196-DSC06248 3.png')" }}>
          <div className="project-full-image-labels" style={{ bottom: '45%', alignItems: 'flex-start' }}>
            <div className="project-marker"></div>
            <p className="project-name">Ranjit's svaasa</p>
            <p className="project-location">Amritsar</p>
          </div>
        </div>
      </ProjectRow>
    </section>
  )
}

export default Work

