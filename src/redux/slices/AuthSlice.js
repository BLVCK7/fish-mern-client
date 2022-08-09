import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { API_URL } from '../../axios';
import AuthService from '../../Services/AuthService';

export const login = createAsyncThunk('auth/login', async ({ username, password }) => {
  try {
    const { data } = await AuthService.login({ username, password });
    localStorage.setItem('token', data.accessToken);

    return data;
  } catch (error) {
    return alert(error.response?.data?.message);
  }
});

export const registration = createAsyncThunk(
  'auth/registration',
  async ({ username, email, password }) => {
    try {
      const { data } = await AuthService.registration({
        username,
        email,
        password,
      });

      localStorage.setItem('token', data.accessToken);
      return data;
    } catch (error) {
      alert(error.response?.data?.message);
    }
  },
);

export const logout = createAsyncThunk('auth/logout', async () => {
  try {
    await AuthService.logout();
    localStorage.removeItem('token');
  } catch (error) {
    alert(error.response?.data?.message);
  }
});

export const checkAuth = createAsyncThunk('auth/checkAuth', async () => {
  try {
    const { data } = await axios.get(`${API_URL}/refresh`, { withCredentials: true });

    localStorage.setItem('token', data.accessToken);
    return data;
  } catch (error) {
    alert(error.response?.data?.message);
  }
});

const initialState = {
  isAuth: false,
  user: {},
  status: '',
};

export const authSlice = createSlice({
  name: 'authReducer',
  initialState,
  reducers: {
    setAuth: (state, action) => {
      state.isAuth = action.payload;
    },
  },
  extraReducers: {
    // Логин
    [login.pending]: (state) => {
      state.status = 'loading';
    },
    [login.fulfilled]: (state, action) => {
      state.user = action.payload;
      state.status = 'loaded';
      state.isAuth = action.payload ? true : false;
    },
    [login.rejected]: (state) => {
      state.user = null;
      state.status = 'error';
      state.isAuth = false;
    },
    // Регистрация
    [registration.pending]: (state) => {
      state.status = 'loading';
    },
    [registration.fulfilled]: (state, action) => {
      state.user = action.payload;
      state.status = 'loaded';
      state.isAuth = action.payload ? true : false;
    },
    [registration.rejected]: (state) => {
      state.user = null;
      state.status = 'error';
    },
    // Логаут
    [logout.pending]: (state) => {
      state.status = 'loading';
    },
    [logout.fulfilled]: (state, action) => {
      state.user = {};
      state.status = 'loaded';
      state.isAuth = false;
    },
    [logout.rejected]: (state) => {
      state.user = null;
      state.status = 'error';
    },
    // Чек авторизации
    [checkAuth.pending]: (state) => {
      state.status = 'loading';
    },
    [checkAuth.fulfilled]: (state, action) => {
      state.user = action.payload;
      state.status = 'loaded';
      state.isAuth = action.payload ? true : false;
    },
    [checkAuth.rejected]: (state) => {
      state.user = null;
      state.status = 'error';
    },
  },
});

export const { setAuth } = authSlice.actions;

export default authSlice.reducer;
