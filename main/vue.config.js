const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: "/javascript-closed-caption-runner/main/dist/",
  outputDir: "dist",
  chainWebpack: config => {
    config.module.rules.delete('eslint');
  }
})
