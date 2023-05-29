import { Dispatch, SetStateAction } from 'react';

export interface IHotelProps {
  name: string;
  star: number;
  images: Array<{ thumbUrl: string; name: string; size: number; type: string; uid?: string }>;
  region: string;
  id: string;
  setIsEditHotelModalOpen: Dispatch<SetStateAction<boolean>>;
  setIsAddRoomModalOpen: Dispatch<SetStateAction<boolean>>;
  setIsRoomModalOpen: Dispatch<SetStateAction<boolean>>;
}
