import Logo from '@src/components/shared/header/logo';
import SignInButton from '@src/components/shared/header/buttons/SignInButton';
import SignUpButton from '@src/components/shared/header/buttons/SignUpButtons';

function Header() {
  return (
    <div className='header'>
      <div className='container'>
        <div className='header-content'>
          <Logo />
          <div className='header-content__btns'>
            <SignUpButton />
            <SignInButton />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
