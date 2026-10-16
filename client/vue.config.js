module.exports = {
  transpileDependencies: ['vue-router', 'zod', 'birpc', '@lucide/vue'],
  chainWebpack: config => {
    config.module.rule('js').test(/\.(m?js|cjs)$/)
  }
}
