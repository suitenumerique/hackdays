import { useEffect, useState } from 'react';

const availableLocales = ['fr', 'en'];
const defaultLocale = 'fr';

function useTranslations() {
  const [locale, setLocale] = useState(defaultLocale);
  // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  const [translations, setTranslations] = useState<Record<string, any>>({});
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const savedLocale = localStorage.getItem('locale');
    if (savedLocale && availableLocales.includes(savedLocale)) {
      setLocale(savedLocale);
    }
  }, []);

  useEffect(() => {
    fetch(`/locales/${locale}.json`)
      .then((res) => res.json())
      .then((data) => {
        setTranslations(data);
        setIsLoaded(true);
      })
      .catch(() => console.error(`Erreur lors du chargement de ${locale}.json`));
  }, [locale]);

  function changeLocale(newLocale: string) {
    const lastLocale = localStorage.getItem('locale');
    if (lastLocale !== newLocale) {
      localStorage.setItem('locale', newLocale);
      setLocale(newLocale);
      window.location.reload();
    }
  }

  function t(key: string): string {
    if (!isLoaded) return key;  

    const parts = key.split('.');
    let result = translations;

    for (const part of parts) {
      result = result?.[part];
      if (result === undefined) {
        return key;
      }
    }

    return typeof result === 'string' ? result : key;
  }

  return { t, locale, changeLocale, availableLocales };
}

export { useTranslations };
