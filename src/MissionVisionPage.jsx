import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Code, 
  Shield, 
  Users, 
  BarChart, 
  Globe, 
  Zap, 
  Lightbulb, 
  Target, 
  TrendingUp, 
  CheckCircle, 
  Award,
  Briefcase,
  BookOpen,
  Heart
} from 'lucide-react';

const MissionVisionPage = () => {
  const [activeSection, setActiveSection] = useState('mission');
  
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };
  
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };
  
  const slideInFromLeft = {
    hidden: { x: -30, opacity: 0 },
    visible: { 
      x: 0, 
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: 80, 
        damping: 15 
      }
    }
  };
  
  const slideInFromRight = {
    hidden: { x: 30, opacity: 0 },
    visible: { 
      x: 0, 
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: 80, 
        damping: 15 
      }
    }
  };
  
  const scaleUp = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };
  
  // Content sections
  const sections = {
    mission: {
      title: "Our Mission",
      subtitle: "Driving digital transformation through innovative solutions",
      description: "At TechSolutions, our mission is to empower businesses through cutting-edge technology solutions that solve complex challenges and drive sustainable growth. We are committed to delivering excellence in every project, fostering innovation, and building lasting partnerships with our clients.",
      values: [
        {
          icon: <Shield size={24} />,
          title: "Trust & Reliability",
          description: "We build relationships based on trust, delivering reliable solutions that our clients can depend on. Our commitment to security, quality, and transparency ensures long-term partnerships."
        },
        {
          icon: <Zap size={24} />,
          title: "Innovation",
          description: "We constantly push the boundaries of what's possible, embracing emerging technologies to create forward-thinking solutions that give our clients a competitive edge in their markets."
        },
        {
          icon: <Users size={24} />,
          title: "Client-Centered Approach",
          description: "We place our clients at the center of everything we do, tailoring our solutions to meet their unique needs and objectives. We listen, collaborate, and adapt to ensure optimal outcomes."
        },
        {
          icon: <CheckCircle size={24} />,
          title: "Quality Excellence",
          description: "We maintain the highest standards of quality in our deliverables, ensuring robust, scalable, and secure solutions that exceed expectations and provide lasting value to our clients."
        }
      ]
    },
    vision: {
      title: "Our Vision",
      subtitle: "Shaping the future of digital enterprise",
      description: "We envision a future where businesses of all sizes can harness the full potential of technology to transform their operations, reach new markets, and create exceptional value. Our vision is to be the global leader in innovative software solutions that drive meaningful business outcomes and technological advancement.",
      pillars: [
        {
          icon: <Globe size={24} />,
          title: "Global Impact",
          description: "Expanding our reach to empower businesses worldwide with transformative technology solutions that address the most pressing challenges across diverse markets and industries."
        },
        {
          icon: <TrendingUp size={24} />,
          title: "Continuous Growth",
          description: "Building on our expertise to stay ahead of industry trends and emerging technologies, ensuring our clients benefit from the latest advancements in software development and digital transformation."
        },
        {
          icon: <Lightbulb size={24} />,
          title: "Innovation Leadership",
          description: "Setting new standards for innovation in enterprise software development and digital solutions, pioneering approaches that redefine what's possible for businesses in the digital era."
        },
        {
          icon: <Target size={24} />,
          title: "Strategic Partnerships",
          description: "Forming strategic alliances with industry leaders, technology providers, and research institutions that enhance our capabilities and create added value for our clients."
        }
      ]
    },
    services: {
      title: "Our Services",
      subtitle: "Comprehensive software solutions for modern enterprises",
      description: "We offer a complete range of software development and digital transformation services designed to help businesses optimize operations, enhance customer experiences, and drive growth through technology. Our expertise spans multiple domains and technologies, enabling us to deliver integrated solutions that address complex business challenges.",
      offerings: [
        {
          icon: <Code size={24} />,
          title: "Custom Software Development",
          description: "Tailored software solutions designed to address your specific business challenges and requirements. From enterprise applications to specialized tools, we build software that drives efficiency and innovation."
        },
        {
          icon: <Globe size={24} />,
          title: "Cloud Migration & Solutions",
          description: "Seamless migration to cloud platforms and development of cloud-native applications that maximize efficiency and scalability. Our cloud solutions enable businesses to reduce costs, improve security, and enhance performance."
        },
        {
          icon: <BarChart size={24} />,
          title: "Data Analytics & AI",
          description: "Advanced analytics and artificial intelligence solutions that transform data into actionable business insights. We help organizations leverage their data assets to make better decisions, identify opportunities, and predict market trends."
        },
        {
          icon: <Award size={24} />,
          title: "Digital Transformation Consulting",
          description: "Strategic guidance and implementation support for comprehensive digital transformation initiatives. Our consultants work closely with leadership teams to develop and execute transformation roadmaps that align with business objectives."
        }
      ]
    },
    culture: {
      title: "Our Culture",
      subtitle: "Fostering innovation, collaboration, and excellence",
      description: "At TechSolutions, we believe that our culture is the foundation of our success. We cultivate an environment that encourages creativity, promotes collaboration, and values diversity. Our team members are empowered to think boldly, challenge conventions, and develop their skills through continuous learning and growth opportunities.",
      elements: [
        {
          icon: <Heart size={24} />,
          title: "Passion & Purpose",
          description: "We're driven by a shared passion for technology and a common purpose to create solutions that make a difference. This enthusiasm powers our innovation and fuels our commitment to excellence in everything we do."
        },
        {
          icon: <Users size={24} />,
          title: "Collaboration & Community",
          description: "We foster a collaborative environment where diverse perspectives are valued and teamwork is essential. Our community-oriented approach extends beyond our teams to include clients, partners, and the broader tech ecosystem."
        },
        {
          icon: <BookOpen size={24} />,
          title: "Continuous Learning",
          description: "In our fast-evolving industry, learning never stops. We encourage ongoing education, professional development, and knowledge sharing to ensure our team remains at the cutting edge of technology and industry best practices."
        },
        {
          icon: <Briefcase size={24} />,
          title: "Work-Life Balance",
          description: "We respect the importance of balance in our team members' lives. Our flexible work policies, wellness initiatives, and supportive environment help ensure our people can perform at their best while maintaining personal wellbeing."
        }
      ]
    }
  };
  
  // Company information
  const companyInfo = {
    name: "TechSolutions",
    founded: "2010",
    employees: "500+",
    locations: ["New York", "San Francisco", "London", "Singapore"],
    expertise: ["Enterprise Software", "Cloud Solutions", "AI & Machine Learning", "Digital Transformation"]
  };
  
  return (
    <div className="bg-gradient-to-b from-gray-900 via-gray-900 to-black min-h-screen font-sans py-8 px-4 sm:px-6 lg:px-8 pt-24">
      {/* Tab Navigation */}
      <div className="max-w-6xl mx-auto mb-12">
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gray-800 rounded-lg shadow-lg overflow-hidden"
        >
          <div className="flex flex-wrap border-b border-gray-700">
            {Object.keys(sections).map((section) => (
              <motion.button
                key={section}
                className={`flex-1 py-4 text-center font-medium transition-colors duration-200 ${
                  activeSection === section
                    ? 'bg-amber-600/30 text-amber-400 border-b-2 border-amber-500'
                    : 'text-gray-300 hover:bg-gray-700 hover:text-amber-500'
                }`}
                onClick={() => setActiveSection(section)}
                whileHover={{ backgroundColor: 'rgba(217, 119, 6, 0.2)' }}
                whileTap={{ scale: 0.98 }}
              >
                {sections[section].title}
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>
      
      {/* Main Content */}
      <div className="max-w-6xl mx-auto">
        <motion.div
          key={activeSection}
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="mb-12"
        >
          <motion.div 
            className="flex items-center mb-2"
            variants={slideInFromLeft}
          >
            <div className="h-8 w-1 bg-amber-500 rounded mr-4"></div>
            <h1 className="text-3xl md:text-4xl font-bold text-white">
              {sections[activeSection].title}
            </h1>
          </motion.div>
          
          <motion.p 
            className="text-xl text-amber-400 mb-8 pl-5"
            variants={fadeIn}
          >
            {sections[activeSection].subtitle}
          </motion.p>
          
          <motion.div 
            className="bg-gray-800/50 rounded-lg p-8 border border-amber-500/20 shadow-[0_0_15px_rgba(184,134,11,0.15)] mb-12"
            variants={scaleUp}
          >
            <motion.p 
              className="text-gray-300 text-lg leading-relaxed mb-10"
              variants={fadeIn}
            >
              {sections[activeSection].description}
            </motion.p>
            
            {/* Mission Section */}
            {activeSection === 'mission' && (
              <motion.div 
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                {sections.mission.values.map((value, index) => (
                  <motion.div
                    key={index}
                    variants={index % 2 === 0 ? slideInFromLeft : slideInFromRight}
                    whileHover={{ 
                      y: -5, 
                      boxShadow: "0 0 20px 5px rgba(217, 119, 6, 0.3)",
                      borderColor: "rgba(217, 119, 6, 0.5)",
                      background: "radial-gradient(circle at center, rgba(217, 119, 6, 0.15), rgba(0, 0, 0, 0))"
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="bg-gray-800/30 p-6 rounded-lg border border-amber-500/20 transition-all duration-300"
                  >
                    <div className="flex items-center mb-4">
                      <div className="p-3 bg-amber-600/20 rounded-lg text-amber-400 mr-4">
                        {value.icon}
                      </div>
                      <h3 className="text-xl font-semibold text-amber-500">{value.title}</h3>
                    </div>
                    <p className="text-gray-300 leading-relaxed">{value.description}</p>
                  </motion.div>
                ))}
              </motion.div>
            )}
            
            {/* Vision Section */}
            {activeSection === 'vision' && (
              <motion.div 
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                {sections.vision.pillars.map((pillar, index) => (
                  <motion.div
                    key={index}
                    variants={index % 2 === 0 ? slideInFromLeft : slideInFromRight}
                    whileHover={{ 
                      y: -5, 
                      boxShadow: "0 0 20px 5px rgba(217, 119, 6, 0.3)",
                      borderColor: "rgba(217, 119, 6, 0.5)",
                      background: "radial-gradient(circle at center, rgba(217, 119, 6, 0.15), rgba(0, 0, 0, 0))"
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="bg-gray-800/30 p-6 rounded-lg border border-amber-500/20 transition-all duration-300"
                  >
                    <div className="flex items-center mb-4">
                      <div className="p-3 bg-amber-600/20 rounded-lg text-amber-400 mr-4">
                        {pillar.icon}
                      </div>
                      <h3 className="text-xl font-semibold text-amber-500">{pillar.title}</h3>
                    </div>
                    <p className="text-gray-300 leading-relaxed">{pillar.description}</p>
                  </motion.div>
                ))}
              </motion.div>
            )}
            
            {/* Services Section */}
            {activeSection === 'services' && (
              <motion.div 
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                {sections.services.offerings.map((service, index) => (
                  <motion.div
                    key={index}
                    variants={index % 2 === 0 ? slideInFromLeft : slideInFromRight}
                    whileHover={{ 
                      y: -5, 
                      boxShadow: "0 0 20px 5px rgba(217, 119, 6, 0.3)",
                      borderColor: "rgba(217, 119, 6, 0.5)",
                      background: "radial-gradient(circle at center, rgba(217, 119, 6, 0.15), rgba(0, 0, 0, 0))"
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="bg-gray-800/30 p-6 rounded-lg border border-amber-500/20 transition-all duration-300"
                  >
                    <div className="flex items-center mb-4">
                      <div className="p-3 bg-amber-600/20 rounded-lg text-amber-400 mr-4">
                        {service.icon}
                      </div>
                      <h3 className="text-xl font-semibold text-amber-500">{service.title}</h3>
                    </div>
                    <p className="text-gray-300 leading-relaxed">{service.description}</p>
                  </motion.div>
                ))}
              </motion.div>
            )}
            
            {/* Culture Section (New) */}
            {activeSection === 'culture' && (
              <motion.div 
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                {sections.culture.elements.map((element, index) => (
                  <motion.div
                    key={index}
                    variants={index % 2 === 0 ? slideInFromLeft : slideInFromRight}
                    whileHover={{ 
                      y: -5, 
                      boxShadow: "0 0 20px 5px rgba(217, 119, 6, 0.3)",
                      borderColor: "rgba(217, 119, 6, 0.5)",
                      background: "radial-gradient(circle at center, rgba(217, 119, 6, 0.15), rgba(0, 0, 0, 0))"
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="bg-gray-800/30 p-6 rounded-lg border border-amber-500/20 transition-all duration-300"
                  >
                    <div className="flex items-center mb-4">
                      <div className="p-3 bg-amber-600/20 rounded-lg text-amber-400 mr-4">
                        {element.icon}
                      </div>
                      <h3 className="text-xl font-semibold text-amber-500">{element.title}</h3>
                    </div>
                    <p className="text-gray-300 leading-relaxed">{element.description}</p>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </motion.div>
        </motion.div>
        
        {/* Company Overview Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeIn}
          className="bg-gray-800/50 rounded-lg p-8 border border-amber-500/20 shadow-[0_0_15px_rgba(184,134,11,0.15)]"
        >
          <motion.div 
            className="flex items-center mb-6"
            variants={slideInFromLeft}
          >
            <div className="h-8 w-1 bg-amber-500 rounded mr-4"></div>
            <h2 className="text-2xl font-bold text-white">Company Overview</h2>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={staggerContainer}
          >
            <motion.div variants={slideInFromLeft}>
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                <Award size={20} className="text-amber-400 mr-2" />
                About {companyInfo.name}
              </h3>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Founded in {companyInfo.founded}, {companyInfo.name} has grown into a leading provider of enterprise software solutions with {companyInfo.employees} professionals worldwide. We specialize in delivering innovative technology solutions that help businesses navigate digital transformation and achieve sustainable growth.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Our team of experienced developers, engineers, and consultants brings deep industry knowledge and technical expertise to every project, ensuring that our clients receive the highest quality solutions tailored to their specific needs.
              </p>
            </motion.div>
            
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
              variants={slideInFromRight}
            >
              <div>
                <h3 className="text-lg font-semibold text-amber-500 mb-3">Global Presence</h3>
                <ul className="space-y-3 text-gray-300">
                  {companyInfo.locations.map((location, index) => (
                    <motion.li 
                      key={index} 
                      className="flex items-center"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <Globe size={16} className="text-amber-400 mr-2" />
                      {location}
                    </motion.li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-amber-500 mb-3">Our Expertise</h3>
                <ul className="space-y-3 text-gray-300">
                  {companyInfo.expertise.map((item, index) => (
                    <motion.li 
                      key={index} 
                      className="flex items-center"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <CheckCircle size={16} className="text-amber-400 mr-2" />
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default MissionVisionPage;