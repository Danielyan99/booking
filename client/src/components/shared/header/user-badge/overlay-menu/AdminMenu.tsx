import React from 'react';
import { MenuProps } from 'antd';
import { PoweroffOutlined, SolutionOutlined, DashboardOutlined } from '@ant-design/icons';
import AuthController from '@src/core/controllers/AuthController';
import Router from 'next/router';

const UserOverlayMenu: MenuProps['items'] = [
  {
    label: 'profile',
    key: 'profile',
    icon: <SolutionOutlined />,
    onClick: () => console.log('profile'),
  },
  {
    label: 'dashboard',
    key: 'dashboard',
    icon: <DashboardOutlined />,
    onClick: () => {
      Router.push('/dashboard');
    },
  },
  {
    label: 'logout',
    key: 'logout',
    icon: <PoweroffOutlined />,
    onClick: () => AuthController.logout(),
  },
];

export default UserOverlayMenu;
