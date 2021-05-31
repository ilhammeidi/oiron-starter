const NextI18Next = require('next-i18next').default;

module.exports = new NextI18Next({
  defaultLanguage: 'eng',
  otherLanguages: ['ara', 'ind', 'prt', 'deu', 'zho'],
  fallbackLng: 'eng',
  initImmediate: false,
  localePath: 'public/locales',
  react: {
    useSuspense: false,
  },
  localeSubpaths: {
    eng: 'en',
    ara: 'ar',
    prt: 'pt',
    ind: 'id',
    deu: 'de',
    zho: 'zh',
  },
});
