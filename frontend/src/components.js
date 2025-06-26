import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDownIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { ShoppingCartIcon, HeartIcon, StarIcon } from '@heroicons/react/24/solid';

// Header Component
export const Header = ({ currentPage, onPageChange }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Home', id: 'home' },
    { name: 'Our Story', id: 'story' },
    { name: 'Shop', id: 'shop' },
    { name: 'Projects', id: 'projects' },
    { name: 'People', id: 'people' },
    { name: 'Journal', id: 'journal' },
    { name: 'Contact', id: 'contact' }
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => onPageChange('home')}
          >
            <div className="w-12 h-12 bg-gradient-to-br from-[#C6A988] to-[#8B4513] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">SH</span>
            </div>
            <div>
              <h1 className={`font-serif text-xl font-bold ${isScrolled ? 'text-[#8B4513]' : 'text-white'}`}>
                Sacred Hands
              </h1>
              <p className={`text-sm ${isScrolled ? 'text-gray-600' : 'text-white/80'}`}>
                Coffee Project
              </p>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <motion.button
                key={item.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => onPageChange(item.id)}
                className={`font-medium transition-colors ${
                  currentPage === item.id
                    ? 'text-[#C6A988] border-b-2 border-[#C6A988]'
                    : isScrolled 
                    ? 'text-gray-700 hover:text-[#C6A988]' 
                    : 'text-white hover:text-[#C6A988]'
                }`}
              >
                {item.name}
              </motion.button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden ${isScrolled ? 'text-gray-700' : 'text-white'}`}
          >
            {isMenuOpen ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 py-4 border-t border-white/20"
            >
              {menuItems.map((item) => (
                <motion.button
                  key={item.id}
                  whileHover={{ x: 10 }}
                  onClick={() => {
                    onPageChange(item.id);
                    setIsMenuOpen(false);
                  }}
                  className={`block w-full text-left py-2 ${
                    currentPage === item.id
                      ? 'text-[#C6A988] font-medium'
                      : isScrolled 
                      ? 'text-gray-700' 
                      : 'text-white'
                  }`}
                >
                  {item.name}
                </motion.button>
              ))}
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

// Hero Section Component
export const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('https://images.unsplash.com/photo-1742320086662-56a3c278734b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80')`
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-6">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="w-24 h-24 bg-white/90 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <div className="text-center">
              <div className="text-[#8B4513] font-serif font-bold text-lg">SACRED</div>
              <div className="text-[#8B4513] font-serif font-bold text-lg">HANDS</div>
              <div className="text-[#C6A988] text-xs font-medium tracking-wider">COFFEE PROJECT</div>
            </div>
          </div>
        </motion.div>

        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-serif font-light mb-6 tracking-wide"
        >
          Coffee With a Purpose
        </motion.h1>

        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl font-light mb-8 tracking-wide"
        >
          From Sacred Hands to Yours
        </motion.p>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#C6A988] text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-[#B8956B] transition-colors shadow-lg"
          >
            Shop Now
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border-2 border-white text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-white hover:text-[#8B4513] transition-colors"
          >
            Our Story
          </motion.button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-white text-center"
        >
          <p className="text-sm mb-2">Scroll to explore</p>
          <ChevronDownIcon className="w-6 h-6 mx-auto" />
        </motion.div>
      </motion.div>
    </section>
  );
};

// Featured Products Section
export const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      name: "Msitu Blend",
      description: "Rich, full-bodied with notes of dark chocolate and caramel",
      price: "$24.99",
      image: "https://images.unsplash.com/photo-1654815439629-5e93cb7f74a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      roast: "Medium Dark",
      origin: "Western Kenya"
    },
    {
      id: 2,
      name: "Farmer's Choice",
      description: "Bright and fruity with hints of citrus and berry",
      price: "$26.99",
      image: "https://images.pexels.com/photos/7125434/pexels-photo-7125434.jpeg?auto=compress&cs=tinysrgb&w=500",
      roast: "Light Medium",
      origin: "Highland Farms"
    },
    {
      id: 3,
      name: "Sacred Harvest",
      description: "Smooth and balanced with floral undertones",
      price: "$28.99",
      image: "https://images.unsplash.com/photo-1652016363501-b8b07517de17?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      roast: "Medium",
      origin: "Micro-lot"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-[#8B4513] mb-6">
            Featured Coffees
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our carefully curated selection of premium micro-lot coffees,
            each telling a unique story from our partner farmers.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform hover:scale-110"
                />
                <div className="absolute top-4 right-4">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="bg-white/90 p-2 rounded-full shadow-lg"
                  >
                    <HeartIcon className="w-5 h-5 text-[#C6A988]" />
                  </motion.button>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-serif font-bold text-[#8B4513]">
                    {product.name}
                  </h3>
                  <span className="text-2xl font-bold text-[#C6A988]">
                    {product.price}
                  </span>
                </div>
                
                <p className="text-gray-600 mb-4">{product.description}</p>
                
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm bg-[#C6A988]/10 text-[#8B4513] px-3 py-1 rounded-full">
                    {product.roast}
                  </span>
                  <span className="text-sm text-gray-500">{product.origin}</span>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-[#C6A988] text-white py-3 rounded-full font-medium hover:bg-[#B8956B] transition-colors flex items-center justify-center space-x-2"
                >
                  <ShoppingCartIcon className="w-5 h-5" />
                  <span>Add to Cart</span>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Mission Section
export const MissionSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif text-[#8B4513] mb-6">
              Our Mission
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              The Sacred Hands Coffee Project is a producer-led initiative focused on 
              transforming the coffee landscape in Western Kenya. We assist smallholder 
              farmers in organizing and learning quality-focused coffee cultivation.
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Our mission is to build a regional hub of innovation, sustainability, 
              and impact through traceable micro-lots, education, and community development.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-[#C6A988] rounded-full mt-3"></div>
                <p className="text-gray-700">Year-round Farmer Field School training</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-[#C6A988] rounded-full mt-3"></div>
                <p className="text-gray-700">Competitive cherry pricing and premiums</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-[#C6A988] rounded-full mt-3"></div>
                <p className="text-gray-700">Relationships between roasters and farmers</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1597816760638-406d7271105c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Coffee farmer working in plantation"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
            
            {/* Floating stats */}
            <div className="absolute -bottom-8 -left-8 bg-white rounded-2xl p-6 shadow-xl">
              <div className="text-center">
                <p className="text-3xl font-bold text-[#C6A988]">500+</p>
                <p className="text-sm text-gray-600">Partner Farmers</p>
              </div>
            </div>
            
            <div className="absolute -top-8 -right-8 bg-white rounded-2xl p-6 shadow-xl">
              <div className="text-center">
                <p className="text-3xl font-bold text-[#8B4513]">2025</p>
                <p className="text-sm text-gray-600">Established</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Footer Component
export const Footer = () => {
  return (
    <footer className="bg-[#8B4513] text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-[#C6A988] to-white rounded-lg flex items-center justify-center">
                <span className="text-[#8B4513] font-bold text-xl">SH</span>
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold">Sacred Hands</h3>
                <p className="text-sm text-white/80">Coffee Project</p>
              </div>
            </div>
            <p className="text-white/80 mb-4">
              Transforming lives and landscapes through quality coffee and sustainable farming practices in Western Kenya.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-white/80">
              <li><a href="#" className="hover:text-[#C6A988] transition-colors">Our Story</a></li>
              <li><a href="#" className="hover:text-[#C6A988] transition-colors">Shop Coffee</a></li>
              <li><a href="#" className="hover:text-[#C6A988] transition-colors">Projects</a></li>
              <li><a href="#" className="hover:text-[#C6A988] transition-colors">Journal</a></li>
            </ul>
          </div>

          {/* Projects */}
          <div>
            <h4 className="font-semibold mb-4">Our Projects</h4>
            <ul className="space-y-2 text-white/80">
              <li><a href="#" className="hover:text-[#C6A988] transition-colors">Farmer Voices</a></li>
              <li><a href="#" className="hover:text-[#C6A988] transition-colors">Hands for Msitu</a></li>
              <li><a href="#" className="hover:text-[#C6A988] transition-colors">Field School</a></li>
              <li><a href="#" className="hover:text-[#C6A988] transition-colors">Youth Program</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-white/80">
              <p>Western Kenya</p>
              <p>info@sacredhandscoffee.com</p>
              <p>+254 xxx xxx xxx</p>
            </div>
            
            <div className="mt-4">
              <h5 className="font-medium mb-2">Follow Us</h5>
              <div className="flex space-x-3">
                <a href="#" className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-[#C6A988] transition-colors">
                  <span className="text-sm">f</span>
                </a>
                <a href="#" className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-[#C6A988] transition-colors">
                  <span className="text-sm">t</span>
                </a>
                <a href="#" className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-[#C6A988] transition-colors">
                  <span className="text-sm">i</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-white/20 pt-8 mb-8">
          <div className="max-w-md mx-auto text-center">
            <h4 className="font-semibold mb-2">Stay Connected</h4>
            <p className="text-white/80 mb-4">Subscribe to our newsletter for updates on our farmers and new coffee releases.</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-[#C6A988]"
              />
              <button className="bg-[#C6A988] px-6 py-2 rounded-full font-medium hover:bg-[#B8956B] transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-white/60 text-sm border-t border-white/20 pt-8">
          <p>&copy; 2025 Sacred Hands Coffee Project. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};