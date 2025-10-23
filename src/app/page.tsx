'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Overview from '@/components/Overview';

export default function Home() {
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    // Update time every second
    const updateTime = () => {
      const now = new Date();
      const timeString = now.toLocaleTimeString('vi-VN', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
      });
      setCurrentTime(timeString);
    };

    updateTime(); // Initial call
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Navigation />
      <main className="relative">
        {/* Hero Section */}
        <section className="hero-section">
          <Overview />
        </section>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <About />
          <Skills />
          <Projects />
          <Contact />
        </motion.div>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-8">
          <div className="container mx-auto px-4">
            <div className="text-center">
              
              {/* Clock */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
                className="mt-2 mb-3"
              >
                <div className=" cursor-crosshair inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cute-pink/20 to-cute-lavender/20 dark:from-purple-600/20 dark:to-blue-600/20 rounded-full border border-cute-pink/30 dark:border-purple-500/30">
                  <svg className="w-4 h-4 text-cute-pink dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-sm font-mono text-gray-300 dark:text-gray-400">
                    {currentTime || '00:00:00'}
                  </span>
                </div>
              </motion.div>

              <div className="flex justify-center gap-6 mt-4">
                <a href="https://github.com/minhquan2703" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  GitHub
                </a>
                <a href="https://www.linkedin.com/in/minhquan02073/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  LinkedIn
                </a>
                <a href="minhquan02073@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                  Email
                </a>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}