import React from 'react';
import ImageCard from './ImageCard';

const ImageGrid = ({ wallpapers }) => {
  if (!wallpapers || wallpapers.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <div className="text-6xl mb-4">🖼️</div>
        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
          No wallpapers found
        </h3>
        <p className="text-gray-600 dark:text-gray-400">
          Try adjusting your search or browse our popular collection.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4 sm:gap-6">
      {wallpapers.map((wallpaper, index) => (
        <ImageCard 
          key={wallpaper.id || index} 
          wallpaper={wallpaper} 
        />
      ))}
    </div>
  );
};

export default ImageGrid;