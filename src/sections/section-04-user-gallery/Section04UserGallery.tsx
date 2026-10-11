import { DetailImage } from "../../components/DetailImage"
import "./section04-user-gallery.css"

const screens = [
  ["1:478", "signup.png", "signup-top"],
  ["1:479", "home.png", "home-left"],
  ["1:480", "rental.png", "rental"],
  ["1:481", "ride-confirmed.png", "ride-confirmed"],
  ["1:482", "review-rating.png", "review-rating"],
  ["1:483", "favorites.png", "favorites"],
  ["1:484", "payment.png", "payment"],
  ["1:485", "home.png", "home-top"],
  ["1:486", "signup.png", "signup-bottom"],
  ["1:487", "safety.png", "safety"],
  ["1:488", "refer-earn.png", "refer-earn"],
] as const

/** Updated NZCU user-app gallery — Figma node 60:159. */
export default function Section04UserGallery() {
  return (
    <section className="nzcu-section-04" aria-label="NZCU user application screens" data-node-id="60:159">
      <div className="nzcu-section-04-panel" data-node-id="1:477">
        {screens.map(([nodeId, file, placement]) => (
          <figure
            className={`nzcu-section-04-screen nzcu-section-04-screen--${placement}`}
            data-node-id={nodeId}
            key={nodeId}
          >
            <DetailImage src={`/assets/${file}`} alt="" viewLabel={`NZCU ${file.replace(".png", "").replace(/-/g, " ")} screen`} />
          </figure>
        ))}
      </div>
    </section>
  )
}
