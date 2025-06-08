import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, Clock, Share2 } from 'lucide-react';
import { motion } from 'framer-motion';
import TruthMeter from '../common/TruthMeter';
import { Debunk } from '../../types/debunk';

interface FeaturedDebunkProps {
  debunk: Debunk;
}

const FeaturedDebunk: React.FC<FeaturedDebunkProps> = ({ debunk }) => {
  return (
    <motion.article 
      className="card overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative">
        <img 
          src={debunk.imageUrl} 
          alt={debunk.title} 
          className="w-full h-64 object-cover"
        />
        <div className="absolute top-4 right-4 bg-primary-600 text-white px-4 py-1 rounded-full text-sm font-medium">
          Featured
        </div>
      </div>

      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-4">
          {debunk.categories.map((category, index) => (
            <Link 
              key={index}
              to={`/categories/${category.toLowerCase()}`}
              className="tag bg-primary-100 text-primary-800 hover:bg-primary-200 transition-colors"
            >
              {category}
            </Link>
          ))}
        </div>

        <h2 className="text-2xl font-bold mb-3 hover:text-primary-600 transition-colors">
          <Link to={`/debunks/${debunk.id}`}>
            {debunk.title}
          </Link>
        </h2>

        <TruthMeter level={debunk.truthLevel} className="mb-4" />

        <p className="text-gray-600 mb-4">
          {debunk.summary}
        </p>

        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            <span>{debunk.date}</span>
          </div>
          
          <div className="flex items-center">
            <span className="mr-1">Original:</span>
            <a 
              href={debunk.originalSourceUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center text-primary-600 hover:text-primary-700"
            >
              <span className="mr-1">Source</span>
              <ExternalLink className="h-3 w-3" />
            </a>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <Link 
            to={`/debunks/${debunk.id}`}
            className="btn-primary"
          >
            Read Full Analysis
          </Link>
          
          <button 
            className="p-2 text-gray-500 hover:text-primary-600 transition-colors"
            aria-label="Share"
          >
            <Share2 className="h-5 w-5" />
          </button>
        </div>
      </div>
    </motion.article>
  );
};

export default FeaturedDebunk;