<template>
  <div id="app">

    <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <h1 class="display-4">Animações</h1>
        <p class="lead">Treinando transição/animação de elementos/components no Vue.</p>
      </div>
    </div>

    <div class="container">
      <button class="btn btn-primary mb-3" @click="mostrar = !mostrar">Alternar</button>

      <transition name="slide" type="animation" :duration="{ enter: 1200, leave: 1000 }">
        <div class="alert alert-primary" v-if="mostrar">Animações CSS no Vue</div>
      </transition>

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
  </div>
</template>

<script>
export default {
  data() {
    return {
      mostrar: true
    }
  },
  methods: {
    beforeAppear(el) {
      console.log('beforeAppear')
    },
    appear(el, done) {
      console.log('appear')
      setTimeout(done, 1000)
    },
    afterAppear(el) {
      console.log('afterAppear')
    },
    appearCancelled(el) {
      console.log('appearCanceled')
    },
    beforeEnter(el) {
      console.log('beforeEnter')
      el.style.opacity = 0
    },
    enter(el, done) {
      console.log('enter')
      let contagem = 0

      const intervalo = setInterval(() => {
        el.style.opacity = +el.style.opacity + 0.1
        contagem++

        if(contagem > 10) {
          clearInterval(intervalo)
          done()
        } 
      }, 150)
    },
    afterEnter(el) {
      console.log('afterEnter')
    },
    enterCancelled(el) {
      console.log('enterCancelled')
    },
    beforeLeave(el) {
      console.log('beforeLeave')
      el.style.transition = 'width 0.5s'
      el.style.overflow = 'hidden'
      el.style.whiteSpace = 'nowrap'
    },
    leave(el, done) {
      console.log('leave')
      let contagem = 0
      const tamanho = el.offsetWidth

      const intervalo = setInterval(() => {
        el.style.width = (tamanho * (1 - (contagem / 10))) + 'px'
        contagem++
        if (contagem > 10) {
          clearInterval(intervalo)
          done()
        }
      }, 150)
    },
    afterLeave(el) {
      console.log('afterLeave')
    },
    leaveCancelled(el) {
      console.log('leaveCancelled')
    }
  }
}
</script>

<style>
  body {
    overflow: hidden;
  }
</style>

<style scoped>

  .slide-enter, .slide-leave-to {
    opacity: 0;
  }

  .slide-enter-active{
    animation: slide 0.7s cubic-bezier(.17,.67,1,.28);
    transition: opacity 0.7s cubic-bezier(.17,.67,1,.28);
  }

  .slide-leave-active {
    animation: slide 0.7s reverse;
    transition: opacity 0.9s; /* com padrão animation, a opacidade não será concluída */
  }

  @keyframes slide {
    0% {
      transform: translateX(-100px);
    } 
    /* comportamento padrão */
    100% {
      transform: translateX(0);
    }
  }

  .zoom-enter, .zoom-leave-to {
    transform: scale(0);
  }

  .zoom-enter-active, .zoom-leave-active {
    transition: transform 0.5s;
  }
  
  /* comportamento padrão */
  .zoom-enter-to, .zoom-leave {
    transform: scale(1);
  }

  .fade-enter, .fade-leave-to {
    opacity: 0;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity 1s;
  }

</style>