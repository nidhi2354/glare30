import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

/**
 * Keeps scroll position sane across route changes:
 *
 * - `/#programs` → scrolls to that section (the target may only exist after the
 *   new page has rendered, so we retry on the next frame).
 * - any other navigation → jumps back to the top.
 *
 * The browser's own restoration is turned off so a back/forward move doesn't
 * fight with this.
 */
export default function ScrollManager() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if ('scrollRestoration' in window.history) window.history.scrollRestoration = 'manual'
  }, [])

  useEffect(() => {
    const behavior = prefersReducedMotion() ? 'auto' : 'smooth'

    if (!hash) {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
      return
    }

    let frame = 0
    let attempts = 0

    // The section might not be mounted yet when the route has just changed.
    const scrollToTarget = () => {
      const target = document.querySelector(hash)
      if (target) {
        target.scrollIntoView({ behavior, block: 'start' })
        return
      }
      if (++attempts < 20) frame = requestAnimationFrame(scrollToTarget)
    }

    frame = requestAnimationFrame(scrollToTarget)
    return () => cancelAnimationFrame(frame)
    // Keyed on pathname + hash only — a query-string change alone should not
    // move the page (filters, tracking params, and the like).
  }, [pathname, hash])

  return null
}
