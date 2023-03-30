import { createSlice } from '@reduxjs/toolkit';
import { IUser } from '@src/core/modules/IUser';
import { signupUser } from '@src/core/store/features/auth/authSliceService';

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
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(signupUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(signupUser.fulfilled, (state, action:any) => {
      state.error = null;
      state.isAuthenticated = true;
      state.user = action.payload;
      state.isLoading = false;
    });
    builder.addCase(signupUser.rejected, (state, action) => {
      state.error = action.payload as string;
      state.isLoading = false;
      state.isAuthenticated = false;
    });
  },
});

export default authSlice.reducer;
