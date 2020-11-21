module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        //@表示src
        'asserts': '@/asserts',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views',
      }
    }
  }
}
