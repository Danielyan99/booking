import React, { memo } from 'react';
import { SelectOutlined } from '@ant-design/icons';
import { IHotelRoom } from '@src/components/pages/hotels/hotels-inner/rooms-modal/room/types';
import { isDatesOverlap } from '@src/core/utils';
import { useTranslation } from 'next-i18next';

function Room({ name, price, id, setSelectedRoom, selectedRoomId, reservedDates }: IHotelRoom) {
  const { t } = useTranslation('common');
  const isReserved = isDatesOverlap(reservedDates);

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
            <h3>{t('roomNumber')}</h3>
            <h3>{t('roomPrice')}</h3>
          </div>
          <div className='hotel-room__right'>
            <h3>{name}</h3>
            <h3>
              {price}
              $(
              {t('perNight')}
              )
            </h3>
          </div>
        </div>
      </div>
      <div className='admin-room__btns'>
        {!isReserved ? <SelectOutlined disabled style={{ fontSize: 24, cursor: 'pointer', marginRight: '0.3rem' }} onClick={selectRoomHandler} /> : <h4>{t('reserved')}</h4>}
      </div>
    </div>
  );
}

export default memo(Room);
