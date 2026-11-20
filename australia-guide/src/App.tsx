import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { useCallback, useEffect, useState } from 'react'
import './App.css'
import { Background } from './components/Background'
import { DetailModal } from './components/DetailModal'
import { Nav } from './components/Nav'
import {
  SECTIONS,
  getSection,
  type ContentCard,
  type SectionId,
} from './data/sections'
import { AccueilView } from './sections/AccueilView'
import { SectionView } from './sections/SectionView'
import { VisaView } from './sections/VisaView'

function sectionFromHash(): SectionId {
  const raw = window.location.hash.replace(/^#/, '').trim()
  if (SECTIONS.some((s) => s.id === raw)) return raw as SectionId
  return 'accueil'
}

function App() {
  const [activeId, setActiveId] = useState<SectionId>(() =>
    typeof window !== 'undefined' ? sectionFromHash() : 'accueil',
  )
  const [detail, setDetail] = useState<ContentCard | null>(null)
  const reduce = useReducedMotion()
  const section = getSection(activeId)

  const navigate = useCallback(
    (id: SectionId) => {
      setActiveId(id)
      const nextHash = `#${id}`
      if (window.location.hash !== nextHash) {
        window.history.pushState(null, '', nextHash)
      }
      window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' })
    },
    [reduce],
  )

  useEffect(() => {
    const sync = () => setActiveId(sectionFromHash())
    window.addEventListener('hashchange', sync)
    window.addEventListener('popstate', sync)
    // Ensure URL reflects initial section
    if (!window.location.hash) {
      window.history.replaceState(null, '', `#${activeId}`)
    }
    return () => {
      window.removeEventListener('hashchange', sync)
      window.removeEventListener('popstate', sync)
    }
  }, [activeId])

  useEffect(() => {
    document.title = `${section.label} · AUSTRALIA PROJECT`
  }, [section.label])

  return (
    <div className="app-shell">
      <Background image={section.background} />
      <Nav activeId={activeId} onNavigate={navigate} />

      <main className="app-content">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeId}
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? undefined : { opacity: 0, y: -8 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            {activeId === 'accueil' ? (
              <AccueilView
                section={section}
                onNavigate={navigate}
                onDetails={setDetail}
              />
            ) : activeId === 'visa' ? (
              <VisaView
                section={section}
                onNavigate={navigate}
                onDetails={setDetail}
              />
            ) : (
              <SectionView
                section={section}
                onNavigate={navigate}
                onDetails={setDetail}
              />
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      <DetailModal card={detail} onClose={() => setDetail(null)} />
    </div>
  )
}

export default App
