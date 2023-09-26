<template>
  <div id="estados">
    <h3 class="font-weight=light">Animações de estados</h3>

    <div class="form-group">
      <input type="text" class="form-control" v-model="numero" step="50" />
    </div>

    <div class="alert alert-info">
      <h3 class="font-weight-light">
        <strong>Número: </strong>
        <span>{{ numeroAnimado }}</span>
      </h3>
    </div>
  </div>
</template>

<script>

import {TweenLite} from 'gsap/all.js'

export default {
  data() {
    return {
      numero: 0,
      numeroInterpolado: 0
    };
  },
  computed: {
    numeroAnimado() {
      return this.numeroInterpolado.toFixed(0)
    }
  },
  watch: {
    numero (newVal, oldVal) {
      TweenLite.to(this.$data, 2, {numeroInterpolado: newVal})
    }
  }
};
</script>