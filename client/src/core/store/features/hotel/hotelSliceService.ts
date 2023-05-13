import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import HotelService from '@src/core/services/HotelService';
import { IHotel } from '@src/core/modules/hotel/types';

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

export const updateHotel = createAsyncThunk('hotel/update/:id', async (data: { id: string, hotelData: IHotel}, { rejectWithValue }) => {
  try {
    const res = await HotelService.updateHotel(data.id, data.hotelData);
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
