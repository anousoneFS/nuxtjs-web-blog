
<template>
  <div>
    <singlePost  :post="singlePost"/>
  </div>
</template>

<script>
import singlePost from '@/components/posts/singlePost'
import axios from 'axios'
export default {
  components: {
    singlePost,
  },
  asyncData(context){
        return axios
          .get(
            'https://nuxt-web-blog-1b8de-default-rtdb.firebaseio.com/post/'+context.params.id+'.json'
          )
          .then((res) => {
            return {singlePost:{...res.data,id:context.params.id}}
          });
  },
}
</script>
