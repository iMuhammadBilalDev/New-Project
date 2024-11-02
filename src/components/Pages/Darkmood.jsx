import React, { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => 
    localStorage.getItem('theme') === 'dark'
  );

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  useEffect(() => {
    const className = 'dark';
    const body = document.body; // Apply to the body element

    if (isDarkMode) {
      body.classList.add(className);
      localStorage.setItem('theme', 'dark');
    } else {
      body.classList.remove(className);
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  return (
    <button 
      onClick={toggleTheme} 
      className="p-2 flex items-center bg-gray-200 rounded shadow hover:bg-gray-300 transition duration-300"
    >
      {isDarkMode ? (
        <>
          <Sun size={20} className="mr-2" /> Light Mode
        </>
      ) : (
        <>
          <Moon size={20} className="mr-2" /> Dark Mode
        </>
      )}
    </button>
  );
};

export default ThemeToggle;
