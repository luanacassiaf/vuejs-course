import Vue from 'vue'

export default new Vue({
	data: {
		autenticado: false,
		contatos: [
			{ id: 1, nome: "Goku", email: "goku@capsule.com" },
			{ id: 2, nome: "Gohan", email: "gohan@capsule.com" },
			{ id: 3, nome: "Goten", email: "goten@capsule.com" }
		]
	},
	created() {
		this.$on('autenticar', (autenticado) => {
			this.autenticado = autenticado
		})
	},
	methods: {
		buscarContato(id) {
			return Object.assign({}, this.contatos.find(c => c.id == id))
		},
		editarContato(contato) {
			const indice = this.contatos.findIndex(c => c.id = contato.id)
			this.contatos.splice(indice, 1, contato)
		}
	}
});