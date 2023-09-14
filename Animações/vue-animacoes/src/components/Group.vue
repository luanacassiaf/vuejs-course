<template>
  <div id="group">
    <h3 class="font-weight=light">Tecnologias</h3>

    <div class="form-group">
      <input
        type="text"
        class="form-control"
        placeholder="Insira um item e pressione Enter"
        @keyup.enter="adicionar"
        ref="input"
      />
    </div>

    <transition-group tag="ul" class="list-group" name="list">
      <li
        class="list-group-item"
        v-for="(tecnologia, indice) in tecnologias"
        :key="tecnologia"
      >
        <span>{{ tecnologia }}</span>
        <button
          class="btn btn-danger btn-sm float-right"
          @click="remover(indice)"
        >
          <i class="fas fa-trash"></i>
        </button>
      </li>
    </transition-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mostrar: true,
      tecnologias: ["JavaScript", "Vue JS", "Vuex", "Vue Router"],
    };
  },
  methods: {
    adicionar(event) {
      const novoItem = event.target.value;
      if (novoItem) {
        const indice = Math.floor(Math.random() * this.tecnologias.length);
        console.log(indice);
        this.tecnologias.splice(indice, 0, novoItem);
        this.$refs.input.value = "";
      }
    },
    remover(indice) {
      this.tecnologias.splice(indice, 1);
    },
  },
};
</script>