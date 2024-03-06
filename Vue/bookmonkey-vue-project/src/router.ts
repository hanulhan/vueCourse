import {createRouter, createWebHashHistory, createWebHistory} from "vue-router";
import BookList from '@/pages/BookList.vue'
import BooksAbout from '@/pages/BooksAbout.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [{
    path: '/',
    alias:'/books',
    component: BookList,
    name: 'home'
  },{
    path: '/about',
    component: BooksAbout,
    name: 'about'
  }]
})

export default  router;