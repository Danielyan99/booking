import { Dispatch, SetStateAction } from 'react';

export interface SignUpModalProps {
  isOpen: boolean,
  setIsOpen: Dispatch<SetStateAction<boolean>>
}
