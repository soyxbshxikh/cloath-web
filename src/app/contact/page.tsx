'use client';

import { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import toast from 'react-hot-toast';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create email body with form data
    const emailBody = `
Name: ${formData.name}
Email: ${formData.email}
Subject: ${formData.subject}

Message:
${formData.message}
    `;
    
    // Create mailto link with form data
    const mailtoLink = `mailto:laxmijaiswar@veda-edu.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(emailBody)}`;
    
    // Open email client with prepopulated data
    window.open(mailtoLink, '_blank');
    
    // Show success message
    toast.success('Thank you for your message! Redirecting to your email client...');
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };
  
  return (
    <div className="container mx-auto py-12 px-6">
      <h1 className="text-3xl font-bold mb-8 text-center">Contact Us</h1>
      
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-semibold mb-6">Send Us a Message</h2>
            <p className="text-gray-600 mb-6">
              Have questions about our products or services? Send us a message at{" "}
              <a href="mailto:laxmijaiswar@veda-edu.com" className="text-pink-500 font-medium hover:underline">
                laxmijaiswar@veda-edu.com
              </a>{" "}
              or use the form below.
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Name*
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-pink-500 focus:border-pink-500"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Email*
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-pink-500 focus:border-pink-500"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject*
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-pink-500 focus:border-pink-500"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message*
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-pink-500 focus:border-pink-500"
                  required
                />
              </div>
              
              <button
                type="submit"
                className="bg-pink-500 text-white py-3 px-6 rounded-md hover:bg-pink-600 transition-colors"
              >
                Send Message
              </button>
              <p className="text-sm text-gray-500 mt-2">
                By clicking &quot;Send Message&quot;, your message will be sent directly to our email through your default email client.
              </p>
            </form>
          </div>
          
          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center">
                  <FaMapMarkerAlt className="text-pink-500" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium">Our Store Location</h3>
                  <p className="text-gray-600 mt-1">
                    Waliv naka, Vasai east<br />
                    Mumbai, Maharashtra 401208
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center">
                  <FaPhone className="text-pink-500" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium">Phone Number</h3>
                  <p className="text-gray-600 mt-1">
                    <a href="tel:+918830391908" className="hover:text-pink-500">+91 8830391908</a>
                  </p>
                  <p className="text-gray-600">Mon-Sat, 10:00 AM - 8:00 PM</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center">
                  <FaEnvelope className="text-pink-500" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium">Email Address</h3>
                  <p className="text-gray-600 mt-1">
                    <a href="mailto:laxmijaiswar@veda-edu.com" className="hover:text-pink-500">laxmijaiswar@veda-edu.com</a>
                  </p>
                  <p className="text-gray-600">We aim to respond within 24 hours</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-medium mb-3">Business Hours</h3>
              <table className="w-full">
                <tbody>
                  <tr>
                    <td className="py-2 text-gray-600">Monday - Saturday</td>
                    <td className="py-2 text-right">10:00 AM - 8:00 PM</td>
                  </tr>
                  <tr>
                    <td className="py-2 text-gray-600">Sunday</td>
                    <td className="py-2 text-right">Closed</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}