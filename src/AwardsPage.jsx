import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Award, Star, ArrowRight, ExternalLink, Calendar, Trophy, Medal } from 'lucide-react';

const AwardsPage = () => {
  // Company awards data
  const [awards, setAwards] = useState([
    {
      id: 1,
      title: "Innovation Excellence Award",
      organization: "Industry Tech Alliance",
      year: 2024,
      description: "Recognized for groundbreaking advancements in sustainable technology solutions that have significantly impacted the industry.",
      icon: "trophy",
      featured: true,
    },
    {
      id: 2,
      title: "Best Workplace Culture",
      organization: "Corporate Excellence Institute",
      year: 2023,
      description: "Honored for creating an inclusive, collaborative, and innovative workplace environment that fosters employee growth and satisfaction.",
      icon: "award",
      featured: true,
    },
    {
      id: 3,
      title: "Customer Satisfaction Excellence",
      organization: "Global Business Standards",
      year: 2023,
      description: "Awarded for maintaining exceptional customer service standards and achieving the highest satisfaction ratings in the industry.",
      icon: "star",
      featured: false,
    },
    {
      id: 4,
      title: "Sustainability Leadership Award",
      organization: "Environmental Business Coalition",
      year: 2022,
      description: "Recognized for implementing eco-friendly practices and developing sustainable business solutions that reduce environmental impact.",
      icon: "medal",
      featured: false,
    },
    {
      id: 5,
      title: "Technical Innovation Prize",
      organization: "National Technology Forum",
      year: 2022,
      description: "Awarded for pioneering innovations in product development that have set new standards in the industry.",
      icon: "award",
      featured: false,
    },
  ]);

  // Filter states
  const [activeYear, setActiveYear] = useState("All");
  const years = ["All", ...new Set(awards.map(award => award.year))].sort((a, b) => b - a);

  // Get icon component based on string name
  const getIconComponent = (iconName) => {
    switch(iconName) {
      case 'trophy': return Trophy;
      case 'medal': return Medal;
      case 'star': return Star;
      default: return Award;
    }
  };

  // Filtered awards
  const filteredAwards = activeYear === "All" 
    ? awards 
    : awards.filter(award => award.year === activeYear);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="bg-gradient-to-b from-gray-900 to-gray-800 min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8 text-gray-200">
      {/* Hero Section */}
      <motion.div 
        className="max-w-7xl mx-auto text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-6 inline-flex"
        >
          <Trophy className="h-16 w-16 text-amber-400" />
        </motion.div>
        <h1 className="text-4xl font-bold text-white sm:text-5xl md:text-6xl mb-4">Our Achievements</h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Recognition for our commitment to excellence, innovation, and leadership in the industry.
        </p>
      </motion.div>

      {/* Featured Awards */}
      <div className="max-w-7xl mx-auto mb-16">
        <motion.h2 
          className="text-2xl font-semibold text-white mb-8 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Featured Recognitions
        </motion.h2>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          {awards.filter(award => award.featured).map((award) => {
            const IconComponent = getIconComponent(award.icon);
            return (
              <motion.div
                key={award.id}
                variants={itemVariants}
                className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700 hover:border-amber-500 transition-all duration-300 shadow-lg hover:shadow-amber-900"
                whileHover={{ 
                  boxShadow: "0 0 15px 2px rgba(245, 158, 11, 0.3)",
                  scale: 1.01
                }}
              >
                <div className="p-8">
                  <div className="flex items-center mb-4">
                    <motion.div 
                      whileHover={{ rotate: 15 }}
                      className="bg-gray-700 p-3 rounded-full mr-4"
                    >
                      <IconComponent className="h-8 w-8 text-amber-400" />
                    </motion.div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{award.title}</h3>
                      <p className="text-gray-400 flex items-center">
                        <Calendar className="h-4 w-4 mr-1" /> {award.year}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-4">{award.description}</p>
                  <div className="flex items-center text-amber-400 font-medium">
                    <span>{award.organization}</span>
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Filter Bar */}
      <div className="max-w-7xl mx-auto mb-8">
        <div className="flex justify-center space-x-2 overflow-x-auto py-2">
          {years.map(year => (
            <motion.button
              key={year}
              onClick={() => setActiveYear(year)}
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                activeYear === year 
                  ? 'bg-gray-600 text-white' 
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
              whileHover={{ 
                scale: 1.05,
                boxShadow: activeYear === year ? "0 0 10px 1px rgba(245, 158, 11, 0.25)" : "none"
              }}
              whileTap={{ scale: 0.95 }}
            >
              {year}
            </motion.button>
          ))}
        </div>
      </div>

      {/* All Awards */}
      <motion.div 
        className="max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        <h2 className="text-2xl font-semibold text-white mb-8 text-center">All Awards & Recognition</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredAwards.map((award) => {
            const IconComponent = getIconComponent(award.icon);
            return (
              <motion.div
                key={award.id}
                variants={itemVariants}
                className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700 hover:border-amber-500 transition-all duration-300"
                whileHover={{ 
                  boxShadow: "0 0 12px 1px rgba(245, 158, 11, 0.25)",
                  scale: 1.02
                }}
              >
                <div className="p-6">
                  <div className="flex items-start mb-4">
                    <motion.div 
                      whileHover={{ rotate: 15 }}
                      className={`p-2 rounded-full mr-3 ${
                        award.featured ? 'bg-gray-700' : 'bg-gray-700'
                      }`}
                    >
                      <IconComponent className={`h-6 w-6 ${
                        award.featured ? 'text-amber-400' : 'text-gray-300'
                      }`} />
                    </motion.div>
                    <div>
                      <h3 className="text-lg font-bold text-white">{award.title}</h3>
                      <p className="text-sm text-gray-400">{award.organization}, {award.year}</p>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm">{award.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* Call to Action */}
      <motion.div 
        className="max-w-3xl mx-auto mt-16 text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <div className="bg-gradient-to-r from-gray-700 to-gray-800 rounded-xl shadow-xl p-8 text-white border border-gray-600">
          <h2 className="text-2xl font-bold mb-4">Join Our Award-Winning Team</h2>
          <p className="mb-6">Become part of our journey to excellence and innovation. We're always looking for talented individuals who share our passion and vision.</p>
          <motion.button 
            className="inline-flex items-center px-6 py-3 rounded-full bg-gray-900 text-white font-medium border border-gray-600 hover:border-amber-500 transition-colors duration-300"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 0 12px 1px rgba(245, 158, 11, 0.25)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            View Careers
            <ExternalLink className="ml-2 h-4 w-4" />
          </motion.button>
        </div>
      </motion.div>

      {/* Achievement Stats */}
      <div className="max-w-7xl mx-auto mt-16">
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <motion.div 
            className="bg-gray-800 p-6 rounded-lg shadow-md border border-gray-700"
            whileHover={{ 
              boxShadow: "0 0 12px 1px rgba(245, 158, 11, 0.25)",
              scale: 1.03
            }}
          >
            <motion.p 
              className="text-3xl font-bold text-amber-400"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1.5, duration: 0.5 }}
            >
              15+
            </motion.p>
            <p className="text-gray-300">Industry Awards</p>
          </motion.div>
          <motion.div 
            className="bg-gray-800 p-6 rounded-lg shadow-md border border-gray-700"
            whileHover={{ 
              boxShadow: "0 0 12px 1px rgba(245, 158, 11, 0.25)",
              scale: 1.03
            }}
          >
            <motion.p 
              className="text-3xl font-bold text-amber-400"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1.6, duration: 0.5 }}
            >
              5
            </motion.p>
            <p className="text-gray-300">Years of Excellence</p>
          </motion.div>
          <motion.div 
            className="bg-gray-800 p-6 rounded-lg shadow-md border border-gray-700"
            whileHover={{ 
              boxShadow: "0 0 12px 1px rgba(245, 158, 11, 0.25)",
              scale: 1.03
            }}
          >
            <motion.p 
              className="text-3xl font-bold text-amber-400"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1.7, duration: 0.5 }}
            >
              3
            </motion.p>
            <p className="text-gray-300">Global Recognitions</p>
          </motion.div>
          <motion.div 
            className="bg-gray-800 p-6 rounded-lg shadow-md border border-gray-700"
            whileHover={{ 
              boxShadow: "0 0 12px 1px rgba(245, 158, 11, 0.25)",
              scale: 1.03
            }}
          >
            <motion.p 
              className="text-3xl font-bold text-amber-400"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1.8, duration: 0.5 }}
            >
              #1
            </motion.p>
            <p className="text-gray-300">In Customer Satisfaction</p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default AwardsPage;