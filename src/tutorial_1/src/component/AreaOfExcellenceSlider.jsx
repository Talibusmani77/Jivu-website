import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft, ArrowUpRight } from 'lucide-react';
import * as THREE from 'three';
import HALO from 'vanta/dist/vanta.halo.min';

const cards = [
  {
    id: 1,
    title: 'Web Development',
    backgroundImage: './mobileimg.jpg',
    description: 'Creating dynamic and responsive web applications with cutting-edge technologies.',
    skills: ['React', 'Node.js', 'GraphQL', 'Tailwind CSS'],
    color: 'bg-blue-500'
  },
  {
    id: 2,
    title: 'Cloud Solutions',
    backgroundImage: './mobileimg2.jpg',
    description: 'Designing scalable and secure cloud infrastructure for modern enterprises.',
    skills: ['AWS', 'Kubernetes', 'Docker', 'CI/CD'],
    color: 'bg-green-500'
  },
  {
    id: 3,
    title: 'Mobile Development',
    backgroundImage: './mobileimg3.jpg',
    description: 'Building cross-platform mobile applications with seamless user experiences.',
    skills: ['React Native', 'Flutter', 'Swift', 'Kotlin'],
    color: 'bg-purple-500'
  },
  {
    id: 4,
    title: 'AI & Machine Learning',
    backgroundImage: './mobileimg.jpg',
    description: 'Implementing advanced AI solutions and machine learning algorithms.',
    skills: ['Python', 'TensorFlow', 'PyTorch', 'Deep Learning'],
    color: 'bg-red-500'
  },
  {
    id: 5,
    title: 'Cybersecurity',
    backgroundImage: './mobileimg3.jpg',
    description: 'Protecting digital assets with comprehensive security strategies.',
    skills: ['Network Security', 'Ethical Hacking', 'Cryptography', 'Threat Analysis'],
    color: 'bg-yellow-500'
  },
  {
    id: 6,
    title: 'Data Science',
    backgroundImage: './mobileimg2.jpg',
    description: 'Extracting insights and value from complex data ecosystems.',
    skills: ['R', 'Python', 'SQL', 'Data Visualization'],
    color: 'bg-indigo-500'
  },
  {
    id: 7,
    title: 'Data Science',
    backgroundImage: './mobileimg.jpg',
    description: 'Extracting insights and value from complex data ecosystems.',
    skills: ['R', 'Python', 'SQL', 'Data Visualization'],
    color: 'bg-indigo-500'
  },
  {
    id: 8,
    title: 'Data Science',
    backgroundImage: './mobileimg2.jpg',
    description: 'Extracting insights and value from complex data ecosystems.',
    skills: ['R', 'Python', 'SQL', 'Data Visualization'],
    color: 'bg-indigo-500'
  },
  {
    id: 9,
    title: 'Data Science',
    backgroundImage: './mobileimg3.jpg',
    description: 'Extracting insights and value from complex data ecosystems.',
    skills: ['R', 'Python', 'SQL', 'Data Visualization'],
    color: 'bg-indigo-500'
  }
];

const AreaOfExcellenceSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const vantaRef = useRef(null);
  const vantaEffectRef = useRef(null);

  // Vanta Background Effect
  useEffect(() => {
    if (vantaRef.current) {
      vantaEffectRef.current = HALO({
        el: vantaRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        amplitudeFactor: 0.70,
        size: 1.20,
        THREE
      });
    }

    return () => {
      if (vantaEffectRef.current) {
        vantaEffectRef.current.destroy();
      }
    };
  }, []);

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % cards.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  // Handle navigation
  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? cards.length - 1 : prevIndex - 1
    );
  };

  // Get visible cards
  const getVisibleCards = () => {
    return [
      cards[(activeIndex - 1 + cards.length) % cards.length],
      cards[activeIndex],
      cards[(activeIndex + 1) % cards.length]
    ];
  };

  const visibleCards = getVisibleCards();

  return (
    <div 
      ref={vantaRef} 
      className="min-h-screen relative flex items-center justify-center overflow-hidden p-4"
    >
      {/* Card Container */}
      <div className="relative w-full max-w-4xl h-[600px] flex justify-center items-center">
        <AnimatePresence>
          {visibleCards.map((card, index) => {
            const isFocused = index === 1;
            
            return (
              <motion.div
                key={card.id}
                initial={{ 
                  x: index === 0 ? '-50%' : index === 2 ? '50%' : '0%',
                  scale: isFocused ? 1 : 0.8,
                  opacity: isFocused ? 1 : 0.6,
                  zIndex: isFocused ? 3 : 1
                }}
                animate={{ 
                  x: index === 0 ? '-50%' : index === 2 ? '50%' : '0%',
                  scale: isFocused ? 1 : 0.8,
                  opacity: isFocused ? 1 : 0.6,
                  zIndex: isFocused ? 3 : 1
                }}
                transition={{ 
                  duration: 0.7,
                  type: "spring",
                  damping: 15,
                  stiffness: 200
                }}
                className={`
                  absolute w-full max-w-md h-[500px] rounded-3xl shadow-2xl 
                  overflow-hidden transition-all duration-700 ease-in-out
                  ${isFocused ? 'ring-4 ring-white/20' : ''}
                `}
              >
                {/* Background Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ 
                    backgroundImage: `url(${card.backgroundImage})`,
                    filter: isFocused ? 'brightness(100%)' : 'brightness(60%)'
                  }}
                ></div>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white z-10">
                  {/* Title and Description */}
                  <div className="mb-6">
                    <h2 className="text-3xl font-bold mb-3 drop-shadow-lg">{card.title}</h2>
                    <p className="text-sm opacity-80 drop-shadow">{card.description}</p>
                  </div>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {card.skills.map((skill, skillIndex) => (
                      <span 
                        key={skillIndex} 
                        className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Navigation and Action */}
                  {isFocused && (
                    <div className="flex space-x-4">
                      <button 
                        onClick={handlePrev}
                        className="bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-full p-3 transition"
                      >
                        <ChevronLeft className="text-white w-6 h-6" />
                      </button>
                      <button 
                        onClick={handleNext}
                        className="bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-full p-3 transition"
                      >
                        <ChevronRight className="text-white w-6 h-6" />
                      </button>
                      <button 
                        className={`
                          flex items-center justify-center space-x-2 px-6 py-3 
                          ${card.color} text-white rounded-full 
                          hover:opacity-90 transition group
                        `}
                      >
                        <span>Learn More</span>
                        <ArrowUpRight 
                          className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition" 
                        />
                      </button>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>

        {/* Bottom Pagination */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2 z-20">
          {cards.map((_, dotIndex) => (
            <button
              key={dotIndex}
              onClick={() => setActiveIndex(dotIndex)}
              className={`
                w-3 h-3 rounded-full transition-all duration-300
                ${activeIndex === dotIndex 
                  ? 'bg-white w-6' 
                  : 'bg-white/30 hover:bg-white/50'}
              `}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AreaOfExcellenceSlider;