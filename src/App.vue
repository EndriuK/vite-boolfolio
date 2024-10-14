<script>
// esiste
import AppPosts from './components/AppPosts.vue';

export default {
  components: {
    //lo puoi utilizzare
    AppPosts
  }
}
</script>

  <!-- qua lo utilizzo -->
<template lang="">
  
  <div>

    <AppPosts />

  </div>
</template>
<style lang="scss">
  @import './styles/generals.scss';
</style>