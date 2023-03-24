import { memo } from 'react';
import { Select } from 'antd';
import Image from 'next/image';
import { useRouter } from 'next/router';

const { Option } = Select;

function LanguagesSelector() {
  const Router = useRouter();

  const changeLanguageHandler = (value: string) => {
    Router.push(Router.asPath, Router.asPath, { locale: value });
  };

  return (
    <Select
      style={{ width: 120 }}
      onChange={changeLanguageHandler}
      size='large'
      value={Router.locale}
      className='language-select'
      popupClassName='language-select'
    >
      <Option value='en'>
        <Image src='/country-flag/us.svg' width='32' height='16' alt='en' />
        {' '}
        EN
      </Option>
      <Option value='am'>
        <Image src='/country-flag/am.svg' width='32' height='16' alt='am' />
        {' '}
        AM
      </Option>
    </Select>
  );
}

export default memo(LanguagesSelector);
