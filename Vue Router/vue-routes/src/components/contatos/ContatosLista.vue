<template>
	<div>
		<h3 class="font-weight-light">Contatos</h3>

		<ul class="list-group" v-if="contatos.length > 0">
			<contatos-lista-item
				class="list-group-item"
				v-for="contato in contatos"
				:key="contato.id"
				:contato="contato"
			/>
		</ul>

		<p v-else>Nenhum contato cadastrado.</p>

		<button class="btn btn-secondary mt-4 mb-4" @click="voltar">Voltar</button>
	</div>
</template>

<script>

import ContatosListaItem from './ContatosListaItem.vue'

export default {
	components: {
		ContatosListaItem
	},
	data() {
		return {
			contatos: [
				{id: 1, nome: 'Goku', email: 'goku@capsule.com'},
				{id: 2, nome: 'Gohan', email: 'gohan@capsule.com'},
				{id: 3, nome: 'Goten', email: 'goten@capsule.com'}
			]
		}
	},
	methods: {
		voltar() {
			// this.$router.push('/') adiciona nova entrada ao histórico de navegação
			// this.$router.replace('/') substitui entrada no histórico
			// this.$router.go(1) // retornar ou avançar x registros no histórico
			// this.$router.foward() avança 1 registro no histórico
			this.$router.back() // retorna 1 registro no histórico
		}
	},
}
</script>
