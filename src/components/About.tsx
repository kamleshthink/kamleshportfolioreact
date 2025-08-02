import React from 'react';
import { motion } from 'framer-motion';
import { 
  CheckCircleIcon,
  AcademicCapIcon,
  BriefcaseIcon,
  HeartIcon
} from '@heroicons/react/24/outline';

const About: React.FC = () => {
  const achievements = [
    "5+ years of professional development experience",
    "50+ successful projects delivered",
    "Expert in React, TypeScript, and Node.js",
    "Machine Learning and AI enthusiast",
    "Open source contributor",
    "Mentored 10+ junior developers"
  ];

  const interests = [
    "Artificial Intelligence & Machine Learning",
    "Web Development & Modern Frameworks",
    "Mobile App Development",
    "Cloud Computing & DevOps",
    "Open Source Projects",
    "Reading Tech Blogs & Research Papers"
  ];

  return (
    <section id="about" className="section-padding bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A passionate software engineer with expertise in full-stack development and machine learning
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-purple-500 rounded-3xl blur-2xl opacity-30 animate-pulse"></div>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/images/kamlesh-about.jpg"
                  alt="Kamlesh Sharma"
                  className="w-full h-auto object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://via.placeholder.com/600x800/3B82F6/FFFFFF?text=Kamlesh+Sharma';
                  }}
                />
              </div>
            </div>
          </motion.div>

          {/* Right Content - Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Who I Am
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                I'm a passionate Software Engineer with over 5 years of experience in building 
                innovative web applications and machine learning solutions. My journey in technology 
                started with a curiosity to understand how things work, which has evolved into a 
                deep passion for creating impactful software solutions.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                I specialize in full-stack development using modern technologies like React, 
                TypeScript, Node.js, and Python. My expertise extends to machine learning, 
                where I work with TensorFlow, PyTorch, and various AI/ML frameworks to build 
                intelligent applications.
              </p>
            </div>

            {/* Achievements */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <CheckCircleIcon className="w-6 h-6 text-primary-600" />
                Key Achievements
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-2 text-gray-600 dark:text-gray-400"
                  >
                    <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                    <span className="text-sm">{achievement}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Interests */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <HeartIcon className="w-6 h-6 text-primary-600" />
                Areas of Interest
              </h3>
              <div className="flex flex-wrap gap-2">
                {interests.map((interest, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium"
                  >
                    {interest}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 pt-6">
              {[
                { icon: AcademicCapIcon, number: "B.Tech", label: "Computer Science" },
                { icon: BriefcaseIcon, number: "5+", label: "Years Experience" },
                { icon: HeartIcon, number: "50+", label: "Projects" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="text-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg"
                >
                  <stat.icon className="w-8 h-8 text-primary-600 mx-auto mb-2" />
                  <div className="text-lg font-bold text-gray-900 dark:text-white">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 