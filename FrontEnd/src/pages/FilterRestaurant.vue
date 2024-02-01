<template>
  <q-page padding>
    <div>
      <!-- Category List Section -->
      <h2 class="text-h6">Category List</h2>
      <q-select
        v-model="selectedCategories"
        :options="store.tags"
        label="Select Category"
        multiple
        use-chips
      />

      <!-- Halal & Non-Halal Options Section -->
      <h2 class="text-h6">Halal & Non-Halal Options</h2>
      <q-toggle v-model="isHalal" label="Show Halal Only" />
    </div>

    <!-- Filter Button -->
    <div class="filter-button">
      <q-btn label="Filter" color="primary" @click="filterRestaurants" />
    </div>
  </q-page>
</template>

<script>
import { globalModule } from "stores/globalmodule";
export default {
  data() {
    return {
      selectedCategories: [],
      isHalal: false,

      restaurants: [
        {
          name: "Restaurant A",
          foods: [
            { name: "Nasi Lemak", category: "spicy", halal: true },
            { name: "Roti Canai", category: "sweet", halal: true },
          ],
        },
        // ... (similar structures for other restaurants)
      ],
    };
  },
  computed: {
    // filteredRestaurants() {
    //   return this.restaurants.filter((restaurant) => {
    //     return restaurant.foods.some((food) => {
    //       // Filter based on selected categories
    //       if (
    //         this.selectedCategories.length &&
    //         !this.selectedCategories.includes(food.category)
    //       ) {
    //         return false;
    //       }
    //       // Filter based on halal status
    //       if (this.isHalal && !food.halal) {
    //         return false;
    //       }
    //       return true;
    //     });
    //   });
    // },
  },
  methods: {
    filterRestaurants() {
      // Navigate to the new page "card_slide"
      this.$router.push({ name: "cardView" });
    },
  },
  setup() {
    const store = globalModule();
    return { store };
  },
};
</script>

<style scoped>
.filter-button {
  margin-top: auto; /* Align the button at the bottom */
}
</style>
