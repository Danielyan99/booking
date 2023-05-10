import { IUser } from '@src/core/modules/user/IUser';

export interface AuthResponse {
  accessToken: string;
  refreshToken: string;
  user: IUser;
}
