import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Star } from 'lucide-react';

const TeamPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [typedText, setTypedText] = useState('');
  const headingRef = useRef(null);
  const componentRef = useRef(null);

  const teamMembers = [
    {
      name: "John May",
      role: "Dev Lead",
      image: "/man.jpg",
      description: "Innovative leader driving our technical strategy and team excellence."
    },
    {
      name: "Emma Rodriguez",
      role: "Product Manager",
      image: "/girl.png",
      description: "Visionary strategist connecting user needs with cutting-edge solutions."
    },
    {
      name: "Alex Chen",
      role: "Senior Designer",
      image: "/man.jpg",
      description: "Creative mind transforming complex ideas into intuitive experiences."
    },
    {
      name: "Sarah Thompson",
      role: "UX Researcher",
      image: "/girl.png",
      description: "User experience expert uncovering insights that drive innovation."
    },
    {
      name: "Michael Wong",
      role: "Cloud Architect",
      image: "/man.jpg",
      description: "Technical genius building scalable and robust cloud infrastructures."
    }
  ];

  // Check if component is in view
  const isInView = useInView(componentRef, { once: false, amount: 0.1 });

  // Typing Effect
  useEffect(() => {
    let timeoutId;
    if (isInView && typedText.length < 'Team'.length) {
      timeoutId = setTimeout(() => {
        setTypedText(prevText => 'Team'.slice(0, prevText.length + 1));
      }, 200);
    }
    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [isInView, typedText]);

  // Team Carousel Rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        (prevIndex + 1) % teamMembers.length
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [teamMembers.length]);

  const getImagePosition = (index) => {
    const offset = index - currentIndex;
    const totalMembers = teamMembers.length;
    
    const normalizedOffset = 
      ((offset + Math.floor(totalMembers / 2)) + totalMembers) % totalMembers - 
      Math.floor(totalMembers / 2);

    return normalizedOffset;
  };

  return (
    <div 
      ref={componentRef}
      className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-900 to-black flex flex-col items-center justify-center relative overflow-hidden"
    >
      {/* Heading Section */}
      <motion.div 
        initial={{ opacity: 0, y: -50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ 
          type: "spring", 
          stiffness: 120, 
          damping: 20 
        }}
        className="w-full flex items-center justify-center py-4 z-10"
      >
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white flex flex-wrap items-center justify-center space-x-2 sm:space-x-4">
          <span className="whitespace-nowrap">Our</span>
          <Star className="text-yellow-500 w-6 h-6 sm:w-8 sm:h-8 md:w-9 md:h-9" />
          <span 
            className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 whitespace-nowrap"
          >
            {typedText}
            <span className="opacity-50">|</span>
          </span>
        </h1>
      </motion.div>
      
      <div className="container mx-auto px-4 relative flex flex-col items-center z-10">
        {/* Team Members Carousel */}
        <div className="relative w-full max-w-4xl h-[400px] md:h-[500px] flex justify-center items-center">
          {teamMembers.map((member, index) => {
            const position = getImagePosition(index);
            
            return (
              <motion.div
                key={index}
                className="absolute transition-all duration-700 ease-in-out"
                animate={{
                  scale: position === 0 ? 1 : 0.7,
                  x: position * (window.innerWidth > 768 ? 250 : 150),
                  y: Math.abs(position) * 20,
                  zIndex: position === 0 ? 30 : 10,
                  opacity: position === 0 ? 1 : 0.5
                }}
                transition={{ 
                  type: "spring", 
                  stiffness: 350, 
                  damping: 35 
                }}
              >
                <div className="flex flex-col items-center">
                  <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-gray-700 shadow-2xl mb-4">
                    <img 
                      src={member.image}
                      loading='lazy'
                      alt={member.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <motion.div
                    className={`text-center transition-all duration-500 px-4 ${
                      position === 0 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ 
                      opacity: position === 0 ? 1 : 0,
                      y: position === 0 ? 0 : 20
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-1">
                      {member.name}
                    </h3>
                    <p className="text-xs md:text-sm text-gray-400 mb-2">
                      {member.role}
                    </p>
                    <p className="text-xs text-gray-500 max-w-xs mx-auto">
                      {member.description}
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Subtle Background Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-white/10 rounded-full"
            style={{
              width: Math.random() * 2,
              height: Math.random() * 2,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
            animate={{
              x: Math.random() * 15 - 7,
              y: Math.random() * 15 - 7,
              opacity: [0.1, 0.2, 0.1]
            }}
            transition={{
              duration: Math.random() * 4 + 4,
              repeat: Infinity,
              repeatType: "mirror"
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default TeamPage;