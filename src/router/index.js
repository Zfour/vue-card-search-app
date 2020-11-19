import Vue from 'vue'
import VueRouter from 'vue-router'
const Home = () => import('../views/home/Home')
const Card = () => import('../views/card/Card')
const Game = () => import('../views/game/Game')
const Profile = () => import('../views/profile/Profile')
const News = () => import('../views/news/News')

Vue.use(VueRouter)

const originalReplace = VueRouter.prototype.replace;
VueRouter.prototype.replace = function replace(location) {
  return originalReplace.call(this, location).catch(err => err);
};

const routes = [
  {
    path: '/',
    name: 'Default',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/news',
    name: 'News',
    component: News
  },
  {
    path: '/game',
    name: 'Game',
    component: Game
  },
  {
    path: '/card',
    name: 'Card',
    component: Card
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

