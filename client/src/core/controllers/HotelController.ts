import HotelService from '@src/core/services/HotelService';
import { IHotel } from '@src/core/modules/hotel/IHotel';
import { getHotels } from '@src/core/store/features/hotel/hotelSliceService';
import { store } from '@src/core/store';

export default class HotelController {
  static createHotel(hotelData: IHotel) {
    return HotelService.createHotel({ ...hotelData });
  }

  static getAll() {
    return store.dispatch(getHotels());
  }
}
