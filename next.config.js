// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPWA = require('next-pwa');
const isProd = process.env.NODE_ENV === 'production';

module.exports = withPWA({
  pwa: {
    dest: 'public',
    disable: !isProd
  },

  images: {
    domains: ['media.graphcms.com'] // it's not necessary to use http. Get address from Graph cms stored images
  }
});
