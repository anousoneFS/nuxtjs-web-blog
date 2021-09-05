<template>
  <b-container fluid="md" class="py-2">
    <h2 align="center">create blog post</h2>
    <b-form @submit.prevent="onSubmit" @reset="onReset">
      <b-form-group label="ຊື່ບົດຄວາມ">
        <b-form-input type="text" placeholder="ໃສ່ຊື່ບົດຄວາມ" v-model="form.title"></b-form-input>
      </b-form-group>
      <b-form-group label="ລາຍລະອຽດບົດຄວາມ">
        <b-form-textarea rows="8" placeholder="ລາຍລະອຽດບົດຄວາມ" v-model="form.content">
        </b-form-textarea>
      </b-form-group>
      <b-form-group label="ໃສ່ຮູບພາບ(URL)">
        <b-form-input type="text" placeholder="ໃສ່ຮູບພາບ(URL)" v-model="form.image"></b-form-input>
      </b-form-group>
      <b-form-group label="ຊື່ຜູ້ຂຽນ">
        <b-form-input type="text" placeholder="ຊື່ຜູ້ຂຽນ" v-model="form.author"></b-form-input>
      </b-form-group>
      <b-button type="submit" variant="primary">submit</b-button>
      <b-button type="reset" variant="danger">clear</b-button>
    </b-form>
  </b-container>
</template>

<script>
export default {
    data(){
        return {
          // this.post have id if edit section
            form: this.post ? {...this.post} : 
            {
                title:"",
                content:"",
                image:"",
                author:""
            }
        }
    },
    props:{
      post:{
        type:Object,
        required: false
      }
    },
    methods:{
        onSubmit(evt){
            evt.preventDefault();
            this.$emit('sendData', this.form);
            // this.$router.push("/admin/posts");
        },
        onReset(evt){
            evt.preventDefault();
            this.form.title = "";
            this.form.content = "";
            this.form.image = "";
            this.form.author = "";
        }
    }
}
</script>
