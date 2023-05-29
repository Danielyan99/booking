import $api from '@src/shared/api';
import axios, { AxiosResponse } from 'axios';
import { AuthResponse } from '@src/core/modules/user/AuthResponse';

export default class AuthService {
  static async signin(email: string, password: string): Promise<AxiosResponse<AuthResponse>> {
    return $api.post<AuthResponse>('/auth/signin', { email, password });
  }

  static async signup(name: string, email: string, password: string): Promise<AxiosResponse<AuthResponse>> {
    return $api.post<AuthResponse>('/auth/signup', { email, password, name, role: 'user' });
  }

  static async checkAuth() {
    return axios.get<AuthResponse>(`${process.env.API_URL}/auth/refresh`, { withCredentials: true });
  }

  static async logout(): Promise<void> {
    return $api.post('/auth/logout');
  }

  static async changePassword(id: string, data: { newPassword: string, lastPassword: string }): Promise<AxiosResponse<AuthResponse>> {
    return $api.put<AuthResponse>(`auth/changePassword/${id}`, data);
  }
}
