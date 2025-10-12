import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import ImageGrid from '../components/ImageGrid';
import FilterNavbar from '../components/FilterNavbar';
import { fetchWallpapers, searchWallpapers, searchWallpapersWithFilter } from '../utils/api';

const Homepage = () => {
  const [wallpapers, setWallpapers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [isFilter, setIsFilter] = useState(false);
  const [filters, setFilters] = useState({});
  const [isFilterLoading, setIsFilterLoading] = useState(false);
  const [searchParams] = useSearchParams();
  
  const sorting = searchParams.get('sorting') || 'toplist';

  useEffect(() => {
    loadWallpapers();
  }, [sorting, currentPage]);

  const loadWallpapers = async (applyFilters = false) => {
    setLoading(true);
    try {
      let response;
      console.log('isFilter:', isFilter);
      console.log('filters:', filters);
      if (searchQuery) {
        if(isFilter){
          response = await searchWallpapersWithFilter(searchQuery, currentPage, filters);
        } else {
          response = await searchWallpapers(searchQuery, currentPage);
        }
      } else {
        if(isFilter){
          response = await fetchWallpapers({
            sorting: sorting,
            page: currentPage.toString(),
            filter:filters
          });
        }
        else{
          response = await fetchWallpapers({
            sorting: sorting,
            page: currentPage.toString()
          });
        }
      }
      
      let filteredData = response.data || [];
      
      // Apply client-side filters if any are set
      /*if (applyFilters && Object.keys(filters).some(key => filters[key])) {
        filteredData = applyClientFilters(filteredData, filters);
      }*/
      
      setWallpapers(filteredData);
      setTotalPages(response.meta?.last_page || 1);
    } catch (error) {
      console.error('Error loading wallpapers:', error);
      setWallpapers([]);
    } finally {
      setLoading(false);
    }
  };

  const applyClientFilters = (data, activeFilters) => {
    return data.filter(wallpaper => {
      // Resolution filter
      if (activeFilters.resolution && wallpaper.resolution !== activeFilters.resolution) {
        return false;
      }
      
      // Orientation filter
      if (activeFilters.orientation) {
        const [width, height] = wallpaper.resolution.split('x').map(Number);
        const isLandscape = width > height;
        const isPortrait = height > width;
        
        if (activeFilters.orientation === 'landscape' && !isLandscape) {
          return false;
        }
        if (activeFilters.orientation === 'portrait' && !isPortrait) {
          return false;
        }
      }
      
      // Color filter
      if (activeFilters.color && wallpaper.colors) {
        const hasColor = wallpaper.colors.some(color => 
          color.toLowerCase().includes(activeFilters.color.toLowerCase()) ||
          color.replace('#', '').toLowerCase() === activeFilters.color.toLowerCase()
        );
        if (!hasColor) {
          return false;
        }
      }
      
      return true;
    });
  };

  useEffect(() => {
    // Only run when isFilter becomes true and we have filters
    if (isFilter && Object.keys(filters).length > 0 && isFilterLoading) {
      loadWallpapers(true);
    }
    setIsFilterLoading(false);
    setIsFilter(false);
  }, [isFilter, isFilterLoading]);

 
  const handleFilterChange = async (newFilters) => {
    //console.log(newFilters);

    setIsFilterLoading(true);
    setIsFilter(true);
    setFilters(newFilters);
    setCurrentPage(1);
    
    // Remove the loadWallpapers call from here
    // It will be triggered by the useEffect above
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
    <>
      <FilterNavbar onFilterChange={handleFilterChange} isLoading={isFilterLoading} />
      
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Hero Section with Search */}
        <div className="text-center mb-12">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
          Beautiful Wallpapers
        </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
          Discover stunning wallpapers for your devices. High quality, free to download.
        </p>
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
                })().map((pageNum) => {
                  return (
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
                  );
                })}
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