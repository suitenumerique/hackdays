import React, { useEffect } from 'react';

import Logo from '@/assets/logo.svg';
import LogoHackDays from '@/assets/logohackdays.svg';
import { motion, useAnimate } from "framer-motion";
import { LocaleSwitcher } from '@/components/LocaleSwitcher';
import { useTranslations } from '@/hooks/useTranslations';

export function NavBar() {
  const [nav, animate] = useAnimate();
  const { t } = useTranslations();

  const sequence = async () => {
    await animate(nav.current, { top: 20 }, { delay: 0.2, duration: 0.5, ease: "easeOut" });
    await animate(nav.current, { width: 'auto' }, { duration: 0.5, ease: "easeOut" });
  };

  useEffect(() => {
    sequence();
  }, []);

  return (
    <>
      <motion.div
        initial={{ top: '-100px', backgroundColor: 'transparent' }}
        animate={{ top: '0px', backgroundColor: 'white' }}
        transition={{ delay: 0, duration: 0.3, ease: "easeOut" }}
        className="items-center flex border-b border-beige-200 z-1000 w-full bg-white fixed md:hidden top-[0px] left-[0px] h-[48px] justify-between"
      >
        <LocaleSwitcher />
        <a href="#GameSetCode">
          <img src={Logo.src} />
        </a>
        <a
          href="https://pretix.dgnum.eu/dgnum/hack-lsn-2025/"
          target="_blank"
          className="transition-all text-[13px] text-green-700 p-4 hover:text-orange-500 font-medium"
        >
          {t('menu.signup')}
        </a>
      </motion.div>

      <div className="w-full hidden md:flex justify-center">
        <motion.div
          initial={{ top: '-100px', width: 40 }}
          ref={nav}
          transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
          className="fixed overflow-hidden z-1000 p-[5px] text-[13px] top-[20px] border border-beige-200 bg-white rounded-3xl h-[40px]"
          style={{ boxShadow: `0px 4px 9.3px 0px rgba(75, 41, 28, 0.05)` }}
        >
          <motion.a
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ delay: 3, duration: 0.5 }}
            className="absolute top-1.25"
          >
            <img className="cursor-pointer" src={Logo.src} />
          </motion.a>
          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.5, ease: "easeOut" }}
            className="flex items-center justify-between"
          >
            <li>
              <a href="#GameSetCode">
                <img className="w-[124px] overflow-hidden cursor-pointer" src={LogoHackDays.src} />
              </a>
            </li>
            <li className="flex items-center hover:text-orange-600 cursor-pointer px-[12px] pl-[18px]">
              <a href="#AVosMarques">{t('menu.tracks')}</a>
            </li>
            <li className="flex items-center hover:text-orange-600 cursor-pointer px-[12px]">
              <a href="#Partez">{t('menu.program')}</a>
            </li>
            <li className="flex items-center hover:text-orange-600 cursor-pointer px-[12px]">
              <a href="#Informations">{t('menu.info')}</a>
            </li>
            <li className="flex items-center">
              <a
                href="https://pretix.dgnum.eu/dgnum/hack-lsn-2025/"
                target="_blank"
                className="flex items-center px-4 py-1 transition-all bg-green-700 hover:bg-orange-500 text-beige-100 rounded-full"
              >
                {t('menu.signup')}
              </a>
            </li>
          </motion.ul>
        </motion.div>

        <motion.div
          initial={{ top: '-100px', width: 40 }}
          animate={{ top: '20px' }}
          transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
          className="hidden md:block"
        >
          <LocaleSwitcher />
        </motion.div>
      </div>
    </>
  );
}
