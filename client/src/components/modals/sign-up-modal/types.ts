import { Dispatch, SetStateAction } from 'react';

export interface SignUpModalProps {
  isOpen: boolean,
  setIsOpen: Dispatch<SetStateAction<boolean>>
}

export interface ISignUpData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface ISignInData {
  email: string;
  password: string;
}
