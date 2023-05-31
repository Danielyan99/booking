import { IDateFromStorage } from '@src/core/types/dates';

export interface IProps {
  name: string;
  price: number;
  reservedDates: Array<IDateFromStorage>;
  hotelName: string;
  hotelRegion: string;
  totalProfit: number;
}
