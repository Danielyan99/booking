import React, { memo, useState } from 'react';
import { IAdminRoom } from '@src/components/pages/dashboard/hotels/admin-rooms-modal/admin-room/types';
import { Form, Input, InputNumber, message } from 'antd';
import { EditOutlined, CheckCircleOutlined } from '@ant-design/icons';
import { nameRules, priceRules } from '@src/components/pages/dashboard/hotels/add-room-modal/validation';
import { IRoom } from '@src/core/modules/room/types';
import RoomController from '@src/core/controllers/RoomController';

function AdminRoom({ name, price, id }: IAdminRoom) {
  const [isEditMode, setIsEditMode] = useState(false);
  const [form] = Form.useForm();

  const handleSubmit = async (data: IRoom) => {
    data._id = id;
    const response = await RoomController.updateRoom(data);
    if (response.data && !response.error) {
      message.success('Room was successfully updated');
    } else {
      message.error('Something went wrong');
    }
    setIsEditMode(false);
  };

  return (
    <div className='admin-room'>
      <Form className='admin-room__form' form={form} initialValues={{ name, price }} disabled={!isEditMode} onFinish={handleSubmit}>
        <Form.Item name='name' label='Name' rules={nameRules()} className='modal-input'>
          <Input placeholder='Name' />
        </Form.Item>
        <Form.Item name='price' label='Price' rules={priceRules()} className='modal-input'>
          <InputNumber />
        </Form.Item>
      </Form>
      <div className='admin-room__btns'>
        <EditOutlined onClick={() => setIsEditMode(!isEditMode)} style={{ fontSize: 20 }} />
        {isEditMode && <CheckCircleOutlined onClick={() => form.submit()} style={{ fontSize: 20 }} />}
      </div>
    </div>
  );
}

export default memo(AdminRoom);
