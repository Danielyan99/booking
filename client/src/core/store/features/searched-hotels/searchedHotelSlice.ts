import { IHotel } from '@src/core/modules/hotel/types';
import { createSlice } from '@reduxjs/toolkit';
import { searchHotel } from '@src/core/store/features/searched-hotels/searchedHotelsService';

interface HotelState {
  hotels: Array<IHotel>,
  searchedHotels: Array<IHotel>,
  error: string | null,
  isLoading: boolean,
}

const initialState: HotelState = {
  hotels: [],
  searchedHotels: [],
  error: '',
  isLoading: false,
};

const searchedHotelSlice = createSlice({
  name: 'searchedHotels',
  initialState,
  reducers: {
    filter(state, { payload }) {
      state.searchedHotels = state.hotels.filter((hotel) => {
        if (payload.star?.length && !payload.star.includes(String(hotel.star))) {
          return false;
        }
        if (payload.cancellationPolicy?.length && !payload.cancellationPolicy.every((item: any) => hotel.cancellationPolicy.includes(item))) {
          return false;
        }
        if (payload.facilities?.length && !payload.facilities.every((item: any) => hotel.facilities.includes(item))) {
          return false;
        }
        if (payload.funThings?.length && !payload.funThings.every((item: any) => hotel.funThings.includes(item))) {
          return false;
        }
        if (payload.meals?.length && !payload.meals.every((item: any) => hotel.meals.includes(item))) {
          return false;
        }

        return true;
      });
    },
  },
  extraReducers: (builder) => {
    builder.addCase(searchHotel.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(searchHotel.fulfilled, (state, action: any) => {
      state.hotels = action.payload.data;
      state.searchedHotels = action.payload.data;
      state.error = '';
      state.isLoading = false;
    });
    builder.addCase(searchHotel.rejected, (state, action: any) => {
      state.error = action.payload;
      state.isLoading = false;
    });
  },
});

export const { filter } = searchedHotelSlice.actions;

export default searchedHotelSlice.reducer;
