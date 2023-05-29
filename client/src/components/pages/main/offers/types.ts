import { IHotelDB } from '@src/components/pages/dashboard/hotels/hotels-list/types';

export interface ISectionsProps {
  weOffer: Array<IHotelDB>,
  bestPlaces: Array<IHotelDB>,
  randomRegion: Array<IHotelDB>,
}

export interface IOfferHotel {
  img: string;
  name: string;
  region: string;
}
