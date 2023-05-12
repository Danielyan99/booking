import React, { memo } from 'react';
import { Card, message, Rate } from 'antd';
import { IHotelProps } from '@src/components/pages/dashboard/hotels/hotel/types';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import HotelController from '@src/core/controllers/HotelController';

const { Meta } = Card;

function Hotel({ name, id, star, imgUrl, region, setIsModalOpen }: IHotelProps) {
  const hotelDeleteHandler = async () => {
    const response = await HotelController.deleteHotel(id) as any;
    if (response?.payload.data) {
      message.success('Hotel was successfully deleted');
    }
  };

  return (
    <Card
      hoverable
      cover={<img alt='example' src={imgUrl} />}
      actions={[
        <EditOutlined key='edit' onClick={() => setIsModalOpen(true)} />,
        <DeleteOutlined key='delete' onClick={hotelDeleteHandler} />,
      ]}
    >
      <Meta title={name} description={region} />
      <Rate value={star} disabled />
    </Card>
  );
}

export default memo(Hotel);
