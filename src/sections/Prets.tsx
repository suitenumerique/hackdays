import { useTranslations } from '@/hooks/useTranslations';
import { Chip } from '@/components/Chip'
import AnimatedSection from '@/components/AnimatedSection'

import ScreenShotDocs from '@/assets/screenshot/screenshot-docs.png'
import ScreenShotVisio from '@/assets/screenshot/screenshot-visio.png'

import ScreenShotDocsMobile from '@/assets/screenshot/screenshot-docs-mobile.png'
import ScreenShotVisioMobile from '@/assets/screenshot/screenshot-visio-mobile.png'

import ScreenShotDocsEn from '@/assets/screenshot/screenshot-docs-en.png'
import ScreenShotDocsMobileEn from '@/assets/screenshot/screenshot-docs-mobile-en.png'

import ScreenShotGrist from '@/assets/screenshot/screenshot-grist.png'
import ScreenShotGristMobile from '@/assets/screenshot/screenshot-grist-mobile.png'

import ScreenShotAppMystere from '@/assets/screenshot/screenshot-mystere.png'
import ScreenShotAppMystereMobile from '@/assets/screenshot/screenshot-mystere-mobile.png'

import LogoVisio from '@/assets/logo/logo-visio.svg'
import LogoDocs from '@/assets/logo/logo-docs.svg'
import LogoGrist from '@/assets/logo/logo-grist.svg'
import LogoMystere from '@/assets/logo/logo-appmystere.svg'
import LogoMystereEn from '@/assets/logo/logo-mystere-en.svg'

export function Prets() {
  const { t, locale } = useTranslations()

  return (
    <div className="relative w-full py-14 md:py-[106px] py-8">
      <div className="container mx-auto">
        <AnimatedSection>
          <Chip text={t('prets.tag')} type="light" />
          <h3 className="font-title leading-14 py-3 md:py-8 uppercase text-green-700 text-[59px] md:text-[86px]">
            {t('prets.title')}
          </h3>
          <p className="text-green-500 max-w-[800px] text-normal"
              dangerouslySetInnerHTML={{
                __html: t('prets.description'),
              }}></p>
        </AnimatedSection>
        <div className="grid md:grid-cols-2 md:gap-10 mt-8 md:mt-[40px]">
          <AnimatedSection delay={0.2}>
          <div className="">
            <img src={`${locale === 'en' ? ScreenShotDocsEn.src : ScreenShotDocs.src}`} className="hidden rounded-[16px] md:block w-full card-box-shadow" />
            <img src={`${locale === 'en' ? ScreenShotDocsMobileEn.src : ScreenShotDocsMobile.src}`}
            className="md:hidden rounded-[6.9%] w-full card-box-shadow" />
          </div>
            <div className="flex items-center justify-between mt-6 ml-1">
              <img src={LogoDocs.src} className="w-[100px] md:w-[148px]" />
              <a className="rounded-full bg-beige-300/[0.5] transition-all hover:bg-beige-300 py-1.5 px-4 font-medium decoration-0"
                href="https://github.com/suitenumerique/docs" target="_blank">Github</a>
            </div>
            <p className="ml-2 mt-3 text-green-500" dangerouslySetInnerHTML={{
              __html: t('prets.docs.description'),
            }}></p>
          </AnimatedSection>

          <div className="mt-8 md:mt-0">
           <AnimatedSection delay={0.2}>
           <div className="">
            <img src={ScreenShotVisio.src} className="hidden md:block w-full rounded-[16px] card-box-shadow" />
            <img src={ScreenShotVisioMobile.src} className="md:hidden w-full rounded-[6.9%] card-box-shadow" />
          </div>
            <div className="flex items-center justify-between mt-6 ml-1">
              <img src={LogoVisio.src} className="w-[100px] md:w-[148px]" />
              <a className="rounded-full bg-beige-300/[0.5] transition-all hover:bg-beige-300 py-1.5 px-4 font-medium decoration-0"
                href="https://github.com/suitenumerique/meet" target="_blank">Github</a>
            </div>
            <p className="ml-2 mt-3 text-green-500" dangerouslySetInnerHTML={{
              __html: t('prets.visio.description'),
            }}></p>
            </AnimatedSection>
          </div>

          <div className="mt-8 md:mt-0">
           <AnimatedSection delay={0.2}>
           <div className="">
            <img src={ScreenShotGrist.src} className="hidden md:block w-full rounded-[16px] card-box-shadow" />
            <img src={ScreenShotGristMobile.src} className="md:hidden w-full rounded-[6.9%] card-box-shadow" />
          </div>
            <div className="flex items-center justify-between mt-6 ml-1">
              <img src={LogoGrist.src} className="w-[100px] md:w-[148px]" />
              <a className="rounded-full bg-beige-300/[0.5] transition-all hover:bg-beige-300 py-1.5 px-4 font-medium decoration-0"
                href="https://github.com/gristlabs/grist-core" target="_blank">Github</a>
            </div>
            <p className="ml-2 mt-3 text-green-500" dangerouslySetInnerHTML={{
              __html: t('prets.grist.description'),
            }}></p>
            </AnimatedSection>
          </div>

          <div className="mt-8 md:mt-0">
           <AnimatedSection delay={0.2}>
           <div className="">
            <img src={ScreenShotAppMystere.src} className="hidden md:block w-full rounded-[16px] card-box-shadow" />
            <img src={ScreenShotAppMystereMobile.src} className="md:hidden w-full rounded-[6.9%] card-box-shadow" />
          </div>
            <div className="flex items-center justify-between mt-6 ml-1">
              {locale === 'en' ? (
                <img className="h-[36px] md:h-[53px]" src={LogoMystereEn.src} />
              ) : (
                <img className="w-[196px] md:w-[290px]" src={LogoMystere.src} />
              )}
            </div>
            <p className="ml-2 mt-3 text-green-500" dangerouslySetInnerHTML={{
              __html: t('prets.mystere.description'),
            }}></p>
            </AnimatedSection>
          </div>

        </div>
      </div>
    </div>
  )
}
