import appVi from './locales/vi/app.json';
import postcardVi from './locales/vi/postcard.json';
import headerVi from './locales/vi/header.json';

import appEn from './locales/en/app.json';
import postcardEn from './locales/en/postcard.json';
import headerEn from './locales/en/header.json';

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  resources: {
    vi: {
      postcard: postcardVi,
      app: appVi,
      header: headerVi,
    },
    en: {
      app: appEn,
      postcard: postcardEn,
      header: headerEn,
    },
  },
  lng: 'vi',
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
});

export default i18n;
