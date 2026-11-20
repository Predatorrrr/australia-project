import type { ContentCard as ContentCardType } from '../data/sections'
import { Button } from './Button'
import { GlassPanel } from './GlassPanel'

interface ContentCardProps {
  card: ContentCardType
  onDetails: (card: ContentCardType) => void
}

export function ContentCard({ card, onDetails }: ContentCardProps) {
  return (
    <GlassPanel className="content-card">
      <div className="content-card-media">
        <img src={card.image} alt="" loading="lazy" />
        {card.tag && <span className="content-card-tag">{card.tag}</span>}
      </div>
      <div className="content-card-body">
        <h3>{card.title}</h3>
        {card.meta && <div className="content-card-meta">{card.meta}</div>}
        <p>{card.description}</p>
        <div className="content-card-footer">
          <Button variant="ghost" onClick={() => onDetails(card)}>
            Voir les détails
          </Button>
        </div>
      </div>
    </GlassPanel>
  )
}
