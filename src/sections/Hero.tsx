import { useState, useEffect } from "react";
import Title from '@/assets/title.svg'
import TitleMobile from '@/assets/title-mobile.svg'
import { motion } from 'framer-motion';

export function Hero() {
  const [codeText, setCodeText] = useState("Code.");
  const [isClicked, setIsClicked] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    checkScreenSize(); // Vérifie au premier rendu
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const handleClick = () => {
    if (isDesktop) {
      setCodeText("Code;");
      setIsClicked(true);

      setTimeout(() => {
        setCodeText("Code.");
        setIsClicked(false);
      }, 4000);
    }
  };

  const sentence = ["Game.", "Set.", codeText];

  const wordAnimation = {
    hidden: { opacity: 0 },
    visible: (i: number) => ({
      opacity: 1,
      transition: { delay: i * 0.3 + 1.2, duration: 0.3 },
    }),
  };

  return (
    <>
      <div id="GameSetCode"
        className="relative h-[80vh] md:h-[100vh] w-full bg-cover bg-top
        bg-[url('/images/hero/hero-mobile.png')] md:bg-[url('/images/hero/hero.png')]"
       > 
       <motion.div
          className="absolute w-full top-O z-0 bg-cover bg-top inset-0
            md:bg-[url('/images/hero/hero-matrix.png')]"
          initial={{ opacity: 0 }}
          animate={isClicked ? { 
            opacity: [0, 0.7, 0.2, 0.6, 0.8, 0.4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 
            transition: { duration: 3.5, ease: "easeInOut" } 
          } : {}}>
        </motion.div>
        
        <div className="container h-full mx-auto relative">
          <h1 className="uppercase font-title absolute bottom-[56px] hero-title">
            {sentence.map((word, wordIndex) => (
              <motion.span
                key={wordIndex}
                className="hero-title-word"
                initial="hidden"
                animate="visible"
                custom={wordIndex}
                variants={wordAnimation} 
              >
                {wordIndex === 2 ? (
                  word.split("").map((char, i) => (
                    <motion.span
                      key={i}
                      custom={i}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: i * 0.2 + 2.1, duration: 0, ease: "easeOut" }}
                      className={`md:cursor-pointer ${isClicked ? "hero-title-matrix" : "text-orange-100"} md:inline-block`}
                      onClick={handleClick}
                    >
                      {char}
                    </motion.span>
                  ))
                ) : (
                  <span 
                    className={`${isClicked ? "hero-title-matrix-simple" : "text-orange-800"}`}>
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
            <div className="container mx-auto">
              <img className="mx-auto py-6 hidden md:block" src={Title.src} /> 
              <img className="mx-auto w-full py-6 block md:hidden" src={TitleMobile.src} /> 
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
