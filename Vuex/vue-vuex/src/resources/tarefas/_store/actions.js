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
			.catch(erro => commit(types.SETAR_ERRO, { erro }))
	},
	editarTarefa: async ({ commit }, { tarefa }) => {
		try {
			const response = await TarefasService.putTarefa(tarefa)
			commit(types.EDITAR_TAREFA, { tarefa: response.data })
		} catch (erro) {
			commit(types.SETAR_ERRO, { erro })
		}

	},
	deletarTarefa: async ({ commit }, { tarefa }) => {
		try {
			const response = await TarefasService.deleteTarefa(tarefa.id)
			commit(types.DELETAR_TAREFA, { tarefa })
		} catch (erro) {
			commit(types.SETAR_ERRO, { erro })
		}
	},
	listarTarefas: async ({ commit, dispatch, state, rootState, getters, rootGetters }) => {
		try {
			const response = await TarefasService.getTarefas()
			commit(types.LISTAR_TAREFAS, { tarefas: response.data })
		} catch (erro) {
			commit(types.SETAR_ERRO, { erro })
		}
		/*
		dispatch referencia a actions
		commit referencia a mutations
		
		dispatch('logar', 'Dracarys', { root: true })
		dispatch('actionSemPayload', null, {root: true})
		*/
	},
	selecionarTarefa: ({ commit }, payload) => {
		commit(types.SELECIONAR_TAREFA, payload)
	},
	resetarTarefaSelecionada: ({ commit }) => {
		commit(types.SELECIONAR_TAREFA, { tarefa: undefined })
	}
}