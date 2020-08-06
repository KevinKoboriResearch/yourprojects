<template>
<div>
  <Carousel1/>
   <v-parallax :src="require('@/assets/img/home/1.jpeg')"></v-parallax>
   <Carousel2/>
</div>
</template>

<script>
import Carousel1 from '~/components/carousels/Carousel1.vue'
import Carousel2 from '~/components/carousels/Carousel2.vue'

export default {
  components: {
    Carousel1,
    Carousel2
  }
}
</script>
