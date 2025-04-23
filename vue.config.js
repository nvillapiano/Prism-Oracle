const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  pages: {
    index: {
      entry: './src/main.js',
      title: 'Prism Oracle - A digital tribute'
    }
  },
  css: {
    sourceMap: true,
    loaderOptions: {
      sass: {
        additionalData: `@use "@/globals/index" as *;`
      }
    }
  }
})
