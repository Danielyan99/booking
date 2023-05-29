import $api from '@src/shared/api';
import { AuthResponse } from '@src/core/modules/user/AuthResponse';

export default class UserService {
  static getRooms(id: string) {
    return $api.get<AuthResponse>(`auth/rooms/${id}`);
  }
}
