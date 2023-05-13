import React, { memo, useEffect, useState } from 'react';
import HotelController from '@src/core/controllers/HotelController';
import { useSelector } from 'react-redux';
import { IRootState } from '@src/core/store';
import { Col, Row, Spin, Typography } from 'antd';
import { IHotelDB } from '@src/components/pages/dashboard/hotels/hotels-list/types';
import Hotel from '@src/components/pages/dashboard/hotels/hotel';
import EditHotelModal from '@src/components/pages/dashboard/hotels/edit-hotel-modal';
import AddRoomModal from '@src/components/pages/dashboard/hotels/add-room-modal';
import AdminRoomsModal from '@src/components/pages/dashboard/hotels/admin-rooms-modal';

const { Title } = Typography;

function HotelsList() {
  const { hotels, isLoading, error } = useSelector((state: IRootState) => state.hotel);
  const [isAddHotelModalOpen, setIsEditHotelModalOpen] = useState(false);
  const [isAddRoomModalOpen, setIsAddRoomModalOpen] = useState(false);
  const [isRoomModalOpen, setIsRoomModalOpen] = useState(false);
  const [currentOpenedHotelData, setCurrentOpenedHotelData] = useState({} as IHotelDB);

  useEffect(() => {
    HotelController.getAll();
  }, []);

  if (isLoading) {
    return <Spin size='large' />;
  }

  return (
    <div>
      {hotels.length
        ? (
          <div className='hotels'>
            <Row gutter={3}>
              {hotels.map((hotel: IHotelDB) => (
                <Col span={6} key={hotel._id} onClick={() => setCurrentOpenedHotelData({ ...hotel })}>
                  <Hotel
                    id={hotel._id}
                    name={hotel.name}
                    region={hotel.region}
                    star={hotel.star}
                    images={hotel.images}
                    setIsEditHotelModalOpen={setIsEditHotelModalOpen}
                    setIsAddRoomModalOpen={setIsAddRoomModalOpen}
                    setIsRoomModalOpen={setIsRoomModalOpen}
                  />
                </Col>
              ))}
            </Row>
          </div>
        )
        : <Title>There is no Hotels yet</Title>}
      {error && <div className='error-message'>{error}</div>}
      <EditHotelModal isModalOpen={isAddHotelModalOpen} setIsModalOpen={setIsEditHotelModalOpen} currentOpenedHotelData={currentOpenedHotelData} />
      <AddRoomModal isModalOpen={isAddRoomModalOpen} setIsModalOpen={setIsAddRoomModalOpen} hotelId={currentOpenedHotelData._id} />
      <AdminRoomsModal isModalOpen={isRoomModalOpen} setIsModalOpen={setIsRoomModalOpen} hotelId={currentOpenedHotelData._id} />
    </div>
  );
}

export default memo(HotelsList);
