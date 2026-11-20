import { useEffect, useState } from 'react'
import { SECTIONS, type SectionId, sectionIndex } from '../data/sections'

interface NavProps {
  activeId: SectionId
  onNavigate: (id: SectionId) => void
}

export function Nav({ activeId, onNavigate }: NavProps) {
  const [open, setOpen] = useState(false)
  const index = Math.max(0, sectionIndex(activeId))

  useEffect(() => {
    setOpen(false)
  }, [activeId])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <>
      <header className="nav">
        <button
          type="button"
          className="brand"
          onClick={() => onNavigate('accueil')}
          aria-label="AUSTRALIA PROJECT — Accueil"
        >
          <span className="brand-mark" aria-hidden />
          <span className="brand-text">
            <span className="brand-name">Australia Project</span>
            <span className="brand-sub">Préparez l’Australie</span>
          </span>
        </button>

        <nav className="nav-links" aria-label="Intercalaires">
          {SECTIONS.map((section) => (
            <button
              key={section.id}
              type="button"
              className={`nav-link${activeId === section.id ? ' is-active' : ''}`}
              onClick={() => onNavigate(section.id)}
            >
              {section.navShort}
            </button>
          ))}
        </nav>

        <div className="nav-actions">
          <div className="nav-progress" aria-hidden>
            <span>
              Chapitre {index + 1}/{SECTIONS.length}
            </span>
          </div>
          <button
            type="button"
            className={`menu-toggle${open ? ' is-open' : ''}`}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
          </button>
        </div>
      </header>

      {open && (
        <div className="mobile-menu" id="mobile-nav" role="navigation" aria-label="Menu mobile">
          {SECTIONS.map((section, i) => (
            <button
              key={section.id}
              type="button"
              className={`mobile-link${activeId === section.id ? ' is-active' : ''}`}
              onClick={() => onNavigate(section.id)}
            >
              <span>{section.label}</span>
              <span className="mobile-link-index">
                {String(i + 1).padStart(2, '0')}
              </span>
            </button>
          ))}
        </div>
      )}
    </>
  )
}
