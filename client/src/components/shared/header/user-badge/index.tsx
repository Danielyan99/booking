import React, { memo } from 'react';
import { Dropdown } from 'antd';
import UserOverlayMenu from '@src/components/shared/header/user-badge/overlay-menu/UserMenu';
import AdminOverlayMenu from '@src/components/shared/header/user-badge/overlay-menu/AdminMenu';
import UserAvatar from '@src/components/shared/header/user-badge/user-avatar';
import { useSelector } from 'react-redux';
import { IRootState } from '@src/core/store';
import { UserRoles } from '@src/core/constants/user';

function UserBadge() {
  const { user } = useSelector((state: IRootState) => state.user);

  return (
    <Dropdown menu={{ items: user.role === UserRoles.Admin ? AdminOverlayMenu : UserOverlayMenu }} trigger={['click']}>
      <div>
        <UserAvatar />
      </div>
    </Dropdown>
  );
}

export default memo(UserBadge);
