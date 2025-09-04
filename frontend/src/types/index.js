// Type definitions for Framzy wallpaper website

// Wallpaper item structure from wallhaven API
export const createWallpaperItem = (data) => ({
  id: data.id,
  path: data.path,
  thumbs: data.thumbs,
  resolution: data.resolution,
  colors: data.colors,
  category: data.category,
  purity: data.purity,
  views: data.views,
  favorites: data.favorites,
  tags: data.tags || []
});

// API response structure
export const createApiResponse = (data, meta) => ({
  data: data || [],
  meta: meta || {}
});

// Theme types
export const THEMES = {
  LIGHT: 'light',
  DARK: 'dark'
};

// Sorting options
export const SORTING_OPTIONS = {
  POPULAR: 'toplist',
  LATEST: 'date_added',
  RANDOM: 'random'
};

// Authentication states
export const AUTH_STATES = {
  IDLE: 'idle',
  LOADING: 'loading',
  SUCCESS: 'success',
  ERROR: 'error'
};