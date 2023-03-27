import Logo from '@src/components/shared/header/logo';
import SignInFeature from '@src/features/sign-in-feature';
import SignUpFeature from '@src/features/sign-up-feature';
import LanguagesSelector from '@src/components/shared/header/languages-selector';

function Header() {
  return (
    <div className='header'>
      <div className='container'>
        <div className='header-content'>
          <Logo />
          <div className='header-content__btns'>
            <LanguagesSelector />
            <SignInFeature />
            <SignUpFeature />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
