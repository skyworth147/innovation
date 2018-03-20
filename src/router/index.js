import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import hello from '@/components/hello/hello'

import User from '../views/user/index'
import Resume from '../views/user/resume'
import Book from '../views/user/book'
import Management from '../views/user/management'
import Message from '../views/user/message'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path:'/hello',
      component:hello
    },

    // user-info center
    {
      path: '/user',
      component: User,
      children: [
        {
          path: '/',
          component: Message
        },
        {
          path: 'resume',
          component: Resume
        },
        {
          path: 'management',
          component: Management
        },
        {
          path: 'book',
          component: Book
        },
        {
          path: 'message',
          component: Message
        }
      ]
    }
  ]
})
