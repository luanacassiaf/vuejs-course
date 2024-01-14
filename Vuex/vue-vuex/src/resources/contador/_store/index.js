const state = {
	contador: 0
}

const getters = {
	contadorAtual: state => state.contador

}
const mutations = {
	decrementarContador: (state) => {
		state.contador = state.contador - 1
	},
	incrementarContador: (state) => {
		state.contador = state.contador + 1
	}
}

export default {
	namespaced: true,
	state,
	getters,
	mutations
}