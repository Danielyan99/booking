import React, { memo, useEffect, useState } from 'react';
import { Button, message, Modal, Spin } from 'antd';
import { useTranslation } from 'next-i18next';
import { IRoomsModalProps } from '@src/components/pages/hotels/hotels-inner/rooms-modal/types';
import RoomController from '@src/core/controllers/RoomController';
import { IRoom } from '@src/core/modules/room/types';
import Title from 'antd/lib/typography/Title';
import Room from '@src/components/pages/hotels/hotels-inner/rooms-modal/room';

function RoomsModal({ isModalOpen, closeModal, id }: IRoomsModalProps) {
  const { t } = useTranslation('common');
  const [hotelRooms, setHotelRooms] = useState<any>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [selectedRoom, setSelectedRoom] = useState<any>(null);

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

  return (
    <div>
      <Modal
        open={isModalOpen}
        title={t('rooms')}
        footer={false}
        onCancel={closeModal}
      >
        {isLoading ? <Spin size='large' />
          : hotelRooms.length ? (
            <div>
              {hotelRooms.map((room: IRoom) => (
                <Room key={room._id} name={room.name} price={room.price} id={room._id} setSelectedRoom={setSelectedRoom} selectedRoomId={selectedRoom?.id} />
              ))}
              {selectedRoom && (
                <div className='room-total'>
                  <h3>Total 450$</h3>
                  <Button>Book</Button>
                </div>
              )}
            </div>
          ) : <Title level={4}>{t('thereIsNoRoomsPara')}</Title>}
      </Modal>
    </div>
  );
}

export default memo(RoomsModal);
