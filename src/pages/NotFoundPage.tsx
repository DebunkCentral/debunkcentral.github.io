import React from 'react';
import { Link } from 'react-router-dom';
import { AlertTriangle, Home, Search } from 'lucide-react';
import { motion } from 'framer-motion';

const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <motion.div 
        className="max-w-md w-full text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex justify-center mb-6">
          <div className="h-24 w-24 rounded-full bg-primary-100 flex items-center justify-center text-primary-600">
            <AlertTriangle className="h-12 w-12" />
          </div>
        </div>
        
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Page Not Found</h1>
        <p className="text-xl text-gray-600 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
          <Link 
            to="/"
            className="btn-primary flex items-center justify-center"
          >
            <Home className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
          
          <Link 
            to="/debunks"
            className="btn-outline flex items-center justify-center"
          >
            <Search className="mr-2 h-4 w-4" />
            Browse Debunks
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default NotFoundPage;