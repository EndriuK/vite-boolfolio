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
            axios.get(`${baseURL}/posts/${this.$route.params.slug}`).then((res) => {
                console.log(res);
            })
        }
    },
    created(){
        this.getSinglePost();
    }
}
</script>
<template lang="">
    <div>
        
    </div>
</template>
<style lang="">
    
</style>