import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-quote-section">
        <p className="footer-quote">
          "Living in India means living simultaneously in several cultures and times.
          <br /> One often walks into medieval situations and runs into primitive people.
          <br /> The past exists as a living entity alongside the present, each illuminating
          <br /> and sustaining the other."
        </p>
        <p className="footer-author">GULAMMOHAMMED SHEIKH</p>
      </div>
      <div className="footer-contact">
        <span className="footer-contact-item">+91-9411924464</span>
        <a href="https://linktr.ee/apeksha.consults" className="footer-contact-item footer-link" target="_blank" rel="noopener noreferrer">
          linktr.ee/apeksha.consults
        </a>
        <a href="https://www.linkedin.com/in/apeksha-jain-92994814a/" className="footer-contact-item footer-link" target="_blank" rel="noopener noreferrer">
          /apeksha-jain
        </a>
        <span className="footer-contact-item">Delhi, India</span>
      </div>
      <div className="footer-image">
        <img src="/images/IMG_6101.JPG" alt="Footer painting" loading="lazy" decoding="async" />
      </div>
    </footer>
  )
}

export default Footer
