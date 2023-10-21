import Vue from 'vue'
import VueRouter from "vue-router";

import Contatos from './views/contatos/Contatos.vue'
import ContatoDetalhes from './views/contatos/ContatoDetalhes.vue'
import ContatosHome from './views/contatos/ContatosHome.vue'
import ContatoEditar from './views/contatos/ContatoEditar.vue'
import Erro404Contato from './views/contatos/Erro404Contato.vue'
import Erro404 from './views/Erro404.vue'
import Home from './views/Home.vue'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  linkActiveClass: 'active',
  routes: [
    {
      path: '/contatos',
      component: Contatos,
      alias: ['/meus-contatos', '/contacts'],
      props: (route) => {
        const busca = route.query.busca
        return busca ? { busca } : {}
      },
      children: [
        { path: ':id', component: ContatoDetalhes, name: 'contato', props: true },
        {
          path: ':id/editar', alias: ':id/alterar', components: {
            default: ContatoEditar,
            'contato-detalhes': ContatoDetalhes
          },
          props: {
            default: true,
            'contato-detalhes': true
          }
        },
        { path: '', component: ContatosHome, name: 'contatos' },
        { path: '*', component: Erro404Contato }
      ]
    },
    { path: '/home', component: Home },
    // { path: '/', redirect: {name: 'contatos'} }
    {
      path: '/', redirect: () => {
        // return '/contatos',
        return { name: 'contatos' }
      }
    },
    { path: '*', component: Erro404 }
  ]
})