import React, { memo } from 'react';
import { IHotelDB } from '@src/components/pages/dashboard/hotels/hotels-list/types';
import Title from 'antd/lib/typography/Title';
import Carousel from 'react-multi-carousel';
import { responsive } from '@src/components/pages/main/offers/we-offer/constants';
import OfferHotel from '@src/components/pages/main/offers/offer-hotel';
import { Typography } from 'antd';
import { useTranslation } from 'next-i18next';

const { Paragraph } = Typography;

function BestPlaces({ bestPlaces: hotels }: {bestPlaces: Array<IHotelDB>}) {
  const { t } = useTranslation('common');

  return (
    <div className='main-section'>
      <div className='main-section__header'>
        <Title level={2}>{t('bestHotels')}</Title>
        <Paragraph className='main-section__para'>{t('bestHotelsPara')}</Paragraph>
      </div>
      <Carousel responsive={responsive}>
        {hotels.map((hotel: IHotelDB) => (
          <OfferHotel
            key={hotel._id}
            img={hotel.images[0].thumbUrl}
            name={hotel.name}
            region={hotel.region}
          />
        ))}
      </Carousel>
    </div>
  );
}

export default memo(BestPlaces);
