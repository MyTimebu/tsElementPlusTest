const path = require('path')
const resolve = dir => path.join(__dirname, dir)

module.exports = {
  // chainWebpack: config => {
  //   config.resolve.alias
  //     .set('@', resolve('src'))
  // },
  devServer: { // 让浏览器 overlay 同时显示警告和错误
    open: true,
    // proxy: {
    //   '/img': {
    //     target: '', // 主机ip
    //     changeOrigin: true, // 是否跨域
    //     ws: true, // websocket支持
    //     secure: false, // 当secure属性设置为true时，cookie只有在https协议下才能上传到服务器，而在http协议下是没法上传的，所以也不会被窃听。当secure设置为false时，也就实现了cookie的跨协议传递，但同时就存在了一定几率的被窃听的风险。
    //     pathRewrite: {
    //       '^/img': '/' // 重写路径
    //     }
    //   }
    // }
  }
}
