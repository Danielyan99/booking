import { memo } from 'react';
import { Form, Modal, Input } from 'antd';
import { useTranslation } from 'next-i18next';
import { SignInModalProps } from '@src/components/modals/sign-in-modal/types';

function SignInModal({ isOpen, setIsOpen }: SignInModalProps) {
  const { t: translate } = useTranslation('common');
  const [form] = Form.useForm();

  const handleSubmit = (data: any) => {
    console.log(data);
  };
  return (
    <Modal title={translate('signIn')} onOk={form.submit} okText={translate('signIn')} cancelText={translate('cancel')} open={isOpen} onCancel={() => setIsOpen(false)}>
      <Form name='signIn' form={form} onFinish={handleSubmit}>
        <Form.Item
          name='email'
          rules={[
            {
              type: 'email',
              message: 'The input is not valid E-mail!',
            },
            {
              required: true,
              message: 'Please input your E-mail!',
            },
          ]}
        >
          <Input placeholder='Email' />
        </Form.Item>

        <Form.Item
          name='password'
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
        >
          <Input.Password placeholder='Password' />
        </Form.Item>
      </Form>
    </Modal>
  );
}

export default memo(SignInModal);
