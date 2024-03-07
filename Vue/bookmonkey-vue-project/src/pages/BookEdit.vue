<script setup lang="ts">


import {onMounted, ref, watch} from "vue";
import type {Book} from "@/components/Book";
import { required, minLength } from '../utils/validation'


type BookEditFields = keyof Pick<Book, 'title' | 'abstract' | 'author'>
type FormErrors = Record<BookEditFields, string>


const {isbn} = defineProps<{
  isbn: string
}>()

const book = ref<Book | null>(null)
const isLoaded = ref(false)
const errors = ref<FormErrors>({
  title: '',
  author: '',
  abstract: ''
})

async function fetchBook(isbn: string) {
  book.value = null;
  isLoaded.value = false;

  const response = await fetch(`https://bookmonkey-read-only.onrender.com/books/${isbn}`)
  const maybeBook = await response.json() as Book

  if (response.status === 200) {
    book.value = maybeBook
  }

  isLoaded.value = true

  validateTitle()
}

onMounted(() => fetchBook(isbn as string))
watch(() => isbn, (newIsbn) => fetchBook(newIsbn as string))


function validateTitle() {
  if (!required(book.value?.title ?? "")) {
    errors.value.title = "Title is required.";
  } else if (!minLength(book.value?.title ?? "", 5)) {
    errors.value.title = "The title must be at least 5 characters long.";
  } else {
    errors.value.title = "";
  }
}

function submit() {
  if ((Object.keys(errors.value)).some(
      (val) => errors.value[val as BookEditFields] !== ""
  )) {
    console.log('Invalid form')
  } else {
    fetch(
        new Request(`https://bookmonkey-read-only.onrender.com/books/${isbn}`,
            {
              method: 'PUT',
              body: JSON.stringify(book.value),
              headers: {
                "Content-Type": "application/json",
              }
            }
        )
    )
  }
}

</script>

<template>
  <template v-if="isLoaded">
    <form v-if="book">
      <label for="title">Title</label>
      <input type="text"
             id="title"
             name="title"
             placeholder="Book Title"
             v-model.lazy.trim="book.title"
             @change="validateTitle"
             :aria-invalid="errors.title.length > 0">
      <small v-if="errors.title">{{ errors.title }}</small>


      <label for="abstract">Abstract</label>
      <input type="text" id="abstract" name="abstract" placeholder="Abstract" v-model.lazy.trim="book.abstract">


      <label for="author">Author</label>
      <input type="text" id="author" name="author" placeholder="Abstract" v-model.lazy.trim="book.author">

      <button type="submit">Submit</button>

    </form>
    <span v-else>
      We couldn't find any book with the ISBN <strong>{{ isbn }}</strong>
    </span>
  </template>
</template>

<style scoped>

</style>