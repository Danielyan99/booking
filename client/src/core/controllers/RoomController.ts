import { IRoom } from '@src/core/modules/room/types';
import RoomService from '@src/core/services/RoomService';
import { IDateFromStorage } from '@src/core/types/dates';

export default class RoomController {
  static createRoom(id: string, data: IRoom) {
    data.hotelId = id;
    return RoomService.createRoom(data) as any;
  }

  static updateRoom(data: IRoom) {
    return RoomService.updateRoom(data) as any;
  }

  static deleteRoom(id: string) {
    return RoomService.deleteRoom(id) as any;
  }

  static getHotelRooms(id: string) {
    return RoomService.getHotelRooms(id);
  }

  static reserveRoom(id: string, data: { date: IDateFromStorage, userId: string }) {
    return RoomService.reserveRoom(id, data);
  }
}
