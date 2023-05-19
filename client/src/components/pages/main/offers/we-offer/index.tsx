import React, { memo } from 'react';
import { IHotelDB } from '@src/components/pages/dashboard/hotels/hotels-list/types';
import Title from 'antd/lib/typography/Title';
import { useTranslation } from 'next-i18next';

function WeOffer({ weOffer }: { weOffer: Array<IHotelDB> }) {
  const { t } = useTranslation('common');

  return (
    <div>
      <div>
        <Title level={4}>{t('weOffer')}</Title>
      </div>
    </div>
  );
}

export default memo(WeOffer);
