<template>
  <div>
    <admin-form @sendData="onSubmitted" />
  </div>
</template>

<script>
import AdminForm from '@/components/admin/AdminForm.vue'
import axios from 'axios'
export default {
  components: {
    AdminForm,
  },
  methods: {
    onSubmitted(postData) {
      this.$store.dispatch("addPost", postData).then(()=>{
        this.$router.push("/admin/posts");
      });
    },
  },
}
</script>
