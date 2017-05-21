import Vue from 'vue'
import Router from 'vue-router'

import pageView from '../views/PageView'
import HomeView from '../views/HomeView'
import MovieView from '../views/MovieView'
import BookView from '../views/BookView'
import GroupView from '../views/GroupView'
import StatusView from '../views/StatusView'
import DetailView from '../views/DetailView'
import LoginView from '../views/LoginView'
import RegisterView from '../views/RegisterView'
import SearchView from '../views/SearchView'
import SubjectView from '../views/SubjectView'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/pages/'
    },
    {
      path: '/pages',
      component: pageView,
      children: [
        {
          path: '',
          redirect: '/pages/home'
        },
        {
          path: 'home',
          component: HomeView
        },
        {
          path: 'movie',
          component: MovieView
        },
        {
          path: 'book',
          component: BookView
        },
        {
          path: 'group',
          component: GroupView
        },
        {
          path: 'status',
          component: StatusView
        },
        {
          path: 'detail/:id',
          name: 'DetailView',
          component: DetailView
        }
      ]
    },
    {
      path: '/login',
      name: 'LoginView',
      component: LoginView
    },
    {
      path: '/search',
      name: 'SearchView',
      components: {
        default: pageView,
        search: SearchView
      }
    },
    {
      path: '/pages/:classify/subject/:id',
      name: 'SubjectView',
      components: {
        default: pageView,
        subject: SubjectView
      }
    },
    {
      path: '/register',
      name: 'RegisterView',
      component: RegisterView
    },
  ]
})
