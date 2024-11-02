import React, { useState } from 'react';

const TaskPage = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState('');

  const handleAddTask = (e) => {
    e.preventDefault();
    if (task.trim()) {
      setTasks([...tasks, { id: Date.now(), text: task }]);
      setTask('');
    }
  };

  const handleDeleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-8">
      <h2 className="text-4xl font-bold text-gray-800 mb-6">My Tasks</h2>
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
        <form onSubmit={handleAddTask} className="mb-4">
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Add a new task..."
            className="border rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="mt-2 bg-blue-500 text-white font-semibold rounded-lg px-4 py-2 w-full hover:bg-blue-600 transition-colors duration-300"
          >
            Add Task
          </button>
        </form>
        <ul className="space-y-2">
          {tasks.map((task) => (
            <li key={task.id} className="flex justify-between items-center bg-gray-50 rounded-lg shadow p-3">
              <span className="text-gray-700">{task.text}</span>
              <button
                onClick={() => handleDeleteTask(task.id)}
                className="text-red-500 hover:text-red-600 transition-colors duration-300"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TaskPage;
