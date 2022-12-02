const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})
module.exports = {
  // 暂时关闭代码检测
  // lintOnSave: false

  // 配置反向代理
  devServer: {
    proxy: {
      '/api': {
        target: 'https://i.maoyan.com',
        changeOrigin: true,
        pathRewrite: {
          '^/mike': ''
        }
      }
    }
  }

  // 配置别名
  // configureWebpack: {
  //   resolve: {
  //     alias: {
  //       assets: '@/assets',
  //       components: '@/components',
  //       views: '@views'
  //     }
  //   }
  // }
}
