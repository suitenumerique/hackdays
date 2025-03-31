import Head from 'next/head'
import '@/styles/globals.css'
import { useEffect } from 'react'
import { TranslationsProvider } from '@/locales/useTranslations'
import { useRouter } from 'next/router'
import React from 'react'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
  }, [])

  const { locale, defaultLocale } = useRouter()

  return (
    <>
      <div>
        <TranslationsProvider locale={locale || defaultLocale}>
            <Head>
            <title>HackDays - Hackathon Digital Workspace</title>
            <meta
              key="ogtitle"
              property="og:title"
              content="HackDays"
            />
            <link
              href="favicon.ico"
              rel="icon"
              media="(prefers-color-scheme: light)"
            />
          </Head>
          <Component {...pageProps} />
        </TranslationsProvider>
      </div>
    </>
  )
}
