import React, { memo, useEffect, useState } from 'react';
import { Modal } from 'antd';
import { IAdminRoomsModalProps } from '@src/components/pages/dashboard/hotels/admin-rooms-modal/types';
import RoomController from '@src/core/controllers/RoomController';
import AdminRoom from '@src/components/pages/dashboard/hotels/admin-rooms-modal/admin-room';
import { IRoom } from '@src/core/modules/room/types';

function AdminRoomsModal({ isModalOpen, setIsModalOpen, hotelId }: IAdminRoomsModalProps) {
  const [hotelRooms, setHotelRooms] = useState<any>([]);

  useEffect(() => {
    if (!hotelId || !isModalOpen) return;
    (async () => {
      const roomsResponse = await RoomController.getHotelRooms(hotelId);
      setHotelRooms(roomsResponse.data);
    })();
  }, [hotelId]);

  return (
    <Modal
      open={isModalOpen}
      title='Rooms'
      footer={false}
      onCancel={() => {
        setIsModalOpen(false);
      }}
    >
      {hotelRooms.map((room: IRoom) => (
        <AdminRoom key={room._id} name={room.name} price={room.price} />
      ))}
    </Modal>
  );
}

export default memo(AdminRoomsModal);
