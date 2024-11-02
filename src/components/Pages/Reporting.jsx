import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Registering Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const ReportingPage = () => {
  // Sample data for tasks
  const data = {
    labels: ['Completed', 'Pending'],
    datasets: [
      {
        label: 'Tasks',
        data: [15, 5], // Sample data: 15 completed tasks, 5 pending tasks
        backgroundColor: ['#4CAF50', '#FF5733'],
        borderColor: ['#388E3C', '#C62828'],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          color: '#333',
        },
      },
    },
    plugins: {
      legend: {
        labels: {
          color: '#333',
        },
      },
    },
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-8">
      <h2 className="text-4xl font-bold text-gray-800 mb-6">Task Reporting</h2>
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
        <Bar data={data} options={options} />
      </div>
      <div className="mt-6 text-center">
        <h3 className="text-xl font-semibold text-gray-700">Overview</h3>
        <p className="text-gray-600">Total Tasks: 20</p>
        <p className="text-gray-600">Completed: 15</p>
        <p className="text-gray-600">Pending: 5</p>
      </div>
    </div>
  );
};

export default ReportingPage;
