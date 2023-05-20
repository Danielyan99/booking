import { IHotel } from '@src/core/modules/hotel/types';
import { createSlice } from '@reduxjs/toolkit';
import { searchHotel } from '@src/core/store/features/searched-hotels/searchedHotelsService';

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

const searchedHotelSlice = createSlice({
  name: 'searchedHotels',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(searchHotel.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(searchHotel.fulfilled, (state, action: any) => {
      state.hotels = action.payload.data;
      state.error = '';
      state.isLoading = false;
    });
    builder.addCase(searchHotel.rejected, (state, action: any) => {
      state.error = action.payload;
      state.isLoading = false;
    });
  },
});

export default searchedHotelSlice.reducer;
