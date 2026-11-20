import { motion, useReducedMotion } from 'framer-motion'
import type { ContentCard as ContentCardType, SectionDef, SectionId } from '../data/sections'
import { Button } from '../components/Button'
import { ContentCard } from '../components/ContentCard'
import { GlassPanel } from '../components/GlassPanel'
import { ProgressIndicator } from '../components/ProgressIndicator'
import { ProgressRings } from '../components/ProgressRings'

interface AccueilViewProps {
  section: SectionDef
  onNavigate: (id: SectionId) => void
  onDetails: (card: ContentCardType) => void
}

export function AccueilView({ section, onNavigate, onDetails }: AccueilViewProps) {
  const reduce = useReducedMotion()
  const fade = reduce
    ? {}
    : {
        initial: { opacity: 0, y: 18 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
      }

  return (
    <motion.div {...fade}>
      <div className="hero-grid">
        <GlassPanel className="hero-main">
          <div
            className="hero-media"
            style={{ backgroundImage: `url(${section.background})` }}
          />
          <div className="hero-body">
            <div className="hero-brand">Australia Project</div>
            <h1 className="hero-title">{section.title}</h1>
            <p className="hero-copy">{section.intro}</p>
            <div className="btn-row">
              <Button variant="primary" onClick={() => onNavigate('visa')}>
                Commencer mon aventure
              </Button>
              <Button variant="secondary" onClick={() => onNavigate('visa')}>
                Découvrir les visas
              </Button>
            </div>
          </div>
        </GlassPanel>

        <div className="side-stack">
          <GlassPanel className="weather-card" strong>
            <h3>Australie</h3>
            <div className="weather-row">
              <div>
                <div className="weather-temp">24°</div>
              </div>
              <div className="weather-meta">
                <strong>Sydney</strong>
                Soleil · UV élevé
                <br />
                Max 27° · Min 18°
              </div>
            </div>
          </GlassPanel>

          <GlassPanel className="flight-card" strong>
            <h3>Prochaine étape</h3>
            <div className="flight-route">
              <div className="flight-city">PAR</div>
              <div className="flight-line" />
              <div className="flight-city">SYD</div>
            </div>
            <div className="flight-times">
              <span>Départ · votre projet</span>
              <span>Arrivée · Down Under</span>
            </div>
          </GlassPanel>

          <GlassPanel className="stat-card" strong>
            <h3>Votre progression</h3>
            <ProgressRings />
          </GlassPanel>
        </div>
      </div>

      <div className="cards-section">
        <div className="cards-section-head">
          <h2>Commencer par l’essentiel</h2>
          <span>3 portes d’entrée</span>
        </div>
        <div className="card-grid cols-3">
          {section.cards.map((card) => (
            <ContentCard key={card.id} card={card} onDetails={onDetails} />
          ))}
        </div>
      </div>

      <div style={{ marginTop: '1.5rem', maxWidth: 420 }}>
        <ProgressIndicator activeId={section.id} />
      </div>

      <GlassPanel className="continue-bar" strong>
        <div className="continue-copy">
          <strong>Étape suivante · Visa</strong>
          Comparez les portes d’entrée et choisissez le statut qui vous correspond.
        </div>
        <Button variant="primary" onClick={() => onNavigate('visa')}>
          Découvrir les visas
        </Button>
      </GlassPanel>
    </motion.div>
  )
}
