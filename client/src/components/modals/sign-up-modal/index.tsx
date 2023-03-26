import { memo } from 'react';
import { Form, Input, Modal } from 'antd';
import { useTranslation } from 'next-i18next';
import { SignUpModalProps } from '@src/components/modals/sign-up-modal/types';

function SignUpModal({ isOpen, setIsOpen }: SignUpModalProps) {
  const { t: translate } = useTranslation('common');
  const [form] = Form.useForm();

  const handleSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <Modal title={translate('register')} onOk={form.submit} okButtonProps={{ htmlType: 'submit' }} okText={translate('register')} cancelText={translate('cancel')} open={isOpen} onCancel={() => setIsOpen(false)}>
      <Form name='signUp' form={form} onFinish={handleSubmit}>
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

export default memo(SignUpModal);
