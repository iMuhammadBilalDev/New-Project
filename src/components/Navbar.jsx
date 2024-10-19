import React from "react";
import logo from "../assets/mbs.png"; 
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="bg-white ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex-shrink-0">
            <img src={logo} alt="Logo" className="h-8 w-auto" />
          </div>

          <nav className="hidden lg:flex space-x-8">
           
                <Link to='/' className="text-gray-600 hover:text-gray-900 font-medium">  Home
                </Link>
              
                <Link to='/about' className="text-gray-600 hover:text-gray-900 font-medium">  About
                </Link>
                <Link to='/service' className="text-gray-600 hover:text-gray-900 font-medium">  Service
                </Link>
                <Link to='/contact' className="text-gray-600 hover:text-gray-900 font-medium">  Contact
                </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
