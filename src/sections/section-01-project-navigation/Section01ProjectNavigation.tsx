import "./section01-project-navigation.css"

export type Section01ProjectNavigationProps = {
  backHref?: string
  nextHref?: string
}

/** Updated NZCU project navigation — Figma node 1:468. */
export default function Section01ProjectNavigation({
  backHref = "#",
  nextHref = "#",
}: Section01ProjectNavigationProps) {
  return (
    <nav
      className="nzcu-section-01-nav"
      aria-label="Project navigation"
      data-node-id="1:468"
    >
      <a className="nzcu-section-01-link" href={backHref} data-node-id="1:469">
        <span className="nzcu-section-01-icon" data-node-id="1:470">
          <img src="/assets/650df.svg" alt="" />
        </span>
        <span data-node-id="1:472">Go Back</span>
      </a>

      <a className="nzcu-section-01-link" href={nextHref} data-node-id="1:473">
        <span data-node-id="1:474">Next Project</span>
        <span
          className="nzcu-section-01-icon nzcu-section-01-icon--next"
          data-node-id="1:475"
        >
          <img src="/assets/f8b17.svg" alt="" />
        </span>
      </a>
    </nav>
  )
}
