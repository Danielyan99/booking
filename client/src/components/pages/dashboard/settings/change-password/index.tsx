import React, { memo, useState } from 'react';
import { Button, Form, Input, message } from 'antd';
import { passwordRules } from '@src/features/sign-up-feature/validation';
import { useTranslation } from 'next-i18next';
import AuthController from '@src/core/controllers/AuthController';
import { useSelector } from 'react-redux';
import { IRootState } from '@src/core/store';
import Router from 'next/router';

function ChangePassword() {
  const { t } = useTranslation('common');
  const { user } = useSelector((state: IRootState) => state.user);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (data: { lastPassword: string; newPassword: string; repeatedPassword: string}) => {
    if (data.newPassword !== data.repeatedPassword) {
      setError('passwordsShouldBeTheSame');
      return;
    }
    console.log(user);
    if (!user) {
      Router.push('/');
    }
    setIsLoading(true);
    try {
      await AuthController.changePassword(user.id, { newPassword: data.newPassword, lastPassword: data.lastPassword });
      message.success(t('passwordChangeSuccessMessage'));
    } catch (err) {
      message.error(t('somethingWentWrongMessage'));
    } finally {
      setIsLoading(false);
      setError('');
    }
  };

  return (
    <Form name='changePassword' onFinish={handleSubmit}>
      <Form.Item
        name='lastPassword'
        rules={passwordRules()}
      >
        <Input.Password placeholder={t('oldPassword') || 'Last Password'} />
      </Form.Item>
      <Form.Item
        name='newPassword'
        rules={passwordRules()}
      >
        <Input.Password placeholder={t('newPassword') || 'New Password'} />
      </Form.Item>
      <Form.Item
        name='repeatedPassword'
        rules={passwordRules()}
      >
        <Input.Password placeholder={t('repeatNewPassword') || 'Repeat New Password'} />
      </Form.Item>
      <div className='error-message'>{t(error)}</div>
      <Button type='primary' size='large' htmlType='submit' style={{ marginTop: 16 }} loading={isLoading}>{t('changePassword')}</Button>
    </Form>
  );
}

export default memo(ChangePassword);
