import {createRouter, createWebHashHistory, createWebHistory} from "vue-router";
import BookList from '@/pages/BookList.vue'
import BooksAbout from '@/pages/BooksAbout.vue'
import BookDetail from "@/pages/BookDetail.vue";
import BookEdit from "@/pages/BookEdit.vue";

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
  },{
    path: '/books/:isbn',
    component: BookDetail,
    name: 'book-detail',
    props: true
  },{
    path: '/books/:isbn/edit',
    component: BookEdit,
    name: 'book-edit',
    props: true
  }
  ]
})


export default  router;