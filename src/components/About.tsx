'use client';

import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { HiSparkles } from 'react-icons/hi2';
import { TbRainbow, TbBow } from 'react-icons/tb';
import { FaFileDownload, FaEnvelope, FaHeart } from 'react-icons/fa';
import { IoFlower } from 'react-icons/io5';
import { MdPalette, MdCode } from 'react-icons/md';



const About = () => {
  const { t } = useTranslation();
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };
  const stats = [
    { key: 'experience', value: `3 ${t('units.months')}`, icon: IoFlower, gradient: 'from-cute-pink to-cute-lavender' },
    { key: 'projects', value: '3', icon: MdPalette, gradient: 'from-cute-lavender to-cute-mint' },
    { key: 'technologies', value: '20+', icon: MdCode, gradient: 'from-cute-mint to-cute-sky' },
    { key: 'gpa', value: '2.8', icon: FaHeart, gradient: 'from-cute-peach to-cute-pink' },
  ];

  return (
    <section className="section bg-gradient-to-b from-kawaii-100 to-white dark:from-gray-800 dark:to-gray-900 relative overflow-hidden" id="about">
      {/* Cute background decorations */}
      <div className="absolute top-20 right-10 text-8xl opacity-20 animate-float text-pink-400">
        <TbRainbow />
      </div>
      <div className="absolute bottom-20 left-10 text-7xl opacity-20 animate-bounce-slow text-purple-400">
        <TbBow />
      </div>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="inline-block px-8 py-3 bg-gradient-to-r from-cute-pink/20 to-cute-lavender/20 backdrop-blur-sm rounded-full text-primary font-bold text-base border-2 border-cute-pink/30 shadow-cute mb-4"
            >
              {t('about.badge')}
            </motion.span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              {t('about.title')} <span className="gradient-text">{t('about.titleHighlight')}</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-cute-pink to-cute-mint rounded-3xl blur-2xl opacity-20 animate-pulse"></div>
                <div className="relative bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-kawaii border-2 border-cute-pink/20 dark:border-cute-lavender/20">
                  <motion.h3
                    className="text-2xl font-bold mb-4 gradient-text flex items-center gap-2"
                    animate={{ scale: [1, 1.02, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    {t('about.role')}
                  </motion.h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                    {t('about.description1')}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                    {t('about.description2')}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {t('about.description3')}
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1, y: -8, rotate: 2 }}
                    className={`bg-gradient-to-br ${stat.gradient} p-6 rounded-2xl shadow-cute hover:shadow-kawaii transition-all text-center border-2 border-white/50`}
                  >
                    <motion.div
                      className="text-5xl mb-2 text-white"
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                    >
                      <stat.icon />
                    </motion.div>
                    <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-sm text-white/90 font-semibold">{t(`about.stats.${stat.key}`)}</div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-r from-cute-pink via-cute-lavender to-cute-mint p-6 rounded-2xl text-white shadow-kawaii border-2 border-white/30"
              >
                <h4 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <HiSparkles className="text-yellow-300" />
                  {t('about.strengths')}
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <HiSparkles className="text-yellow-200" />
                    {t('about.strengthsList.softSkills_1')}
                  </li>
                  <li className="flex items-center gap-2">
                    <HiSparkles className="text-yellow-200" />
                    {t('about.strengthsList.softSkills_2')}
                  </li>
                  <li className="flex items-center gap-2">
                    <HiSparkles className="text-yellow-200" />
                    {t('about.strengthsList.softSkills_3')}
                  </li>
                </ul>
              </motion.div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <motion.a
              href="/cv.pdf"
              download
              whileHover={{ scale: 1.08, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-cute-pink via-cute-lavender to-cute-mint text-white px-10 py-4 rounded-full font-bold shadow-kawaii hover:shadow-glow transition-all"
            >
              <FaFileDownload />
              {t('about.downloadCV')}
            </motion.a>
            <motion.button
              onClick={() => scrollToSection('contact')}
              whileHover={{ scale: 1.08, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center gap-2 border-3 border-cute-pink bg-white dark:bg-gray-800 text-cute-pink px-10 py-4 rounded-full font-bold hover:bg-gradient-to-r hover:from-cute-pink hover:to-cute-lavender hover:text-white hover:border-transparent transition-all shadow-cute"
            >
              <FaEnvelope />
              {t('about.contact')}
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;