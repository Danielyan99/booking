import { MenuProps } from 'antd';
import React from 'react';
import { PieChartOutlined, UserOutlined } from '@ant-design/icons';
import Router from 'next/router';
import { i18n } from 'next-i18next';

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

export const getSidebarAdminMenuItems = () => {
  const sidebarAdminMenuItems: MenuItem[] = [
    getItem(i18n?.t('hotels'), 'hotels', <PieChartOutlined />, null, () => Router.push({ query: { tab: 'hotels' } })),
    getItem(i18n?.t('settings'), 'settings', <UserOutlined />, null, () => Router.push({ query: { tab: 'settings' } })),
  ];

  return sidebarAdminMenuItems;
};

export const getSidebarUserMenuItems = () => {
  const sidebarUserMenuItems: MenuItem[] = [
    getItem(i18n?.t('reservedRooms'), 'rooms', <PieChartOutlined />, null, () => Router.push({ query: { tab: 'rooms' } })),
    getItem(i18n?.t('settings'), 'settings', <UserOutlined />, null, () => Router.push({ query: { tab: 'settings' } })),
  ];

  return sidebarUserMenuItems;
};
