import { MenuProps } from 'antd';
import React from 'react';
import { PieChartOutlined, UserOutlined } from '@ant-design/icons';
import Router from 'next/router';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[] | null,
  onClick?: MenuProps['onClick'],
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    onClick,
  } as MenuItem;
}

const sidebarMenuItems: MenuItem[] = [
  getItem('Hotels', 'hotels', <PieChartOutlined />, null, () => Router.push({ query: { tab: 'hotels' } })),
  getItem('Settings', 'settings', <UserOutlined />, null, () => Router.push({ query: { tab: 'settings' } })),
];

export default sidebarMenuItems;
