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
