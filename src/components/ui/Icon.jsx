/**
 * Lightweight inline icon set — no external icon library needed.
 * Use: <Icon name="check" className="size-5" />
 */

const STROKE = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.75,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

const ICONS = {
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="M6 6l12 12M18 6L6 18" />,
  check: <path d="M4.5 12.5l5 5 10-11" />,
  arrowRight: <path d="M4 12h15m-6-6l6 6-6 6" />,
  chevronDown: <path d="M6 9.5l6 6 6-6" />,
  phone: (
    <path d="M6.3 3h3.2l1.6 4-2.1 1.6a12.5 12.5 0 0 0 6.4 6.4L17 12.9l4 1.6v3.2a2.2 2.2 0 0 1-2.4 2.2A17.2 17.2 0 0 1 4.1 5.4 2.2 2.2 0 0 1 6.3 3z" />
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2.5" />
      <path d="M3.5 7.5L12 13.2l8.5-5.7" />
    </>
  ),
  mapPin: (
    <>
      <path d="M12 21.5s7.2-6 7.2-11.5a7.2 7.2 0 1 0-14.4 0C4.8 15.5 12 21.5 12 21.5z" />
      <circle cx="12" cy="10" r="2.6" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5.2l3.4 2" />
    </>
  ),
  whatsapp: (
    <>
      <path d="M12 3a9 9 0 0 0-7.7 13.7L3.2 21l4.4-1.1A9 9 0 1 0 12 3z" />
      <path d="M9 9.4c0 3.1 2.5 5.6 5.6 5.6.7 0 1.2-.6 1.2-1.3l-1.7-.9-1 .9a5.2 5.2 0 0 1-2.4-2.4l.9-1-.9-1.7c-.7 0-1.3.5-1.3 1.2z" />
    </>
  ),
  users: (
    <>
      <circle cx="9.2" cy="8" r="3.4" />
      <path d="M2.8 20a6.4 6.4 0 0 1 12.8 0" />
      <path d="M16 5.2a3.4 3.4 0 0 1 0 5.6M17.6 14.6A6 6 0 0 1 21.4 20" />
    </>
  ),
  book: (
    <>
      <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v14.5H6.5A2.5 2.5 0 0 0 4 20z" />
      <path d="M4 20a2.5 2.5 0 0 1 2.5-2.5H20V21H6.5A2.5 2.5 0 0 1 4 20z" />
    </>
  ),
  target: (
    <>
      <circle cx="12" cy="12" r="8.8" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1.5" />
    </>
  ),
  atom: (
    <>
      <circle cx="12" cy="12" r="2.2" />
      <ellipse cx="12" cy="12" rx="9.5" ry="4" transform="rotate(30 12 12)" />
      <ellipse cx="12" cy="12" rx="9.5" ry="4" transform="rotate(-30 12 12)" />
    </>
  ),
  calculator: (
    <>
      <rect x="4.5" y="2.5" width="15" height="19" rx="2.5" />
      <path d="M8 6.5h8v3H8zM8 13.5h.01M12 13.5h.01M16 13.5h.01M8 17.5h.01M12 17.5h.01M16 17.5h.01" />
    </>
  ),
  flask: (
    <>
      <path d="M9.5 3v6L4.8 17.4A2.4 2.4 0 0 0 6.9 21h10.2a2.4 2.4 0 0 0 2.1-3.6L14.5 9V3" />
      <path d="M8.5 3h7M7.4 14.5h9.2" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <ellipse cx="12" cy="12" rx="4.2" ry="9" />
    </>
  ),
  award: (
    <>
      <circle cx="12" cy="9" r="5.2" />
      <path d="M8.4 13.6L7 22l5-2.6L17 22l-1.4-8.4" />
    </>
  ),
  heart: <path d="M12 20.4S3.8 15.6 3.8 9.9A4.7 4.7 0 0 1 12 6.8a4.7 4.7 0 0 1 8.2 3.1c0 5.7-8.2 10.5-8.2 10.5z" />,
  sparkles: (
    <>
      <path d="M11.2 3.4l1.9 4.3 4.3 1.9-4.3 1.9-1.9 4.3-1.9-4.3L5 9.6l4.3-1.9z" />
      <path d="M18 14.5l.9 2 2 .9-2 .9-.9 2-.9-2-2-.9 2-.9z" />
    </>
  ),
  chart: (
    <>
      <path d="M3.5 20.5h17" />
      <path d="M6.8 20.5v-6M12 20.5V6M17.2 20.5v-9" />
    </>
  ),
  chat: (
    <>
      <path d="M20.5 12.4c0 4.1-3.8 7.4-8.5 7.4a9.9 9.9 0 0 1-2.9-.4L4 21l1.4-3.6A6.9 6.9 0 0 1 3.5 12.4C3.5 8.3 7.3 5 12 5s8.5 3.3 8.5 7.4z" />
      <path d="M9 12h.01M12 12h.01M15 12h.01" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3l7.5 3v6.2c0 4.6-3.1 7.8-7.5 9.3-4.4-1.5-7.5-4.7-7.5-9.3V6z" />
      <path d="M9.2 12.2l2 2 3.6-4" />
    </>
  ),
  facebook: <path d="M14.5 8.5h2.2V5.6h-2.4c-2.2 0-3.6 1.4-3.6 3.7v2H8.4v3h2.3V21h3.1v-6.7h2.4l.4-3h-2.8V9.6c0-.7.3-1.1 1.2-1.1z" />,
  instagram: (
    <>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="3.9" />
      <path d="M16.9 7.2h.01" />
    </>
  ),
  youtube: (
    <>
      <rect x="2.8" y="5.5" width="18.4" height="13" rx="4" />
      <path d="M10.5 9.5l4.8 2.5-4.8 2.5z" />
    </>
  ),
}

export default function Icon({ name, className = 'size-6', ...props }) {
  const glyph = ICONS[name]
  if (!glyph) return null

  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" focusable="false" {...STROKE} {...props}>
      {glyph}
    </svg>
  )
}
