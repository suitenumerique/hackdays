import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useTranslations } from '@/hooks/useTranslations'
import Home from './index'

const LangIndex = () => {
  const router = useRouter()
  const { locale, changeLocale } = useTranslations()

  useEffect(() => {
    if (locale !== 'fr') {
      changeLocale('fr');
    }
  });

  return <Home />
}

export default LangIndex
