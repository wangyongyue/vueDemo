import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import VCode from '@/components/VCode'
import VModule from '@/components/VModule'
import VTask from '@/components/VTask'
import VLogin from '@/components/VLogin'

import VEnglish from '@/english/VEnglish'
import VWord from '@/english/VWord'
import VSentence from '@/english/VSentence'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/h',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/task',
      name: 'VTask',
      component: VTask
    },

    {
      path: '/code',
      name: 'VCode',
      component: VCode
    },
    {
      path: '/module',
      name: 'VModule',
      component: VModule
    },
    {
      path: '/english',
      name: 'VEnglish',
      component: VEnglish
    },
    {
      path: '/word',
      name: 'VWord',
      component: VWord
    },
    {
      path: '/sentence',
      name: 'VSentence',
      component: VSentence
    },



  ]
})
