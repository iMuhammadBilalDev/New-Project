import React from 'react';
import { FaCode, FaPaintBrush, FaMobileAlt, FaServer } from 'react-icons/fa';

const Services = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12 text-gray-800 space-y-12">
      {/* Header */}
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-gray-900">My Services</h1>
        <p className="text-lg text-gray-600">
          I provide a range of services to bring your ideas to life and help your business thrive online.
        </p>
      </section>

      {/* Services Grid */}
      <section className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {/* Service 1 */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-200">
          <div className="text-blue-500 mb-4">
            <FaCode size={40} />
          </div>
          <h3 className="text-xl font-semibold mb-2">Web Development</h3>
          <p className="text-gray-700">
            Crafting responsive and engaging websites using modern technologies like React, Next.js, and more.
          </p>
        </div>

        {/* Service 2 */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-200">
          <div className="text-green-500 mb-4">
            <FaPaintBrush size={40} />
          </div>
          <h3 className="text-xl font-semibold mb-2">UI/UX Design</h3>
          <p className="text-gray-700">
            Designing user-friendly interfaces that provide a seamless user experience and align with your brand.
          </p>
        </div>

        {/* Service 3 */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-200">
          <div className="text-purple-500 mb-4">
            <FaMobileAlt size={40} />
          </div>
          <h3 className="text-xl font-semibold mb-2">Mobile Development</h3>
          <p className="text-gray-700">
            Building cross-platform mobile applications that work on both iOS and Android using React Native.
          </p>
        </div>

        {/* Service 4 */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-200">
          <div className="text-red-500 mb-4">
            <FaServer size={40} />
          </div>
          <h3 className="text-xl font-semibold mb-2">Backend Development</h3>
          <p className="text-gray-700">
            Developing scalable backend solutions using Node.js, Firebase, and REST APIs to support your applications.
          </p>
        </div>

        {/* Service 5 */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-200">
          <div className="text-yellow-500 mb-4">
            <FaCode size={40} />
          </div>
          <h3 className="text-xl font-semibold mb-2">API Integration</h3>
          <p className="text-gray-700">
            Seamlessly integrating third-party APIs to extend functionality, improve connectivity, and boost user experience.
          </p>
        </div>

        {/* Service 6 */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-200">
          <div className="text-pink-500 mb-4">
            <FaMobileAlt size={40} />
          </div>
          <h3 className="text-xl font-semibold mb-2">Maintenance & Support</h3>
          <p className="text-gray-700">
            Offering ongoing support and maintenance to keep your website or app updated and running smoothly.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Services;
