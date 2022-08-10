import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async (user) => {
  const { data } = await axios.get(`http://localhost:5000/post`, user);

  return data;
});

const initialState = {
  posts: {
    post: [],
    status: '',
  },
  fish: [],
  fishingDate: '',
  postMedia: '',
};

export const postSlice = createSlice({
  name: 'postReducer',
  initialState,
  reducers: {
    setFish: (state, action) => {
      state.fish = [...state.fish, action.payload];
    },
    deleteFish: (state, action) => {
      state.fish = state.fish.filter((obj) => obj.fishId !== action.payload);
    },
    setFishDate: (state, action) => {
      state.fishingDate = action.payload;
    },
    setPostMedia: (state, action) => {
      state.postMedia = action.payload;
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
export const { setFishDate, setFish, deleteFish, setPostMedia } = postSlice.actions;

export default postSlice.reducer;
