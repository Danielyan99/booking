import React, { memo } from 'react';
import { SelectOutlined } from '@ant-design/icons';
import { IHotelRoom } from '@src/components/pages/hotels/hotels-inner/rooms-modal/room/types';

function Room({ name, price, id, setSelectedRoom, selectedRoomId }: IHotelRoom) {
  const selectRoomHandler = () => {
    setSelectedRoom({
      name,
      price,
      id,
    });
  };

  return (
    <div className={`hotel-room${selectedRoomId === id ? ' selected' : ''}`}>
      <div className='hotel-room__form'>
        <div className='hotel-room__content'>
          <div className='hotel-room__left'>
            <h3>Room Number</h3>
            <h3>Room Price</h3>
          </div>
          <div className='hotel-room__right'>
            <h3>{name}</h3>
            <h3>
              {price}
              $(Per Night)
            </h3>
          </div>
        </div>
      </div>
      <div className='admin-room__btns'><SelectOutlined style={{ fontSize: 24, cursor: 'pointer', marginRight: '0.3rem' }} onClick={selectRoomHandler} /></div>
    </div>
  );
}

export default memo(Room);
