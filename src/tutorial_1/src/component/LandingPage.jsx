import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Code, 
  Layers, 
  Monitor, 
  ArrowRight,
  Menu,
  X 
} from 'lucide-react';

const LandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Olive Green Color Palette
  const colors = {
    primary: '#2C5F2D',     // Deep Olive Green
    secondary: '#708238',   // Moderate Olive Green
    accent: '#8A9A5B',      // Soft Olive Green
    background: '#F4F6F0',  // Very Light Olive Green (almost white)
    text: '#2C5F2D',        // Dark Olive Green for text
  };

  // Hero Section Animated Balls
  const HeroBalls = () => {
    const ballVariants = {
      initial: (props) => ({ 
        x: props.initialX,
        y: props.initialY,
        scale: 0.5,
        opacity: 0.6
      }),
      animate: (props) => ({
        x: [
          props.initialX, 
          props.initialX + (Math.random() * 100 - 50),
          props.initialX
        ],
        y: [
          props.initialY, 
          props.initialY + (Math.random() * 100 - 50),
          props.initialY
        ],
        scale: [0.5, 1.2, 0.7],
        opacity: [0.6, 0.8, 0.6],
        transition: {
          duration: Math.random() * 4 + 3,
          repeat: Infinity,
          repeatType: 'mirror',
          ease: "easeInOut"
        }
      })
    };

    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => {
          const size = Math.random() * 60 + 20; // Random size between 20-80px
          const shade = [
            'rgba(44, 95, 45, 0.3)',    // Transparent deep olive
            'rgba(112, 130, 56, 0.2)',  // Transparent moderate olive
            'rgba(138, 154, 91, 0.15)' // Transparent soft olive
          ][Math.floor(Math.random() * 3)];
          
          return (
            <motion.div
              key={i}
              custom={{
                initialX: Math.random() * window.innerWidth,
                initialY: Math.random() * 300
              }}
              className="absolute rounded-full"
              style={{
                width: `${size}px`,
                height: `${size}px`,
                backgroundColor: shade,
                boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
              }}
              variants={ballVariants}
              initial="initial"
              animate="animate"
            />
          );
        })}
      </div>
    );
  };

  // Navbar Component
  const Navbar = () => {
    return (
      <motion.nav 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md shadow-sm z-50"
      >
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-3"
          >
            <Code className={`text-[${colors.primary}]`} size={32} />
            <span className={`text-2xl font-bold text-[${colors.primary}]`}>
              DevCraft
            </span>
          </motion.div>

          <div className="hidden md:flex space-x-8 items-center">
            {['Home', 'Services', 'Portfolio', 'About', 'Contact'].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className={`text-[${colors.primary}] hover:text-[${colors.secondary}] transition-colors`}
              >
                {item}
              </motion.a>
            ))}
            <motion.button
              whileHover={{ scale: 1.05 }}
              className={`bg-[${colors.primary}] text-white px-5 py-2 rounded-full hover:bg-[${colors.secondary}] transition`}
            >
              Get Started
            </motion.button>
          </div>

          <div className="md:hidden">
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              whileTap={{ scale: 0.9 }}
            >
              {isMenuOpen ? <X className={`text-[${colors.primary}]`} /> : <Menu className={`text-[${colors.primary}]`} />}
            </motion.button>
          </div>
        </div>
      </motion.nav>
    );
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <div 
        className="relative pt-24 overflow-hidden"
        style={{ backgroundColor: colors.background }}
      >
        {/* Animated Balls */}
        <HeroBalls />

        {/* Hero Content */}
        <div className="container mx-auto px-4 py-16 grid md:grid-cols-2 items-center relative z-10">
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h1 
              className={`text-5xl font-bold text-[${colors.primary}] leading-tight`}
            >
              Crafting Digital Experiences
            </h1>
            <p 
              className={`text-xl text-[${colors.text}]/80 leading-relaxed`}
            >
              Transform your digital vision into powerful, elegant web solutions that drive your business forward with innovative design and cutting-edge technology.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex space-x-4">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`
                  flex items-center space-x-2 
                  bg-[${colors.primary}] 
                  text-white 
                  px-6 py-3 
                  rounded-full 
                  hover:bg-[${colors.secondary}] 
                  transition 
                  shadow-md
                  group
                `}
              >
                <span>Get Started</span>
                <ArrowRight 
                  className="transform transition-transform group-hover:translate-x-1" 
                  size={20} 
                />
              </motion.button>
              
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`
                  border-2 border-[${colors.primary}] 
                  text-[${colors.primary}] 
                  px-6 py-3 
                  rounded-full 
                  hover:bg-[${colors.primary}] 
                  hover:text-white 
                  transition
                  shadow-md
                `}
              >
                Our Portfolio
              </motion.button>
            </div>
          </motion.div>

          {/* Right Content - Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center items-center"
          >
            <motion.div
              whileHover={{ scale: 1.05, rotate: 2 }}
              className="rounded-2xl overflow-hidden shadow-2xl"
            >
              <img 
                src="./webimg.png" 
                alt="Web Development" 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Additional Sections would follow here */}
    </div>
  );
};

export default LandingPage;