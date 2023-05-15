import React, { memo, useCallback } from 'react';
import { Dropdown } from 'antd';
import UserAvatar from '@src/components/shared/header/user-badge/user-avatar';
import { useSelector } from 'react-redux';
import { IRootState } from '@src/core/store';
import { useRouter } from 'next/router';
import getDropdownMenu from '@src/components/shared/header/user-badge/overlay-menu';

function UserBadge() {
  const { user } = useSelector((state: IRootState) => state.user);
  const router = useRouter();

  const getDropdownItems = useCallback(() => getDropdownMenu(), [router.locale, user]);

  return (
    <Dropdown menu={{ items: getDropdownItems() }} trigger={['click']}>
      <div>
        <UserAvatar />
      </div>
    </Dropdown>
  );
}

export default memo(UserBadge);
