<template>
  <div class="row">
    <!-- coluna 1 -->
    <div class="col-8">
      <h2>Filmes</h2>
      <ul class="list-group list-group-flush">
        <!-- <FilmesListaIten titulo="Pokémon"/> -->

        <!-- <FilmesListaIten
          v-for="filme in filmes"
          :key="filme.id"
          :titulo="filme.titulo"
          :ano="filme.ano"
          v-bind="filme"
        /> -->

        <FilmesListaIten
          v-for="filme in filmes"
          :key="filme.id"
          :filme="filme"
        />
      </ul>
    </div>

    <!-- coluna 2 -->
    <div class="col-4">
      <FilmesListaItenInfo />
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
    };
  },
};
</script>
