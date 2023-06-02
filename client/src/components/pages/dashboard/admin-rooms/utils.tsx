import dayjsRange from 'dayjs-range-extend';
import { IDateFromStorage } from '@src/core/types/dates';
import dayjs from 'dayjs';

export const roomsFilterHandler = (copyRooms: any, data: any) => copyRooms.filter((room: any) => {
  let isValid = true;
  let isExistingDate = false;

  const { name, region } = room.hotelData;
  if (data.place && !(name.toLowerCase().includes(data.place) || region.toLowerCase().includes(data.place.toLowerCase()))) {
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

export const unselectedDataRooms = (data: any, filteredrooms: any) => {
  const selectedDateRange = dayjsRange(data.date[0], data.date[1]);

  return filteredrooms.map((room: any) => {
    const reservedDates = room.reservedDates.filter((date: any) => {
      const current = dayjsRange(dayjs(date.startDate), dayjs(date.endDate));
      return selectedDateRange.isOverlap(current);
    });
    room.reservedDates = reservedDates;
    return room;
  });
};

export const addTotalProfitToRooms = (rooms: any) => rooms.data.map((room: any) => {
  let totalProfit = 0;
  room.reservedDates.forEach((date: any) => {
    const startDate = dayjs(date.startDate);
    const endDate = dayjs(date.endDate);

    const diff = endDate.diff(startDate, 'day');
    totalProfit += diff * room.price;
  });

  room.totalProfit = totalProfit;
  return room;
});
