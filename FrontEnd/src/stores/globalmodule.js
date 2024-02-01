// src/store/globalModule.js
import { defineStore } from "pinia";

const tags = [
  { name: "spicy" },
  { name: "sweet" },
  { name: "halal" },
  { name: "non-halal" },
];
const EX_Restaurant = {
  name: "Kedai Pak Abu",
  menuitems: [
    {
      name: "nasi lemak",
      review : "Pak Abu nya sedap sekali",
      tags: [tags[0]],
    },
  ],
  review:[]
};
const EX_Restaurant2 = {
  name: "kedai Bak Kut Teh",
  menuitems: [
    {
      name: "nasi lemak Babi",
      review:"Babinya sedap dan lazat sekali ",
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
