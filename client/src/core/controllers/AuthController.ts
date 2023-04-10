import { ISignInData, ISignUpData } from '@src/components/modals/sign-up-modal/types';
import {checkAuthUser, logoutUser, signinUser, signupUser} from '@src/core/store/features/auth/authSliceService';
import { store } from '@src/core/store';

export default class AuthController {
  static signup(data: ISignUpData): any {
    return store.dispatch(signupUser(data));
  }

  static signin(data: ISignInData): any {
    return store.dispatch(signinUser(data));
  }

  static checkAuth(): any {
    return store.dispatch(checkAuthUser());
  }

  static logout(): any {
    return store.dispatch(logoutUser());
  }
}
