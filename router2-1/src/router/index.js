import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import page from '@/components/pages/page'
import child1 from '@/components/pages/child1'
import child2 from '@/components/pages/child2'
import child3 from '@/components/pages/child3'
import menu from '@/components/pages/menu'
import login from '@/components/pages/login'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*',
      redirect: 'login'
    },
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      meta: { requiresAuth: true }
    },{
      path: '/login',
      name: 'login',
      component: login
    },{
      path: '/page',
      name: 'page',
      // component: page,
      components:{
        default: page,
        menu: menu,
      },
      children:[
        {
          path: 'child1',
          name: 'child1',
          component: child1
        }, {
          path: 'child2',
          name: 'child2',
          component: child2
        }, {
          path: 'child3',
          name: 'child/:id',
          component: child3
        }
      ]
    },
  ]
})
