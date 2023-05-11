import { Dispatch, SetStateAction } from 'react';
import { IHotelDB } from '@src/components/pages/dashboard/hotels/hotels-list/types';

export interface IEditHotelModalProps {
  isModalOpen: boolean;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
  currentOpenedHotelData: IHotelDB;
}
