import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  posts: [],
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
});

// Action creators are generated for each case reducer function
export const { setPost, setFishDate, setFish } = postSlice.actions;

export default postSlice.reducer;
