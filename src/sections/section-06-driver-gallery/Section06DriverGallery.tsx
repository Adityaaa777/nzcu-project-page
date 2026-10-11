import { DetailImage } from "../../components/DetailImage"
import "./section06-driver-gallery.css"

const screens = [
  ["1:502", "driver-onboarding.png", "onboarding"],
  ["1:503", "ride-request.png", "ride-request"],
  ["1:504", "driver-otp.png", "otp"],
  ["1:505", "coupon-applied.png", "coupon"],
  ["1:506", "add-upi.png", "upi"],
  ["1:507", "driver-help.png", "help"],
  ["1:508", "no-transactions.png", "no-transactions"],
  ["1:509", "cash-payment.png", "cash-payment"],
  ["1:510", "driver-home.png", "driver-home"],
  ["1:511", "pending.png", "pending"],
] as const

/** Updated NZCU driver-app gallery — Figma node 60:163. */
export default function Section06DriverGallery() {
  return (
    <section className="nzcu-section-06" aria-label="NZCU driver application screens" data-node-id="60:163">
      <div className="nzcu-section-06-panel" data-node-id="1:501">
        {screens.map(([nodeId, file, placement]) => (
          <figure
            className={`nzcu-section-06-screen nzcu-section-06-screen--${placement}`}
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
