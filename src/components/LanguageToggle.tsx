'use client';

import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

export default function LanguageToggle() {
  const { i18n } = useTranslation();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-20 h-8 bg-gray-200 dark:bg-gray-700 rounded-full" />
    );
  }

  const currentLang = i18n.language;

  const toggleLanguage = () => {
    const newLang = currentLang === 'vi' ? 'en' : 'vi';
    i18n.changeLanguage(newLang);
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={toggleLanguage}
      className="relative w-20 h-8 bg-gradient-to-r from-cute-sky to-cute-mint dark:from-blue-600 dark:to-green-600 rounded-full p-1 transition-all duration-300 shadow-cute"
      aria-label="Toggle language"
    >
      <motion.div
        layout
        className="w-6 h-6 bg-white dark:text-black rounded-full shadow-md flex items-center justify-center text-xs font-bold"
        animate={{
          x: currentLang === 'en' ? 40 : 0,
        }}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 30,
        }}
      >
        {currentLang === 'en' ? 'EN' : 'VI'}
      </motion.div>
    </motion.button>
  );
}
