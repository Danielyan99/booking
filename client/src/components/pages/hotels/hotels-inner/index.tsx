import React, { memo, useState } from 'react';
import { IHotelDB } from '@src/components/pages/dashboard/hotels/hotels-list/types';
import Image from 'next/image';
import { Button, List, message, Rate, Typography } from 'antd';
import { useTranslation } from 'next-i18next';
import { useSelector } from 'react-redux';
import { IRootState } from '@src/core/store';
import RoomsModal from '@src/components/pages/hotels/hotels-inner/rooms-modal';

const { Paragraph } = Typography;

function HotelInner({ hotel }: { hotel: IHotelDB }) {
  const { t } = useTranslation('common');
  const [isRoomsModalOpen, setIsRoomsModalOpen] = useState<boolean>(false);
  const { user } = useSelector((state: IRootState) => state.user);

  const bookHandler = () => {
    if (!user) {
      message.error(t('pleaseSignInToBook'));
    } else {
      setIsRoomsModalOpen(true);
    }
  };

  return (
    <div className='current-hotel'>
      <div className='hotel-top'>
        <div className='hotel-info'>
          <h1 className='hotel-name'>{hotel.name}</h1>
          <h2 className='hotel-name'>{hotel.region}</h2>
          <Rate value={hotel.star} disabled />
        </div>
        <div className='hotel-book'>
          <Button type='primary' size='large' onClick={bookHandler}>{t('book')}</Button>
        </div>
      </div>
      <div className='hotel-images'>
        {hotel.images.map((img) => <Image key={img.uid} className='hotel-images__item' src={img.thumbUrl} alt='hotel-img' width={400} height={400} />)}
      </div>
      <div className='hotel-bottom'>
        <Paragraph className='hotel-description'>{hotel.description}</Paragraph>
        <div className='hotel-advantages'>
          <List
            header={<h2>{t('advantages')}</h2>}
            bordered
            dataSource={[...hotel.cancellationPolicy, ...hotel.facilities, ...hotel.funThings, ...hotel.meals]}
            renderItem={(item) => (
              <List.Item>
                {' '}
                {t(item)}
              </List.Item>
            )}
          />
        </div>
      </div>
      <RoomsModal isModalOpen={isRoomsModalOpen} id={hotel._id} closeModal={() => setIsRoomsModalOpen(false)} userId={user?.id} />
    </div>
  );
}

export default memo(HotelInner);
