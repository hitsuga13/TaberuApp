<!-- src/views/FoodListing.vue -->
<template>
  <div>
    <FoodFilter />
    <q-list>
      <q-item v-for="food in filteredFood" :key="food.id">
        <q-item-section>{{ food.name }} - {{ food.type }} - {{ food.taste }}</q-item-section>
      </q-item>
    </q-list>
  </div>
</template>

<script>
import { ref, computed } from 'vue';
import { useStore } from 'pinia';
import { useFilterStore } from 'src/store/filterStore';

export default {
  components: {
    FoodFilter: () => import('src/components/FoodFilter.vue'),
  },
  setup() {
    const filterStore = useStore(useFilterStore);
    // Letak data makanan kita
    const foodData = [
      { id: 1, name: 'Nasi Lemak', type: 'Halal', taste: 'spicy' },
      { id: 2, name: 'Nasi Lemak Babi', type: 'Non-Halal', taste: 'spicy' },
      // ... more food tambah bawah ni
    ];

    const filteredFood = computed(() => {
      return foodData.filter(food => {
        return (!filterStore.halalFilter || food.type === 'Halal') &&
               (!filterStore.nonHalalFilter || food.type === 'Non-Halal') &&
               (!filterStore.sweetFilter || food.taste === 'Sweet') &&
               (!filterStore.lessSweetFilter || food.taste === 'Less Sweet') &&
               (!filterStore.sourFilter || food.taste === 'Sour') &&
               (!filterStore.lessSourFilter || food.taste === 'Less Sour');
      });
    });

    return {
      filteredFood,
    };
  },
};
</script>
