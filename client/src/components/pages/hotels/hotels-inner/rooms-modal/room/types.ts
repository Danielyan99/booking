import { Dispatch, SetStateAction } from 'react';
import { IDateFromStorage } from '@src/core/types/dates';

export interface IHotelRoomTotal {
  price: number;
  name: string;
  id: string;
}

export interface IHotelRoom {
  price: number;
  name: string;
  id: string;
  selectedRoomId: string;
  reservedDates: Array<IDateFromStorage>
  setSelectedRoom: Dispatch<SetStateAction<IHotelRoomTotal>>
}
