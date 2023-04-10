import { createSlice } from '@reduxjs/toolkit';
import { IUser } from '@src/core/modules/IUser';
import {checkAuthUser, logoutUser, signinUser, signupUser} from '@src/core/store/features/auth/authSliceService';

interface AuthState {
  isAuthenticated: boolean;
  isLoading: boolean;
  user: IUser | null,
  error: string | null;
}

const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
  isLoading: false,
  error: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(signupUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(signupUser.fulfilled, (state, action: any) => {
      state.error = null;
      state.isAuthenticated = true;
      state.user = action.payload.data;
      state.isLoading = false;
    });
    builder.addCase(signupUser.rejected, (state, action: any) => {
      state.error = action.payload;
      state.isLoading = false;
      state.isAuthenticated = false;
    });

    builder.addCase(signinUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(signinUser.fulfilled, (state, action: any) => {
      state.error = '';
      state.isAuthenticated = true;
      state.user = action.payload.data;
      state.isLoading = false;
    });
    builder.addCase(signinUser.rejected, (state, action: any) => {
      state.error = action.payload;
      state.isLoading = false;
      state.user = null;
      state.isAuthenticated = false;
    });

    builder.addCase(checkAuthUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(checkAuthUser.fulfilled, (state, action: any) => {
      state.error = '';
      state.isAuthenticated = true;
      state.user = action.payload.data;
      state.isLoading = false;
    });
    builder.addCase(checkAuthUser.rejected, (state) => {
      state.error = '';
      state.isAuthenticated = false;
      state.user = null;
      state.isLoading = false;
    });

    builder.addCase(logoutUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(logoutUser.fulfilled, (state) => {
      state.error = '';
      state.isAuthenticated = false;
      state.user = null;
      state.isLoading = false;
    });
    builder.addCase(logoutUser.rejected, (state, action: any) => {
      state.error = action.payload;
      state.isAuthenticated = false;
      state.user = null;
      state.isLoading = false;
    });
  },
});

export default authSlice.reducer;
