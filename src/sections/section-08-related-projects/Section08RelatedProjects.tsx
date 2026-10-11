import { useRef } from "react"
import "./section08-related-projects.css"

const projects = [
  {
    title: "Safe 2 Destination",
    category: "Mobile App Design",
    description: "A safety-first travel experience designed to make every journey feel secure and effortless.",
    image: "/assets/cover-safe2destination.png",
  },
  {
    title: "CoreZap",
    category: "Web Design",
    description: "A unified product platform with a bold visual language and streamlined user journeys.",
    image: "/assets/cover-corezap.png",
  },
  {
    title: "Cabzo",
    category: "Mobile App Design",
    description: "A connected ride-booking ecosystem for riders, drivers and everyday urban mobility.",
    image: "/assets/cover-cabzo.png",
  },
]

/** Standalone related project carousel from Figma node 67:3793. */
export default function Section08RelatedProjects() {
  const track = useRef<HTMLDivElement>(null)
  const move = (direction: -1 | 1) => {
    const element = track.current
    if (!element) return
    const card = element.querySelector<HTMLElement>(".nzcu-related-card")
    element.scrollBy({ left: direction * (card?.offsetWidth ?? 400) + direction * 32, behavior: "smooth" })
  }

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
            <article className="nzcu-related-card" key={project.title}>
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
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
