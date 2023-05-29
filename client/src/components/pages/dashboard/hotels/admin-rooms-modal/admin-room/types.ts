export interface IAdminRoom {
  name: string;
  price: number;
  id: string;
  removeRoomById: (id: string) => void;
}
