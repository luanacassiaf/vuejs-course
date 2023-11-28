import Vue from 'vue'
import VueRouter from "vue-router";

import Erro404Contato from './views/contatos/Erro404Contato.vue'
import Erro404 from './views/Erro404.vue'
import Login from './views/login/Login.vue'
import EventBus from './event-bus'

// lazy loading
const Home = () => import('./views/Home.vue')
const Contatos = () => import(/* webpackChunkName: "contatos" */ './views/contatos/Contatos.vue')
const ContatoDetalhes = () => import(/* webpackChunkName: "contatos" */ './views/contatos/ContatoDetalhes.vue')
const ContatosHome = () => import(/* webpackChunkName: "contatos" */ './views/contatos/ContatosHome.vue')
const ContatoEditar = () => import(/* webpackChunkName: "contatos" */ './views/contatos/ContatoEditar.vue')

Vue.use(VueRouter)
const extractParamId = route => ({ id: +route.params.id })

const router = new VueRouter({
  mode: 'history',
  linkActiveClass: 'active',
  scrollBehavior(to, from, savedPosition) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (savedPosition) {
          return resolve(savedPosition)
        }
        if (to.hash) {
          return resolve({
            selector: to.hash,
            offset: { x: 0, y: 0 }
          })
        }
        resolve({ x: 0, y: 0 })
      }, 1000)
    })
  },
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
          alias: ':id(\\d+)/alterar',
          meta: { authRequired: true },
          beforeEnter(to, from, next) {
            console.log('beforeEnter')
            // next() ou next(true) - continuar
            // next(false) - bloquear
            // next('/contatos') ou next({name: 'contatos'}) - redirecionar
            // next(new Error(`Permissões insuficientes para acessar o recurso ${to.fullPath}`));
            // next() apenas em beforeRouteEnter permite acessar a instância vue
            next()
          },
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
    { path: '/login', component: Login },
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
  console.log('Requer autenticação: ', to.meta.authRequired)
  const authenticated = EventBus.autenticado
  if (to.matched.some(rota => rota.meta.authRequired)) {
    if (!authenticated) {
      next({
        path: '/login',
        query: { redirecionar: to.fullPath }
      })
      return
    }
  }
  next()
})

router.beforeResolve((to, from, next) => {
  console.log('beforeResolve')
  next()
})

router.afterEach((to, from) => {
  console.log('afterEach')
})

router.onError(err => {
  console.log(err)
})

export default router