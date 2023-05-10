import React, { memo } from 'react';
import { Card, Col, Rate } from 'antd';
import { IHotelProps } from '@src/components/shared/hotel/types';

const { Meta } = Card;

function Hotel({ name, star, imgUrl }: IHotelProps) {
  return (
    <Col span={6}>
      <Card
        hoverable
        cover={<img alt='example' src={imgUrl} />}
      >
        <Meta title={name} description={name} />
        <Rate value={star} disabled />
      </Card>
    </Col>
  );
}

export default memo(Hotel);
