<script setup lang="ts">
import BookListItem from '../components/BookListItem.vue'
import { useBooks } from '../composables/books';
import "vue-picocss/css/pico.min.css"

const { books, userInput } = useBooks('https://bookmonkey-read-only.onrender.com/books')

function readBook(index: number) {
  books.value[index] = {
    ...books.value[index],
    read: !books.value[index]?.read ?? false,
  }
}
</script>

<template>
  <form>
    <label for="search">Search</label>
    <input type="search" id="search" name="search" placeholder="Book title" v-model="userInput">
  </form>
  <table role="grid">
    <thead>
    <tr>
      <th scope="col">ISBN</th>
      <th scope="col">Title</th>
      <th scope="col">Pages</th>
      <th scope="col">Cover</th>
      <th scope="col">Read?</th>
    </tr>
    </thead>
    <tbody>
    <BookListItem v-for="(book, index) in books" :key="book.isbn" v-bind="book" @read="readBook(index)" />
    </tbody>
  </table>
</template>