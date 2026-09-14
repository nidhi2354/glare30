/**
 * Tiny classname joiner — drops falsy values.
 * (Avoids pulling in an extra dependency like clsx or tailwind-merge.)
 */
export function cn(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default cn
