import React from 'react';
import { motion } from 'framer-motion';
import { 
  Facebook, 
  Twitter, 
  Github, 
  Instagram, 
  Linkedin,
  Chrome
} from 'lucide-react';

const Footer = () => {
  const socialIcons = [
    { Icon: Facebook, link: '#' },
    { Icon: Twitter, link: '#' },
    { Icon: Chrome, link: '#' },
    { Icon: Instagram, link: '#' },
    { Icon: Linkedin, link: '#' },
    { Icon: Github, link: '#' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        delayChildren: 0.3,
        staggerChildren: 0.1 
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <footer className="bg-gradient-to-b from-black via-gray-900 to-gray-800 text-white py-12 px-14">
      <div className="container mx-auto px-6 grid md:grid-cols-4 gap-8">
        {/* Company Section */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="space-y-4"
        >
          <motion.div 
            variants={itemVariants} 
            className="flex items-center space-x-4"
          >
            <img 
              src="/logo.png" 
              alt="Company Logo" 
              className="w-14 h-14 rounded-full border-2 border-yellow-400"
            />
            <h2 className="text-2xl font-bold whitespace-nowrap">
              Jivu <span className="text-yellow-400">Infosolution</span>
            </h2>
          </motion.div>
          <motion.p 
            variants={itemVariants}
            className="text-sm text-gray-300 leading-relaxed"
          >
            Innovative solutions for your digital transformation. Empowering businesses through cutting-edge technology and creative strategies.
          </motion.p>
        </motion.div>

        {/* Products Section */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="space-y-4"
        >
          <motion.h3 
            variants={itemVariants}
            className="text-lg font-semibold border-b border-gray-700 pb-2"
          >
            Products
          </motion.h3>
          {['MDBootstrap', 'MDWordPress', 'BrandFlow', 'Bootstrap Angular'].map((product) => (
            <motion.a 
              key={product}
              href="#" 
              variants={itemVariants}
              className="block text-sm text-gray-300 hover:text-yellow-400 group"
            >
              {product}
            </motion.a>
          ))}
        </motion.div>

        {/* Useful Links Section */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="space-y-4"
        >
          <motion.h3 
            variants={itemVariants}
            className="text-lg font-semibold border-b border-gray-700 pb-2"
          >
            Useful Links
          </motion.h3>
          {['Your Account', 'Become an Affiliate', 'Shipping Rates', 'Help'].map((link) => (
            <motion.a 
              key={link}
              href="#" 
              variants={itemVariants}
              className="block text-sm text-gray-300 hover:text-yellow-400 group"
            >
              {link}
            </motion.a>
          ))}
        </motion.div>

        {/* Contact Section */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="space-y-4"
        >
          <motion.h3 
            variants={itemVariants}
            className="text-lg font-semibold border-b border-gray-700 pb-2"
          >
            Contact
          </motion.h3>
          <motion.div 
            variants={itemVariants}
            className="space-y-2 text-sm text-gray-300"
          >
            <p className="flex items-center space-x-2">
              <span>🏠</span>
              <span>New York, NY 10012, US</span>
            </p>
            <p className="flex items-center space-x-2">
              <span>✉️</span>
              <span>info@example.com</span>
            </p>
            <p className="flex items-center space-x-2">
              <span>📞</span>
              <span>+01 234 567 88</span>
            </p>
            <p className="flex items-center space-x-2">
              <span>🖨️</span>
              <span>+01 234 567 89</span>
            </p>
            
            {/* Social Icons in Contact Section */}
            <div className="flex space-x-4 pt-4">
              {socialIcons.map(({ Icon, link }, index) => (
                <motion.a
                  key={index}
                  href={link}
                  variants={itemVariants}
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-gray-400 hover:text-yellow-400 transition-all duration-300 ease-in-out"
                >
                  <Icon size={24} strokeWidth={1.5} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Divider */}
      <div className="container mx-auto px-6 mt-8">
        <hr className="border-t border-gray-700" />
      </div>

      {/* Copyright */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-center text-sm text-gray-500 mt-4 py-2"
      >
        © 2025 Copyright: Jivu Infosolution. All Rights Reserved.
      </motion.div>
    </footer>
  );
};

export default Footer;