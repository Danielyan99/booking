import React, { memo } from 'react';
import { IEditHotelModalProps } from '@src/components/pages/dashboard/hotels/edit-hotel-modal/types';
import { Button, Checkbox, Form, Input, message, Modal, Rate, Upload } from 'antd';
import { nameRules, regionRules } from '@src/components/pages/dashboard/hotels/add-hotel/validation';
import { PlusOutlined } from '@ant-design/icons';
import HotelController from '@src/core/controllers/HotelController';
import { IHotel } from '@src/core/modules/hotel/types';
import { useTranslation } from 'next-i18next';

function EditHotelModal({ isModalOpen, setIsModalOpen, currentOpenedHotelData } : IEditHotelModalProps) {
  const [form] = Form.useForm();
  const { t } = useTranslation('common');
  const normFile = (e: any) => (Array.isArray(e) ? e : e?.fileList);

  const handleSubmit = async (data: IHotel) => {
    const response = await HotelController.updateHotel(currentOpenedHotelData._id, data);
    if (response?.payload && !response.error) {
      message.success(t('hotelUpdatedSuccessMessage'));
    } else {
      message.error(t('somethingWentWrongMessage'));
    }
    setIsModalOpen(false);
  };

  return (
    <Modal
      open={isModalOpen}
      title={t('editHotel')}
      footer={[
        <Button key='cancel' onClick={() => setIsModalOpen(false)}>
          {t('cancel')}
        </Button>,
        <Button form='edit-hotel-form' key='submit' htmlType='submit'>
          {t('save')}
        </Button>,
      ]}
      onCancel={() => {
        form.resetFields();
        setIsModalOpen(false);
      }}
      afterOpenChange={() => form.resetFields()}
    >
      <Form
        id='edit-hotel-form'
        form={form}
        initialValues={{
          name: currentOpenedHotelData.name,
          region: currentOpenedHotelData.region,
          star: currentOpenedHotelData.star,
          cancellationPolicy: currentOpenedHotelData.cancellationPolicy,
          facilities: currentOpenedHotelData.facilities,
          funThings: currentOpenedHotelData.funThings,
          meals: currentOpenedHotelData.meals,
          images: currentOpenedHotelData.images,
        }}
        onFinish={handleSubmit}
      >
        <Form.Item name='region' rules={nameRules()} className='modal-input'>
          <Input placeholder={t('region') || 'Region'} />
        </Form.Item>
        <Form.Item name='name' rules={regionRules()} className='modal-input'>
          <Input placeholder={t('name') || 'Name'} />
        </Form.Item>
        <Form.Item name='star' label={t('star')} rules={[{ required: true }]}>
          <Rate />
        </Form.Item>
        <Form.Item name='cancellationPolicy' label='Cancellation Policy'>
          <Checkbox.Group>
            <Checkbox value='freeCancellation'>{t('freeCancellation')}</Checkbox>
            <Checkbox value='bookWithoutCreditCard'>{t('bookWithoutCreditCard')}</Checkbox>
            <Checkbox value='noPrepayment'>{t('noPrepayment')}</Checkbox>
          </Checkbox.Group>
        </Form.Item>
        <Form.Item name='facilities' label='Facilities'>
          <Checkbox.Group>
            <Checkbox value='swimmingPool'>{t('swimmingPool')}</Checkbox>
            <Checkbox value='spaCenter'>{t('spaCenter')}</Checkbox>
            <Checkbox value='petsAllowed'>{t('petsAllowed')}</Checkbox>
            <Checkbox value='freeWiFi'>{t('freeWiFi')}</Checkbox>
            <Checkbox value='fitnessCenter'>{t('fitnessCenter')}</Checkbox>
            <Checkbox value='parking'>{t('parking')}</Checkbox>
            <Checkbox value='restaurant'>{t('restaurant')}</Checkbox>
          </Checkbox.Group>
        </Form.Item>
        <Form.Item name='funThings' label='Fun things to do'>
          <Checkbox.Group>
            <Checkbox value='beach'>{t('beach')}</Checkbox>
            <Checkbox value='massage'>{t('massage')}</Checkbox>
            <Checkbox value='billiards'>{t('billiards')}</Checkbox>
            <Checkbox value='diving'>{t('diving')}</Checkbox>
          </Checkbox.Group>
        </Form.Item>
        <Form.Item name='meals' label='Meals'>
          <Checkbox.Group>
            <Checkbox value='allInclusive'>{t('allInclusive')}</Checkbox>
            <Checkbox value='breakfast'>{t('breakfast')}</Checkbox>
            <Checkbox value='selfCatering'>{t('selfCatering')}</Checkbox>
          </Checkbox.Group>
        </Form.Item>
        <Form.Item name='images' label={t('upload')} valuePropName='fileList' getValueFromEvent={normFile}>
          <Upload listType='picture-card' multiple accept='.png,.jpeg,.jpg,.webp' beforeUpload={() => false}>
            <div>
              <PlusOutlined />
              {t('upload')}
            </div>
          </Upload>
        </Form.Item>
      </Form>
    </Modal>
  );
}

export default memo(EditHotelModal);
