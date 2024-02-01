<template>
  <router-view />
</template>

<script>
import { defineComponent } from 'vue'
import { globalModule } from "src/stores/globalmodule";

export default defineComponent({
    setup() {
    const store = globalModule();
    console.log(store);
    return { store };
  },
created(){
    this.store.getallrestaurant();
  
 this.store.getallpreferences();
//  this.store.filter();
  
  },
  name: 'App'
})
</script>
