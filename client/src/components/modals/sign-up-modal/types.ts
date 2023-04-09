import { Dispatch, SetStateAction } from 'react';

export interface SignUpModalProps {
  isOpen: boolean,
  setIsOpen: Dispatch<SetStateAction<boolean>>
}

export interface ISinUpData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}
