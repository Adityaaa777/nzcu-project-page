import { useEffect, useState } from "react"
import type { ImgHTMLAttributes, KeyboardEvent } from "react"
import { createPortal } from "react-dom"
import "./detail-image.css"

type DetailImageProps = ImgHTMLAttributes<HTMLImageElement> & {
  src: string
  alt: string
  viewLabel?: string
  wide?: boolean
  viewCrop?: { sourceWidth: number; x: number; y: number; width: number; height: number }
}

/** Opens an existing screen image at its original aspect ratio. */
export function DetailImage({ alt, className = "", src, viewLabel, wide = false, viewCrop, ...imageProps }: DetailImageProps) {
  const [isOpen, setIsOpen] = useState(false)
  const label = viewLabel || alt || "Screen"

  useEffect(() => {
    if (!isOpen) return
    const previousOverflow = document.body.style.overflow
    const closeOnEscape = (event: globalThis.KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false)
    }
    document.body.style.overflow = "hidden"
    window.addEventListener("keydown", closeOnEscape)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener("keydown", closeOnEscape)
    }
  }, [isOpen])

  const openFromKeyboard = (event: KeyboardEvent<HTMLImageElement>) => {
    if (event.key !== "Enter" && event.key !== " ") return
    event.preventDefault()
    setIsOpen(true)
  }

  return (
    <>
      <img
        {...imageProps}
        alt={alt}
        aria-label={`View ${label} in detail`}
        aria-expanded={isOpen}
        aria-haspopup="dialog"
        className={`${className} detail-image-trigger`.trim()}
        onClick={() => setIsOpen(true)}
        onKeyDown={openFromKeyboard}
        role="button"
        src={src}
        tabIndex={0}
      />
      {isOpen && createPortal(
        <div aria-label={`${label} detailed view`} aria-modal="true" className="gallery-lightbox" onClick={() => setIsOpen(false)} role="dialog">
          <figure className={`gallery-lightbox-figure${wide ? " gallery-lightbox-figure--wide" : ""}`} onClick={(event) => event.stopPropagation()}>
            {viewCrop ? (
              <div className="gallery-lightbox-crop" style={{ aspectRatio: `${viewCrop.width} / ${viewCrop.height}`, width: `min(92vw, calc(84vh * ${viewCrop.width / viewCrop.height}))` }}>
                <img
                  alt={label}
                  src={src}
                  style={{ left: `${(-viewCrop.x / viewCrop.width) * 100}%`, top: `${(-viewCrop.y / viewCrop.height) * 100}%`, width: `${(viewCrop.sourceWidth / viewCrop.width) * 100}%` }}
                />
              </div>
            ) : <img alt={label} src={src} />}
            <figcaption>{label}</figcaption>
            <button aria-label="Close detailed view" autoFocus className="gallery-lightbox-close" onClick={() => setIsOpen(false)} type="button">
              <span aria-hidden="true">×</span>
            </button>
          </figure>
        </div>,
        document.body,
      )}
    </>
  )
}
