import React, { memo } from 'react';
import { IEditHotelModalProps } from '@src/components/pages/dashboard/hotels/edit-hotel-modal/types';
import { Button, Checkbox, Form, Input, message, Modal, Rate, Upload } from 'antd';
import { nameRules, regionRules } from '@src/components/pages/dashboard/hotels/add-hotel/validation';
import { PlusOutlined } from '@ant-design/icons';
import HotelController from '@src/core/controllers/HotelController';
import { IHotel } from '@src/core/modules/hotel/types';

function EditHotelModal({ isModalOpen, setIsModalOpen, currentOpenedHotelData } : IEditHotelModalProps) {
  const [form] = Form.useForm();
  const normFile = (e: any) => (Array.isArray(e) ? e : e?.fileList);

  const handleSubmit = async (data: IHotel) => {
    const response = await HotelController.updateHotel(currentOpenedHotelData._id, data);
    if (response?.payload && !response.error) {
      message.success('Hotel was successfully updated');
    } else {
      message.error('Something went wrong');
    }
    setIsModalOpen(false);
  };

  return (
    <Modal
      open={isModalOpen}
      title='Edit Hotel'
      footer={[
        <Button key='cancel' onClick={() => setIsModalOpen(false)}>
          Cancel
        </Button>,
        <Button form='edit-hotel-form' key='submit' htmlType='submit'>
          Save
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
          <Input placeholder='Region' />
        </Form.Item>
        <Form.Item name='name' rules={regionRules()} className='modal-input'>
          <Input placeholder='Name' />
        </Form.Item>
        <Form.Item name='star' label='Star' rules={[{ required: true }]}>
          <Rate />
        </Form.Item>
        <Form.Item name='cancellationPolicy' label='Cancellation Policy'>
          <Checkbox.Group>
            <Checkbox value='freeCancellation'>Free Cancellation</Checkbox>
            <Checkbox value='bookWithoutCreditCard'>Book Without Credit Card</Checkbox>
            <Checkbox value='noPrepayment'>No Prepayment</Checkbox>
          </Checkbox.Group>
        </Form.Item>
        <Form.Item name='facilities' label='Facilities'>
          <Checkbox.Group>
            <Checkbox value='swimmingPool'>Swimming Pool</Checkbox>
            <Checkbox value='spaCenter'>Spa Center</Checkbox>
            <Checkbox value='petsAllowed'>Pets Allowed</Checkbox>
            <Checkbox value='freeWiFi'>Free WiFi</Checkbox>
            <Checkbox value='fitnessCenter'>Fitness Center</Checkbox>
            <Checkbox value='parking'>Parking</Checkbox>
            <Checkbox value='restaurant'>Restaurant</Checkbox>
          </Checkbox.Group>
        </Form.Item>
        <Form.Item name='funThings' label='Fun things to do'>
          <Checkbox.Group>
            <Checkbox value='beach'>Beach</Checkbox>
            <Checkbox value='massage'>Massage</Checkbox>
            <Checkbox value='billiards'>Billiards</Checkbox>
            <Checkbox value='diving'>Diving</Checkbox>
          </Checkbox.Group>
        </Form.Item>
        <Form.Item name='meals' label='Meals'>
          <Checkbox.Group>
            <Checkbox value='allInclusive'>All Inclusive</Checkbox>
            <Checkbox value='breakfast'>Breakfast</Checkbox>
            <Checkbox value='selfCatering'>Self Catering</Checkbox>
          </Checkbox.Group>
        </Form.Item>
        <Form.Item name='images' label='Upload' valuePropName='fileList' getValueFromEvent={normFile}>
          <Upload listType='picture-card' multiple accept='.png,.jpeg,.jpg,.webp' beforeUpload={() => false}>
            <div>
              <PlusOutlined />
              Upload
            </div>
          </Upload>
        </Form.Item>
      </Form>
    </Modal>
  );
}

export default memo(EditHotelModal);
