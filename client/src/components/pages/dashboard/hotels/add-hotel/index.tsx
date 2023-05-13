import React, { memo } from 'react';
import { Button, Checkbox, Form, Input, message, Rate, Upload } from 'antd';
import HotelController from '@src/core/controllers/HotelController';
import { PlusOutlined } from '@ant-design/icons';
import { nameRules, regionRules } from '@src/components/pages/dashboard/hotels/add-hotel/validation';
import { IHotel } from '@src/core/modules/hotel/types';

function AddHotel() {
  const [form] = Form.useForm();

  const normFile = (e: any) => (Array.isArray(e) ? e : e?.fileList);

  const handleSubmit = async (data: IHotel) => {
    const response = await HotelController.createHotel(data);
    if (response.data) {
      message.success('Hotel was successfully created');
      form.resetFields();
    }
  };

  return (
    <Form name='add-hotel' onFinish={handleSubmit} form={form}>
      <Form.Item name='region' rules={nameRules()}>
        <Input placeholder='Region' />
      </Form.Item>
      <Form.Item name='name' rules={regionRules()}>
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
      <Button type='primary' htmlType='submit'>
        Create Hotel
      </Button>
    </Form>
  );
}

export default memo(AddHotel);
