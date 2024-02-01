// src/store/globalModule.js
import { defineStore } from "pinia";

const tags = [
  { name: "spicy" , color: "red", textcolor: "white"},
  { name: "sweet" },
  { name: "halal" , color: "red", textcolor: "white"},
  { name: "non-halal" },
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
  src: "/img/restaurant 1.jpg",
  menuitems: [
    {
      name: "nasi lemak",
      review: "Pak Abu nya sedap sekali",
      tags: [{ ...tags[0] }, { ...tags[2] }],
    },
  ],
  review: [],
};
const EX_Restaurant2 = {
  name: "kedai Bak Kut TEh",
  src: "/img/restaurant 2.jpg",
  menuitems: [
    {
      name: "nasi lemak Babi",
      tags: [tags[0], tags[3]],
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
  },
});
