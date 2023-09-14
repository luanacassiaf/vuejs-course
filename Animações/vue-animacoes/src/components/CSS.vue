<template>
  <div id="css-animations">
    <button class="btn btn-primary mb-3" @click="mostrar = !mostrar">
      Alternar
    </button>

    <transition
      name="slide"
      type="animation"
      :duration="{ enter: 1200, leave: 1000 }"
    >
      <div class="alert alert-primary" v-if="mostrar">Animações CSS no Vue</div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mostrar: true,
    };
  },
};
</script>