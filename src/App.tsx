import { useEffect, type ReactNode } from "react"
import Section01Preview from "./sections/section-01-project-navigation/Section01Preview"
import Section01ProjectNavigation from "./sections/section-01-project-navigation/Section01ProjectNavigation"
import Section02Cover from "./sections/section-02-cover/Section02Cover"
import Section02Preview from "./sections/section-02-cover/Section02Preview"
import Section03Overview from "./sections/section-03-overview/Section03Overview"
import Section03Preview from "./sections/section-03-overview/Section03Preview"
import Section04UserGallery from "./sections/section-04-user-gallery/Section04UserGallery"
import Section04Preview from "./sections/section-04-user-gallery/Section04Preview"
import Section05AppComparison from "./sections/section-05-app-comparison/Section05AppComparison"
import Section05Preview from "./sections/section-05-app-comparison/Section05Preview"
import Section06DriverGallery from "./sections/section-06-driver-gallery/Section06DriverGallery"
import Section06Preview from "./sections/section-06-driver-gallery/Section06Preview"
import Section07DesignSystem from "./sections/section-07-design-system/Section07DesignSystem"
import Section07Preview from "./sections/section-07-design-system/Section07Preview"
import Section08RelatedProjects from "./sections/section-08-related-projects/Section08RelatedProjects"
import Section08Preview from "./sections/section-08-related-projects/Section08Preview"
import Section09Footer from "./sections/section-09-footer/Section09Footer"
import Section09Preview from "./sections/section-09-footer/Section09Preview"

const sectionPreviews: Record<string, ReactNode> = {
  "1": <Section01Preview />,
  "2": <Section02Preview />,
  "3": <Section03Preview />,
  "4": <Section04Preview />,
  "5": <Section05Preview />,
  "6": <Section06Preview />,
  "7": <Section07Preview />,
  "8": <Section08Preview />,
  "9": <Section09Preview />,
}

function FinalProjectPage() {
  return (
    <main className="nzcu-project-page">
      <header className="nzcu-project-page__navigation">
        <Section01ProjectNavigation backHref="#related-projects" nextHref="#project-overview" />
      </header>
      <Section02Cover />
      <div id="project-overview">
        <Section03Overview />
      </div>
      <Section04UserGallery />
      <Section05AppComparison />
      <Section06DriverGallery />
      <Section07DesignSystem />
      <div id="related-projects">
        <Section08RelatedProjects />
      </div>
      <Section09Footer />
    </main>
  )
}

export default function App() {
  const previewSection = new URLSearchParams(window.location.search).get("section")
  const preview = previewSection ? sectionPreviews[previewSection] : null

  useEffect(() => {
    if (previewSection && !preview) {
      window.history.replaceState(null, "", window.location.pathname)
    }
  }, [preview, previewSection])

  if (preview) {
    return preview
  }

  return <FinalProjectPage />
}
