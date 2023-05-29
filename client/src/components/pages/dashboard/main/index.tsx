import React, { memo } from 'react';
import { Typography } from 'antd';
import { useSelector } from 'react-redux';
import { IRootState } from '@src/core/store';
import { UserRoles } from '@src/core/constants/user';
import { useTranslation } from 'next-i18next';

const { Paragraph } = Typography;

function Main() {
  const { user } = useSelector((state: IRootState) => state.user);
  const { t } = useTranslation('common');

  return (
    <div>
      <Paragraph className='dashboard-main__para'>
        {user?.role === UserRoles.Admin
          ? t('dashboardAdminMainPageHint')
          : t('dashboardUserMainPageHint')}
      </Paragraph>
    </div>
  );
}

export default memo(Main);
