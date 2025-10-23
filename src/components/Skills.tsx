'use client';

import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { 
  SiReact, 
  SiNextdotjs, 
  SiTypescript, 
  SiTailwindcss, 
  SiHtml5, 
  SiJavascript,
  SiNodedotjs,
  SiExpress,
  SiDotnet,
  SiMongodb,
  SiNestjs,
  SiPostgresql,
  SiGraphql,
  SiGit,
  SiDocker,
  SiFigma,
  SiPostman,
  SiLinux
} from 'react-icons/si';
import { TbApi, TbBulb, TbRocket } from 'react-icons/tb';
import { VscCode } from 'react-icons/vsc';

const skillsData = {
  frontend: [
    { name: 'React', icon: SiReact, color: 'from-[#61DAFB] to-[#61DAFB]', description: 'UI Library' }, // Official React cyan
    { name: 'Next.js', icon: SiNextdotjs, color: 'from-black to-gray-900', description: 'React Framework' }, // Vercel black
    { name: 'TypeScript', icon: SiTypescript, color: 'from-[#3178C6] to-[#3178C6]', description: 'Type Safety' }, // TS blue
    { name: 'TailwindCSS', icon: SiTailwindcss, color: 'from-[#06B6D4] to-[#06B6D4]', description: 'CSS Framework' }, // Tailwind cyan
    { name: 'HTML5/CSS3', icon: SiHtml5, color: 'from-[#E34F26] to-[#E34F26]', description: 'Web Standards' }, // HTML5 orange
    { name: 'JavaScript', icon: SiJavascript, color: 'from-[#F7DF1E] to-[#F7DF1E]', description: 'Programming' }, // JS yellow
  ],
  backend: [
    { name: 'Node.js', icon: SiNodedotjs, color: 'from-[#339933] to-[#339933]', description: 'Runtime' }, // Node green
    { name: 'Nest.js', icon: SiNestjs, color: 'from-[#E0234E] to-[#E0234E] dark:from-[#E0234E] dark:to-[#E0234E]', description: 'Backend Framework' },
    { name: 'Microsoft .NET', icon: SiDotnet, color: 'from-[#512BD4] to-[#512BD4]', description: 'Backend Framework' }, // .NET purple
    { name: 'MongoDB', icon: SiMongodb, color: 'from-[#47A248] to-[#47A248]', description: 'NoSQL Database' }, // Mongo green
    { name: 'PostgreSQL', icon: SiPostgresql, color: 'from-[#4169E1] to-[#4169E1]', description: 'SQL Database' }, // Postgres blue
    { name: 'REST API', icon: TbApi, color: 'from-[#6B46C1] to-[#6B46C1]', description: 'API Design' }, // Purple
    { name: 'GraphQL', icon: SiGraphql, color: 'from-[#E535AB] to-[#E535AB]', description: 'Query Language' }, // GraphQL pink (Rhodamine)
  ],
  tools: [
    { name: 'Git', icon: SiGit, color: 'from-[#F05032] to-[#F05032]', description: 'Version Control' }, // Git orange
    { name: 'Docker', icon: SiDocker, color: 'from-[#2496ED] to-[#2496ED]', description: 'Containerization' }, // Docker blue
    { name: 'VS Code', icon: VscCode, color: 'from-[#007ACC] to-[#007ACC]', description: 'Code Editor' }, // VSCode blue
    { name: 'Figma', icon: SiFigma, color: 'from-[#F24E1E] to-[#FF7262]', description: 'Design Tool' }, // Figma gradient
    { name: 'Postman', icon: SiPostman, color: 'from-[#FF6C37] to-[#FF6C37]', description: 'API Testing' }, // Postman orange
    { name: 'Linux', icon: SiLinux, color: 'from-[#FCC624] to-[#FCC624]', description: 'Operating System' }, // Linux yellow
  ],
};

const Skills = () => {
  const { t } = useTranslation();
  
  const renderSkillCategory = (title: string, skills: typeof skillsData.frontend, delay: number) => (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className="mb-12"
    >
      <h3 className="text-2xl font-bold mb-8 text-center text-black-600">{title}</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.5, delay: delay + index * 0.05 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.1, y: -8, rotate: 5 }}
            className="group relative"
          >
            <div className={`bg-gradient-to-br ${skill.color} p-6 rounded-2xl shadow-cute hover:shadow-kawaii transition-all border-2 border-white/50 dark:border-white/20 flex flex-col items-center justify-center aspect-square cursor-pointer`}>
              <motion.div
                className="text-5xl mb-2 text-white"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: index * 0.3 }}
              >
                <skill.icon/>
              </motion.div>
              <h4 className="text-sm font-bold text-white text-center">{skill.name}</h4>
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileHover={{ opacity: 1, scale: 1 }}
                className="absolute inset-0 bg-black/80 backdrop-blur-sm rounded-2xl flex flex-col items-center justify-center p-4 opacity-0 group-hover:opacity-100 transition-all"
              >
                <span className="text-white text-xs text-center font-semibold">{skill.description}</span>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );

  return (
    <section className="section bg-gradient-to-b from-white to-kawaii-100 dark:from-gray-800 dark:to-gray-900 relative overflow-hidden" id="skills">
      <div className="absolute top-10 left-10 text-7xl opacity-20 animate-bounce-slow text-yellow-400">
        <TbBulb />
      </div>
      <div className="absolute bottom-10 right-10 text-6xl opacity-50 animate-float text-purple-500">
        <TbRocket />
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
              {t('skills.badge')}
            </motion.span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              {t('skills.title')} <span className="gradient-text">{t('skills.titleHighlight')}</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              {t('skills.description')}
            </p>
          </div>

          {renderSkillCategory(t('skills.frontend'), skillsData.frontend, 0.2)}
          {renderSkillCategory(t('skills.backend'), skillsData.backend, 0.3)}
          {renderSkillCategory(t('skills.tools'), skillsData.tools, 0.4)}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;