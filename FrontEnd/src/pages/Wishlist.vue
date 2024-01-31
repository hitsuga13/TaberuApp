<template>
  <q-page class="flex flex-center">
    <q-list bordered>
      <q-item
        v-for="(restaurant, index) in store.wishlist"
        :key="index"
        clickable
        v-ripple
      >
        <q-item-section avatar>
          <q-icon color="primary" name="bluetooth" />
        </q-item-section>
        <q-item-section>{{ restaurant?.name ?? "Nama Kedai" }}</q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import { globalModule } from "src/stores/globalmodule";
export default {
  setup() {
    const store = globalModule();
    console.log(store);
    // Access state and actions from your store
    // For example: store.state.myProperty, store.actions.myAction()

    return {
      store,
    };
  },
  name: "IndexPage",
};
</script>
