import "./section09-footer.css"

const icons = "/assets/section-09-footer"

/** Closing project footer from Figma node 65:1750. */
export default function Section09Footer() {
  return (
    <footer id="contact" className="nzcu-section-09" aria-labelledby="nzcu-footer-title" data-node-id="65:1750">
      <div className="nzcu-footer-content">
        <h2 id="nzcu-footer-title">Thanks for Exploring <span>This Project</span></h2>
        <div className="nzcu-footer-message">
          <p>I hope you enjoyed the process as much as I enjoyed creating it.</p>
          <p>Let’s build something impactful together.</p>
        </div>
        <div className="nzcu-footer-actions">
          <a className="nzcu-footer-contact" href="mailto:">Contact Me <img src={`${icons}/send.svg`} alt="" /></a>
          <a className="nzcu-footer-projects" href="#related-projects">Explore More Projects <img src={`${icons}/arrow-right.svg`} alt="" /></a>
        </div>
        <div className="nzcu-footer-links" aria-label="Contact options">
          <a href="mailto:"><img src={`${icons}/email.svg`} alt="" />Email</a>
          <a href="#linkedin"><img src={`${icons}/linkedin.svg`} alt="" />LinkedIn</a>
          <a href="tel:"><img src={`${icons}/phone.svg`} alt="" />Phone no.</a>
        </div>
      </div>
      <div className="nzcu-footer-copyright">©&nbsp; 2026, Shruti</div>
    </footer>
  )
}
