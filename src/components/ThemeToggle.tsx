'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-16 h-8 bg-gray-200 dark:bg-gray-700 rounded-full" />
    );
  }

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="relative w-16 h-8 bg-gradient-to-r from-cute-pink to-cute-lavender dark:from-purple-600 dark:to-blue-600 rounded-full p-1 transition-all duration-300 shadow-cute"
      aria-label="Toggle theme"
    >
      <motion.div
        layout
        className="w-6 h-6 bg-white rounded-full shadow-md flex items-center justify-center"
        animate={{
          x: theme === 'dark' ? 32 : 0,
        }}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 30,
        }}
      >
        {theme === 'dark' ? (
          <motion.span
            initial={{ rotate: 0, scale: 0 }}
            animate={{ rotate: 360, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-lg"
          >
            🌙
          </motion.span>
        ) : (
          <motion.span
            initial={{ rotate: 0, scale: 0 }}
            animate={{ rotate: 360, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-lg"
          >
            ☀️
          </motion.span>
        )}
      </motion.div>
    </motion.button>
  );
}
