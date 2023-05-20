import React, { memo } from 'react';
import { Button, Checkbox, Form } from 'antd';
import { useTranslation } from 'next-i18next';

function Filter() {
  const { t } = useTranslation('common');

  const handleSubmit = (data: any) => {
    console.log(data);
  };
  return (
    <div className='filter'>
      <div className='filter-item'>
        <h3 className='filter-title'>Filter By:</h3>
      </div>
      <Form name='filter' onFinish={handleSubmit}>
        <Form.Item className='filter-item' name='star' label={t('star')}>
          <Checkbox.Group>
            <Checkbox value='1'>{t('1')}</Checkbox>
            <Checkbox value='2'>{t('2')}</Checkbox>
            <Checkbox value='4'>{t('3')}</Checkbox>
            <Checkbox value='5'>{t('4')}</Checkbox>
          </Checkbox.Group>
        </Form.Item>
        <Form.Item className='filter-item' name='cancellationPolicy' label={t('cancellationPolicy') || 'Cancellation Policy'}>
          <Checkbox.Group>
            <Checkbox value='freeCancellation'>{t('freeCancellation')}</Checkbox>
            <Checkbox value='bookWithoutCreditCard'>{t('bookWithoutCreditCard')}</Checkbox>
            <Checkbox value='noPrepayment'>{t('noPrepayment')}</Checkbox>
          </Checkbox.Group>
        </Form.Item>
        <Form.Item className='filter-item' name='facilities' label='Facilities'>
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
        <Form.Item className='filter-item' name='funThings' label='Fun things to do'>
          <Checkbox.Group>
            <Checkbox value='beach'>{t('beach')}</Checkbox>
            <Checkbox value='massage'>{t('massage')}</Checkbox>
            <Checkbox value='billiards'>{t('billiards')}</Checkbox>
            <Checkbox value='diving'>{t('diving')}</Checkbox>
          </Checkbox.Group>
        </Form.Item>
        <Form.Item className='filter-item' name='meals' label='Meals'>
          <Checkbox.Group>
            <Checkbox value='allInclusive'>{t('allInclusive')}</Checkbox>
            <Checkbox value='breakfast'>{t('breakfast')}</Checkbox>
            <Checkbox value='selfCatering'>{t('selfCatering')}</Checkbox>
          </Checkbox.Group>
        </Form.Item>
        <div className='filter-item btn'>
          <Button type='primary' htmlType='submit'>
            {t('search')}
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default memo(Filter);
