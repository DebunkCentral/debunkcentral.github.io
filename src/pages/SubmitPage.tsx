import React, { useState } from 'react';
import { Send, FileText, Link as LinkIcon, AlertTriangle, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

import PageHero from '../components/common/PageHero';

const SubmitPage: React.FC = () => {
  const [formData, setFormData] = useState({
    contentType: '',
    contentUrl: '',
    contentDescription: '',
    whereEncountered: '',
    whyFactCheck: '',
    name: '',
    email: '',
    isAnonymous: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const isCheckbox = type === 'checkbox';
    
    setFormData(prev => ({
      ...prev,
      [name]: isCheckbox ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        contentType: '',
        contentUrl: '',
        contentDescription: '',
        whereEncountered: '',
        whyFactCheck: '',
        name: '',
        email: '',
        isAnonymous: false
      });
    }, 1500);
  };

  return (
    <div>
      <PageHero 
        title="Submit Content for Fact-Checking"
        subtitle="Help us combat misinformation by submitting suspicious content"
        imageUrl="https://images.pexels.com/photos/6953875/pexels-photo-6953875.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />
      
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="bg-gray-50 rounded-lg p-8">
              {isSubmitted ? (
                <motion.div
                  className="text-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="h-16 w-16 rounded-full bg-success-100 text-success-500 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="h-8 w-8" />
                  </div>
                  <h2 className="text-2xl font-bold mb-4">Thank You for Your Submission!</h2>
                  <p className="text-gray-600 mb-6">
                    We've received your submission and our team will review it soon. 
                    If we decide to fact-check this content, we'll publish our findings on our website.
                  </p>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="btn-primary"
                  >
                    Submit Another Claim
                  </button>
                </motion.div>
              ) : (
                <>
                  <div className="mb-8">
                    <h2 className="text-2xl font-bold mb-4">Submit Content for Fact-Checking</h2>
                    <p className="text-gray-600">
                      Help us combat misinformation by submitting suspicious content you've encountered on social media, 
                      messaging apps, or other platforms. Our team will review your submission and determine if it warrants a fact-check.
                    </p>
                  </div>
                  
                  <form 
  action="https://formsubmit.co/satyamsingh8449@gmail.com" 
  method="POST"
>
  <div className="space-y-6">

    {/* Required hidden inputs for FormSubmit */}
    <input type="hidden" name="_captcha" value="false" />
    <input type="hidden" name="_template" value="table" />
    <input type="hidden" name="_subject" value="New Fact-Check Submission" />
    <input type="hidden" name="_next" value="https://debunkcentral.com" />

    <div>
      <label htmlFor="contentType" className="block text-sm font-medium text-gray-700 mb-1">
        Type of Content <span className="text-error-500">*</span>
      </label>
      <select
        id="contentType"
        name="Type of Content"
        required
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
      >
        <option value="">Select content type</option>
        <option value="Social Media Post">Social Media Post</option>
        <option value="Video/Reel">Video/Reel</option>
        <option value="WhatsApp Message">WhatsApp Message</option>
        <option value="News Article">News Article</option>
        <option value="Image/Meme">Image/Meme</option>
        <option value="Other">Other</option>
      </select>
    </div>

    <div>
      <label htmlFor="contentUrl" className="block text-sm font-medium text-gray-700 mb-1">
        Content URL (if available)
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <LinkIcon className="h-5 w-5 text-gray-400" />
        </div>
        <input
          type="url"
          id="contentUrl"
          name="Content URL"
          placeholder="https://..."
          className="w-full pl-10 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
        />
      </div>
    </div>

    <div>
      <label htmlFor="contentDescription" className="block text-sm font-medium text-gray-700 mb-1">
        Description of the Content <span className="text-error-500">*</span>
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 pt-3 pointer-events-none">
          <FileText className="h-5 w-5 text-gray-400" />
        </div>
        <textarea
          id="contentDescription"
          name="Content Description"
          required
          rows={4}
          placeholder="Describe the claim or content that needs fact-checking..."
          className="w-full pl-10 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
        ></textarea>
      </div>
    </div>

    <div>
      <label htmlFor="whereEncountered" className="block text-sm font-medium text-gray-700 mb-1">
        Where did you encounter this content? <span className="text-error-500">*</span>
      </label>
      <input
        type="text"
        id="whereEncountered"
        name="Where Encountered"
        required
        placeholder="e.g., Facebook, Instagram, WhatsApp group..."
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
      />
    </div>

    <div>
      <label htmlFor="whyFactCheck" className="block text-sm font-medium text-gray-700 mb-1">
        Why do you think this needs fact-checking? <span className="text-error-500">*</span>
      </label>
      <textarea
        id="whyFactCheck"
        name="Why Fact-Check"
        required
        rows={3}
        placeholder="Explain why you believe this content may contain misinformation..."
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
      ></textarea>
    </div>

    <div className="bg-primary-50 p-4 rounded-md border-l-4 border-primary-500 flex">
      <AlertTriangle className="h-5 w-5 text-primary-600 mr-3 flex-shrink-0 mt-0.5" />
      <div>
        <h4 className="font-bold text-primary-900 mb-1">Your Information</h4>
        <p className="text-sm text-primary-800">
          Your information helps us contact you if we need more details. You can choose to remain anonymous.
        </p>
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
          Your Name
        </label>
        <input
          type="text"
          id="name"
          name="Name"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          name="Email"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
        />
      </div>
    </div>

    <div className="flex items-center">
      <input
        type="checkbox"
        id="isAnonymous"
        name="Submit Anonymously"
        className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
      />
      <label htmlFor="isAnonymous" className="ml-2 block text-sm text-gray-700">
        I prefer to submit this anonymously
      </label>
    </div>

    <button 
      type="submit" 
      className="btn-primary py-3 px-6 w-full flex items-center justify-center"
    >
      <Send className="mr-2 h-4 w-4" />
      Submit for Fact-Checking
    </button>
  </div>
</form>

                </>
              )}
            </div>
          </div>
        </div>
      </section>
      
      {/* Info */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What Happens Next?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              After you submit content for fact-checking, here's what you can expect from our team.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary-200"></div>
              
              {/* Timeline Items */}
              <div className="space-y-12">
                {[
                  {
                    title: "Review",
                    description: "Our team reviews your submission to determine if it meets our criteria for fact-checking. We prioritize claims that have significant reach or potential impact."
                  },
                  {
                    title: "Research",
                    description: "If selected, our fact-checkers begin researching the claim using primary sources, consulting experts, and gathering evidence to verify or debunk the claim."
                  },
                  {
                    title: "Analysis",
                    description: "We analyze the evidence, evaluate the context, and determine the accuracy of the claim based on our findings."
                  },
                  {
                    title: "Publication",
                    description: "We publish our fact-check with a clear rating, detailed explanation, and all sources used in our research."
                  }
                ].map((step, index) => (
                  <motion.div 
                    key={index}
                    className="relative pl-16"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <div className="absolute left-0 flex items-center justify-center h-16 w-16 rounded-full bg-primary-100 border-4 border-white text-primary-600 font-bold text-xl">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-primary-900 mb-2">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Criteria */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Selection Criteria</h2>
              <p className="text-gray-600">
                While we review all submissions, we can't fact-check everything. Here's what we consider when selecting claims to investigate:
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "Reach and Impact",
                  description: "Content that has been widely shared or has the potential to influence public opinion or behavior."
                },
                {
                  title: "Public Interest",
                  description: "Claims related to public health, safety, politics, or major current events."
                },
                {
                  title: "Verifiability",
                  description: "Claims that can be verified or debunked using credible sources and evidence."
                },
                {
                  title: "Timeliness",
                  description: "Recent or recurring claims that are currently circulating."
                }
              ].map((criteria, index) => (
                <motion.div 
                  key={index}
                  className="bg-gray-50 p-6 rounded-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <h3 className="text-lg font-bold mb-2 text-primary-900">{criteria.title}</h3>
                  <p className="text-gray-600">{criteria.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SubmitPage;