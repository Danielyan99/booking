import { configureStore } from '@reduxjs/toolkit';
import authSlice from '@src/core/store/features/auth/authSlice';
import { useDispatch } from 'react-redux';

export const store = configureStore({
  reducer: {
    user: authSlice,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch = () => useDispatch<typeof store.dispatch>();
