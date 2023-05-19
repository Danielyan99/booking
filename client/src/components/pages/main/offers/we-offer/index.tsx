import React, { memo } from 'react';
import { IHotelDB } from '@src/components/pages/dashboard/hotels/hotels-list/types';
import Title from 'antd/lib/typography/Title';
import { useTranslation } from 'next-i18next';
import Carousel from 'react-multi-carousel';
import OfferHotel from '@src/components/pages/main/offers/offer-hotel';
import { Typography } from 'antd';
import { responsive } from '@src/components/pages/main/offers/we-offer/constants';

const { Paragraph } = Typography;

function WeOffer({ weOffer: hotels }: { weOffer: Array<IHotelDB> }) {
  const { t } = useTranslation('common');

  return (
    <div className='main-section'>
      <div className='main-section__header'>
        <Title level={2}>{t('weOffer')}</Title>
        <Paragraph className='main-section__para'>sdfsdf</Paragraph>
      </div>
      <Carousel responsive={responsive}>
        {hotels.map((hotel: IHotelDB) => (
          <OfferHotel
            key={hotel._id}
            img={hotel.images[0].thumbUrl}
            name={hotel.name}
            region={hotel.region}
            price={150}
          />
        ))}
      </Carousel>
    </div>
  );
}

export default memo(WeOffer);
