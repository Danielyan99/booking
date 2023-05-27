import React from 'react';
import { MenuProps } from 'antd';
import { DashboardOutlined, PoweroffOutlined, SolutionOutlined } from '@ant-design/icons';
import AuthController from '@src/core/controllers/AuthController';
import Router from 'next/router';
import { i18n } from 'next-i18next';

export const getDropdownMenu = () => {
  const DropdownMenu: MenuProps['items'] = [
    {
      label: i18n?.t('profile'),
      key: 'profile',
      icon: <SolutionOutlined />,
      onClick: () => Router.push('/dashboard?tab=settings'),
    },
    {
      label: i18n?.t('dashboard'),
      key: 'dashboard',
      icon: <DashboardOutlined />,
      onClick: () => Router.push('/dashboard'),
    },
    {
      label: i18n?.t('logout'),
      key: 'logout',
      icon: <PoweroffOutlined />,
      onClick: () => {
        Router.push('/');
        AuthController.logout();
      },
    },
  ];

  return DropdownMenu;
};

export default getDropdownMenu;
