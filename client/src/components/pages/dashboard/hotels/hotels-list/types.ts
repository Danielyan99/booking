import { IHotel } from '@src/core/modules/hotel/IHotel';

export interface IHotelDB extends IHotel {
   _id: string;
}
