import { i18n } from 'next-i18next';

export function nameRules() {
  return [
    {
      required: true,
      message: i18n?.t('nameRequiredMessageHint'),
    },
    {
      min: 2,
      message: `${i18n?.t('nameLengthSmallerHint')} 2`,
    },
    {
      max: 16,
      message: `${i18n?.t('nameLengthBiggerHint')} 16`,
    },
    {
      pattern: /^[A-Z][-a-zA-Z]+$/i,
      message: i18n?.t('inputValidNameHint'),
    },
  ];
}

export function emailRules() {
  return [
    {
      required: true,
      message: i18n?.t('inputEmailHint'),
    },
    {
      pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
      message: i18n?.t('emailInvalidHint'),
    },
  ];
}

export function passwordRules() {
  return [
    {
      required: true,
      message: i18n?.t('inputPasswordHint'),
    },
    {
      min: 6,
      message: `${i18n?.t('passwordLengthSmallerHint')} 2`,
    },
    {
      max: 16,
      message: `${i18n?.t('passwordLengthBiggerHint')} 16`,
    },
    {
      whitespace: true,
      message: i18n?.t('inputValidPasswordHint'),
    },
  ];
}

export function confirmPasswordRules() {
  return [
    {
      required: true,
      message: i18n?.t('confirmPasswordHint'),
    },
    ({ getFieldValue }: any) => ({
      validator(_: any, value: string) {
        if (!value || getFieldValue('password') === value) {
          return Promise.resolve();
        }
        return Promise.reject(new Error(i18n?.t('passwordNotMatchHint')));
      },
    }),
  ];
}
