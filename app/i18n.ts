import aboutVi from './locales/vi/about.json';
import layoutVi from './locales/vi/layout.json';
import postDetailVi from './locales/vi/post_detail.json';
import postcardVi from './locales/vi/postcard.json';
import commonVi from './locales/vi/common.json';
import homeVi from './locales/vi/home.json';
import postFormVi from './locales/vi/post_form.json';

import postcardEn from './locales/en/postcard.json';
import commonEn from './locales/en/common.json';
import aboutEn from './locales/en/about.json';
import layoutEn from './locales/en/layout.json';
import postDetailEn from './locales/en/post_detail.json';
import homeEn from './locales/en/home.json';
import postFormEn from './locales/en/post_form.json';

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  resources: {
    vi: {
      postcard: postcardVi,
      common: commonVi,
      layout: layoutVi,
      postDetail: postDetailVi,
      about: aboutVi,
      home: homeVi,
      postForm: postFormVi,
    },
    en: {
      postcard: postcardEn,
      common: commonEn,
      layout: layoutEn,
      postDetail: postDetailEn,
      about: aboutEn,
      home: homeEn,
      postForm: postFormEn,
    },
  },
  lng: 'vi',
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
});

export default i18n;
