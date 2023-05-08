import Vue from 'vue'

Vue.config.productionTip = false

// Vue.component('my-component', {
//   data: function() {
//     return {
//       pokemon: 'Pikachu',
//       level: 0
//     }
//   },
//   methods: {
//     levelUp: function() {
//       this.level++
//     }
//   },
//   template: `
//       <div>
//         <h1>{{pokemon}}</h1>
//         <h2>Level {{level}}</h2>
//         <button @click="levelUp">Up</button>
//       </div>
//     `
// })

const myComponent = {
  data: function() {
    return {
      pokemon: 'Pikachu',
      level: 0
    }
  },
  methods: {
    levelUp: function() {
      this.level++
    }
  },
  template: `
      <div>
        <h1>{{pokemon}}</h1>
        <h2>Level {{level}}</h2>
        <button @click="levelUp">Up</button>
      </div>
    `
}

new Vue({
  el: '#app1',
  components: {
    'my-component': myComponent // Registro local de componente
  }
})

new Vue({
  el: '#app2'
})
