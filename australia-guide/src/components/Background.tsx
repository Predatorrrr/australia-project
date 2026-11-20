import { useReducedMotion } from 'framer-motion'

interface BackgroundProps {
  image: string
}

export function Background({ image }: BackgroundProps) {
  const reduce = useReducedMotion()

  return (
    <div className="bg-layer" aria-hidden>
      <div
        className={`bg-image${reduce ? '' : ' is-animated'}`}
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="bg-veil" />
      <div className="bg-noise" />
    </div>
  )
}
