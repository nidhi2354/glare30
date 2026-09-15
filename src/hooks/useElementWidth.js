import { useEffect, useRef, useState } from 'react'

/**
 * Measures an element's width so SVG charts can be drawn in real pixels.
 *
 * A `viewBox` alone would scale the text and stroke widths along with the card,
 * so labels end up ~6px on a phone. Measuring keeps every mark at its spec size
 * at any width.
 */
export function useElementWidth(fallback = 640) {
  const ref = useRef(null)
  const [width, setWidth] = useState(fallback)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    if (typeof ResizeObserver === 'undefined') {
      setWidth(node.clientWidth || fallback)
      return
    }

    const observer = new ResizeObserver(([entry]) => {
      const next = Math.round(entry.contentRect.width)
      if (next > 0) setWidth(next)
    })

    observer.observe(node)
    return () => observer.disconnect()
  }, [fallback])

  return [ref, width]
}

export default useElementWidth
