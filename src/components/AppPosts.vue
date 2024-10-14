<script>
import axios from 'axios';

export default {
    name: 'AppPosts',
    data(){
        return {
            posts: []
        }
    },
    created(){
        this.getPosts();
    },
    methods: {
        getPosts(){
            axios.get('http://127.0.0.1:8000/api/posts').then((response) => {
                this.posts = response.data.results;
            });
        }
    }
}
</script>
<template lang="">
    <div class="container">
        <div class="row gy-3">
            <div class="col-12">
                <h1 class="text-center">Elenco dei posts</h1>
            </div>
            <div class="col-12">
                <div class="row">
                    <div class="col-4" v-for="post in posts" :key="post.id">
                        <div class="card">
                            <img class="card-img-top" :src="post.cover_image.startsWith('http') ?post.cover_image : `http://127.0.0.1:8000/storage/${post.cover_image}`">
                            <div class="card-body">
                                <h3 class="card-title">{{ post.title }}</h3>
                                <p>
                                    {{ post.content }}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="" >
    
</style>