import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import PageHero from '../components/common/PageHero';
import { allCategories } from '../data/debunks';

const CategoriesPage: React.FC = () => {
  return (
    <div>
      <PageHero 
        title="Categories"
        subtitle="Browse debunks by topic or type of misinformation"
      />
      
      <section className="py-12 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allCategories.map((category, index) => (
              <motion.div 
                key={index}
                className="card overflow-hidden h-full"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <div className="relative h-48">
                  <img 
                    src={category.imageUrl} 
                    alt={category.name} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                    <div className="p-4">
                      <h3 className="text-xl font-bold text-white">{category.name}</h3>
                      <p className="text-gray-300 text-sm">{category.count} debunks</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <p className="text-gray-600 mb-4">{category.description}</p>
                  <Link 
                    to={`/categories/${category.name.toLowerCase()}`}
                    className="btn-primary"
                  >
                    Browse Category
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CategoriesPage;