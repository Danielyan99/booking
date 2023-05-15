import { IRoom } from '@src/core/modules/room/types';
import RoomService from '@src/core/services/RoomService';

export default class RoomController {
  static createRoom(id: string, data: IRoom) {
    data.hotelId = id;
    return RoomService.createRoom(data) as any;
  }

  static updateRoom(data: IRoom) {
    return RoomService.updateRoom(data) as any;
  }

  static getHotelRooms(id: string) {
    return RoomService.getHotelRooms(id);
  }
}
