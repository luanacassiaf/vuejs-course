<template>
  <div>
    <h3 class="font-weight-light">Detalhes sobre o contato {{ id }}</h3>
    <div style="height: 900px"></div>
    <p id="params">Parâmetros: {{ params }}</p>
    <router-link :to="`/contatos/${id}/editar`" class="btn btn-primary">
      Editar
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      params: this.$route.params,
    };
  },
  beforeRouteUpdate(to, from, next) {
    console.log("beforeRouteUpdate");
    this.params = to.params;
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
