import React, { memo } from 'react';
import { Tabs, TabsProps } from 'antd';
import HotelsList from '@src/components/pages/dashboard/hotels/hotels-list';
import AddHotel from '@src/components/pages/dashboard/hotels/add-hotel';
import { i18n } from 'next-i18next';

const getTabs = () => {
  const items: TabsProps['items'] = [
    {
      key: '1',
      label: i18n?.t('hotels'),
      children: <HotelsList />,
    },
    {
      key: '2',
      label: i18n?.t('addHotel'),
      children: <AddHotel />,
    },
  ];

  return items;
};

function DashboardHotels() {
  return (
    <Tabs defaultActiveKey='1' items={getTabs()} destroyInactiveTabPane />
  );
}

export default memo(DashboardHotels);
