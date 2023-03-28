import { memo } from 'react';
import { Form, Modal, Input } from 'antd';
import { useTranslation } from 'next-i18next';
import { SignInModalProps } from '@src/components/modals/sign-in-modal/types';
import { emailRules, passwordRules } from '@src/features/sign-up-feature/validation';

function SignInModal({ isOpen, setIsOpen }: SignInModalProps) {
  const { t } = useTranslation('common');
  const [form] = Form.useForm();

  const handleSubmit = (data: any) => {
    console.log(data);
  };
  return (
    <Modal title={t('signIn')} destroyOnClose onOk={form.submit} okText={t('signIn')} cancelText={t('cancel')} open={isOpen} onCancel={() => setIsOpen(false)}>
      <Form name='signIn' form={form} onFinish={handleSubmit}>
        <Form.Item
          name='email'
          rules={emailRules()}
        >
          <Input placeholder={t('email') || ''} />
        </Form.Item>

        <Form.Item
          name='password'
          rules={passwordRules()}
        >
          <Input.Password placeholder={t('password') || ''} />
        </Form.Item>
      </Form>
    </Modal>
  );
}

export default memo(SignInModal);
