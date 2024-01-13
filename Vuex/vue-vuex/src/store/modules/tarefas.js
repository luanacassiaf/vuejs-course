const state = {
	tarefas: []
}

const getters = {
	tarefasConcluidas: (state, getters, rootState, rootGetters) => state.tarefas.filter(t => t.concluido),
	tarefasAFazer: state => state.tarefas.filter(t => !t.concluido),
	totalDeTarefasConcluidas: (state, getters) => getters.tarefasConcluidas.length,
	buscarTarefaPorId: state => id => state.tarefas.find(t => t.id === id),
	/*
	buscarTarefaPorId: (state) => {
		return (id) => {
			return state.tarefas.find(t => t.id === id)
		}
	}
	*/
	boasVindas: (state, getters, rootState, rootGetters) => rootGetters.mensagem
	/*
	Acesso local: state.tarefas, gettersTarefasAFazer
	Acesso global: tarefas.tarefas, tarefas/tarefasAFazer
	*/
}

// Apenas mutations devem causar mutações de estado
const mutations = {
	// Mutations devem ser síncronas, estados previsíveis
	listarTarefas: (state, { tarefas }) => {
		state.tarefas = tarefas
	}
}

const actions = {
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

export default {
	namespaced: true,
	state,
	getters,
	mutations,
	actions
}