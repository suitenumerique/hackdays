import { useTranslations } from '@/locales/useTranslations'
import { Chip } from '@/components/chip'
import { useState, useRef } from 'react';

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export function AVosMarques() {
  const t = useTranslations()
  const [activeIndex, setActiveIndex] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollAmount = 260 + 24; // Largeur de la carte + gap (260px + 24px)

  const handleScroll = (event: React.UIEvent) => {
    const index = Math.floor(event.currentTarget.scrollLeft / 260); // 260px = largeur de chaque carte
    setActiveIndex(index);
  };

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const cards = [
    {
      icon: "🏛️",
      tag: t('avosmarques.cards.1.tag'),
      title: t('avosmarques.cards.1.title'),
      description: t('avosmarques.cards.1.description'),
    },
    {
      icon: "🤖",
      tag: t('avosmarques.cards.2.tag'),
      title: t('avosmarques.cards.2.title'),
      description: t('avosmarques.cards.2.description'),
    },
    {
      icon: "🚀",
      tag: t('avosmarques.cards.3.tag'),
      title: t('avosmarques.cards.3.title'),
      description: t('avosmarques.cards.3.description'),
    },
    {
      icon: "🧱",
      tag: t('avosmarques.cards.4.tag'),
      title: t('avosmarques.cards.4.title'),
      description: t('avosmarques.cards.4.description'),
    },
    {
      icon: "📈",
      tag: t('avosmarques.cards.5.tag'),
      title: t('avosmarques.cards.5.title'),
      description: t('avosmarques.cards.5.description'),
    }
  ]
  
  return (
    <div id="AVosMarques" className="relative w-full bg-beige-100 md:py-[106px] py-8">
      <div className="container mx-auto">
        <Chip text={t('avosmarques.tag')} type="light" />
        <h3 className="font-title leading-14 py-8 uppercase text-green-700 text-[59px] md:text-[86px]">
          {t('avosmarques.title')}
        </h3>
        <p className="text-green-500 max-w-[800px] text-normal"
            dangerouslySetInnerHTML={{
              __html: t('avosmarques.description'),
            }}></p>
      </div>

        <div 
          ref={scrollContainerRef}
          className={`overflow-x-auto flex snap-x gap-6 pt-7 pb-5 scroll-smooth transition-[padding] duration-300 ${isScrolled ? 'pl-0' : 'pl-40'}`}
          onScroll={handleScroll}
          >
          {cards.map((card, index) => (
            <div key={index} className="snap-center bg-white/[0.75] border border-beige-200 min-w-[267px] max-w-[267px] flex flex-col p-6 rounded-[16px] card-box-shadow gap-3">
              <span className="text-7xl">{card.icon}</span>
              <span className="text-sm font-medium text-orange-500 font-code mt-2">{card.tag}</span>
              <h3 className="text-2xl font-bold">{card.title}</h3>
              <p className="text-green-700 font-normal text-base">{card.description}</p>
            </div>
          ))}
        </div>

        <div className="swiper-arrows relative text-center mx-auto mt-5">
          <div className="flex gap-4 justify-center">
            <button onClick={scrollLeft} className="flex text-green-700 h-[42px] px-[9px] py-[6px] justify-center items-center gap-[4px] bg-beige-300/[0.25] rounded-full">
              <ArrowBackIcon fontSize="medium" />
            </button>

            <div className="flex justify-between md:hidden gap-2 mt-4">
              {cards.map((_, index) => (
              <span
                key={index}
                className={`w-2 h-2 rounded-full ${activeIndex === index  ? 'bg-green-700' : 'bg-beige-300'}`}
                />

              ))}
            </div>

            <button onClick={scrollRight} className="flex text-green-700 h-[42px] px-[9px] py-[6px] justify-center items-center gap-[4px] bg-beige-300/[0.5] rounded-full">
              <ArrowForwardIcon fontSize="medium" />
            </button>
          </div>
        </div>


      
    </div>
  )
}
