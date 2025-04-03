import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, MapPin, Award, Star, Rocket, Globe } from 'lucide-react';

const timelineData = [
  {
    year: 2015,
    title: "Startup Inception",
    description: "Pioneering our vision in the tech landscape",
    category: "Foundation",
    icon: <Rocket size={28} className="text-indigo-400" />,
    details: [
      "3 visionary founders united by a common dream",
      "Secured initial seed funding of $500,000",
      "Developed groundbreaking first prototype"
    ],
    color: "bg-indigo-900/50 border-indigo-700"
  },
  {
    year: 2017,
    title: "First Major Breakthrough",
    description: "Disrupting the market with innovative solutions",
    category: "Growth",
    icon: <Star size={28} className="text-emerald-400" />,
    details: [
      "Team expanded to 25 passionate professionals",
      "Strategic partnership with global tech leader",
      "Successful Series A funding round"
    ],
    color: "bg-emerald-900/50 border-emerald-700"
  },
  {
    year: 2019,
    title: "Global Expansion",
    description: "Breaking boundaries and scaling internationally",
    category: "Expansion",
    icon: <Globe size={28} className="text-cyan-400" />,
    details: [
      "Established offices across 3 continents",
      "Reached milestone of 100,000 active users",
      "Acclaimed 'Innovation of the Year' award"
    ],
    color: "bg-cyan-900/50 border-cyan-700"
  },
  {
    year: 2021,
    title: "Market Leadership",
    description: "Transforming industry standards and expectations",
    category: "Achievement",
    icon: <Award size={28} className="text-amber-400" />,
    details: [
      "Successful IPO on NASDAQ",
      "Grew to 500+ global team members",
      "Recognized as industry transformation leader"
    ],
    color: "bg-amber-900/50 border-amber-700"
  },
  {
    year: 2023,
    title: "Future Innovation",
    description: "Pushing technological boundaries",
    category: "Innovation",
    icon: <MapPin size={28} className="text-pink-400" />,
    details: [
      "Heavy investment in AI and machine learning",
      "Advanced R&D infrastructure established",
      "Commitment to sustainable technological development"
    ],
    color: "bg-pink-900/50 border-pink-700"
  }
];

const Timeline = () => {
  const [activeYear, setActiveYear] = useState(timelineData[0].year);
  const timelineContainerRef = useRef(null);
  const elementRefs = useRef({});

  const scrollToYear = (year) => {
    const element = elementRefs.current[year];
    if (element && timelineContainerRef.current) {
      // Use scrollIntoView for more precise scrolling
      element.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start',
        inline: 'nearest'
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (!timelineContainerRef.current) return;

      const scrollPosition = timelineContainerRef.current.scrollTop;
      const containerHeight = timelineContainerRef.current.scrollHeight;
      const viewportHeight = timelineContainerRef.current.clientHeight;

      // Check if scrolled to bottom
      if (scrollPosition + viewportHeight >= containerHeight - 100) {
        // If scrolled to bottom, activate the last year
        setActiveYear(timelineData[timelineData.length - 1].year);
        return;
      }

      // Find the year closest to the current scroll position
      let closestYear = timelineData[0].year;
      let minDistance = Infinity;

      timelineData.forEach((item) => {
        const element = elementRefs.current[item.year];
        if (element) {
          const elementTop = element.offsetTop;
          const distance = Math.abs(elementTop - scrollPosition);
          
          if (distance < minDistance) {
            minDistance = distance;
            closestYear = item.year;
          }
        }
      });

      setActiveYear(closestYear);
    };

    const currentRef = timelineContainerRef.current;
    if (currentRef) {
      currentRef.addEventListener('scroll', handleScroll);
      return () => currentRef.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <div 
      className="relative min-h-screen  to-black text-gray-100 flex bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden"
      // Add overflow hidden to prevent scroll bleed
    >
      {/* Years Column */}
      <div className="w-1/4 sticky top-0 h-screen flex items-center justify-center  ">
        <div className="space-y-8 w-full max-w-[200px] mx-auto">
          {timelineData.map((item) => (
            <div
              key={item.year}
              className="relative cursor-pointer group text-center"
              onClick={() => scrollToYear(item.year)}
            >
              <div 
                className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center text-xl font-bold 
                  border-2 shadow-lg transform transition-all duration-300
                  ${activeYear === item.year 
                    ? 'bg-gradient-to-br from-blue-600 to-purple-600 text-white border-transparent scale-110' 
                    : 'bg-gray-800 text-gray-400 border-gray-700 group-hover:border-blue-500 group-hover:scale-105'
                  }`}
              >
                {item.year}
              </div>
              {/* Connecting Line */}
              {item.year !== timelineData[timelineData.length - 1].year && (
                <div className="absolute left-1/2 -translate-x-1/2 w-0.5 h-8 bg-gray-700 opacity-50 -bottom-8"></div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Timeline Content Column */}
      <div 
        ref={timelineContainerRef}
        className="w-3/4 h-screen overflow-y-auto relative pr-16 pl-28 pt-32 pb-32"
        // Prevent overflow and scroll bleed
        style={{ 
          scrollbarWidth: 'none', 
          msOverflowStyle: 'none',
          isolation: 'isolate', // CSS isolation to prevent shadow bleed
          position: 'relative',
          zIndex: 1
        }}
      >
        {/* Gradient Overlay */}
        <div className="fixed top-0 left-1/4 right-0 h-32 bg-gradient-to-b from-black/80 to-transparent pointer-events-none z-10"></div>
        {/* <div className="fixed bottom-0 left-1/4 right-0 h-32 bg-gradient-to-t from-black/80 to-transparent pointer-events-none z-10"></div> */}

        <AnimatePresence>
          {timelineData.map((item) => (
            <motion.div
              ref={(el) => elementRefs.current[item.year] = el}
              key={item.year}
              id={`year-${item.year}`}
              className={`timeline-year mb-16 p-8 rounded-xl shadow-2xl border-l-4 transition-all duration-500 
                ${item.color} 
                ${activeYear === item.year 
                  ? 'opacity-100 translate-x-0' 
                  : 'opacity-30 -translate-x-10'}`}
              initial={{ opacity: 0, x: -50 }}
              animate={{ 
                opacity: activeYear === item.year ? 1 : 0.3, 
                x: activeYear === item.year ? 0 : -50 
              }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center mb-4 space-x-4">
                <div>{item.icon}</div>
                <div>
                  <h2 className="text-2xl font-bold text-white">{item.title}</h2>
                  <span className="text-sm text-gray-300 uppercase tracking-wider">
                    {item.category}
                  </span>
                </div>
              </div>
              <p className="text-gray-300 mb-4 italic">{item.description}</p>
              <ul className="space-y-2 pl-4 list-disc text-gray-200">
                {item.details.map((detail, index) => (
                  <li key={index} className="text-sm">{detail}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Timeline;