import { i18n } from 'next-i18next';

export function nameRules() {
  return [
    {
      required: true,
      message: i18n?.t('roomNameRequiredMessageHint'),
    },
    {
      min: 2,
      message: `${i18n?.t('nameLengthSmallerHint')} 2`,
    },
    {
      max: 16,
      message: `${i18n?.t('nameLengthBiggerHint')} 24`,
    },
  ];
}

export function priceRules() {
  return [
    {
      required: true,
      message: i18n?.t('priceRequiredMessageHint'),
    },
  ];
}
