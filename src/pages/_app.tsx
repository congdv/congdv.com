import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Link from 'next/link'

export default function App({ Component, pageProps }: AppProps) {


  return (
    <>
      <Head>
        <title>Cong Dao - Software Developer</title>
        <meta
          name="description"
          content="Personal website of Cong Dao, a software developer passionate about creating meaningful applications and sharing knowledge."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

      </Head>

      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-white/20 shadow-sm sticky top-0 z-50">
        <div className="container-center px-6 py-4">
          <Link
            className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
            href="/"
          >
            @Công
          </Link>
        </div>
      </header>

      <Component {...pageProps} />
      {/* <Analytics /> */}

      {/* Footer */}
      <footer className="bg-white/80 backdrop-blur-md border-t border-white/20 mt-16">
        <div className="container-center px-6 py-8">
          <div className="text-center">
            <div className="flex justify-center space-x-6 mb-4">
              <Link
                href="https://github.com/congdv"
                className="text-gray-600 hover:text-blue-600 transition-colors duration-300 font-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </Link>
              <Link
                href="https://twitter.com/CongDao9"
                className="text-gray-600 hover:text-blue-600 transition-colors duration-300 font-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </Link>
              <Link
                href="https://www.linkedin.com/in/congdv/"
                className="text-gray-600 hover:text-blue-600 transition-colors duration-300 font-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </Link>
              <Link
                href="https://analytics.congdv.com/dashboard?site=congdv.com"
                className="text-gray-600 hover:text-blue-600 transition-colors duration-300 font-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                Analytics
              </Link>
            </div>
            <div className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Cong Dao.
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
