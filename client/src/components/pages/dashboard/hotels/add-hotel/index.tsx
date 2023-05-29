import React, { memo, useState } from 'react';
import { Button, Checkbox, Form, Input, message, Modal, Rate, Upload } from 'antd';
import HotelController from '@src/core/controllers/HotelController';
import { PlusOutlined } from '@ant-design/icons';
import { nameRules, regionRules } from '@src/components/pages/dashboard/hotels/add-hotel/validation';
import { IHotel } from '@src/core/modules/hotel/types';
import { useTranslation } from 'next-i18next';
import type { UploadFile } from 'antd/es/upload/interface';
import type { RcFile } from 'antd/es/upload';
import { getBase64 } from '@src/core/utils';

const { TextArea } = Input;

function AddHotel() {
  const [form] = Form.useForm();
  const { t } = useTranslation('common');
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState('');
  const [previewTitle, setPreviewTitle] = useState('');
  const normFile = (e: any) => (Array.isArray(e) ? e : e?.fileList);

  const handlePreview = async (file: UploadFile) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj as RcFile);
    }

    setPreviewImage(file.url || (file.preview as string));
    setPreviewOpen(true);
    setPreviewTitle(file.name || file.url!.substring(file.url!.lastIndexOf('/') + 1));
  };

  const handleSubmit = async (data: IHotel) => {
    const response = await HotelController.createHotel(data);
    if (response.data && !response.error) {
      message.success(t('hotelCreatedSuccessMessage'));
      form.resetFields();
    } else {
      message.error(t('somethingWentWrongMessage'));
    }
  };

  return (
    <Form name='add-hotel' onFinish={handleSubmit} form={form}>
      <Form.Item name='region' rules={nameRules()}>
        <Input placeholder={t('region') || 'Region'} />
      </Form.Item>
      <Form.Item name='name' rules={regionRules()}>
        <Input placeholder={t('name') || 'Name'} />
      </Form.Item>
      <Form.Item name='description'>
        <TextArea rows={4} placeholder={t('description') || 'description'} />
      </Form.Item>
      <Form.Item name='star' label={t('star')} rules={[{ required: true }]}>
        <Rate />
      </Form.Item>
      <Form.Item name='cancellationPolicy' label={t('cancellationPolicy') || 'Cancellation Policy'}>
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
        <Upload listType='picture-card' multiple accept='.png,.jpeg,.jpg,.webp' beforeUpload={() => false} onPreview={handlePreview}>
          <div>
            <PlusOutlined />
            {t('upload')}
          </div>
        </Upload>
      </Form.Item>
      <Modal open={previewOpen} title={previewTitle} footer={null} onCancel={() => setPreviewOpen(false)}>
        <img alt='example' style={{ width: '100%' }} src={previewImage} />
      </Modal>
      <Button type='primary' htmlType='submit'>
        {t('createHotel')}
      </Button>
    </Form>
  );
}

export default memo(AddHotel);
