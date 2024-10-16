<script>
export default {
    name: "SinglePost",
    props: {
        post: Object
    },
    
}
</script>
<template lang="">
    <div class="col-4">
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
                    <router-link class="text-decoration-none" :to="{name: 'single-post', params: {slug: post.slug} }">
                        <button class="btn btn-primary">Leggi di più</button>
                    </router-link>
                </div>
            </div>
    </div>
</template>
<style lang="scss">
    
</style>