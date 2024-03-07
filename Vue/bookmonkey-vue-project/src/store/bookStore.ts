import {defineStore} from "pinia";
import {useAuthStore} from "@/store/auth";
import {computed, ref} from "vue";
import type {Book} from "@/components/Book";


export const useBookStore= defineStore('books', () => {
  const auth= useAuthStore();
  const books= ref<Book[]>([]);
  const isLoaded= ref(false);
  const userInput= ref('');

  const url= computed(() => 'https://bookmonkey-read-only.onrender.com/users/${auth.id}/books')
});