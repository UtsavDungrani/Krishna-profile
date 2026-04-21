import { useEffect, useState } from 'react'
import { FiX, FiZoomIn, FiZoomOut } from 'react-icons/fi'

export default function ImageLightbox({ image, isOpen, onClose }) {
  const [zoomLevel, setZoomLevel] = useState(1)

  useEffect(() => {
    if (!isOpen) {
      setZoomLevel(1)
      return
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose()
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, onClose])

  if (!isOpen || !image) return null

  const zoomIn = () => setZoomLevel((prev) => Math.min(prev + 0.5, 3))
  const zoomOut = () => setZoomLevel((prev) => Math.max(prev - 0.5, 1))
  const toggleZoom = () => setZoomLevel((prev) => (prev > 1 ? 1 : 2))

  return (
    <div className="fixed inset-0 z-[140] flex items-center justify-center bg-black/90 p-4 sm:p-8">
      <button
        type="button"
        onClick={onClose}
        className="absolute inset-0"
        aria-label="Close image preview"
      />

      <div className="relative z-10 flex h-full w-full max-w-6xl flex-col">
        <div className="mb-4 flex items-center justify-end gap-2">
          <button
            type="button"
            onClick={zoomOut}
            className="rounded-lg bg-white/10 p-2 text-white hover:bg-white/20"
            aria-label="Zoom out"
          >
            <FiZoomOut size={18} />
          </button>
          <button
            type="button"
            onClick={zoomIn}
            className="rounded-lg bg-white/10 p-2 text-white hover:bg-white/20"
            aria-label="Zoom in"
          >
            <FiZoomIn size={18} />
          </button>
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg bg-white/10 p-2 text-white hover:bg-white/20"
            aria-label="Close"
          >
            <FiX size={18} />
          </button>
        </div>

        <div className="flex-1 overflow-auto rounded-xl bg-black/30 p-2 sm:p-4">
          <img
            src={image.src}
            alt={image.alt || 'Preview image'}
            onClick={toggleZoom}
            className="mx-auto max-h-full w-auto max-w-full cursor-zoom-in rounded-lg object-contain"
            style={{ transform: `scale(${zoomLevel})`, transformOrigin: 'center center' }}
          />
        </div>
      </div>
    </div>
  )
}