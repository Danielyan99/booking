import { ISinUpData } from '@src/components/modals/sign-up-modal/types';
import { signupUser } from '@src/core/store/features/auth/authSliceService';
import { store } from '@src/core/store';

export default class AuthController {
  static signup(data: ISinUpData): any {
    return store.dispatch(signupUser(data));
  }
}
