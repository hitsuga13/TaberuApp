<template>
  <q-page padding>
    <!-- Category List Section -->
    <h2 class="text-h6">Category List</h2>
    <q-select v-model="selectedCategory" :options="categoryOptions" label="Select Category"/>

    <!-- Halal & Non-Halal Options Section -->
    <h2 class="text-h6">Halal & Non-Halal Options</h2>
    <q-toggle v-model="isHalal" label="Show Halal Only"/>

    <!-- Filtered Restaurants and Food Items Section -->
    <h2 class="text-h6">Filtered Restaurants and Food Items</h2>
    <q-list bordered>
      <q-item v-for="(restaurant, index) in filteredRestaurants" :key="index">
        <q-item-section>
          <q-item-label>{{ restaurant.name }}</q-item-label>
          <q-list dense>
            <q-item v-for="(food, foodIndex) in restaurant.foods" :key="foodIndex">
              <q-item-section>
                {{ food.name }} ({{ food.category }})
              </q-item-section>
            </q-item>
          </q-list>
        </q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      selectedCategory: null,
      isHalal: false,
      categoryOptions: [
        { label: 'Spicy/Non Spicy', value: 'spicy' },
        { label: 'Halal/Non Halal', value: 'halal' },
        { label: 'Sweet/Less Sweet', value: 'sweet' },
        { label: 'Sour/Less Sour', value: 'sour' }
      ],
      restaurants: [
        {
          name: 'Restaurant A',
          foods: [
            { name: 'Nasi Lemak', category: 'spicy', halal: true },
            { name: 'Roti Canai', category: 'sweet', halal: true }
          ]
        },
        // ... (similar structures for other restaurants)
      ]
    };
  },
  computed: {
    filteredRestaurants() {
      return this.restaurants.filter(restaurant => {
        return restaurant.foods.some(food => {
          // Filter based on selected category
          if (this.selectedCategory && food.category !== this.selectedCategory) {
            return false;
          }
          // Filter based on halal status
          if (this.isHalal && !food.halal) {
            return false;
          }
          return true;
        });
      });
    }
  }
};
</script>
