import { SECTIONS, type SectionId, sectionIndex } from '../data/sections'
import { GlassPanel } from './GlassPanel'

interface ProgressIndicatorProps {
  activeId: SectionId
}

export function ProgressIndicator({ activeId }: ProgressIndicatorProps) {
  const index = Math.max(0, sectionIndex(activeId))
  const total = SECTIONS.length
  const pct = Math.round(((index + 1) / total) * 100)

  return (
    <GlassPanel className="progress-panel" strong>
      <div className="progress-label">
        <span>Parcours</span>
        <strong>
          {index + 1} / {total}
        </strong>
      </div>
      <div
        className="progress-track"
        role="progressbar"
        aria-valuenow={pct}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="Progression du parcours"
      >
        <div className="progress-fill" style={{ width: `${pct}%` }} />
      </div>
      <div className="progress-steps">
        <span>{SECTIONS[0].label}</span>
        <span>{pct}%</span>
        <span>{SECTIONS[total - 1].label}</span>
      </div>
    </GlassPanel>
  )
}
