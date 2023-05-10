import { IHotel } from '@src/core/modules/hotel/IHotel';
import { createSlice } from '@reduxjs/toolkit';
import { getHotels } from '@src/core/store/features/hotel/hotelSliceService';

interface HotelState {
  hotels: Array<IHotel>,
  error: string | null,
  isLoading: boolean,
}

const initialState: HotelState = {
  hotels: [],
  error: '',
  isLoading: false,
};

const hotelSlice = createSlice({
  name: 'hotel',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getHotels.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getHotels.fulfilled, (state, action: any) => {
      state.hotels = action.payload.data;
      state.error = '';
      state.isLoading = false;
    });
    builder.addCase(getHotels.rejected, (state, action: any) => {
      state.error = action.payload;
      state.isLoading = false;
    });
  },
});

export default hotelSlice.reducer;
