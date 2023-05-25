import { RcFile } from 'antd/es/upload';
import { IDateFromStorage } from '@src/core/types/dates';
import dayjsRange from 'dayjs-range-extend';
import dayjs from 'dayjs';

export const getBase64 = (file: RcFile): Promise<string> => new Promise((resolve, reject) => {
  const reader = new FileReader();
  console.log(file, 'file');
  reader.readAsDataURL(file);
  reader.onload = () => resolve(reader.result as string);
  reader.onerror = (error) => reject(error);
});

export function isDatesOverlap(currentDates: Array<IDateFromStorage>) {
  let dates = localStorage.getItem('dates') as unknown as IDateFromStorage;
  if (!dates) {
    return false;
  }
  let isReserved = false;
  dates = JSON.parse(dates as unknown as string);
  const selectedDateRange = dayjsRange(dayjs(dates.startDate), dayjs(dates.endDate));
  currentDates.forEach((date: IDateFromStorage) => {
    const current = dayjsRange(dayjs(date.startDate), dayjs(date.endDate));
    if (selectedDateRange.isOverlap(current)) {
      isReserved = true;
    }
  });

  return isReserved;
}

export function getReservedUserRooms(data: any) {
  const rooms = data.reservedRooms.map((room: any) => {
    data.rooms.forEach((r: any) => {
      if (room.roomId === r._id) {
        room.room = r;
      }
    });
    room.dates.endDate = dayjs(room.dates.endDate).format('DD/MM/YYYY');
    room.dates.startDate = dayjs(room.dates.startDate).format('DD/MM/YYYY');
    return room;
  });

  return rooms.filter((room: any) => room.room);
}
