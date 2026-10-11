import { DetailImage } from "../../components/DetailImage"
import "./section02-cover.css"

const assetRoot = "/assets/section-02-cover"
const phoneViewCrop = { sourceWidth: 4000, x: 1530, y: 450, width: 943, height: 1908 }

/** Updated NZCU cover artwork — Figma node 1:456. */
export default function Section02Cover() {
  return (
    <section className="nzcu-section-02" aria-label="NZCU project cover" data-node-id="1:456">
      <div className="nzcu-section-02-phone nzcu-section-02-phone--12" data-node-id="1:457">
        <DetailImage src={`${assetRoot}/phone-12.png`} alt="" viewLabel="NZCU app screen" viewCrop={phoneViewCrop} />
      </div>

      <div className="nzcu-section-02-phone nzcu-section-02-phone--13" data-node-id="1:458">
        <DetailImage src={`${assetRoot}/phone-13.png`} alt="" viewLabel="NZCU app screen" viewCrop={phoneViewCrop} />
      </div>

      <div className="nzcu-section-02-phone nzcu-section-02-phone--14" data-node-id="1:459">
        <DetailImage src={`${assetRoot}/phone-14.png`} alt="" viewLabel="NZCU app screen" viewCrop={phoneViewCrop} />
      </div>
      <div
        className="nzcu-section-02-phone nzcu-section-02-phone--14 nzcu-section-02-phone--14-copy"
        data-node-id="1:460"
        aria-hidden="true"
      >
        <img src={`${assetRoot}/phone-14.png`} alt="" />
      </div>

      <div className="nzcu-section-02-phone nzcu-section-02-phone--15" data-node-id="1:461">
        <DetailImage src={`${assetRoot}/phone-15.png`} alt="" viewLabel="NZCU app screen" viewCrop={phoneViewCrop} />
      </div>
      <div
        className="nzcu-section-02-phone nzcu-section-02-phone--15 nzcu-section-02-phone--15-copy"
        data-node-id="1:462"
        aria-hidden="true"
      >
        <img src={`${assetRoot}/phone-15.png`} alt="" />
      </div>

      <div className="nzcu-section-02-brand" data-node-id="1:463">
        <div className="nzcu-section-02-wordmark" data-node-id="1:464">
          <span className="nzcu-section-02-logo" data-node-id="1:465">
            <img src={`${assetRoot}/nzcu-logo-source.png`} alt="" />
          </span>
          <h1 data-node-id="1:466">Nzcu</h1>
        </div>
        <p data-node-id="1:467">Connecting You to Every Destination with Ease.</p>
      </div>
    </section>
  )
}
