import { useTranslations } from '@/hooks/useTranslations';
import { Chip } from '@/components/Chip'
import AnimatedSection from '@/components/AnimatedSection'

export function Mission() {
  const { t } = useTranslations()
  
  return (
    <>
      <div className="sub-hero-title relative w-full">
             <div className="container mx-auto py-[96px] md:py-[160px]">
              <AnimatedSection>
              <div className="relative border-gradient z-0 mx-auto p-[1px] md:min-h-[443px] md:w-[699px] rounded-xl">
                <div className="gradient-border-inner relative z-10 rounded-xl bg-cover bg-center w-full h-full
                  md:bg-[url('/images/bigcard-background.svg')] card-box-shadow-desktop">
                <div className="mx-auto md:pt-10">
                  <img className="mx-auto mb-8 h-[54px] md:h-[83px]" src="/images/logotype.svg" />
                </div>
                <h3 className="font-title font-text leading-14 uppercase text-center text-green-700 text-[59px] md:text-[86px]">
                  {t('mission.title')}
                </h3>
                <div className="flex gap-4 gap-y-3 justify-center flex-wrap md:flex-nowrap py-3 md:py-[19px]">
                  <AnimatedSection delay={0.3}>
                    <Chip text={t('mission.tags.1')} type="light" />
                  </AnimatedSection>
                  <AnimatedSection delay={0.6}>
                    <Chip text={t('mission.tags.2')} type="light" />
                  </AnimatedSection>
                  <AnimatedSection delay={0.9}>
                    <Chip text={t('mission.tags.3')} type="light" />
                  </AnimatedSection>
                </div>
                <div className="block mx-auto">
                  <p className="text-base md:text-xl px-3 text-green-500 md:text-green-700 max-w-[555px] mx-auto text-center">
                    {t('mission.description')}
                  </p>
                </div>

                  <div className="flex justify-center mt-8">
                    <a
                      href="https://pretix.dgnum.eu/dgnum/hack-lsn-2025/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={t('mission.button')}
                      className="block py-[8px] px-4 text-lg rounded-full bg-orange-600 text-beige-100 text-center transition-all hover:bg-orange-500"
                    >
                      {t('mission.button')}
                    </a>
                  </div>
                  <div className="relative md:pb-10">
                    <p className="mt-[8px] mx-auto text-sm text-green-700 max-w-[478px] text-center">
                      {t('mission.disclaimer')}
                    </p>
                  </div>
                  </div>
                  </div>
                </AnimatedSection>
              </div>
        </div>
      </>
  )
}
