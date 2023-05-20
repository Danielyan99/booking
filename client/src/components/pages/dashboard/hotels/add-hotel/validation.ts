import { i18n } from 'next-i18next';

export function nameRules() {
  return [
    {
      required: true,
      message: i18n?.t('hotelNameRequiredMessageHint'),
    },
    {
      min: 2,
      message: `${i18n?.t('nameLengthSmallerHint')} 2`,
    },
    {
      max: 64,
      message: `${i18n?.t('nameLengthBiggerHint')} 64`,
    },
  ];
}

export function regionRules() {
  return [
    {
      required: true,
      message: i18n?.t('regionNameRequiredMessageHint'),
    },
    {
      min: 2,
      message: `${i18n?.t('nameLengthSmallerHint')} 2`,
    },
    {
      max: 64,
      message: `${i18n?.t('nameLengthBiggerHint')} 64`,
    },
  ];
}
