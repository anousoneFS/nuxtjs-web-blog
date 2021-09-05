<template>
  <div>
    <b-carousel
      id="carousel-1"
      controls
      indicators
      img-width="400"
      img-height="200"
    >
      <div v-for="item in items" :key="item.caption">
        <b-carousel-slide
          :caption=item.caption
          :text=item.text
          :img-src=item.image
        >
        </b-carousel-slide>
      </div>
    </b-carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          caption: 'first slide',
          image: require('@/assets/img1.jpg'),
          text: 'ທ່ຽວຫຼວງພະບາງ',
        },
        {
          caption: 'second slide',
          image: require('@/assets/img2.jpg'),
          text: 'ທ່ຽວຈຳປາສັກ',
        },
      ],
    }
  },
}
</script>
<style>
.carousel-item img {
  height: 50vh !important ;
  /* width: 50vh !important; */
}
</style>
