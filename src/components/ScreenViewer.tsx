import { useEffect, useRef, useState } from "react"
import { createPortal } from "react-dom"
import { LightboxZoomControls, useLightboxZoom } from "./LightboxZoom"

export type ScreenCrop = { sourceWidth: number; x: number; y: number; width: number; height: number }

type Screen = {
  src: string
  label: string
  wide: boolean
  crop?: ScreenCrop
}

export function useScreenViewer<T extends HTMLElement>() {
  const triggerRef = useRef<T>(null)
  const [screens, setScreens] = useState<Screen[]>([])
  const [activeIndex, setActiveIndex] = useState(0)
  const [isOpen, setIsOpen] = useState(false)
  const zoom = useLightboxZoom(isOpen)

  const open = () => {
    const triggers = Array.from(document.querySelectorAll<HTMLElement>("[data-screen-src]"))
    setScreens(triggers.map((trigger) => ({
      src: trigger.dataset.screenSrc || "",
      label: trigger.dataset.screenLabel || "Screen",
      wide: trigger.dataset.screenWide === "true",
      crop: trigger.dataset.screenCrop ? JSON.parse(trigger.dataset.screenCrop) as ScreenCrop : undefined,
    })))
    setActiveIndex(Math.max(0, triggers.indexOf(triggerRef.current as HTMLElement)))
    setIsOpen(true)
  }

  const move = (direction: -1 | 1) => {
    zoom.reset()
    setActiveIndex((index) => (index + direction + screens.length) % screens.length)
  }

  useEffect(() => {
    if (!isOpen) return
    const previousOverflow = document.body.style.overflow
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false)
    }
    document.body.style.overflow = "hidden"
    window.addEventListener("keydown", closeOnEscape)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener("keydown", closeOnEscape)
    }
  }, [isOpen])

  return { triggerRef, isOpen, active: screens[activeIndex], count: screens.length, open, close: () => setIsOpen(false), move, zoom }
}

export function ScreenViewer({ viewer }: { viewer: ReturnType<typeof useScreenViewer<HTMLElement>> }) {
  const { active, close, count, isOpen, move, zoom } = viewer
  if (!isOpen || !active) return null

  const crop = active.crop
  return createPortal(
    <div
      aria-label={`${active.label} detailed view`}
      aria-modal="true"
      className="gallery-lightbox"
      onClick={close}
      onKeyDown={(event) => {
        if (event.key === "ArrowLeft") { event.preventDefault(); move(-1) }
        if (event.key === "ArrowRight") { event.preventDefault(); move(1) }
      }}
      role="dialog"
    >
      <figure className={`gallery-lightbox-figure${active.wide ? " gallery-lightbox-figure--wide" : ""}${crop ? " gallery-lightbox-figure--cropped" : ""}`} onClick={(event) => event.stopPropagation()}>
        {crop ? (
          <div className="gallery-lightbox-crop" style={{ aspectRatio: `${crop.width} / ${crop.height}`, width: `min(92vw, calc(84vh * ${crop.width / crop.height}))`, ...zoom.mediaStyle }} {...zoom.mediaHandlers}>
            <img alt={active.label} src={active.src} style={{ left: `${(-crop.x / crop.width) * 100}%`, top: `${(-crop.y / crop.height) * 100}%`, width: `${(crop.sourceWidth / crop.width) * 100}%` }} />
          </div>
        ) : <img alt={active.label} src={active.src} style={zoom.mediaStyle} {...zoom.mediaHandlers} />}
        <figcaption aria-live="polite">{active.label}</figcaption>
        {count > 1 && (
          <>
            <button aria-label="Previous screen" className="gallery-lightbox-nav gallery-lightbox-nav--previous" onClick={() => move(-1)} type="button">
              <svg aria-hidden="true" viewBox="0 0 24 24"><path d="m15 18-6-6 6-6" /></svg>
            </button>
            <button aria-label="Next screen" className="gallery-lightbox-nav gallery-lightbox-nav--next" onClick={() => move(1)} type="button">
              <svg aria-hidden="true" viewBox="0 0 24 24"><path d="m9 18 6-6-6-6" /></svg>
            </button>
          </>
        )}
        <LightboxZoomControls {...zoom} />
        <button aria-label="Close detailed view" autoFocus className="gallery-lightbox-close" onClick={close} type="button">
          <span aria-hidden="true">×</span>
        </button>
      </figure>
    </div>,
    document.body,
  )
}
