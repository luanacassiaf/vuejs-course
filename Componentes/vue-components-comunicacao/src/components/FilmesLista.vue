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
      <FilmesListaItenInfo :filme="filmeSelecionado"/>
    </div>
  </div>
</template>

<script>
import FilmesListaIten from "./FilmesListaIten.vue";
import FilmesListaItenInfo from "./FilmesListaItenInfo.vue";

export default {
  components: {
    FilmesListaIten,
    FilmesListaItenInfo,
  },
  data() {
    return {
      filmes: [
        { id: 1, titulo: "Procurando Nemo", ano: 2003, avaliacao: 8 },
        { id: 2, titulo: "Minions", ano: 2015, avaliacao: 8.5 },
        { id: 3, titulo: "Pokémon", ano: 1999, avaliacao: 7 },
      ],
      filmeSelecionado: undefined
    };
  },
  methods: {
    aplicarClasseAtiva(filmeIterado) {
      return {
        active: this.filmeSelecionado && this.filmeSelecionado.id == filmeIterado.id
      }
    }
  }
};
</script>
