import { useTranslations } from '@/locales/useTranslations'
import { Chip } from '@/components/Chip'
import { useRouter } from 'next/router'
import AnimatedSection from '@/components/AnimatedSection'

import Fame from '@/assets/fame.png'

export function Histoire() {
  const t = useTranslations()
  const { locale } = useRouter()


  const news = locale === 'fr' ? ['hn', 'franceinfo', 'linkedin', 'reddit', 'frandroid', 'bfm']
    : ['hn', 'reddit']

  return (
    <div className="relative w-full bg-beige-100 py-14 md:py-[106px] py-8">
      <div className="container mx-auto text-center">
        <AnimatedSection>
        <Chip text={t('histoire.tag')} type="light" />
        <h3 className="font-title leading-none pt-1 pb-[56px] md:pb-[80px] max-w-[850px] text-green-700 text-[59px] md:text-[86px] mx-auto">
          {t('histoire.title')}
        </h3>
        </AnimatedSection>
      </div>
      <div className="container mx-auto">
        <div className="grid md:grid-cols-7 sm:grid-cols-1 sm:mx-9 gap-10 md:mt-[40px] items-center">
        <div className="hidden md:block md:col-span-3">
          <img src={Fame.src} />
        </div>
        <div className="w-full sm:col-span-4">
           {news.map((source, index) => (
            <AnimatedSection key={source} delay={0.05 * index}>
            <div className="flex items-center md:gap-[32px] justify-between grid md:grid-cols-4 mb-6">
              <div className="md:col-span-3">
                <p className="font-bold text-2xl">{t(`histoire.news.${source}.title`)} </p>
                <p className="font-normal text-green-500">{t(`histoire.news.${source}.description`)} </p>
              </div>
              <div className="md:col-span-1 mt-3 md:mt-0">
                <a className="block w-[130px] text-lg rounded-full bg-beige-300/[0.5] text-center transition-all hover:bg-beige-300 py-1.5 font-medium decoration-0"
                  href={t(`histoire.news.${source}.target`)} target="_blank">{t(`histoire.news.${source}.button`)}</a>
              </div>
            </div>
            </AnimatedSection>
          ))}
        </div>
        </div>
      </div>
    </div>
  )
}
