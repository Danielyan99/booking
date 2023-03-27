import { i18n } from 'next-i18next';

export function nameRules() {
  return [
    {
      required: true,
      message: i18n?.t('nameRequiredMessage'),
    },
    {
      min: 2,
      message: `${i18n?.t('nameLengthBigger')} 2`,
    },
    {
      max: 16,
      message: `${i18n?.t('nameLengthSmaller')} 16`,
    },
    {
      pattern: /^[A-Z][-a-zA-Z]+$/i,
      message: i18n?.t('inputValidName'),
    },
  ];
}

export const emailRules = [
  {
    required: true,
    message: 'Please input your E-mail',
  },
  {
    pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
    message: 'The input is not valid E-mail',
  },
];

export const passwordRules = [
  {
    required: true,
    message: 'Please input your password',
  },
  {
    min: 6,
    message: 'Password length should be bigger than 6',
  },
  {
    max: 16,
    message: 'Password length should be smaller than 16',
  },
  {
    whitespace: true,
    message: 'Please enter a valid password',
  },
];

export const confirmPasswordRules = [
  {
    required: true,
    message: 'Please confirm your password',
  },
  ({ getFieldValue }: any) => ({
    validator(_: any, value: string) {
      if (!value || getFieldValue('password') === value) {
        return Promise.resolve();
      }
      return Promise.reject(new Error('The passwords do not match'));
    },
  }),
];
