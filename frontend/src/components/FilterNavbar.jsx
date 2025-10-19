import React, { useState, forwardRef, useImperativeHandle, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { RefreshCw, Filter, ChevronDown, ChevronUp } from 'lucide-react';

const FilterNavbar = forwardRef(({ onFilterChange, isLoading }, ref) => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [filters, setFilters] = useState({
    resolution: '',
    orientation: '',
    color: ''
  });
  const [isExpanded, setIsExpanded] = useState(false);

  // Sync filters with URL on mount and changes
  useEffect(() => {
    const urlFilters = {
      resolution: searchParams.get('resolution') || '',
      orientation: searchParams.get('orientation') || '',
      color: searchParams.get('color') || ''
    };
    setFilters(urlFilters);
  }, [searchParams]);

  // Expose reset method to parent component
  useImperativeHandle(ref, () => ({
    reset: () => {
      setFilters({
        resolution: '',
        orientation: '',
        color: ''
      });
      setIsExpanded(false);
    }
  }));

  const resolutionOptions = [
    { value: '', label: 'All Resolutions' },
    { value: '1920x1080', label: '1080p (1920x1080)' },
    { value: '2560x1440', label: '2K (2560x1440)' },
    { value: '3840x2160', label: '4K (3840x2160)' },
    { value: '1366x768', label: 'HD (1366x768)' },
    { value: '1280x720', label: 'HD (1280x720)' }
  ];

  const orientationOptions = [
    { value: '', label: 'All Orientations' },
    { value: 'landscape', label: 'Landscape' },
    { value: 'portrait', label: 'Portrait' }
  ];

  const colorOptions = [
    { value: '', label: 'All Colors' },
    { value: 'ff0000', label: 'Red' },
    { value: '00ff00', label: 'Green' },
    { value: '0000ff', label: 'Blue' },
    { value: 'ffff00', label: 'Yellow' },
    { value: 'ff00ff', label: 'Magenta' },
    { value: '00ffff', label: 'Cyan' },
    { value: '000000', label: 'Black' },
    { value: 'ffffff', label: 'White' },
    { value: 'ffa500', label: 'Orange' },
    { value: '800080', label: 'Purple' }
  ];

  const handleFilterChange = (filterType, value) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: value
    }));
  };

  const handleApplyFilters = () => {
    // Build URL with current search and new filters
    const params = new URLSearchParams(searchParams);
    
    // Add or remove filter parameters
    if (filters.resolution) {
      params.set('resolution', filters.resolution);
    } else {
      params.delete('resolution');
    }
    
    if (filters.orientation) {
      params.set('orientation', filters.orientation);
    } else {
      params.delete('orientation');
    }
    
    if (filters.color) {
      params.set('color', filters.color);
    } else {
      params.delete('color');
    }
    
    // Remove page when applying filters
    params.delete('page');
    
    // Navigate with new filters
    navigate(`/?${params.toString()}`);
    onFilterChange(filters);
  };

  const hasActiveFilters = filters.resolution || filters.orientation || filters.color;

  return (
    <div className="relative z-30 bg-white/5 dark:bg-black/10 backdrop-blur-sm border-b border-white/10 dark:border-white/5">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="md:hidden">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-full flex items-center justify-between py-3 text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200"
          >
            <div className="flex items-center space-x-2">
              <Filter className="h-4 w-4" />
              <span className="font-medium">Filters</span>
              {hasActiveFilters && (
                <span className="bg-purple-600 text-white text-xs px-2 py-1 rounded-full">
                  Active
                </span>
              )}
            </div>
            {isExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
          </button>
        </div>

        <div className={`${isExpanded ? 'block' : 'hidden'} md:block py-3`}>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0 md:space-x-6">
            <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-6 flex-1">
              {/* Resolution Filter */}
              <div className="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-2">
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300 whitespace-nowrap">
                  Resolution:
                </label>
                <select
                  value={filters.resolution}
                  onChange={(e) => handleFilterChange('resolution', e.target.value)}
                  className="w-[90%] md:w-[60%] lg:w-[90%] transition-all duration-500 ease-in-out px-3 py-1.5 bg-white/80 dark:bg-black/40 backdrop-blur-sm border border-white/30 dark:border-white/20 rounded-lg text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                >
                  {resolutionOptions.map(option => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Orientation Filter */}
              <div className="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-2">
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300 whitespace-nowrap">
                  Orientation:
                </label>
                <select
                  value={filters.orientation}
                  onChange={(e) => handleFilterChange('orientation', e.target.value)}
                  className="w-[90%] md:w-[60%] lg:w-[90%] transition-all duration-500 ease-in-out px-3 py-1.5 bg-white/80 dark:bg-black/40 backdrop-blur-sm border border-white/30 dark:border-white/20 rounded-lg text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                >
                  {orientationOptions.map(option => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Color Filter */}
              <div className="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-2">
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300 whitespace-nowrap">
                  Color:
                </label>
                <select
                  value={filters.color}
                  onChange={(e) => handleFilterChange('color', e.target.value)}
                  className="w-[90%] md:w-[60%] lg:w-[90%] transition-all duration-500 ease-in-out px-3 py-1.5 bg-white/80 dark:bg-black/40 backdrop-blur-sm border border-white/30 dark:border-white/20 rounded-lg text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                >
                  {colorOptions.map(option => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <button
              onClick={handleApplyFilters}
              disabled={isLoading}
              className="flex items-center justify-center space-x-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 disabled:bg-gray-400 text-white rounded-lg font-medium transition-all duration-200 hover:shadow-lg hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed whitespace-nowrap"
            >
              <RefreshCw className={`h-4 w-4 ${isLoading ? 'animate-spin' : ''}`} />
              <span>{isLoading ? 'Applying...' : 'Apply Filters'}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
});

export default FilterNavbar;