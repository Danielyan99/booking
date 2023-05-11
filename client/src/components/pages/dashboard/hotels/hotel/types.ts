import { Dispatch, SetStateAction } from 'react';

export interface IHotelProps {
  name: string;
  star: number;
  imgUrl: string;
  region: string;
  id: string;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
}
