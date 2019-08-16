module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/store-example/'
    : '/',
  outputDir: 'docs',
};
