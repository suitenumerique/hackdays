import Title from '@/assets/title.svg'
import TitleMobile from '@/assets/title-mobile.svg'

import { motion } from 'framer-motion';

export function Hero() {
  const sentence = ["Game.", "Set.", "Code."];

  const wordAnimation = {
    hidden: { opacity: 0 },
    visible: (i: number) => ({
      opacity: 1,
      transition: { delay: i * 0.4 + 1.2, duration: 0.4 }, // Transition douce pour les deux premiers mots
    }),
  };

  return (
    <>
      <div id="GameSetCode" className="relative h-[80vh] md:h-[100vh] w-full bg-cover bg-top
        bg-[url('/images/hero/hero-mobile.png')] md:bg-[url('/images/hero/hero.png')]"> 
       <div className="container mx-auto absolute bottom-[56px] md:left-[20%]">
        <h1 className="uppercase inset-0 font-title hero-title">
          {sentence.map((word, wordIndex) => (
            <motion.span
              key={wordIndex}
              className="hero-title-word"
              initial="hidden"
              animate="visible"
              custom={wordIndex}
              variants={wordAnimation}  // Appliquer l'animation douce pour les 2 premiers mots
            >
              {/* Si c'est le troisième mot, on anime lettre par lettre */}
              {wordIndex === 2 ? (
                word.split("").map((char, i) => (
                  <motion.span
                    key={i}
                    custom={i}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1}}
                    transition={{ delay: i * 0.2 + 2.2, duration: 0, ease: "easeOut" }}
                    className="text-orange-100"
                  >
                    {char}
                  </motion.span>
                ))
              ) : (
                // Sinon on affiche simplement le mot avec opacité douce
                <span
                  className="text-orange-800"
                >
                  {word}
                </span>
              )}
            </motion.span>
           ))}
        </h1>
        </div>
      </div>
      <div className="sub-hero-title relative w-full bg-green-700">
        <div className="sub-hero-title-border w-full">
          <div className="sub-hero-title-subborder w-full">
            <img className="mx-auto py-6 hidden md:block" src={Title.src} /> 
            <img className="mx-auto py-6 block md:hidden" src={TitleMobile.src} /> 
          </div>
        </div>
      </div>
      </>
  )
}
