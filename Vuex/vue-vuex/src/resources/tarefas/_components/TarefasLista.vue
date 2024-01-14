<template>
    <div>

        <div class="row">
            <div class="col-sm-10">
                <h1 class="font-weight-light">Lista de Tarefas</h1>
            </div>
            <div class="col-sm-2">
                <button 
                    class="btn btn-primary float-right" 
                    @click="exibirFormularioSalvarTarefa">
                        <i class="fa fa-plus mr-2"></i>
                        <span>Criar</span>
                </button>
            </div>
        </div>
        
        <h3 class="font-weight-light mt-4">A fazer ({{ tarefasAFazer.length }})</h3>

        <ul class="list-group" v-if="tarefasAFazer.length > 0">
            <TarefasListaIten
                v-for="tarefa in tarefasAFazer"
                :key="tarefa.id"
                :tarefa="tarefa"
                @editar="selecionarTarefaParaEdicao" 
                @concluir="concluirTarefa({tarefa: $event})"
                @deletar="confirmarRemocaoTarefa" />
        </ul>

        <p v-else>Nenhuma tarefa a fazer.</p>

        <h3 class="font-weight-light mt-4">Concluídas ({{ totalDeTarefasConcluidas }})</h3>

        <ul class="list-group" v-if="tarefasConcluidas.length > 0">
            <TarefasListaIten
                v-for="tarefa in tarefasConcluidas"
                :key="tarefa.id"
                :tarefa="tarefa"
                @editar="selecionarTarefaParaEdicao"
                @concluir="concluirTarefa({tarefa: $event})"
                @deletar="confirmarRemocaoTarefa" />
        </ul>

        <p v-else>Nenhuma tarefa concluída.</p>

        <TarefaSalvar
            v-if="exibirFormulario"
            @salvar="salvarTarefa"/>

        <div class="alert alert-danger" v-if="erro">{{erro.message}}</div>
    </div>
</template>

<script>

import { createNamespacedHelpers } from 'vuex'

import register from './../_store/register'
import TarefaSalvar from './TarefaSalvar.vue'
import TarefasListaIten from './TarefasListaIten.vue'

const { mapState, mapActions, mapGetters } = createNamespacedHelpers('tarefas')

export default {
    components: {
        TarefaSalvar,
        TarefasListaIten
    },
    data() {
        return {
            exibirFormulario: false
        }
    },
    created() {
        register(this.$store)
        /*
        Acesso a mutations
        this.$store.commit({
            type: 'listarTarefas',
            tarefas: []
        })
        this.listarTarefas({
            tarefas: []
        })

        Acesso a actions
        this.$store.dispatch('listarTarefas')
        .then(() => {
            console.log('Actions executadas')
        })
        */
        setTimeout(async () => {
            console.log(this.boasVindas)
            await this.listarTarefas()
        }, 1000)
    },
    computed: {
        ...mapState(['tarefaSelecionada', 'erro']),
        ...mapGetters([
            'tarefasAFazer', 
            'tarefasConcluidas', 
            'totalDeTarefasConcluidas', 
            'boasVindas'
        ])
    },
    methods: {
        ...mapActions([
            'listarTarefas', 
            'criarTarefa',
            'editarTarefa',
            'concluirTarefa', 
            'deletarTarefa', 
            'selecionarTarefa', 
            'resetarTarefaSelecionada'
        ]),
        /*
        ...mapMutations(['listarTarefas']),
        ...mapMutations({
            exibirTarefas: 'listarTarefas',
            listarTarefas: (commit, payload, options) => {
                commit('listarTarefas', payload, options)
            }
        }),
        */
        confirmarRemocaoTarefa(tarefa) {
            const confirmar = window.confirm(`Deseja deletar a tarefa "${tarefa.titulo}"?`)
            if(confirmar) {
                this.deletarTarefa({tarefa})
            }
        },
        exibirFormularioSalvarTarefa() {
            if (this.tarefaSelecionada) {
                this.resetarTarefaSelecionada()
                return
            }
            this.exibirFormulario = !this.exibirFormulario
        },
        async salvarTarefa(event) {
            console.log(event)
            switch(event.operacao) {
                case 'criar':
                    await this.criarTarefa({tarefa: event.tarefa})
                    break
                case 'editar':
                    await this.editarTarefa({tarefa: event.tarefa})
            }
            this.resetar()
        },
        selecionarTarefaParaEdicao(tarefa) {
            this.exibirFormulario = true
            this.selecionarTarefa({tarefa})
        },
        resetar() {
            this.exibirFormulario = false
            this.resetarTarefaSelecionada()
        }
    }
}
</script>
