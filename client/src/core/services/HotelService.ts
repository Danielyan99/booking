import { AxiosResponse } from 'axios';
import { AuthResponse } from '@src/core/modules/user/AuthResponse';
import $api from '@src/shared/api';
import { IHotel } from '@src/core/modules/hotel/types';

export default class HotelService {
  static async createHotel(hotelData: IHotel): Promise<AxiosResponse<AuthResponse>> {
    return $api.post<AuthResponse>('/hotel/create', hotelData);
  }

  static async getAll(): Promise<AxiosResponse<AuthResponse>> {
    return $api.get<AuthResponse>('/hotel/all');
  }

  static async updateHotel(id: string, hotelData:IHotel): Promise<AxiosResponse<AuthResponse>> {
    return $api.put<AuthResponse>(`hotel/${id}`, hotelData);
  }

  static async deleteHotel(id: string): Promise<AxiosResponse<AuthResponse>> {
    return $api.delete<AuthResponse>(`/hotel/${id}`);
  }
}
