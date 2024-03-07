import {defineStore} from "pinia";
import {ref} from "vue";

export const useAuthStore = defineStore('auth', () => {
      const isAuthentificated= ref(true);
      const username= ref('vuejsde');
      const id= ref(1);

      return{
        isAuthentificated,
        username,
        id
      }
    });