import { IRoom } from '@src/core/modules/room/types';
import { AxiosResponse } from 'axios/index';
import { AuthResponse } from '@src/core/modules/user/AuthResponse';
import $api from '@src/shared/api';

export default class RoomService {
  static createRoom(roomData: IRoom): Promise<AxiosResponse<AuthResponse>> {
    return $api.post<AuthResponse>('/room/create', roomData);
  }

  static getHotelRooms(id: string): Promise<AxiosResponse<AuthResponse>> {
    return $api.get<AuthResponse>(`/room/getHotelRooms?hotelId=${id}`);
  }
}
