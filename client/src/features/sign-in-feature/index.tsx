import { memo, useState } from 'react';
import SignInModal from '@src/components/modals/sign-in-modal';
import SignInButton from '@src/components/shared/header/buttons/sign-in-button';

function SignInFeature() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <SignInButton setIsOpen={setIsOpen} />
      <SignInModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
}

export default memo(SignInFeature);
