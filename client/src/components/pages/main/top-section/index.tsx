import React, { memo } from 'react';
import { Button, DatePicker, Input } from 'antd';
import { HomeOutlined } from '@ant-design/icons';

const { RangePicker } = DatePicker;
function TopSection() {
  return (
    <div className='top-section'>
      <div className='top-section__content'>
        <Input className='top-section__input' size='large' placeholder='Where are you going?' prefix={<HomeOutlined />} />
        <RangePicker size='large' />
        <Button type='primary' size='large' className='search-btn'>Search</Button>
      </div>
    </div>
  );
}

export default memo(TopSection);
