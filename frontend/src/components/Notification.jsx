import React, { useState, useEffect } from 'react';
import { CheckCircle, XCircle, X } from 'lucide-react';

const Notification = ({ message, type, isVisible, onClose }) => {
  const [progress, setProgress] = useState(100);

  useEffect(() => {
    if (!isVisible) return;

    const timer = setTimeout(() => {
      onClose();
    }, 2000);

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev <= 0) {
          clearInterval(interval);
          return 0;
        }
        return prev - 5; // Decrease by 5% every 100ms
      });
    }, 100);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
      setProgress(100);
    };
  }, [isVisible, onClose]);

  if (!isVisible) return null;

  const isSuccess = type === 'success';
  const lines = message.split('\n');

  return (
    <div className="fixed top-4 right-4 z-50 transform transition-all duration-300 ease-out">
      <div className={`
        relative p-4 rounded-lg shadow-lg backdrop-blur-sm border max-w-sm
        ${isSuccess 
          ? 'bg-green-500/90 border-green-400 text-white' 
          : 'bg-red-500/90 border-red-400 text-white'
        }
      `}>
        <div className="flex items-start space-x-3">
          <div className="flex-shrink-0">
            {isSuccess ? (
              <CheckCircle className="h-5 w-5" />
            ) : (
              <XCircle className="h-5 w-5" />
            )}
          </div>
          <div className="flex-1 min-w-0">
            {lines.map((line, index) => (
              <p key={index} className={`text-sm ${index === 0 ? 'font-semibold' : 'font-normal opacity-90'}`}>
                {line}
              </p>
            ))}
          </div>
          <button
            onClick={onClose}
            className="flex-shrink-0 text-white hover:text-gray-200 transition-colors"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
        
        {/* Progress bar */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/30 rounded-b-lg overflow-hidden">
          <div
            className="h-full bg-white/80 transition-all duration-100 ease-linear"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Notification;