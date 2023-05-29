import React, { memo } from 'react';
import { IHotelProps } from '@src/components/pages/hotels/hotels-content/hotel/types';
import { ArrowRightOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { useRouter } from 'next/router';

function Hotel({ id, img, name, region, star, description }: IHotelProps) {
  const Router = useRouter();

  return (
    <div className='hotels-item' onClick={() => Router.push(`/hotels/${id}`)}>
      <div className='hotels-item__img'><img src={img} alt='hotel-img' /></div>
      <div className='hotels-item__content'>
        <h2 className='hotels-item__name'>{name}</h2>
        <h3 className='hotels-item__region'>{region}</h3>
        <div className='hotels-item__desc'>
          <p>{description}</p>
          <ArrowRightOutlined />
        </div>
      </div>
      <div className='hotels-item__right'>
        <div className='hotels-item__rating'><Button type='primary'>{star}</Button></div>
        <div className='hotels-item__price' />
      </div>
    </div>
  );
}

export default memo(Hotel);
