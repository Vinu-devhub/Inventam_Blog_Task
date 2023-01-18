import { configureStore } from '@reduxjs/toolkit';

import postsReducer from './slices/postsSlice';

const store = configureStore({
  reducer: {
    post: postsReducer,
  },
});

export default store;
