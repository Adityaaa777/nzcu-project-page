import Section01ProjectNavigation from "./Section01ProjectNavigation"

/** Isolated approval canvas for Section 1. */
export default function Section01Preview() {
  return (
    <main
      style={{
        minHeight: "100vh",
        paddingTop: "45px",
        background: "#15151d",
      }}
    >
      <Section01ProjectNavigation backHref="#back" nextHref="#next" />
    </main>
  )
}
