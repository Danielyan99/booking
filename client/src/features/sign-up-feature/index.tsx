import { memo, useState } from 'react';
import SignUpButton from '@src/components/shared/header/buttons/sign-up-button';
import SignUpModal from '@src/components/modals/sign-up-modal';

function SignUpFeature() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <SignUpButton setIsOpen={setIsOpen} />
      <SignUpModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
}

export default memo(SignUpFeature);
