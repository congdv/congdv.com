import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Link from 'next/link'

const accent = '#4f46e5'
const ink = '#2b1f3d'
const muted = '#6b5d7a'
const serif = '"Fraunces", Georgia, serif'
const script = '"Caveat", "Kalam", cursive'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Cong Dao — software &amp; notes</title>
        <meta
          name="description"
          content="Software developer building meaningful tools and writing notes along the way."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '22px 40px',
          borderBottom: `1.5px dashed ${ink}22`,
          position: 'sticky',
          top: 0,
          background: '#f7f1e3ee',
          backdropFilter: 'blur(8px)',
          zIndex: 50,
        }}
      >
        <Link
          href="/"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            fontFamily: serif,
            fontSize: 22,
            letterSpacing: '-0.01em',
            color: ink,
            textDecoration: 'none',
          }}
        >
          <span
            style={{
              width: 34,
              height: 34,
              display: 'grid',
              placeItems: 'center',
              border: `2px solid ${accent}`,
              borderRadius: '50%',
              fontFamily: serif,
              fontWeight: 500,
              transform: 'rotate(-8deg)',
              color: accent,
              fontSize: 18,
              flexShrink: 0,
            }}
          >
            C
          </span>
          <span>Cong Dao</span>
          <span
            style={{
              fontFamily: script,
              fontSize: 20,
              color: muted,
              marginLeft: 4,
            }}
          >
            / software, writing, bits
          </span>
        </Link>

        <nav
          style={{
            display: 'flex',
            gap: 22,
            alignItems: 'center',
            fontFamily: script,
            fontSize: 22,
          }}
        >
          <Link href="/#work" style={{ color: ink, textDecoration: 'none' }}>
            work
          </Link>
          <a
            href="https://congdv.substack.com/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: ink, textDecoration: 'none' }}
          >
            writing
          </a>
          <Link href="/#about" style={{ color: ink, textDecoration: 'none' }}>
            about
          </Link>
          <a
            href="mailto:congdaovan94@gmail.com"
            style={{
              fontFamily: script,
              fontSize: 22,
              padding: '2px 16px 4px',
              border: `2px solid ${accent}`,
              borderRadius: 999,
              textDecoration: 'none',
              color: accent,
              transform: 'rotate(-2deg)',
              display: 'inline-block',
            }}
          >
            say hi
          </a>
        </nav>
      </header>

      <Component {...pageProps} />

      <footer
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '24px 40px 48px',
          fontSize: 12,
          color: muted,
          borderTop: `1.5px dashed ${ink}22`,
          marginTop: 40,
        }}
      >
        <span>© {new Date().getFullYear()} · Cong Dao</span>

      </footer>
    </>
  )
}
