import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import HotelService from '@src/core/services/HotelService';

export const searchHotel = createAsyncThunk('hotel/search?searchKey', async (searchKey: string | string[], { rejectWithValue }) => {
  try {
    const res = await HotelService.searchHotel(searchKey);
    return res;
  } catch (err) {
    if (err instanceof AxiosError) {
      return rejectWithValue(err?.response?.data.message);
    }
  }
});
