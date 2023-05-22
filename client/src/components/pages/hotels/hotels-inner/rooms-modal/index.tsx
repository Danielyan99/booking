import React, { memo, useEffect, useState } from 'react';
import { message, Modal, Spin } from 'antd';
import { useTranslation } from 'next-i18next';
import { IRoomsModalProps } from '@src/components/pages/hotels/hotels-inner/rooms-modal/types';
import RoomController from '@src/core/controllers/RoomController';
import { IRoom } from '@src/core/modules/room/types';
import Title from 'antd/lib/typography/Title';
import Room from '@src/components/pages/hotels/hotels-inner/rooms-modal/room';

function RoomsModal({ isModalOpen, closeModal, id }: IRoomsModalProps) {
  const { t } = useTranslation('common');
  const [hotelRooms, setHotelRooms] = useState<any>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

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

  console.log(hotelRooms, 'hotelRooms');
  return (
    <div>
      <Modal
        open={isModalOpen}
        title={t('rooms')}
        footer={false}
        onCancel={closeModal}
      >
        {/* eslint-disable-next-line no-nested-ternary */}
        {isLoading ? <Spin size='large' />
          : hotelRooms.length ? hotelRooms.map((room: IRoom) => (
            <Room key={room._id} />
          )) : <Title level={4}>{t('thereIsNoRoomsPara')}</Title>}
      </Modal>
    </div>
  );
}

export default memo(RoomsModal);
