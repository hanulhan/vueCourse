
import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import {createPinia} from "pinia";

const app= createApp(App)

//app.$.appContext.
//console.log(app);

const store= createPinia()

app.use(router)
app.use(store)
app.mount('#app')
