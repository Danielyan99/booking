import React, { memo, useEffect, useState } from 'react';
import { message, Spin } from 'antd';
import { useTranslation } from 'next-i18next';
import { useSelector } from 'react-redux';
import { IRootState } from '@src/core/store';
import UserController from '@src/core/controllers/UserController';
import { getReservedUserRooms } from '@src/core/utils';
import Title from 'antd/lib/typography/Title';
import ReservedRoom from '@src/components/pages/dashboard/rooms/reserved-room';

function ReservedRooms() {
  const { t } = useTranslation('common');
  const { user } = useSelector((state: IRootState) => state.user);
  const [rooms, setRooms] = useState<any>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    if (!user) return;
    (async () => {
      setIsLoading(true);
      try {
        const roomsResponse = await UserController.getRooms(user.id);
        setRooms(getReservedUserRooms(roomsResponse.data));
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
  console.log(rooms);
  return (
    <div>
      {rooms.length ? rooms.map(({ dates, room, roomId, totalPrice, hotelData }: any) => <ReservedRoom key={roomId} dates={dates} name={room.name} totalPrice={totalPrice} hotelData={hotelData} />) : <Title>{t('thereIsNoReservedRooms')}</Title>}
    </div>
  );
}

export default memo(ReservedRooms);
