import Head from 'next/head'
import '@/styles/globals.css'
import { useEffect } from 'react'
import React from 'react'
import type { AppProps } from 'next/app'

function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
  }, [])

  return (
      <>
        <Head>
          <title>HackDays - Hackathon Digital Workspace</title>
            <meta
              key="ogtitle"
              property="og:title"
              content="HackDays - Hackathon Digital Workspace - 2, 3 et 4 Juin 2025"
            />
            <link
              href="favicon.png"
              rel="icon"
            />
            <meta
              key="ogimage"
              property="og:image"
              content="/images/rs.png"
            />
          </Head>
          <Component {...pageProps} />
      </>
  )
}

export default App;
