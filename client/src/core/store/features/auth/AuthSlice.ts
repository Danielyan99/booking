import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: {},
  loading: false,
  error: '',
};

const authSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {

  },
});

export default authSlice.reducer;
