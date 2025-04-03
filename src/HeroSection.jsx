import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';

const HeroSection = () => {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowText(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const textVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.5,
      y: 50 
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 1,
        type: "spring",
        stiffness: 70,
        damping: 10,
        staggerChildren: 0.2
      }
    }
  };

  const wordVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.5,
      y: 50 
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.8,
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/vdo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Dark overlay to improve text readability */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Hero Content */}
      <AnimatePresence>
        {showText && (
          <motion.div 
            className="relative z-10 flex flex-col justify-center items-center h-full text-center px-4"
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, scale: 0.5 }}
            variants={textVariants}
          >
            <motion.div className="text-white">
              <motion.h1 
                className="text-5xl md:text-7xl font-bold mb-6 flex flex-wrap justify-center gap-4"
                variants={textVariants}
              >
                {['Digital', 'Transformation', 'Reimagined'].map((word, index) => (
                  <motion.span 
                    key={index}
                    variants={wordVariants}
                    className="inline-block"
                  >
                    {word}
                  </motion.span>
                ))}
              </motion.h1>

              <motion.p 
                className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto mb-8"
                variants={wordVariants}
              >
                Empowering businesses through innovative ERP solutions and cutting-edge web development
              </motion.p>

              <motion.div variants={wordVariants}>
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105">
                  Explore Our Services
                </button>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Futuristic Overlay Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-white/10 rounded-full"
            style={{
              width: `${Math.random() * 3}px`,
              height: `${Math.random() * 3}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: Math.random() * 100 - 50,
              y: Math.random() * 100 - 50,
              opacity: [0.1, 0.5, 0.1]
            }}
            transition={{
              duration: Math.random() * 10 + 5,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSection;