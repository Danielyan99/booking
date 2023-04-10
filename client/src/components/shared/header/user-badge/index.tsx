import React, { memo } from 'react';
import { Dropdown } from 'antd';
import UserOverlayMenu from '@src/components/shared/header/user-badge/user-overlay-menu';
import UserAvatar from '@src/components/shared/header/user-badge/user-avatar';

function UserBadge() {
  return (
    <Dropdown menu={{ items: UserOverlayMenu }} trigger={['click']}>
      <div>
        <UserAvatar />
      </div>
    </Dropdown>
  );
}

export default memo(UserBadge);
