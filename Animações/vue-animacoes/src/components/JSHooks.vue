<template>
  <div id="js-hooks">
    <button class="btn btn-primary mb-3" @click="mostrar = !mostrar">
      Alternar
    </button>

    <transition
      appear
      @before-appear="beforeAppear"
      @appear="appear"
      @after-appear="afterAppear"
      @appear-cancelled="appearCancelled"
      @before-enter="beforeEnter"
      @enter="enter"
      @after-enter="afterEnter"
      @enter-cancelled="enterCancelled"
      @before-leave="beforeLeave"
      @leave="leave"
      @after-leave="afterLeave"
      @leave-cancelled="leaveCancelled"
      :css="false"
    >
      <div class="alert alert-primary" v-if="mostrar">JS Hooks</div>
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
  methods: {
    beforeAppear(el) {
      console.log("beforeAppear");
    },
    appear(el, done) {
      console.log("appear");
      setTimeout(done, 1000);
    },
    afterAppear(el) {
      console.log("afterAppear");
    },
    appearCancelled(el) {
      console.log("appearCanceled");
    },
    beforeEnter(el) {
      console.log("beforeEnter");
      el.style.opacity = 0;
    },
    enter(el, done) {
      console.log("enter");
      let contagem = 0;

      const intervalo = setInterval(() => {
        el.style.opacity = +el.style.opacity + 0.1;
        contagem++;

        if (contagem > 10) {
          clearInterval(intervalo);
          done();
        }
      }, 150);
    },
    afterEnter(el) {
      console.log("afterEnter");
    },
    enterCancelled(el) {
      console.log("enterCancelled");
    },
    beforeLeave(el) {
      console.log("beforeLeave");
      el.style.transition = "width 0.5s";
      el.style.overflow = "hidden";
      el.style.whiteSpace = "nowrap";
    },
    leave(el, done) {
      console.log("leave");
      let contagem = 0;
      const tamanho = el.offsetWidth;

      const intervalo = setInterval(() => {
        el.style.width = tamanho * (1 - contagem / 10) + "px";
        contagem++;
        if (contagem > 10) {
          clearInterval(intervalo);
          done();
        }
      }, 150);
    },
    afterLeave(el) {
      console.log("afterLeave");
    },
    leaveCancelled(el) {
      console.log("leaveCancelled");
    },
  },
};
</script>