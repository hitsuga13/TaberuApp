// src/store/globalModule.js
import { defineStore } from "pinia";
import { api } from "../boot/axios"
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
    restaurantlist: [],
    preferences: [tags[1]],
    wishlist: [EX_Restaurant],
  }),
  actions: {
    async addToWishlist(item) {
      this.wishlist.push({ ...item });
    },
    getallrestaurant() {
      api.get("restaurants").then((res) => {

        this.restaurantlist = res.data;
      })

    },
    getallpreferences() {
      api.get("preferences").then((res) => {

        this.preferenceslist = res.data;
      })

    },
    filter(id = [2]) {
      api.post("restaurants/bypreferences", { preferencesIds: id }).then((res) => {
        console.log(res)
        this.restaurantlist = res.data;
      })
    },
  }


});
