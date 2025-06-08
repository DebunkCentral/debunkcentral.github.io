import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Share2 } from 'lucide-react';
import { motion } from 'framer-motion';
import TruthMeter from '../common/TruthMeter';
import { Debunk } from '../../types/debunk';

interface DebunkCardProps {
  debunk: Debunk;
  index: number;
}

const DebunkCard: React.FC<DebunkCardProps> = ({ debunk, index }) => {
  return (
    <motion.article 
      className="card h-full flex flex-col"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
    >
      <div className="relative">
        <Link to={`/debunks/${debunk.id}`}>
          <img 
            src={debunk.imageUrl} 
            alt={debunk.title} 
            className="w-full h-48 object-cover"
          />
        </Link>
      </div>

      <div className="p-4 flex-1 flex flex-col">
        <div className="flex flex-wrap gap-1 mb-2">
          {debunk.categories.slice(0, 2).map((category, index) => (
            <Link 
              key={index}
              to={`/categories/${category.toLowerCase()}`}
              className="tag bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors"
            >
              {category}
            </Link>
          ))}
          {debunk.categories.length > 2 && (
            <span className="tag bg-gray-100 text-gray-500">
              +{debunk.categories.length - 2}
            </span>
          )}
        </div>

        <h3 className="text-lg font-bold mb-2 hover:text-primary-600 transition-colors">
          <Link to={`/debunks/${debunk.id}`}>
            {debunk.title}
          </Link>
        </h3>

        <TruthMeter level={debunk.truthLevel} className="mb-3" />

        <p className="text-sm text-gray-600 mb-4 line-clamp-3">
          {debunk.summary}
        </p>

        <div className="mt-auto flex items-center justify-between text-xs text-gray-500">
          <div className="flex items-center">
            <Clock className="h-3 w-3 mr-1" />
            <span>{debunk.date}</span>
          </div>
          
          <button 
            className="p-1 text-gray-500 hover:text-primary-600 transition-colors"
            aria-label="Share"
          >
            <Share2 className="h-4 w-4" />
          </button>
        </div>
      </div>
    </motion.article>
  );
};

export default DebunkCard;