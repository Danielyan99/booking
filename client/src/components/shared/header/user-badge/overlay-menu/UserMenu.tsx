import React from 'react';
import { MenuProps } from 'antd';
import { PoweroffOutlined, SolutionOutlined } from '@ant-design/icons';
import AuthController from '@src/core/controllers/AuthController';

const UserOverlayMenu: MenuProps['items'] = [
  {
    label: 'profile',
    key: 'profile',
    icon: <SolutionOutlined />,
    onClick: () => console.log('profile'),
  },
  {
    label: 'logout',
    key: 'logout',
    icon: <PoweroffOutlined />,
    onClick: () => AuthController.logout(),
  },
];

export default UserOverlayMenu;
