import { memo } from 'react';
import { Form, Input, Modal } from 'antd';
import { useTranslation } from 'next-i18next';
import { SignUpModalProps } from '@src/components/modals/sign-up-modal/types';
import { nameRules, emailRules, passwordRules, confirmPasswordRules } from '@src/features/sign-up-feature/validation';

function SignUpModal({ isOpen, setIsOpen }: SignUpModalProps) {
  const { t: translate } = useTranslation('common');
  const [form] = Form.useForm();

  const handleSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <Modal title={translate('register')} destroyOnClose onOk={form.submit} okButtonProps={{ htmlType: 'submit' }} okText={translate('register')} cancelText={translate('cancel')} open={isOpen} onCancel={() => setIsOpen(false)}>
      <Form name='signUp' form={form} onFinish={handleSubmit}>
        <Form.Item
          name='name'
          validateFirst
          rules={nameRules()}
        >
          <Input placeholder='Name' />
        </Form.Item>

        <Form.Item
          name='email'
          rules={emailRules}
        >
          <Input placeholder='Email' />
        </Form.Item>

        <Form.Item
          name='password'
          validateFirst
          rules={passwordRules}
        >
          <Input.Password placeholder='Password' />
        </Form.Item>

        <Form.Item
          name='confirm'
          dependencies={['password']}
          rules={confirmPasswordRules}
        >
          <Input.Password placeholder='Confirm Password' />
        </Form.Item>
      </Form>
    </Modal>
  );
}

export default memo(SignUpModal);
