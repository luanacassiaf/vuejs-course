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
const extractParamId = route => ({ id: +route.params.id })

const router = new VueRouter({
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
        {
          path: ':id(\\d+)',
          component: ContatoDetalhes,
          name: 'contato',
          props: extractParamId
        },
        {
          path: ':id(\\d+)/editar/:opcional?',
          // path: ':id(\\d+)/editar/:zeroOuMais*',
          // path: ':id(\\d+)/editar/:umOuMais+',
          beforeEnter(to, from, next) {
            console.log('beforeEnter')
            if (to.query.autenticado === 'true') {
              return next()
            }
            next('/contatos')
          },
          alias: ':id(\\d+)/alterar',
          components: {
            default: ContatoEditar,
            'contato-detalhes': ContatoDetalhes
          },
          props: {
            default: extractParamId,
            'contato-detalhes': extractParamId
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

router.beforeEach((to, from, next) => {
  console.log('beforeEach')
  next()
})

router.afterEach((to, from) => {
  console.log('afterEach')
})

export default router