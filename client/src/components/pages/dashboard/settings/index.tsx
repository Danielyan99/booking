import React, { memo } from 'react';
import { i18n } from 'next-i18next';
import { Tabs, TabsProps } from 'antd';
import ChangePassword from '@src/components/pages/dashboard/settings/change-password';

const getTabs = () => {
  const items: TabsProps['items'] = [
    {
      key: '1',
      label: i18n?.t('changePassword'),
      children: <ChangePassword />,
    },
  ];

  return items;
};

function DashboardProfile() {
  return (
    <div>
      <Tabs defaultActiveKey='1' items={getTabs()} destroyInactiveTabPane />
    </div>
  );
}

export default memo(DashboardProfile);
