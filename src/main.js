import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/CompHome.vue'
import Cardapio from './views/CompCardapio.vue'
import Contato from './views/CompContato.vue'
import Team from './views/CompTeam.vue'
import Error404 from './views/CompError404.vue'
import Carrinho from './views/CompCarrinho.vue'
import Status from './views/ControlePedido.vue'
import Finalizar from './views/CompFinalizar.vue'

import {library} from '@fortawesome/fontawesome-svg-core'
import icons from './fontawesome'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

library.add({...icons});

const routes = [
    {path: '/', name: 'home', component: Home},
    {path: '/cardapio', name: 'cardapio', component: Cardapio},
    {path: '/contato', name: 'contato', component: Contato},
    {path: '/equipe/:member(\\w+)?', name: 'team', component: Team},
    {path: '/:pathMatch(.*)', component: Error404},
    {path: '/carrinho', name: 'carrinho', component: Carrinho},
    {path: '/status', name: 'status', component: Status},
    {path: '/finalizar', name: 'finalizar', component: Finalizar},
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})



createApp(App).component('fa', FontAwesomeIcon).use(router).mount('#app')
