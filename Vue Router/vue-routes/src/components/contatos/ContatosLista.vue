<template>
  <div>
    <h3 class="font-weight-light">Contatos</h3>

    <div class="form-group">
      <input
        type="search"
        class="form-control"
        placeholder="Buscar contatos"
        @keyup.enter="buscar"
        :value="busca"
      />
    </div>

    <ul class="list-group" v-if="contatosFiltrados.length > 0">
      <contatos-lista-item
        class="list-group-item"
        v-for="contato in contatosFiltrados"
        :key="contato.id"
        :contato="contato"
      />
    </ul>

    <p v-else>Nenhum contato cadastrado.</p>

    <button class="btn btn-secondary mt-4 mb-4" @click="voltar">Voltar</button>
  </div>
</template>

<script>
import ContatosListaItem from "./ContatosListaItem.vue";

export default {
  components: {
    ContatosListaItem,
  },
  props: ["busca"],
  data() {
    return {
      contatos: [
        { id: 1, nome: "Goku", email: "goku@capsule.com" },
        { id: 2, nome: "Gohan", email: "gohan@capsule.com" },
        { id: 3, nome: "Goten", email: "goten@capsule.com" },
      ],
    };
  },
  computed: {
    contatosFiltrados() {
      return !this.busca
        ? this.contatos
        : this.contatos.filter((contato) =>
            contato.nome.toLowerCase().includes(this.busca.toLowerCase())
          );
    },
  },
  methods: {
    buscar(event) {
      this.$router.push({
        path: "/contatos",
        query: { busca: event.target.value },
      });
    },
    voltar() {
      // this.$router.push('/') adiciona nova entrada ao histórico de navegação
      // this.$router.replace('/') substitui entrada no histórico
      // this.$router.go(1) // retornar ou avançar x registros no histórico
      // this.$router.foward() avança 1 registro no histórico
      this.$router.back(); // retorna 1 registro no histórico
    },
  },
};
</script>
