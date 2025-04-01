// import Stars from '@/assets/stars.svg'
import AnimatedSection from '@/components/AnimatedSection'
// import { useTranslations } from '@/locales/useTranslations'
import logoDINUM from '@/assets/logo/logo-dinum.svg'
import logoDGNUM from '@/assets/logo/logo-dgnum.svg'
import logoENS from '@/assets/logo/logo-ens.svg'

export function Europe() {
  // const t = useTranslations()
  
  return (
    <>
      <div className="relative w-full bg-beige-100 py-[30px] md:py-0">
      <div className="flex column h-[327px] md:h-[380px] w-full bg-center bg-cover md:bg-auto py-12 bg-no-repeat
          container mx-auto">
       <div className="m-auto">
       <div className="relative grid grid-cols-3 flex text-center m-auto max-w-[436px] my-6 mx-auto gap-[47px]">
          <AnimatedSection delay={0.2}>
            <img src={logoDINUM.src} />
          </AnimatedSection>
          <AnimatedSection delay={0.4}>
            <img src={logoENS.src} className="mx-auto self-end" />
          </AnimatedSection>
          <AnimatedSection delay={0.6}>
            <img src={logoDGNUM.src} className="self-end" />
          </AnimatedSection>
        </div>
{/*        <AnimatedSection>
        <p className="font-normal text-2xl">
          {t('europe.europeans')}
        </p>
        <p className="font-bold text-3xl"> {t('europe.subtitle')} </p>
        </AnimatedSection>*/}
        </div>
        </div>
      </div>
      </>
  )
}
