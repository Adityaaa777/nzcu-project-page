import { DetailImage } from "../../components/DetailImage"
import "./section05-app-comparison.css"

/** Updated user/driver comparison — Figma node 60:162. */
export default function Section05AppComparison() {
  return (
    <section className="nzcu-section-05" aria-label="NZCU user and driver applications" data-node-id="60:162">
      <div className="nzcu-section-05-panel" data-node-id="1:489">
        <DetailImage className="nzcu-section-05-shot nzcu-section-05-shot--user-home" src="/assets/home.png" alt="NZCU user home" data-node-id="1:490" />
        <DetailImage className="nzcu-section-05-shot nzcu-section-05-shot--user-onboarding" src="/assets/user-onboarding.png" alt="NZCU user onboarding" data-node-id="1:491" />
        <DetailImage className="nzcu-section-05-shot nzcu-section-05-shot--driver-onboarding" src="/assets/driver-onboarding.png" alt="NZCU driver onboarding" data-node-id="1:492" />
        <DetailImage className="nzcu-section-05-shot nzcu-section-05-shot--driver-home" src="/assets/driver-home.png" alt="NZCU driver home" data-node-id="1:493" />

        <div className="nzcu-section-05-headings" data-node-id="1:494">
          <div data-node-id="1:495">
            <h2 data-node-id="1:496">User App</h2>
            <p data-node-id="1:497">Onboarding &amp; Home Experience</p>
          </div>
          <div data-node-id="1:498">
            <h2 data-node-id="1:499">Driver App</h2>
            <p data-node-id="1:500">Onboarding &amp; Home Dashboard</p>
          </div>
        </div>
      </div>
    </section>
  )
}
