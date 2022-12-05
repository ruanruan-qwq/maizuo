import Vue from 'vue'
import VueRouter from 'vue-router'
import filmsnavbar from '@/views/films/FilmsNavbar.vue'
import cinemasnavbar from '@/views/cinemas/CinemasNavbar.vue'
import minenavbar from '@/views/mine/MineNavbar.vue'
import nowplaying from '@/views/films/NowPlaying.vue'
import comingsoon from '@/views/films/ComingSoon.vue'
import filmsdetails from '@/views/films/FilmsDetails.vue'
import city from '@/views/cinemas/CityModule.vue'
import search from '@/views/cinemas/SearchCity.vue'
import login from '@/views/mine/LogIn.vue'

Vue.use(VueRouter)

// 配置表
const routes = [
  // 电影页
  {
    path: '/filmsnavbar',
    component: filmsnavbar,
    children: [
      // 正在热映
      { path: '/filmsnavbar/nowplaying', component: nowplaying },
      // 即将上映
      { path: '/filmsnavbar/comingsoon', component: comingsoon },
      // 重定向
      { path: '/filmsnavbar', redirect: '/filmsnavbar/nowplaying' }
    ]
  },
  // 电影详情
  { path: '/filmsnavbar/:myid', component: filmsdetails },
  // 影院
  { path: '/cinemasnavbar', component: cinemasnavbar },
  // 城市选择
  { path: '/city', component: city },
  // 搜索影院
  { path: '/search', component: search },
  // 我的
  { path: '/minenavbar', component: minenavbar },
  // 登录页面
  { path: '/login', component: login },
  { path: '*', redirect: '/filmsnavbar' }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

// 路由拦截
// router.beforeEach((to, from, next) => {
//   if (to.meta.isShow) {
//     store.commit('show')
//   } else {
//     store.commit('hide')
//   }
//   next()
//   // return false
// })

export default router
