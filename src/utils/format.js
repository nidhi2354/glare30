/** Number / currency helpers — Indian grouping and lakh–crore shorthand. */

const inr = new Intl.NumberFormat('en-IN')

export const formatNumber = (n) => inr.format(n)

/** 184000 → "1.84L", 11500000 → "1.15Cr". Keeps big money readable in a tile. */
export function formatCompact(n) {
  const abs = Math.abs(n)
  if (abs >= 1e7) return `${+(n / 1e7).toFixed(2)}Cr`
  if (abs >= 1e5) return `${+(n / 1e5).toFixed(2)}L`
  if (abs >= 1e3) return `${+(n / 1e3).toFixed(1)}K`
  return inr.format(n)
}

export const formatCurrency = (n, { compact = false } = {}) =>
  `₹${compact ? formatCompact(n) : inr.format(n)}`

/** "+6.4%" / "−8.1%" — a real minus sign, not a hyphen. */
export const formatDelta = (d) => `${d > 0 ? '+' : d < 0 ? '−' : ''}${Math.abs(d)}%`

/** "Aarav Sharma" → "AS" */
export const initialsOf = (name) =>
  name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
    .toUpperCase()

/**
 * Placeholder fields in the data files start with `TODO:` so they can never be
 * printed by accident. Anything else renders as-is.
 */
export const isTodo = (value) => typeof value === 'string' && value.startsWith('TODO')
