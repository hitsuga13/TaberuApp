// src/store/globalModule.js
import { defineStore } from 'pinia';


export const globalModule = defineStore('globalModule', {
  state: () => ({
    x:5
  }),
  actions: {
    // Your actions go here
  },
});
