// src/store/globalModule.js
import { defineStore } from "pinia";

const tags = [
  { name: "spicy" },
  { name: "sweet" },
  { name: "halal" },
  { name: "non-halal" },
];
const EX_Restaurant = {
  name: "kedai pak abu",
  menuitems: [
    {
      name: "nasi lemak",
      tags: [tags[0]],
    },
  ],
};
const EX_Restaurant2 = {
  name: "kedai Bak Kut TEh",
  menuitems: [
    {
      name: "nasi lemak Babi",
      tags: [tags[0]],
    },
  ],
};

export const globalModule = defineStore("globalModule", {
  state: () => ({
    restaurantlist: [EX_Restaurant, EX_Restaurant2],
    preferences: [tags[1]],
    wishlist: [EX_Restaurant],
  }),
  actions: {
    async addToWishlist(item) {
      this.wishlist.push({ ...item });
    },
  },
});
