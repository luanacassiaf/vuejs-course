import Vue from 'vue/dist/vue.js'
import App from './App.vue'

// Vue.config.productionTip = false
// Vue.component('Assincrono', (resolve) => {
//   setTimeout(() => {
//     resolve({
//       template: '<h2>Componente assíncrono</h2>'
//     })
//   }, 2000)
// })

// Vue.component(
//   'Assincrono',
//   () => import('./components/Assincrono.vue')
// )

new Vue({
  render: h => h(App),
}).$mount('#app')
