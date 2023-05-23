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
