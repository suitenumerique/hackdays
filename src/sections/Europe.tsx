import Stars from '@/assets/stars.svg'
// import AnimatedSection from '@/components/AnimatedSection'
// import { useTranslations } from '@/locales/useTranslations'
import logoDINUM from '@/assets/logo/logo-dinum.svg'
import logoDGNUM from '@/assets/logo/logo-dgnum.svg'
import logoENS from '@/assets/logo/logo-ens.svg'

export function Europe() {
  // const t = useTranslations()
  
  return (
    <>
      <div className="relative w-full bg-beige-100 py-[30px] md:py-0">
      <div className="flex column h-[67px] md:h-[140px] w-full bg-center bg-cover md:bg-auto py-12 bg-no-repeat
          container mx-auto"
       style={{ backgroundImage: `url(${Stars.src})` }}>
       <div className="relative font-subtitle container m-auto text-center">
{/*        <AnimatedSection>
        <p className="font-normal text-2xl">
          {t('europe.europeans')}
        </p>
        <p className="font-bold text-3xl"> {t('europe.subtitle')} </p>
        </AnimatedSection>*/}
        </div>
        </div>
        <div className="grid grid-cols-3 flex text-center max-w-[413px] pt-6 my-6 mx-auto gap-x-11">
          <img src={logoDINUM.src} />
          <img src={logoENS.src} className="mx-auto self-end" />
          <img src={logoDGNUM.src} className="self-end" />
        </div>
      </div>
      </>
  )
}
