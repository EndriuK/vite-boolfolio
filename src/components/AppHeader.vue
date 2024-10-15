<script>
export default {
    props: {
        menu: Array
    }
}
</script>
<template lang="">
    <header>
        <div class="container-fluid">
            <div class="row">
                <div class="col-12">
                    <div class="text-center">
                        <img src="../../stitch_logo.png" class="logo" />
                    </div>
                </div>
                <div class="col-12">
                    <ul class="list-unstyled d-flex justify-content-center">
                        <li class="mx-2" v-for="item, index in menu" :key="index">
                            <router-link :to="{name: item.name}">{{ item.label }}</router-link>
                        </li>
                        
                    </ul>
                </div>
            </div>
        </div>
    </header>
</template>
<style lang="">
    
</style>