import Vue from 'vue'
import Router from 'vue-router'
//import HelloWorld from '@/components/HelloWorld'



import father from '@/page/binding/father'
import child from '@/page/binding/child'


import middleFather from '@/page/middleware/father'
import middleChildOne from '@/page/middleware/childOne'
import middleChildTwo from '@/page/middleware/childTwo'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'middleFather',
      component: middleFather
    }
  ]
})
