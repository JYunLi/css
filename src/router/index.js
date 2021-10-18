import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect:'/home'
  },
  {
    path: '/home',
    component: () => import("@/move/home.vue"),
    name: 'home',
    title: '主页按钮'
  },
  {
    path: '/accordingImg',
    component: () => import("@/move/accordingImg.vue"),
    name: 'accordingImg',
    title: '手风琴动画'
  },
  {
    path: '/stopBg',
    component: () => import("@/move/stopBg.vue"),
    name: 'stopBg',
    title: '悬停背景动画'
  },
  {
    path: '/stopBorder',
    component: () => import("@/move/stopBorder.vue"),
    name: 'stopBorder',
    title: '悬停边框动画'
  },
  {
    path: '/imgFlashLight',
    component: () => import("@/move/imgFlashLight.vue"),
    name: 'imgFlashLight',
    title: '图片闪光'
  },
  {
    path: '/loading',
    component: () => import("@/move/loading.vue"),
    name: 'loading',
    title: '加载中'
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
