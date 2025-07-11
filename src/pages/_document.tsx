import { GA_TRACKING_ID } from '@/scripts/gtag'
import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
         <Script
          id="counterscale-script"
          data-site-id={`${process.env.NEXT_PUBLIC_COUNTERSCALE_SITE_ID}`}
          src={`${process.env.NEXT_PUBLIC_COUNTERSCALE_REPORTER_HOST}/tracker.js`}
          defer
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
