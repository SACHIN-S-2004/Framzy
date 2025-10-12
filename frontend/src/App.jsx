import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useTheme } from './hooks/useTheme';
import BackgroundAnimation from './components/BackgroundAnimation';
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';
import WallpaperDetail from './pages/WallpaperDetail';
import Notification from './components/Notification';
import LiquidEther from './LiquidEther';

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

  const handleSearch = (query) => {
    // This will be handled by the Homepage component
    // We're just passing it through for now
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300 relative">
        {/* Background layer */}
        <div className="absolute inset-0 z-0" style={{ height: 600}}>
          <LiquidEther
            colors={[ '#5227FF', '#FF9FFC', '#B19EEF' ]}
            mouseForce={20}
            cursorSize={100}
            isViscous={false}
            viscous={30}
            iterationsViscous={32}
            iterationsPoisson={32}
            resolution={0.5}
            isBounce={false}
            autoDemo={true}
            autoSpeed={0.5}
            autoIntensity={2.2}
            takeoverDuration={0.25}
            autoResumeDelay={3000}
            autoRampDuration={0.6}
          />
        </div>
        
        {/* Content layer */}
        <div className="relative z-10">
          <Navbar 
            theme={theme} 
            onThemeToggle={toggleTheme}
            onNotification={showNotification}
            onSearch={handleSearch}
          />
          
          <main className="relative z-10">
            <Routes>
              <Route path="/" element={<Homepage onSearch={handleSearch} />} />
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
      </div>
    </Router>
  );
}

export default App;