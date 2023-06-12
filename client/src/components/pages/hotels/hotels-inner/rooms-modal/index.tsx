import React, { memo, useEffect, useState } from 'react';
import { Button, DatePicker, Form, Input, message, Modal, Spin } from 'antd';
import { useTranslation } from 'next-i18next';
import { IRoomsModalProps } from '@src/components/pages/hotels/hotels-inner/rooms-modal/types';
import RoomController from '@src/core/controllers/RoomController';
import { IRoom } from '@src/core/modules/room/types';
import Title from 'antd/lib/typography/Title';
import Room from '@src/components/pages/hotels/hotels-inner/rooms-modal/room';
import { IDateFromStorage } from '@src/core/types/dates';
import dayjs from 'dayjs';
import { RangePickerProps } from 'antd/lib/date-picker';
import { useSelector } from 'react-redux';
import { IRootState } from '@src/core/store';

const { RangePicker } = DatePicker;

function RoomsModal({ isModalOpen, closeModal, id, userId, hotelName, hotelRegion }: IRoomsModalProps) {
  const { t } = useTranslation('common');
  const { user } = useSelector((state: IRootState) => state.user);
  const [hotelRooms, setHotelRooms] = useState<any>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [selectedRoom, setSelectedRoom] = useState<any>(null);
  const [date, setDate] = useState<any>(null);
  const [total, setTotal] = useState<number>(0);
  const disabledDate: RangePickerProps['disabledDate'] = (current) => current && current < dayjs().endOf('day');

  useEffect(() => {
    if (!isModalOpen) return;
    (async () => {
      setIsLoading(true);
      try {
        const roomsResponse = await RoomController.getHotelRooms(id);
        setHotelRooms(roomsResponse.data);
      } catch (err) {
        message.error(t('somethingWentWrongMessage'));
      } finally {
        setIsLoading(false);
      }
    })();
  }, [isModalOpen]);

  useEffect(() => {
    let dates = localStorage.getItem('dates') as unknown as IDateFromStorage;
    if (dates !== null && selectedRoom) {
      dates = JSON.parse(dates as unknown as string);
      const startDate = dayjs(dates.startDate);
      const endDate = dayjs(dates.endDate);
      const diff = endDate.diff(startDate, 'day');
      setTotal(diff * selectedRoom.price);
      setDate({ startDate: startDate.format('DD/MM/YYYY'), endDate: endDate.format('DD/MM/YYYY') });
    }
  }, [selectedRoom]);

  const bookRoomHandler = async () => {
    const dates = JSON.parse(localStorage.getItem('dates') as any);
    const data = { date: { startDate: dates.startDate, endDate: dates.endDate, userEmail: user.email },
      userId,
      hotelData: { name: hotelName, region: hotelRegion },
      totalPrice: total,
    };
    try {
      await RoomController.reserveRoom(selectedRoom.id, data);
      message.success(t('roomSuccessfullyWasBooked'));
    } catch (err) {
      message.error(t('somethingWentWrongMessage'));
    }
    closeModal();
    setSelectedRoom(null);
  };

  const changeHandler = (data: any) => {
    if (data.date) {
      const dates = { startDate: data.date[0], endDate: data.date[1] };
      localStorage.setItem('dates', JSON.stringify(dates));
    } else {
      localStorage.removeItem('dates');
      setDate(null);
    }
    setSelectedRoom(null);
  };

  return (
    <div>
      <Modal
        open={isModalOpen}
        title={t('rooms')}
        footer={false}
        onCancel={closeModal}
        width={660}
      >
        {isLoading ? <Spin size='large' />
          : hotelRooms.length ? (
            <div>
              {hotelRooms.map((room: IRoom) => (
                <Room
                  key={room._id}
                  name={room.name}
                  price={room.price}
                  id={room._id}
                  setSelectedRoom={setSelectedRoom}
                  selectedRoomId={selectedRoom?.id}
                  reservedDates={room.reservedDates}
                />
              ))}
              <div className='change-date'>
                <Form onFinish={changeHandler}>
                  <Form.Item name='date'>
                    <RangePicker size='large' disabledDate={disabledDate} placeholder={[t('startDate'), t('endDate')]} />
                  </Form.Item>
                  <Button size='large' className='search-btn' htmlType='submit'>{t('updateDate')}</Button>
                </Form>
              </div>
              {selectedRoom && (
                <div className='room-total'>
                  {date ? (
                    <div className='room-total__dates'>
                      <h4>{date.startDate}</h4>
                      <h5>-</h5>
                      <h4>{date.endDate}</h4>
                    </div>
                  ) : <h3>{t('noDatesSelected')}</h3>}
                  <h2>
                    {t('total')}
                    {' '}
                    {total}
                    $
                  </h2>
                  <Button size='large' disabled={!date} onClick={bookRoomHandler}>{t('book')}</Button>
                </div>
              )}
            </div>
          ) : <Title level={4}>{t('thereIsNoRoomsPara')}</Title>}
      </Modal>
    </div>
  );
}

export default memo(RoomsModal);
