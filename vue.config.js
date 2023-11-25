const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // This setting is for publication of Github pages.
  publicPath: process.env.NODE_ENV === "production" ? "/todo-list-vue3/" : "/",

  // chainWebpack: config => {
  //   config.resolve.alias.set('vue', '@vue/compat')

  //   config.module
  //     .rule('vue')
  //     .use('vue-loader')
  //     .tap(options => {
  //       return {
  //         ...options,
  //         compilerOptions: {
  //           compatConfig: {
  //             MODE: 2
  //           }
  //         }
  //       }
  //     })
  // }
})
