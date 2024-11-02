import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { HiOutlineMail, HiOutlineLocationMarker } from 'react-icons/hi';

const About = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 text-gray-800 space-y-12">
      
      {/* Header */}
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-gray-900">Muhammad Bilal</h1>
        <p className="text-lg font-medium text-gray-600">Frontend Developer | Lahore, Pakistan</p>
        
        <div className="flex justify-center items-center space-x-6 mt-4">
          <a href="mailto:imuhammadbilaldev@gmail.com" className="flex items-center space-x-2 hover:text-blue-500">
            <HiOutlineMail size={20} />
            <span>imuhammadbilaldev@gmail.com</span>
            
          </a>
          <a href="https://www.linkedin.com/in/imuhammadbilaldev/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
            <FaLinkedin size={24} />
          </a>
          <a href="https://github.com/iMuhammadBilalDev" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900">
            <FaGithub size={24} />
          </a>
          <div className="flex items-center space-x-2 text-gray-600">
            <HiOutlineLocationMarker size={20} />
            <span>Lahore, Pakistan</span>
          </div>
        </div>
      </section>

      {/* Education */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-900 border-b pb-2 mb-4">Education</h2>
        <p className="text-lg font-medium">B.S. in Computer Science</p>
        <p className="text-gray-500">The Islamia University of Bahawalpur, Bahawalpur, Pakistan (2020 – 2024)</p>
      </section>

      {/* Skills */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-900 border-b pb-2 mb-4">Skills</h2>
        <div className="flex flex-wrap gap-4">
          <div className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-medium">JavaScript</div>
          <div className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-medium">TypeScript</div>
          <div className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-medium">SQL</div>
          <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full font-medium">React.js</div>
          <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full font-medium">Node.js</div>
          <div className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full font-medium">Firebase</div>
          <div className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full font-medium">VS Code</div>
          <div className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full font-medium">Sublime</div>
        </div>
      </section>

      {/* Experience */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-900 border-b pb-2 mb-4">Experience</h2>
        <div className="bg-gray-100 p-4 rounded-lg shadow-md">
          <h3 className="font-semibold text-lg">Frontend Developer at deXplat</h3>
          <p className="text-gray-500 text-sm">Islamabad, Pakistan | Feb 2024 – Present</p>
          <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-700">
            <li>Developed a clone of the company website using vanilla JavaScript, jQuery, HTML, and CSS.</li>
            <li>Replicated design and functionality with improved cross-browser compatibility and performance.</li>
            <li>Collaborated with team members using Git, and participated in code reviews for quality improvement.</li>
          </ul>
        </div>
      </section>

      {/* Projects */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-900 border-b pb-2 mb-4">Projects</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="bg-gray-100 p-4 rounded-lg shadow-md">
            <h3 className="font-semibold">Driver Drowsiness Detection System</h3>
            <p className="text-sm text-gray-500">Using Python & React | Oct 2023 – June 2024</p>
            <p className="text-gray-700">A system that alerts the driver if they show signs of drowsiness by detecting prolonged eye closure.</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg shadow-md">
            <h3 className="font-semibold">Weather App</h3>
            <p className="text-sm text-gray-500">GitHub</p>
            <p className="text-gray-700">Weatherly provides real-time weather information for any location with a clean, intuitive interface.</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg shadow-md">
            <h3 className="font-semibold">Todoify App</h3>
            <p className="text-sm text-gray-500">GitHub</p>
            <p className="text-gray-700">Todoify helps organize daily tasks, allowing users to create, track, and prioritize tasks for productivity.</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg shadow-md">
            <h3 className="font-semibold">Ecommerce Website</h3>
            <p className="text-sm text-gray-500">GitHub</p>
            <p className="text-gray-700">An e-commerce platform built with modern technologies, supporting product browsing, cart, and checkout.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
