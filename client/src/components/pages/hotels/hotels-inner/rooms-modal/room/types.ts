import { Dispatch, SetStateAction } from 'react';

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
  setSelectedRoom: Dispatch<SetStateAction<IHotelRoomTotal>>
}
