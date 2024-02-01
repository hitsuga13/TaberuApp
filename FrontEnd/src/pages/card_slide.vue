<template>
  <div id="app" class="justify-center">
    <GameCardsStack
      :cards="cardlist"
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
      visibleCards: ["Test", "Hehe", "Webpack"]
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
};
</script>
