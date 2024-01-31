<template>
  <div>
    <!-- Category List Section -->
    <h2>Category List</h2>
    <q-select v-model="selectedCategory" :options="categoryOptions" label="Select Category"/>

    <!-- Halal & Non-Halal Options Section -->
    <h2>Halal & Non-Halal Options</h2>
    <q-toggle v-model="isHalal" label="Show Halal Only"/>

    <!-- Filtered Restaurants and Food Items Section -->
    <h2>Filtered Restaurants and Food Items</h2>
    <div v-for="(restaurant, index) in filteredRestaurants" :key="index">
      <h3>{{ restaurant.name }}</h3>
      <ul>
        <li v-for="(food, foodIndex) in restaurant.foods" :key="foodIndex">
          {{ food.name }} ({{ food.category }})
        </li>
      </ul>
    </div>
  </div>
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
            // Add more food items with their respective categories and halal status
          ]
        },
        {
          name: 'Restaurant B',
          foods: [
            { name: 'Fried Chicken', category: 'spicy', halal: false },
            { name: 'Fish and Chips', category: 'non-spicy', halal: true }
            // Add more food items with their respective categories and halal status
          ]
        },
        {
        name: 'Restaurant C',
          foods: [
            { name: 'Fried Chicken', category: 'spicy', halal: false },
            { name: 'Fish and Chips', category: 'non-spicy', halal: true }
            // Add more food items with their respective categories and halal status
          ]
        },
        {
        name: 'Restaurant Dcd F',
          foods: [
            { name: 'Fried Chicken', category: 'spicy', halal: false },
            { name: 'Fish and Chips', category: 'non-spicy', halal: true }
            // Add more food items with their respective categories and halal status
          ]
        },
        {
        name: 'Restaurant E',
          foods: [
            { name: 'Fried Chicken', category: 'spicy', halal: false },
            { name: 'Fish and Chips', category: 'non-spicy', halal: true }
            // Add more food items with their respective categories and halal status
          ]
        }
      ]
    }
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
}
</script>
