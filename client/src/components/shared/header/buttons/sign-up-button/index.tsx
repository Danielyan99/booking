import { Dispatch, SetStateAction } from 'react';
import { Button } from 'antd';
import { useTranslation } from 'next-i18next';

interface SignUpButtonProps {
  setIsOpen: Dispatch<SetStateAction<boolean>>
}

function SignUpButton({ setIsOpen } : SignUpButtonProps) {
  const { t: translate } = useTranslation('common');

  return (
    <Button className='sign-up__btn' size='large' onClick={() => setIsOpen(true)}>{translate('register')}</Button>
  );
}

export default SignUpButton;
