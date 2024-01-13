import Vue from 'vue'
import Vuex from 'vuex'

import contador from '@/resources/contador/_store/index'
import tarefas from '@/resources/tarefas/_store/index'

Vue.use(Vuex)

const state = {
	usuario: 'Luana'
}

const getters = {
	mensagem: state => `Olá ${state.usuario}`
}

const actions = {
	logar: ({ commit }, usuario) => {
		commit('logar', usuario)
	}
}

const mutations = {
	logar: (state, usuario) => {
		state.usuario = usuario
	}
}

const modules = {
	contador,
	tarefas
}

export default new Vuex.Store({
	state,
	getters,
	mutations,
	actions,
	modules
})