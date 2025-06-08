import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, FileText, Users, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

import HeroSection from '../components/home/HeroSection';
import FeaturedDebunk from '../components/home/FeaturedDebunk';
import DebunkCard from '../components/home/DebunkCard';
import TruthMeter from '../components/common/TruthMeter';

import { featuredDebunk, recentDebunks, popularCategories } from '../data/debunks';

const HomePage: React.FC = () => {
  return (
    <div>
      <HeroSection />
      
      {/* Featured Debunk */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold">Featured Debunk</h2>
            <Link to="/debunks" className="flex items-center text-primary-600 hover:text-primary-700 font-medium">
              <span>View All</span>
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          
          <FeaturedDebunk debunk={featuredDebunk} />
        </div>
      </section>
      
      {/* Recent Debunks */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center">
              <TrendingUp className="mr-2 h-6 w-6 text-primary-600" />
              <h2 className="text-3xl font-bold">Recent Debunks</h2>
            </div>
            <Link to="/debunks" className="flex items-center text-primary-600 hover:text-primary-700 font-medium">
              <span>View All</span>
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentDebunks.map((debunk, index) => (
              <DebunkCard key={debunk.id} debunk={debunk} index={index} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Categories */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center">
              <FileText className="mr-2 h-6 w-6 text-primary-600" />
              <h2 className="text-3xl font-bold">Popular Categories</h2>
            </div>
            <Link to="/categories" className="flex items-center text-primary-600 hover:text-primary-700 font-medium">
              <span>View All</span>
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularCategories.map((category, index) => (
              <motion.div 
                key={index}
                className="card p-6 hover:shadow-lg transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <div className="mb-4">
                  <img 
                    src={category.imageUrl} 
                    alt={category.name} 
                    className="w-full h-40 object-cover rounded-md"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">{category.name}</h3>
                <p className="text-gray-600 mb-4">{category.description}</p>
                <Link 
                  to={`/categories/${category.name.toLowerCase()}`}
                  className="flex items-center text-primary-600 hover:text-primary-700 font-medium"
                >
                  <span>Browse {category.name}</span>
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* About */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center mb-4">
                <Users className="mr-2 h-6 w-6 text-primary-600" />
                <h2 className="text-3xl font-bold">Our Mission</h2>
              </div>
              <p className="text-lg text-gray-600 mb-4">
                At Debunk Central, we're committed to fighting misinformation that spreads through social media, 
                viral videos, and messaging platforms.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Our team of researchers and fact-checkers work tirelessly to verify claims, analyze content, 
                and provide evidence-based conclusions that help you separate fact from fiction.
              </p>
              <div className="space-y-4">
                <div className="flex">
                  <div className="flex-shrink-0 flex items-start pt-1">
                    <div className="h-5 w-5 rounded-full bg-primary-600 flex items-center justify-center text-white text-xs">
                      1
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-bold text-gray-900">Identify</h4>
                    <p className="text-gray-600">We monitor trending content and accept user submissions for fact-checking.</p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0 flex items-start pt-1">
                    <div className="h-5 w-5 rounded-full bg-primary-600 flex items-center justify-center text-white text-xs">
                      2
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-bold text-gray-900">Research</h4>
                    <p className="text-gray-600">Our team conducts thorough research using verified sources and expert consultation.</p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0 flex items-start pt-1">
                    <div className="h-5 w-5 rounded-full bg-primary-600 flex items-center justify-center text-white text-xs">
                      3
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-bold text-gray-900">Debunk</h4>
                    <p className="text-gray-600">We publish comprehensive analyses with clear truth ratings and evidence.</p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <Link to="/about" className="btn-primary">
                  Learn More About Us
                </Link>
              </div>
            </motion.div>
            
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="relative rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Our team researching" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2">Expert Fact-Checkers</h3>
                    <p className="text-gray-200">Our diverse team brings expertise from journalism, science, and research backgrounds.</p>
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 bg-white p-4 rounded-lg shadow-lg max-w-xs">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-bold text-primary-900">Our Impact</h4>
                  <span className="text-xs bg-primary-100 text-primary-800 px-2 py-1 rounded-full">Growing</span>
                </div>
                <div className="space-y-2">
                  <div>
                    <div className="flex justify-between text-sm">
                      <span>Debunks Published</span>
                      <span className="font-bold">500+</span>
                    </div>
                    <div className="h-1.5 bg-gray-200 rounded-full mt-1">
                      <div className="h-full bg-primary-600 rounded-full" style={{ width: '75%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm">
                      <span>Monthly Readers</span>
                      <span className="font-bold">250K+</span>
                    </div>
                    <div className="h-1.5 bg-gray-200 rounded-full mt-1">
                      <div className="h-full bg-secondary-600 rounded-full" style={{ width: '85%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-primary-900 to-secondary-900 text-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-4 text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Help Us Fight Misinformation
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-200 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Have you come across suspicious content that needs fact-checking? 
              Submit it to our team for analysis.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Link to="/submit" className="btn-primary bg-white text-primary-900 hover:bg-gray-100 py-3 px-8 text-lg">
                Submit Content for Debunking
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;