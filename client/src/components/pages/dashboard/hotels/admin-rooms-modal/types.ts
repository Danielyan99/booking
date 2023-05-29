import { Dispatch, SetStateAction } from 'react';

export interface IAdminRoomsModalProps {
  isModalOpen: boolean;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
  hotelId: string;
}
