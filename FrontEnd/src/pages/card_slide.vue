<template>
  <div id="app" v-if="store.restaurantlist.length">
    <GameCardsStack
      :cards="store.restaurantlist"
      @cardAccepted="handleCardAccepted"
      @cardRejected="handleCardRejected"
      @cardSkipped="handleCardSkipped"
      @hideCard="removeCardFromDeck"
    />
  </div>
</template>

<script>
import GameCardsStack from "../components/GameCardsStack.vue";
import { globalModule } from "src/stores/globalmodule";

export default {
  components: {
    GameCardsStack,
  },
  setup() {
    const store = globalModule();
    console.log(store);
    return { store };
  },
  data() {
    return {
      visibleCards: [],
    };
  },

  methods: {
    handleCardAccepted(a) {
      console.log("handleCardAccepted", a);
      this.store.addToWishlist(a);
    },
    handleCardRejected() {
      console.log("handleCardRejected");
    },
    handleCardSkipped() {
      console.log("handleCardSkipped");
    },
    removeCardFromDeck() {
      this.visibleCards.shift();
    },
  },
  mounted() {
    this.visibleCards = this.store.restaurantlist;
  },
  created() {
    //this.store.getallrestaurant();
    //  this.store.getallpreferences();
    // this.store.filter();
  },
};
</script>
