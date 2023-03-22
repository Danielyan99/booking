import Logo from '@src/components/shared/header/logo';
import SignInFeature from '@src/components/features/sign-in-feature';
import SignUpFeature from '@src/components/features/sign-up-feature';

function Header() {
  return (
    <div className='header'>
      <div className='container'>
        <div className='header-content'>
          <Logo />
          <div className='header-content__btns'>
            <SignInFeature />
            <SignUpFeature />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;