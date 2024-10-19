import React from 'react';

const Dashboard = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Page Title */}
      <div className="mb-6">
        <h1 className="text-3xl font-semibold text-gray-800">Dashboard</h1>
        <p className="text-gray-600">Overview of your recent activity</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Card 1 */}
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-lg font-semibold text-gray-800">Total Projects</h2>
          <p className="mt-3 text-4xl font-bold text-gray-800">24</p>
        </div>

        {/* Card 2 */}
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-lg font-semibold text-gray-800">Tasks Completed</h2>
          <p className="mt-3 text-4xl font-bold text-gray-800">98</p>
        </div>

        {/* Card 3 */}
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-lg font-semibold text-gray-800">Upcoming Deadlines</h2>
          <p className="mt-3 text-4xl font-bold text-gray-800">5</p>
        </div>

        {/* Card 4 */}
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-lg font-semibold text-gray-800">Support Tickets</h2>
          <p className="mt-3 text-4xl font-bold text-gray-800">12</p>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-gray-800">Recent Activity</h2>
        <div className="bg-white shadow rounded-lg mt-4 p-6">
          <ul>
            <li className="flex justify-between py-3 border-b">
              <span className="text-gray-800">Completed task "Design new homepage"</span>
              <span className="text-gray-600">2 hours ago</span>
            </li>
            <li className="flex justify-between py-3 border-b">
              <span className="text-gray-800">Opened new support ticket</span>
              <span className="text-gray-600">5 hours ago</span>
            </li>
            <li className="flex justify-between py-3 border-b">
              <span className="text-gray-800">Reviewed project "Mobile App"</span>
              <span className="text-gray-600">1 day ago</span>
            </li>
            <li className="flex justify-between py-3">
              <span className="text-gray-800">Completed task "Fix bug in login flow"</span>
              <span className="text-gray-600">2 days ago</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-gray-800">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
          <button className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-4 rounded-lg shadow-lg">
            Create New Project
          </button>
          <button className="bg-green-500 hover:bg-green-600 text-white py-3 px-4 rounded-lg shadow-lg">
            Assign Task
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
