import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Users, FileText, Globe, Award } from 'lucide-react';
import { motion } from 'framer-motion';

import PageHero from '../components/common/PageHero';

const AboutPage: React.FC = () => {
  return (
    <div>
      <PageHero 
        title="About Debunk Central"
        subtitle="Our mission, methodology, and the team behind the facts"
        imageUrl="https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />
      
      {/* Mission */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center mb-4">
                <Globe className="mr-2 h-6 w-6 text-primary-600" />
                <h2 className="text-3xl font-bold">Our Mission</h2>
              </div>
              <p className="text-lg text-gray-600 mb-6">
                At Debunk Central, we believe that access to factual information is essential for a healthy society. 
                Our mission is to combat the spread of misinformation by providing thorough, evidence-based analyses 
                of viral content from social media platforms, messaging apps, and online forums.
              </p>
              <p className="text-lg text-gray-600">
                We are dedicated to empowering people with the facts they need to make informed decisions, foster 
                critical thinking, and promote media literacy in an increasingly complex information landscape.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <img 
                src="https://images.pexels.com/photos/3194519/pexels-photo-3194519.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Team collaboration" 
                className="rounded-lg shadow-xl w-full"
              />
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Our Process */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Fact-Checking Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a rigorous methodology to ensure accuracy and transparency in all our debunks.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <FileText className="h-8 w-8 text-primary-600" />,
                title: "Identification",
                description: "We identify viral content through monitoring trends and user submissions. We prioritize claims that have significant reach or potential impact."
              },
              {
                icon: <CheckCircle className="h-8 w-8 text-primary-600" />,
                title: "Research & Verification",
                description: "We conducts thorough research using primary sources, peer-reviewed studies, and expert consultations to verify or debunk claims."
              },
              {
                icon: <Award className="h-8 w-8 text-primary-600" />,
                title: "Rating & Publication",
                description: "We assign a truth rating based on our findings and publish a comprehensive analysis with all sources clearly documented."
              }
            ].map((step, index) => (
              <motion.div 
                key={index}
                className="card p-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary-100 mb-6 mx-auto">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-center">{step.title}</h3>
                <p className="text-gray-600 text-center">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Team */}

      
      {/* Values */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These core principles guide our work and ensure the integrity of our fact-checking process.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Accuracy",
                description: "We prioritize factual correctness above all else, conducting thorough research before publishing."
              },
              {
                title: "Transparency",
                description: "We document our sources and methods clearly, allowing readers to verify our work."
              },
              {
                title: "Impartiality",
                description: "We apply the same standards to all claims, regardless of who makes them or what positions they support."
              },
              {
                title: "Accessibility",
                description: "We present complex information in clear, understandable language without oversimplification."
              }
            ].map((value, index) => (
              <motion.div 
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <h3 className="text-xl font-bold mb-2 text-primary-900">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-16 bg-primary-900 text-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Join Our Mission</h2>
            <p className="text-xl text-gray-200 mb-8">
              Help us fight misinformation by submitting content for fact-checking or supporting our work.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/submit" className="btn-primary bg-white text-primary-900 hover:bg-gray-100">
                Submit Content
              </Link>
              <Link to="/contact" className="btn-outline border-white text-white hover:bg-white/10">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;