import React, { memo, useEffect } from 'react';
import HotelController from '@src/core/controllers/HotelController';
import { useSelector } from 'react-redux';
import { IRootState } from '@src/core/store';
import {Row, Spin} from 'antd';
import { IHotelDB } from '@src/components/pages/dashboard/hotels/hotels-list/types';
import Hotel from '@src/components/shared/hotel';

function HotelsList() {
  const { hotels, isLoading, error } = useSelector((state: IRootState) => state.hotel);

  useEffect(() => {
    HotelController.getAll();
  }, []);

  if (isLoading) {
    return <Spin size='large' />;
  }
  console.log(hotels)
  return (
    <div>
      {hotels.length
        ? (
          <div className='hotels'>
            <Row gutter={3}>
              {hotels.map((hotel: IHotelDB) => <Hotel key={hotel._id} name={hotel.name} star={hotel.star} imgUrl={hotel.images[0]?.thumbUrl} />)}
            </Row>
          </div>
        )
        : <div>No Hotels</div>}
      {error && <div className='error-message'>{error}</div>}
    </div>
  );
}

export default memo(HotelsList);
