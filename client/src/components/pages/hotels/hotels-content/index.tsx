import React, { memo } from 'react';
import { useSelector } from 'react-redux';
import { IRootState } from '@src/core/store';
import { Spin } from 'antd';
import Hotel from '@src/components/pages/hotels/hotels-content/hotel';
import { IHotelDB } from '@src/components/pages/dashboard/hotels/hotels-list/types';
import Title from 'antd/lib/typography/Title';
import { useTranslation } from 'next-i18next';

function HotelsContent() {
  const { searchedHotels, isLoading } = useSelector((state: IRootState) => state.searchedHotels);
  const { t } = useTranslation('common');

  if (isLoading) {
    return <Spin size='large' />;
  }
  return (
    <div className='hotels-content'>
      <div className='hotels-count'>
        <h2>
          {t('hotelsCount')}
          ։
          {' '}
          {searchedHotels.length}
        </h2>
      </div>
      {searchedHotels.length ? searchedHotels.map((hotel: IHotelDB) => (
        <Hotel key={hotel._id} id={hotel._id} img={hotel.images[0].thumbUrl} name={hotel.name} region={hotel.region} star={hotel.star} description={hotel.description} />
      )) : <Title level={4}>{t('thereIsNoHotelsPara')}</Title>}
    </div>
  );
}

export default memo(HotelsContent);
