import { createSlice } from '@reduxjs/toolkit';

const routesSlice = createSlice({
  name: 'routes',
  initialState: {
    routes: [],
    isLoading: false,
  },
  reducers: {
    // Lo implementaremos después
  },
});

export default routesSlice.reducer;