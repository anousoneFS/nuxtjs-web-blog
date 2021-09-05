
<template>
  <div>
    <admin-form @sendData="onSubmitted" :post="singlePost"/>
  </div>
</template>

<script>
import AdminForm from '@/components/admin/AdminForm.vue'
import axios from 'axios'
export default {
  components: {
    AdminForm,
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
  methods: {
    onSubmitted(postData) {
      this.$store.dispatch("editPost", postData).then(()=>{
        this.$router.push("/admin/posts");
      });
    },
  },
}
</script>
