import React, { memo, useEffect, useState } from 'react';
import { message, Spin } from 'antd';
import { useTranslation } from 'next-i18next';
import { useSelector } from 'react-redux';
import { IRootState } from '@src/core/store';
import Title from 'antd/lib/typography/Title';
import RoomController from '@src/core/controllers/RoomController';
import Room from '@src/components/pages/dashboard/admin-rooms/room';
import AdminRoomsFilter from '@src/components/pages/dashboard/admin-rooms/admin-rooms-filter';
import dayjsRange from 'dayjs-range-extend';
import dayjs from 'dayjs';
import { IDateFromStorage } from '@src/core/types/dates';

function AdminRooms() {
  const { t } = useTranslation('common');
  const { user } = useSelector((state: IRootState) => state.user);
  const [rooms, setRooms] = useState<any>([]);
  const [filteredRooms, setFilteredRooms] = useState<any>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const filterHandler = (data: any) => {
    const copyRooms = JSON.parse(JSON.stringify(rooms));

    const filteredrooms = copyRooms.filter((room: any) => {
      let isValid = true;
      let isExistingDate = false;

      const { hotelName, hotelRegion } = room.hotelData;
      if (data.place && !(hotelName.includes(data.place) || hotelRegion.includes(data.place))) {
        isValid = false;
      }
      if (data.date) {
        const selectedDateRange = dayjsRange(data.date[0], data.date[1]);

        room.reservedDates.forEach((date: IDateFromStorage) => {
          const current = dayjsRange(dayjs(date.startDate), dayjs(date.endDate));
          if (selectedDateRange.isOverlap(current)) {
            isExistingDate = true;
          }
        });
      } else isExistingDate = true;

      return isValid && isExistingDate;
    });
    if (data.date) {
      const selectedDateRange = dayjsRange(data.date[0], data.date[1]);
      const unselectedDateRooms = filteredrooms.map((room: any) => {
        const reservedDates = room.reservedDates.filter((date: any) => {
          const current = dayjsRange(dayjs(date.startDate), dayjs(date.endDate));
          return selectedDateRange.isOverlap(current);
        });
        room.reservedDates = reservedDates;
        return room;
      });
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
        setRooms(roomsResponse.data);
        setFilteredRooms(roomsResponse.data);
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
      {filteredRooms.length ? filteredRooms.map((room: any) => <Room key={room._id} name={room.name} price={room.price} reservedDates={room.reservedDates} hotelName={room.hotelData.hotelName} hotelRegion={room.hotelData.hotelRegion} />) : <Title>{t('thereIsNoReservedRooms')}</Title>}
    </div>
  );
}

export default memo(AdminRooms);
