<script>
// esiste

import AppHeader from './components/AppHeader.vue';
import AppPosts from './components/AppPosts.vue';


export default {
  components: {
    //lo puoi utilizzare
    
    AppHeader,
    AppPosts,
  }
}
</script>

  <!-- qua lo utilizzo -->
<template lang="">
  
  <div>

    <AppHeader />
    <AppPosts />

  </div>
</template>
<style lang="scss">
  @import './styles/generals.scss';
</style>