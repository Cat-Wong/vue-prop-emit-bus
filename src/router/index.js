import Vue from 'vue'
import Router from 'vue-router'
//import HelloWorld from '@/components/HelloWorld'

import father from '@/page/binding/father'  //父子组件双向绑定
import child from '@/page/binding/child'   //父子组件双向绑定




Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'father',
      component: father
    }
  ]
})
