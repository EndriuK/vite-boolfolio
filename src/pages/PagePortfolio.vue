<!-- <script>
export default {
    
}
</script>
<template lang="">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <h1 class="text-center my-5">Portofolio</h1>
            </div>
        </div>
    </div>
</template>
<style lang="">
    
</style> -->

<script>
import axios from 'axios';

export default {
  data() {
    return {
      repos: [],
      error: null
    };
  },
  mounted() {
    this.fetchRepos();
  },
  methods: {
    async fetchRepos() {
      try {
        const response = await axios.get('https://api.github.com/users/EndriuK/repos');
        this.repos = response.data;
      } catch (error) {
        this.error = 'Errore nel caricamento dei progetti.';
      }
    }
  }
};
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <h1 class="text-center my-5">Portfolio</h1>
      </div>
    </div>
    
    <div v-if="error" class="alert alert-danger">
      {{ error }}
    </div>

    <div class="row gy-4" v-if="repos.length">
      <div class="col-md-4" v-for="repo in repos" :key="repo.id">
        <div class="card mb-4 shadow-sm">
          <div class="card-body">
            <h5 class="card-title">{{ repo.name }}</h5>
            <p class="card-text">{{ repo.description || 'Nessuna descrizione disponibile.' }}</p>
            <a :href="repo.html_url" target="_blank" class="btn btn-primary">Vai al progetto</a>
          </div>
        </div>
      </div>
    </div>
    
    <div v-else class="text-center">
      <p>Caricamento progetti in corso...</p>
    </div>
  </div>
</template>

<style scoped>
.card {
  height: 100%;
}
</style>
