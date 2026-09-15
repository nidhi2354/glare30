import { useEffect } from 'react'
import { brand } from '@/data/site'

const setMeta = (selector, attr, value) => {
  const tag = document.head.querySelector(selector)
  if (tag) tag.setAttribute(attr, value)
}

/**
 * Per-page <title> and description.
 * A full SPA has one index.html, so each page sets its own head tags on mount.
 */
export function useSeo({ title, description }) {
  useEffect(() => {
    if (title) {
      const full = `${title} | ${brand.fullName}`
      document.title = full
      setMeta('meta[property="og:title"]', 'content', full)
    }

    if (description) {
      setMeta('meta[name="description"]', 'content', description)
      setMeta('meta[property="og:description"]', 'content', description)
    }
  }, [title, description])
}

export default useSeo;
