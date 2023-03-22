import { Dispatch, memo, SetStateAction } from 'react';
import { Modal } from 'antd';

interface SignUpModalProps {
  isOpen: boolean,
  setIsOpen: Dispatch<SetStateAction<boolean>>
}

function SignUpModal({ isOpen, setIsOpen }: SignUpModalProps) {
  return (
    <Modal title='Registration' open={isOpen} onCancel={() => setIsOpen(false)} />
  );
}

export default memo(SignUpModal);
