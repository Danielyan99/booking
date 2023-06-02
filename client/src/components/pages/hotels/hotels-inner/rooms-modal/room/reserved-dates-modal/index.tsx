import React, { memo } from 'react';
import { Button, Modal } from 'antd';
import { useTranslation } from 'next-i18next';
import dayjs from 'dayjs';

function ReservedDatesModal({ isDatesShown, setIsDatesShown, reservedDates }: { isDatesShown: boolean, setIsDatesShown: any; reservedDates: any }) {
  const { t } = useTranslation('common');

  return (
    <Modal
      open={isDatesShown}
      title={t('reservedDates')}
      footer={[
        <Button key='close' onClick={() => setIsDatesShown(false)}>
          {t('close')}
        </Button>,
      ]}
      onCancel={() => {
        setIsDatesShown(false);
      }}
    >
      {reservedDates.map((date: any, i: number) => (
        <div key={i} className='room-reserved__dates'>
          <h4>{dayjs(date.startDate).format('DD/MM/YYYY')}</h4>
          <h5>-</h5>
          <h4>{dayjs(date.endDate).format('DD/MM/YYYY')}</h4>
        </div>
      ))}
    </Modal>
  );
}

export default memo(ReservedDatesModal);
