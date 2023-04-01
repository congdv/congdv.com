import useGtag from '@/scripts/useGtag'
import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Link from 'next/link'

export default function App({ Component, pageProps }: AppProps) {
  useGtag()
  return (
    <>
      <Head>
        <title>Cong Dao</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex justify-center items-center bg-stone-100 h-16">
        <div className="container-center center-horizontal text-stone-500 font-bold text-sm">
          <Link className="font-bold text-stone-700" href="/">
            @Công
          </Link>
        </div>
      </div>
      <Component {...pageProps} />
      <footer className="flex justify-center items-center h-16 bg-stone-100 text-stone-500 text-sm">
        @Công
      </footer>
    </>
  )
}
