import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker } from 'react-icons/hi';

const Contact = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 text-gray-800">
      
      {/* Header */}
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-gray-900">Get in Touch</h1>
        <p className="text-lg text-gray-600">
          Whether you have a question or just want to say hello, I’d love to hear from you.
        </p>
      </section>

      {/* Contact Details */}
      <section className="flex flex-col sm:flex-row justify-between mt-12 mb-8 space-y-6 sm:space-y-0 sm:space-x-6">
        <div className="flex items-center space-x-3">
          <HiOutlineMail size={24} className="text-blue-500" />
          <a href="mailto:imuhammadbilaldev@gmail.com" className="text-gray-700 hover:text-blue-500">
            imuhammadbilaldev@gmail.com
          </a>
        </div>
        <div className="flex items-center space-x-3">
          <HiOutlinePhone size={24} className="text-green-500" />
          <span className="text-gray-700">+92 303 9578370</span>
        </div>
        <div className="flex items-center space-x-3">
          <HiOutlineLocationMarker size={24} className="text-red-500" />
          <span className="text-gray-700">Lahore, Pakistan</span>
        </div>
      </section>

      {/* Contact Form */}
      <section className="bg-gray-100 p-8 rounded-lg shadow-lg">
        <form className="space-y-6">
          
          {/* Name Field */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500"
              placeholder="Your Name"
              required
            />
          </div>
          
          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500"
              placeholder="Your Email"
              required
            />
          </div>
          
          {/* Subject Field */}
          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500"
              placeholder="Subject"
              required
            />
          </div>

          {/* Message Field */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              rows="4"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500"
              placeholder="Your Message"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-md font-medium hover:bg-blue-600 transition duration-200"
            >
              Send Message
            </button>
          </div>
        </form>
      </section>

      {/* Social Links */}
      <section className="flex justify-center items-center space-x-6 mt-12">
        <a href="https://www.linkedin.com/in/imuhammadbilaldev/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
          <FaLinkedin size={28} />
        </a>
        <a href="https://github.com/iMuhammadBilalDev" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900">
          <FaGithub size={28} />
        </a>
      </section>
    </div>
  );
};

export default Contact;
