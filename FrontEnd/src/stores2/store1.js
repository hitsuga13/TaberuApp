// src/store/filterStore.js
import { defineStore } from 'pinia';

export const useFilterStore = defineStore('filter', {
  state: () => ({
    halalFilter: false,
    nonHalalFilter: false,
    sweetFilter: false,
    lessSweetFilter: false,
    sourFilter: false,
    lessSourFilter: false,
  }),
  actions: {
    toggleHalalFilter() {
      this.halalFilter = !this.halalFilter;
    },
    toggleNonHalalFilter() {
      this.nonHalalFilter = !this.nonHalalFilter;
    },
    toggleSweetFilter() {
      this.sweetFilter = !this.sweetFilter;
    },
    toggleLessSweetFilter() {
      this.lessSweetFilter = !this.lessSweetFilter;
    },
    toggleSourFilter() {
      this.sourFilter = !this.sourFilter;
    },
    toggleLessSourFilter() {
      this.lessSourFilter = !this.lessSourFilter;
    },
    resetFilters() {
      this.halalFilter = false;
      this.nonHalalFilter = false;
      this.sweetFilter = false;
      this.lessSweetFilter = false;
      this.sourFilter = false;
      this.lessSourFilter = false;
    },
  },
});
