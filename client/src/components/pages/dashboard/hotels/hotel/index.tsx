import React, { memo } from 'react';
import {Card, Col, message, Rate} from 'antd';
import { IHotelProps } from '@src/components/pages/dashboard/hotels/hotel/types';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import HotelController from '@src/core/controllers/HotelController';

const { Meta } = Card;

function Hotel({ name, id, star, imgUrl, region }: IHotelProps) {
  const hotelDeleteHandler = async () => {
    const response = await HotelController.deleteHotel(id) as any;
    if (response?.payload.data) {
      message.success('Hotel was successfully deleted');
    }
  };

  return (
    <Col span={6}>
      <Card
        hoverable
        cover={<img alt='example' src={imgUrl} />}
        actions={[
          <EditOutlined key='edit' />,
          <DeleteOutlined key='delete' onClick={hotelDeleteHandler} />,
        ]}
      >
        <Meta title={name} description={region} />
        <Rate value={star} disabled />
      </Card>
    </Col>
  );
}

export default memo(Hotel);
