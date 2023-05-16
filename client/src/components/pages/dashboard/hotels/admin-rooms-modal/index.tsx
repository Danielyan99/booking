import React, { memo, useEffect, useState } from 'react';
import { Modal } from 'antd';
import { IAdminRoomsModalProps } from '@src/components/pages/dashboard/hotels/admin-rooms-modal/types';
import RoomController from '@src/core/controllers/RoomController';
import AdminRoom from '@src/components/pages/dashboard/hotels/admin-rooms-modal/admin-room';
import { IRoom } from '@src/core/modules/room/types';
import Title from 'antd/lib/typography/Title';
import { useTranslation } from 'next-i18next';

function AdminRoomsModal({ isModalOpen, setIsModalOpen, hotelId }: IAdminRoomsModalProps) {
  const { t } = useTranslation('common');
  const [hotelRooms, setHotelRooms] = useState<any>([]);

  useEffect(() => {
    if (!hotelId || !isModalOpen) return;
    (async () => {
      const roomsResponse = await RoomController.getHotelRooms(hotelId);
      setHotelRooms(roomsResponse.data);
    })();
  }, [isModalOpen]);

  const removeRoomById = (id: string) => {
    setHotelRooms(hotelRooms.filter((room: IRoom) => room._id !== id));
  };

  return (
    <Modal
      open={isModalOpen}
      title={t('rooms')}
      footer={false}
      onCancel={() => {
        setIsModalOpen(false);
      }}
    >
      {hotelRooms.length ? hotelRooms.map((room: IRoom) => (
        <AdminRoom key={room._id} name={room.name} price={room.price} id={room._id} removeRoomById={removeRoomById} />
      )) : <Title level={4}>{t('thereIsNoRoomsPara')}</Title>}
    </Modal>
  );
}

export default memo(AdminRoomsModal);
