<script setup lang="ts">


// Besser mit Omit Properties aus
// const props = defineProps({
//   title: {
//     type: String,
//     required: true
//   },
//   isbn: {
//     type: String,
//     required: true
//   },
//   numPages: Number
// })
type Props = {
  title: string;
  isbn: string;
  numPages?: number;
  cover?: string;
}

defineProps<Props>()


</script>

<template>
  <tr>
    <td>{{ isbn }}</td>
    <td>{{ title }}</td>
    <td>{{ numPages }}</td>
    <td><img :src="cover" width="100" /></td>
  </tr>
</template>
