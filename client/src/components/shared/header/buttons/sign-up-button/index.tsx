import { Dispatch, SetStateAction } from 'react';
import { Button } from 'antd';

interface SignUpButtonProps {
  setIsOpen: Dispatch<SetStateAction<boolean>>
}

function SignUpButton({ setIsOpen } : SignUpButtonProps) {
  return (
    <Button className='sign-up__btn' size='large' onClick={() => setIsOpen(true)}>Register</Button>
  );
}

export default SignUpButton;
