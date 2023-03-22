import { Dispatch, memo, SetStateAction } from 'react';
import { Modal } from 'antd';

interface SignInModalProps {
  isOpen: boolean,
  setIsOpen: Dispatch<SetStateAction<boolean>>
}

function SignInModal({ isOpen, setIsOpen }: SignInModalProps) {
  return (
    <Modal title='Sign In' open={isOpen} onCancel={() => setIsOpen(false)} />
  );
}

export default memo(SignInModal);
