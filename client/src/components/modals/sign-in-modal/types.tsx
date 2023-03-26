import { Dispatch, SetStateAction } from 'react';

export interface SignInModalProps {
  isOpen: boolean,
  setIsOpen: Dispatch<SetStateAction<boolean>>
}
