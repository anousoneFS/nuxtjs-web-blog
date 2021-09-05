<template>
  <b-col md="3">
    <b-card
      :title="title"
      :img-src="image"
      img-alt="Image"
      img-top
      tag="article"
      style="max-width: 20rem"
      class="mb-2"
    >
      <b-card-text>
        {{ content.slice(0, 100) + '...' }}
      </b-card-text>

      <b-row>
        <nuxt-link :to="postPath" class="btn btn-success">
          {{ isAdmin ? 'ແກ້ໄຂບົດຄວາມ' : 'ອ່ານບົດຄວາມ' }}
        </nuxt-link>
        <nuxt-link v-if="isAdmin" :to="deletePath" class="btn btn-primary ml-4">
          ລຶບບົດຄວາມ
        </nuxt-link>
      </b-row>
    </b-card>
  </b-col>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      requried: true,
    },
    image: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      required: true,
    },
  },
  computed: {
    postPath() {
      return this.isAdmin ? '/admin/posts/' + this.id : '/posts/' + this.id
    },
    deletePath() {
      return '/admin/delete/' + this.id;
    }
  },
}
</script>
