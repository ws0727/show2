import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Index from '@/components/Index'
import Show from '@/components/Show'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/c',
      name: 'Index',
      component: Index
    },
    {
      path: '/show',
      name: 'Show',
      component: Show
    }
  ]
})
