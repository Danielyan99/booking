import React, { memo } from 'react';
import { Button, DatePicker, Form, Input } from 'antd';
import { HomeOutlined } from '@ant-design/icons';
import { useTranslation } from 'next-i18next';

const { RangePicker } = DatePicker;

function AdminRoomsFilter({ filterHandler }: { filterHandler: (data: any) => typeof data}) {
  const { t } = useTranslation('common');

  return (
    <div>
      <Form onFinish={filterHandler} className='admin-rooms-filter'>
        <Form.Item name='place' className='admin-filter__input'>
          <Input size='large' placeholder={t('hotelName') || 'Hotel Name'} prefix={<HomeOutlined />} />
        </Form.Item>
        <Form.Item name='date' className='admin-filter__date'>
          <RangePicker size='large' placeholder={[t('startDate'), t('endDate')]} />
        </Form.Item>
        <Button size='large' className='search-btn' htmlType='submit'>{t('search')}</Button>
      </Form>
    </div>
  );
}

export default memo(AdminRoomsFilter);
