import VueRouter from 'vue-router';
import Login from '../pages/login/login.vue';
// import Mine from '../pages/mine/mine.vue';


const routes = [
  {
    path:'/',
    name: 'login',
    component: Login
  },
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
];

export default function Router(Vue){
  Vue.use(VueRouter);
  const router = new VueRouter({
    routes: routes
  });
  return {
    router
  }
}
