import { motion, useReducedMotion } from 'framer-motion'
import type { ContentCard as ContentCardType, SectionDef, SectionId } from '../data/sections'
import { getSection } from '../data/sections'
import { Button } from '../components/Button'
import { GlassPanel } from '../components/GlassPanel'
import { ProgressIndicator } from '../components/ProgressIndicator'

interface VisaViewProps {
  section: SectionDef
  onNavigate: (id: SectionId) => void
  onDetails: (card: ContentCardType) => void
}

export function VisaView({ section, onNavigate, onDetails }: VisaViewProps) {
  const reduce = useReducedMotion()
  const next = section.nextId ? getSection(section.nextId) : null
  const [featured, ...rest] = section.cards

  const fade = reduce
    ? {}
    : {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
      }

  return (
    <motion.div className="visa-page" {...fade}>
      {/* Hero d’entrée */}
      <div className="visa-hero-grid">
        <GlassPanel className="visa-hero">
          <div
            className="visa-hero-media"
            style={{ backgroundImage: `url(${section.background})` }}
          />
          <div className="visa-hero-body">
            <div className="eyebrow">Chapitre 02 · Visa</div>
            <h1 className="visa-hero-title">{section.title}</h1>
            <p className="visa-hero-copy">{section.intro}</p>
            <div className="btn-row">
              <Button
                variant="primary"
                onClick={() => {
                  document.getElementById('visa-types')?.scrollIntoView({
                    behavior: reduce ? 'auto' : 'smooth',
                    block: 'start',
                  })
                }}
              >
                Comparer les visas
              </Button>
              {next && (
                <Button variant="secondary" onClick={() => onNavigate(next.id)}>
                  {section.continueLabel}
                </Button>
              )}
            </div>
          </div>
        </GlassPanel>

        <div className="visa-side">
          <ProgressIndicator activeId={section.id} />

          <GlassPanel className="visa-tip" strong>
            <h3>Conseil d’entrée</h3>
            <p>
              Commencez par le statut qui correspond à votre âge et votre projet —
              le Working Holiday reste la voie la plus souple pour la plupart des
              profils.
            </p>
          </GlassPanel>

          <GlassPanel className="visa-stats" soft>
            <div className="visa-stat">
              <strong>4</strong>
              <span>types clés</span>
            </div>
            <div className="visa-stat">
              <strong>417</strong>
              <span>WHV classique</span>
            </div>
            <div className="visa-stat">
              <strong>500</strong>
              <span>visa étudiant</span>
            </div>
          </GlassPanel>
        </div>
      </div>

      {/* Types de visa */}
      <section className="visa-types" id="visa-types" aria-labelledby="visa-types-title">
        <div className="cards-section-head visa-types-head">
          <div>
            <div className="eyebrow">Options</div>
            <h2 id="visa-types-title">Types de visa</h2>
            <p className="visa-types-sub">
              Quatre portes d’entrée — choisissez celle qui cadre avec votre séjour.
            </p>
          </div>
          <span className="visa-count">{section.cards.length} options</span>
        </div>

        {featured && (
          <GlassPanel className="visa-featured">
            <div
              className="visa-featured-media"
              style={{ backgroundImage: `url(${featured.image})` }}
            >
              {featured.tag && (
                <span className="content-card-tag">{featured.tag}</span>
              )}
            </div>
            <div className="visa-featured-body">
              <div className="eyebrow">Recommandé pour démarrer</div>
              <h3>{featured.title}</h3>
              {featured.meta && (
                <div className="content-card-meta">{featured.meta}</div>
              )}
              <p>{featured.description}</p>
              <div className="btn-row">
                <Button variant="primary" onClick={() => onDetails(featured)}>
                  Voir les détails
                </Button>
                <Button variant="ghost" onClick={() => onNavigate('logement')}>
                  Ensuite · Logement
                </Button>
              </div>
            </div>
          </GlassPanel>
        )}

        <div className="visa-card-grid">
          {rest.map((card, i) => (
            <motion.div
              key={card.id}
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: reduce ? 0 : 0.08 * (i + 1),
                duration: 0.45,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <GlassPanel className="visa-card">
                <div className="visa-card-media">
                  <img src={card.image} alt="" loading="lazy" />
                  {card.tag && (
                    <span className="content-card-tag">{card.tag}</span>
                  )}
                </div>
                <div className="visa-card-body">
                  <h3>{card.title}</h3>
                  {card.meta && (
                    <div className="content-card-meta">{card.meta}</div>
                  )}
                  <p>{card.description}</p>
                  <div className="visa-card-footer">
                    <Button variant="ghost" onClick={() => onDetails(card)}>
                      Voir les détails
                    </Button>
                  </div>
                </div>
              </GlassPanel>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Sous-sections */}
      {section.subsections && section.subsections.length > 0 && (
        <div className="sub-grid visa-subs">
          {section.subsections.map((sub) => (
            <GlassPanel key={sub.title} className="sub-card visa-sub" soft>
              <h3>{sub.title}</h3>
              <p>{sub.text}</p>
            </GlassPanel>
          ))}
        </div>
      )}

      {next && (
        <GlassPanel className="continue-bar visa-continue" strong>
          <div className="continue-copy">
            <strong>Chapitre suivant · {next.label}</strong>
            {next.intro}
          </div>
          <div className="btn-row" style={{ marginTop: 0 }}>
            <Button variant="primary" onClick={() => onNavigate(next.id)}>
              Continuer
            </Button>
            <Button variant="secondary" onClick={() => onNavigate('accueil')}>
              Retour à l’accueil
            </Button>
          </div>
        </GlassPanel>
      )}
    </motion.div>
  )
}
