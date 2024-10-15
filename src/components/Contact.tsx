"use client";

import React from 'react';
import { motion } from 'framer-motion'; 

export default function ContactForm() {
  return (
    <div className="bg-[#F0F7FF] p-8 w-full mt-10">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-[#00234F] text-2xl sm:text-4xl font-medium text-center mb-2">
          Contact our friendly team
        </h2>
        <p className="text-center text-gray-600 mb-8">
          Let us know how we can help! We are available Mon - Fri from 8am to 5pm.
        </p>
        
        <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-16">
          {/* Contact Details Section */}
          <motion.div
            className="flex-1 md:max-w-xs flex flex-col items-start space-y-4 p-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center shrink-0">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21.0001 15.46L15.7301 14.85L13.2101 17.37C10.3801 15.93 8.0601 13.62 6.6201 10.78L9.1501 8.25L8.5401 3H3.0301C2.4501 13.18 10.8201 21.55 21.0001 20.97V15.46Z" fill="#0038FF"/>
                </svg>
              </div>
              <span className="text-gray-600">+234 803456789</span>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center shrink-0">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z" fill="#0038FF"/>
                </svg>
              </div>
              <span className="text-gray-600">enverlab@gmail.com</span>
            </div>
          </motion.div>
          
          {/* Contact Form Section */}
          <motion.form
            className="flex-1 flex flex-col md:items-end"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
          >
            <div className="space-y-4">
              {/* Email Input */}
              <motion.div
                className="w-full"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                <label htmlFor="email" className="sr-only">Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Email:"
                  className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500 md:w-[400px] lg:w-[575px]"
                />
              </motion.div>

              {/* Message Textarea */}
              <motion.div
                className="w-full"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.4 }}
              >
                <label htmlFor="message" className="sr-only">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Message:"
                  className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500 md:w-[400px] lg:w-[575px]"
                />
              </motion.div>
              
              {/* Send Button */}
              <motion.div
                className="w-full text-right"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.6 }}
              >
                <button
                  type="submit"
                  className="bg-[#0038FF] text-white px-6 py-2 rounded-full hover:bg-blue-600 transition-colors"
                >
                  Send message
                </button>
              </motion.div>
            </div>
          </motion.form>
        </div>
      </div>
    </div>
  );
}
