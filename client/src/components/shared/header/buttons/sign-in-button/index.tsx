import { Dispatch, memo, SetStateAction } from 'react';
import { Button } from 'antd';
import { useTranslation } from 'next-i18next';

interface SignInButtonProps {
  setIsOpen: Dispatch<SetStateAction<boolean>>
}

function SignInButton({ setIsOpen } : SignInButtonProps) {
  const { t: translate } = useTranslation('common');

  return (
    <Button className='sign-in__btn' size='large' onClick={() => setIsOpen(true)}>{translate('signIn')}</Button>
  );
}

export default memo(SignInButton);
