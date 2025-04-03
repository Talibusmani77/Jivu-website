import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown, ChevronRight, Menu, X } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileOpenDropdown, setMobileOpenDropdown] = useState(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Expertise dropdown items
  const expertiseItems = [
    { name: 'Web Development', link: '/expertise/web' },
    { name: 'Mobile App Development', link: '/expertise/mobile' },
    { name: 'School/College ERP', link: '/expertise/school' },
    { name: 'Resturent ERP', link: '/expertise/resturent' },
    { name: 'Hotel Management', link: '/expertise/hotel' },
    { name: 'Hospital Mangement', link: '/expertise/hospital' },
    { name: 'Digital Marketing', link: '/expertise/digital' },
    { name: 'E-Commerce', link: '/expertise/ecommerce' }
  ];

  const aboutUsItems = [
    { name: 'Our Story', link: '/about/story' },
    { name: 'Team', link: '/about/team' },
    { name: 'Mission & Vision', link: '/about/mission' },
    { name: 'Awards', link: '/about/awards' }
  ];

  // Responsive scroll and window resize effects
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      // Close mobile menu on desktop view
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
        setMobileOpenDropdown(null);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMobileMenuOpen && !event.target.closest('nav')) {
        setIsMobileMenuOpen(false);
        setMobileOpenDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  // Desktop Dropdown Menu Component
  const DesktopDropdownMenu = ({ items, isOpen }) => (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="absolute left-0 bg-white/95 backdrop-blur-lg shadow-2xl rounded-xl overflow-hidden w-[250px] z-50 border border-[#12142e] !bg-[#0b0c1c]"
        >
          {items.map((item, index) => (
            <motion.a
              key={index}
              href={item.link}
              whileHover={{ 
                backgroundColor: 'rgba(53, 57, 65, 0.7)',
                scale: 1.02
              }}
              className="block p-4 hover:bg-gray-100/50 cursor-pointer group transition-all duration-300"
            >
              <div className="group-hover:text-gray-100 transition-colors">
                {item.name}
              </div>
            </motion.a>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );

  // Mobile Dropdown Menu Component
  const MobileDropdownMenu = ({ items, isOpen }) => (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="pl-4 bg-white/90 backdrop-blur-lg"
        >
          {items.map((item, index) => (
            <motion.a
              key={index}
              href={item.link}
              whileHover={{ 
                backgroundColor: 'rgba(243, 244, 246, 0.7)',
                x: 10
              }}
              className="block p-3 hover:bg-gray-100/50 cursor-pointer group"
            >
              <div className="font-medium text-black group-hover:text-yellow-500">
                {item.name}
              </div>
            </motion.a>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );

  // Toggle mobile dropdown
  const toggleMobileDropdown = (dropdown) => {
    setMobileOpenDropdown(mobileOpenDropdown === dropdown ? null : dropdown);
  };

  // Accessibility: Close mobile menu on Escape key
  useEffect(() => {
    const handleEscapeKey = (event) => {
      if (event.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
        setMobileOpenDropdown(null);
      }
    };

    document.addEventListener('keydown', handleEscapeKey);
    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [isMobileMenuOpen]);

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 px-4 sm:px-6 lg:px-8 ${
        isScrolled 
          ? 'bg-zinc/80 backdrop-blur-lg shadow-md text-white' 
          : 'bg-transparent text-white'
      }`}
      aria-label="Main Navigation"
    >
      <div className="container mx-auto max-w-7xl px-4 py-4 flex justify-between items-center">
        {/* Logo Section with improved accessibility */}
        <Link to='/'
          className="flex items-center space-x-3 focus:outline-none  rounded-lg"
          aria-label="Home">
        
          <img 
            src="/logo.png" 
            alt="Jivu Infosolution Logo" 
            className="h-10 w-10 rounded-full object-cover"
          />
          <div className="text-xl sm:text-2xl font-bold">
            Jivu <span className="text-yellow-500">Infosolution</span>
          </div>
          </Link>

        {/* Mobile Menu Toggle with improved accessibility */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden focus:outline-none focus:ring-2 focus:ring-yellow-500 rounded-lg p-2"
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
          {/* Expertise Dropdown */}
          <div 
            className="relative group"
            onMouseEnter={() => setOpenDropdown('expertise')}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <button 
              className="flex items-center cursor-pointer hover:text-yellow-500 transition-colors rounded-lg p-2"
              aria-haspopup="menu"
              aria-expanded={openDropdown === 'expertise'}
            >
              Our Expertise <ChevronDown className="ml-1" />
            </button>
            <DesktopDropdownMenu 
              items={expertiseItems} 
              isOpen={openDropdown === 'expertise'} 
            />
          </div>

          {/* About Us Dropdown */}
          <div 
            className="relative group"
            onMouseEnter={() => setOpenDropdown('about')}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <button 
              className="flex items-center cursor-pointer hover:text-yellow-500 transition-colors  rounded-lg p-2"
              aria-haspopup="menu"
              aria-expanded={openDropdown === 'about'}
            >
              About Us <ChevronDown className="ml-1" />
            </button>
            <DesktopDropdownMenu 
              items={aboutUsItems} 
              isOpen={openDropdown === 'about'} 
            />
          </div>

          {/* Additional Navigation Items */}
          <Link
            to="/career" 
            className="cursor-pointer hover:text-yellow-500 transition-colors  rounded-lg p-2"
          >
            Career
          </Link>
          <Link
            to="/contact" 
            className="cursor-pointer hover:text-yellow-500 transition-colors  rounded-lg p-2"
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="absolute top-full left-0 w-full bg-white/95 backdrop-blur-lg shadow-lg md:hidden"
            >
              <div className="flex flex-col p-4 space-y-3 text-black">
                {/* Expertise Dropdown */}
                <div 
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => toggleMobileDropdown('expertise')}
                  role="button"
                  aria-expanded={mobileOpenDropdown === 'expertise'}
                >
                  <span>Our Expertise</span>
                  {mobileOpenDropdown === 'expertise' ? <ChevronDown /> : <ChevronRight />}
                </div>
                <MobileDropdownMenu 
                  items={expertiseItems} 
                  isOpen={mobileOpenDropdown === 'expertise'} 
                />

                {/* About Us Dropdown */}
                <div 
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => toggleMobileDropdown('about')}
                  role="button"
                  aria-expanded={mobileOpenDropdown === 'about'}
                >
                  <span>About Us</span>
                  {mobileOpenDropdown === 'about' ? <ChevronDown /> : <ChevronRight />}
                </div>
                <MobileDropdownMenu 
                  items={aboutUsItems} 
                  isOpen={mobileOpenDropdown === 'about'} 
                />

                <Link to="/career" className="cursor-pointer">Career</Link>
                <Link to="/contact" className="cursor-pointer">Contact Us</Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;