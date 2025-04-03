import Head from 'next/head'
import '@/styles/globals.css'
import React from 'react'
import type { AppProps } from 'next/app'

function App({ Component, pageProps }: AppProps) {

  return (
      <>
        <Head>
          <title>HackDays - Hackathon Digital Workspace</title>
            <meta
              key="ogtitle"
              property="og:title"
              content="HackDays - Hackathon Digital Workspace"
            />
            <meta
              key="ogdescription"
              property="og:description"
              content="Les 2, 3 et 4 Juin 2025 - Travaillons ensemble à développer des outils souverains & open source"
            />
            <link
              href="favicon.png"
              rel="icon"
              media="(prefers-color-scheme: dark)"
            />
            <link
              href="favicon-light.png"
              rel="icon"
              media="(prefers-color-scheme: light)"
            />
            <meta
              key="ogimage"
              property="og:image"
              content="/images/rs.png"
            />
            <link rel="preload" href="/images/hero.webp" as="image" />
            <link rel="preload" href="/locales/fr.json" as="fetch" type="application/json" />
            <link rel="preload" href="/locales/en.json" as="fetch" type="application/json" />
            <link rel="preload" href="/images/hero-mobile.png" as="image" />
            <link rel="preload" href="/images/hero-matrix.webp" as="image" />
            <link rel="preload" href="/fonts/DMMono-Medium.ttf" as="font" type="font/woff2" crossOrigin="anonymous" />
            <link rel="preload" href="/fonts/Mullingar.ttf" as="font" type="font/woff2" crossOrigin="anonymous" />
            <link rel="preload" href="/fonts/DMMono-Regular.ttf" as="font" type="font/woff2" crossOrigin="anonymous" />
            <link rel="preload" href="/fonts/DMSans.ttf" as="font" type="font/woff2" crossOrigin="anonymous" />
            <link rel="preload" href="/fonts/Domine.ttf" as="font" type="font/woff2" crossOrigin="anonymous" />

          </Head>
          <Component {...pageProps} />
      </>
  )
}

export default App;
