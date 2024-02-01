<template>
  <div class="cards" v-if="cards.length">
    <GameCard
      v-for="(card, index) in cards"
      :key="card"
      :card="card"
      :is-current="index === 0"
      @cardAccepted="$emit('cardAccepted', card)"
      @cardRejected="$emit('cardRejected', card)"
      @cardSkipped="$emit('cardSkipped', card)"
      @hideCard="$emit('hideCard', card)"
    />
  </div>
  <div v-else>
    <q-card class="full-height full-width">
      <q-card-section>
        <div class="text-h6">You swiped all the restaurant!</div>
        <div class="text-subtitle2">No more restaurant for you</div>
      </q-card-section>
      <q-card-section>
        <a href="https://www.google.com/search?q=Gym+Around+Me">CLick Me Instead!</a>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
import GameCard from "./GameCard.vue";

export default {
  components: {
    GameCard,
  },

  props: {
    cards: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.cards {
  position: relative;
  display: flex;
  margin: 50px;
  width: auto;
}
</style>
