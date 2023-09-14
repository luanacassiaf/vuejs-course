<template>
  <div id="animate-css">
    <button class="btn btn-primary mb-3" @click="mostrar = !mostrar">
      Alternar
    </button>

    <transition
      appear
      appear-class=""
      appear-active-class="animate__animated animate__flipInY"
      appear-to-class=""
      enter-class=""
      enter-active-class="animate__animated animate__bounceInLeft"
      enter-to-class=""
      leave-class=""
      leave-active-class="animate__animated animate__bounceOutDown"
      leave-to-class=""
    >
      <div class="alert alert-primary" v-if="mostrar">Animate.css</div>
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