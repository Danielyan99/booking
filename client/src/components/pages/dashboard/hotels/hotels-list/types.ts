import { IHotel } from '@src/core/modules/hotel/types';

export interface IHotelDB extends IHotel {
   _id: string;
}
