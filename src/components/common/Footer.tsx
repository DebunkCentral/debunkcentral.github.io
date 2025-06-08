import React from 'react';
import { Link } from 'react-router-dom';
import { AlertTriangle, Mail, Twitter, Facebook, Instagram, Rss, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-6">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo and About */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <AlertTriangle className="h-6 w-6 text-primary-400" />
              <span className="font-heading text-xl font-bold text-white">
                Debunk Central
              </span>
            </Link>
            <p className="text-gray-400 mb-4">
              Your trusted source for fact-checking viral content. We debunk misinformation from social media, 
              provide evidence-based analysis, and empower you with verified facts.
            </p>
            <div className="flex space-x-4">
              {/* <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-gray-400 hover:text-white transition-colors">
                <Youtube className="h-5 w-5" />
              </a> */}
              <a href="https://www.instagram.com/debunk_central/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/debunks" className="text-gray-400 hover:text-white transition-colors">Recent Debunks</Link>
              </li>
              <li>
                <Link to="/categories" className="text-gray-400 hover:text-white transition-colors">Categories</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Contact Us</h3>
            <p className="flex items-center text-gray-400 mb-2">
              <Mail className="h-5 w-5 mr-2" />
              <a href="mailto:satyamsingh8449@gmail.com" className="hover:text-white transition-colors">
                satyamsingh8449@gmail.com
              </a>
            </p>
            <p className="text-gray-400 mb-4">
              Have content you'd like us to fact-check?
            </p>
            <Link to="/submit" className="btn-secondary">
              Submit Content
            </Link>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="pt-6 mt-6 border-t border-gray-800 text-sm text-gray-500">
          <div className="flex flex-col md:flex-row md:justify-between space-y-4 md:space-y-0">
            <p>© {currentYear} Debunk Central. All rights reserved.</p>
            <div className="space-x-4">
              <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link to="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;