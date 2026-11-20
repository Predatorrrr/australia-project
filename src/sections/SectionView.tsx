import { motion, useReducedMotion } from 'framer-motion'
import type { ContentCard as ContentCardType, SectionDef, SectionId } from '../data/sections'
import { getSection } from '../data/sections'
import { Button } from '../components/Button'
import { ContentCard } from '../components/ContentCard'
import { GlassPanel } from '../components/GlassPanel'
import { ProgressIndicator } from '../components/ProgressIndicator'

interface SectionViewProps {
  section: SectionDef
  onNavigate: (id: SectionId) => void
  onDetails: (card: ContentCardType) => void
}

export function SectionView({ section, onNavigate, onDetails }: SectionViewProps) {
  const reduce = useReducedMotion()
  const cols =
    section.cards.length >= 4 ? 'cols-4' : section.cards.length === 3 ? 'cols-3' : ''
  const next = section.nextId ? getSection(section.nextId) : null

  const fade = reduce
    ? {}
    : {
        initial: { opacity: 0, y: 16 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
      }

  return (
    <motion.div key={section.id} {...fade}>
      <div className="section-head">
        <div>
          <div className="eyebrow">Chapitre · {section.label}</div>
          <h1 className="section-title">{section.title}</h1>
          <p className="section-intro">{section.intro}</p>
          <div className="btn-row">
            {next && (
              <Button variant="primary" onClick={() => onNavigate(next.id)}>
                {section.continueLabel}
              </Button>
            )}
            <Button variant="secondary" onClick={() => onNavigate('accueil')}>
              Retour à l’accueil
            </Button>
          </div>
        </div>
        <ProgressIndicator activeId={section.id} />
      </div>

      <div className="cards-section">
        <div className="cards-section-head">
          <h2>
            {section.id === 'visa'
              ? 'Types de visa'
              : `Explorer · ${section.label}`}
          </h2>
          <span>{section.cards.length} options</span>
        </div>
        <div className={`card-grid ${cols}`.trim()}>
          {section.cards.map((card) => (
            <ContentCard key={card.id} card={card} onDetails={onDetails} />
          ))}
        </div>
      </div>

      {section.subsections && section.subsections.length > 0 && (
        <div className="sub-grid">
          {section.subsections.map((sub) => (
            <GlassPanel key={sub.title} className="sub-card" soft>
              <h3>{sub.title}</h3>
              <p>{sub.text}</p>
            </GlassPanel>
          ))}
        </div>
      )}

      {next && (
        <GlassPanel className="continue-bar" strong>
          <div className="continue-copy">
            <strong>Chapitre suivant · {next.label}</strong>
            {next.intro}
          </div>
          <Button variant="primary" onClick={() => onNavigate(next.id)}>
            Continuer
          </Button>
        </GlassPanel>
      )}
    </motion.div>
  )
}
