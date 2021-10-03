<template>
  <div>
    <b-container>
      <b-col>
        <Header />
        <post-list :posts="loadData" />
      </b-col>
    </b-container>
  </div>
</template>

<script>
import Header from '@/components/posts/Header'
import postList from '@/components/posts/postList'
export default {
  components: {
    Header,
    postList,
  },
  computed: {
    loadData() {
      return this.$store.getters.getAllPosts
    },
  },
  data() {
    return {
      loadData: [
        {
          id: '1',
          title: 'ທ່ຽວຫຼວງພະບາງ',
          content: 'ຫຼວງພະບາງງາມຫຼາຍ',
          image:
            'https://cdn.pixabay.com/photo/2020/02/25/09/57/road-4878453_1280.jpg',
        },
        {
          id: '2',
          title: 'ທ່ຽວຈຳປາສັກ',
          content: 'ດິນແດນແຫ່ງຟາມ ແລະ ກາເຟ',
          image:
            'https://cdn.pixabay.com/photo/2015/10/31/14/52/sapa-1015835__480.jpg',
        },
        {
          id: '3',
          title: 'ທ່ຽວອະເມລິກາ',
          content: 'ເມືອງທັນສະໃໝ່',
          image:
            'https://cdn.pixabay.com/photo/2016/10/28/13/09/usa-1777986_1280.jpg',
        },
      ],
    }
  },
}
</script>
