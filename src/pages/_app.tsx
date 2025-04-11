import Head from 'next/head'
import '@/styles/globals.css'
import React from 'react'
import type { AppProps } from 'next/app'
import { useEffect } from 'react'

declare global {
  interface Window {
    _mtm?: any[],
    _paq?: any[]
  }
}

function setUpMatomoAnalytics() {
    const _paq = (window._paq = window._paq || [])
    /* tracker methods like "setCustomDimension" should be called before "trackPageView" */
    _paq.push(['setExcludedQueryParams', ['simulationId', '_csrf']])
    _paq.push(['trackPageView'])
    _paq.push(['enableLinkTracking'])
    ;(function () {
      const u = 'https://stats.beta.gouv.fr/'
      _paq.push(['setTrackerUrl', u + 'matomo.php'])
      _paq.push(['setSiteId', '204'])
      const d = document,
        g = d.createElement('script'),
        s = d.getElementsByTagName('script')[0]
      g.async = true
      g.src = u + 'matomo.js'
      if (s?.parentNode) {
        s.parentNode.insertBefore(g, s)
      } else {
        d.head.appendChild(g)
      }
    })()
  }

function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    setUpMatomoAnalytics()
  }, [])

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
            <link rel="preload" href="/images/hero/hero.webp" as="image" type="image/webp" media="(min-width: 767px)" />
            <link rel="preload" href="/locales/fr.json" as="fetch" type="application/json" crossOrigin="anonymous" />
            <link rel="preload" href="/locales/en.json" as="fetch" type="application/json" crossOrigin="anonymous" />
            <link rel="preload" href="/images/hero/hero-mobile.png" as="image" type="image/png" media="(max-width: 768px)"/>
            <link rel="preload" href="/images/hero/hero-matrix.webp" as="image" type="image/webp" media="(min-width: 767px)" />
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
