<template>
  <div v-if="contato">
    <p class="font-weight-light">Nome: {{ contato.nome }}</p>
    <p>Email: {{ contato.email }}</p>
    <button class="btn btn-secondary mr-2" @click="$router.back()">
      Voltar
    </button>
    <router-link :to="`/contatos/${id}/editar`" class="btn btn-primary">
      Editar
    </router-link>
  </div>
</template>

<script>
import EventBus from "@/event-bus";

export default {
  props: {
    id: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      // params: this.$route.params,
      contato: undefined,
    };
  },
  // created() {
  //   this.contato = EventBus.buscarContato(this.id)
  // },
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      vm.contato = EventBus.buscarContato(+to.params.id);
    });
  },
  beforeRouteUpdate(to, from, next) {
    // this.params = to.params;
    this.contato = EventBus.buscarContato(+to.params.id);
    next();
  },
  // data() {
  //   return {
  //     id: this.$route.params.id,
  //   };
  // },
  // watch: {
  // 	'$route'(to) {
  // 		this.id = to.params.id
  // 	}
  // },
  // beforeRouteUpdate(to, from, next) {
  //   this.id = to.params.id;
  //   next();
  // },
};
</script>
