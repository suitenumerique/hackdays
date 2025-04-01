import { useTranslations } from '@/hooks/useTranslations';
import { Chip } from '@/components/Chip'
import AnimatedSection from '@/components/AnimatedSection'

export function Mission() {
  const { t } = useTranslations()
  
  return (
    <>
      <div className="sub-hero-title relative w-full bg-green-700">
        <div className="sub-hero-title-border w-full">
          <div className="sub-hero-title-subborder w-full">
             <div className="container mx-auto md:py-[120px] py-8">
              <div className="flex gap-4 md:justify-center flex-wrap md:flex-nowrap">
                <AnimatedSection delay={0.2}>
                  <Chip text={t('mission.tags.1')} type="dark" />
                </AnimatedSection>
                <AnimatedSection delay={0.4}>
                  <Chip text={t('mission.tags.2')} type="dark" />
                </AnimatedSection>
                <AnimatedSection delay={0.6}>
                  <Chip text={t('mission.tags.3')} type="dark" />
                </AnimatedSection>
              </div>
              <AnimatedSection>
              <h3 className="font-title leading-14 py-8 uppercase md:text-center text-beige-100 text-[59px] md:text-[86px]">
                {t('mission.title')}
              </h3>
              <p className="md:mx-auto font-text text-[#F8F6F2] max-w-[478px] text-left md:text-center">
                {t('mission.description')}
              </p>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </div>
      </>
  )
}
