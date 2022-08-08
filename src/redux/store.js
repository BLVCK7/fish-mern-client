import { configureStore } from '@reduxjs/toolkit';
import postReducer from './slices/PostSlice';
import authReducer from './slices/AuthSlice';

export const store = configureStore({
  reducer: {
    postReducer: postReducer,
    auth: authReducer,
  },
});
