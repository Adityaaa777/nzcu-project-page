import { useRelatedCarousel } from "./useRelatedCarousel"
import "./section08-related-projects.css"

const projects = [
  {
    title: "Safe 2 Destination",
    description: "Book safe daily or monthly rides with a seamless travel experience.",
    category: "Mobile App Design",
    image: "/assets/related-covers/related-safe2destination.webp",
    href: "https://adityaaa777.github.io/safe2destination-project-page/",
  },
  {
    title: "Cabzo",
    description: "A smart ride booking app designed for fast, convenient, and reliable travel.",
    category: "Mobile App Design",
    image: "/assets/related-covers/related-cabzo.webp",
    href: "https://adityaaa777.github.io/cabzo-project-page/",
  },
  {
    title: "Attach App",
    description: "Connect with caring listeners anytime, anywhere in a safe, supportive space.",
    category: "Mobile App Design",
    image: "/assets/related-covers/related-attach-app.webp",
    href: "https://adityaaa777.github.io/attach-app-project-page/",
  },
  {
    title: "Attach Website",
    description: "Explore a welcoming space for open conversations and support.",
    category: "Web Design",
    image: "/assets/related-covers/related-attach-website.webp",
    href: "https://adityaaa777.github.io/attach-website-project-page/",
  },
  {
    title: "Cyrus 24",
    description: "Tap. Ride. Relax. A taxi service designed for simple, comfortable rides.",
    category: "Mobile App Design",
    image: "/assets/related-covers/related-cyrus-24.webp",
    href: "https://adityaaa777.github.io/cyrus-24-project-page/",
  },
]

/** Standalone related project carousel from Figma node 67:3793. */
export default function Section08RelatedProjects() {
  const { track, move } = useRelatedCarousel()

  return (
    <section className="nzcu-section-08" aria-labelledby="nzcu-related-title" data-node-id="67:3793">
      <div className="nzcu-related-content">
        <header className="nzcu-related-header">
          <h2 id="nzcu-related-title">Related Projects</h2>
          <nav className="nzcu-related-controls" aria-label="Related project carousel">
            <button type="button" onClick={() => move(-1)} aria-label="Previous projects"><img src="/assets/arrow-left.svg" alt="" /></button>
            <button type="button" onClick={() => move(1)} aria-label="Next projects"><img src="/assets/arrow-left.svg" alt="" /></button>
          </nav>
        </header>
        <div className="nzcu-related-track" ref={track}>
          {projects.map((project) => (
            <a className="nzcu-related-card" href={project.href} key={project.title} aria-label={`View ${project.title} project`}>
              <img className="nzcu-related-cover" src={project.image} alt={`${project.title} project cover`} />
              <div className="nzcu-related-card-content">
                <div className="nzcu-related-meta">
                  <span>{project.category}</span>
                  <span className="nzcu-related-card-arrow" aria-hidden="true">
                    <img src="/assets/section-08-related/project-arrow-alt.svg" alt="" />
                  </span>
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
