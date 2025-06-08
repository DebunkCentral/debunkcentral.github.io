import React, { useState } from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { motion } from 'framer-motion';

import PageHero from '../components/common/PageHero';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 1500);
  };

  return (
    <div>
      <PageHero 
        title="Contact Us "
        subtitle="Reach out with questions, feedback, or collaboration ideas"
      />
      
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <motion.div
              className="lg:col-span-1"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
              <p className="text-gray-600 mb-8">
                Have questions about our fact-checking process? Want to report misinformation or suggest a collaboration? 
                We'd love to hear from you.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary-100 flex items-center justify-center mr-4">
                    <Mail className="h-5 w-5 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">Email</h3>
                    <p className="text-gray-600">satyamsingh8449@gmail.com</p>
                  </div>
                </div>
                
                
                
              </div>
              
              <div className="mt-8 p-6 bg-gray-50 rounded-lg">
                <h3 className="text-lg font-bold mb-2">Follow Us</h3>
                <p className="text-gray-600 mb-4">
                  Stay updated with our latest debunks and announcements on social media.
                </p>
                <div className="flex space-x-4">
                
                  <a href="https://instagram.com/debunk_central" className="h-10 w-10 rounded-full bg-primary-600 text-white flex items-center justify-center hover:bg-primary-700 transition-colors">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path></svg>
                  </a>
                  {/* <a 
  href="https://youtube.com/yourchannel" 
  target="_blank" 
  rel="noopener noreferrer"
  className="h-10 w-10 rounded-full bg-primary-600 text-white flex items-center justify-center hover:bg-primary-700 transition-colors"
>
  <svg 
    className="h-5 w-5 text-white" 
    fill="currentColor" 
    viewBox="0 0 24 24" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M19.615 3.184c-1.932-.206-6.716-.206-6.716-.206s-4.784 0-6.716.206C3.97 3.398 3.398 4.97 3.184 6.902 2.978 8.834 2.978 12 2.978 12s0 3.166.206 5.098c.214 1.932.786 3.504 2.716 3.718 1.932.206 6.716.206 6.716.206s4.784 0 6.716-.206c1.93-.214 2.502-1.786 2.716-3.718.206-1.932.206-5.098.206-5.098s0-3.166-.206-5.098c-.214-1.932-.786-3.504-2.716-3.718zM10.5 15.5v-7l6 3.5-6 3.5z" />
  </svg>
</a> */}

                </div>
              </div>
            </motion.div>
            
            {/* Contact Form */}
            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="bg-gray-50 rounded-lg p-8">
                <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                
                {isSubmitted ? (
                  <div className="bg-green-50 border border-green-200 text-green-700 p-6 rounded-lg">
                    <h3 className="text-lg font-bold mb-2">Message Sent!</h3>
                    <p>Thank you for contacting us. We'll respond to your inquiry as soon as possible.</p>
                    <button 
                      onClick={() => setIsSubmitted(false)}
                      className="mt-4 btn-primary"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form 
  action="https://formsubmit.co/satyamsingh8449@gmail.com" 
  method="POST"
>
  {/* Hidden inputs for configuration */}
  <input type="hidden" name="_captcha" value="false" />
  <input type="hidden" name="_template" value="box" />
  <input type="hidden" name="_next" value="https://debunkcentral.com" />

  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
    <div>
      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
        Your Name <span className="text-error-500">*</span>
      </label>
      <input
        type="text"
        id="name"
        name="name"
        required
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
      />
    </div>

    <div>
      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
        Email Address <span className="text-error-500">*</span>
      </label>
      <input
        type="email"
        id="email"
        name="email"
        required
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
      />
    </div>
  </div>

  <div className="mb-6">
    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
      Subject <span className="text-error-500">*</span>
    </label>
    <select
      id="subject"
      name="subject"
      required
      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
    >
      <option value="">Select a subject</option>
      <option value="Report Misinformation">Report Misinformation</option>
      <option value="Suggest a Correction">Suggest a Correction</option>
      <option value="Media Inquiry">Media Inquiry</option>
      <option value="Collaboration">Collaboration</option>
      <option value="General Question">General Question</option>
    </select>
  </div>

  <div className="mb-6">
    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
      Message <span className="text-error-500">*</span>
    </label>
    <textarea
      id="message"
      name="message"
      required
      rows={6}
      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
    ></textarea>
  </div>

  <button 
    type="submit" 
    className="btn-primary py-3 px-6 flex items-center justify-center"
  >
    <Send className="mr-2 h-4 w-4" />
    Send Message
  </button>
</form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find answers to common questions about our fact-checking process and services.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                question: "How do I submit content for fact-checking?",
                answer: "You can submit content through our 'Submit Content' page. We ask for the link or description of the content, why you think it needs fact-checking, and where you encountered it."
              },
              {
                question: "How long does it take to fact-check a claim?",
                answer: "The time varies depending on the complexity of the claim and the availability of reliable sources. Simple claims may take 1-2 days, while more complex ones could take up to a week."
              },
              {
                question: "Do you fact-check everything that is submitted?",
                answer: "We evaluate all submissions but prioritize claims that have gained significant traction, affect public health or safety, or relate to major current events."
              },
              {
                question: "Are your fact-checks politically biased?",
                answer: "No. We apply the same standards to all claims regardless of who makes them or what political position they support. Our focus is strictly on factual accuracy."
              },
              {
                question: "How can I cite your fact-checks in my own work?",
                answer: "You're welcome to cite our work with proper attribution. Include the title of the fact-check, Debunk Central as the source, the publication date, and a link to the original article."
              },
              {
                question: "Do you offer educational resources about misinformation?",
                answer: "Yes, we provide workshops, webinars, and educational materials about media literacy and critical thinking. Contact us for more information."
              }
            ].map((faq, index) => (
              <motion.div 
                key={index}
                className="bg-white rounded-lg shadow-sm p-6 border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <h3 className="text-lg font-bold mb-3 text-primary-900">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;