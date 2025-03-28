import { useTranslations } from '@/locales/useTranslations'
import { Chip } from '@/components/chip'
import { useState } from 'react';

import ScreenShotDocs from '@/assets/screenshot/screenshot-docs.png'
import ScreenShotVisio from '@/assets/screenshot/screenshot-visio.png'

import ScreenShotDocsMobile from '@/assets/screenshot/screenshot-docs-mobile.png'
import ScreenShotVisioMobile from '@/assets/screenshot/screenshot-visio-mobile.png'

import ScreenShotDocsEn from '@/assets/screenshot/screenshot-docs-en.png'
import ScreenShotDocsMobileEn from '@/assets/screenshot/screenshot-docs-mobile-en.png'

import LogoVisio from '@/assets/logo/logo-visio.svg'
import LogoDocs from '@/assets/logo/logo-docs.svg'

export function Prets() {
  const t = useTranslations()
  
  return (
    <div className="relative w-full bg-beige-100 py-14 md:py-[106px] py-8">
      <div className="container mx-auto">
        <Chip text={t('prets.tag')} type="light" />
        <h3 className="font-title leading-14 py-8 uppercase text-green-700 text-[59px] md:text-[86px]">
          {t('prets.title')}
        </h3>
        <p className="text-green-500 max-w-[800px] text-normal"
            dangerouslySetInnerHTML={{
              __html: t('prets.description'),
            }}></p>

        <div className="grid md:grid-cols-2 gap-10 mt-[40px]">
          <div className="">
            <img src={ScreenShotDocs.src} className="hidden md:block rounded-[16px] card-box-shadow" />
            <img src={ScreenShotDocsMobile.src} className="md:hidden rounded-[16px] card-box-shadow" />
            <div class="flex items-center justify-between mt-6">
              <img src={LogoDocs.src} className="w-[100px] md:w-[148px]" />
              <a className="rounded-full bg-beige-300/[0.5] transition-all hover:bg-beige-300 py-1.5 px-4 font-medium decoration-0"
                href="https://github.com/suitenumerique/docs" target="_blank">Github</a>
            </div>
            <p className="mt-3" dangerouslySetInnerHTML={{
              __html: t('prets.docs.description'),
            }}></p>
          </div>

          <div className="mt-[40px] md:mt-0">
            <img src={ScreenShotVisio.src} className="hidden md:block rounded-[16px] card-box-shadow" />
            <img src={ScreenShotVisioMobile.src} className="md:hidden rounded-[16px] card-box-shadow" />
            <div class="flex items-center justify-between mt-6">
              <img src={LogoVisio.src} className="w-[100px] md:w-[148px]" />
              <a className="rounded-full bg-beige-300/[0.5] transition-all hover:bg-beige-300 py-1.5 px-4 font-medium decoration-0"
                href="https://github.com/suitenumerique/meet" target="_blank">Github</a>
            </div>
            <p className="mt-3" dangerouslySetInnerHTML={{
              __html: t('prets.visio.description'),
            }}></p>
          </div>

        </div>
      </div>
    </div>
  )
}
