import React, { memo } from 'react';
import { Button, Checkbox, Form, Input, Rate } from 'antd';

function AddHotel() {
  const handleSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <Form name='add-hotel' onFinish={handleSubmit}>
      <Form.Item name='region'>
        <Input placeholder='Region' />
      </Form.Item>
      <Form.Item name='name'>
        <Input placeholder='Name' />
      </Form.Item>
      <Form.Item name='name'>
        <Input placeholder='Name' />
      </Form.Item>
      <Form.Item name='rate' label='Rate'>
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
      <Form.Item name='facilities' label='Fun things to do'>
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
      <Button type='primary' htmlType='submit'>
        Submit
      </Button>
      <div className='error-message'>error</div>
    </Form>
  );
}

export default memo(AddHotel);
