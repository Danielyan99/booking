import React, { memo } from 'react';
import { Button, DatePicker, Form, Input } from 'antd';
import { HomeOutlined } from '@ant-design/icons';
import { useTranslation } from 'next-i18next';

const { RangePicker } = DatePicker;

function AdminRoomsFilter() {
  const { t } = useTranslation('common');

  const filterHandler = () => {

  };

  return (
    <div>
      <Form onFinish={filterHandler} className='admin-rooms-filter'>
        <Form.Item name='place' className='top-section__input'>
          <Input size='large' placeholder={t('hotelName') || 'Hotel Name'} prefix={<HomeOutlined />} />
        </Form.Item>
        <Form.Item name='date'>
          <RangePicker size='large' placeholder={[t('startDate'), t('endDate')]} />
        </Form.Item>
        <Button size='large' className='search-btn' htmlType='submit'>{t('search')}</Button>
      </Form>
    </div>
  );
}

export default memo(AdminRoomsFilter);
