import Image from 'next/image'
import { useEffect, useState } from 'react'
import {
  Star,
  StarFilled,
  Asterisk,
  Arrow,
  Squiggle,
  Bracket,
  DotTrail,
} from '@/components/Doodles'

const accent = '#4f46e5'
const ink = '#2b1f3d'
const muted = '#6b5d7a'
const serif = '"Fraunces", Georgia, serif'
const script = '"Caveat", "Kalam", cursive'

const PROJECTS = [
  {
    title: 'Simple Paystub Generator',
    href: 'https://simplepaystub.com/',
    blurb: 'Create professional pay stubs for free with an easy-to-use generator.',
    tag: 'Tool',
    year: '2025',
  },
  {
    title: 'PostaMagic',
    href: 'https://postamagic.com/',
    blurb:
      'AI-powered platform to grow your Threads audience, schedule posts, and track analytics.',
    tag: 'SaaS',
    year: '2026',
  },
  {
    title: 'Vibe Goal',
    href: 'https://vibegoal.app',
    blurb:
      'A simple service that sends you a fresh, uplifting motivational quote to your inbox every day.',
    tag: 'Service',
    year: '2025',
  },
  {
    title: 'PhotoNotes',
    href: 'https://github.com/congdv/photo-notes',
    blurb: 'An open-source mobile app built with React Native to capture photo-backed notes.',
    tag: 'Mobile',
    year: '2024',
  },
  {
    title: 'Snake Retro Game',
    href: 'https://snake.congdv.com/',
    blurb: 'A classic web-based snake game built with modern web technologies.',
    tag: 'Game',
    year: '2024',
  },
  {
    title: 'Feedback App',
    href: 'https://feedback.congdv.com/',
    blurb: 'Create your own feedback space and collect valuable insights from customers.',
    tag: 'Web App',
    year: '2023',
  },
  {
    title: 'Markdown Note',
    href: 'https://notemd.congdv.com/',
    blurb: "A modern text editor for writing Markdown with Vim's key binding support.",
    tag: 'Editor',
    year: '2023',
  },
  {
    title: '30 Days of Sharing',
    href: 'https://30daysofsharing.congdv.com/',
    blurb:
      'A collection of frontend/web development knowledge organized by WeBuild Community.',
    tag: 'Community',
    year: '2022',
  },
]

const rotations = [-1, 1, -2, 2, -1, 1, 0, -1]

export default function Home() {
  const [drawn, setDrawn] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setDrawn(true), 350)
    return () => clearTimeout(t)
  }, [])

  return (
    <div style={{ position: 'relative', color: ink, minHeight: '100vh', overflow: 'hidden' }}>
      {/* Scattered margin doodles */}
      <Star
        accent={accent}
        size={22}
        style={{ position: 'absolute', top: 120, right: 40, opacity: 0.45, transform: 'rotate(14deg)', pointerEvents: 'none' }}
      />
      <Asterisk
        accent={accent}
        size={20}
        style={{ position: 'absolute', top: 620, left: 18, opacity: 0.5, pointerEvents: 'none' }}
      />
      <StarFilled
        accent={accent}
        size={14}
        style={{ position: 'absolute', top: 1180, right: 30, opacity: 0.55, transform: 'rotate(-18deg)', pointerEvents: 'none' }}
      />
      <Asterisk
        accent={accent}
        size={24}
        style={{ position: 'absolute', top: 1680, left: 28, opacity: 0.4, transform: 'rotate(20deg)', pointerEvents: 'none' }}
      />
      <Star
        accent={accent}
        size={18}
        style={{ position: 'absolute', top: 2180, right: 22, opacity: 0.45, transform: 'rotate(-8deg)', pointerEvents: 'none' }}
      />

      <div
        style={{
          position: 'relative',
          zIndex: 1,
          maxWidth: 1200,
          margin: '0 auto',
          padding: '0 40px',
        }}
      >
        {/* ── HERO ── */}
        <section
          style={{
            display: 'grid',
            gridTemplateColumns: '1.3fr 1fr',
            gap: 56,
            padding: '72px 12px 40px',
            position: 'relative',
          }}
        >
          {/* Left */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: 28 }}>
              <span
                style={{
                  display: 'inline-block',
                  padding: '6px 14px',
                  fontFamily: script,
                  fontSize: 20,
                  color: '#6b5a0a',
                  background: '#fff1b8',
                  transform: 'rotate(-2deg)',
                  boxShadow: '1px 2px 0 rgba(0,0,0,0.06)',
                }}
              >
                on my desk ↓
              </span>
              <DotTrail accent={accent} count={5} style={{ marginLeft: 16 }} />
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
              <span className="paper-wave" style={{ fontSize: 28 }}>
                👋
              </span>
              <span style={{ fontFamily: script, fontSize: 32, color: muted }}>hey, I&apos;m</span>
            </div>

            <h1
              style={{
                fontFamily: serif,
                fontSize: 'clamp(52px, 6.8vw, 82px)',
                lineHeight: 1.02,
                letterSpacing: '-0.03em',
                margin: 0,
                fontWeight: 400,
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                gap: 6,
              }}
            >
              <span style={{ display: 'block', whiteSpace: 'nowrap' }}>
                <span style={{ fontWeight: 500 }}>Cong</span>
                <span
                  style={{
                    fontFamily: script,
                    fontSize: 'clamp(40px, 5.4vw, 64px)',
                    fontStyle: 'italic',
                    color: accent,
                    display: 'inline-block',
                    verticalAlign: 'baseline',
                  }}
                >
                  &nbsp;—&nbsp;a developer
                </span>
              </span>
              <span style={{ display: 'block', whiteSpace: 'nowrap' }}>
                <span style={{ fontWeight: 500 }}>who writes&nbsp;</span>
                <span style={{ position: 'relative', display: 'inline-block' }}>
                  software&nbsp;&amp;&nbsp;notes
                  <svg
                    style={{
                      position: 'absolute',
                      left: -4,
                      right: -4,
                      bottom: -18,
                      width: 'calc(100% + 8px)',
                      height: 24,
                    }}
                    viewBox="0 0 400 20"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M5 14 Q 100 2, 200 10 T 395 8"
                      stroke={accent}
                      strokeWidth="4"
                      fill="none"
                      strokeLinecap="round"
                      style={{
                        strokeDasharray: 600,
                        strokeDashoffset: drawn ? 0 : 600,
                        transition: 'stroke-dashoffset 1.2s ease-out',
                      }}
                    />
                  </svg>
                </span>
                <span style={{ color: accent }}>.</span>
              </span>

              {/* margin annotation */}
              <div
                style={{
                  position: 'absolute',
                  right: -40,
                  top: -8,
                  width: 150,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-end',
                  transform: 'rotate(4deg)',
                }}
              >
                <Arrow accent={accent} w={70} h={50} dashed style={{ marginLeft: 6 }} />
                <span style={{ fontFamily: script, fontSize: 22, marginTop: -6, color: accent }}>
                  this, mostly
                </span>
              </div>
            </h1>

            <p
              style={{
                fontSize: 20,
                lineHeight: 1.55,
                color: ink,
                maxWidth: 540,
                marginTop: 40,
                fontFamily: serif,
                fontWeight: 300,
              }}
            >
              I build meaningful little applications and write notes along the way. I like tools
              that solve{' '}
              <span
                style={{
                  background: '#fff1b880',
                  padding: '0 4px',
                  borderRadius: 3,
                }}
              >
                real problems
              </span>
              , open source, and the boring parts of software nobody talks about.
            </p>

            <div style={{ display: 'flex', gap: 14, marginTop: 36, flexWrap: 'wrap' }}>
              <a
                href="#work"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 10,
                  padding: '13px 22px',
                  color: '#fff',
                  borderRadius: 999,
                  textDecoration: 'none',
                  fontWeight: 500,
                  fontSize: 15,
                  background: accent,
                  boxShadow: '2px 3px 0 rgba(20,18,34,0.18)',
                }}
              >
                See the work <span>→</span>
              </a>
              <a
                href="mailto:congdaovan94@gmail.com"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  padding: '13px 22px',
                  color: ink,
                  borderRadius: 999,
                  textDecoration: 'none',
                  fontWeight: 500,
                  fontSize: 15,
                  border: `1.5px dashed ${ink}33`,
                  background: 'transparent',
                }}
              >
                <span style={{ color: accent }}>✎</span> Drop me a line
              </a>
            </div>
          </div>

          {/* Right */}
          <div style={{ position: 'relative', minHeight: 360 }}>
            <div
              style={{
                position: 'absolute',
                width: 70,
                height: 20,
                background: `${accent}aa`,
                opacity: 0.9,
                zIndex: 3,
                top: 6,
                left: 40,
                transform: 'rotate(-6deg)',
              }}
            />
            <div
              style={{
                position: 'absolute',
                width: 70,
                height: 20,
                background: '#fff1b8ee',
                opacity: 0.9,
                zIndex: 3,
                top: 6,
                right: 36,
                transform: 'rotate(4deg)',
              }}
            />

            <div
              style={{
                width: 260,
                height: 260,
                borderRadius: '50%',
                boxShadow: `0 4px 0 ${ink}15, 0 12px 30px ${ink}22`,
                margin: '16px auto 0',
                overflow: 'hidden',
                position: 'relative',
              }}
            >
              <Image
                src="/avatar.jpg"
                alt="Cong Dao"
                fill
                style={{ objectFit: 'cover' }}
                priority
              />
            </div>

            <Arrow
              accent={accent}
              w={120}
              h={90}
              dashed
              style={{ position: 'absolute', right: -10, top: 40, transform: 'rotate(8deg)' }}
            />
            <div
              style={{
                position: 'absolute',
                right: 4,
                top: 26,
                fontFamily: script,
                fontSize: 26,
                color: accent,
                transform: 'rotate(4deg)',
              }}
            >
              that&apos;s me
            </div>

            <StarFilled
              accent={accent}
              size={16}
              style={{ position: 'absolute', top: -4, left: 12, transform: 'rotate(-10deg)' }}
            />
            <Star
              accent={accent}
              size={20}
              style={{ position: 'absolute', bottom: 120, right: -6, transform: 'rotate(18deg)' }}
            />

            {/* Status card */}
            <div
              style={{
                position: 'absolute',
                left: -20,
                bottom: -12,
                background: '#fff',
                padding: '16px 20px',
                borderRadius: 14,
                width: 280,
                border: `1px solid ${ink}15`,
                boxShadow: `0 6px 20px ${ink}18`,
                transform: 'rotate(-2deg)',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                  fontSize: 12,
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  color: muted,
                  marginBottom: 8,
                }}
              >
                <span
                  className="paper-pulse"
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: 999,
                    background: accent,
                    display: 'inline-block',
                  }}
                />
                <span>Now</span>
              </div>
              <div style={{ fontSize: 14, lineHeight: 1.45, color: ink }}>
                Building and learning stuffs with Claude.
              </div>
              <div style={{ fontFamily: script, fontSize: 18, color: muted, marginTop: 6 }}>
                Canada
              </div>
            </div>
          </div>
        </section>

        {/* ── DIVIDER ── */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            padding: '56px 12px 0',
          }}
        >
          <Asterisk accent={accent} size={26} style={{ marginRight: 4 }} />
          <span
            style={{
              fontFamily: script,
              fontSize: 26,
              padding: '2px 16px 4px',
              border: `2px solid ${accent}`,
              borderRadius: 999,
              color: accent,
              transform: 'rotate(-1deg)',
              display: 'inline-block',
            }}
          >
            § the work
          </span>
          <span
            style={{
              flex: 1,
              height: 0,
              borderTop: `1.5px dashed ${ink}22`,
            }}
          />
          <StarFilled accent={accent} size={12} style={{ marginLeft: 10 }} />
        </div>

        {/* ── FEATURED ── */}
        <section id="work" style={{ position: 'relative', padding: '56px 12px' }}>
          <div
            style={{
              position: 'absolute',
              width: 80,
              height: 22,
              background: '#ffd4a8cc',
              top: 46,
              left: 76,
              transform: 'rotate(-3deg)',
            }}
          />
          <Bracket
            accent={accent}
            h={220}
            style={{ position: 'absolute', left: -30, top: 116, opacity: 0.6 }}
          />

          <div
            style={{
              position: 'relative',
              display: 'grid',
              gridTemplateColumns: '1.2fr 1fr',
              gap: 40,
              background: '#fffef8',
              padding: 44,
              borderRadius: 4,
              border: `1px solid ${ink}12`,
              boxShadow: `0 2px 0 ${ink}10, 0 16px 40px ${ink}10`,
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
                <StarFilled accent={accent} size={18} />
                <span style={{ fontFamily: script, fontSize: 26, color: accent }}>
                  just my notes
                </span>
              </div>
              <h3
                style={{
                  fontFamily: serif,
                  fontSize: 52,
                  lineHeight: 1,
                  letterSpacing: '-0.02em',
                  margin: '0 0 18px',
                  fontWeight: 400,
                  color: ink,
                }}
              >
                My Blog
              </h3>
              <p style={{ fontSize: 16, lineHeight: 1.55, color: muted, maxWidth: 440, margin: 0 }}>
                Writing my learning notes and sharing insights about software development. A living
                notebook of what I&apos;m building, breaking, and learning along the way.
              </p>

              <div style={{ display: 'flex', gap: 10, margin: '24px 0 28px' }}>
                {['Featured', 'Writing', 'Next.js'].map((tag, i) => (
                  <span
                    key={tag}
                    style={{
                      padding: '4px 12px',
                      borderRadius: 999,
                      fontSize: 13,
                      fontWeight: 500,
                      border: '1px solid',
                      display: 'inline-block',
                      background: i === 0 ? accent : '#fff',
                      color: i === 0 ? '#fff' : '#4b3f5e',
                      borderColor: i === 0 ? accent : '#d8ccb8',
                      transform: `rotate(${[-2, 1, -1][i]}deg)`,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href="https://congdv.substack.com/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: script,
                  fontSize: 24,
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  color: accent,
                }}
              >
                Read my essays
                <Squiggle accent={accent} w={40} h={14} style={{ marginLeft: 8 }} />
              </a>
            </div>

            {/* Polaroid stack */}
            <div style={{ position: 'relative', height: 280 }}>
              <div
                style={{
                  position: 'absolute',
                  padding: 10,
                  width: 200,
                  background: '#fff',
                  boxShadow: `0 4px 0 ${ink}10, 0 10px 30px ${ink}20`,
                  transform: 'rotate(-4deg)',
                  top: 10,
                  left: 20,
                }}
              >
                <div
                  style={{
                    width: '100%',
                    height: 180,
                    display: 'grid',
                    placeItems: 'center',
                    borderRadius: 2,
                    background: `linear-gradient(135deg, ${accent}33, ${accent}0a)`,
                  }}
                >
                  <div style={{ fontFamily: script, fontSize: 22, color: accent }}>
                    cong.dv/blog
                  </div>
                </div>
                <div
                  style={{
                    fontFamily: script,
                    fontSize: 18,
                    color: muted,
                    textAlign: 'center',
                    padding: '8px 0 2px',
                  }}
                >
                  the blog
                </div>
              </div>
              <div
                style={{
                  position: 'absolute',
                  padding: 10,
                  width: 200,
                  background: '#fffef8',
                  boxShadow: `0 4px 0 ${ink}10, 0 10px 30px ${ink}20`,
                  transform: 'rotate(3deg)',
                  top: 40,
                  left: 60,
                }}
              >
                <div
                  style={{
                    width: '100%',
                    height: 180,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    borderRadius: 2,
                    background: '#fef3d1',
                  }}
                >
                  <div
                    style={{
                      fontFamily: serif,
                      fontSize: 18,
                      color: '#2b1f3d',
                      padding: 12,
                    }}
                  >
                    essays · 4 years
                  </div>
                  <div
                    style={{
                      padding: '0 12px',
                      color: muted,
                      fontFamily: script,
                      fontSize: 18,
                    }}
                  >
                    keep writing ∞
                  </div>
                </div>
                <div
                  style={{
                    fontFamily: script,
                    fontSize: 18,
                    color: muted,
                    textAlign: 'center',
                    padding: '8px 0 2px',
                  }}
                >
                  writing room
                </div>
              </div>
              <Arrow
                accent={accent}
                w={70}
                h={50}
                style={{
                  position: 'absolute',
                  right: -20,
                  top: -10,
                  transform: 'rotate(-20deg) scaleX(-1)',
                }}
              />
            </div>
          </div>
        </section>

        {/* ── PROJECT LIST ── */}
        <section id="writing" style={{ padding: '80px 12px 40px' }}>
          <div style={{ marginBottom: 36 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
              <Asterisk accent={accent} size={24} />
              <div style={{ fontFamily: script, fontSize: 26, color: accent }}>
                &amp; some other bits
              </div>
            </div>
            <h3
              style={{
                fontFamily: serif,
                fontSize: 48,
                lineHeight: 1.05,
                letterSpacing: '-0.02em',
                margin: 0,
                fontWeight: 400,
                color: ink,
              }}
            >
              Eight more things
              <br />I made on purpose.
            </h3>
          </div>

          <ul
            style={{
              listStyle: 'none',
              margin: 0,
              padding: 0,
              backgroundImage: `repeating-linear-gradient(to bottom, transparent 0, transparent 67px, ${ink}12 67px, ${ink}12 68px)`,
              borderLeft: `2px solid ${accent}44`,
            }}
          >
            {PROJECTS.map((p, i) => (
              <li
                key={p.title}
                className="paper-row"
                style={{
                  display: 'grid',
                  gridTemplateColumns: '32px 1fr 150px',
                  gap: 20,
                  padding: '18px 20px',
                  minHeight: 68,
                  alignItems: 'center',
                }}
              >
                <div style={{ fontFamily: serif, fontSize: 24, fontWeight: 600, color: accent }}>
                  —
                </div>
                <div>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, marginBottom: 2 }}>
                    <a
                      href={p.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        fontFamily: serif,
                        fontSize: 22,
                        fontWeight: 500,
                        color: ink,
                        textDecoration: 'none',
                      }}
                    >
                      {p.title}
                    </a>
                    <span className="paper-arr" style={{ fontSize: 18, color: accent }}>
                      ↗
                    </span>
                    {i === 0 && (
                      <StarFilled accent={accent} size={12} style={{ marginLeft: 8, opacity: 0.9 }} />
                    )}
                  </div>
                  <div style={{ fontSize: 14, color: muted, lineHeight: 1.4 }}>{p.blurb}</div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, justifyContent: 'flex-end' }}>
                  <span
                    style={{
                      padding: '2px 10px',
                      border: `1px solid ${accent}55`,
                      borderRadius: 999,
                      fontFamily: script,
                      fontSize: 16,
                      color: accent,
                      transform: `rotate(${rotations[i] || 0}deg)`,
                      display: 'inline-block',
                    }}
                  >
                    {p.tag}
                  </span>
                  <span style={{ fontFamily: script, fontSize: 20, color: muted }}>
                    &apos;{p.year.slice(2)}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* ── LETTER / ABOUT ── */}
        <section
          id="about"
          style={{
            position: 'relative',
            textAlign: 'center',
            padding: '64px 56px 96px',
            background: '#fffef8',
            margin: '40px auto',
            borderRadius: 4,
            border: `1px solid ${ink}12`,
            maxWidth: 720,
            boxShadow: `0 2px 0 ${ink}10, 0 16px 40px ${ink}10`,
          }}
        >
          <div
            style={{
              position: 'absolute',
              width: 80,
              height: 22,
              background: '#fff1b8cc',
              top: -10,
              left: '50%',
              marginLeft: -40,
            }}
          />

          <Asterisk
            accent={accent}
            size={18}
            style={{ position: 'absolute', top: 30, left: 40, opacity: 0.6 }}
          />
          <StarFilled
            accent={accent}
            size={14}
            style={{ position: 'absolute', top: 40, right: 48, transform: 'rotate(22deg)' }}
          />

          <div style={{ fontFamily: script, fontSize: 26, color: accent }}>p.s.</div>
          <p
            style={{
              fontFamily: serif,
              fontSize: 24,
              lineHeight: 1.5,
              color: ink,
              fontWeight: 300,
              margin: '24px auto 32px',
              maxWidth: 520,
            }}
          >
            If you got this far, thanks for reading —<br />
            I&apos;m always up for a coffee, a code review, or a chat about the strange corners of
            our craft.
          </p>
          <div style={{ marginTop: 24 }}>
            <div style={{ fontFamily: script, fontSize: 48, color: accent }}>— Cong</div>
            <div style={{ fontFamily: script, fontSize: 18, color: muted, marginTop: 4 }}>
              written from Canada, April 2026
            </div>
          </div>
          <div style={{ marginTop: 32, fontSize: 14, color: muted }}>
            <a
              href="https://github.com/congdv"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: accent, textDecoration: 'none', borderBottom: `1px dashed ${accent}66`, padding: '0 2px' }}
            >
              github / congdv
            </a>
            <span style={{ margin: '0 10px', color: muted }}>·</span>
            <a
              href="https://www.linkedin.com/in/congdv/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: accent, textDecoration: 'none', borderBottom: `1px dashed ${accent}66`, padding: '0 2px' }}
            >
              linkedin / congdv
            </a>
            <span style={{ margin: '0 10px', color: muted }}>·</span>
            <a
              href="mailto:congdaovan94@gmail.com"
              style={{ color: accent, textDecoration: 'none', borderBottom: `1px dashed ${accent}66`, padding: '0 2px' }}
            >
              congdaovan94@gmail.com
            </a>
          </div>
        </section>
      </div>
    </div>
  )
}
