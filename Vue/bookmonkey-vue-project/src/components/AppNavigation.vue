<script setup lang="ts">
// import {type Ref, ref} from "vue";


// 3. Reaktivität
// const applicationName = "My Message";
// const msg= new ref(1);
// const counter= ref(0);
// console.log(counter);
// console.log(counter.value);


// 4. Use reactive state
// interface StateType {
//   applicationName: string;
//   navigation : [{
//     label: string;
//     link: string;
//   }]
// }
//
// // Navigation als eigenes interface
// // und dann in .ts file auslagern --> ordner Types --> import type
// const state:StateType= reactive({
//   applicationName: "Bookstore",
//
//   navigation:  [{
//     label: "Label1",
//     link: "Link1"
//   },
//     {
//       label: "Label1",
//       link: "Link1"
//     }
//   ]
// });

type NavItem = {
  label: string;
  routeName : string;
}

const navigation = ref<NavItem[]>([{
  label: 'Books', routeName : 'home',
}, {
  label: 'About', routeName : 'about',
}])


// 5. Direktiven
import logo from '../assets/img_girl.jpg'
import {computed,  ref} from "vue";

const titel = ref('Girl');


// Warum geht das nicht?
// const img= {
//   src: abc,
//   alt: "Frau",
//   width: 150
// };


const isVisible = ref(true);


const applicationName = ref('Bookmonkey API');
const transformedApplicationName = computed(() => applicationName.value.toLowerCase())

</script>


<template>
    <b>{{ applicationName.toUpperCase()}}</b>
    <br>
    <b>{{ transformedApplicationName}}</b>
  <br>
  <img v-bind:src="logo" :alt="titel" width="100" height="200">

  <ul>
    <li v-for="item in navigation" :key="item.routeName">
      <RouterLink :to="{ name: item.routeName }" exact-active-class="is-active">{{ item.label }}</RouterLink>
    </li>
  </ul>

  <h1 v-if="isVisible">Hello there</h1>
</template>

<style>
.is-active {
  color: white;
  background-color: var(--primary);
  padding: var(--form-element-spacing-vertical) var(--form-element-spacing-horizontal);
  border-radius: var(--border-radius);
}
</style>
