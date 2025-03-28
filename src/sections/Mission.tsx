import { useTranslations } from '@/locales/useTranslations'
import { Chip } from '@/components/chip'

export function Mission() {
  const t = useTranslations()
  
  return (
    <>
      <div className="sub-hero-title relative w-full bg-green-700">
        <div className="sub-hero-title-border w-full">
          <div className="sub-hero-title-subborder w-full">
             <div className="container mx-auto md:py-[120px] py-8">
              <div className="flex gap-4 md:justify-center flex-wrap md:flex-nowrap">
                <Chip text={t('mission.tags.1')} type="dark" />
                <Chip text={t('mission.tags.2')} type="dark" />
                <Chip text={t('mission.tags.3')} type="dark" />
              </div>
              <h3 className="font-title leading-14 py-8 uppercase md:text-center text-beige-100 text-[59px] md:text-[86px]">
                {t('mission.title')}
              </h3>
              <p class="md:mx-auto font-text text-[#F8F6F2] max-w-[478px] text-left md:text-center">
                {t('mission.description')}
              </p>
            </div>
          </div>
        </div>
      </div>
      </>
  )
}
