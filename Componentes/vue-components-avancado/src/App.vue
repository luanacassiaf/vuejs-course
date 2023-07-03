<template>
  <div id="app" class="container">
    <h1>Vue JS</h1>

    <Post titulo="Passagem de dados via props">
      <h2 slot="cabecalho">Lorem ipsum</h2>
      <template slot="conteudo">
        <p>Mussum Ipsum, cacilds vidis litro abertis.</p>
        <p>Todo mundo vê os porris que eu tomo, mas ninguém vê os tombis que eu levo!</p>
      </template>
      <small slot="rodape">by Mussum</small>
    </Post>

    </div>
</template>

<script>

import Post from './components/Post.vue'

export default {
  components: {
    Post
  },
}
</script>

<style scoped>
  .container {
    width: 960px;
    margin: auto;
  }
</style>