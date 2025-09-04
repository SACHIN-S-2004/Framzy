import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import ImageGrid from '../components/ImageGrid';
import { fetchWallpapers, searchWallpapers } from '../utils/api';

const Homepage = () => {
  const [wallpapers, setWallpapers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchParams] = useSearchParams();
  
  const sorting = searchParams.get('sorting') || 'toplist';

  useEffect(() => {
    loadWallpapers();
  }, [sorting, currentPage]);

  const loadWallpapers = async () => {
    setLoading(true);
    try {
      let response;
      if (searchQuery) {
        response = await searchWallpapers(searchQuery, currentPage);
      } else {
        response = await fetchWallpapers({
          sorting: sorting,
          page: currentPage.toString()
        });
      }
      
      setWallpapers(response.data || []);
      setTotalPages(response.meta?.last_page || 1);
    } catch (error) {
      console.error('Error loading wallpapers:', error);
      setWallpapers([]);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = async (query) => {
    setSearchQuery(query);
    setCurrentPage(1);
    setLoading(true);
    
    try {
      const response = await searchWallpapers(query, 1);
      setWallpapers(response.data || []);
      setTotalPages(response.meta?.last_page || 1);
    } catch (error) {
      console.error('Error searching wallpapers:', error);
      setWallpapers([]);
    } finally {
      setLoading(false);
    }
  };

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section with Search */}
      <div className="text-center mb-12">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
          Beautiful Wallpapers
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
          Discover stunning wallpapers for your devices. High quality, free to download.
        </p>
        <SearchBar onSearch={handleSearch} />
      </div>

      {/* Content */}
      {loading ? (
        <div className="flex justify-center items-center py-20">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
        </div>
      ) : (
        <>
          <ImageGrid wallpapers={wallpapers} />
          
          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center space-x-4 mt-12">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-6 py-3 bg-white/80 dark:bg-black/40 backdrop-blur-sm border border-white/30 dark:border-white/20 rounded-xl text-gray-900 dark:text-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-white/90 dark:hover:bg-black/60 transition-all duration-300"
              >
                ← Previous
              </button>
              
              <div className="flex items-center space-x-2">
                {(() => {
                  const startPage = Math.max(1, currentPage - 2);
                  const endPage = Math.min(totalPages, startPage + 4);
                  const pages = [];
                  for (let i = startPage; i <= endPage; i++) {
                    pages.push(i);
                  }
                  return pages;
                })().map((pageNum) => {
                  return (
                    <button
                      key={pageNum}
                      onClick={() => handlePageChange(pageNum)}
                      className={`w-12 h-12 rounded-xl font-medium transition-all duration-300 ${
                        pageNum === currentPage
                          ? 'bg-purple-600 text-white shadow-lg'
                          : 'bg-white/80 dark:bg-black/40 backdrop-blur-sm border border-white/30 dark:border-white/20 text-gray-900 dark:text-white hover:bg-white/90 dark:hover:bg-black/60'
                      }`}
                    >
                      {pageNum}
                    </button>
                  );
                })}
              </div>

              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="px-6 py-3 bg-white/80 dark:bg-black/40 backdrop-blur-sm border border-white/30 dark:border-white/20 rounded-xl text-gray-900 dark:text-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-white/90 dark:hover:bg-black/60 transition-all duration-300"
              >
                Next →
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Homepage;