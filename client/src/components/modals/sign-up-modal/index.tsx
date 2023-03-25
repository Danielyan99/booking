import { Dispatch, memo, SetStateAction } from 'react';
import { Modal } from 'antd';
import { useTranslation } from 'next-i18next';

interface SignUpModalProps {
  isOpen: boolean,
  setIsOpen: Dispatch<SetStateAction<boolean>>
}

function SignUpModal({ isOpen, setIsOpen }: SignUpModalProps) {
  const { t: translate } = useTranslation('common');

  return (
    <Modal title={translate('register')} okText={translate('register')} cancelText={translate('cancel')} open={isOpen} onCancel={() => setIsOpen(false)} />
  );
}

export default memo(SignUpModal);
