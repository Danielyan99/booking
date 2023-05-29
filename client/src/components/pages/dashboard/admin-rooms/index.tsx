import React, { memo, useEffect, useState } from 'react';
import { message, Spin } from 'antd';
import { useTranslation } from 'next-i18next';
import { useSelector } from 'react-redux';
import { IRootState } from '@src/core/store';
import Title from 'antd/lib/typography/Title';
import RoomController from '@src/core/controllers/RoomController';
import Room from '@src/components/pages/dashboard/admin-rooms/room';

function AdminRooms() {
  const { t } = useTranslation('common');
  const { user } = useSelector((state: IRootState) => state.user);
  const [rooms, setRooms] = useState<any>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    if (!user) return;
    (async () => {
      setIsLoading(true);
      try {
        const roomsResponse = await RoomController.getReservedRooms();
        setRooms(roomsResponse.data);
      } catch (err) {
        message.error(t('somethingWentWrongMessage'));
      } finally {
        setIsLoading(false);
      }
    })();
  }, [user]);

  if (isLoading) {
    return <Spin size='large' />;
  }

  return (
    <div>
      {rooms.length ? rooms.map((room: any) => <Room key={room._id} name={room.name} price={room.price} reservedDates={room.reservedDates} hotelName={room.hotelData.hotelName} hotelRegion={room.hotelData.hotelRegion} />) : <Title>{t('thereIsNoReservedRooms')}</Title>}
    </div>
  );
}

export default memo(AdminRooms);
