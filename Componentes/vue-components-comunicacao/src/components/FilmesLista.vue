<template>
  <div class="row">
    <!-- coluna 1 -->
    <div class="col-8">
      <h2>Filmes</h2>
      <ul class="list-group list-group-flush">

        <FilmesListaIten
          v-for="filme in filmes"
          :key="filme.id"
          :filme="filme"
          :class="aplicarClasseAtiva(filme)"
          @selecionarFilme="filmeSelecionado = $event"
        />
      </ul>
    </div>

    <!-- coluna 2 -->
    <div class="col-4">
      <FilmesListaItenInfo
        v-if="!editar"
        :filme="filmeSelecionado" 
        @editarFilme="editarFilme" />

        <FilmesListaItenEditar
          v-else
          :filme="filmeSelecionado" />
    </div>
  </div>
</template>

<script>
import {eventBus} from './../main'
import FilmesListaIten from "./FilmesListaIten.vue";
import FilmesListaItenInfo from "./FilmesListaItenInfo.vue";
import FilmesListaItenEditar from "./FilmesListaItenEditar.vue";

export default {
  components: {
    FilmesListaIten,
    FilmesListaItenInfo,
    FilmesListaItenEditar
  },
  data() {
    return {
      filmes: [
        { id: 1, titulo: "Procurando Nemo", ano: 2003, avaliacao: 8 },
        { id: 2, titulo: "Minions", ano: 2015, avaliacao: 8.5 },
        { id: 3, titulo: "Pokémon", ano: 1999, avaliacao: 7 },
      ],
      filmeSelecionado: undefined,
      editar: false
    };
  },
  methods: {
    aplicarClasseAtiva(filmeIterado) {
      return {
        active: this.filmeSelecionado && this.filmeSelecionado.id == filmeIterado.id
      }
    },
    editarFilme(filme) {
      this.editar = true
      this.filmeSelecionado = filme
    },
    atualizarFilme(filmeAtualizado) {
      const indice = this.filmes.findIndex(filme => filme.id == filmeAtualizado.id)
      this.filmes.splice(indice, 1, filmeAtualizado)
      this.filmeSelecionado = undefined
      this.editar = false
    }
  },
  created() {
    eventBus.$on('selecionarFilme', (filmeSelecionado) => {
      this.filmeSelecionado = filmeSelecionado
    }),
    eventBus.$on('atualizarFilme', this.atualizarFilme)
  }
};
</script>
