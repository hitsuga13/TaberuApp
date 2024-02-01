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

export default {
  components: {
    GameCardsStack
  },

  data() {
    return {
      visibleCards: ["Test", "Hehe", "Webpack", "hello", "abu", "ahmad", "kasim", "ali"],
      cardlist:[{name:"kuih", src: "/img/cabage1.jpg"} , {name:"kuih2", src: "/img/cabage1.jpg"}]
    };
  },

  methods: {
    handleCardAccepted() {
      console.log("handleCardAccepted");
    },
    handleCardRejected() {
      console.log("handleCardRejected");
    },
    handleCardSkipped() {
      console.log("handleCardSkipped");
    },
    removeCardFromDeck() {
      this.visibleCards.shift();
    }
  }
};
</script>
