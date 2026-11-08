import Head from 'next/head'

const ACCENT = '#4f46e5'
const INK = '#2b1f3d'
const MUTED = '#6b5d7a'
const SERIF = '"Fraunces", Georgia, serif'
const SCRIPT = '"Caveat", "Kalam", cursive'

const AVATAR_SIZE_PX = 112
const QR_SIZE_PX = 180

type ContactLink = {
  label: string
  detail: string
  href: string
  external?: boolean
  download?: string
}

const LINKS: ContactLink[] = [
  {
    label: 'LinkedIn',
    detail: 'in/congdv',
    href: 'https://www.linkedin.com/in/congdv/',
    external: true,
  },
  {
    label: 'Website',
    detail: 'congdv.com',
    href: 'https://congdv.com',
  },
  {
    label: 'Instagram',
    detail: '@cong.dao21',
    href: 'https://www.instagram.com/cong.dao21/',
    external: true,
  },
  {
    label: 'Email',
    detail: 'congdaovan94@gmail.com',
    href: 'mailto:congdaovan94@gmail.com',
  },
  {
    label: 'Save Contact',
    detail: 'Add me to your phone',
    href: '/congdv.vcf',
    download: 'congdv.vcf',
  },
]

export default function Connect() {
  return (
    <>
      <Head>
        <title>Connect - Cong Dao</title>
        <meta
          name="description"
          content="Connect with Cong Dao: LinkedIn, website, Instagram, email, and contact card."
        />
      </Head>

      <main
        style={{
          flex: 1,
          display: 'flex',
          justifyContent: 'center',
          padding: '48px 20px',
        }}
      >
        <div style={{ width: '100%', maxWidth: 420, textAlign: 'center' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/avatar.jpg"
            alt="Cong Dao"
            width={AVATAR_SIZE_PX}
            height={AVATAR_SIZE_PX}
            style={{
              borderRadius: '50%',
              objectFit: 'cover',
              border: `2px solid ${ACCENT}`,
              margin: '0 auto',
            }}
          />

          <h1
            style={{
              fontFamily: SERIF,
              fontSize: 36,
              color: INK,
              margin: '16px 0 0',
              letterSpacing: '-0.01em',
            }}
          >
            Cong Dao
          </h1>
          <p style={{ fontFamily: SCRIPT, fontSize: 24, color: MUTED }}>
            software developer
          </p>

          <ul
            style={{
              listStyle: 'none',
              padding: 0,
              margin: '28px 0 0',
              display: 'flex',
              flexDirection: 'column',
              gap: 12,
            }}
          >
            {LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  download={link.download}
                  target={link.external ? '_blank' : undefined}
                  rel={link.external ? 'noopener noreferrer' : undefined}
                  style={{
                    display: 'block',
                    padding: '14px 20px',
                    border: `2px solid ${ACCENT}`,
                    borderRadius: 16,
                    textDecoration: 'none',
                    color: INK,
                    background: '#fffdf6',
                  }}
                >
                  <span
                    style={{ fontFamily: SERIF, fontSize: 20, color: ACCENT }}
                  >
                    {link.label}
                  </span>
                  <span style={{ display: 'block', fontSize: 13, color: MUTED }}>
                    {link.detail}
                  </span>
                </a>
              </li>
            ))}
          </ul>

          {/* QR: lets someone on a laptop scan straight off the screen. */}
          <div style={{ marginTop: 36 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/connect-qr.png"
              alt="QR code linking to congdv.com/connect"
              width={QR_SIZE_PX}
              height={QR_SIZE_PX}
              style={{ margin: '0 auto', borderRadius: 12 }}
            />
            <p style={{ fontFamily: SCRIPT, fontSize: 20, color: MUTED }}>
              scan to share
            </p>
          </div>
        </div>
      </main>
    </>
  )
}
