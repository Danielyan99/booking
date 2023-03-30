import { createAsyncThunk } from '@reduxjs/toolkit';
import AuthService from '@src/core/services/AuthService';

export const signupUser = createAsyncThunk('user/signup', async (body: any) => {
  const res = await AuthService.signup(body.name, body.email, body.password);
  return res;
});

export const siginUser = createAsyncThunk('user/signin', async (body: any) => {
  const res = await AuthService.signup(body.name, body.email, body.password);
  return res;
});
