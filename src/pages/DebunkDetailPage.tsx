import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, Link as LinkIcon, Share2, Facebook, Twitter, Bookmark, ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import TruthMeter from '../components/common/TruthMeter';
import { allDebunks } from '../data/debunks';
import { Debunk } from '../types/debunk';

const DebunkDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [debunk, setDebunk] = useState<Debunk | null>(null);
  const [relatedDebunks, setRelatedDebunks] = useState<Debunk[]>([]);
  
  useEffect(() => {
    if (id) {
      // Find the debunk with the matching ID
      const foundDebunk = allDebunks.find(d => d.id === id);
      
      if (foundDebunk) {
        setDebunk(foundDebunk);
        
        // Find related debunks based on categories
        const related = allDebunks
          .filter(d => 
            d.id !== id && 
            d.categories.some(cat => 
              foundDebunk.categories.includes(cat)
            )
          )
          .slice(0, 3);
        
        setRelatedDebunks(related);
      }
    }
  }, [id]);
  
  function getYouTubeVideoId(url: string): string {
  const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:shorts\/|watch\?v=))([\w-]{11})/);
  return match ? match[1] : "";
}

  if (!debunk) {
    return (
      <div className="container-custom py-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Debunk not found</h2>
        <p className="mb-6">The debunk you're looking for doesn't exist or has been removed.</p>
        <Link to="/debunks" className="btn-primary">
          Browse All Debunks
        </Link>
      </div>
    );
  }

  return (
       <>
      <Helmet>
        <title>{debunk.title} | DebunkCentral</title>
        <meta name="description" content={debunk.summary} />
        <meta property="og:title" content={debunk.title} />
        <meta property="og:description" content={debunk.summary} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={debunk.imageUrl} />
        <meta property="og:url" content={`https://debunkcentral.com/debunks/${debunk.id}`} />
        <link rel="canonical" href={`https://debunkcentral.com/debunks/${debunk.id}`} />
        {/* You can add Twitter card meta tags similarly */}
      </Helmet>
    <div>
      {/* Hero */}
      <section className="relative py-16 md:py-24 text-white">
        <div className="absolute inset-0 z-0">
          <img 
            src={debunk.imageUrl} 
            alt={debunk.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80"></div>
        </div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <Link 
              to="/debunks" 
              className="inline-flex items-center text-gray-300 hover:text-white mb-6"
            >
              <ArrowLeft className="h-4 w-4 mr-1" />
              <span>Back to all debunks</span>
            </Link>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex flex-wrap gap-2 mb-4">
                {debunk.categories.map((category, index) => (
                  <Link 
                    key={index}
                    to={`/categories/${category.toLowerCase()}`}
                    className="tag bg-white/20 text-white hover:bg-white/30 transition-colors"
                  >
                    {category}
                  </Link>
                ))}
              </div>
              
              <h1 className="mb-4">{debunk.title}</h1>
              
              <TruthMeter level={debunk.truthLevel} className="mb-6" />
              
              <div className="flex items-center text-gray-300 mb-8">
                <Calendar className="h-4 w-4 mr-1" />
                <span>{debunk.date}</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Content */}
      <section className="py-12 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <motion.article
                className="prose prose-lg max-w-none"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="bg-gray-100 p-6 rounded-lg mb-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Claim</h3>
                  <p className="italic text-gray-700">{debunk.claim}</p>
                </div>
                
                <h2>Summary</h2><br></br>
                <p>{debunk.summary}</p>
                
                <br></br><h2>Analysis</h2><br></br>
                <p>{debunk.analysis}</p>
                
                <br></br><h2>The Facts</h2><br></br>
                <p dangerouslySetInnerHTML={{ __html: debunk.facts.replace(/\n/g, '<br />') }} />
                
                {debunk.quotes && debunk.quotes.length > 0 && (
                  <>
                    <h2>Expert Quotes</h2>
                    {debunk.quotes.map((quote, index) => (
                      <blockquote key={index} className="border-l-4 border-primary-500 pl-4 italic">
                        <p>{quote.text}</p>
                        <footer className="text-gray-600 not-italic">— {quote.author}, {quote.credential}</footer>
                      </blockquote>
                    ))}
                  </>
                )}
                
                <br></br><h2>Conclusion</h2><br></br>
                <p>{debunk.conclusion}</p>
                
                {/* Sources */}
                <br></br><h2>Sources</h2><br></br>
                <ul>
                  {debunk.sources.map((source, index) => (
                    <li key={index}>
                      <a 
                        href={source.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center hover:text-primary-600 transition-colors"
                      >
                        <span>{source.title}</span>
                        <LinkIcon className="h-4 w-4 ml-1 inline" />
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.article>
              
              {/* Share */}
              <motion.div
                className="border-t border-gray-200 mt-8 pt-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {/* <h3 className="font-bold text-lg mb-4">Share this debunk</h3> */}
                {/* <div className="flex space-x-2">
                  <button className="btn-outline p-2">
                    <Facebook className="h-5 w-5" />
                  </button>
                  <button className="btn-outline p-2">
                    <Twitter className="h-5 w-5" />
                  </button>
                  <button className="btn-outline p-2">
                    <Share2 className="h-5 w-5" />
                  </button>
                  <button className="btn-outline p-2">
                    <Bookmark className="h-5 w-5" />
                  </button>
                </div> */}
              </motion.div>
            </div>
            
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <motion.div
                className="sticky top-24"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                {/* Original Source */}
                {/* <div className="card p-6 mb-6">
                  <h3 className="font-bold text-lg mb-4">Original Source</h3>
                  <p className="text-gray-600 mb-4">
                    This claim originated from:
                  </p>
                  <a 
                    href={debunk.originalSourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-primary-600 hover:text-primary-700 transition-colors"
                  >
                    <span className="mr-2">View Original Content</span>
                    <LinkIcon className="h-4 w-4" />
                  </a>
                </div> */}
                <div className="card p-6 mb-6">
  <h3 className="font-bold text-lg mb-4">Original Source</h3>
  <p className="text-gray-600 mb-4">
    This claim originated from:
  </p>

  <div className="aspect-w-9 aspect-h-16 mb-4">
    <iframe
      src={`https://www.youtube.com/embed/${getYouTubeVideoId(debunk.originalSourceUrl)}`}
      title="YouTube video"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      className="w-full h-full rounded-lg"
    ></iframe>
  </div>

  <a 
    href={debunk.originalSourceUrl}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center text-primary-600 hover:text-primary-700 transition-colors"
  >
    <span className="mr-2">Watch on YouTube</span>
    <LinkIcon className="h-4 w-4" />
  </a>
</div>
                
                {/* Related Debunks */}
                {relatedDebunks.length > 0 && (
                  <div className="card p-6">
                    <h3 className="font-bold text-lg mb-4">Related Debunks</h3>
                    <div className="space-y-4">
                      {relatedDebunks.map((related, index) => (
                        <div key={index} className="flex space-x-3">
                          <div className="flex-shrink-0">
                            <img 
                              src={related.imageUrl} 
                              alt={related.title} 
                              className="w-16 h-16 object-cover rounded"
                            />
                          </div>
                          <div>
                            <h4 className="font-medium line-clamp-2 hover:text-primary-600 transition-colors">
                              <Link to={`/debunks/${related.id}`}>
                                {related.title}
                              </Link>
                            </h4>
                            <TruthMeter level={related.truthLevel} className="mt-1" />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default DebunkDetailPage;