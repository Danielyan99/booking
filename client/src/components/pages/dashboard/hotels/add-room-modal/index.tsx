import React, { memo } from 'react';
import { Button, Form, Input, InputNumber, message, Modal } from 'antd';
import { IAddRoomModalProps } from '@src/components/pages/dashboard/hotels/add-room-modal/types';
import { IRoom } from '@src/core/modules/room/types';
import RoomController from '@src/core/controllers/RoomController';
import { nameRules } from '@src/components/pages/dashboard/hotels/add-room-modal/validation';
import { useTranslation } from 'next-i18next';

function AddRoomModal({ isModalOpen, setIsModalOpen, hotelId, hotelRegion, hotelName } :IAddRoomModalProps) {
  const [form] = Form.useForm();
  const { t } = useTranslation('common');

  const handleSubmit = async (data: IRoom) => {
    data.hotelData = { hotelName, hotelRegion };
    const response = await RoomController.createRoom(hotelId, data);
    if (response.data && !response.error) {
      message.success('Room was successfully created');
    } else {
      message.error(t('somethingWentWrongMessage'));
    }
    setIsModalOpen(false);
  };

  return (
    <Modal
      open={isModalOpen}
      title={t('addRoom')}
      footer={[
        <Button key='cancel' onClick={() => setIsModalOpen(false)}>
          {t('cancel')}
        </Button>,
        <Button form='add-room-form' key='submit' htmlType='submit'>
          {t('createRoom')}
        </Button>,
      ]}
      onCancel={() => {
        setIsModalOpen(false);
      }}
    >
      <Form id='add-room-form' form={form} onFinish={handleSubmit}>
        <Form.Item name='name' rules={nameRules()} className='modal-input'>
          <Input placeholder={t('name') || 'Name'} />
        </Form.Item>
        <Form.Item name='price' className='modal-input'>
          <InputNumber required />
        </Form.Item>
      </Form>
    </Modal>
  );
}

export default memo(AddRoomModal);
