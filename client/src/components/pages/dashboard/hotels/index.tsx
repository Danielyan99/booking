import React, { memo } from 'react';
import { Tabs, TabsProps } from 'antd';
import HotelsList from '@src/components/pages/dashboard/hotels/hotels-list';
import AddHotel from '@src/components/pages/dashboard/hotels/add-hotel';

const items: TabsProps['items'] = [
  {
    key: '1',
    label: 'Hotels',
    children: <HotelsList />,
  },
  {
    key: '2',
    label: 'Add Hotel',
    children: <AddHotel />,
  },
];

function DashboardHotels() {
  return (
    <Tabs defaultActiveKey='1' items={items} />
  );
}

export default memo(DashboardHotels);
