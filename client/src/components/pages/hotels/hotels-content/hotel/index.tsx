import React, { memo } from 'react';
import { IHotelProps } from '@src/components/pages/hotels/hotels-content/hotel/types';

function Hotel({ img, name, region, star }: IHotelProps) {
  return (
    <div className='hotels-item'>
      <div className='hotels-item__img'><img src={img} alt='hotel-img' /></div>
      <div className='hotels-item__content'>
        <div className='hotels-item__name'>{name}</div>
        <div className='hotels-item__region'>{region}</div>
      </div>
      <div className='hotels-item__right'>
        <div className='hotels-item__rating'>{star}</div>
        <div className='hotels-item__price' />
      </div>
    </div>
  );
}

export default memo(Hotel);
