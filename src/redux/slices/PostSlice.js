import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  const { data } = await axios.get(`http://localhost:5000/post`);

  return data;
});

export const createPost = createAsyncThunk('posts/createPost', async (fields) => {
  const { data } = await axios.post(`http://localhost:5000/post`, fields);

  return data;
});

export const getOnePost = createAsyncThunk('posts/getOnePost', async (id) => {
  const { data } = await axios.get(`http://localhost:5000/post/${id}`);

  return data;
});

export const removePost = createAsyncThunk('posts/removePost', async (id) => {
  await axios.delete(`http://localhost:5000/post/${id}`);
});

const initialState = {
  posts: {
    post: [],
    fullPost: {},
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
    // Получение постов
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
    // Добавление поста
    [createPost.pending]: (state) => {
      state.posts.status = 'loading';
    },
    [createPost.fulfilled]: (state, action) => {
      state.posts.fullPost = action.payload;
      state.posts.status = 'loaded';
    },
    [createPost.rejected]: (state) => {
      state.posts.fullPost = {};
      state.posts.status = 'error';
    },
    // Получение поста
    [getOnePost.pending]: (state) => {
      state.posts.status = 'loading';
    },
    [getOnePost.fulfilled]: (state, action) => {
      state.posts.fullPost = action.payload;
      state.posts.status = 'loaded';
    },
    [getOnePost.rejected]: (state) => {
      state.posts.fullPost = [];
      state.posts.status = 'error';
    },
    // Удаление поста
    [removePost.pending]: (state, action) => {
      state.posts.post = state.posts.post.filter((obj) => obj._id !== action.meta.arg);
    },
  },
});

// Action creators are generated for each case reducer function
export const { setFishDate, setFish, deleteFish, setPostMedia } = postSlice.actions;

export default postSlice.reducer;
