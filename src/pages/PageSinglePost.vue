<script>
import axios from 'axios';
import { store } from "../store.js";


export default {
    data(){
        return{
            store,
            post: null,
        }
    },
    methods: {
        getSinglePost(){
            console.log(this.$route);
            axios.get(`${store.baseURL}/posts/${this.$route.params.slug}`).then((res) => {
                this.post = res.data.result;
            })
        }
    },
    created(){
        this.getSinglePost();
    }
}
</script>
<template lang="">
    <div class="my-5" v-if="post">
        <div class="container">
            <div class="row"> 
                <div class="col-12 col-md-6 col-lg-4">
                    <img class="img-fluid" :src="post.cover_image.startsWith('http') ? post.cover_image : `http://127.0.0.1:8000/storage/${post.cover_image}`">
                </div> 
                <div class="col-12 col-md-6 col-lg-4">
                    <div class="ms-2">
                        <h2 class="mb-3">{{ post.title }}</h2>
                        <p class="mb-3"><strong>Categoria</strong>: {{ post.category.name ? post.category.name : 'nessuna categoria' }}</p>
                        <div v-if="post.tags.length > 0">  
                            <div class="d-flex">
                                <strong>Tag</strong>: 
                                <ul class="ms-2 list-unstyled">
                                    <li class="me-2 d-inline-block" v-for="tag in post.tags">{{ tag.name }}</li>
                                </ul>
                            </div>
                        </div>
                        <div v-else>
                            Nessun Tag per il post
                        </div>
                    </div>
                </div>
                <div class="col-12 col-lg-4">
                    <p class="mt-3">{{ post.content }}</p>
                </div>
            </div>
        </div>
    </div>
    <div v-else>
        <p>Caricamento in corso...</p>
    </div>
</template>

<style lang="">
    
</style>