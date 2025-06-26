import React, { useState, useEffect } from 'react';
import './App.css';
import { Header, HeroSection, FeaturedProducts, MissionSection, Footer } from './components';
import { motion, AnimatePresence } from 'framer-motion';

// Our Story Page
const OurStoryPage = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://images.pexels.com/photos/7125691/pexels-photo-7125691.jpeg?auto=compress&cs=tinysrgb&w=2000')`
          }}
        />
        <div className="relative z-10 text-center text-white px-6 max-w-4xl">
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-serif font-light mb-8"
          >
            Our Story
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl font-light leading-relaxed"
          >
            From a vision to transform lives to a movement that connects hearts across continents
          </motion.p>
        </div>
      </section>

      {/* Story Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="prose prose-lg prose-coffee max-w-none"
          >
            <div className="mb-16">
              <h2 className="text-4xl font-serif text-[#8B4513] mb-8">The Beginning</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                The <strong>Sacred Hands Coffee Project</strong> is a producer-led initiative focused on 
                transforming the coffee landscape in Western Kenya. Established by Hansel Iravonga in 2025, 
                the project assists smallholder farmers in organizing and learning quality-focused coffee cultivation.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Our mission is to build a regional hub of innovation, sustainability, and impact through 
                traceable micro-lots, education, and community development.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <div>
                <img
                  src="https://images.unsplash.com/photo-1602046747040-1df0f6527803?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                  alt="Coffee farmer portrait"
                  className="rounded-2xl shadow-lg w-full h-64 object-cover"
                />
              </div>
              <div className="flex flex-col justify-center">
                <h3 className="text-2xl font-serif text-[#8B4513] mb-4">What We Offer</h3>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-[#C6A988] rounded-full"></div>
                    <span>Year-round Farmer Field School training</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-[#C6A988] rounded-full"></div>
                    <span>Competitive cherry pricing and premiums</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-[#C6A988] rounded-full"></div>
                    <span>Relationships between roasters and farmers</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-[#C6A988]/10 rounded-2xl p-8 mb-16">
              <blockquote className="text-center">
                <p className="text-2xl font-serif text-[#8B4513] mb-4 italic">
                  "Buy from Sacred Hands Coffee and join our mission to transform lives and landscapes."
                </p>
                <cite className="text-[#C6A988] font-medium">- Hansel Iravonga, Founder</cite>
              </blockquote>
            </div>
        
            <div className="text-center">
              <h3 className="text-3xl font-serif text-[#8B4513] mb-6">Our Impact</h3>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-[#C6A988] mb-2">500+</div>
                  <div className="text-gray-600">Partner Farmers</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-[#C6A988] mb-2">50+</div>
                  <div className="text-gray-600">Micro-lots Produced</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-[#C6A988] mb-2">1000+</div>
                  <div className="text-gray-600">Trees Planted</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

// Shop Page
const ShopPage = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  
  const products = [
    {
      id: 1,
      name: "Msitu Blend",
      description: "Rich, full-bodied with notes of dark chocolate and caramel",
      price: "$24.99",
      image: "https://images.unsplash.com/photo-1654815439629-5e93cb7f74a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      roast: "Medium Dark",
      origin: "Western Kenya",
      category: "blend"
    },
    {
      id: 2,
      name: "Farmer's Choice",
      description: "Bright and fruity with hints of citrus and berry",
      price: "$26.99",
      image: "https://images.pexels.com/photos/7125434/pexels-photo-7125434.jpeg?auto=compress&cs=tinysrgb&w=500",
      roast: "Light Medium",
      origin: "Highland Farms",
      category: "single-origin"
    },
    {
      id: 3,
      name: "Sacred Harvest",
      description: "Smooth and balanced with floral undertones",
      price: "$28.99",
      image: "https://images.unsplash.com/photo-1652016363501-b8b07517de17?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      roast: "Medium",
      origin: "Micro-lot",
      category: "specialty"
    },
    {
      id: 4,
      name: "Morning Glory",
      description: "Perfect morning coffee with nutty and sweet notes",
      price: "$23.99",
      image: "https://images.pexels.com/photos/17836197/pexels-photo-17836197.jpeg?auto=compress&cs=tinysrgb&w=500",
      roast: "Medium",
      origin: "Community Lot",
      category: "blend"
    },
    {
      id: 5,
      name: "Highland Reserve",
      description: "Premium single-origin with wine-like complexity",
      price: "$32.99",
      image: "https://images.unsplash.com/photo-1597816760638-406d7271105c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      roast: "Light",
      origin: "High Altitude",
      category: "specialty"
    },
    {
      id: 6,
      name: "Community Cup",
      description: "Everyday coffee that supports community projects",
      price: "$21.99",
      image: "https://images.unsplash.com/photo-1742320086662-56a3c278734b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      roast: "Medium Dark",
      origin: "Multiple Farms",
      category: "blend"
    }
  ];

  const filters = [
    { id: 'all', name: 'All Coffees' },
    { id: 'blend', name: 'Blends' },
    { id: 'single-origin', name: 'Single Origin' },
    { id: 'specialty', name: 'Specialty' }
  ];

  const filteredProducts = selectedFilter === 'all' 
    ? products 
    : products.filter(product => product.category === selectedFilter);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#C6A988]/10 to-[#8B4513]/5">
        <div className="container mx-auto px-6 text-center">
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-serif text-[#8B4513] mb-6"
          >
            Shop Coffee
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Discover our carefully curated selection of premium micro-lot coffees, 
            each supporting our partner farmers in Western Kenya.
          </motion.p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-6">
          <div className="flex justify-center space-x-4 overflow-x-auto">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setSelectedFilter(filter.id)}
                className={`px-6 py-2 rounded-full font-medium transition-all whitespace-nowrap ${
                  selectedFilter === filter.id
                    ? 'bg-[#C6A988] text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-[#C6A988]/20'
                }`}
              >
                {filter.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <AnimatePresence>
            <motion.div
              layout
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform hover:scale-110"
                    />
                    <div className="absolute top-4 right-4">
                      <button className="bg-white/90 p-2 rounded-full shadow-lg">
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <svg className="w-5 h-5 text-[#C6A988]" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                          </svg>
                        </motion.div>
                      </button>
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

                    <button className="w-full bg-[#C6A988] text-white py-3 rounded-full font-medium hover:bg-[#B8956B] transition-colors">
                      Add to Cart
                    </button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
};

// Projects Page
const ProjectsPage = () => {
  const projects = [
    {
      title: "Farmer Voices",
      description: "Amplifying the stories and experiences of our partner farmers through multimedia documentation and storytelling.",
      image: "https://images.unsplash.com/photo-1602046747040-1df0f6527803?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: ["Story collection", "Photo documentation", "Video testimonials", "Community engagement"]
    },
    {
      title: "Hands for Msitu",
      description: "Our tree planting initiative focused on reforestation and climate-smart agriculture practices.",
      image: "https://images.unsplash.com/photo-1652016363501-b8b07517de17?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: ["Tree nursery management", "Indigenous species propagation", "Farmer training", "Environmental education"]
    },
    {
      title: "Farmer Field School",
      description: "Year-round training program providing education on quality coffee cultivation and sustainable farming practices.",
      image: "https://images.pexels.com/photos/7125691/pexels-photo-7125691.jpeg?auto=compress&cs=tinysrgb&w=800",
      features: ["Quality improvement training", "Youth officer program", "Climate-smart practices", "Cooperative development"]
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#C6A988]/10 to-[#8B4513]/5">
        <div className="container mx-auto px-6 text-center">
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-serif text-[#8B4513] mb-6"
          >
            Our Projects
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Transforming communities through innovative programs that support farmers, 
            protect the environment, and build sustainable futures.
          </motion.p>
        </div>
      </section>

      {/* Projects */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`grid lg:grid-cols-2 gap-16 items-center mb-24 ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                <h2 className="text-4xl md:text-5xl font-serif text-[#8B4513] mb-6">
                  {project.title}
                </h2>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="space-y-3 mb-8">
                  {project.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-[#C6A988] rounded-full"></div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <button className="bg-[#C6A988] text-white px-8 py-3 rounded-full font-medium hover:bg-[#B8956B] transition-colors">
                  Learn More
                </button>
              </div>

              <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

// People Page
const PeoplePage = () => {
  const team = [
    {
      name: "Hansel Iravonga",
      role: "Founder & Project Director",
      image: "https://images.unsplash.com/photo-1602046747040-1df0f6527803?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      bio: "Passionate about transforming the coffee industry in Western Kenya through sustainable practices and farmer empowerment."
    },
    {
      name: "Grace Wanjiku",
      role: "Field Extension Officer",
      image: "https://images.unsplash.com/photo-1597816760638-406d7271105c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      bio: "Leading farmer training programs and quality improvement initiatives across our partner communities."
    },
    {
      name: "James Kipkemoi",
      role: "Agronomist",
      image: "https://images.pexels.com/photos/17836197/pexels-photo-17836197.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "Specialist in climate-smart agriculture and sustainable farming practices for coffee cultivation."
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#C6A988]/10 to-[#8B4513]/5">
        <div className="container mx-auto px-6 text-center">
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-serif text-[#8B4513] mb-6"
          >
            Our People
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            We work with dedicated farmers, roasters, field officers, and agronomists 
            to uplift lives through the power of coffee.
          </motion.p>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-center"
              >
                <div className="relative w-64 h-64 mx-auto mb-6 rounded-full overflow-hidden shadow-lg">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-serif text-[#8B4513] mb-2">{member.name}</h3>
                <p className="text-[#C6A988] font-medium mb-4">{member.role}</p>
                <p className="text-gray-600 leading-relaxed">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-serif text-[#8B4513] mb-8">Our Community</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
              Sacred Hands Coffee is more than a project—it's a community of passionate individuals 
              working together to create positive change in the coffee industry.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-5xl font-bold text-[#C6A988] mb-2">500+</div>
                <div className="text-gray-600">Partner Farmers</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-[#C6A988] mb-2">25+</div>
                <div className="text-gray-600">Field Officers</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-[#C6A988] mb-2">10+</div>
                <div className="text-gray-600">Partner Roasters</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

// Journal Page
const JournalPage = () => {
  const articles = [
    {
      title: "The Story Behind Sacred Hands Coffee",
      excerpt: "Discover how our journey began and the vision that drives us to transform the coffee landscape in Western Kenya.",
      image: "https://images.unsplash.com/photo-1742320086662-56a3c278734b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      date: "March 15, 2025",
      readTime: "5 min read"
    },
    {
      title: "Voices from the Field: Meet Our Farmers",
      excerpt: "Personal stories from the dedicated farmers who are at the heart of our coffee project.",
      image: "https://images.pexels.com/photos/17836197/pexels-photo-17836197.jpeg?auto=compress&cs=tinysrgb&w=600",
      date: "March 10, 2025",
      readTime: "8 min read"
    },
    {
      title: "Why Indigenous Trees Matter for Coffee's Future",
      excerpt: "Exploring the vital role of native tree species in sustainable coffee farming and climate resilience.",
      image: "https://images.unsplash.com/photo-1652016363501-b8b07517de17?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      date: "March 5, 2025",
      readTime: "6 min read"
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#C6A988]/10 to-[#8B4513]/5">
        <div className="container mx-auto px-6 text-center">
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-serif text-[#8B4513] mb-6"
          >
            Journal
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Stories from the field, insights into sustainable farming, and updates from our growing community.
          </motion.p>
        </div>
      </section>

      {/* Articles */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all cursor-pointer"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform hover:scale-110"
                  />
                </div>
                
                <div className="p-6">
                  <div className="flex justify-between items-center text-sm text-gray-500 mb-3">
                    <span>{article.date}</span>
                    <span>{article.readTime}</span>
                  </div>
                  
                  <h2 className="text-xl font-serif font-bold text-[#8B4513] mb-3 line-clamp-2">
                    {article.title}
                  </h2>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>
                  
                  <button className="text-[#C6A988] font-medium hover:text-[#B8956B] transition-colors">
                    Read More →
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

// Contact Page
const ContactPage = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#C6A988]/10 to-[#8B4513]/5">
        <div className="container mx-auto px-6 text-center">
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-serif text-[#8B4513] mb-6"
          >
            Contact & Wholesale
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Want to work with us? Whether you're a coffee enthusiast, roaster, or organization 
            looking to collaborate — we'd love to hear from you.
          </motion.p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gray-50 rounded-2xl p-8 md:p-12"
          >
            <h2 className="text-3xl font-serif text-[#8B4513] mb-8 text-center">
              Get In Touch
            </h2>
            
            {/* Embedded Google Form */}
            <div className="bg-white rounded-xl p-6">
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSe1234567890abcdef/viewform?embedded=true"
                width="100%"
                height="800"
                frameBorder="0"
                marginHeight="0"
                marginWidth="0"
                className="rounded-lg"
                title="Contact Form"
              >
                Loading…
              </iframe>
              
              {/* Fallback contact form if Google Form doesn't load */}
              <div className="text-center mt-6">
                <p className="text-gray-600 mb-4">
                  If the form above doesn't load, please contact us directly:
                </p>
                <div className="space-y-2 text-gray-700">
                  <p><strong>Email:</strong> info@sacredhandscoffee.com</p>
                  <p><strong>Phone:</strong> +254 xxx xxx xxx</p>
                  <p><strong>Location:</strong> Western Kenya</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-[#C6A988] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-serif text-[#8B4513] mb-2">Location</h3>
              <p className="text-gray-600">Western Kenya</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-[#C6A988] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-serif text-[#8B4513] mb-2">Email</h3>
              <p className="text-gray-600">info@sacredhandscoffee.com</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-[#C6A988] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-xl font-serif text-[#8B4513] mb-2">Phone</h3>
              <p className="text-gray-600">+254 xxx xxx xxx</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

// Home Page
const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <FeaturedProducts />
      <MissionSection />
    </div>
  );
};

// Main App Component
function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'story':
        return <OurStoryPage />;
      case 'shop':
        return <ShopPage />;
      case 'projects':
        return <ProjectsPage />;
      case 'people':
        return <PeoplePage />;
      case 'journal':
        return <JournalPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="App">
      <Header currentPage={currentPage} onPageChange={setCurrentPage} />
      <main>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}

export default App;