import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  posts: [],
};

const blogSlice = createSlice({
  name: 'blog',
  initialState,
  reducers: {
    
  },
});

export const blogActions = blogSlice.actions;

export default blogSlice.reducer;
