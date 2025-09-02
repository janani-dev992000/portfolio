'use client';
import { personalInfo } from '@/lib/data';
import Image from 'next/image';
import { motion } from "framer-motion";
import AnimatedBackground from './3D/AnimatedBackground';
import FloatingElements from './3D/FloatingElements';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 via-lavender-50 to-purple-100 pt-16 relative overflow-hidden">
      {/* 3D Background */}
      <AnimatedBackground />
      <FloatingElements />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.header 
            className="text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h2
              className="text-5xl md:text-7xl font-display font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Hi, I'm{' '}
              <motion.span 
                className="bg-gradient-to-r from-purple-600 via-violet-600 to-purple-800 bg-clip-text animate-lavender-shimmer"
                animate={{ 
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                {personalInfo.name}
              </motion.span>
            </motion.h2>
            
            <motion.h3
              className="text-2xl md:text-4xl font-heading font-semibold text-gray-700 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {personalInfo.title}
            </motion.h3>
            
            <motion.p 
              className="text-lg text-gray-600 mb-8 max-w-2xl leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              {personalInfo.bio}
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              <motion.a
                href="#projects"
                className="group relative bg-gradient-to-r from-purple-400 to-violet-500 text-white px-8 py-4 rounded-xl font-semibold overflow-hidden animate-lavender-glow"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <span className="relative z-10">View My Work</span>
                <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-purple-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.a>
              
              <motion.a
                href="#contact"
                className="group relative border-2 border-purple-300 text-purple-500 px-8 py-4 rounded-xl font-semibold overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <span className="relative z-10 group-hover:text-white transition-colors duration-300">Let's Connect</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-violet-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </motion.a>
            </motion.div>
          </motion.header>

          {/* Avatar */}
          <motion.div 
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative">
              {/* Rotating gradient border */}
              <motion.div 
                className="absolute inset-0 w-80 h-80 rounded-full bg-gradient-to-br from-purple-400 via-violet-500 to-purple-600 p-1 animate-gradient animate-lavender-glow"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              
              {/* Static image container */}
              <div className="relative w-80 h-80 rounded-full bg-white p-2">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <img
                    src={personalInfo.avatar}
                    alt={personalInfo.name}
                    width={300}
                    height={300}
                    className="w-full h-full rounded-full object-cover"
                  />
                </motion.div>
              </div>
              
              {/* Floating elements */}
              <motion.div 
                className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-purple-400 to-violet-500 rounded-full flex items-center justify-center text-2xl shadow-lg animate-lavender-float"
                animate={{ 
                  y: [-10, 10, -10],
                  rotate: [0, 10, -10, 0]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                💻
              </motion.div>
              
              <motion.div 
                className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-violet-400 to-purple-500 rounded-full flex items-center justify-center text-xl shadow-lg animate-purple-pulse"
                animate={{ 
                  y: [10, -10, 10],
                  rotate: [0, -10, 10, 0]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
          
              🌐
              </motion.div>
              
              <motion.div 
                className="absolute top-1/2 -left-8 w-12 h-12 bg-gradient-to-r from-purple-300 to-violet-400 rounded-full flex items-center justify-center text-lg shadow-lg animate-lavender-float"
                animate={{ 
                  x: [-5, 5, -5],
                  rotate: [0, 180, 360]
                }}
                transition={{ 
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                
👨‍💻
              </motion.div>
              


              
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
