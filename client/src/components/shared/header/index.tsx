import React, { memo } from 'react';
import Logo from '@src/components/shared/header/logo';
import SignInFeature from '@src/features/sign-in-feature';
import SignUpFeature from '@src/features/sign-up-feature';
import LanguagesSelector from '@src/components/shared/header/languages-selector';
import { useSelector } from 'react-redux';
import { IRootState } from '@src/core/store';
import UserBadge from '@src/components/shared/header/user-badge';

function Header() {
  const { user } = useSelector((state: IRootState) => state.user);

  return (
    <div className='header'>
      <div className='container'>
        <div className='header-content'>
          <Logo />
          <div className='header-content__btns'>
            <LanguagesSelector />
            <div className='header-content__right'>
              {!user ? (
                <>
                  <SignInFeature />
                  <SignUpFeature />
                </>
              ) : <UserBadge />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(Header);
