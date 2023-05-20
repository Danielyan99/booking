import React, { memo } from 'react';
import { Button, DatePicker, Form, Input } from 'antd';
import { HomeOutlined } from '@ant-design/icons';
import { useTranslation } from 'next-i18next';
import { ISearchData } from '@src/components/pages/main/top-section/types';
import { useRouter } from 'next/router';

const { RangePicker } = DatePicker;
function TopSection() {
  const { t } = useTranslation('common');
  const Router = useRouter();

  const searchHandler = (data: ISearchData) => {
    Router.push({ pathname: '/hotels', query: { searchKey: data.place } });
  };

  return (
    <div className='top-section'>
      <div className='top-section__content'>
        <Form onFinish={searchHandler}>
          <Form.Item name='place' className='top-section__input'>
            <Input size='large' placeholder={t('whereAreYouGoing') || 'Where are you going?'} prefix={<HomeOutlined />} />
          </Form.Item>
          <Form.Item name='date'>
            <RangePicker size='large' />
          </Form.Item>
          <Button size='large' className='search-btn' htmlType='submit'>{t('search')}</Button>
        </Form>
      </div>
    </div>
  );
}

export default memo(TopSection);
