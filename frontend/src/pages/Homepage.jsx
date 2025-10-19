import React, { useState, useEffect, useRef } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import ImageGrid from '../components/ImageGrid';
import FilterNavbar from '../components/FilterNavbar';
import { fetchWallpapers, searchWallpapers, searchWallpapersWithFilter } from '../utils/api';

const Homepage = ({ onSearch }) => {
  const [wallpapers, setWallpapers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [totalPages, setTotalPages] = useState(1);
  const [isFilterLoading, setIsFilterLoading] = useState(false);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const filterNavbarRef = useRef();
  
  // Read all parameters from URL
  const sorting = searchParams.get('sorting') || 'toplist';
  const searchQuery = searchParams.get('search') || '';
  const currentPage = parseInt(searchParams.get('page')) || 1;
  const filters = {
    resolution: searchParams.get('resolution') || '',
    orientation: searchParams.get('orientation') || '',
    color: searchParams.get('color') || ''
  };
  
  const hasFilters = filters.resolution || filters.orientation || filters.color;

  // Load wallpapers whenever URL changes
  useEffect(() => {
    loadWallpapers();
  }, [sorting, searchQuery, currentPage, filters.resolution, filters.orientation, filters.color]);

  const loadWallpapers = async () => {
    setLoading(true);
    try {
      let response;
      
      if (searchQuery) {
        if (hasFilters) {
          response = await searchWallpapersWithFilter(searchQuery, currentPage, filters);
        } else {
          response = await searchWallpapers(searchQuery, currentPage);
        }
      } else {
        if (hasFilters) {
          response = await fetchWallpapers({
            sorting: sorting,
            page: currentPage.toString(),
            filter: filters
          });
        } else {
          response = await fetchWallpapers({
            sorting: sorting,
            page: currentPage.toString()
          });
        }
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

  const handleFilterChange = async (newFilters) => {
    setIsFilterLoading(true);
    // FilterNavbar now handles URL navigation
    setTimeout(() => setIsFilterLoading(false), 500);
  };

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      const params = new URLSearchParams(searchParams);
      params.set('page', newPage.toString());
      navigate(`/?${params.toString()}`);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <>
      <FilterNavbar ref={filterNavbarRef} onFilterChange={handleFilterChange} isLoading={isFilterLoading} />
      
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
            Beautiful Wallpapers
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Discover stunning wallpapers for your devices. High quality, free to download.
          </p>
        </div>

        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
          </div>
        ) : (
          <>
            <ImageGrid wallpapers={wallpapers} />
            
            {totalPages > 1 && (
              <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-4 mt-12">
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="px-4 sm:px-6 py-2 sm:py-3 bg-white/80 dark:bg-black/40 backdrop-blur-sm border border-white/30 dark:border-white/20 rounded-xl text-gray-900 dark:text-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-white/90 dark:hover:bg-black/60 transition-all duration-300 text-sm sm:text-base"
                >
                  ← Previous
                </button>
                
                <div className="flex items-center gap-1 sm:gap-2">
                  {(() => {
                    const startPage = Math.max(1, currentPage - 2);
                    const endPage = Math.min(totalPages, startPage + 4);
                    const pages = [];
                    for (let i = startPage; i <= endPage; i++) {
                      pages.push(i);
                    }
                    return pages;
                  })().map((pageNum) => (
                    <button
                      key={pageNum}
                      onClick={() => handlePageChange(pageNum)}
                      className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl font-medium transition-all duration-300 text-sm sm:text-base ${
                        pageNum === currentPage
                          ? 'bg-purple-600 text-white shadow-lg'
                          : 'bg-white/80 dark:bg-black/40 backdrop-blur-sm border border-white/30 dark:border-white/20 text-gray-900 dark:text-white hover:bg-white/90 dark:hover:bg-black/60'
                      }`}
                    >
                      {pageNum}
                    </button>
                  ))}
                </div>

                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="px-4 sm:px-6 py-2 sm:py-3 bg-white/80 dark:bg-black/40 backdrop-blur-sm border border-white/30 dark:border-white/20 rounded-xl text-gray-900 dark:text-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-white/90 dark:hover:bg-black/60 transition-all duration-300 text-sm sm:text-base"
                >
                  Next →
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </>
  );
};

export default Homepage;