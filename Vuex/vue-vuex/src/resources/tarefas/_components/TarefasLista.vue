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
                @editar="selecionarTarefaParaEdicao" />
        </ul>

        <p v-else>Nenhuma tarefa a fazer.</p>

        <h3 class="font-weight-light mt-4">Concluídas ({{ totalDeTarefasConcluidas }})</h3>

        <ul class="list-group" v-if="tarefasConcluidas.length > 0">
            <TarefasListaIten
                v-for="tarefa in tarefasConcluidas"
                :key="tarefa.id"
                :tarefa="tarefa"
                @editar="selecionarTarefaParaEdicao" />
        </ul>

        <p v-else>Nenhuma tarefa concluída.</p>

        <TarefaSalvar
            v-if="exibirFormulario"
            :tarefa="tarefaSelecionada" />


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
            exibirFormulario: false,
            tarefaSelecionada: undefined,
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
            console.log(this.boasVindas)
        }, 1000)
    },
    computed: {
        ...mapState(['tarefas']),
        ...mapGetters(['tarefasAFazer', 'tarefasConcluidas', 'totalDeTarefasConcluidas', 'boasVindas'])
    },
    methods: {
        ...mapActions(['listarTarefas']),
        /*
        ...mapMutations(['listarTarefas']),
        ...mapMutations({
            exibirTarefas: 'listarTarefas',
            listarTarefas: (commit, payload, options) => {
                commit('listarTarefas', payload, options)
            }
        }),
        */
        exibirFormularioSalvarTarefa() {
            if (this.tarefaSelecionada) {
                this.tarefaSelecionada = undefined
                return
            }
            this.exibirFormulario = !this.exibirFormulario
        },
        selecionarTarefaParaEdicao(tarefa) {
            this.exibirFormulario = true
            this.tarefaSelecionada = tarefa
        },
        resetar() {
            this.exibirFormulario = false
            this.tarefaSelecionada = undefined
        }
    }
}
</script>
