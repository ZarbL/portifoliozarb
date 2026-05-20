import { useEffect, useRef } from 'react'

export function useScrollReveal(threshold = 0.2) {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        el.dataset.revealed = entry.isIntersecting ? 'true' : 'false'
      },
      { threshold }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])

  return ref
}
