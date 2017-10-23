import Router from 'vue-router';
import Login from '../pages/login/login.vue';
import Test from '../pages/test/test1.vue';
// import Mine from '../pages/mine/mine.vue';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path:'/login',
      name: 'login',
      component: Login
    },
    {
      path:'/test',
      name: 'test',
      component: Test
    }
  ]
})

// const routes = [
  // {
  //   path:'/login',
  //   name: 'login',
  //   component: Login
  // },
  // {
  //   path: '/mine/mine',
  //   name: '用户中心',
  //   component: Mine
  // },
  // {
  //   path: '/help/helpCore',
  //   name: '帮助中心',
  //   component: HelpCore
  // }
// ];
