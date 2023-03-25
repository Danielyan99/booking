import { Dispatch, memo, SetStateAction } from 'react';
import { Modal } from 'antd';
import { useTranslation } from 'next-i18next';

interface SignInModalProps {
  isOpen: boolean,
  setIsOpen: Dispatch<SetStateAction<boolean>>
}

function SignInModal({ isOpen, setIsOpen }: SignInModalProps) {
  const { t: translate } = useTranslation('common');

  return (
    <Modal title={translate('signIn')} okText={translate('signIn')} cancelText={translate('cancel')} open={isOpen} onCancel={() => setIsOpen(false)} />
  );
}

export default memo(SignInModal);
