<template>
  <q-page class="flex flex-center">
    <q-list bordered>
<template
        v-for="(restaurant, index) in store.wishlist"
        :key="index"
>       <q-item
        clickable
        v-ripple
        >

        <q-item-section avatar>
          <q-icon color="blue" name="verified" />
        </q-item-section>
        <q-item-section>{{ restaurant?.name ?? "Nama Kedai" }}</q-item-section>
        <q-item-section>{{ restaurant?.review ?? "" }}</q-item-section>

        <div class="q-pa-md" style="max-width: 350px"></div>
        <q-item-section side top></q-item-section>
        <q-item-label caption>2 min ago</q-item-label>
        <div class="text-orange">
          <q-icon name="star" />
          <q-icon name="star" />
          <q-icon name="star" />
        </div>
        <q-separator spaced inset />

      </q-item><p>  </p>

      <q-separator></q-separator>
    </template>
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
