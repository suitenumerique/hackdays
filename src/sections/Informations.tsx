import { useTranslations } from '@/locales/useTranslations'
import { Chip } from '@/components/chip'
import { useState } from 'react';

import logoDINUM from '@/assets/logo/logo-dinum.svg'
import logoDGNUM from '@/assets/logo/logo-dgnum.svg'
import logoCFF from '@/assets/logo/logo-cff.svg'

import logoENS from '@/assets/logo/logo-ens.svg'
import ENS from '@/assets/building.png'

export function Informations() {
  const t = useTranslations()
  
  return (
    <div id="Informations" className="relative w-full bg-beige-100 py-14 md:py-[106px] py-8">
      <div className="container mx-auto text-center">
        <Chip text={t('informations.tag')} type="light" />
        <h3 className="font-title leading-14 py-8 uppercase text-green-700 text-[59px] md:text-[86px]">
          {t('informations.title')}
        </h3>

        <div className="grid md:grid-cols-3 gap-10 md:my-[40px]">
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
                href="#" target="_blank"> {t(`informations.buttonMaps`)} </a>
            <a className="block text-lg rounded-full bg-beige-300/[0.5] text-center transition-all hover:bg-beige-300 py-1.5 font-medium decoration-0"
                href="#" target="_blank"> {t(`informations.buttonContact`)} </a>
          </div>
        </div>
        <div className="hidden md:block md:col-span-2">
          <img src={ENS.src} className="rounded-2xl"
            style={{ boxShadow: '0px 4px 16.6px 0px rgba(0, 0, 0, 0.10)'}} />
        </div>
        </div>

        <div className="grid grid-cols-3 flex text-center max-w-[413px] pt-6 my-6 mx-auto gap-x-11">
          <img src={logoDINUM.src} />
          <img src={logoENS.src} className="mx-auto self-end" />
          <img src={logoDGNUM.src} className="self-end" />
        </div>
        <div className="flex justify-center pt-6">
          <img src={logoCFF.src} className="w-[103px] self-end" />
        </div>

      </div>
    </div>
  )
}
