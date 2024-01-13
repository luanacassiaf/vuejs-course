import TarefasService from '../_services/TarefasService'
import * as types from './mutations-types'

export default {
	// Actions podem ser assíncronas
	concluirTarefa: async ({ dispatch }, payload) => {
		const tarefa = Object.assign({}, payload.tarefa)
		tarefa.concluido = !tarefa.concluido
		dispatch('editarTarefa', { tarefa })
	},
	criarTarefa: ({ commit }, { tarefa }) => {
		return TarefasService.postTarefa(tarefa)
			.then(response => commit(types.CRIAR_TAREFA, { tarefa: response.data }))
	},
	editarTarefa: async ({ commit }, { tarefa }) => {
		const response = await TarefasService.putTarefa(tarefa)
		commit(types.EDITAR_TAREFA, { tarefa: response.data })
	},
	deletarTarefa: async ({ commit }, { tarefa }) => {
		const response = await TarefasService.deleteTarefa(tarefa.id)
		commit(types.DELETAR_TAREFA, { tarefa })
	},
	listarTarefas: async ({ commit, dispatch, state, rootState, getters, rootGetters }) => {
		const response = await TarefasService.getTarefas()
		/*
		dispatch referencia a actions
		commit referencia a mutations
		*/
		commit(types.LISTAR_TAREFAS, { tarefas: response.data })
		/*
		dispatch('logar', 'Dracarys', { root: true })
		dispatch('actionSemPayload', null, {root: true})
		*/
	},
	selecionarTarefa: ({commit}, payload) => {
		commit(types.SELECIONAR_TAREFA, payload)
	},
	resetarTarefaSelecionada: ({commit}) => {
		commit(types.SELECIONAR_TAREFA, {tarefa: undefined})
	}
}