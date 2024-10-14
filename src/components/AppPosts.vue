<script>
import axios from 'axios';

export default {
    name: 'AppPosts',
    data(){
        return {
            posts: [],
            first_page: 1,
            last_page: null,
            current_page: null,
        }
    },
    created(){
        this.getPosts();
    },
    methods: {
        getPosts(){
            axios.get('http://127.0.0.1:8000/api/posts').then((response) => {
                console.log(response.data.results);
                // this.posts = response.data.results; // questo se nel backend abbiamo messo Post::all();
                this.posts = response.data.results.data;
                this.last_page = response.data.results.last_page;
                this.current_page = response.data.results.current_page;
            });
        },
        goToPage(page){
            this.current_page = page;
            axios.get('http://127.0.0.1:8000/api/posts', {params: { page: page}}).then((response) => {
                this.posts = response.data.results.data;
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
                            <img class="card-img-top" :src="post.cover_image.startsWith('http') ? post.cover_image : `http://127.0.0.1:8000/storage/${post.cover_image}`">
                            <div class="card-body">
                                <h3 class="card-title">{{ post.title }}</h3>
                                <p v-if="post.category != null"><strong>Categoria: </strong>{{ post.category.name  }}</p>
                                <ul v-if="post.tags != null" class="list-unstyled d-flex">
                                    <li class="me-2" v-for="tag in post.tags" :key="tag.id">{{ tag.name }}</li>
                                </ul>
                                <p>
                                    {{ post.content.substr(0, 100) + '...' }}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-12">
                <nav aria-label="Page navigation example">
                    <ul class="pagination d-flex justify-content-center">
                      <li class="page-item"><a class="page-link" :class="current_page == 1 ? 'disabled' : ''" href="#" @click="goToPage(current_page - 1)">Precedente</a></li>
                        <li class="page-item" v-for="i in last_page">
                            <!-- <a class="page-link" href="`http://127.0.0.1:8000/api/posts?page=${i}`"> {{ i }} </a> -->
                            <a class="page-link" href="#" @click="goToPage(i)"> {{ i }} </a>
                        </li>
                      <li class="page-item"><a class="page-link" :class="current_page == last_page ? 'disabled' : ''" href="#" @click="goToPage(current_page + 1)">Successiva</a></li>
                    </ul>
                  </nav>
            </div>
        </div>
    </div>
</template>
<style lang="" >
    
</style>