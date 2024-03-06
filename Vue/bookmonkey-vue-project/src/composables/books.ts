import {onMounted, ref, watch} from "vue";
import type {Book} from "@/components/Book";

export function useBooks(url:String) {

  const books = ref<Book[]>([]);
  const isLoaded= ref(false);

//const filteredBooks = computed(() => books.value.filter((book) => book.title.includes(userInput.value)))
  const userInput = ref('');


  async function filterBooks(value: string) {
    isLoaded.value= false
    books.value = []

    // q --> Full Text search
    const response = await fetch(`http://localhost:4730/books?q=${value}`)
    books.value = await response.json() as Book[]
    isLoaded.value= true
  }

  async function getBooks() {
    const response = await fetch('http://localhost:4730/books?_start=0&_end=50')
    books.value = await response.json() as Book[]
  }

  onMounted(() => {
    getBooks()
  })

  watch(userInput, (newValue) => {
    filterBooks(newValue)
  })


  return {
    books,
    isLoaded,
    userInput
  }
}