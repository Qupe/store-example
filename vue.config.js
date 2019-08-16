module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/mh_test/'
    : '/',
  outputDir: 'docs',
};
