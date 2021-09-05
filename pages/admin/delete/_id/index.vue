<template>
    <b-container class="mt-5">
        <h2>are you sure you want to delete it !!!</h2>
        <b-button @click="deleteBlogPost" class="btn btn-success mr-5">delete it</b-button>
        <nuxt-link to="/admin/posts" class="btn btn-primary">go back</nuxt-link>
    </b-container>
</template>

<script>
import axios from 'axios';
export default {
    methods:{
        deleteBlogPost(){
            this.$store.dispatch("deletePost", this.$route.params.id);
            this.$router.push("/admin/posts");
        }
    }
}
</script>