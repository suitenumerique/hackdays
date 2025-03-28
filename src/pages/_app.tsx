import Head from 'next/head'
import '@/styles/globals.css'
import { useEffect } from 'react'
import { TranslationsProvider } from '@/locales/useTranslations'
import { useRouter } from 'next/router'
//import { NavBar } from '@/components/NavBar'
//import { Footer } from '@/components/Footer'
import React from 'react'
import { useTranslations } from '@/locales/useTranslations'


export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
  }, [])

  const { locale, defaultLocale } = useRouter()

  return (
    <>
      <div>
        <TranslationsProvider locale={locale || defaultLocale}>
            <Head>
            <title>HackDays</title>
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
            <link
              href="favicon-dark.ico"
              rel="icon"
              media="(prefers-color-scheme: dark)"
            />
          </Head>
          <Component {...pageProps} />
        </TranslationsProvider>
      </div>
    </>
  )
}
