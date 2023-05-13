import { Dispatch, SetStateAction } from 'react';

export interface IAddRoomModalProps {
  isModalOpen: boolean;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
  hotelId: string;
}
