import { Dispatch, memo, SetStateAction } from 'react';
import { Button } from 'antd';

interface SignInButtonProps {
  setIsOpen: Dispatch<SetStateAction<boolean>>
}

function SignInButton({ setIsOpen } : SignInButtonProps) {
  return (
    <Button className='sign-up__btn' size='large' onClick={() => setIsOpen(true)}>Sign In</Button>
  );
}

export default memo(SignInButton);
