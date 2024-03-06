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
  link: string;
}

const navigation = ref<NavItem[]>([{
  label: 'Books', link: '/books',
}, {
  label: 'About', link: '/about',
}, {
  label: 'Login', link: '/login'
}])


// 5. Direktiven
import logo from '../assets/img_girl.jpg'
import {computed, reactive, ref} from "vue";

interface BildType {
  url: string,
  titel: string
}

const titel = ref('Girl');


// Warum geht das nicht?
// const img= {
//   src: abc,
//   alt: "Frau",
//   width: 150
// };


const isVisible = ref(true);




// v-for
const items = ref([{message: 'Foo'}, {message: 'Bar'}]);

const applicationName = ref('Bookmonkey API');
const transformedApplicationName = computed(() => applicationName.value.toLowerCase())

</script>


<template>
    <b>{{ applicationName.toUpperCase()}}</b>
    <br>
    <b>{{ transformedApplicationName}}</b>
  <!--  <h1>{{ msg }}</h1>-->
  <br>
  <img v-bind:src="logo" :alt="titel" width="100" height="200">

  <ul>
    <li><a href="#">{{ navigation[0].label }}</a></li>
    <li><a href="#">{{ navigation[1].label }}</a></li>
    <li><a href="#" role="button">{{ navigation[2].label }}</a></li>
  </ul>
  <ul>
    <li v-for="item in items" :key="item.message">
      {{ item.message }}
    </li>
  </ul>

  <h1 v-if="isVisible">Hello there</h1>
</template>


