import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Index from '@/components/Index'
import Show from '@/components/Show'
import Login from '@/components/Login'
import User from '@/components/User'
import Product from '@/components/Product'
import Buycart from '@/components/Buycart'
import Cart_Two from '@/components/Cart_Two'
import Member_Address from '@/components/Member_Address'
import Buytree from '@/components/Buytree'

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
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/user',
      name: 'User',
      component: User
    },
    {
      path: '/product',
      name: 'Product',
      component: Product
    },
    {
      path: '/buycart',
      name: 'Buycart',
      component:Buycart
    },
    {
      path: '/cart_two',
      name: 'Cart_Two',
      component:Cart_Two
    },
    {
      path: '/member_address',
      name: 'Member_Address',
      component:Member_Address
    },
    {
      path: '/buytree',
      name: 'Buytree',
      component:Buytree
    }
  ]
})
