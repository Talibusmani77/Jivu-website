import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Star, Send, Mail, Phone, MapPin } from 'lucide-react';

const ContactUs = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = 'Touch';
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const headingRef = useRef(null);
  const formRef = useRef(null);

  // Check if component is in view
  const isHeadingInView = useInView(headingRef, { once: true });
  const isFormInView = useInView(formRef, { once: true });

  // Typing Effect
  useEffect(() => {
    if (isHeadingInView && typedText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText(fullText.slice(0, typedText.length + 1));
      }, 250);
      return () => clearTimeout(timeout);
    }
  }, [isHeadingInView, typedText]);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted', formData);
    // Add your form submission logic here
  };

  return (
    <div className="relative flex flex-col items-center justify-center overflow-hidden py-8 bg-gradient-to-br from-black via-gray-900 to-black">
      {/* Heading Section */}
      <div ref={headingRef} className="w-full flex items-center justify-center py-8">
        <motion.h1 
          initial={{ opacity: 0, y: -50 }}
          animate={isHeadingInView ? { opacity: 1, y: 0 } : {}}
          transition={{ 
            type: "spring", 
            stiffness: 100, 
            damping: 15 
          }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white flex flex-wrap items-center justify-center space-x-2 sm:space-x-4"
        >
          <span className="whitespace-nowrap">Get In</span>
          <Star className="text-yellow-500 w-6 h-6 sm:w-8 sm:h-8 md:w-9 md:h-9" />
          <span 
            className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 whitespace-nowrap"
          >
            {typedText}
          </span>
        </motion.h1>
      </div>

      {/* Contact Form Container */}
      <motion.div 
        ref={formRef}
        initial={{ opacity: 0, y: 100 }}
        animate={isFormInView ? { opacity: 1, y: 0 } : {}}
        transition={{ 
          type: "spring", 
          stiffness: 100, 
          damping: 15,
          delay: 0.5
        }}
        className="w-full max-w-4xl px-4"
      >
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl overflow-hidden">
          <div className="grid md:grid-cols-2 gap-8 p-8">
            {/* Contact Information */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={isFormInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.7, type: "spring", stiffness: 100 }}
              className="text-white space-y-6"
            >
              <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
              
              <div className="flex items-center space-x-4">
                <Mail className="w-6 h-6 text-purple-400" />
                <span>contact@yourcompany.com</span>
              </div>
              
              <div className="flex items-center space-x-4">
                <Phone className="w-6 h-6 text-green-400" />
                <span>+1 (555) 123-4567</span>
              </div>
              
              <div className="flex items-center space-x-4">
                <MapPin className="w-6 h-6 text-red-400" />
                <span>123 Tech Lane, Innovation City</span>
              </div>
            </motion.div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {[
                { name: 'name', placeholder: 'Your Name', type: 'text' },
                { name: 'email', placeholder: 'Your Email', type: 'email' },
                { name: 'phone', placeholder: 'Phone Number', type: 'tel' }
              ].map((field, index) => (
                <motion.div
                  key={field.name}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isFormInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ 
                    delay: 0.8 + (index * 0.1), 
                    type: "spring", 
                    stiffness: 100 
                  }}
                >
                  <input
                    type={field.type}
                    name={field.name}
                    value={formData[field.name]}
                    onChange={handleChange}
                    placeholder={field.placeholder}
                    className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    required={field.name !== 'phone'}
                  />
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={isFormInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1.0, type: "spring", stiffness: 100 }}
              >
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  rows="4"
                  className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                ></textarea>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={isFormInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1.1, type: "spring", stiffness: 100 }}
              >
                <button
                  type="submit"
                  className="w-full flex items-center justify-center space-x-2 px-6 py-3 
                    bg-gradient-to-r from-purple-500 to-pink-500 
                    text-white rounded-lg hover:opacity-90 transition group"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </button>
              </motion.div>
            </form>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactUs;