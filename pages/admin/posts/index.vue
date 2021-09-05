<template>
  <div>
    <post-list isAdmin :posts="loadPost"/>
  </div>
</template>

<script>
import postList from '@/components/posts/postList.vue'
export default {
  components: {
    postList,
  },
  computed:{
      loadPost(){
          return this.$store.getters.getAllPosts;
      }
  }
}
</script>
