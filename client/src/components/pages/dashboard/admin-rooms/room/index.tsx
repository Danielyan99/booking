import React, { memo, useState } from 'react';
import { IProps } from '@src/components/pages/dashboard/admin-rooms/room/types';
import { Button, Card } from 'antd';
import { useTranslation } from 'next-i18next';
import dayjs from 'dayjs';

function Room({ name, price, reservedDates, hotelName, hotelRegion, hotelId, totalProfit, rooms } : IProps) {
  const { t } = useTranslation('common');
  const [hotelTotalProfit, setHotelTotalProfit] = useState({ hideTotalProfit: true, profit: 0 });

  const totalProfitHandler = () => {
    const filteredHotelRooms = rooms.filter((room: any) => room.hotelData.id === hotelId);
    const hotelTotalProfitSum = filteredHotelRooms.reduce((acc: any, room: any) => acc + room.totalProfit, 0);

    setHotelTotalProfit({ hideTotalProfit: !hotelTotalProfit.hideTotalProfit, profit: hotelTotalProfitSum });
  };

  return (
    <Card className='reserved-room__card'>
      <div className='reserved-room__admin'>
        <div className='titles'>
          <h3>{t('hotelName')}</h3>
          <h3>{t('regionName')}</h3>
          <h3>{t('roomName')}</h3>
          <h3>{t('price')}</h3>
          <h3>{t('totalProfit')}</h3>
          <h3>{t('dates')}</h3>
        </div>
        <div className='reserved-room-info'>
          <div className='hotel-info'>
            <h3>{hotelName}</h3>
            <h3>
              {hotelRegion}
            </h3>
          </div>
          <div className='room-info'>
            <h3>{name}</h3>
            <h3>
              {price}
              $
            </h3>
            <h3>
              {totalProfit}
              $
            </h3>
          </div>
          <div className='room-total__dates'>
            {reservedDates.map((date, i) => {
              const startDate = dayjs(date.startDate).format('DD/MM/YYYY');
              const endDate = dayjs(date.endDate).format('DD/MM/YYYY');
              return (
                <div className='admin-room__dates' key={i}>
                  <h4>{startDate}</h4>
                  <h5>-</h5>
                  <h4>{endDate}</h4>
                  <h4 style={{ marginLeft: '0.4rem' }}>
                    (
                    {date.userEmail}
                    )
                  </h4>
                </div>
              );
            })}
          </div>
        </div>
        <div className='reserved-room__total-profit'>
          <Button onClick={totalProfitHandler}>{t('seeHotelTotalProfit')}</Button>
          {!hotelTotalProfit.hideTotalProfit && (
          <h3 className='profit'>
            {hotelTotalProfit.profit}
            $
          </h3>
          )}
        </div>
      </div>
    </Card>
  );
}

export default memo(Room);
