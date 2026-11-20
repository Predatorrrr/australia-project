import type { HTMLAttributes, ReactNode } from 'react'

interface GlassPanelProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  strong?: boolean
  soft?: boolean
}

export function GlassPanel({
  children,
  className = '',
  strong,
  soft,
  ...rest
}: GlassPanelProps) {
  const tone = strong ? 'glass-strong' : soft ? 'glass-soft' : ''
  return (
    <div className={`glass ${tone} ${className}`.trim()} {...rest}>
      {children}
    </div>
  )
}
