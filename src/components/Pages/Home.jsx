import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-50 to-blue-100 text-gray-800 px-6 py-12">
      
      {/* Hero Section */}
      <section className="text-center space-y-6">
        <h1 className="text-5xl font-bold text-gray-900 animate-fade-in-up">Welcome! I’m Muhammad Bilal</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto animate-fade-in-up delay-150">
          A passionate Frontend Developer based in Pakistan, dedicated to crafting high-quality, user-centric web applications using the latest technologies.
        </p>
        
        {/* CTA Buttons */}
        <div className="mt-8 space-x-4 animate-fade-in-up delay-300">
          <Link
            to="/about"
            className="px-6 py-3 bg-blue-500 text-white rounded-lg font-medium shadow-md hover:shadow-lg hover:bg-blue-600 transition duration-200 transform hover:scale-105"
          >
            Learn More About Me
          </Link>
          <Link
            to="/contact"
            className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg font-medium shadow-md hover:shadow-lg hover:bg-gray-300 transition duration-200 transform hover:scale-105"
          >
            Get in Touch
          </Link>
        </div>
      </section>

      {/* Skills Section */}
      <section className="grid gap-8 sm:grid-cols-3 mt-16">
        <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transition duration-300 transform hover:scale-105">
          <h3 className="text-xl font-semibold text-gray-800">JavaScript</h3>
          <p className="text-gray-600">Building interactive, performant web interfaces with modern JavaScript.</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transition duration-300 transform hover:scale-105">
          <h3 className="text-xl font-semibold text-gray-800">React.js</h3>
          <p className="text-gray-600">Creating scalable, high-performance applications with React.</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transition duration-300 transform hover:scale-105">
          <h3 className="text-xl font-semibold text-gray-800">Firebase</h3>
          <p className="text-gray-600">Developing real-time applications using Firebase for backend services.</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
