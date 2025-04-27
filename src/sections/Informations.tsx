import { useTranslations } from '@/hooks/useTranslations';
import { Chip } from '@/components/Chip'

import logoDINUM from '@/assets/logo/logo-dinum.svg'
import logoDGNUM from '@/assets/logo/logo-dgnum.svg'

import logoENS from '@/assets/logo/logo-ens.svg'
import logoENSPSL from '@/assets/logo/logo-ens-psl-green.svg'
import ENS from '@/assets/building.png'

import logoCFF from '@/assets/logo/logo-cff.svg'
import logoCnrs from '@/assets/logo/logo-cnrs.svg'
import logoUps from '@/assets/logo/logo-ups.svg'
import logoUga from '@/assets/logo/logo-uga.svg'
import logoInria from '@/assets/logo/logo-inria.svg'
import logoAnssi from '@/assets/logo/logo-anssi.svg'
import logoEUOS from '@/assets/logo/logo-euos.svg'

import AnimatedSection from '@/components/AnimatedSection'

export function Informations() {
  const { t } = useTranslations()
  
  return (
    <div id="Informations" className="relative w-full bg-beige-100 py-14 md:py-[106px] py-8">
      <div className="container mx-auto text-center">
        <AnimatedSection>
        <Chip text={t('informations.tag')} type="light" />
        <h3 className="font-title leading-14 py-8 uppercase text-green-700 text-[59px] md:text-[86px]">
          {t('informations.title')}
        </h3>

        <p className="text-base md:text-xl text-green-500 text-center max-w-[660px] mx-auto mb-[36px] md:mb-0"
            dangerouslySetInnerHTML={{
             __html: t('informations.description'),
          }}>
        </p>

        <div className="grid md:grid-cols-3 gap-10 mb-6 md:my-[40px]">
        <div className="col-span-1">
          <div className="rounded-2xl border border-beige-200 bg-white/[0.75] p-6 text-center"
            style={{ boxShadow: '0px 4px 16.6px 0px rgba(0, 0, 0, 0.10)'}}>
            <img src={logoENS.src} className="h-[112px] mb-6 mx-auto" />
            <p className="font-bold text-[22px]">CAMPUS JOURDAN</p>
            <p className="font-bold text-base my-3"> 48 Boulevard Jourdan, <br /> 75014, Paris </p>

            <div className="flex justify-between w-full mb-6">
              <p className="font-normal leading-snug text-base text-left"
                dangerouslySetInnerHTML={{
                  __html: t('informations.days'),
                }}></p>
              <p className="font-normal leading-snug text-base text-right"
                dangerouslySetInnerHTML={{
                  __html: t('informations.hours'),
                }}></p>
            </div>

            <a className="block text-lg text-beige-100 rounded-full bg-green-700 mb-2 text-center transition-all hover:bg-orange-500 py-1.5 font-medium decoration-0"
                href="https://pretix.dgnum.eu/dgnum/hack-lsn-2025/"
                target="_blank"> {t(`informations.buttonSignup`)} </a>
            <a className="block text-lg rounded-full bg-beige-300/[0.5] text-center transition-all hover:bg-beige-300 py-1.5 font-medium decoration-0"
                href="mailto:contact-hackdays@numerique.gouv.fr"
                target="_blank"> {t(`informations.buttonContact`)} </a>
          </div>
        </div>
        <div className="hidden md:block md:col-span-2">
          <img src={ENS.src} className="rounded-2xl"
            style={{ boxShadow: '0px 4px 16.6px 0px rgba(0, 0, 0, 0.10)'}} />
        </div>
        </div>

        <AnimatedSection delay={0.2}>
        <div className="text-green-500 pt-6">
        { t('informations.organizers') }
        </div>
        <div className="relative md:flex align-space-between items-end text-center m-auto md:max-w-[542px] max-w-[139px] py-6 mx-auto gap-[47px]">
          <img src={logoDINUM.src} className="w-[139px]"/>
          <img src={logoENSPSL.src} className="mx-auto w-[191px] my-[30px] md:my-0" />
          <img src={logoDGNUM.src} className="mx-auto w-[120px]"/>
        </div>
        </AnimatedSection>
        <AnimatedSection delay={0.2}>
        <div className="text-green-500 mt-[56px] md:pt-6">
        { t('informations.partners') }
        </div>

        <div className="flex align-space-between flex-wrap md:flex-nowrap items-end text-center m-auto md:max-w-[533px] max-w-[162px] py-6 mx-auto gap-[32px] md:gap-[47px]">
          <img src={logoCFF.src} className="w-[80px] md:w-[128px] md:self-center"/>
          <img src={logoCnrs.src} className="w-[33px] md:w-[191px]" />
          <img src={logoInria.src} className="w-[72px] md:w-[120px] self-center"/>
          <img src={logoUga.src} className="w-[55px] md:w-[120px] mx-auto"/>
        </div>
        <div className="flex align-space-between flex-wrap md:flex-nowrap items-center text-center m-auto md:max-w-[494px] max-w-[236px] md:py-6 mx-auto gap-[32px] md:gap-[47px]">
          <img src={logoUps.src} className="w-[96px] md:w-[152px] mx-auto"/>
          <img src={logoAnssi.src} className="w-[54px] md:w-[96px] mx-auto"/>
          <img src={logoEUOS.src} className="w-[96px] md:w-[152px] mx-auto"/>
        </div>
        </AnimatedSection>
        </AnimatedSection>

      </div>
    </div>
  )
}
