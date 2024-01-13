export default {
	// Actions podem ser assíncronas
	buscarTarefas: () => {
		return new Promise((resolve) => {
			setTimeout(() => {
				resolve([
					{ id: 1, titulo: 'Aprender Vue', concluido: true },
					{ id: 2, titulo: 'Aprender Vue Router', concluido: true },
					{ id: 3, titulo: 'Aprender Vuex', concluido: false }
				])
			}, 2000)
		})
	},
	listarTarefas: async ({ commit, dispatch, state, rootState, getters, rootGetters }) => {
		// dispatch referencia a actions
		const tarefas = await dispatch('buscarTarefas')

		// commit referencia a mutations
		commit('listarTarefas', { tarefas })

		dispatch('logar', 'Dracarys', { root: true }) // logar
		// dispatch('actionSemPayload', null, {root: true})
	}
}