import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Download, Eye, Heart, Calendar, Monitor, Album, Paperclip, Clapperboard } from 'lucide-react';
import ImageGrid from '../components/ImageGrid';
import { fetchWallpaperById, fetchWallpapers } from '../utils/api';

const WallpaperDetail = () => {
  const { id } = useParams();
  const [wallpaper, setWallpaper] = useState(null);
  const [relatedWallpapers, setRelatedWallpapers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [relatedLoading, setRelatedLoading] = useState(true);

  useEffect(() => {
    loadWallpaper();
    loadRelatedWallpapers();
  }, [id]);

  const loadWallpaper = async () => {
    setLoading(true);
    try {
      const data = await fetchWallpaperById(id);
      setWallpaper(data);
    } catch (error) {
      console.error('Error loading wallpaper:', error);
    } finally {
      setLoading(false);
    }
  };

  const loadRelatedWallpapers = async () => {
    setRelatedLoading(true);
    try {
      const response = await fetchWallpapers({ sorting: 'random', page: '1' });
      setRelatedWallpapers(response.data?.slice(0, 12) || []);
    } catch (error) {
      console.error('Error loading related wallpapers:', error);
    } finally {
      setRelatedLoading(false);
    }
  };

  const fullScreen = () => {
    if (wallpaper?.path) {
      const link = document.createElement('a');
      link.href = wallpaper.path;
      link.download = `framzy-wallpaper-${wallpaper.id}.jpg`;
      link.target = '_blank';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  const handleDownload = async () => {
    if (wallpaper?.path) {
      const res = await fetch(wallpaper.path);
      const blob = await res.blob();
      const a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = `framzy-wallpaper-${wallpaper.id}.jpg`;
      a.click();
      URL.revokeObjectURL(a.href);
    }
  };

  const formatNumber = (num) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K';
    }
    return num;
  };

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
      </div>
    );
  }

  if (!wallpaper) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Wallpaper not found</h2>
        <Link to="/" className="text-purple-600 hover:text-purple-700 dark:text-purple-400">
          ← Back to home
        </Link>
      </div>
    );
  }

  function formatBytes(bytes) {
    if (bytes < 1024) return `${bytes} B`;
    const kb = bytes / 1024;
    if (kb < 1024) return `${kb.toFixed(1)} KiB`;
    const mb = kb / 1024;
    return `${mb.toFixed(1)} MiB`;
  }

  function fileFormat(type) {
    const dat=type.slice("image/".length);
    return dat.toUpperCase();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Back Button */}
      <Link
        to="/"
        className="inline-flex items-center space-x-2 mb-8 text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200"
      >
        <ArrowLeft className="h-5 w-5" />
        <span>Back to Gallery</span>
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
        {/* Main Image */}
        <div className="lg:col-span-2">
          <div className="relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl">
            <img
              src={wallpaper.path}
              alt="Wallpaper"
              className="w-full h-auto max-h-screen object-contain"
              loading="lazy"
            />
          </div>
        </div>

        {/* Details Sidebar */}
        <div className="space-y-6">
          <div className="bg-white/80 dark:bg-black/40 backdrop-blur-sm rounded-2xl p-6 border border-white/30 dark:border-white/20">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Wallpaper Details
            </h1>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
                <Eye className="h-4 w-4" />
                <span className="text-sm">{formatNumber(wallpaper.views || 0)} views</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
                <Heart className="h-4 w-4" />
                <span className="text-sm">{formatNumber(wallpaper.favorites || 0)} likes</span>
              </div>
            </div>

            {/* Created At */}
            <div className="flex items-center space-x-2 mb-4">
              <Calendar className="h-5 w-5 text-purple-600 dark:text-purple-400" />
              <div>
                <p className="font-semibold text-gray-900 dark:text-white">Created At</p>
                <p className="text-sm text-gray-600 dark:text-gray-300">{wallpaper.created_at}</p>
              </div>
            </div>

            {/* Category */}
            <div className="flex items-center space-x-2 mb-4">
              <Album className="h-5 w-5 text-purple-600 dark:text-purple-400" />
              <div>
                <p className="font-semibold text-gray-900 dark:text-white">Category</p>
                <p className="text-sm text-gray-600 dark:text-gray-300 capitalize">
                  {wallpaper.category || 'General'}
                </p>
              </div>
            </div>

            {/* Resolution */}
            <div className="flex items-center space-x-2 mb-4">
              <Monitor className="h-5 w-5 text-purple-600 dark:text-purple-400" />
              <div>
                <p className="font-semibold text-gray-900 dark:text-white">Resolution</p>
                <p className="text-sm text-gray-600 dark:text-gray-300">{wallpaper.resolution}</p>
              </div>
            </div>

            {/* File Type */}
            <div className="flex items-center space-x-2 mb-4">
              <Clapperboard className="h-5 w-5 text-purple-600 dark:text-purple-400" />
              <div>
                <p className="font-semibold text-gray-900 dark:text-white">Type</p>
                <p className="text-sm text-gray-600 dark:text-gray-300">{fileFormat(wallpaper.file_type)}</p>
              </div>
            </div>

            {/* File Size */}
            <div className="flex items-center space-x-2 mb-6">
              <Paperclip className="h-5 w-5 text-purple-600 dark:text-purple-400" />
              <div>
                <p className="font-semibold text-gray-900 dark:text-white">Size</p>
                <p className="text-sm text-gray-600 dark:text-gray-300">{formatBytes(wallpaper.file_size)}</p>
              </div>
            </div>
            {/* FullScreen Button */}
            <button
              onClick={fullScreen}
              className="mb-2 w-full bg-gradient-to-r from-gray-500 to-black hover:from-gray-600 hover:to-gray-900 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-500 hover:shadow-lg hover:scale-105 flex items-center justify-center space-x-2"
              >
              <Download className="h-5 w-5" />
              <span>FullScreen</span>
            </button>

            {/* Download Button */}
            <button
              onClick={handleDownload}
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-500 hover:shadow-lg hover:scale-105 flex items-center justify-center space-x-2"
            >
              <Download className="h-5 w-5" />
              <span>Download Wallpaper</span>
            </button>

            {/* Color Palette */}
            {wallpaper.colors && wallpaper.colors.length > 0 && (
              <div className="mt-6">
                <p className="font-semibold text-gray-900 dark:text-white mb-3">Color Palette</p>
                <div className="flex space-x-2">
                  {wallpaper.colors.slice(0, 5).map((color, index) => (
                    <div
                      key={index}
                      className="w-8 h-8 rounded-lg border border-gray-300 dark:border-gray-600 shadow-sm"
                      style={{ backgroundColor: color }}
                      title={color}
                    ></div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Related Images */}
      <div>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          More Wallpapers
        </h2>
        {relatedLoading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-600"></div>
          </div>
        ) : (
          <ImageGrid wallpapers={relatedWallpapers} />
        )}
      </div>
    </div>
  );
};

export default WallpaperDetail;