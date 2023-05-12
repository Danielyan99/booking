import React, { memo, useEffect, useState } from 'react';
import HotelController from '@src/core/controllers/HotelController';
import { useSelector } from 'react-redux';
import { IRootState } from '@src/core/store';
import { Col, Row, Spin, Typography } from 'antd';
import { IHotelDB } from '@src/components/pages/dashboard/hotels/hotels-list/types';
import Hotel from '@src/components/pages/dashboard/hotels/hotel';
import EditHotelModal from '@src/components/pages/dashboard/hotels/edit-hotel-modal';

const { Title } = Typography;

function HotelsList() {
  const { hotels, isLoading, error } = useSelector((state: IRootState) => state.hotel);
  const [isModalOpen, setIsModalOpen] = useState(false);
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
                    imgUrl={hotel.images[0]?.thumbUrl}
                    setIsModalOpen={setIsModalOpen}
                  />
                </Col>
              ))}
            </Row>
          </div>
        )
        : <Title>There is no Hotels yet</Title>}
      {error && <div className='error-message'>{error}</div>}
      <EditHotelModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} currentOpenedHotelData={currentOpenedHotelData} />
    </div>
  );
}

export default memo(HotelsList);
