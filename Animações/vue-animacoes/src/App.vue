<template>
  <div id="app">
    <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <h1 class="display-4">Animações</h1>
        <p class="lead">
          Treinando transição/animação de elementos/components no Vue.
        </p>
      </div>
    </div>

    <div class="container">
      <div class="form-group">
        <label>Animação:</label>
        <select class="from-control" v-model="animacaoSelecionada">
          <option value="fade">Fade</option>
          <option value="zoom">Zoom</option>
          <option value="slide">Slide</option>
        </select>
      </div>

      <div class="form-group">
        <label>Componente:</label>
        <select class="from-control" v-model="componenteSelecionado">
          <option value="AppCSS">CSS Animations</option>
          <option value="AppAnimateCSS">Animate.css</option>
          <option value="AppHooks">JS Hooks</option>
          <option value="AppGroup">Transition Group</option>
          <option value="AppEstados">Animação de Estados</option>
        </select>
      </div>

      <transition :name="animacaoSelecionada" mode="out-in">
        <component :is="componenteSelecionado"></component>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    AppCSS: () => import("./components/CSS.vue"),
    AppAnimateCSS: () => import("./components/AnimateCSS.vue"),
    AppHooks: () => import("./components/JSHooks.vue"),
    AppGroup: () => import("./components/Group.vue"),
    AppEstados: () => import("./components/Estados.vue"),
  },
  data() {
    return {
      mostrar: true,
      animacaoSelecionada: "fade",
      componenteSelecionado: "AppCSS",
    };
  },
};
</script>

<style>
.slide-enter,
.slide-leave-to {
  opacity: 0;
}

.slide-enter-active {
  animation: slide 0.7s cubic-bezier(0.17, 0.67, 1, 0.28);
  transition: opacity 0.7s cubic-bezier(0.17, 0.67, 1, 0.28);
}

.slide-leave-active {
  animation: slide 0.7s reverse;
  transition: opacity 0.7s; /* com padrão animation, a opacidade com maior duração não será concluída */
}

/* Estados inicial e final da animação */
@keyframes slide {
  0% {
    transform: translateX(-100px);
  }
  /* comportamento padrão */
  100% {
    transform: translateX(0);
  }
}

.zoom-enter,
.zoom-leave-to {
  transform: scale(0);
}

.zoom-enter-active,
.zoom-leave-active {
  transition: transform 0.5s;
}

/* comportamento padrão */
.zoom-enter-to,
.zoom-leave {
  transform: scale(1);
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}
</style>