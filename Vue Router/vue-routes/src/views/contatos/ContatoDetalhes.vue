<template>
  <h3 class="font-weight-light">Detalhes sobre o contato {{ id }}</h3>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
    };
  },
  // watch: {
  // 	'$route'(to) {
  // 		this.id = to.params.id
  // 	}
  // },
  beforeRouteUpdate(to, from, next) {
    this.id = to.params.id;
    next();
  },
  created() {
    console.log("Parâmetros da rota: ", this.$route.params);
  },
};
</script>
