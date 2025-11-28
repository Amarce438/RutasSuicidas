import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  routes: [],
  currentRoute: null,
  loading: false,
  error: null,
  searchResults: [],
  filters: {
    difficulty: 'all',
    distance: 'all',
    duration: 'all',
  },
};

const routesSlice = createSlice({
  name: 'routes',
  initialState,
  reducers: {
    // Loading states
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    
    // Rutas
    setRoutes: (state, action) => {
      state.routes = action.payload;
      state.error = null;
    },
    
    setCurrentRoute: (state, action) => {
      state.currentRoute = action.payload;
    },
    
    addRoute: (state, action) => {
      state.routes.unshift(action.payload);
    },
    
    updateRoute: (state, action) => {
      const index = state.routes.findIndex(route => route.id === action.payload.id);
      if (index !== -1) {
        state.routes[index] = action.payload;
      }
    },
    
    deleteRoute: (state, action) => {
      state.routes = state.routes.filter(route => route.id !== action.payload);
      if (state.currentRoute?.id === action.payload) {
        state.currentRoute = null;
      }
    },
    
    // Búsqueda y filtros
    setSearchResults: (state, action) => {
      state.searchResults = action.payload;
    },
    
    setFilters: (state, action) => {
      state.filters = { ...state.filters, ...action.payload };
    },
    
    clearFilters: (state) => {
      state.filters = initialState.filters;
    },
    
    // Error handling
    setError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    
    clearError: (state) => {
      state.error = null;
    },
    
    // Reset state
    resetRoutes: (state) => {
      return initialState;
    },
  },
});

export const {
  setLoading,
  setRoutes,
  setCurrentRoute,
  addRoute,
  updateRoute,
  deleteRoute,
  setSearchResults,
  setFilters,
  clearFilters,
  setError,
  clearError,
  resetRoutes,
} = routesSlice.actions;

export default routesSlice.reducer;

