<template>
  <div>
    <b-row class="py-2">
        <postContent
           v-for="post in posts" :key="post.id"
          :id=post.id
          :title=post.title
          :content=post.content
          :image=post.image
          :isAdmin="isAdmin"
        />
    </b-row>
  </div>
</template>

<script>
import postContent from '@/components/posts/postContent'
export default {
  components: {
    postContent,
  },
  props: {
    isAdmin: {
      type: Boolean,
      default: false,
    },
    posts: {
      type: Array,
      requried: true,
    },
  },
}
</script>
