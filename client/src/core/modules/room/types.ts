export interface IRoom {
  price: number;
  name: string;
  hotelId: string;
  reservedDates: [];
  hotelData: { name: string; region: string, id: string }
  _id: string;
}
