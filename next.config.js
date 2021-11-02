const withImages = require('next-images');

module.exports = withImages({
  TrailingSlash: true,
  exportPathMap: function() {
    return {
      '/': { page: '/' },
      '/about': { page: '/about' },
      '/about/team': { page: '/about/team' },
      '/blog': { page: '/blog' },
      '/blog/detail-blog': { page: '/blog/detail-blog' },
      '/login': { page: '/login' },
      '/register': { page: '/register' },
      '/contact': { page: '/contact' },
      '/contact/with-map': { page: '/contact/with-map' },
      '/collection/products': { page: '/collection/products' },
      '/collection/detail-product': { page: '/collection/detail-product' },
      '/utils/pricing': { page: '/utils/pricing' },
      '/utils/faq': { page: '/utils/faq' },
      '/utils/maintenance': { page: '/utils/maintenance' },
      '/utils/coming-soon': { page: '/utils/coming-soon' },
    };
  },
  publicRuntimeConfig: {
    localeSubpaths: typeof process.env.LOCALE_SUBPATHS === 'string'
      ? process.env.LOCALE_SUBPATHS
      : 'none',
  },
  webpack: (config, options) => {
    cssModules: true,
    config.module.rules.push({
        enforce: 'pre',
        test: /\.js?$/,
        exclude: [/node_modules/],
        loader: 'eslint-loader',
        options: {
          quiet: true,
        }
    });
    config.node = {
      fs: 'empty'
    }
    return config;
  }
});
