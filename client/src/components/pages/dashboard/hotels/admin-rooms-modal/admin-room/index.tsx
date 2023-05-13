import React, { memo, useState } from 'react';
import { IAdminRoom } from '@src/components/pages/dashboard/hotels/admin-rooms-modal/admin-room/types';
import { Form, Input, InputNumber } from 'antd';
import { EditOutlined, CheckCircleOutlined } from '@ant-design/icons';
import { nameRules, priceRules } from '@src/components/pages/dashboard/hotels/add-room-modal/validation';

function AdminRoom({ name, price }: IAdminRoom) {
  const [isEditMode, setIsEditMode] = useState(false);
  const [form] = Form.useForm();

  return (
    <div className='admin-room'>
      <Form className='admin-room__form' form={form} initialValues={{ name, price }} disabled={!isEditMode}>
        <Form.Item name='name' label='Name' rules={nameRules()} className='modal-input'>
          <Input placeholder='Name' />
        </Form.Item>
        <Form.Item name='price' label='Price' rules={priceRules()} className='modal-input'>
          <InputNumber />
        </Form.Item>
      </Form>
      <div className='admin-room__btns'>
        <EditOutlined onClick={() => setIsEditMode(!isEditMode)} style={{ fontSize: 20 }} />
        <CheckCircleOutlined style={{ fontSize: 20 }} />
      </div>
    </div>
  );
}

export default memo(AdminRoom);
