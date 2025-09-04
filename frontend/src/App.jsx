import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useTheme } from './hooks/useTheme';
import BackgroundAnimation from './components/BackgroundAnimation';
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';
import WallpaperDetail from './pages/WallpaperDetail';
import Notification from './components/Notification';

function App() {
  const { theme, toggleTheme } = useTheme();
  const [notification, setNotification] = useState({
    message: '',
    type: 'success',
    isVisible: false
  });

  const showNotification = (message, type = 'success') => {
    setNotification({
      message,
      type,
      isVisible: true
    });
  };

  const hideNotification = () => {
    setNotification(prev => ({ ...prev, isVisible: false }));
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <BackgroundAnimation />
        
        <Navbar 
          theme={theme} 
          onThemeToggle={toggleTheme}
          onNotification={showNotification}
        />
        
        <main className="relative z-10">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/wallpaper/:id" element={<WallpaperDetail />} />
          </Routes>
        </main>

        <Notification
          message={notification.message}
          type={notification.type}
          isVisible={notification.isVisible}
          onClose={hideNotification}
        />
      </div>
    </Router>
  );
}

export default App;