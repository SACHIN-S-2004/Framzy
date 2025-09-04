import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Image } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import LoginModal from './LoginModal';
import RegisterModal from './RegisterModal';
import SearchBar from './SearchBar';

const Navbar = ({ theme, onThemeToggle, onNotification }) => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavClick = (sorting) => {
    navigate(`/?sorting=${sorting}`);
  };

  return (
    <>
      <nav className="relative z-40 bg-white/10 dark:bg-black/20 backdrop-blur-md border-b border-white/20 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2 group">
              <Image className="h-8 w-8 text-purple-600 dark:text-purple-400 group-hover:scale-110 transition-transform duration-300" />
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
                Framzy
              </span>
            </Link>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-8  mx-5">
              <button
                onClick={() => handleNavClick('date_added')}
                className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 font-medium transition-colors duration-200"
              >
                Latest
              </button>
              <button
                onClick={() => handleNavClick('toplist')}
                className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 font-medium transition-colors duration-200"
              >
                Popular
              </button>
              <button
                onClick={() => handleNavClick('random')}
                className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 font-medium transition-colors duration-200"
              >
                Random
              </button>
            </div>
            
            {/* Auth & Theme Controls */}
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setIsLoginOpen(true)}
                className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200"
              >
                Login
              </button>
              <button
                onClick={() => setIsRegisterOpen(true)}
                className="px-4 py-2 bg-purple-600 hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-600 text-white rounded-lg font-medium transition-all duration-200 hover:shadow-lg hover:scale-105"
              >
                Register
              </button>
              <ThemeToggle theme={theme} onToggle={onThemeToggle} />
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden px-4 pb-4">
          <div className="flex justify-center space-x-6">
            <button
              onClick={() => handleNavClick('date_added')}
              className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 font-medium transition-colors duration-200"
            >
              Latest
            </button>
            <button
              onClick={() => handleNavClick('toplist')}
              className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 font-medium transition-colors duration-200"
            >
              Popular
            </button>
            <button
              onClick={() => handleNavClick('random')}
              className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 font-medium transition-colors duration-200"
            >
              Random
            </button>
          </div>
        </div>
      </nav>

      <LoginModal
        isOpen={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
        onNotification={onNotification}
      />
      <RegisterModal
        isOpen={isRegisterOpen}
        onClose={() => setIsRegisterOpen(false)}
        onNotification={onNotification}
      />
    </>
  );
};

export default Navbar;