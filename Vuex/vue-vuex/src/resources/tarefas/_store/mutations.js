// Apenas mutations devem causar mutações de estado
export default {
	// Mutations devem ser síncronas, estados previsíveis
	listarTarefas: (state, { tarefas }) => {
		state.tarefas = tarefas
	}
}