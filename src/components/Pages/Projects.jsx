import React from 'react';

const projects = [
  {
    title: 'Weather App',
    description: 'A modern weather application providing real-time weather information using React.',
    technologies: 'React, Tailwind CSS, OpenWeather API',
    link: 'https://react-weather-app-pbvl.vercel.app/',
  },
  {
    title: 'Todo App',
    description: 'A task management application designed to help you organize your daily tasks efficiently.',
    technologies: 'React, Redux, Firebase',
    link: 'https://todo-app-ik4a.vercel.app/',
  },
  {
    title: 'E-commerce Website',
    description: 'An e-commerce platform allowing users to browse and purchase products online.',
    technologies: 'React, Node.js, MongoDB',
    link: 'https://e-commerce-website-ten-jade.vercel.app/',
  },
  {
    title: 'Quiz App',
    description: 'An interactive quiz application that allows users to test their knowledge on various topics.',
    technologies: 'React, Redux, CSS',
    link: 'https://quiz-app-kappa-ebon.vercel.app/',
  },
  {
    title: 'Portfolio Website',
    description: 'A personal portfolio showcasing my projects and skills.',
    technologies: 'React, Tailwind CSS',
    link: 'https://portfolio-react-with-tailwind.vercel.app/', 
  },
];

const Projects = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 p-8">
    <h2 className="text-3xl font-bold text-gray-800 mb-6">My Projects</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project, index) => (
        <div key={index} className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <h3 className="text-xl font-semibold text-gray-700 mb-2">{project.title}</h3>
          <p className="text-gray-600 mb-2">{project.description}</p>
          <p className="text-sm text-gray-500">Technologies: {project.technologies}</p>
          <a href={project.link} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block text-blue-500 hover:underline">
            View Project
          </a>
        </div>
      ))}
    </div>
  </div>
  );
};

export default Projects;
