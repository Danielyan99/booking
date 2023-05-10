import { createAsyncThunk } from '@reduxjs/toolkit';
import AuthService from '@src/core/services/AuthService';
import { AxiosError } from 'axios';

export const signupUser = createAsyncThunk('user/signup', async (body: any, { rejectWithValue }) => {
  try {
    const res = await AuthService.signup(body.name, body.email, body.password);
    localStorage.setItem('token', res.data.accessToken);
    return res;
  } catch (err) {
    if (err instanceof AxiosError) {
      return rejectWithValue(err?.response?.data.message);
    }
  }
});

export const signinUser = createAsyncThunk('user/signin', async (body: any, { rejectWithValue }) => {
  try {
    const res = await AuthService.signin(body.email, body.password);
    localStorage.setItem('token', res.data.accessToken);
    return res;
  } catch (err) {
    if (err instanceof AxiosError) {
      return rejectWithValue(err?.response?.data.message);
    }
  }
});

export const checkAuthUser = createAsyncThunk('user/checkAuth', async (_, { rejectWithValue }) => {
  try {
    const res = await AuthService.checkAuth();
    localStorage.setItem('token', res.data.accessToken);
    return res;
  } catch (err) {
    if (err instanceof AxiosError) {
      return rejectWithValue(err?.response?.data.message);
    }
  }
});

export const logoutUser = createAsyncThunk('user/logout', async (_, { rejectWithValue }) => {
  try {
    const res = await AuthService.logout();
    localStorage.removeItem('token');
    return res;
  } catch (err) {
    if (err instanceof AxiosError) {
      return rejectWithValue(err?.response?.data.message);
    }
  }
});
