import UserService from '@src/core/services/UserService';

export default class UserController {
  static getRooms(id: string) {
    return UserService.getRooms(id);
  }
}
