export default {
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