// src/store/globalModule.js
import { defineStore } from "pinia";

const tags = [
  { label: "Spicy", value: "spicy" },
  { label: "Non Spicy", value: "non-spicy" },

  { label: "Sweet", value: "sweet" },
  { label: "Less Sweet", value: "less-sweet" },

  { label: "Halal", value: "halal" },
  { label: "Non-Halal", value: "non-halal" },

  { label: "Sour", value: "sour" },
  { label: "Less Sour", value: "less-sour" },
];
const EX_Restaurant = {
  name: "Kedai Pak Abu",
  menuitems: [
    {
      name: "Nasi Lemak",
      tags: [{ ...tags[0] }, { ...tags[2] }],
    },
  ],
};
const EX_Restaurant2 = {
  name: "Kedai Bak Kut Teh",
  menuitems: [
    {
      name: "nasi lemak Babi",
      tags: [{ ...tags[0] }, { ...tags[3] }],
    },
  ],
};

export const globalModule = defineStore("globalModule", {
  state: () => ({
    restaurantlist: [EX_Restaurant, EX_Restaurant2],
    preferences: [tags[1]],
    wishlist: [EX_Restaurant],
    filteredRestaurant: [],
    tags: [...tags],
  }),
  actions: {
    async addToWishlist(item) {
      this.wishlist.push({ ...item });
    },
    filterFn(tags) {
      console.log(tags);
    },
  },
});
