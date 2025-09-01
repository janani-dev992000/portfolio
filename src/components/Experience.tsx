
'use client';
import { experiences } from '@/lib/data';
import { useState, useEffect } from 'react';

const Experience = () => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleItems(prev => [...prev, index]);
          }
        });
      },
      { threshold: 0.3 }
    );

    const elements = document.querySelectorAll('.experience-item');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" className="py-20 bg-gradient-to-br relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-lavender-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl animate-purple-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-128 h-128 bg-gradient-to-r from-purple-600/5 to-violet-600/5 rounded-full blur-3xl animate-pulse-slow"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-lavender mb-4 font-heading">
            <span className="bg-gradient-to-r from-purple-400 via-violet-400 to-purple-400 bg-clip-text  animate-gradient">
              Work Experience
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-violet-500 mx-auto mb-6 rounded-full animate-shimmer"></div>
          <p className="text-lg text-purple-900 max-w-3xl mx-auto opacity-90">
            My professional journey and the experiences that have shaped my career
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <div 
                key={experience.id} 
                className={`experience-item relative transform transition-all duration-1000 ${
                  visibleItems.includes(index) 
                    ? 'translate-y-0 opacity-100' 
                    : 'translate-y-20 opacity-0'
                }`}
                data-index={index}
                style={{
                  transitionDelay: `${index * 200}ms`
                }}
              >
                {/* Timeline line with 3D effect */}
                {index !== experiences.length - 1 && (
                  <div className="absolute left-8 top-20 w-1 h-full bg-gradient-to-b from-purple-500 via-violet-500 to-purple-500 rounded-full shadow-lg shadow-purple-500/50 animate-lavender-shimmer"></div>
                )}
                
                <div className="flex items-start group">
                  {/* 3D Timeline dot */}
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-purple-500 to-violet-600 rounded-full flex items-center justify-center text-white font-bold text-lg relative z-10 transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 shadow-2xl shadow-purple-500/50 animate-lavender-glow">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-violet-500 rounded-full blur opacity-75 animate-pulse-slow"></div>
                    <span className="relative z-10">{index + 1}</span>
                  </div>
                  
                  {/* 3D Content Card */}
                  <div className="ml-8 flex-1">
                    <div className="bg-gradient-to-br from-gray-900/80 via-purple-900/20 to-gray-900/80 backdrop-blur-xl rounded-2xl shadow-2xl p-8 border border-purple-500/20 transform transition-all duration-500 hover:scale-105 hover:-translate-y-2 hover:rotate-1 hover:shadow-3xl hover:shadow-purple-500/30 hover-glow group-hover:border-purple-400/40">
                      {/* Shine effect overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-400/10 via-transparent to-violet-400/10 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none"></div>
                      
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 relative z-10">
                        <div className="transform transition-transform duration-300 group-hover:translate-x-2">
                          <h3 className="text-xl font-semibold text-lavender mb-2 font-heading">
                            {experience.position}
                          </h3>
                          <p className="text-purple-300 font-medium text-lg">
                            {experience.company}
                          </p>
                        </div>
                        <div className="mt-4 md:mt-0">
                          <span className="bg-gradient-to-r from-purple-500/20 to-violet-500/20 text-purple-200 px-4 py-2 rounded-full text-sm font-medium border border-purple-400/30 backdrop-blur-sm transform transition-all duration-300 hover:scale-105 hover:bg-gradient-to-r hover:from-purple-500/30 hover:to-violet-500/30">
                            {experience.duration}
                          </span>
                        </div>
                      </div>
                      
                      <p className="text-purple-100 mb-6 leading-relaxed opacity-90 transform transition-all duration-300 group-hover:translate-x-1">
                        {experience.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-3">
                        {experience.technologies.map((tech, techIndex) => (
                          <span
                            key={tech}
                            className="bg-gradient-to-r from-purple-600/30 to-violet-600/30 text-purple-200 px-4 py-2 rounded-full text-sm border border-purple-400/20 backdrop-blur-sm transform transition-all duration-300 hover:scale-110 hover:bg-gradient-to-r hover:from-purple-500/40 hover:to-violet-500/40 hover:border-purple-300/40 hover:text-white hover:shadow-lg hover:shadow-purple-500/30 cursor-default"
                            style={{
                              animationDelay: `${techIndex * 100}ms`
                            }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced 3D Call to Action */}
        <div className="mt-20 text-center animate-fade-in-up" style={{ animationDelay: '800ms' }}>
          <div className="bg-gradient-to-br from-purple-900/40 via-violet-900/30 to-purple-900/40 backdrop-blur-xl rounded-3xl shadow-2xl p-10 border border-purple-500/30 transform transition-all duration-700 hover:scale-105 hover:-translate-y-3 hover:rotate-1 hover:shadow-3xl hover:shadow-purple-500/40 group relative overflow-hidden">
            {/* Animated background overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-violet-600/20 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-gradient"></div>
            
            {/* Floating particles effect */}
            <div className="absolute top-4 left-4 w-2 h-2 bg-purple-400 rounded-full opacity-60 animate-float"></div>
            <div className="absolute top-8 right-8 w-1 h-1 bg-violet-400 rounded-full opacity-40 animate-pulse"></div>
            <div className="absolute bottom-6 left-12 w-1.5 h-1.5 bg-purple-300 rounded-full opacity-50" style={{ animation: 'float 4s ease-in-out infinite 1s' }}></div>
            
            <div className="relative z-10">
              <h3 className="text-3xl font-semibold text-lavender mb-6 font-heading transform transition-transform duration-500 group-hover:scale-105">
                <span className="bg-gradient-to-r from-purple-400 via-violet-400 to-purple-400 bg-clip-text text-transparent">
                  Let's Work Together
                </span>
              </h3>
              <p className="text-purple-200 mb-8 max-w-2xl mx-auto text-lg opacity-90 leading-relaxed transform transition-all duration-500 group-hover:translate-y-1">
                I'm always interested in new opportunities and exciting projects. 
                Let's discuss how I can help bring your ideas to life.
              </p>
              <a
                href="#contact"
                className="inline-block bg-gradient-to-r from-purple-600 to-violet-600 text-white px-10 py-4 rounded-2xl font-semibold text-lg transform transition-all duration-300 hover:scale-110 hover:-translate-y-1 hover:shadow-2xl hover:shadow-purple-500/50 hover:from-purple-500 hover:to-violet-500 active:scale-95 focus:outline-none focus:ring-4 focus:ring-purple-500/50 relative overflow-hidden group/button"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover/button:opacity-100 transition-opacity duration-300"></span>
                <span className="relative z-10 flex items-center">
                  Get In Touch
                  <svg className="ml-2 w-5 h-5 transform transition-transform duration-300 group-hover/button:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
