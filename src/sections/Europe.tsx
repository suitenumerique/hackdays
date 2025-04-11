// import Stars from '@/assets/stars.svg'
import AnimatedSection from '@/components/AnimatedSection'
// import { useTranslations } from '@/locales/useTranslations'
import logoDINUM from '@/assets/logo/logo-dinum.svg'
import logoDGNUM from '@/assets/logo/logo-dgnum.svg'
import logoENSPSL from '@/assets/logo/logo-ens-psl-green.svg'

export function Europe() {
  // const t = useTranslations()
  
  return (
    <>
      <div className="relative w-full bg-beige-100 py-[30px] md:py-0">
      <div className="flex column md:h-[380px] w-full bg-center bg-cover md:bg-auto py-12 bg-no-repeat
          container mx-auto">
       <div className="m-auto">
        <AnimatedSection delay={0.2}>
        <div className="relative md:flex align-space-between items-end text-center m-auto max-w-[561px] my-6 mx-auto gap-[47px]">
          <img src={logoDINUM.src} className="w-[147px]"/>
          <img src={logoENSPSL.src} className="mx-auto w-[191px] my-[30px] md:my-0" />
          <img src={logoDGNUM.src} className="mx-auto w-[127px]"/>
        </div>
        </AnimatedSection>
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
