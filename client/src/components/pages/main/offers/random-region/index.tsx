import React, { memo } from 'react';
import { IHotelDB } from '@src/components/pages/dashboard/hotels/hotels-list/types';
import Title from 'antd/lib/typography/Title';
import Carousel from 'react-multi-carousel';
import { responsive } from '@src/components/pages/main/offers/we-offer/constants';
import OfferHotel from '@src/components/pages/main/offers/offer-hotel';

function RandomRegion({ randomRegion: hotels }: {randomRegion: Array<IHotelDB>}) {
  return (
    <div className='main-section'>
      <div className='main-section__header'>
        <Title level={2}>{hotels[0].region}</Title>
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

export default memo(RandomRegion);
