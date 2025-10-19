import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Image, Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import SearchBar from './SearchBar';
import LoginModal from './LoginModal';
import RegisterModal from './RegisterModal';

const Navbar = ({ theme, onThemeToggle, onNotification, onSearch }) => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavClick = (sorting) => {
    // Navigate to tab, which will clear search params automatically
    navigate(`/?sorting=${sorting}`);
  };

  return (
    <>
      <nav className="relative z-40 bg-white/10 dark:bg-black/20 backdrop-blur-md border-b border-white/20 dark:border-white/10">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2 group">
              <Image className="h-8 w-8 text-purple-600 dark:text-purple-400 group-hover:scale-110 transition-transform duration-300" />
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
                Framzy
              </span>
            </Link>

            {/* Navigation Links - Hidden on mobile */}
            <div className="hidden md:flex items-center space-x-8 ml-4">
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

            {/* Search Bar - Center on desktop */}
            <div className="hidden md:block flex-1 max-w-md ml-4">
              <SearchBar onSearch={onSearch} />
            </div>

            {/* Auth & Theme Controls */}
            <div className="flex items-center space-x-4">
              {/* Mobile menu button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400"
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
              
              {/* Desktop auth buttons */}
              <button
                onClick={() => setIsLoginOpen(true)}
                className="hidden md:block px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200"
              >
                Login
              </button>
              <button
                onClick={() => setIsRegisterOpen(true)}
                className="hidden md:block px-4 py-2 bg-purple-600 hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-600 text-white rounded-lg font-medium transition-all duration-200 hover:shadow-lg hover:scale-105"
              >
                Register
              </button>
              <ThemeToggle theme={theme} onToggle={onThemeToggle} />
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-white/20 dark:border-white/10 bg-white/10 dark:bg-black/20 backdrop-blur-md">
            <div className="px-4 py-4 space-y-4">
              {/* Mobile Search */}
              <SearchBar onSearch={onSearch} />
              
              {/* Mobile Navigation Links */}
              <div className="flex justify-center space-x-6">
                <button
                  onClick={() => {
                    handleNavClick('date_added');
                    setIsMobileMenuOpen(false);
                  }}
                  className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 font-medium transition-colors duration-200"
                >
                  Latest
                </button>
                <button
                  onClick={() => {
                    handleNavClick('toplist');
                    setIsMobileMenuOpen(false);
                  }}
                  className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 font-medium transition-colors duration-200"
                >
                  Popular
                </button>
                <button
                  onClick={() => {
                    handleNavClick('random');
                    setIsMobileMenuOpen(false);
                  }}
                  className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 font-medium transition-colors duration-200"
                >
                  Random
                </button>
              </div>
              
              {/* Mobile Auth Buttons */}
              <div className="flex justify-center space-x-4">
                <button
                  onClick={() => {
                    setIsLoginOpen(true);
                    setIsMobileMenuOpen(false);
                  }}
                  className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200"
                >
                  Login
                </button>
                <button
                  onClick={() => {
                    setIsRegisterOpen(true);
                    setIsMobileMenuOpen(false);
                  }}
                  className="px-4 py-2 bg-purple-600 hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-600 text-white rounded-lg font-medium transition-all duration-200"
                >
                  Register
                </button>
              </div>
            </div>
          </div>
        )}
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