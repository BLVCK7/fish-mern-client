import { configureStore } from '@reduxjs/toolkit';
import postReducer from './slices/PostSlice';

export const store = configureStore({
  reducer: {
    postReducer,
  },
});
