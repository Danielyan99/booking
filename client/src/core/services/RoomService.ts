import { IRoom } from '@src/core/modules/room/types';
import { AxiosResponse } from 'axios/index';
import { AuthResponse } from '@src/core/modules/user/AuthResponse';
import $api from '@src/shared/api';
import { IDateFromStorage } from '@src/core/types/dates';

export default class RoomService {
  static createRoom(roomData: IRoom): Promise<AxiosResponse<AuthResponse>> {
    return $api.post<AuthResponse>('/room/create', roomData);
  }

  static updateRoom(roomData: IRoom): Promise<AxiosResponse<AuthResponse>> {
    return $api.put<AuthResponse>(`/room/${roomData._id}`, roomData);
  }

  static deleteRoom(id: string): Promise<AxiosResponse<AuthResponse>> {
    return $api.put<AuthResponse>(`/room/${id}`);
  }

  static getHotelRooms(id: string): Promise<AxiosResponse<AuthResponse>> {
    return $api.get<AuthResponse>(`/room/getHotelRooms?hotelId=${id}`);
  }

  static reserveRoom(id: string, data: { date: IDateFromStorage, userId: string }): Promise<AxiosResponse<AuthResponse>> {
    return $api.put<AuthResponse>(`/room/reserveRoom/${id}`, data);
  }

  static getReservedRooms() {
    return $api.get<AuthResponse>('/room/reservedRooms');
  }
}
