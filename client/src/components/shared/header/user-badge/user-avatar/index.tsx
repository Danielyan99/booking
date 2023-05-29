import React, { memo } from 'react';
import { UserOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';

function UserAvatar() {
  return (
    <Avatar size='large' icon={<UserOutlined />} style={{ cursor: 'pointer' }} />
  );
}

export default memo(UserAvatar);
