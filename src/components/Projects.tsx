'use client';

import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FaGithub, FaExternalLinkAlt, FaLock } from 'react-icons/fa';
import { useState } from 'react';

const projectColors = [
  'from-blue-500 to-cyan-500',
  'from-purple-500 to-pink-500',
  'from-green-500 to-teal-500',
];

const Projects = () => {
  const { t } = useTranslation();
  const [expandedProject, setExpandedProject] = useState<number | null>(null);
  const projects = t('projects.list', { returnObjects: true }) as any[];

  return (
    <section className="section bg-white dark:bg-gray-900" id="projects">
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
              className="inline-block px-8 py-3 bg-gradient-to-r from-cute-pink/20 to-cute-lavender/20 backdrop-blur-sm rounded-full text-primary font-bold text-base border-2 border-cute-pink/30 shadow-cute mb-4"
            >
              {t('projects.badge')}
            </motion.span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              {t('projects.title')} <span className="gradient-text">{t('projects.titleHighlight')}</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              {t('projects.description')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project: any, index: number) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-cute hover:shadow-kawaii transition-all duration-300 border-2 border-cute-pink/20 dark:border-cute-lavender/20"
              >
                <div className="relative h-48 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${projectColors[index]} opacity-80 group-hover:opacity-100 transition-opacity`}>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: 10 }}
                        className="text-white text-6xl font-bold opacity-20"
                      >
                        {index + 1}
                      </motion.div>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech: string) => (
                      <span
                        key={tech}
                        className="bg-gradient-to-r from-cute-pink/10 to-cute-lavender/10 text-primary px-3 py-1 rounded-full text-xs font-medium border border-cute-pink/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Features - Expandable */}
                  <div className="mb-4">
                    <button
                      onClick={() => setExpandedProject(expandedProject === project.id ? null : project.id)}
                      className="text-sm font-semibold text-primary hover:underline mb-2"
                    >
                      {expandedProject === project.id ? '▼ Ẩn chi tiết' : '▶ Xem chi tiết'}
                    </button>
                    {expandedProject === project.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="space-y-2 text-sm text-gray-600 dark:text-gray-400"
                      >
                        <p className="font-semibold text-gray-700 dark:text-gray-300">Tính năng:</p>
                        <ul className="list-disc list-inside space-y-1 text-xs">
                          {project.features.map((feature: string, i: number) => (
                            <li key={i}>{feature}</li>
                          ))}
                        </ul>
                        {project.achievements && (
                          <>
                            <p className="font-semibold text-gray-700 dark:text-gray-300 mt-3">Kết quả:</p>
                            <ul className="list-disc list-inside space-y-1 text-xs">
                              {project.achievements.map((achievement: string, i: number) => (
                                <li key={i}>{achievement}</li>
                              ))}
                            </ul>
                          </>
                        )}
                      </motion.div>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    {project.github ? (
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-cute-pink to-cute-lavender text-white px-4 py-2 rounded-full text-sm font-semibold shadow-cute hover:shadow-kawaii transition-all"
                      >
                        <FaGithub /> {t('projects.viewCode')}
                      </motion.a>
                    ) : (
                      <div className="flex-1 inline-flex items-center justify-center gap-2 bg-gray-300 dark:bg-gray-700 text-gray-500 dark:text-gray-400 px-4 py-2 rounded-full text-sm font-semibold cursor-not-allowed">
                        <FaLock /> Private
                      </div>
                    )}
                    {project.demo && (
                      <motion.a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1 inline-flex items-center justify-center gap-2 border-2 border-cute-pink text-cute-pink px-4 py-2 rounded-full text-sm font-semibold hover:bg-cute-pink hover:text-white transition-all"
                      >
                        <FaExternalLinkAlt /> {t('projects.viewDemo')}
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;