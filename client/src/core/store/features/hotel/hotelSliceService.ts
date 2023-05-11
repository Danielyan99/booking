import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import HotelService from '@src/core/services/HotelService';

export const getHotels = createAsyncThunk('hotel/all', async (_, { rejectWithValue }) => {
  try {
    const res = await HotelService.getAll();
    return res;
  } catch (err) {
    if (err instanceof AxiosError) {
      return rejectWithValue(err?.response?.data.message);
    }
  }
});

export const deleteHotel = createAsyncThunk('hotel/delete/:id', async (id: string, { rejectWithValue }) => {
  try {
    const res = await HotelService.deleteHotel(id);
    return res;
  } catch (err) {
    if (err instanceof AxiosError) {
      return rejectWithValue(err?.response?.data.message);
    }
  }
});
