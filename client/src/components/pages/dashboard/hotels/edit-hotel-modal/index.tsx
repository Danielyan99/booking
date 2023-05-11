import React, { memo } from 'react';
import { IEditHotelModalProps } from '@src/components/pages/dashboard/hotels/edit-hotel-modal/types';
import { Modal } from 'antd';

function EditHotelModal({ isModalOpen, setIsModalOpen, currentOpenedHotelData } : IEditHotelModalProps) {
  console.log(currentOpenedHotelData, 'currentOpenedHotelData ---- create edit modal');
  return (
    <Modal open={isModalOpen} onCancel={() => setIsModalOpen(false)} okText='Save'>
      <div>
        edit
      </div>
    </Modal>
  );
}

export default memo(EditHotelModal);
