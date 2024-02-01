<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer>
      <q-tabs align="justify" dense active-bg-color="white" active-color="primary">
        <q-tab
          v-for="link in essentialLinks"
          :key="link.title"
          @click="navigateToRoute(link.link)"
          :label="link.title"
        />
      </q-tabs>
    </q-footer>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";

const linksList = [

  {
    title: "Card",
    caption: "@QuasarFramework",
    icon: "public",
    link: "cardView",
  },
  {
    title: "FIlter",
    caption: "Community Quasar projects",
    icon: "favorite",
    link: "filterRestaurant",
  },
  {
    title: "Wishlist",
    caption: "Community Quasar projects",
    icon: "favorite",
    link: "Wishlist",
  },
];

export default defineComponent({
  name: "MainLayout",

  components: {},

  setup() {
    const openLink = (link) => {
      // You can customize this function to handle link navigation as needed
      window.open(link, "_blank");
    };

    return {
      essentialLinks: linksList,
      openLink,
    };
  },
  methods: {
    navigateToRoute(routeName) {
      this.$router.push({ name: routeName });
    },
  },
});
</script>
