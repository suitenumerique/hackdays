import { createContext, useContext, type ReactNode } from 'react'
import { get } from '../utils/get'
// @ts-expect-error:  Importing YAML files requires custom types.
import fr from './fr.yml'
// @ts-expect-error:  Importing YAML files requires custom types.
import en from './en.yml'

type Translations = Record<string, string>
const TranslationsContext = createContext<Translations>(fr)

const locales: Record<string, Translations> = {
  fr,
  en
}

function TranslationsProvider({
  locale = 'fr',
  children,
}: {
  locale: string | undefined
  children: ReactNode
}) {
  const translations = locales[locale]
  return (
    <TranslationsContext.Provider value={translations}>
      {children}
    </TranslationsContext.Provider>
  )
}

function useTranslations() {
  const context = useContext(TranslationsContext)
  const translations = context || fr
  return function t<T = string>(
    id: string,
    params: Record<string, string | ReactNode> = {}
  ): T {
    const translation = get(translations, id) as string
    if (!translation) {
      console.warn(`Translation for key "${id}" not found`)
      return id as T
    }
    if (Object.keys(params).length) {
      const componentKeys: string[] = []
      Object.keys(params).forEach((key) => {
        if (typeof params[key] !== 'string') {
          componentKeys.push(key)
        }
      })
      if (!componentKeys.length) {
        return translation.replace(
          /{(\w+)}/g,
          (_, key) => params[key] as string
        ) as T
      }

      const parts = translation.split(/{(.*?)}/)
      return (
        <>
          {parts.map((part) => {
            if (part in params) {
              return params[part]
            }
            return part
          })}
        </>
      ) as T
    }
    return translation as T
  }
}

export { TranslationsProvider, useTranslations }
