// API utility functions for Framzy

const BASE_URL =
  import.meta.env.MODE === 'development'
    ? '/api/v1'
    : 'https://framzy-proxy.onrender.com/api/v1';

const AUTH_BASE_URL = 'https://sample.com/user';

// Wallhaven API functions
export const fetchWallpapers = async (params = {}) => {
  console.log('Fetching wallpapers with filters:', params);
  try {
    const searchParams = new URLSearchParams({
      categories: '110',
      purity: '100',
      sorting: params.sorting || 'toplist',
      order: params.order || 'desc',
      page: params.page || '1',
      ...params
    });

    if (params.filter?.resolution) {
      searchParams.append('resolutions', params.filter.resolution);
    }

    if (params.filter?.orientation) {
      searchParams.append('ratios', params.filter.orientation);
    }

    if (params.filter?.color) {
      searchParams.append('colors', params.filter.color);
    }

    const response = await fetch(`${BASE_URL}/search?${searchParams}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching wallpapers:', error);
    throw error;
  }
};

export const fetchWallpaperById = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/w/${id}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    return data.data; // wallhaven returns { data: wallpaper }
  } catch (error) {
    console.error('Error fetching wallpaper:', error);
    throw error;
  }
};

export const searchWallpapers = async (query, page = 1) => {
  return fetchWallpapers({
    q: query,
    sorting: 'relevance',
    page: page.toString()
  });
};

export const searchWallpapersWithFilter = async (query, page = 1, filters) => {
  console.log('filters:',filters);
  return fetchWallpapers({
    q: query,
    sorting: 'relevance',
    page: page.toString(),
    filter: filters
  });
};

// Authentication API functions
export const loginUser = async (credentials) => {
  try {
    const response = await fetch(`${AUTH_BASE_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    });

    return {
      success: response.status === 200,
      status: response.status,
      data: response.status === 200 ? await response.json() : null
    };
  } catch (error) {
    console.error('Login error:', error);
    return {
      success: false,
      status: 500,
      data: null
    };
  }
};

export const registerUser = async (userData) => {
  try {
    const response = await fetch(`${AUTH_BASE_URL}/registration`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    return {
      success: response.status === 200,
      status: response.status,
      data: response.status === 200 ? await response.json() : null
    };
  } catch (error) {
    console.error('Registration error:', error);
    return {
      success: false,
      status: 500,
      data: null
    };
  }
};

// Utility function to download wallpaper
export const downloadWallpaper = (url, filename) => {
  const link = document.createElement('a');
  link.href = url;
  link.download = filename || 'wallpaper.jpg';
  link.target = '_blank';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};