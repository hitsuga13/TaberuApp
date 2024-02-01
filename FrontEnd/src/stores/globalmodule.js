// src/store/globalModule.js
import { defineStore } from "pinia";

const tags = [
  { name: "spicy" , color: "red", textcolor:"white"},
  { name: "sweet" },
  { name: "halal" },
  { name: "non-halal", color: "red" ,textcolor:"white"},
];
const EX_Restaurant = {
  name: "kedai pak abu",
  src: "/img/restaurant 1.jpg",
  menuitems: [
    {
      name: "nasi lemak",
      tags: [tags[1], tags[2]],
    },
  ],
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
const EX_Restaurant3 = {
  name: "Restaurant 3",
  src: "/img/restaurant 3.jpg",
  menuitems: [
    {
      name: "roti canai",
      tags: [tags[0], tags[2]],
    },
  ],
};

export const globalModule = defineStore("globalModule", {
  state: () => ({
    restaurantlist: [EX_Restaurant, EX_Restaurant2, EX_Restaurant3],
    preferences: [tags[1]],
    wishlist: [EX_Restaurant],
  }),
  actions: {
    async addToWishlist(item) {
      this.wishlist.push({ ...item });
    },
  },
});
