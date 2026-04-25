import type { CSSProperties } from 'react'

interface DoodleProps {
  accent: string
  size?: number
  style?: CSSProperties
}

export function Star({ accent, size = 28, style }: DoodleProps) {
  return (
    <svg viewBox="0 0 40 40" width={size} height={size} style={style} aria-hidden="true">
      <path
        d="M20 6 L22 17 L33 19 L23 24 L26 34 L20 28 L14 34 L17 24 L7 19 L18 17 Z"
        fill="none"
        stroke={accent}
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function StarFilled({ accent, size = 18, style }: DoodleProps) {
  return (
    <svg viewBox="0 0 40 40" width={size} height={size} style={style} aria-hidden="true">
      <path
        d="M20 6 L22 17 L33 19 L23 24 L26 34 L20 28 L14 34 L17 24 L7 19 L18 17 Z"
        fill={accent}
        stroke={accent}
        strokeWidth="1"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function Asterisk({ accent, size = 22, style }: DoodleProps) {
  return (
    <svg viewBox="0 0 40 40" width={size} height={size} style={style} aria-hidden="true">
      <g stroke={accent} strokeWidth="2" strokeLinecap="round">
        <line x1="20" y1="8" x2="20" y2="32" />
        <line x1="10" y1="14" x2="30" y2="26" />
        <line x1="10" y1="26" x2="30" y2="14" />
        <line x1="8" y1="20" x2="32" y2="20" />
      </g>
    </svg>
  )
}

interface ArrowProps extends DoodleProps {
  w?: number
  h?: number
  flip?: boolean
  dashed?: boolean
}

export function Arrow({ accent, w = 120, h = 90, flip = false, dashed = false, style }: ArrowProps) {
  return (
    <svg
      viewBox="0 0 120 90"
      width={w}
      height={h}
      style={{ transform: flip ? 'scaleX(-1)' : undefined, ...style }}
      aria-hidden="true"
    >
      <path
        d="M10 10 Q 30 30, 40 50 Q 48 65, 62 70"
        stroke={accent}
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeDasharray={dashed ? '3 4' : undefined}
      />
      <path
        d="M60 64 L62 70 L56 72"
        stroke={accent}
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  )
}

interface SquiggleProps {
  accent: string
  w?: number
  h?: number
  style?: CSSProperties
}

export function Squiggle({ accent, w = 60, h = 14, style }: SquiggleProps) {
  return (
    <svg viewBox="0 0 60 14" width={w} height={h} style={style} aria-hidden="true">
      <path
        d="M2 7 Q 10 2, 18 7 T 34 7 T 50 7"
        stroke={accent}
        strokeWidth="1.8"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M46 4 L50 7 L46 10"
        stroke={accent}
        strokeWidth="1.8"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  )
}

interface BracketProps {
  accent: string
  h?: number
  style?: CSSProperties
}

export function Bracket({ accent, h = 80, style }: BracketProps) {
  return (
    <svg viewBox="0 0 20 80" width={20} height={h} style={style} aria-hidden="true">
      <path
        d="M14 4 Q 6 6, 6 40 Q 6 74, 14 76"
        stroke={accent}
        strokeWidth="1.8"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  )
}

interface DotTrailProps {
  accent: string
  count?: number
  style?: CSSProperties
}

export function DotTrail({ accent, count = 4, style }: DotTrailProps) {
  return (
    <div style={{ display: 'inline-flex', gap: 4, alignItems: 'center', ...style }}>
      {Array.from({ length: count }).map((_, i) => (
        <span
          key={i}
          style={{
            width: 3 + i,
            height: 3 + i,
            borderRadius: '50%',
            background: accent,
            opacity: 0.4 + i * 0.12,
          }}
        />
      ))}
    </div>
  )
}
