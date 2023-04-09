import { configureStore } from '@reduxjs/toolkit';
import authSlice from '@src/core/store/features/auth/authSlice';
import { useDispatch } from 'react-redux';
import { rootReducer } from '@reduxjs/toolkit/src/tests/injectableCombineReducers.example';

export const store = configureStore({
  reducer: {
    user: authSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }),
});
export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch = () => useDispatch<typeof store.dispatch>();

export type IRootState = ReturnType<typeof rootReducer>;
