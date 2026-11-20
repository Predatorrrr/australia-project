import { useEffect } from 'react'
import type { ContentCard } from '../data/sections'
import { Button } from './Button'
import { GlassPanel } from './GlassPanel'

interface DetailModalProps {
  card: ContentCard | null
  onClose: () => void
}

export function DetailModal({ card, onClose }: DetailModalProps) {
  useEffect(() => {
    if (!card) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = prev
    }
  }, [card, onClose])

  if (!card) return null

  return (
    <div
      className="modal-backdrop"
      role="presentation"
      onClick={onClose}
    >
      <GlassPanel
        className="modal"
        strong
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className="modal-media"
          style={{ backgroundImage: `url(${card.image})` }}
          role="img"
          aria-label={card.title}
        />
        <div className="modal-body">
          {card.tag && (
            <div className="eyebrow" style={{ marginBottom: '0.5rem' }}>
              {card.tag}
            </div>
          )}
          <h3 id="modal-title">{card.title}</h3>
          {card.meta && <div className="content-card-meta">{card.meta}</div>}
          <p style={{ marginTop: '0.75rem' }}>{card.description}</p>
          <p style={{ marginTop: '0.85rem' }}>
            Explorez ce sujet dans le chapitre actuel, puis continuez votre parcours
            lorsque vous êtes prêt.
          </p>
          <div className="modal-actions">
            <Button variant="primary" onClick={onClose}>
              Compris
            </Button>
            <Button variant="secondary" onClick={onClose}>
              Fermer
            </Button>
          </div>
        </div>
      </GlassPanel>
    </div>
  )
}
