<template>
  <div id="app">
    
    <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <h1 class="display-4">Requisições HTTP no Vue</h1>
        <p class="lead">Usando a biblioteca Axios para fazer chamadas Ajax à uma API REST.</p>
      </div>
    </div>

    <div class="container">

      <TarefasLista />

      <button class="btn btn-primary mt-4 mb-2" @click="download">Baixar imagem</button>

      <div class="progress">
        <div class="progress-bar" 
          role="progressbar" 
          :style="{ width: progresso + '%'}" 
          aria-valuenow="progresso" 
          aria-valuemin="0"
          aria-valuemax="100">
          {{progresso}} %
        </div>
      </div>

      <div v-if="imagem">
        <img :src="imagem" style="max-width: 100%">
      </div>
    
    </div>

  </div>
</template>

<script>

import axios from 'axios'
import config from './config/config'
import TarefasLista from './components/TarefasLista.vue'

export default {
    components: {
        TarefasLista
    },
    data() {
      return {
        progresso: 0,
        imagem: ''
      }
    },
    async created() {
      // axios.all([
      //   axios.get(`${config.apiURL}/tarefas/1`),
      //   axios.get(`${config.apiURL}/tarefas/2`)
      // ]).then(response => { //.then(axios.spread((tarefa1, tarefa2) => { }))
      //   const [tarefa1, tarefa2] = response
      //   console.log("Requests simultâneas: ", tarefa1, tarefa2)
      // })

      const tarefa1 = await axios.get(`${config.apiURL}/tarefas/1`)
      const tarefa2 = await axios.get(`${config.apiURL}/tarefas/2`)
      console.log("Requests simultâneas: ", tarefa1, tarefa2)
    },
    methods: {
      download() {
        axios.get('https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          {responseType: 'blob',
          onDownloadProgress: (progressEvent) => {
            console.log("Baixando...", progressEvent)
            this.progresso = (progressEvent.loaded / progressEvent.total * 100).toFixed(0)
          }}
        ).then(response => {
          console.log('Download concluído!')
          const reader = new window.FileReader()
          reader.readAsDataURL(response.data)
          reader.onload = () => {
            this.imagem = reader.result
          }
        })
      }
    }
}
</script>