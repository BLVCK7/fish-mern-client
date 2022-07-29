import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  const { data } = await axios.get(`http://localhost:5000/post`);
  return data;
});

const initialState = {
  posts: {
    post: [],
    status: 'loading',
  },
  fish: [],
  fishingDate: '',
};

export const postSlice = createSlice({
  name: 'postReducer',
  initialState,
  reducers: {
    setPost: (state, action) => {
      state.posts = [...state.posts, action.payload];
    },
    setFish: (state, action) => {
      state.fish = [...state.fish, action.payload];
    },
    setFishDate: (state, action) => {
      state.fishingDate = action.payload;
    },
  },
  extraReducers: {
    // Получение статей
    [fetchPosts.pending]: (state) => {
      state.posts.status = 'loading';
    },
    [fetchPosts.fulfilled]: (state, action) => {
      state.posts.post = action.payload;
      state.posts.status = 'loaded';
    },
    [fetchPosts.rejected]: (state) => {
      state.posts.post = [];
      state.posts.status = 'error';
    },
  },
});

// Action creators are generated for each case reducer function
export const { setPost, setFishDate, setFish } = postSlice.actions;

export default postSlice.reducer;
