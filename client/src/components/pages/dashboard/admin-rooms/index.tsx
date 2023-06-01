import React, { memo, useEffect, useState } from 'react';
import { message, Spin } from 'antd';
import { useTranslation } from 'next-i18next';
import { useSelector } from 'react-redux';
import { IRootState } from '@src/core/store';
import RoomController from '@src/core/controllers/RoomController';
import AdminRoomsFilter from '@src/components/pages/dashboard/admin-rooms/admin-rooms-filter';
import { addTotalProfitToRooms, roomsFilterHandler, unselectedDataRooms } from '@src/components/pages/dashboard/admin-rooms/utils';
import Room from '@src/components/pages/dashboard/admin-rooms/room';
import Title from 'antd/lib/typography/Title';

function AdminRooms() {
  const { t } = useTranslation('common');
  const { user } = useSelector((state: IRootState) => state.user);
  const [rooms, setRooms] = useState<any>([]);
  const [filteredRooms, setFilteredRooms] = useState<any>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const filterHandler = (data: any) => {
    const copyRooms = JSON.parse(JSON.stringify(rooms));
    const filteredrooms = roomsFilterHandler(copyRooms, data);
    if (data.date) {
      const unselectedDateRooms = unselectedDataRooms(data, filteredrooms);
      setFilteredRooms(unselectedDateRooms);
    } else {
      setFilteredRooms(filteredrooms);
    }
  };

  useEffect(() => {
    if (!user) return;
    (async () => {
      setIsLoading(true);
      try {
        const roomsResponse = await RoomController.getReservedRooms();

        const rooms = addTotalProfitToRooms(roomsResponse);
        setRooms(rooms);
        setFilteredRooms(rooms);
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
    <div className='admin-rooms'>
      <AdminRoomsFilter filterHandler={filterHandler} />
      {filteredRooms.length ? filteredRooms.map((room: any) => <Room key={room._id} name={room.name} price={room.price} reservedDates={room.reservedDates} hotelName={room.hotelData.name} hotelRegion={room.hotelData.region} hotelId={room.hotelData.id} totalProfit={room.totalProfit} rooms={rooms} />) : <Title>{t('thereIsNoReservedRooms')}</Title>}
    </div>
  );
}

export default memo(AdminRooms);
