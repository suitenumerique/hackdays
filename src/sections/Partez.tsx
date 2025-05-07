import { useTranslations } from '@/hooks/useTranslations';
import { Chip } from '@/components/Chip'
import AnimatedSection from '@/components/AnimatedSection'
import { GithubButton } from '@/components/GithubButton';

import Date2 from '@/assets/date/date-2.png'
import Date3 from '@/assets/date/date-3.png'
import Date4 from '@/assets/date/date-4.png'
import LogoDocsMono from '@/assets/logo/logo-docs-mono.svg'

export function Partez() {
  const { t } = useTranslations()
  
  return (
    <div id="Partez" className="relative w-full py-14 md:py-[106px] py-8">
      <div className="container mx-auto">
        <AnimatedSection>
        <Chip text={t('partez.tag')} type="light" />
        <h3 className="font-title leading-14 py-3 md:py-8 uppercase text-green-700 text-[59px] md:text-[86px]">
          {t('partez.title')}
        </h3>
        <p className="block text-green-500 max-w-[800px] text-normal mb-4"> 
          {t('partez.description')}
        </p>
        <div className="flex gap-2 flex-col md:flex-row">
        <a
          href="https://pretix.dgnum.eu/dgnum/hack-lsn-2025/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label={t('partez.button')}
          className="block text-lg px-4 py-2 rounded-full bg-orange-600 text-beige-100 text-center transition-all hover:bg-orange-500"
        >
          {t('partez.button')}
        </a>
        <GithubButton text={t('partez.githubButton')} />
	<a
	  href="https://docs.numerique.gouv.fr/docs/edaf6617-5102-4bce-b0f0-523b68728bcc/"
	  target="_blank"
	  rel="noopener noreferrer"
	  aria-label={t('partez.programButton')}
	  className="flex gap-2 text-lg justify-center py-2 items-center px-4 rounded-full bg-green-700 text-beige-100 text-center transition-all hover:bg-orange-500"
	>
	  <img src={LogoDocsMono.src} className="text-beige-100" />
	  {t('partez.programButton')}
	</a>
        </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
        <div className="bg-[#26312e] flex overflow-hidden mt-9 md:mt-12 md:h-[180px] border-1 border-green-700 rounded-2xl">
          <img src={Date2.src} className="hidden lg:block h-[180px]" />
          <div className="p-8 relative flex-1"
            style={{
              background: `linear-gradient(73deg, rgba(255, 255, 255, 0.00) -3.75%, rgba(255, 255, 255, 0.10) 92.73%), #26312D`,
            }}>
            <p className="absolute top-[9px] right-[9px] py-1 px-2.5 text-beige-100 bg-orange-600 border border-white/[0.2] font-code text-sm rounded-lg">{t('partez.days.1.chip')}</p>
            <p className="text-orange-500 text-lg font-code md:mt-0 mt-2.5"> {t('partez.days.1.date')} </p>
            <p className="text-beige-100 text-[1.9rem] font-bold font-text"> {t('partez.days.1.title')} </p>
            <p className="text-beige-100 text-base">{t('partez.days.1.description')}</p>
          </div>
        </div>
        </AnimatedSection>

        <AnimatedSection delay={0.4}>
        <div className="bg-[#26312e] flex overflow-hidden mt-4 md:mt-12 md:h-[180px] border-1 border-green-700 rounded-2xl">
        <img src={Date3.src} className="hidden lg:block h-[180px]" />
          <div className="p-8 relative flex-1"
           style={{
              background: `linear-gradient(73deg, rgba(255, 255, 255, 0.00) -3.75%, rgba(255, 255, 255, 0.10) 92.73%), #26312D`,
            }}>
            <p className="absolute top-[9px] right-[9px] py-1 px-2.5 text-beige-100 bg-orange-600 border border-white/[0.2] font-code text-sm rounded-lg">{t('partez.days.2.chip')}</p>
            <p className="text-orange-500 text-lg font-code md:mt-0 mt-2.5"> {t('partez.days.2.date')} </p>
            <p className="text-beige-100 text-[1.9rem] font-bold font-text"> {t('partez.days.2.title')} </p>
            <p className="text-beige-100 text-base">{t('partez.days.2.description')}</p>
          </div>
        </div>
        </AnimatedSection>

        <AnimatedSection delay={0.6}>
        <div className="bg-orange-600 flex overflow-hidden mt-4 md:mt-12 md:h-[180px] border-1 border-orange-600 rounded-2xl">
          <img src={Date4.src} className="hidden lg:block h-[180px]"/>
          <div className="p-8 relative flex-1"
              style={{
              background: `linear-gradient(73deg, rgba(255, 255, 255, 0.00) 33.75%, rgba(255, 255, 255, 0.10) 79.95%), #BC5A3F`,
              backgroundColor: "#BC5A3F"
            }}>
            <p className="absolute top-[9px] right-[9px] py-1 px-2.5 text-beige-100 bg-green-700 border border-white/[0.2] font-code text-sm rounded-lg">{t('partez.days.3.chip')}</p>
            <p className="text-beige-100 text-lg font-code md:mt-0 mt-2.5"> {t('partez.days.3.date')} </p>
            <p className="text-beige-100 text-[1.9rem] font-bold font-text"> {t('partez.days.3.title')} </p>
            <p className="text-beige-100 text-base">{t('partez.days.3.description')}</p>
          </div>
        </div>
        </AnimatedSection>
      </div>
    </div>
  )
}
