import $api from '@src/shared/api';
import { AxiosResponse } from 'axios';
import { AuthResponse } from '@src/core/modules/AuthResponse';

export default class AuthService {
  static async signin(email: string, password: string): Promise<AxiosResponse<AuthResponse>> {
    return $api.post<AuthResponse>('/signin', { email, password });
  }

  static async signup(name: string, email: string, password: string): Promise<AxiosResponse<AuthResponse>> {
    return $api.post<AuthResponse>('/signup', { email, password });
  }

  static async logout(): Promise<void> {
    return $api.post('/logout');
  }
}
