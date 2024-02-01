<template>
  <q-page padding class="q-mb-md">
    <!-- Category List Section -->
    <h2 class="text-h6">Category List</h2>
    <q-checkbox v-model="selectedCategories" :options="categoryOptions" color="primary"/>

    <!-- Halal & Non-Halal Options Section -->
    <h2 class="text-h6 q-mt-md">Halal & Non-Halal Options</h2>
    <q-toggle v-model="isHalal" label="Show Halal Only" color="primary"/>

    <!-- Filtered Restaurants and Food Items Section -->
    <h2 class="text-h6 q-mt-md">Filtered Restaurants and Food Items</h2>
    <q-list bordered>
      <q-item clickable v-for="(restaurant, index) in filteredRestaurants" :key="index" @click="showRestaurantDetails(restaurant)">
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
  // ... (rest of the code remains unchanged)
};
</script>

<style scoped>
/* Add your custom styles here */
.q-mt-md {
  margin-top: 16px;
}

.q-mb-md {
  margin-bottom: 16px;
}
</style>
