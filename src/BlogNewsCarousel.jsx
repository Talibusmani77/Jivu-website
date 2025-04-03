import { AnimatePresence, motion, useInView } from 'framer-motion';
import {
    Clock,
    Star,
    X
} from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react';

const BlogNewsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedPost, setSelectedPost] = useState(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 });

  // Typing Effect for Heading
  const [typedText, setTypedText] = useState('');
  const fullText = 'Blogs & News';

  const blogPosts = [
    {
      id: 1,
      title: "The Future of 3D Design",
      excerpt: "Exploring cutting-edge trends in digital design and visualization.",
      category: "Design",
      date: "March 15, 2025",
      readTime: "5 min read",
      image: "/mobileimg.jpg",
      fullContent: `
        The landscape of 3D design is rapidly evolving, driven by technological advancements and creative innovations. 
        This article delves deep into the emerging trends that are reshaping how we conceptualize and create three-dimensional experiences.

        Key Highlights:
        - Artificial Intelligence in 3D Modeling
        - Real-time Rendering Technologies
        - Sustainable Design Practices
        - Virtual and Augmented Reality Integration
      `
    },
    {
      id: 2,
      title: "Innovations in Web Animation",
      excerpt: "How modern web technologies are transforming user interfaces.",
      category: "Technology",
      date: "March 20, 2025",
      readTime: "7 min read",
      image: "/mobileimg2.jpg",
      fullContent: `
        Web animations have transcended simple hover effects and transitions. 
        Modern web technologies are enabling more dynamic, interactive, and meaningful user experiences.

        Breakthrough Technologies:
        - Framer Motion for Reactive Animations
        - WebGL and Three.js Integrations
        - Micro-interactions and Storytelling
        - Performance-optimized Animations
      `
    },
    {
      id: 3,
      title: "Sustainable Design Practices",
      excerpt: "Implementing eco-friendly approaches in digital and physical design.",
      category: "Sustainability",
      date: "March 25, 2025",
      readTime: "6 min read",
      image: "/mobileimg3.jpg",
      fullContent: `
        Sustainability is no longer a trend but a necessity in modern design. 
        This exploration covers how designers are integrating eco-conscious principles into their work.

        Key Focus Areas:
        - Renewable Materials
        - Energy-Efficient Design
        - Circular Economy Principles
        - Minimal Waste Strategies
      `
    },
    {
      id: 4,
      title: "AI in Creative Industries",
      excerpt: "Exploring the transformative impact of artificial intelligence on creativity.",
      category: "Technology",
      date: "March 30, 2025",
      readTime: "8 min read",
      image: "/mobileimg.jpg",
      fullContent: `
        Artificial Intelligence is revolutionizing creative processes across multiple industries. 
        From generative art to algorithmic design, AI is pushing the boundaries of human creativity.

        Emerging Trends:
        - Generative Design Algorithms
        - AI-Assisted Creative Tools
        - Machine Learning in Art
        - Ethical Considerations of AI Creativity
      `
    },
    {
      id: 5,
      title: "Urban Design Innovations",
      excerpt: "Reimagining city spaces through cutting-edge architectural concepts.",
      category: "Design",
      date: "April 5, 2025",
      readTime: "7 min read",
      image: "/mobileimg3.jpg",
      fullContent: `
        Modern urban design is about creating more livable, sustainable, and intelligent cities. 
        This article explores groundbreaking approaches to urban development.

        Revolutionary Concepts:
        - Smart City Technologies
        - Green Urban Infrastructure
        - Community-Centric Design
        - Adaptive Urban Spaces
      `
    },
    {
      id: 6,
      title: "Green Technology Breakthroughs",
      excerpt: "Latest advancements in sustainable and eco-friendly technologies.",
      category: "Sustainability",
      date: "April 10, 2025",
      readTime: "6 min read",
      image: "/mobileimg2.jpg",
      fullContent: `
        Technological innovations are key to addressing global environmental challenges. 
        This comprehensive look at green technologies offers hope for a sustainable future.

        Cutting-Edge Developments:
        - Renewable Energy Solutions
        - Carbon Capture Technologies
        - Sustainable Transportation
        - Eco-Innovative Materials
      `
    },
    {
      id: 7,
      title: "Digital Transformation Strategies",
      excerpt: "How businesses are leveraging technology to stay competitive.",
      category: "Technology",
      date: "April 15, 2025",
      readTime: "7 min read",
      image: "/mobileimg3.jpg",
      fullContent: `
        Digital transformation is more than just adopting new technologies. 
        It's about fundamentally rethinking how businesses operate and deliver value.

        Strategic Approaches:
        - Cloud Computing Migrations
        - Data-Driven Decision Making
        - Customer Experience Optimization
        - Agile Business Models
      `
    },
    {
      id: 8,
      title: "Future of Remote Collaboration",
      excerpt: "Innovative tools and practices shaping the future of work.",
      category: "Technology",
      date: "April 20, 2025",
      readTime: "6 min read",
      image: "/mobileimg2.jpg",
      fullContent: `
        Remote work has evolved dramatically, driven by technological advancements and changing workplace dynamics. 
        This article explores the cutting-edge tools and strategies reshaping collaboration.

        Key Innovations:
        - Advanced Collaboration Platforms
        - Virtual Reality Meeting Spaces
        - AI-Powered Productivity Tools
        - Flexible Work Ecosystems
      `
    },
    {
      id: 9,
      title: "Future of Remote Collaboration",
      excerpt: "Innovative tools and practices shaping the future of work.",
      category: "Technology",
      date: "April 20, 2025",
      readTime: "6 min read",
      image: "/mobileimg2.jpg",
      fullContent: `
        Remote work has evolved dramatically, driven by technological advancements and changing workplace dynamics. 
        This article explores the cutting-edge tools and strategies reshaping collaboration.

        Key Innovations:
        - Advanced Collaboration Platforms
        - Virtual Reality Meeting Spaces
        - AI-Powered Productivity Tools
        - Flexible Work Ecosystems
      `
    }
  ];

  // Typing Effect
  useEffect(() => {
    if (isInView && typedText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText(fullText.slice(0, typedText.length + 1));
      }, 250);
      return () => clearTimeout(timeout);
    }
  }, [typedText, isInView]);

  // Calculate total number of pages
  const totalPages = Math.ceil(blogPosts.length / 3);

  // Auto-advance carousel logic
  const [autoAdvanceIndex, setAutoAdvanceIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setAutoAdvanceIndex((prevIndex) => 
        (prevIndex + 1) % totalPages
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [totalPages]);

  // Get visible posts for current page
  const getVisiblePosts = () => {
    const startIndex = autoAdvanceIndex * 3;
    return blogPosts.slice(startIndex, startIndex + 3);
  };

  const handleReadMore = (post) => {
    setSelectedPost(post);
  };

  const closeDetailView = () => {
    setSelectedPost(null);
  };

  return (
    <div 
      ref={ref}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden py-5 bg-gradient-to-b from-gray-900 via-gray-900 to-black
dark"
    >
      {/* Header with Animation */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ 
          opacity: isInView ? 1 : 0, 
          y: isInView ? 0 : 50 
        }}
        transition={{ 
          duration: 0.7,
          type: "spring",
          damping: 15,
          stiffness: 200
        }}
        className="w-full flex items-center justify-center mb-10"
      >
        <div className="text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white flex flex-wrap items-center justify-center space-x-2 sm:space-x-4 " >
            <span className="whitespace-nowrap">Latest</span>
            <Star className="text-yellow-500 w-6 h-6 sm:w-8 sm:h-8 md:w-9 md:h-9" />
            <span 
              className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 whitespace-nowrap py-8 "
            >
              {typedText}
            </span>
          </h1>
        </div>
      </motion.div>

      <div className="relative w-full max-w-6xl">
        {/* 3D Carousel Container */}
        <AnimatePresence mode="popLayout">
          <motion.div 
            key={autoAdvanceIndex}
            className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 relative mb-8 justify-center"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ 
              type: "spring", 
              stiffness: 300, 
              damping: 30 
            }}
          >
            {getVisiblePosts().map((post, index) => (
              <motion.div
                key={post.id}
                initial={{
                  opacity: 0,
                  rotateX: 90,
                  rotateY: 20 * (index - 1),
                  scale: 0.8,
                  x: (index - 1) * 50,
                  perspective: 1000
                }}
                animate={{
                  opacity: 1,
                  rotateX: 0,
                  rotateY: 0,
                  scale: 1,
                  x: 0,
                  transition: {
                    duration: 0.7,
                    type: "spring",
                    damping: 12,
                    stiffness: 100
                  }
                }}
                whileHover={{
                  scale: 1.05,
                  rotateX: 5,
                  rotateY: 5,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                  transition: { 
                    type: "spring", 
                    stiffness: 300 
                  }
                }}
                className="w-full max-w-sm mx-auto transform-style-3d"
                style={{
                  transformStyle: 'preserve-3d',
                  perspective: '1000px'
                }}
              >
                <div 
                  className="bg-white/10 backdrop-blur-sm shadow-2xl rounded-xl overflow-hidden 
                  transition-all duration-300 h-full flex flex-col border border-white/20"
                  style={{
                    transform: 'translateZ(50px)',
                    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
                  }}
                >
                  <div 
                    className="w-full h-48 overflow-hidden"
                    style={{
                      transform: 'translateZ(30px)',
                      perspective: '1000px'
                    }}
                  >
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    />
                  </div>
                  
                  <div 
                    className="p-4 sm:p-5 flex-grow flex flex-col text-white"
                    style={{
                      transform: 'translateZ(20px)'
                    }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xs text-white/80 font-semibold">
                        {post.category}
                      </span>
                      <div className="flex items-center text-white/70 text-xs">
                        <Clock className="mr-1" size={12} />
                        {post.readTime}
                      </div>
                    </div>
                    <h3 className="text-base font-bold mb-2 text-white line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-white/80 text-sm mb-3 line-clamp-2 flex-grow">
                      {post.excerpt}
                    </p>
                    <div className="flex justify-between items-center mt-auto">
                      <span className="text-xs text-white/60">
                        {post.date}
                      </span>
                      <motion.button
                        onClick={() => handleReadMore(post)}
                        whileHover={{ x: 5 }}
                        className="text-white font-semibold 
                          text-xs flex items-center hover:text-white/80"
                      >
                        Read More
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Dot Indicators */}
        <div className="flex justify-center space-x-3 mt-6">
          {[...Array(totalPages)].map((_, index) => (
            <motion.button
              key={index}
              onClick={() => setAutoAdvanceIndex(index)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className={`
                w-3 h-3 rounded-full transition-colors duration-300
                ${autoAdvanceIndex === index 
                  ? 'bg-white' 
                  : 'bg-white/30 hover:bg-white/50'
                }
              `}
            />
          ))}
        </div>
      </div>

      {/* Detailed Post View */}
      <AnimatePresence mode="wait">
        {selectedPost && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center 
              bg-black/40 backdrop-blur-sm p-4 overflow-y-auto"
            onClick={closeDetailView}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl w-full max-w-5xl max-h-[90vh] 
                overflow-y-auto relative shadow-2xl border border-white/20"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button 
              onClick={closeDetailView}
  className="absolute top-4 right-4 z-10 
    bg-white/20 rounded-full p-2 hover:bg-white/30 
    transition-colors shadow-md"
>
  <X className="text-white" size={24} />
</button>

              {/* Post Details */}
              <div className="grid md:grid-cols-2 gap-0">
                {/* Image Section */}
                <div className="h-[500px] overflow-hidden">
                  <img 
                    src={selectedPost.image} 
                    alt={selectedPost.title} 
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content Section */}
                <div className="p-8 overflow-y-auto max-h-[500px] text-white">
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-white/80 font-semibold">
                      {selectedPost.category}
                    </span>
                    <div className="flex items-center text-white/70">
                      <Clock className="mr-2" size={16} />
                      {selectedPost.readTime}
                    </div>
                  </div>

                  <h2 className="text-3xl font-bold mb-4 text-white">
                    {selectedPost.title}
                  </h2>

                  <div className="text-white/80 space-y-4">
                    <p className="text-lg font-medium">{selectedPost.excerpt}</p>
                    <div className="border-t border-white/20 pt-4 mt-4">
                      <p className="whitespace-pre-line leading-relaxed">
                        {selectedPost.fullContent}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 flex justify-between items-center">
                    <span className="text-sm text-white/60">
                      Published on: {selectedPost.date}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default BlogNewsCarousel;