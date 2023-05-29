import React, { memo } from 'react';
import { IOfferHotel } from '@src/components/pages/main/offers/types';
import Title from 'antd/lib/typography/Title';
import { Typography } from 'antd';

const { Paragraph } = Typography;

function OfferHotel({ img, name, region }: IOfferHotel) {
  return (
    <div className='offer-hotel'>
      <div className='offer-hotel__img'><img src={img} alt='hotel-img' /></div>
      <div className='offer-hotel__texts'>
        <Title level={4}>{name}</Title>
        <Paragraph>{region}</Paragraph>
      </div>
    </div>
  );
}

export default memo(OfferHotel);
