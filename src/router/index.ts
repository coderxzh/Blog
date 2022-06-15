import {createRouter,createWebHashHistory} from 'vue-router'

const routes  = [
      {
        path: '/',
        redirect: '/home'
      },
      {
        path: '/home',
        name: 'index',
        component: ()=>import("../components/home/index.vue")
      }
]

export default createRouter({
    history: createWebHashHistory(),
    routes: routes

})