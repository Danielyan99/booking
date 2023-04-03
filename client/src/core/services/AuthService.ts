import $api from '@src/shared/api';
import { AxiosResponse } from 'axios';
import { AuthResponse } from '@src/core/modules/AuthResponse';

export default class AuthService {
  static async signin(email: string, password: string): Promise<AxiosResponse<AuthResponse>> {
    return $api.post<AuthResponse>('/auth/signin', { email, password });
  }

  static async signup(name: string, email: string, password: string): Promise<AxiosResponse<AuthResponse>> {
    return $api.post<AuthResponse>('/auth/signup', { email, password, name, role: 'user' });
  }

  static async logout(): Promise<void> {
    return $api.post('/auth/logout');
  }
}
