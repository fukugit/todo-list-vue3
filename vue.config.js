const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // This setting is for publication of Github pages.
  publicPath: process.env.NODE_ENV === "production" ? "/todo-list-vue3/" : "/",
})
