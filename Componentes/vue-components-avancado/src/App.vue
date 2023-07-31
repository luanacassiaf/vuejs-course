<template>
  <div id="app" class="container">
    <h1>Componentes Dinâmicos</h1>

    <button @click="componentSelecionado = 'Home'">Home</button>
    <button @click="componentSelecionado = 'PostsLista'">Posts</button>
    <button @click="componentSelecionado = 'Sobre'">Sobre</button>
    <button @click="componentSelecionado = 'Assincrono'">Assincrono</button>
    <button @click="componentSelecionado = 'Contato'">Contato</button>

    <!-- Componentes dinâmicos ao serem alternados, por padrão, criam uma nova instância -->
    <!-- keep-alive mantêm a mesma instância após sua criação -->
    <keep-alive exclude="PostsLista" :include="/Home|Sobre/" max="1">
      <component :is="componentSelecionado" v-bind="propsAtuais"></component>
    </keep-alive>

    <!-- 
    <posts-lista :posts="posts"/>
    <hr>

    <h1>Slots com escopo</h1>

    <posts-lista :posts="posts">
      <template v-slot="{myPost}">
        <h2>{{myPost.titulo}}</h2>
        <p>{{myPost.conteudo}}</p>
        <small>{{myPost.autor}}</small>
      </template>
    </posts-lista> 
  --></div>
</template>

<script>
import PostsLista from "./components/PostsLista.vue";
import Home from "./components/Home.vue";
import Sobre from "./components/Sobre.vue";

const Contato = {
  render: (h) =>
    h({
      name: "ContatoDados",
      template: "<h2>Component Anonimo</h2>",
    }),
};

export default {
  components: {
    Assincrono: () => ({
      component: new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(import("./components/Assincrono.vue"));
          // reject('Carregamento falhou')
        }, 2000);
      }),
      loading: { template: "<p>Carregando...</p>" },
      error: { template: "<p>Erro ao carregar component</p>" },
      delay: 200,
      timeout: 3000,
    }),
    Contato,
    PostsLista,
    Home,
    Sobre,
  },
  data() {
    return {
      componentSelecionado: "Home",
      posts: [
        {
          id: 1,
          titulo: "Mussum Ipsum",
          conteudo:
            "Mussum Ipsum, cacilds vidis litro abertis. Atirei o pau no gatis, per gatis num morreus.",
          autor: "Mussum",
        },
        {
          id: 2,
          titulo: "Lorem Ipsum",
          conteudo:
            "Lorem ipsum dolor sit amet. Quo autem fugiat eos illo quis nam quia incidunt et voluptate minima qui voluptas earum.",
          autor: "Lorem",
        },
      ],
    };
  },
  computed: {
    propsAtuais() {
      return this.componentSelecionado == "PostsLista"
        ? { posts: this.posts }
        : {};
    },
  },
};
</script>

<style scoped>
.container {
  width: 960px;
  margin: auto;
}
</style>