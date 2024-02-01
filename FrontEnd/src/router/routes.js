const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        name: "main",
        component: () => import("pages/IndexPage.vue"),
      },
      {
        path: "/card_slide",
        name: "cardView",
        component: () => import("pages/card_slide.vue"),
      },
      {
        path: "/FilterRestaurant",
        name: "filterRestaurant",
        component: () => import("pages/FilterRestaurant.vue"),
      },
      {
        path: "/Wishlist",
        name: "Wishlist",
        component: () => import("pages/Wishlist.vue"),
      },
      {
        path: "/Food_Filter",
        name: "Food_Filter",
        component: () => import("pages/Food_Filter.vue"),
      },
      {
        path: "/Food_Listing",
        name: "Food_Listing",
        component: () => import("pages/Food_Listing.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
