import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Search } from 'lucide-react';
import { motion } from 'framer-motion';

const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-r from-primary-900 to-secondary-900 text-white py-16 md:py-24">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/5926380/pexels-photo-5926380.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center opacity-10"></div>
      </div>
      <div className="container-custom relative z-10">
        <div className="max-w-3xl">
          <motion.h1 
            className="mb-6 text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Cutting Through Misinformation, One Fact at a Time
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-200 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Your trusted source for fact-checking viral content from social media, reels, and messaging platforms.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Link to="/debunks" className="btn-primary py-3 px-6 text-center">
              Browse Debunks
            </Link>
            <Link to="/submit" className="btn-outline border-white text-white hover:bg-white/10 py-3 px-6 text-center">
              Submit Content
            </Link>
          </motion.div>
        </div>
      </div>
      
      <div className="container-custom relative z-10 mt-12">
        <motion.div 
          className="bg-white/10 backdrop-blur-sm rounded-lg p-6 flex flex-col md:flex-row md:items-center justify-between gap-6 border border-white/20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <div className="flex-1">
            <form className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input 
                type="text" 
                placeholder="Search for fact-checks..." 
                className="w-full bg-white/20 border border-white/30 rounded-full py-3 pl-10 pr-4 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
            </form>
          </div>
          
          <div className="flex-1 md:border-l md:border-white/20 md:pl-6 space-y-2">
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 mr-2 text-secondary-400" />
              <span>Evidence-based analysis</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 mr-2 text-secondary-400" />
              <span>Verified sources & research</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 mr-2 text-secondary-400" />
              <span>Clear truth ratings</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;