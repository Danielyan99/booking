export interface IRoom {
  price: number;
  name: string;
  hotelId: string;
  reservedDates: [];
  hotelData: { hotelName: string; hotelRegion: string }
  _id: string;
}
