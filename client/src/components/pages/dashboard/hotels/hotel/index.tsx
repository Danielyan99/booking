import React, { memo } from 'react';
import { Card, Carousel, message, Rate } from 'antd';
import { IHotelProps } from '@src/components/pages/dashboard/hotels/hotel/types';
import { DeleteOutlined, EditOutlined, AppstoreAddOutlined, EyeOutlined } from '@ant-design/icons';
import HotelController from '@src/core/controllers/HotelController';
import { useTranslation } from 'next-i18next';

const { Meta } = Card;

function Hotel({ name, id, star, images, region, setIsEditHotelModalOpen, setIsAddRoomModalOpen, setIsRoomModalOpen }: IHotelProps) {
  const { t } = useTranslation('common');

  const hotelDeleteHandler = async () => {
    const response = await HotelController.deleteHotel(id);
    if (response?.payload) {
      message.success(t('hotelDeletedSuccessMessage'));
    }
  };

  return (
    <Card
      hoverable
      cover={(
        <Carousel dots={{ className: 'dots' }} autoplay>
          {images.map((img, i) => (<img key={img.uid || i} src={img.thumbUrl} alt='hotel-img' />))}
        </Carousel>
)}
      actions={[
        <EditOutlined key='edit' onClick={() => setIsEditHotelModalOpen(true)} />,
        <AppstoreAddOutlined key='add-room' onClick={() => setIsAddRoomModalOpen(true)} />,
        <DeleteOutlined key='delete' onClick={hotelDeleteHandler} />,
        <EyeOutlined key='rooms' onClick={() => setIsRoomModalOpen(true)} />,
      ]}
    >
      <Meta title={name} description={region} />
      <Rate value={star} disabled />
    </Card>
  );
}

export default memo(Hotel);
