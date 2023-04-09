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

export const siginUser = createAsyncThunk('user/signin', async (body: any, { rejectWithValue }) => {
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
