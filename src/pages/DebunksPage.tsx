import React, { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { Filter, Search } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

import PageHero from '../components/common/PageHero';
import DebunkCard from '../components/home/DebunkCard';
import { allDebunks, allCategories } from '../data/debunks';
import { Debunk } from '../types/debunk';

const DebunksPage: React.FC = () => {
  const { category } = useParams<{ category: string }>();
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(category || null);
  const [filteredDebunks, setFilteredDebunks] = useState<Debunk[]>([]);
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    // Update category when route params change
    setSelectedCategory(category || null);
  }, [category]);

  useEffect(() => {
    let filtered = [...allDebunks];
    
    // Filter by category if selected
    if (selectedCategory) {
      filtered = filtered.filter(debunk => 
        debunk.categories.some(cat => cat.toLowerCase() === selectedCategory.toLowerCase())
      );
    }
    
    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(debunk => 
        debunk.title.toLowerCase().includes(query) || 
        debunk.summary.toLowerCase().includes(query)
      );
    }
    
    setFilteredDebunks(filtered);
  }, [selectedCategory, searchQuery]);

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  const handleCategorySelect = (category: string | null) => {
    setSelectedCategory(category);
  };

  const pageTitle = selectedCategory 
    ? `${selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)} Debunks` 
    : 'All Debunks';
    
  const pageSubtitle = selectedCategory
    ? `Browse our fact-checks on ${selectedCategory} misinformation`
    : 'Browse all our fact-checks and analyses';

  return (
    <div>
      <PageHero 
        title={pageTitle}
        subtitle={pageSubtitle}
      />
      
      <section className="py-12 bg-white">
        <div className="container-custom">
          {/* Search and Filters */}
          <div className="mb-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input 
                  type="text" 
                  placeholder="Search debunks..." 
                  className="w-full border border-gray-300 rounded-full py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              
              <button 
                onClick={toggleFilters}
                className="md:w-auto flex items-center justify-center space-x-2 btn-outline"
              >
                <Filter className="h-4 w-4" />
                <span>Filter</span>
              </button>
            </div>
            
            <AnimatePresence>
              {showFilters && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-bold mb-2">Categories</h3>
                    <div className="flex flex-wrap gap-2">
                      <button 
                        onClick={() => handleCategorySelect(null)}
                        className={`tag ${!selectedCategory ? 'bg-primary-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
                      >
                        All
                      </button>
                      {allCategories.map((cat, index) => (
                        <button 
                          key={index}
                          onClick={() => handleCategorySelect(cat.name.toLowerCase())}
                          className={`tag ${selectedCategory === cat.name.toLowerCase() ? 'bg-primary-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
                        >
                          {cat.name}
                        </button>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          
          {/* Results */}
          <div>
            <div className="mb-6">
              <h2 className="text-xl font-bold">
                {filteredDebunks.length} {filteredDebunks.length === 1 ? 'Result' : 'Results'}
              </h2>
            </div>
            
            {filteredDebunks.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredDebunks.map((debunk, index) => (
                  <DebunkCard key={debunk.id} debunk={debunk} index={index} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <h3 className="text-xl font-bold mb-2">No results found</h3>
                <p className="text-gray-600">
                  Try adjusting your search or filters to find what you're looking for.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default DebunksPage;