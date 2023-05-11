import { AxiosResponse } from 'axios';
import { AuthResponse } from '@src/core/modules/user/AuthResponse';
import $api from '@src/shared/api';
import { IHotel } from '@src/core/modules/hotel/IHotel';

export default class HotelService {
  static async createHotel(hotelData: IHotel): Promise<AxiosResponse<AuthResponse>> {
    return $api.post<AuthResponse>('/hotel/create', hotelData);
  }

  static async getAll(): Promise<AxiosResponse<AuthResponse>> {
    return $api.get<AuthResponse>('/hotel/all');
  }

  static async deleteHotel(id: string): Promise<AxiosResponse<AuthResponse>> {
    return $api.delete<AuthResponse>(`/hotel/${id}`);
  }
}
