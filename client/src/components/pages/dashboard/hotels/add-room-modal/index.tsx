import React, { memo } from 'react';
import { Button, Form, Input, InputNumber, message, Modal } from 'antd';
import { IAddRoomModalProps } from '@src/components/pages/dashboard/hotels/add-room-modal/types';
import { IRoom } from '@src/core/modules/room/types';
import RoomController from '@src/core/controllers/RoomController';
import { nameRules } from '@src/components/pages/dashboard/hotels/add-room-modal/validation';

function AddRoomModal({ isModalOpen, setIsModalOpen, hotelId } :IAddRoomModalProps) {
  const [form] = Form.useForm();

  const handleSubmit = async (data: IRoom) => {
    const response = await RoomController.createRoom(hotelId, data);
    if (response.data) {
      message.success('Room was successfully created');
    }
    setIsModalOpen(false);
  };

  return (
    <Modal
      open={isModalOpen}
      title='Add Room'
      footer={[
        <Button key='cancel' onClick={() => setIsModalOpen(false)}>
          Cancel
        </Button>,
        <Button form='add-room-form' key='submit' htmlType='submit'>
          Create
        </Button>,
      ]}
      onCancel={() => {
        setIsModalOpen(false);
      }}
    >
      <Form id='add-room-form' form={form} onFinish={handleSubmit}>
        <Form.Item name='name' rules={nameRules()} className='modal-input'>
          <Input placeholder='Name' />
        </Form.Item>
        <Form.Item name='price' className='modal-input'>
          <InputNumber required />
        </Form.Item>
      </Form>
    </Modal>
  );
}

export default memo(AddRoomModal);
