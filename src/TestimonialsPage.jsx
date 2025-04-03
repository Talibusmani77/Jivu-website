import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { ArrowLeft, ArrowRight, Star } from 'lucide-react';

// Sample testimonials data (you can replace this with your own data)
const sampleTestimonials = [
  {
    src: "/mobileimg2.jpg", 
    name: "John Doe",
    designation: "CEO, Example Corp",
    quote: "This is an amazing product that completely transformed our business strategy and helped us achieve unprecedented growth."
  },
  {
    src: "/mobileimg3.jpg", 
    name: "Jane Smith",
    designation: "Lead Designer, Innovation Inc",
    quote: "The intuitive design and powerful features make this tool an absolute game-changer for our team's productivity."
  },
  {
    src: "/mobileimg.jpg", 
    name: "Mike Johnson",
    designation: "Marketing Director, Global Solutions",
    quote: "I've never seen a solution that so effectively addresses the complex challenges we face in modern marketing."
  }
];

export const AnimatedTestimonials = ({
  testimonials = sampleTestimonials,
  autoplay = false
}) => {
  const [active, setActive] = useState(0);
  const [typedText, setTypedText] = useState('');
  const fullText = 'Testimonials';
  const componentRef = useRef(null);
  const headingRef = useRef(null);
  const testimonialsRef = useRef(null);

  // Check if component is in view
  const isHeadingInView = useInView(headingRef, { once: true });
  const areTestimonialsInView = useInView(testimonialsRef, { once: true });

  // Typing Effect
  useEffect(() => {
    if (isHeadingInView && typedText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText(fullText.slice(0, typedText.length + 1));
      }, 250);
      return () => clearTimeout(timeout);
    }
  }, [isHeadingInView, typedText]);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const isActive = (index) => {
    return index === active;
  };

  const randomRotateY = () => {
    return Math.floor(Math.random() * 21) - 10;
  };

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay]);

  return (
    <div 
      ref={componentRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden p-2 sm:p-4 md:p-6 lg:p-8 bg-gradient-to-br from-black via-gray-900 to-black"
    >
      {/* Heading Section */}
      <div ref={headingRef} className="w-full flex items-center justify-center py-3 sm:py-5 md:py-6 lg:py-8 mb-3 sm:mb-4 md:mb-6 lg:mb-8">
        <motion.h1 
          initial={{ opacity: 0, y: -50 }}
          animate={isHeadingInView ? { opacity: 1, y: 0 } : {}}
          transition={{ 
            type: "spring", 
            stiffness: 100, 
            damping: 15 
          }}
          className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold text-white flex flex-wrap items-center justify-center space-x-1 sm:space-x-2 md:space-x-3 lg:space-x-4"
        >
          <span className="whitespace-nowrap">What Our</span>
          <Star className="text-yellow-500 w-4 h-4 sm:w-5 sm:h-5 md:w-7 md:h-7 lg:w-9 lg:h-9" />
          <span 
            className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 whitespace-nowrap"
          >
            {typedText}
          </span>
        </motion.h1>
      </div>

      {/* Testimonials Container */}
      <motion.div 
        ref={testimonialsRef}
        initial={{ opacity: 0, y: 100 }}
        animate={areTestimonialsInView ? { opacity: 1, y: 0 } : {}}
        transition={{ 
          type: "spring", 
          stiffness: 100, 
          damping: 15,
          delay: 0.5
        }}
        className="w-full max-w-xs sm:max-w-sm md:max-w-2xl lg:max-w-4xl px-1 sm:px-2 md:px-4 lg:px-6"
      >
        <div className="bg-white/10 backdrop-blur-lg rounded-lg sm:rounded-xl md:rounded-2xl shadow-2xl overflow-hidden">
          <div className="grid md:grid-cols-2 gap-2 sm:gap-4 md:gap-6 lg:gap-8 p-2 sm:p-4 md:p-6 lg:p-8">
            {/* Image Column */}
            <div className="relative h-48 sm:h-56 md:h-64 lg:h-80 w-full">
              <AnimatePresence mode="popLayout">
                {testimonials.map((testimonial, index) => (
                  <motion.div
                    key={testimonial.src}
                    initial={{
                      opacity: 0,
                      scale: 0.9,
                      z: -100,
                      rotate: randomRotateY(),
                    }}
                    animate={{
                      opacity: isActive(index) ? 1 : 0.7,
                      scale: isActive(index) ? 1 : 0.95,
                      z: isActive(index) ? 0 : -100,
                      rotate: isActive(index) ? 0 : randomRotateY(),
                      zIndex: isActive(index)
                        ? 40
                        : testimonials.length + 2 - index,
                      y: isActive(index) ? [0, -40, 0] : 0,
                    }}
                    exit={{
                      opacity: 0,
                      scale: 0.9,
                      z: 100,
                      rotate: randomRotateY(),
                    }}
                    transition={{
                      duration: 0.4,
                      ease: "easeInOut",
                    }}
                    className="absolute inset-0 origin-bottom"
                  >
                    <img
                      src={testimonial.src}
                      alt={testimonial.name}
                      draggable={false}
                      className="h-full w-full rounded-lg sm:rounded-xl md:rounded-2xl lg:rounded-3xl object-cover object-center" 
                    />
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

           {/* Text Column */}
           <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={areTestimonialsInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.9, type: "spring", stiffness: 100 }}
              className="flex flex-col justify-between text-white"
            >
              <motion.div
                key={active}
                initial={{
                  y: 20,
                  opacity: 0,
                }}
                animate={{
                  y: 0,
                  opacity: 1,
                }}
                transition={{
                  duration: 0.2,
                  ease: "easeInOut",
                }}
                className="h-full flex flex-col"
              >
                <div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                    {testimonials[active].name}
                  </h3>
                  <p className="text-xs sm:text-sm text-white/70">
                    {testimonials[active].designation}
                  </p>
                  <motion.p className="mt-2 sm:mt-3 md:mt-5 lg:mt-8 text-sm sm:text-base md:text-lg text-white/80">
                    {testimonials[active].quote.split(" ").map((word, index) => (
                      <motion.span
                        key={index}
                        initial={{
                          filter: "blur(10px)",
                          opacity: 0,
                          y: 5,
                        }}
                        animate={{
                          filter: "blur(0px)",
                          opacity: 1,
                          y: 0,
                        }}
                        transition={{
                          duration: 0.2,
                          ease: "easeInOut",
                          delay: 0.02 * index,
                        }}
                        className="inline-block"
                      >
                        {word}&nbsp;
                      </motion.span>
                    ))}
                  </motion.p>
                </div>

                {/* Navigation Buttons */}
                <div className="flex gap-2 sm:gap-3 md:gap-4 mt-auto pt-4 sm:pt-6 md:pt-8 lg:pt-10">
                  <button
                    onClick={handlePrev}
                    className="group/button flex h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition"
                  >
                    <ArrowLeft 
                      className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 lg:h-6 lg:w-6 text-white transition-transform duration-300 group-hover/button:rotate-12" 
                    />
                  </button>
                  <button
                    onClick={handleNext}
                    className="group/button flex h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition"
                  >
                    <ArrowRight 
                      className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 lg:h-6 lg:w-6 text-white transition-transform duration-300 group-hover/button:-rotate-12" 
                    />
                  </button>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default function TestimonialsPage() {
  return <AnimatedTestimonials autoplay={true} />;
}