const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  productionSourceMap: false,
  outputDir: 'myDist', // personalização das configurações do webpack
  transpileDependencies: [
    'vuetify' // framework que fornece componentes estilizados para apps Vue
  ]
})
