<script>
// esiste

import { store } from "./store.js";
import AppHeader from './components/AppHeader.vue';


export default {
  components: {
    //lo puoi utilizzare
    
    AppHeader
  },
  data(){
    return {
      store
    }
  }
}
</script>

  <!-- qua lo utilizzo -->
<template lang="">
  
  <div>

    <AppHeader :menu="store.menuItems" />
    <router-view></router-view>

  </div>
</template>
<style lang="scss">
  @use './styles/generals.scss';
</style>