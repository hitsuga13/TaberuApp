// src/store/globalModule.js
import { defineStore } from "pinia";
import { api } from "../boot/axios"
const tags = [

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
  review: [
    {
      review: "Sedap",
    }
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

export const globalModule = defineStore("globalModule", {
  state: () => ({
    restaurantlist: [],
    preferences: [],
    wishlist: [EX_Restaurant],
    filteredRestaurant: [],
    tags: [],
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

        this.tags = res.data;
      })

    },
    filter(id = [2]) {
      api.post("restaurants/bypreferences", { preferencesIds: id }).then((res) => {
        console.log(res)
        this.restaurantlist = res.data.restaurants;
      })
    },
  }
});
