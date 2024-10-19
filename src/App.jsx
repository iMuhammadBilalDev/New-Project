import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Sidebar, SidebarItem } from './components/Sidebar';
import { Calendar as CalendarIcon, Flag, Layers, LayoutDashboard, LifeBuoy, Settings, StickyNote, Home as HomeIcon } from 'lucide-react'; // Renamed Calendar icon
import { Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Pages/Home'; 
import Dashboard from './components/Pages/Dashboard';
import Projects from './components/Pages/Projects';
import Calendar from './components/Pages/Calendar';

function App() {
  return (
    
    <Router>
      <Navbar />
      <div className='flex'>
        <Sidebar>
          <Link to="/">
            <SidebarItem icon={<HomeIcon size={20} />} text="Home" />
          </Link>
          <Link to="/dashboard">
            <SidebarItem icon={<LayoutDashboard size={20} />} text="Dashboard" />
          </Link>
          <Link to="/projects">
            <SidebarItem icon={<StickyNote size={20} />} text="Projects" alert />
          </Link>
          <Link to="/calendar">
            <SidebarItem icon={<CalendarIcon size={20} />} text="Calendar" />
          </Link>
          <Link to="/task">
            <SidebarItem icon={<Layers size={20} />} text="Task" />
          </Link>
          <Link to="/reporting">
            <SidebarItem icon={<Flag size={20} />} text="Reporting" />
          </Link>
          <hr className='my-3' />
          <Link to="/settings">
            <SidebarItem icon={<Settings size={20} />} text="Settings" />
          </Link>
          <Link to="/help">
            <SidebarItem icon={<LifeBuoy size={20} />} text="Help" />
          </Link>
        </Sidebar>
        
        <div className="flex-1 p-4">
          <Routes>
            <Route path="/" element={<Home />} /> 
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/task" element={<div>Task Page</div>} />
            <Route path="/reporting" element={<div>Reporting Page</div>} />
            <Route path="/settings" element={<div>Settings Page</div>} />
            <Route path="/help" element={<div>Help Page</div>} />
            <Route path="/about" element={<div>About page</div>} />
            <Route path="/contact" element={<div>Contact Page</div>} />
            <Route path="/settings" element={<div>Settings Page</div>} />
            <Route path="/service" element={<div>Service Page</div>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
