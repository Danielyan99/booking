import { Card } from 'antd';
import React, { memo } from 'react';
import { IProps } from '@src/components/pages/dashboard/rooms/reserved-room/types';
import { useTranslation } from 'next-i18next';

function ReservedRoom({ dates, name, totalPrice, hotelData }: IProps) {
  const { t } = useTranslation('common');

  return (
    <Card className='reserved-room__card'>
      <div className='reserved-room__user'>
        <div className='titles'>
          <h3>{t('hotelName')}</h3>
          <h3>{t('regionName')}</h3>
          <h3>{t('roomName')}</h3>
          <h3>{t('price')}</h3>
          <h3>{t('dates')}</h3>
        </div>
        <div className='reserved-room-info'>
          <div className='hotel-info'>
            <h3>{hotelData.name}</h3>
            <h3>
              {hotelData.region}
            </h3>
          </div>
          <div className='room-info'>
            <h3>{name}</h3>
            <h3>
              {totalPrice}
              $
            </h3>
          </div>
          <div className='room-total__dates'>
            <h4>{dates.startDate}</h4>
            <h5>-</h5>
            <h4>{dates.endDate}</h4>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default memo(ReservedRoom);
