<!-- src/components/FoodFilter.vue -->
<template>
  <div>
    <q-checkbox v-model="halalFilter" label="Halal"></q-checkbox>
    <q-checkbox v-model="nonHalalFilter" label="Non-Halal"></q-checkbox>
    <q-checkbox v-model="sweetFilter" label="Sweet"></q-checkbox>
    <q-checkbox v-model="lessSweetFilter" label="Less Sweet"></q-checkbox>
    <q-checkbox v-model="sourFilter" label="Sour"></q-checkbox>
    <q-checkbox v-model="lessSourFilter" label="Less Sour"></q-checkbox>
    <q-btn @click="applyFilters">Apply Filters</q-btn>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useStore } from 'pinia';
import { useFilterStore } from 'src/store/filterStore';

export default {
  setup() {
    const filterStore = useStore(useFilterStore);
    const halalFilter = ref(filterStore.halalFilter);
    const nonHalalFilter = ref(filterStore.nonHalalFilter);
    const sweetFilter = ref(filterStore.sweetFilter);
    const lessSweetFilter = ref(filterStore.lessSweetFilter);
    const sourFilter = ref(filterStore.sourFilter);
    const lessSourFilter = ref(filterStore.lessSourFilter);

    const applyFilters = () => {
      filterStore.halalFilter = halalFilter.value;
      filterStore.nonHalalFilter = nonHalalFilter.value;
      filterStore.sweetFilter = sweetFilter.value;
      filterStore.lessSweetFilter = lessSweetFilter.value;
      filterStore.sourFilter = sourFilter.value;
      filterStore.lessSourFilter = lessSourFilter.value;
    };

    return {
      halalFilter,
      nonHalalFilter,
      sweetFilter,
      lessSweetFilter,
      sourFilter,
      lessSourFilter,
      applyFilters,
    };
  },
};
</script>
