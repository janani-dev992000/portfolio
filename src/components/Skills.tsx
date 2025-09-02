'use client';

import { skills } from '@/lib/data';
import Skills3D from './3D/Skills3D';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = {
    frontend: skills.filter(skill => skill.category === 'frontend'),
    backend: skills.filter(skill => skill.category === 'backend'),
    tools: skills.filter(skill => skill.category === 'tools'),
  };

  const getSkillLevel = (level: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span
        key={i}
        className={`text-lg ${
          i < level ? 'text-yellow-500' : 'text-gray-300 dark:text-gray-600'
        }`}
      >
        ★
      </span>
    ));
  };

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-white to-lavender-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h3
            className="text-4xl md:text-5xl font-display font-bold bg-gradient-to-r from-purple-600 via-violet-600 to-purple-800 bg-clip-text text-transparent mb-4 animate-lavender-shimmer"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Skills & Technologies
          </motion.h3>
          <motion.p 
            className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Here are the technologies and tools I work with to bring ideas to life
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Frontend Skills */}
          <motion.div 
            className="bg-gradient-to-br from-purple-50 to-violet-100 dark:from-gray-800 dark:to-gray-900 p-6 rounded-xl shadow-lg dark:shadow-gray-900 hover:shadow-xl dark:hover:shadow-gray-800 transition-shadow duration-300 animate-lavender-glow"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
          >
            <motion.div 
              className="flex items-center mb-6"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="w-14 h-14 bg-gradient-to-r from-purple-600 to-violet-600 rounded-xl flex items-center justify-center mr-4 shadow-lg animate-purple-pulse"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <span className="text-white text-2xl">🖥️</span>
              </motion.div>
              <h4 className="text-2xl font-heading font-semibold text-gray-900 dark:text-black">Frontend</h4>
            </motion.div>
            <div className="space-y-4">
              {skillCategories.frontend.map((skill, index) => (
                <motion.div 
                  key={skill.id} 
                  className="flex items-center justify-between group"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="text-gray-700 dark:text-white font-medium group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">{skill.name}</span>
                  <div className="flex gap-1">
                    {getSkillLevel(skill.level)}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Backend Skills */}
          <motion.div 
            className="bg-gradient-to-br from-green-50 to-emerald-100 dark:from-gray-800 dark:to-gray-900 p-6 rounded-xl shadow-lg dark:shadow-gray-900 hover:shadow-xl dark:hover:shadow-gray-800 transition-shadow duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
          >
            <motion.div 
              className="flex items-center mb-6"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="w-14 h-14 bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl flex items-center justify-center mr-4 shadow-lg"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <span className="text-white text-2xl">⚙️</span>
              </motion.div>
              <h4 className="text-2xl font-heading font-semibold text-gray-900 dark:text-black">Backend</h4>
            </motion.div>
            <div className="space-y-4">
              {skillCategories.backend.map((skill, index) => (
                <motion.div 
                  key={skill.id} 
                  className="flex items-center justify-between group"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="text-gray-700 dark:text-white font-medium group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors duration-300">{skill.name}</span>
                  <div className="flex gap-1">
                    {getSkillLevel(skill.level)}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Tools */}
          <motion.div 
            className="bg-gradient-to-br from-purple-50 to-pink-100 dark:from-gray-800 dark:to-gray-900 p-6 rounded-xl shadow-lg dark:shadow-gray-900 hover:shadow-xl dark:hover:shadow-gray-800 transition-shadow duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
          >
            <motion.div 
              className="flex items-center mb-6"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="w-14 h-14 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center mr-4 shadow-lg"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <span className="text-white text-2xl">🛠️</span>
              </motion.div>
              <h4 className="text-2xl font-heading font-semibold text-gray-900 dark:text-black">Tools</h4>
            </motion.div>
            <div className="space-y-4">
              {skillCategories.tools.map((skill, index) => (
                <motion.div 
                  key={skill.id} 
                  className="flex items-center justify-between group"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 1.0 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="text-gray-700 dark:text-white font-medium group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">{skill.name}</span>
                  <div className="flex gap-1">
                    {getSkillLevel(skill.level)}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* 3D Skills Visualization */}
        <div className="mt-12">
          {/* <Skills3D skills={skills} /> */}
          {/* <div className="text-center text-gray-500">3D Skills Visualization (Temporarily Disabled)</div> */}
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <div className="bg-gray-50 dark:bg-black rounded-lg p-8">
            <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Always Learning
            </h4>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Technology evolves rapidly, and I'm committed to staying up-to-date with the latest 
              trends and best practices. I'm always exploring new frameworks, tools, and methodologies 
              to improve my skills and deliver better solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
