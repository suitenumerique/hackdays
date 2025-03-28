import Stars from '@/assets/stars.svg'

import { useTranslations } from '@/locales/useTranslations'

export function Europe() {
  const t = useTranslations()
  
  return (
    <>
      <div className="relative w-full bg-beige-100">
      <div className="flex column h-[690px] w-full bg-center bg-no-repeat
          container mx-auto"
       style={{ backgroundImage: `url(${Stars.src})` }}>
       <div className="relative font-subtitle container m-auto text-center">
        <p className="font-normal text-2xl">
          {t('europe.europeans')}
        </p>
        <p className="font-bold text-3xl"> {t('europe.subtitle')} </p>
        </div>
        </div>
      </div>
      </>
  )
}
