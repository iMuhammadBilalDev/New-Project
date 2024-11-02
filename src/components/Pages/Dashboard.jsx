import React from 'react';
import { FaUser, FaProjectDiagram, FaTasks, FaEnvelope, FaCog } from 'react-icons/fa';

const Dashboard = () => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <main className="flex-1 p-8">
        
        <section className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
          <div className="p-6 bg-white rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
            <h3 className="text-xl font-semibold text-gray-700 mb-1">Projects</h3>
            <p className="text-3xl font-bold text-blue-500">12</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
            <h3 className="text-xl font-semibold text-gray-700 mb-1">Tasks</h3>
            <p className="text-3xl font-bold text-blue-500">34</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
            <h3 className="text-xl font-semibold text-gray-700 mb-1">Messages</h3>
            <p className="text-3xl font-bold text-blue-500">8</p>
          </div>
        </section>

        <section className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold text-gray-700 mb-4">Recent Activity</h3>
          <div className="border-t border-gray-200 py-4">
            <ul className="space-y-3">
              <li className="flex items-center text-gray-600">
                <span className="w-3 h-3 bg-blue-500 rounded-full mr-3"></span>
                Completed project: <span className="font-medium text-gray-800 ml-1">Weather App</span>
              </li>
              <li className="flex items-center text-gray-600">
                <span className="w-3 h-3 bg-green-500 rounded-full mr-3"></span>
                Added tasks to: <span className="font-medium text-gray-800 ml-1">E-commerce Website</span>
              </li>
              <li className="flex items-center text-gray-600">
                <span className="w-3 h-3 bg-yellow-500 rounded-full mr-3"></span>
                New message from <span className="font-medium text-gray-800 ml-1">deXplat</span>
              </li>
              {/* Additional Activities */}
              <li className="flex items-center text-gray-600">
                <span className="w-3 h-3 bg-purple-500 rounded-full mr-3"></span>
                Completed project: <span className="font-medium text-gray-800 ml-1">Todo App</span>
              </li>
              <li className="flex items-center text-gray-600">
                <span className="w-3 h-3 bg-red-500 rounded-full mr-3"></span>
                Updated feature in: <span className="font-medium text-gray-800 ml-1">Driver Drowsiness Detection</span>
              </li>
              <li className="flex items-center text-gray-600">
                <span className="w-3 h-3 bg-orange-500 rounded-full mr-3"></span>
                Published new update for: <span className="font-medium text-gray-800 ml-1">MERN Estate App</span>
              </li>
              <li className="flex items-center text-gray-600">
                <span className="w-3 h-3 bg-teal-500 rounded-full mr-3"></span>
                Received feedback on: <span className="font-medium text-gray-800 ml-1">Portfolio Website</span>
              </li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
