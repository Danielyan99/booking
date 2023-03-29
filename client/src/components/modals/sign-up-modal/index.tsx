import { memo } from 'react';
import { Form, Input, Modal } from 'antd';
import { useTranslation } from 'next-i18next';
import { SignUpModalProps } from '@src/components/modals/sign-up-modal/types';
import { nameRules, emailRules, passwordRules, confirmPasswordRules } from '@src/features/sign-up-feature/validation';

function SignUpModal({ isOpen, setIsOpen }: SignUpModalProps) {
  const { t } = useTranslation('common');
  const [form] = Form.useForm();

  const handleSubmit = (data: any) => {
    console.log(data);
    setIsOpen(false);
  };

  return (
    <Modal title={t('register')} destroyOnClose onOk={form.submit} okButtonProps={{ htmlType: 'submit' }} okText={t('register')} cancelText={t('cancel')} open={isOpen} onCancel={() => setIsOpen(false)}>
      <Form name='signUp' form={form} onFinish={handleSubmit}>
        <Form.Item
          name='name'
          validateFirst
          rules={nameRules()}
        >
          <Input placeholder={t('name') || ''} />
        </Form.Item>

        <Form.Item
          name='email'
          rules={emailRules()}
        >
          <Input placeholder={t('email') || ''} />
        </Form.Item>

        <Form.Item
          name='password'
          validateFirst
          rules={passwordRules()}
        >
          <Input.Password placeholder={t('password') || ''} />
        </Form.Item>

        <Form.Item
          name='confirm'
          dependencies={['password']}
          rules={confirmPasswordRules()}
        >
          <Input.Password placeholder={t('confirmPassword') || ''} />
        </Form.Item>
      </Form>
    </Modal>
  );
}

export default memo(SignUpModal);
