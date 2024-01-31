<template>
  <q-page class="flex flex-center">asdasd
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
