<template>
  <div>
    <h2 class="font-weight-light">Contador: {{ contador }}</h2>
    <h5 class="font-weight-light">Contador alias: {{ contadorAlias }}</h5>
    <h5 class="font-weight-light">
      Contador multiplicado: {{ contadorMultiplicado }}
    </h5>

    <button class="btn btn-lg btn-danger mr-1" @click="decrementar">-</button>
    <button class="btn btn-lg btn-success" @click="incrementar">+</button>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";

export default {
  data() {
    return {
      fator: 2,
    };
  },
  // computed: mapState(['contador']),
  computed: {
    ...mapState("contador", {
      contador: (state) => state.contador,
      // contador: "contador",
      contadorAlias: (state) => state.contador,
      contadorMultiplicado(state) {
        return state.contador * this.fator;
      },
    }),
  },
  methods: {
    ...mapMutations("contador", ["decrementarContador", "incrementarContador"]),
    decrementar() {
      this.$store.commit("contador/decrementarContador");
    },
    incrementar() {
      this.$store.commit("contador/incrementarContador");
    },
  },
};
</script>
