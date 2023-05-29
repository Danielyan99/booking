import { memo } from 'react';
import { Form, Modal, Input } from 'antd';
import { useTranslation } from 'next-i18next';
import { SignInModalProps } from '@src/components/modals/sign-in-modal/types';
import { emailRules, passwordRules } from '@src/features/sign-up-feature/validation';
import { ISignInData } from '@src/components/modals/sign-up-modal/types';
import AuthController from '@src/core/controllers/AuthController';
import { useSelector } from 'react-redux';
import { IRootState } from '@src/core/store';

function SignInModal({ isOpen, setIsOpen }: SignInModalProps) {
  const { t } = useTranslation('common');
  const [form] = Form.useForm();
  const { error } = useSelector((state: IRootState) => state.user);

  const handleSubmit = async (data: ISignInData) => {
    const res = await AuthController.signin(data);
    if (!res.error) {
      setIsOpen(false);
    }
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
        <div className='error-message'>{t(error)}</div>
      </Form>
    </Modal>
  );
}

export default memo(SignInModal);
