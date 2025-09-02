'use client';

import { contactInfo } from '@/lib/data';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-white to-lavender-50">
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
            Let's Connect
          </motion.h3>
          <motion.p 
            className="text-lg text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            I'm always open to discussing new opportunities, creative projects, 
              or just having a chat about technology and development.
          </motion.p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Information */}
          <div className="text-center">

         
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <motion.div 
                className="flex flex-col items-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-blue-600 text-3xl">📧</span>
                </div>
                <h5 className="font-semibold text-gray-900 text-lg mb-2">Email</h5>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200"
                >
                  {contactInfo.email}
                </a>
              </motion.div>

              {contactInfo.phone && (
                <motion.div 
                  className="flex flex-col items-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <span className="text-green-600 text-3xl">📱</span>
                  </div>
                  <h5 className="font-semibold text-gray-900 text-lg mb-2">Phone</h5>
                  <a
                    href={`tel:${contactInfo.phone}`}
                    className="text-green-600 hover:text-green-700 font-medium transition-colors duration-200"
                  >
                    {contactInfo.phone}
                  </a>
                </motion.div>
              )}

              <motion.div 
                className="flex flex-col items-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-purple-600 text-3xl">📍</span>
                </div>
                <h5 className="font-semibold text-gray-900 text-lg mb-2">Location</h5>
                <p className="text-gray-600 font-medium">{contactInfo.location}</p>
              </motion.div>
            </div>

            {/* Social Links */}
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h4 className="font-semibold text-gray-900 text-xl mb-6 " style={{marginTop:"20px"}}>Follow Me</h4>
              <div className="flex justify-center space-x-8">
                {contactInfo.socialLinks.github && (
                  <a
                    href={contactInfo.socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 bg-gray-800 rounded-xl flex items-center justify-center text-white hover:bg-gray-700 transition-all duration-200 transform hover:scale-110"
                  >
                    <span className="text-2xl">🐙</span>
                  </a>
                )}
                {contactInfo.socialLinks.linkedin && (
                  <a
                    href={contactInfo.socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center text-white hover:bg-blue-700 transition-all duration-200 transform hover:scale-110"
                  >
                    <span className="text-2xl">💼</span>
                  </a>
                )}
                {contactInfo.socialLinks.twitter && (
                  <a
                    href={contactInfo.socialLinks.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 bg-blue-400 rounded-xl flex items-center justify-center text-white hover:bg-blue-500 transition-all duration-200 transform hover:scale-110"
                  >
                    <span className="text-2xl">🐦</span>
                  </a>
                )}
                {contactInfo.socialLinks.website && (
                  <a
                    href={contactInfo.socialLinks.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 bg-green-600 rounded-xl flex items-center justify-center text-white hover:bg-green-700 transition-all duration-200 transform hover:scale-110"
                  >
                    <span className="text-2xl">🌐</span>
                  </a>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
